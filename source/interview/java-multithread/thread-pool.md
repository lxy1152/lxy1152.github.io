---
title: 🙊 线程池
---

## 什么是线程池？

线程池就是将一些线程保存在一个集合里，这个集合称为线程池。使用线程池可以很好地提高性能，线程池在系统启动时即创建大量空闲的线程，程序将一个任务传给线程池，线程池就会启动一条线程来执行这个任务，执行结束以后，该线程并不会死亡，而是再次返回线程池中成为空闲状态，等待执行下一个任务。

:::tip 使用线程池的好处
- 降低资源消耗：通过重复利用已创建的线程降低线程创建和销毁造成的消耗
- 提高响应速度：当任务到达时，任务可以不需要的等到线程创建就能立即执行
- 提高线程的可管理性：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控
:::

:::warning 不要自行显式创建线程
在阿里编程规范要求中指出：线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。

说明：使用线程池的好处是减少在创建和销毁线程上所花的时间以及系统资源的开销，解决资源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。
:::

## 如何创建一个线程池？<Badge text="重点" type="error"/>

通过 `ThreadPoolExecutor` 创建一个新的线程池：

```java
public static void main(String[] args) {
    ThreadPoolExecutor threadPoolExecutor =
            new ThreadPoolExecutor(
                    10,
                    20,
                    10,
                    TimeUnit.SECONDS,
                    new ArrayBlockingQueue<>(5));
    for (int i = 0; i < 5; i++) {
        int value = i;
        threadPoolExecutor.execute(() -> System.out.println("running{" + value + "}"));
    }
    threadPoolExecutor.shutdown();
}
```

:::warning 不要使用 Executors 创建线程池

在阿里编程规范中明确表示：线程池不允许使用 `Executors` 去创建，而是应该通过 `ThreadPoolExecutor` 的方式来创建，这样的处理方式可以让开发人员更加明确线程池的运行规则，规避资源耗尽的风险。

说明一下 `Executors` 各个方法的弊端：
1. `newFixedThreadPool` 和 `newSingleThreadExecutor`

主要问题是堆积的请求处理队列可能会耗费非常大的内存，甚至 OOM。

2. `newCachedThreadPool` 和 `newScheduledThreadPool`

主要问题是线程数最大数是 `Integer.MAX_VALUE`，可能会创建数量非常多的线程，甚至 OOM。
:::

## 介绍一下线程池的 7 个参数？<Badge text="重点" type="error"/>

| 名称 | 描述 |
| :---: | :---: |
| corePoolSize | 核心线程的线程数，定义了最小可以同时运行的线程数量。 |
| maximumPoolSize | 当队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数。 |
| keepAliveTime | 当线程池中的线程数量大于 corePoolSize 的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，直到等待的时间超过了 keepAliveTime 才会被回收销毁。 |
| unit | keepAliveTime 参数的时间单位。 |
| workQueue | 新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。可以使用 ArrayBlockingQueue、LinkedBlockingQueue、SynchronousQueue、PriorityBlockingQueue 等。 |
| threadFactory | 创建一个新线程时使用的工厂，可以用来设定线程名、是否为守护线程等。默认使用 Executors.DefaultThreadFactory。 |
| handler | 拒绝策略，如果当前同时运行的线程数量达到最大线程数量并且队列也已经被填满，那么根据这个参数的不同取值，线程池将会采取不同的策略来处理新来的任务。包括：抛出异常拒绝任务、不抛出异常拒绝任务、在调用者线程中执行任务、抛弃最早进入队列的任务并将当前任务插入队列。 |

## submit 和 execute 方法有什么区别？

调用 `submit` 方法会返回一个 `Future` 类型的对象，通过这个对象可以获得运行结果。

```java
public static void main(String[] args) {
    ThreadPoolExecutor threadPoolExecutor =
            new ThreadPoolExecutor(
                    10,
                    20,
                    10,
                    TimeUnit.SECONDS,
                    new ArrayBlockingQueue<>(5));
    for (int i = 0; i < 5; i++) {
        int value = i;
        Future<Object> future = threadPoolExecutor.submit(() -> value);
        try {
            System.out.println(future.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
    threadPoolExecutor.shutdown();
}
```

## 介绍一下任务调度的原理？<Badge text="重点" type="error"/>

任务调度是线程池的主要入口，当用户提交了一个任务，接下来这个任务将如何执行都是由这个阶段决定的。了解这部分就相当于了解了线程池的核心运行机制。所有任务的调度都是由 `execute()` 方法完成的，这部分完成的工作是通过检查现在线程池的运行状态、运行线程数、运行策略来决定接下来执行的流程，是直接申请线程执行，或是缓冲到队列中执行，亦或是直接拒绝该任务。

具体的执行过程如下：

- 如果要执行的任务为空，则抛出 `NPE`
- 如果 `workerCount` < `corePoolSize`，则创建并启动一个线程来执行新提交的任务
- 如果 `workerCount` >= `corePoolSize`，且线程池内的阻塞队列未满，则将任务添加到阻塞队列中
- 如果 `workerCount` >= `corePoolSize` 并且 `workerCount` < `maximumPoolSize`，且线程池内的阻塞队列已满，则创建并启动一个线程来执行新提交的任务
- 如果 `workerCount` >= `maximumPoolSize`，并且线程池内的阻塞队列已满，则根据拒绝策略来处理该任务，默认的处理方式是直接抛异常

流程图如下：

:::center
![任务调度流程图.jpg](https://i.loli.net/2021/07/30/8yzHmhKQqcoJwSv.png)
:::
