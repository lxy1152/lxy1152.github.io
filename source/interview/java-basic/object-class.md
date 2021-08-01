---
title: 😁 Object 类
---

## 介绍一下 equals() 方法？<Badge text="重点" type="error"/>

- 自反性：自身和自身是相同的
- 对称性：a 和 b 相同，同时 b 和 a 也是相同的（调换前后顺序不影响结果）
- 传递性：a 和 b 相同且 b 和 c 相同，可以得到 a 和 c 相同
- 一致性：多次调用 `equals()` 方法，结果是不变的
- 与 `null` 的比较：结果一定是 `false`

:::tip 等价与相等
- 对于基本类型，`==` 判断两个值是否相等，基本类型没有 `equals()` 方法
- 对于引用类型，`==` 判断两个变量是否引用同一个对象，而 `equals()` 判断引用的对象是否等价（默认也是通过 `==` 来进行比较，这就是为什么需要重写这个方法）
  :::

## 介绍一下 hashcode() 方法？<Badge text="重点" type="error"/>

`hashCode()` 方法将返回这个对象对应的哈希值，等价的两个对象散列值一定相同，但是散列值相同的两个对象不一定等价，这是因为计算哈希值具有随机性，两个值不同的对象可能计算出相同的哈希值。 在覆盖 `equals()` 方法时应当总是覆盖 `hashCode()` 方法，保证等价的两个对象哈希值也相等。

## 介绍一下 toString() 方法？

默认返回 `ClassName@30dae81` 这种形式，其中 `@` 后面的数值为哈希值的无符号十六进制表示。

## 介绍一下 clone() 方法？

虽然 `clone()` 是 `Object` 类中的方法，但直接重写（因为 `clone()` 方法的权限是 `protected`，需要重写并将权限放大，要不然无法调用）并调用会抛出 `CloneNotSupportedException` 异常。这是因为 `Cloneable` 接口的规定：如果一个类没有实现 `Cloneable` 接口又调用了 `clone()` 方法，就会抛出 `CloneNotSupportedException` 异常。

:::warning 浅拷贝
直接调用 `super.clone()` 所得到对象的是浅拷贝对象。
:::

::: tip clone() 方法的替代方案
使用 `clone()` 方法来拷贝一个对象即复杂又有风险，它会抛出异常，并且还需要类型转换。替代方案有：
1. 提供拷贝构造函数：`public MyClass(MyClass clazz)`
2. 提供拷贝工厂
3. 实现序列化接口
:::
