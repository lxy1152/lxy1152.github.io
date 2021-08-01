---
title: 🐵 J.U.C
---
## 什么是 J.U.C？

J.U.C 指 `java.util.concurrent` 包，在这个包中增加了很多并发编程中常用的工具类，大大提高了并发性能，其中 AQS（`AbstractQueuedSynchronizer`）被认为是 J.U.C 的核心。

## 什么是 AQS？<Badge text="重点" type="error"/>

`AbstractQueueSynchronizer`，即抽象队列同步器，通常被称为 AQS，是用于构造锁、同步组件的基础框架，它使用一个 `int` 类型变量 `state` 来表示同步状态（这个变量使用 `volatile` 关键字修饰，保证多线程状况下的可见性），使用内置 FIFO 双向队列来完成线程的排队工作。`ReentrantLock`，`Semaphore`， `ReentrantReadWriteLock`，`SynchronousQueue`，`FutureTask` 等皆是基于 AQS 的。

如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制 AQS 是用 CLH 队列锁实现的，即将暂时获取不到锁的线程加入到队列中。

:::tip CLH 队列
CLH（Craig, Landin, and Hagersten）队列是一个虚拟的双向队列（虚拟的双向队列即不存在队列实例，仅存在结点之间的关联关系）。AQS 是将每条请求共享资源的线程封装成一个 CLH 锁队列的一个结点（Node）来实现锁的分配。
:::

:::tip 面试时的回答
1. 什么是 AQS：AQS 是 JDK 中提供的抽象队列同步器，`Lock` 接口的实现类一般内部都维护了一个 AQS 的实现类（比如 `FairSync`、`NonFairSync`）。AQS 内部维护了一个双向队列和 `int` 类型的变量 `state` 来实现对共享变量的共享。
2. 线程到来后双向队列如何维护：如果有一个线程 A 希望使用资源，并且此时没有其他线程在使用资源，那么会把它放到双向队列的队首。其他线程比如线程 B、线程 C，如果希望使用这个资源，会依次放入队尾，并做自旋等待。
3. 线程使用完毕如何竞争：当线程 A 使用完毕后，会释放资源。后续排队的线程有两种方式来竞争资源：一种是公平式，即按照排队顺序依次使用；另一种是非公平式，所以等待的线程共同去抢，谁抢到算谁的。
4. 可重入性：如果同一线程多次访问资源，`state` 会依次加一，并记录当前的线程名称。释放时需要这个线程的所有访问全部释放，即 `state` 减至 0。
5. 为什么使用双向队列：方便操作队首和队尾元素。
:::

原理图如下：

