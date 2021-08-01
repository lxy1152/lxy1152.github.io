---
title: 🤪 包装类和缓存池
---

## 介绍一下基本数据类型和对应的包装类？

| 类型 | 包装类 | 基本类型的长度(位) |
|  :---:  |  :---:  | :---: |
| byte | Byte | 8 |
| boolean | Boolean | 8 |
| char | Character | 16 |
| short | Short | 16 |
| int | Integer | 32 |
| float | Float | 32 |
| long | Long | 64 |
| double | Double | 64 |

包装类型与其基本类型之间的赋值会通过自动装箱和自动拆箱来进行转换（以下内容通过字节码可以查看）：

```java
public static void main(String[] args) {
    Integer a = 2; // 装箱，调用了Integer.valueOf(2)
    int b = a; // 拆箱，调用了a.intValue()
}
```

## 了解缓存池吗？<Badge text="重点" type="error"/>

| 包装类 | 缓存池范围 |
|  :---:  |  :---:  |
| Integer | -128~127 |
| Boolean | true 和 false |
| Short | -128~127 |
| Character | \u0000~\u007F |
| Byte | 所有 |
| Double | 未实现缓存池 |
| Float | 未实现缓存池 |

:::tip 调整 Integer 缓存池的上限
`Integer` 缓存池可通过 VM 参数 `-XX:AutoBoxCacheMax` 来指定缓存池的上限。
:::

:::tip valueof 与 new
简单来说，调用 `valueof()` 方法会从缓存池中取值（可以通过 `valueof()` 的源码进行证实），使用 `new` 会新建对象。这就是为什么 `new String()`
会创建两个对象（一个在堆，一个在常量池）。
:::
