---
title: ⛹️ LinkedHashMap
---

## LinkedHashMap 的特点？

在 `HashMap` 的基础上，使用了双向链表保存他们的顺序。如果成员变量 `accessOrder` 为 `true`，则表示使用最近最少使用顺序（LRU），否则是插入顺序（默认就是插入顺序）。通过继承 `LinkedHashMap`，并重写 `removeEldestEntry` 方法可以快速的实现一个 LRU 缓存。
