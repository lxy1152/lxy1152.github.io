---
title: 🙋‍♂️ Redis 底层实现
---

## Redis 是如何实现字符串的？<Badge text="重点" type="error"/>

SDS（Simple Dynamic String）简单动态字符串是 Redis 底层实现的一种可修改字符串。类似于 Java 中的 `ArrayList`，它采用预分配冗余空间的方式来减少内存的频繁分配。SDS 比 C 语言的字符串多了一个 `SDSHDR` 表头，里面存放 `free`（空闲长度）、`len`（已使用长度）、`buf`（真正保存的那个字符串）。源码中提供的 `sds` 类型实际上是 `char *` 的别名，它真正指向的是 buf 数组。

优点：

- 获取字符串长度更快：C 语言获取字符串长度需要遍历整个字符串，时间复杂度为 $O(N)$，SDS 的表头 `len` 成员存放了当前已使用长度，获取字符串长度复杂度为 $O(1)$
- 杜绝缓冲区溢出：C 语言字符串本身不记录自身长度和空闲空间，容易造成缓冲区溢出，SDS 表头的 `free` 成员存放了空闲空间，拼接字符串前会先通过 `free` 字段检测剩余空间是否能满足，如果空间不够就会扩容
- 减少内存分配次数：C 语言对字符串进行增长或缩短操作，都需要重新分配内存，SDS 使用了空间预分配和惰性空间释放策略，减少了内存分配次数
- 二进制安全：C 语言字符串遇 `\0` 则止，会对字符串进行截断，而 SDS 判断字符串是否结尾的依据是头信息中的 `len` 属性，即使 SDS 中间保存了 `\0` 也不影响

## SDS 的扩容机制？<Badge text="重点" type="error"/>

SDS 源码提供了 `sdsMakeRoomFor()` 函数来进行扩容，它的参数有两个，一个 `sds` 类型的字符串数组，另一个是一个数字 `addlen`。具体的流程如下：

:::center
![sds扩容流程图.jpg](https://i.loli.net/2021/07/31/zYeV1apdblOAScB.png)
:::

## Redis 的字典是如何实现的？

C 语言没有提供字典，Redis 提供了一种实现。`Hash` 类型的底层实现是字典。它根据键值对中的键计算哈希值和索引值，然后根据索引值，将包含键值对的哈希节点放到哈希数组的指定索引上。

### 解决哈希冲突

Redis 采用链地址法解决键冲突，每个哈希节点有一个 `next` 指针，多个哈希节点通过 `next` 指针构成一个单向链表，最新的节点总是添加到表头。

### rehash

字典中保存两个哈希表：`ht[0]` 和 `ht[1]`，`ht[1]` 只在 `rehash` 时使用。Redis 对字典的哈希表执行 `rehash` 的步骤如下：

- 为 `ht[1]` 哈希表分配空间，`ht[1]` 的大小为第一个大于等于 `ht[0].used * 2` 的 $2^n$
- 将保存在 `ht[0]` 中的所有键值对 `rehash` 到 `ht[1]` 上面
- 当 `ht[0]` 包含的所有键值对都迁移到 `ht[1]` 之后，释放 `ht[0]`，将 `ht[1]` 设置为 `ht[0]`，并为 `ht[1]` 新创建一个空白哈希表，为下一次 `rehash` 做准备

:::tip 渐进式 rehash
`rehash` 动作并不是一次性、集中式完成的，而是分多次、渐进式的完成的。如果服务器中包含很多键值对，要一次性的将这些键值对全部 `rehash` 到 `ht[1]` 的话，庞大的计算量可能导致服务器在一段时间内停止服务。
:::

## Redis 的跳跃表是如何实现的？<Badge text="重点" type="error"/>

跳跃表是有序集合（`zset`）的底层实现之一，它是基于多指针有序链表实现的，可以看成多个有序链表。

:::center
![跳跃表.png](https://i.loli.net/2021/07/31/sWy4M7OYBSGvm8h.png)
:::

在查找时，从上层指针开始查找，找到对应的区间之后再到下一层去查找。下图演示了查找 22 的过程：

:::center
![跳跃表查找.png](https://i.loli.net/2021/07/31/L3tyY2nzQTOZx6e.png)
:::

与红黑树等平衡树相比，跳跃表具有以下优点：

- 插入速度非常快速，因为不需要进行旋转等操作来维护平衡性
- 更容易实现
- 支持无锁操作

:::tip ziplist 和 skiplist
默认情况下，当 `zset` 中集合的元素个数少于 128 个（对应配置项 `zset-max-ziplist-value`）并且 `zadd` 操作的 `member` 的长度小于 64 字节（对应配置项 `zset-max-ziplist-entries`），Redis 会使用 `ziplist` 来存储元素，否则使用 `skiplist` 来存储元素。

修改 `zset-max-ziplist-value` 为 3，并执行以下操作查看 Redis 所使用的数据结构：

```text
127.0.0.1:6379> zadd myset 10 "A"
(integer) 1
127.0.0.1:6379> object encoding myset
"ziplist"

// 此处省略插入数据 BB 和 CCC 的过程，它们的结果也是 ziplist

127.0.0.1:6379> zadd myset 10 "DDDD"
127.0.0.1:6379> object encoding myset
"skiplist"
```
:::

## 介绍一下 Redis 的线程模型？

:::center
![Redis线程模型.png](https://i.loli.net/2021/07/31/PK4j3RF1mJsIqbe.png)
:::
