---
title: 😆 String 类
---

## 为什么 String 对象是不可变的？

不可变是指一个 `String` 对象被创建后，这个对象就不允许再被修改。实现不可变性的关键在于：

- `String` 类被声明为 `final`，因此它不可被继承
- `String` 类内部通过一个 `char` 型数组来保存数据，这个数组同样被声明为 `final`，因此不能直接修改保存的数据

:::tip String 类设计为不可变的原因
1. 因为不可变，所以哈希值是不变的，这样就可以缓存哈希值
2. 可以在 String Pool 中缓存
3. 不可变性使得它一定是线程安全的
:::

## 了解字符串池（String pool）吗？<Badge text="重点" type="error"/>

JVM 为了提升性能和减少内存开销，避免字符串的重复创建，维护了一块特殊的内存空间，叫做字符串池（String Pool）。

### 采用字面值赋值

如果通过 `String a = "abc"` 的方式来获得一个新的字符串，那么会自动的将 `abc` 保存到字符串池中。

### 通过 new 关键字新建对象
如果通过 `new` 来获取新的字符串，那么程序总是会在堆上创建一个新的对象（同时如果字符串池中没有这个字符串，那么还要在字符串池中创建一个字符串对象），所以这个步骤会创建两个对象。如果通过 `==` 进行比较，那么它们一定是不等的。

:::tip String.intern()
除了上述两种方式，还可以调用 `String` 类中的 `intern()` 方法从字符串池中获取一个字符串的引用，如果字符串池中不存在这个字符串，那么首先会把它保存起来再返回。
:::

## 讲一下 String，StringBuilder 和 StringBuffer 的区别？

### 可变性

- `String` 不可变
- `StringBuilder` 和 `StringBuffer` 均可变

### 线程安全

- `String` 因为不可变，所以是线程安全的
- `StringBuilder` 不是线程安全的
- `StringBuffer` 是线程安全的，因为使用了 synchronized 关键字（在方法上加锁）

:::tip StringBuilder 和 StringBuffer 的区别和联系
`StringBuilder` 和 `StringBuffer` 都继承自 `AbstractStringBuilder`，区别在于是否使用了 `synchronized`。

另外它们重写的 `toString()` 方法都是通过 `new String()` 的方式来返回一个新的字符串，所以在比较时是不相等的。
:::
