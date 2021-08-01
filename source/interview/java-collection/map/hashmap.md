---
title: 🤼 HashMap
---

## HashMap 涉及的名词概念有哪些？<Badge text="重点" type="error"/>

| 英文名称 | 中文名称 | 含义 |
| :---:| :---: | :---: |
| CAPACITY | 容量 | 哈希表中桶（数组中的每个索引位置）的数量（数组大小），默认为 16，设计成 16 的好处主要是可以使用与运算替代求余来提升计算哈希值的速度 |
| LOAD_FACTOR | 加载因子 | 加载因子用来衡量哈希表满的程度，它的默认值为 0.75f，计算实时加载因子的方法为：$size/capacity$ ，而不是占用桶的数量去除以 CAPACITY |
| SIZE | 键值对数量 | 哈希表中保存的键值对的数量 |
| THRESHOLD | 阈值 | 当 SIZE 大于设定的这个阈值后，哈希表会进行扩容 |
| DEFAULT_INITIAL_CAPACITY | 初始容量 | 初始容量为 16，而且容量必须为 $2^n$，如果不是也会通过其他方法转换为 $2^n$ |
| MAXIMUM_CAPACITY | 最大容量 | 最大的容量大小为 $2^{30}$ |
| TREEIFY_THRESHOLD | 树化阈值 | 当链表长度大于 8 时（且同时大于 MIN_TREEIFY_CAPACITY 时），就会将链表转化为红黑树 |
| UNTREEiFY_THRESHOLD | 退化阈值 | 当树的节点数量小于 6 时，就会将红黑树重新转化为链表 |
| MIN_TREEIFY_CAPACITY | 最小树化容量 | 只有 SIZE 大于这个值并且链表长度大于 8 时，才会进行转换，之所以这么设定是因为：如果总的键值对数量太少，并且依然有冲突，那么转换红黑树是治标不治本的解决方案，直接进行扩容的效果会更好 |

## HashMap 的底层存储结构？<Badge text="重点" type="error"/>

在 `HashMap` 类中使用了一个 `Node` 类型的数组 `table`，通过 `Node` 类中的 `next` 属性可知它是一个链表，即：数组的每个位置被当作一个桶，一个桶存放一个链表。当链表的长度大于 `TREEIFY_THRESHOLD` 并且桶的数量大于 `MIN_TREEIFY_CAPACITY`，那么会将链表转化为红黑树，每个节点使用 `TreeNode` 类表示树节点。因此在整体上，`HashMap` 是使用数组+链表+红黑树的结构来存储数据的。

## 如何计算哈希值？

以下是 `HashMap` 类的静态方法 `hash()` 的实现：

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

可以看到，`HashMap` 并没有直接使用 `key` 的哈希值，而是将键的哈希值的低 16 位与高 16 位的异或结果作为哈希值。举例：

$$
\begin{aligned}
h=hashCode():&\ 1111\ 1111\ 1111\ 1111\ 1111\ 0000\ 1110\ 1010\\
\downarrow\\
h\ \text{>>>}\ 16:&\ 0000\ 0000\ 0000\ 0000\ 1111\ 1111\ 1111\ 1111\\
\downarrow\\
hash=h \text{\textasciicircum} (h \text{>>>} 16):&\ 1111\ 1111\ 1111\ 1111\ 0000\ 1111\ 0001\ 0101
\end{aligned}
$$

:::tip 为什么要用这种方式来算哈希值
首先需要注意的是，代码中使用的是无符号右移，右移后结果的高 16 位一定全是 0，一个数和 0 异或，结果还是自身，所以原数据的高 16 位将会保留，从而实现高 16 位与低 16 位进行异或运算。

下面来说一下为什么要这么计算。`HashMap` 在计算索引时是采用 `(n - 1) & hash` （`n` 表示 `table` 数组的长度）的方式来计算的，假设 `n = 16`，那么这个位运算的结果是：
$$
\begin{aligned}
n - 1:&\ 0000\ 0000\ 0000\ 0000\ 0000\ 0000\ 0000\ 1111\\
hash:& \ 1111\ 1111\ 1111\ 1111\ 0000\ 1111\ 0001\ 0101\\
\downarrow\\
result:&\ 0101\ =\ 5
\end{aligned}
$$
因为使用的是与运算，所以 `hash` 的高位将全部忽略，在 `n` 比较小时，很容易发生碰撞，因此最终采用了上面所说的方式来计算哈希。

