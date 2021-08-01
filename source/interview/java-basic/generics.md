---
title: 😎 泛型
---

## 什么是泛型？

泛型是 JDK1.5 之后出现的，泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。如果直接使用 `Object` 类来实现通用、不同类型的处理，有这么两个缺点：

- 每次使用时都需要强制转换成想要的类型
- 在编译时编译器并不知道类型转换是否正常，运行时才知道，不安全

## 什么是泛型的类型擦除？

在 Java 中，泛型是 Java 编译器的概念，当编译器对带有泛型的 Java 代码进行编译时，它会去执行类型检查和类型推断，然后生成普通的不带泛型的字节码，这种普通的字节码可以被一般的 Java 虚拟机接收并执行，这个过程就叫做类型擦除（type erasure）。由于存在类型擦除，所以下面的操作在编译时就是不被允许的：

```java
public class Test {
    // 提示：'test(List<String>)' 与 'test(List<Integer>)' 冲突；
    // 两个方法具有相同的擦除
    public void test(List<String> list) {
        
    }
    
    public void test(List<Integer> list) {
    
    }
}
```

## 什么是泛型中的限定通配符和非限定通配符？

- `?`：非限定通配符，可以表示任意类型
- `<? extends T>`：表示这个类型必须是 `T` 类型、`T` 类型的子类或者实现了 `T` 接口
- `<? super T>`：表示这个类型必须是 `T` 类型或者 `T` 类型的父类

## 怎么新建一个泛型类、泛型方法、泛型变量？

```java
public class Test<T> {
    private T data;
    
    // 不支持静态泛型变量，这么写是错误的
    // private static T staticData;

    public Test(T data) {
        this.data = data;
    }

    public T get() {
        return this.data;
    }
    
    public static <T> T getStatic(T data) {
        System.out.println(data);
        return data;
    }
}
```
