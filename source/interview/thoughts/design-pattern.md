---
title: 👨‍🔧 设计模式
---

## 什么是设计模式？

设计模式，是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。

## 单例模式<Badge text="重点" type="error"/>

### 什么是单例模式？

单例类必须保证只有一个实例存在，整个系统只能使用一个对象实例。优点是不会频繁地创建和销毁对象，浪费系统资源。

### 单例模式有哪几种创建方式？

<CodeGroup>
<CodeGroupItem title="懒汉式（线程不安全）">
```java
/**
 * 懒加载：是
 * 线程安全：不安全
 */
public class Singleton {
    private static Singleton instance;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
</CodeGroupItem>

<CodeGroupItem title="懒汉式（线程安全）" active>
```java
/**
 * 懒加载：是
 * 线程安全：使用了synchronized，所以可以保证线程安全
 */
public class Singleton {
    private static Singleton instance;

    private Singleton() {

    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
</CodeGroupItem>

<CodeGroupItem title="饿汉式" active>
```java
/**
 * 懒加载：否
 * 线程安全：在类加载时就进行了实例化，所以可以保证线程安全
 */
public class Singleton {
    private static Singleton instance = new Singleton();

    private Singleton() {

    }

    public static Singleton getInstance() {
        return instance;
    }
}
```
</CodeGroupItem>

<CodeGroupItem title="双检锁" active>
```java
/**
 * 懒加载：是
 * 线程安全：是，另外相比线程安全的懒汉式，这种方式的执行效率明明显更高
 */
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```
</CodeGroupItem>

<CodeGroupItem title="静态内部类" active>
```java
/**
 * 懒加载：是
 * 线程安全：同样的，基于类加载器实现的线程安全
 */
public class Singleton {
    private Singleton() {

    }

    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
    
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
}
```
</CodeGroupItem>
</CodeGroup>

::: tip 为什么要命名为饿汉式和懒汉式
通过上面的代码可以看到：

- 饿汉式不支持懒加载，不管程序是否需要这个对象的实例，总是在类加载的时候就先创建好实例
- 懒汉式支持懒加载，只有在需要的时候才会去创建对象

饿汉式就好像一个人不管想不想吃东西都会把吃的提前先买好，如同饿怕了一样；而懒汉式就好像一个人懒的直到饿的不行了才会去吃东西。
:::
