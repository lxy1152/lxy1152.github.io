---
title: 🙉 进程和线程
---

## 什么是进程？

进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。 

## 什么是线程？
线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享进程的堆和方法区资源，但每个线程有自己的程序计数器、虚拟机栈和本地方法栈，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。

## 在 Java 中如何使用线程？<Badge text="重点" type="error"/>

<CodeGroup>
<CodeGroupItem title="实现 Runnable 接口">
```java
public static void main(String[] args) {
    Runnable runnable = () -> System.out.println("i am running...");
    Thread thread = new Thread(runnable);
    thread.start();
}
```
</CodeGroupItem>

<CodeGroupItem title="实现 Callable 接口" active>
```java
public static void main(String[] args) {
    Callable<Integer> callable = () -> 10;
    FutureTask<Integer> task = new FutureTask<>(callable);
    Thread thread = new Thread(task);
    thread.start();
    try {
        System.out.println(task.get());
    } catch (InterruptedException | ExecutionException e) {
        e.printStackTrace();
    }
}
```
</CodeGroupItem>
</CodeGroup>

::: tip 继承 Thread 类
直接继承 `Thread` 类也可以实现相同的，但相比较而言，实现接口的方式更好，因为更加灵活。而 `Runnable` 和 `Callable` 接口的区别在于是否希望获得返回值。
:::

## Java 中的线程状态

根据枚举类 `Thread.State` 中定义的，在 Java 中线程状态可分为以下六种：

| 名称 | 描述 |
| :---: | :---: |
| NEW | 创建后尚未启动。 |
| RUNNABLE | 正在 Java 虚拟机中运行。但是在操作系统层面，它可能处于运行状态，也可能等待资源调度（例如处理器资源），资源调度完成就进入运行状态。所以该状态的可运行是指可以被运行，具体有没有运行要看底层操作系统的资源调度。 |
| BLOCKED | 请求获取 monitor lock 从而进入 synchronized 函数或者代码块，但是其它线程已经占用了该 monitor lock，所以处于阻塞状态。要结束该状态并进入 RUNNABLE 状态需要其他线程释放 monitor lock。 |
| WAITING | 无限期等待直到其它线程将它唤醒。阻塞和等待的区别在于，阻塞是被动的，它是在等待获取 monitor lock。而等待是主动的，通过调用 Object.wait() 等方法进入。 |
| TIMED_WAITING | 有限期等待，在一定时间之后会被系统自动唤醒。 |
| TERMINATED | 可以是线程结束任务之后自己结束，或者产生了异常而结束。 |

线程状态转移图如下：

:::center
![线程状态转移图.jpg](https://i.loli.net/2021/07/30/1bXQPKWUMCN7HVh.png)
:::

## 线程间协作的方式有哪些？

当多个线程可以一起工作去解决某个问题时，如果某些部分必须在其它部分之前完成，那么就需要对线程进行协调。

### join()
在线程中调用另一个线程的 `join()` 方法，会将当前线程挂起，而不是忙等待，直到目标线程结束。示例代码如下：

```java
public class Main {
    public static void main(String[] args) {
        ThreadB threadB = new ThreadB();
        threadB.start();
    }
}

class ThreadA extends Thread {
    @Override
    public void run() {
        System.out.println("a running...");
    }
}

class ThreadB extends Thread {
    @Override
    public void run() {
        ThreadA threadA = new ThreadA();
        try {
            threadA.start();
            threadA.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("b running...");
    }
}
```

### wait()，notify()，notifyAll()

调用 `wait()` 使得线程进入无限等待状态直到被唤醒。线程在等待时会被挂起，当其他线程的运行使得这个条件满足时，其它线程会调用 `notify()` 或者 `notifyAll()` 来唤醒挂起的线程。

使用 `wait()` 挂起期间，线程会释放锁。这是因为，如果没有释放锁，那么其它线程就无法进入对象的同步方法或者同步控制块中，那么就无法执行 `notify()` 或者 `notifyAll()` 来唤醒挂起的线程，造成死锁。

它们都位于 `Object` 类中，而不属于 `Thread`。另外这些方法时只能用在同步方法或者同步控制块中使用，否则会在运行时抛出 `IllegalMonitorStateException` 异常。示例代码如下：

```java
public class Main {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        WaitNotifyExample example = new WaitNotifyExample();
        executorService.execute(() -> example.after());
        executorService.execute(() -> example.before());
        executorService.shutdown();
    }
}

class WaitNotifyExample {
    public synchronized void before() {
        System.out.println("before");
        notifyAll();
    }

    public synchronized void after() {
        try {
            wait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("after");
    }
}
```

:::tip wait() 和 sleep() 的区别
`wait()` 是 `Object` 类中的方法，而 `sleep()` 是 `Thread` 的静态方法；`wait()` 会释放锁，`sleep()` 不会。
:::

### await()，signal()，signalAll()

J.U.C 包中提供了 `Condition` 类来实现线程之间的协调，可以在 `Condition` 上调用 `await()` 方法使线程等待，其它线程调用 `signal()` 或 `signalAll()` 方法唤醒等待的线程。
相比于 `wait()` 这种等待方式，`await()` 可以指定等待的条件，因此更加灵活。

示例代码如下：

```java
public class Main {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        AwaitSignalExample example = new AwaitSignalExample();
        executorService.execute(() -> example.after());
        executorService.execute(() -> example.before());
        executorService.shutdown();
    }
}

class AwaitSignalExample {
    private final Lock lock = new ReentrantLock();
    private final Condition condition = lock.newCondition();

    public void before() {
        lock.lock();
        try {
            System.out.println("before");
            condition.signalAll();
        } finally {
            lock.unlock();
        }
    }

    public void after() {
        lock.lock();
        try {
            condition.await();
            System.out.println("after");
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }
}
```