注意：因为容量是 $2^n$，所以求余操作可以被转化为与运算（因为他们的处理结果相同）。相比求余运算而言，与运算肯定执行效率更高，这也是为什么强制要求容量是 $2^n$。
:::

## HashMap 如何计算初始容量？

`HashMap` 允许通过构造器传入一个自定义的初始容量，但由于容量只能设定为 $2^n$，因此需要做转换。通过静态方法 `tableSizeFor()` 可以将任意一个容量转换为离它最近的一个 $2^n$。代码如下：

```java
static final int tableSizeFor(int cap) {
    int n = cap - 1;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
}
```

以 `cap=10` 为例，理解一下这段代码的逻辑：

$$
\begin{aligned}
n\ &=\ 0000\ 1001\\
\downarrow\\
n\ \text{>>>}\ 1\ &=\ 0000\ 0100\\
n\ |\ n\ \text{>>>}\ 1\ &=\ 0000\ 1101\\
n\ &=\ 0000\ 1101\\
\downarrow\\
n\ \text{>>>}\ 2\ &=\ 0000\ 0011\\
n\ |\ n\ \text{>>>}\ 2\ &=\ 0000\ 1111\\
n\ &=\ 0000\ 1111\\
\downarrow\\
n\ \text{>>>}\ 4\ &=\ 0000\ 0000\\
n\ |\ n\ \text{>>>}\ 4\ &=\ 0000\ 1111\\
n\ &=\ 0000\ 1111\\
\downarrow\\
n\ \text{>>>}\ 8\ &=\ 0000\ 0000\\
n\ |\ n\ \text{>>>}\ 8\ &=\ 0000\ 1111\\
n\ &=\ 0000\ 1111\\
result\ &=\ 0000\ 1111\ +\ 0000\ 0001\ =\ 16
\end{aligned}
$$

## HashMap 如何扩容？<Badge text="重点" type="error"/>

`HashMap` 调用 `resize()` 函数对容量进行调整，流程如下：

:::center
![resize流程图.jpg](https://i.loli.net/2021/07/29/AbhYXIBnQ2ZRC4V.png)
:::

:::tip HashMap 的懒加载
调用构造器的时候不会初始化 `table` 数组和设定阈值，是在调用 `put()` 方法的时候调用的 `resize()` 方法。
:::

:::tip 加载因子设置为 0.75 的意义
如果小于 0.5，空着一半就扩容了，空间肯定会很浪费；如果是 1 的话，只能说有超级大的概率，会发生碰撞，这不符合 `HashMap` 的初衷。既然已经设置了 `table` 的长度为 16，那么负载因子其实并不重要，重要的其实是那个阈值，毕竟加载因子也是为了计算阈值的。某个数乘 16 需要得到一个整数，那么 0.75 就很合适。
:::

## HashMap put 方法的逻辑是什么？<Badge text="重点" type="error"/>

:::center
![put流程图.jpg](https://i.loli.net/2021/07/29/dZGOl8RjxuaTmeX.png)
:::

:::tip 红黑树与链表的互相转化
不是说满足大于 8 的条件链表就一定会转换为红黑树，还需要判断桶的数量是否大于 64。原因在于：如果桶的数量不够多，但还是冲突了，那么就算转换为了红黑树，实际上依然不能解决问题。
:::

## HashMap get 方法的逻辑是什么？<Badge text="重点" type="error"/>

:::center
![get流程图.jpg](https://i.loli.net/2021/07/29/pbfuvYxEtRG14CZ.png)
:::

## HashMap 与 HashTable 的比较？

- 不保证线程安全
- 允许键和值为 `null`
- 迭代器是 fail-fast 迭代器
- 不保证随着时间的推移 `Map` 中的元素次序是不变的
- `HashMap` 会做红黑树的转换

## HashMap 的线程不安全性体现在哪里？<Badge text="重点" type="error"/>

- 如果多个线程计算键的 `hash` 是在同一位置，多次执行 `put` 操作可能会将数据覆盖
- `resize()` 方法中调用的 `transfer()` 方法可能会使链表产生环（JDK7 采用头插法会有这个问题，JDK8 采用尾插法不会有这个问题）

