---
title: 🤹 LinkedList
---

## LinkedList 的底层实现？<Badge text="重点" type="error"/>

基于双向链表实现，使用静态内部类 `Node` 作为链表中的节点。

## 与 ArrayList 的区别？<Badge text="重点" type="error"/>

`ArrayList` 基于动态数组实现，`LinkedList` 基于双向链表实现。`ArrayList` 和 `LinkedList` 的区别可以归结为数组和链表的区别：

- 数组支持随机访问，但插入删除的代价很高，需要移动大量元素
- 链表不支持随机访问，但插入删除只需要改变指针