:::center
![AQS.jpg](https://i.loli.net/2021/07/30/WFibfJ3TLQ7v6q9.png)
:::

## AQS 的资源共享方式有哪几种？

### Exclusive（独占）

只有一个线程能执行，如 `ReentrantLock`，可继续细分为公平锁和非公平锁：
- 公平锁：按照线程在队列中的排队顺序，先到者先拿到锁
- 非公平锁：当线程要获取锁时，无视队列顺序直接去抢，谁抢到就是谁的

### Share（共享）

多个线程可同时执行，如 `CountDownLatch`、`Semaphore`、`CyclicBarrier`、`ReadWriteLock`。

## 如何通过 AQS 自定义一个同步器？

AQS 的设计是基于模板模式的，如果需要实现一个自定义同步器，一般的方式是这样的：

- 使用者继承 `AbstractQueuedSynchronizer` 并重写指定的方法，这些方法是对于共享资源 `state` 的获取和释放的规则
- 将 AQS 组合在自定义同步组件的实现中，并调用其模板方法，这些模板方法会调用重写的方法

需要实现的方法包括：

- `isHeldExclusively()`：该线程是否正在独占资源，只有用到 condition 才需要去实现它
- `tryAcquire(int)`：独占方式，尝试获取资源
- `tryRelease(int)`：独占方式，尝试释放资源
- `tryAcquireShared(int)`：共享方式，尝试获取资源
- `tryReleaseShared(int)`：共享方式，尝试释放资源

虽然不同的自定义同步器争用共享资源的方式是不同的，但是在实现时只需要实现共享资源 `state` 的获取与释放方式即可，至于等待队列的维护（如获取资源失败入队/唤醒出队等），AQS 已经在顶层实现好了，使用者不需要关注。

## 什么是 CountDownLatch？

`CountDownLatch` 是一个同步工具类，用来协调多个线程之间的同步。这个工具通常用来控制线程等待，它可以让某一个线程等待直到倒计时结束，再开始执行。示例代码如下：

```java
public static void main(String[] args) {
    int total = 10;
    CountDownLatch countDownLatch = new CountDownLatch(total);
    ExecutorService executorService = Executors.newCachedThreadPool();
    for (int i = 0; i < total; i++) {
        int value = i;
        executorService.execute(() -> {
            System.out.println(value + " is running");
            countDownLatch.countDown();
        });
    }
    try {
        countDownLatch.await();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    System.out.println("end");
    executorService.shutdown();
}
```

## 什么是 CyclicBarrier？

`CyclicBarrier` 和 `CountDownLatch` 非常类似，它也可以实现线程间的技术等待，但是它的功能比 `CountDownLatch` 更加复杂和强大。`CyclicBarrier` 的字面意思是可循环使用（Cyclic）的屏障（Barrier）。它要做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。`CyclicBarrier` 默认的构造方法是 `CyclicBarrier(int parties)`，其参数表示屏障拦截的线程数量，每个线程调用 `await()` 方法告诉 `CyclicBarrier` 我已经到达了屏障，然后当前线程被阻塞。示例代码如下：

```java
public static void main(String[] args) {
    int total = 10;
    CyclicBarrier cyclicBarrier = new CyclicBarrier(total);
    ExecutorService executorService = Executors.newCachedThreadPool();
    for (int i = 0; i < total; i++) {
        int value = i;
        executorService.execute(() -> {
            System.out.println(value + " before");
            try {
                cyclicBarrier.await();
            } catch (InterruptedException | BrokenBarrierException e) {
                e.printStackTrace();
            }
            System.out.println(value + "after");
        });
    }
    executorService.shutdown();
}
```

## 什么是 Semaphore？

`synchronized` 和 `ReentrantLock` 都是一次只允许一个线程访问某个资源（但同一线程可以多次进入同步块，也就是可重入性），`Semaphore`（信号量）可以指定多个线程同时访问某个资源。实例代码如下：

```java
public static void main(String[] args) {
    int total = 3;
    Semaphore semaphore = new Semaphore(total);
    ExecutorService executorService = Executors.newCachedThreadPool();
    for (int i = 0; i < 10; i++) {
        int value = i;
        executorService.execute(() -> {
            try {
                semaphore.acquire();
                System.out.println(value + " is running " + semaphore.availablePermits());
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                semaphore.release();
            }
        });
    }
    executorService.shutdown();
}
```

## 什么是 FutureTask？

在介绍 [Java 中如何使用线程](/pages/1de94c/#在 Java 中如何使用线程？)时，有说道实现 `Callable` 接口是可以有返回值的，返回值通过 `Future` 进行封装。`FutureTask` 实现了 `RunnableFuture` 接口，该接口继承自 `Runnable` 和 `Future` 这使得 `FutureTask` 既可以当做一个任务执行，也可以有返回值。 

## 什么是 BlockingQueue？

`BlockingQueue` 接口有以下阻塞队列的实现：

- FIFO 队列 ：`LinkedBlockingQueue`、`ArrayBlockingQueue`（固定长度）
- 优先级队列 ：`PriorityBlockingQueue`

提供了阻塞的 `take()` 和 `put()` 方法：如果队列为空 `take()` 将阻塞，直到队列中有内容；如果队列已满，`put()` 方法将阻塞，直到队列有空闲位置。

## 什么是 ForkJoin？

主要用于并行计算中，和 `MapReduce` 原理类似，都是把大的计算任务拆分成多个小任务并行计算。
