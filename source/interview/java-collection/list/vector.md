---
title: 🤾 Vector
---

## Vector 是如何保证线程安全的？

`Vector` 使用 `synchronized` 关键字实现同步，但同步的是方法，所以效率很低。

## Vector 的扩容机制？

可以通过 `Vector` 的构造器传入 `capacityIncrement`，表示扩容时的增长大小。这个参数默认为 0，表示每次都将容量翻倍。

## Vector 的替代方案有哪些？<Badge text="重点" type="error"/>

### Collections.synchronizedList()

`Collections.synchronizedList()` 方法会对传入的 `List` 接口实现类做包装，并返回一个线程安全的 `SynchronizedRandomAccessList` 或者 `SynchronizedList`（取决于是否实现了 `RandomAccess` 接口）。

与 `Vector` 的对比：

- 只要实现了 `List` 接口就可以生成一个新的线程安全的包装类
- 通过同步代码块实现加锁（`Vector` 是同步方法），默认为 `this`，当然也可以指定其他的对象
- 迭代是非同步的，所以迭代时需要手动加锁（如果需要）

### CopyOnWriteArrayList
`CopyOnWriteArrayList` 是 J.U.C 包下的一个类，它将读写操作进行了分离，写操作在一个新复制的数组中进行，读操作还是在原始数组中进行，互不影响。这样就允许了在写操作的同时进行读操作，大大提高了读操作的性能，很适合读多写少的应用场景。

但是这种设计会导致：

- 内存占用增大：在写操作时需要复制一个新的数组，使得内存占用为原来的两倍左右
- 数据不一致：读操作不能读取实时性的数据，因为部分写操作的数据还未同步到读数组中

所以 `CopyOnWriteArrayList` 不适合内存敏感以及对实时性要求很高的场景，另外需要注意：

- 写操作时需要加锁，防止并发写入时导致写入数据丢失
- 写操作结束之后需要把原始数组指向新的复制数组
