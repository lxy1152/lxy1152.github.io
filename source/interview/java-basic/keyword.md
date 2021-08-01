---
title: 😛 关键字
---


## 介绍一下 final 关键字？

### 修饰变量

如果使用 `final` 来修饰变量，那么表示这个变量是常量。对于基本类型，`final` 使它的值不能改变；对于引用类型，`final` 使引用不变，所以它不能再引用其他对象，但已经被引用的对象仍然是可以修改的。

### 修饰方法

如果使用 `final` 来修饰方法，那么表示这个方法不能被子类重写。

### 修饰类

如果使用 `final` 来修饰变量，那么表示这个类不能被继承。

::: tip
除了 `String` 类以外，`Math`、`System` 等类也是使用 `final` 修饰的。
:::

## 介绍一下 static 关键字？

### 修饰变量

表示这个变量是静态变量，可以直接通过类名来访问这个变量。

### 修饰方法

表示这个方法是静态方法，静态方法只能调用本类中的静态变量和其他静态方法。

### 修饰一段代码块

表示这段代码是静态代码块，静态代码块会在类初始化的时候执行一次。

### 修饰内部类

非静态内部类依赖于外部类的实例，也就是说需要先创建外部类实例，才能用这个实例去创建非静态内部类，而静态内部类不需要。

### 静态导包

在使用静态变量和方法时不用再指明 ClassName，从而简化代码，但可读性大大降低，不推荐使用。

### 类的初始化顺序

::: center
![init_order.png](https://i.loli.net/2021/07/29/YTFHv7G2xny9la8.png)
:::

## 介绍一下 synchronized 关键字？<Badge text="重点" type="error"/>

在 Java 中，`synchronized` 关键字是用来控制线程同步的，在多线程环境下，被 `synchronized` 关键字修饰的代码段、方法不会被多个线程同时执行。`synchronized` 既可以加在一段代码上，也可以加在方法上，还可以是类上。同时它还是一个可重入锁。

## 介绍一下 volatile 关键字？<Badge text="重点" type="error"/>

当一个变量使用 `volatile` 关键字修饰时：

- 在修改时，会强制把该线程本地内存中的变量刷新到主内存中
- 在读取时，会强制从主内存中读取最新的值

`volatile` 仅保证可见性，不保证原子性（如果要保证原子性，需要使用 `AtomicXX` 类，如 `AtomicInteger`），测试代码：

```java
public class Main { 
    private static volatile long value = 0; 
 
    public static void main(String[] args) { 
        testVolatile(); 
    } 
 
    private static class LoopVolatile implements Runnable { 
        @Override 
        public void run() { 
            long val = 0; 
            while (val < 10000000L) { 
                value++; 
                val++; 
            } 
        } 
    } 
 
    private static class LoopVolatile2 implements Runnable { 
        @Override 
        public void run() { 
            long val = 0; 
            while (val < 10000000L) { 
                value++; 
                val++; 
            } 
        } 
    } 
 
    private static void testVolatile(){ 
        Thread t1 = new Thread(new LoopVolatile()); 
        t1.start(); 
 
        Thread t2 = new Thread(new LoopVolatile2()); 
        t2.start(); 
 
        while (t1.isAlive() || t2.isAlive()) { 
        } 
 
        System.out.println("final val is: " + value); 
    } 
}
```

同时 `volatile` 会禁止指令重排，通过内存屏障保证特定操作的顺序。

:::tip volatile 在单例模式中的使用
双捡锁方式的单例模式建议加上 `volatile`，因为实例化操作并不是原子操作。假设单例类为 `Singleton`，通过 `javap -v Singleton.class` 查看字节码：

1. `new #3 // class Singleton`
2. `dup`
3. `invokespecial  #4 // Method init`
4. `a_store_1`

它们对应的操作为：
1. 分配对象内存
2. 调用构造器方法，执行初始化
3. 将对象引用赋值给变量

由于步骤二、三需要步骤一的结果，所以步骤一不会被重排，但是步骤二、三是可能重排的。在多线程情况下，就可能导致有的线程拿到了未初始化的变量。通过 `volatile`
避免指令重排可以解决这个问题。
:::

## 介绍一下 transient 关键字？

使用 `transient` 关键字修饰的变量在序列化时将不会进行序列化。可以参考 `ArrayList` 类，通过重写 `readObject()` 和 `writeObject()`
方法实现自定义序列化内容。

## 有哪些访问修饰符？

| 修饰符 | 当前类 | 同包 | 子类 | 其他包 |
|  :---:  |  :---:  | :---: | :---: | :---: |
| public | ✔ | ✔ | ✔ | ✔ |
| protected | ✔ | ✔ | ✔ | ❌ |
| default | ✔ | ✔ | ❌ | ❌ |
| private | ✔ | ❌ | ❌ | ❌ |
