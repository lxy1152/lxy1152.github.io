---
title: 🧘 ConcurrentHashMap
---

## ConcurrentHashMap 的底层存储结构？

JDK7 中使用 `Segment` 数组和 `HashEntry` 数组，JDK8 中使用数组 + 链表 + 红黑树。

## ConcurrentHashMap 是如何保证线程安全的？<Badge text="重点" type="error"/>

在 JDK7 中使用分段锁机制（Segment）保证线程安全。每个分段锁维护着几个桶，多个线程可以同时访问不同分段锁上的桶，从而使并发度（分段锁的个数）更高。默认并发度是 16。

:::center
![segment](https://camo.githubusercontent.com/611426fd924e7331fc19768e939456311e3d908fbb76d2441b489b976521399d/687474703a2f2f626c6f672d696d672e636f6f6c73656e2e636e2f696d672f436f6e63757272656e74486173684d61702d6a646b312e372e706e67)
:::

在 JDK8 中，`ConcurrentHashMap` 的结构与 `HashMap` 相同，但是使用了 CAS 和 `synchronized`（只锁定当前链表或红黑树的头节点，这样只要哈希不冲突，就不会产生并发）来保证线程安全。

:::center
![](https://camo.githubusercontent.com/cc65641c880bbab590dab143b848896d814638974c591c0f29f534284d046a6c/687474703a2f2f626c6f672d696d672e636f6f6c73656e2e636e2f696d672f436f6e63757272656e74486173684d61702d6a646b312e382d32706e672e706e67)
:::
