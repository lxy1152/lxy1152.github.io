---
title: 🐒 锁
---

## 什么是互斥同步？

互斥同步属于一种悲观的并发策略，总是认为只要不去做正确的同步措施，那就肯定会出现问题。无论共享数据是否真的会出现竞争，它都要进行加锁（这里讨论的是概念模型，实际上虚拟机会优化掉很大一部分不必要的加锁，下面会提到）。互斥同步最主要的问题就是线程阻塞和唤醒所带来的性能问题，因此这种同步也称为阻塞同步。

## 介绍一下 Synchronized 关键字？<Badge text="重点" type="error"/>

`synchronized` 关键字可用于：

- 同步一个代码块
- 同步一个方法（可以为静态方法）
- 同步一个类

`synchronized` 可以保证可见性，因为：

- 线程加锁前，会清空工作内存中共享变量的值，从而使用共享变量时需要从主内存中重新读取最新的值
- 线程解锁前，必须把共享变量的最新值刷新到主内存中

:::tip synchronized 在字节码中的实现
- 同步代码块时使用 `monitorenter` 和 `monitorexit` 指令，其中 `monitorenter` 指令指向同步代码块的开始位置，`monitorexit` 指令则指明同步代码块的结束位置
- 同步方法时并没有 `monitorenter` 指令和 `monitorexit` 指令，取得代之的是使用 `ACC_SYNCHRONIZED` 标识，该标识指明了该方法是一个同步方法
:::

:::tip Mark Word
在 JVM 中对象是分成三部分存在的：对象头（header）、实例数据（instance Data）、对齐填充（padding）。实例数据存放类的属性数据信息，包括父类的属性信息，如果是数组，那么实例部分还包括数组的长度，这部分内存按 4 字节对齐。对齐填充不是必须部分，由于虚拟机要求对象起始地址必须是 8 字节的整数倍，对齐填充仅仅是为了使字节对齐。

对象头是 `synchronized` 实现锁的基础，因为 `synchronized` 申请锁、上锁、释放锁都与对象头有关。对象头主要结构是由 Mark Word 和 Class Metadata Address 组成的，其中 Mark Word 存储对象的哈希值、锁信息、分代年龄、GC 标志等信息，Class Metadata Address 是类型指针指向对象的类元数据，JVM 通过该指针确定该对象是哪个类的实例。

其中 Mark Word 的锁信息就体现了锁的状态：
- 无锁
- 偏向锁：多数情况下，锁不仅不存在竞争，而且总是由同一线程多次获得，为了让线程获得锁的代价更低而引入了偏向锁，见锁优化部分的第五点
- 轻量级锁：如果明显存在其他线程申请锁，那么偏向锁将很快升级为轻量级锁
- 重量级锁：指原始的 `synchronized` 的实现，其他线程试图获取锁时都会被阻塞，只有持有锁的线程释放锁之后才会唤醒这些线程
:::

## 介绍一下 ReentrantLock 类？

`ReentrantLock` 是 J.U.C 包中提供的锁。示例代码如下：

```java
public class Main {
    private static Lock lock = new ReentrantLock();

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        executorService.execute(Main::func);
        executorService.execute(Main::func);
        executorService.shutdown();
    }

    public static void func() {
        lock.lock();
        try {
            for (int i = 0; i < 10; i++) {
                System.out.print(i + " ");
            }
        } finally {
            lock.unlock();
        }
    }
}
```

## 它们两个有什么区别？<Badge text="重点" type="error"/>

这个问题可以泛指为 `synchronized` 和 `Lock` 接口的区别。

- 锁的实现：`synchronized` 是 JVM 实现，`ReentrantLock` 是 JDK 实现的
- 性能： Java 对 `synchronized` 进行了很多优化，例如自旋锁等，`synchronized` 与 `ReentrantLock` 的性能大致相同
- 等待可中断： 当持有锁的线程长期不释放锁的时候，正在等待的线程可以选择放弃等待，改为处理其他事情。`ReentrantLock` 可中断，而 `synchronized` 不行
- 公平锁：`synchronized` 中的锁是非公平的，`ReentrantLock` 默认情况下也是非公平的，但是也可以是公平的
- 锁的绑定条件：一个 `ReentrantLock` 可以同时绑定多个 `Condition` 对象，所以它更为灵活

