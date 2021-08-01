---
title: 🤸 ArrayList
---

## ArrayList 的底层实现？<Badge text="重点" type="error"/>

`ArrayList` 是基于数组实现的，所以支持快速随机访问。

:::tip 快速随机访问
`ArrayList` 类实现了 `RandomAccess` 接口，这个接口是一个标记接口，实现这个接口的类，表示它支持快速随机访问，直接使用 `for` 循环会比使用迭代器循环要快。
:::

## ArrayList 的默认大小是多少？<Badge text="重点" type="error"/>

在代码中可以看到默认大小是 10。

## ArrayList 的扩容机制？<Badge text="重点" type="error"/>

在添加元素时使用 `ensureCapacityInternal()` 保证容量足够，如果容量不够，会使用 `grow()` 方法进行扩容。新的容量为：`oldCapacity + (oldCapacity >> 1)`，近似是 1.5 倍。

:::warning 尽量避免扩容
扩容操作会将原数组的部分内容全部复制到新数组中，这个操作的代价很高，应该尽量减少扩容操作的次数。
:::

## ArrayList 如何删除元素？<Badge text="重点" type="error"/>

在删除元素时会调用 `System.arraycopy()` 将 `index + 1` 后面的元素都复制到 `index` 位置上，时间复杂度是 $O(n)$，代价同样很大。

## ArrayList 的序列化？

`ArrayList` 基于数组实现，并且具有动态扩容特性，因此保存元素的数组可能只有其中一部分是真正使用了的，因此就没必要全部进行序列化。因此保存元素的数组 `elementData` 使用了 `transient` 关键字进行修饰，该关键字表示数组默认不会被序列化。同时 `ArrayList` 通过重新实现 `readObject()` 和 `writeObject()` 来控制只序列化有元素的那部分内容。

## 什么是 fail-fast 机制？

fail-fast（快速失败）机制，是集合类中提供的一种错误检测机制。如果在迭代过程中，该集合在结构上发生改变，那么就有可能会发生 fail-fast，抛出 `ConcurrentModificationException` 异常。

fail-fast 机制并不保证在不同步的修改下一定会抛出异常，它只是尽最大努力去抛出，所以这种机制一般仅用于检测 bug。最简单的触发方式就是在遍历过程中执行删除元素的操作，比如下面的代码：

```java
public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
        list.add(i);
    }

    for (int val : list) {
        if (val == 2) {
            list.remove(2);
        }
        System.out.println(val);
    }
}
```

:::tip 结构变化
结构发生改变是指：**添加或者删除至少一个元素，或者调整列表的大小**。涉及这些操作的时候，内部的计数器 `modCount` 会自增，如果迭代过程中 `modCount` 发生变化（不相等），就会抛出异常。为了避免抛出 `ConcurrentModificationException` 异常，需要使用迭代器提供的 `remove()` 方法来删除元素。
:::
