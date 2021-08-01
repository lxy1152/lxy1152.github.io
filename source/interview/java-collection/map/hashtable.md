---
title: 🚵 HashTable
---

## HashTable 是如何保证线程安全的？

使用 `synchronized` 关键字，保证线程安全。

## HashTable 的替代方案？<Badge text="重点" type="error"/>

`HashTable` 效率低，同时它是遗留类，不要主动的去使用它。如果需要保证线程安全可以使用 `ConcurrentHashMap`，它在 JDK7 中使用了分段锁，在 JDK8 中使用了 CAS 操作来支持更高的并发度，执行效率更高。