:::tip 锁的使用
除非需要使用 `ReentrantLock` 的高级功能，否则优先使用 `synchronized`。这是因为 `synchronized` 是 JVM 实现的一种锁机制，JVM 原生地支持它，而 `ReentrantLock` 不是所有的 JDK 版本都支持。并且使用 `synchronized` 不用担心没有释放锁而导致死锁问题，因为 JVM 会确保锁的释放。
:::

## 什么是非阻塞同步？

与悲观策略不同，还可以使用一种基于冲突检测的乐观并发策略：先进行操作，如果没有其它线程争用共享数据，那操作就成功了，否则采取补偿措施（不断地重试，直到成功为止）。这种乐观的并发策略的许多实现都不需要将线程阻塞，因此这种同步操作称为非阻塞同步，即乐观锁。

## 什么是 CAS？<Badge text="重点" type="error"/>

乐观锁需要操作和冲突检测这两个步骤具备原子性，这里就不能再使用互斥同步来保证了，只能靠硬件来完成。硬件支持的原子性操作最典型的是：比较并交换（Compare-and-Swap，CAS）。CAS 指令需要有 3 个操作数，分别是内存地址 V、旧的预期值 A 和新值 B。当执行操作时，只有当 V 的值等于 A，才将 V 的值更新为 B。

:::tip Unsafe 类
有关 CAS 的操作可以在 `Unsafe` 类中查看，CAS 在不能成功交换时会进行自旋。
:::

## CAS 存在的问题？<Badge text="重点" type="error"/>

### ABA 问题

如果一个变量初次读取的时候是 A，它的值被改成了 B，后来又被改回为 A，那 CAS 操作就会误认为它从来没有被改变过。J.U.C 包提供了一个带有标记的原子引用类 `AtomicStampedReference` 来解决这个问题，它可以通过控制变量值的版本来保证 CAS 的正确性。大部分情况下 ABA 问题不会影响程序并发的正确性，如果需要解决 ABA 问题，改用传统的互斥同步可能会比原子类更高效。

### 自旋消耗资源

CAS 如果长时间不成功，会给CPU带来非常大的执行开销，如果 JVM 能支持处理器提供的 `pause` 指令，那么效率会有一定的提升。`pause` 指令有两个作用：

- 它可以延迟流水线执行指令（de-pipeline），使 CPU 不会消耗过多的执行资源，延迟的时间取决于具体实现的版本，在一些处理器上延迟时间是零
- 它可以避免在循环的时候因内存顺序冲突（Memory Order Violation）而引起 CPU 流水线被清空，从而提高 CPU 的实行效率

### 多变量共享一致性问题

CAS 操作是针对一个变量的，如果对多个变量操作：

- 可以加锁
- 封装成对象类

## 介绍一下 AtomicInteger 类？

J.U.C 包里面的整数原子类 `AtomicInteger` 的方法调用了 `Unsafe` 类的 CAS 操作来保证线程安全。示例代码如下：

```java
private static AtomicInteger value = new AtomicInteger();

public static void main(String[] args) {
    int total = 1000;
    ExecutorService executorService = Executors.newCachedThreadPool();
    CountDownLatch countDownLatch = new CountDownLatch(total);
    for (int i = 0; i < total; i++) {
        executorService.execute(() -> {
            value.incrementAndGet();
            countDownLatch.countDown();
        });
    }
    executorService.shutdown();
    try {
        countDownLatch.await();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    System.out.println(value.get());
}
```

`incrementAndGet()` 会调用 `Unsafe` 包中的 `getAndAddInt`，其中：

- `var1` 为原子类对象
- `var2` 为该字段相对对象内存地址的偏移
- `var4` 为要增加的数值，这里为 1
- `var5` 为旧的预期值

通过 `compareAndSwapInt` 进行比较并交换，如果失败会一直自旋。

```java
public final int getAndAddInt(Object var1, long var2, int var4) {
    int var5;
    do {
        var5 = this.getIntVolatile(var1, var2);
    } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));

    return var5;
}
```

## 锁优化 <Badge text="重点" type="error"/>

### 什么是自旋锁？

互斥同步进入阻塞状态的开销都很大，应该尽量避免。在许多应用中，共享数据的锁定状态只会持续很短的一段时间。自旋锁的思想是让一个线程在请求一个共享数据的锁时执行忙循环（自旋）一段时间，如果在这段时间内能获得锁，就可以避免进入阻塞状态。

