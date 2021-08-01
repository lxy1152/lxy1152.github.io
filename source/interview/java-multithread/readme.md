---
title: 🌀 Java 并发 - 简介
---

多线程开发是老生常谈的问题了，最重要的是如何保证多线程情况下数据的一致性。本部分包含以下几个内容：

1. [JMM](/interview/java-multithread/jmm)：JVM 定义的 Java 内存模型
2. [进程和线程](/interview/java-multithread/process-thread)：看看在 Java 中如何使用线程以及如何解决多线程之间的协作问题
3. [线程池](/interview/java-multithread/thread-pool)：频繁创建线程的开销太大，使用池化思想缓存线程
4. [J.U.C](/interview/java-multithread/juc)：JDK 提供的适用于并发编程的工具类
5. [锁](/interview/java-multithread/lock)：如何通过锁来保证线程安全以及锁的优化
6. [无同步方案](/interview/java-multithread/non-lock)：某些情况下不需使用锁也可以保证线程安全

---

在实际开发过程中，提供一些建议：

- 给线程起个有意义的名字，这样可以方便找日志
- 缩小同步范围，从而减少锁争用，例如对于 `synchronized`，应该尽量同步代码块而不是同步方法
- 多用同步工具少用 `wait()` 和 `notify()`。因为 `CountDownLatch`，`CyclicBarrier` 和 `Semaphore` 这些同步类简化了编码操作，而用 `wait()` 和 `notify()` 很难实现复杂控制流
- 使用 `BlockingQueue` 实现生产者消费者问题
- 多用并发集合少用同步集合，例如应该使用 `ConcurrentHashMap` 而不是 `Hashtable`
- 使用本地变量和不可变类来保证线程安全
- 使用线程池而不是直接创建线程，这是因为创建线程代价很高，线程池可以有效地利用有限的线程来启动任务
