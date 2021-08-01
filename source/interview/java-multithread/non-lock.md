---
title: 🦍 无同步方案
---

## 什么是无同步方案？

要保证线程安全，并不是一定就要进行同步。如果一个方法本来就不涉及共享数据，那它自然就无需任何同步措施去保证正确性。

## 什么是不可变对象？

不可变（Immutable）的对象一定是线程安全的，不需要再采取任何的线程安全保障措施。只要一个不可变的对象被正确地构建出来，永远也不会看到它在多个线程之中处于不一致的状态。多线程环境下，应当尽量使对象成为不可变，来满足线程安全。

不可变的类型：

- `final` 关键字修饰的基本数据类型
- `String`
- 枚举类型
- `Number` 部分子类，如 `Long` 和 `Double` 等数值包装类型，`BigInteger` 和 `BigDecimal` 等大数据类型，但同为 `Number` 的原子类 `AtomicInteger` 和 `AtomicLong` 则是可变的

对于集合类型，可以使用 `Collections.unmodifiableXXX()` 方法来获取一个不可变的集合。这个方法会返回一个内部类，重写所有进行修改的方法，转为抛出 `UnsupportedOperationException` 异常。

```java
public static void main(String[] args) {
    Map<String, String> map = new HashMap<>();
    map = Collections.unmodifiableMap(map);
    map.put("1", "1");
}
```

## 如何通过栈封闭的方式解决线程安全的问题？

多个线程访问同一个方法的局部变量时，不会出现线程安全问题，因为局部变量存储在虚拟机栈中，是属于线程私有的。

```java
public static void main(String[] args) {
    ExecutorService executorService = Executors.newCachedThreadPool();
    for (int i = 0; i < 5; i++) {
        executorService.execute(Main::test);
    }
}

public static void test() {
    int value = 100;
    value += 100;
    System.out.println(value);
}
```

## 如何使用 ThreadLocal 解决线程安全的问题？<Badge text="重点" type="error"/>

如果一段代码中所需要的数据必须与其他代码共享，那就看看这些共享数据的代码是否能保证在同一个线程中执行。如果能保证，那么就可以把共享数据的可见范围限制在同一个线程之内，这样无须同步也能保证线程之间不出现数据争用的问题。

可以使用 `ThreadLocal` 类来实现线程本地存储功能。对于以下代码，thread1 中设置 `threadLocal` 为 1，而 thread2 设置 `threadLocal` 为 2。过了一段时间之后，thread1 读取 `threadLocal` 依然是 1，不受 thread2 的影响。原因在于，每个线程内部维护了一个保存数据的 `ThreadLocalMap` ，在调用 `put()` 方法时会首先获取当前线程，然后对这个 `Map` 进行修改，所以不同线程之间是不受影响的。

```java
public static void main(String[] args) {
    ThreadLocal threadLocal = new ThreadLocal();
    Thread thread1 = new Thread(() -> {
        threadLocal.set(1);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(threadLocal.get());
        threadLocal.remove();
    });
    Thread thread2 = new Thread(() -> {
        threadLocal.set(2);
        threadLocal.remove();
    });
    thread1.start();
    thread2.start();
}
```

:::warning ThreadLocal 的内存泄漏
每个 `Thread` 中都存在一个 `Map`，这个 `Map` 的类型是 `ThreadLocal.ThreadLocalMap`。`Map` 中的 `key` 为一个 `ThreadLocal` 实例，但是是这个实例的**弱引用**。当把 `ThreadLocal` 实例置为空以后，没有任何强引用指向它，所以 `ThreadLocal` 将会被 GC 回收，但是 `value` 却不能回收，因为存在**一条从当前线程连接过来的强引用**。只有当线程结束以后，强引用断开，`Map` 和其中未被回收的 `value` 才会被 GC 回收。出现内存泄漏的原因在于 `ThreadLocalMap` 的生命周期和 `Thread` 一样长，而不是因为使用了弱引用。
由于现在基本都使用线程池的方式来管理线程，所以不可能等到线程结束再去释放内存，导致程序运行期间这块内存将永远无法回收。所以如果需要使用 `ThreadLocal` 记得及时 `remove()`。
:::
