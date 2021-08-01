---
title: 😵 异常
---

## 介绍一下 Java 中的异常？

::: center
![异常.jpg](https://i.loli.net/2021/07/31/kyXmHLnpdaj7vQw.png)
:::

`Throwable` 可以用来表示任何可以作为异常抛出的类，分为 `Error` 和 `Exception` 两种类型。

### Error-错误

`Error` 表示 JVM 无法处理的错误，如：`OutOfMemoryError`，`StackOverflowError` 等。

### Exception-异常

`Exception` 表示异常，它会再细分为下面两类：

- 非受检异常：是程序运行时的错误，也可以通过 `try/catch` 来捕获处理，如：`NPE`，`IndexOutOfBoundsException` 等
- 受检异常：必须使用 `try/catch` 语句捕获并处理的异常，如果不处理就要使用 `throws` 关键字向上层抛出

## 什么是异常链？

异常链是指在进行一个异常处理时抛出了另外一个异常，由此产生了一个异常链条。特别需要注意的是如果你因为一个异常而决定抛出另一个新的异常时，一定要包含原有的异常（通过 `Throwable` 提供的构造器），这样处理程序才可以通过 `getCause()` 和 `initCause()` 方法来访问异常最终的根源。

## try 中如果包含返回语句，finally 会怎么执行？

在 `try` 中如果使用了返回语句，仍然会继续执行 `finally` 块。如果 `finally` 块同样使用了返回语句，那么返回值将会使用 `finally` 块中的返回值，而不是 `try` 中的返回值。

:::warning 在 finally 中修改返回值对应的变量的的值并不会影响返回值
在下面的这个例子中，将输出 1 而不是 2：
```java
public static void main(String[] args) {
    System.out.println(test());
}

public static int test() {
    int a = 0;
    try {
        a = 1;
        return a;
    } finally {
        a = 2;
        // 使用return会返回2
        // return 2;
    }
}
```
:::