自旋锁虽然能避免进入阻塞状态从而减少开销，但是它需要进行忙循环操作占用 CPU 时间，它只适用于共享数据的锁定状态很短的场景。在 JDK 1.6 中引入了自适应的自旋锁。自适应意味着自旋的次数不再固定了，而是由前一次在同一个锁上的自旋次数及锁的拥有者的状态来决定。

### 什么是锁消除？

锁消除是指对于被检测出不可能存在竞争的共享数据的锁进行消除。锁消除主要是通过逃逸分析来支持，如果堆上的共享数据不可能逃逸出去被其它线程访问到，那么就可以把它们当成私有数据对待，也就可以将它们的锁进行消除。

### 什么是锁粗化？

如果一系列的连续操作都对同一个对象反复加锁和解锁，频繁的加锁操作就会导致性能损耗。如果虚拟机探测到有这样的一串零碎的操作都对同一个对象加锁，将会把加锁的范围扩展（粗化）到整个操作序列的外部，减少加锁的次数。

### 什么是轻量级锁？

轻量级锁是相对于传统的重量级锁而言，它使用 CAS 操作来避免重量级锁使用互斥量的开销。对于绝大部分的锁，在整个同步周期内都是不存在竞争的，因此也就不需要都使用互斥量进行同步，可以先采用 CAS 操作进行同步，如果 CAS 失败了再改用互斥量进行同步。

### 什么是偏向锁？

偏向锁的思想是：偏向于第一个获取锁对象的线程，这个线程在之后获取该锁时就不再需要进行同步操作，甚至连 CAS 操作也不再需要。当锁对象第一次被线程获得的时候，进入偏向状态，如果 CAS 操作成功，这个线程以后每次进入这个锁相关的同步块就不需要再进行任何同步操作。但是只要有另外一个线程去尝试获取这个锁对象时，偏向状态就宣告结束，此时会撤销偏向后恢复到未锁定状态或者轻量级锁状态。

## 在 Java 中怎么排查死锁？

首先模拟一下死锁：

```java
public class Main {
    public static void main(String[] args) {
        new Thread(A::method, "Thread A").start();
        new Thread(B::method, "Thread B").start();
    }
}

class A {
    public synchronized static void method() {
        System.out.println(Thread.currentThread().getName() + ": method from A");
        try {
            Thread.sleep(3000);
            B.method();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class B {
    public synchronized static void method() {
        System.out.println(Thread.currentThread().getName() + ": method from B");
        try {
            Thread.sleep(3000);
            A.method();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

线程 A 首先调用了 A 类中的同步方法，休眠 3 秒再继续调用 B 类中的同步方法。但是 B 类中的同步方法已经被线程 B 所调用，而线程 B 正在等待调用线程 A 的同步方法，所以双方会死锁。执行代码后将只会得到：

```text
Thread A: method from A 
Thread B: method from B
```

可以使用 `jstack -l <pid>` 命令查看线程信息：

```text
"Thread A" #11 prio=5 os_prio=0 tid=0x000000001e899800 nid=0x32c4 waiting for monitor entry [0x000000001f3af000] 
   java.lang.Thread.State: BLOCKED (on object monitor) 
        at xyz.lixiangyu.demo.B.method(Main.java:25) 
        - waiting to lock <0x000000076b61f5f0> (a java.lang.Class for xyz.lixiangyu.demo.B) 
        at xyz.lixiangyu.demo.A.method(Main.java:16) 
        - locked <0x000000076b3a45c0> (a java.lang.Class for xyz.lixiangyu.demo.A) 
        at xyz.lixiangyu.demo.Main$$Lambda$1/1174361318.run(Unknown Source) 
        at java.lang.Thread.run(Thread.java:748) 
 
   Locked ownable synchronizers: 
        - None
```

另外在 `jstack` 命令的输出中可以看到 Java 已经分析到了出现了死锁：

```text
Found one Java-level deadlock: 
============================= 
"Thread B": 
  waiting to lock monitor 0x000000001c5025d8 (object 0x000000076b3a45c0, a java.lang.Class), 
  which is held by "Thread A" 
"Thread A": 
  waiting to lock monitor 0x000000001c4ffd48 (object 0x000000076b61f5f0, a java.lang.Class), 
  which is held by "Thread B"
```
