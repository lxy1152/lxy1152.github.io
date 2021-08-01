---
title: 🎧 学堂在线
---

## 简介

公司地点：五道口 科建大厦 7 层

上班时间：9 点半（左右）到 7 点（左右）

技术栈：k8s，kotlin，vert，JDK11

简历筛选：半天

## 笔试

1. 何时可以设置线程的优先级
2. 根据二叉树的前中序序列得到后序序列
3. 下面代码的输出结果：

```java
public static void main(String[] args) {
    String a = "hello";
    String b = "hello";
    System.out.println(a == b); // true，因为是字符串池中的同一个引用
    String c = new String("C");
    System.out.println(a == c); // false，因为在堆上新建了对象，所以肯定不等
    StringBuffer d = new StringBuffer("hello");
    System.out.println(a == d.toString()); // false，StringBuffer的toString是通过new String返回一个新的字符串
    String e = "hel" + "lo";
    System.out.println(b == e); // true，编译时会将e直接替换为hello
}
```

4. 下面代码的输出结果：

```java
public class Main {
    public static void main(String[] args) {
        // 只有C，因为使用了final，所以只涉及类的常量池，不会触发初始化
        System.out.println(B.c);
    }
}

class A {
    static {
        System.out.println("A");
    }
}

class B extends A {
    static {
        System.out.println("B");
    }

    public final static String c = "C";
}
```

5. 下面代码的输出结果：

```java
public class Main {
    public static void main(String[] args) {
        // 与上面代码的区别在于没有使用final，所以会触发类的初始化
        // 输出ABC
        System.out.println(B.c);
    }
}

class A {
    static {
        System.out.println("A");
    }
}

class B extends A {
    static {
        System.out.println("B");
    }

    public static String c = new String("C");
}
```

6. 手写两种线程安全的单例模式
7. JVM 中内存区域的划分，主要永久代和元空间
8. JVM 调优工具

## 现场面试

笔试结束后，总共三个人挨个找我面试，最后一个人是 CTO。

### 第一个面试官

1. 自我介绍
2. 介绍一下项目经历
3. MySQL 索引失效的场景
4. InnoDB 怎么实现事务的
5. Redis 的数据删除策略
6. 怎么实现 LRU
7. 说了一下笔试中错的问题

### 第二个面试官

就一直在聊项目经历。

### 第三个面试官（CTO）

1. 自我介绍
2. 讲讲自己最感兴趣的项目经历
3. 为什么离职
4. 介绍一下 MySQL 的事务
5. 了解 Linux 内核嘛，介绍一下 select 和 epoll
6. 场景：程序上线，CPU 100%，怎么排查

## 总结

总的来说，技术性的东西问的不多，对项目经历问的会比较多。因为是跟教育相关的公司，所以我觉得如果你的项目经历有教育相关的经历，他们会比较感兴趣。

后续：hr 认为项目经历与公司需求不太相符，压工资到 15k，拒了。
