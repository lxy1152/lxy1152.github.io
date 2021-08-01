---
title: 😪 反射
---

## 什么是反射？

反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性。这种动态获取的信息以及动态调用对象的方法的功能称为 Java 语言的反射机制。

## 反射机制的优缺点？

- 优点：可以动态执行，在运行期间根据业务功能动态执行方法、访问属性，最大限度发挥了 Java 的灵活性
- 缺点：对性能有影响，反射操作总是慢于直接执行 Java 代码

## 反射机制底层是怎么实现的？

通过 JVM 加载的 class 文件获取相应类的信息。

## 反射机制在哪里使用到了？

Spring 通过反射创建 Bean 并放入容器中。

## 什么是动态代理，有哪些实现方式？

动态代理指的是在运行时动态生成代理类。一般是为了在不干预实现类的正常业务的情况下，给它添加一些预处理或者后置操作。比如 AOP 就是基于动态代理实现的。

实现动态代理可以使用：

- JDK 动态代理（JDKProxy）：通过实现接口得到一个代理类
- CGLib：通过继承得到目标类的子类