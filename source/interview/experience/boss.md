---
title: 🎭 Boss 直聘
---

## 简介
简历筛选：两天。

## 笔试

一个问卷，前三道题任选两道，后两道题选其中一道。

1. 两个线程，一个线程输出小写字母a-z，一个线程输出大写字母A-Z，最后输出结果是aAbB...zZ，同时还有每个线程的打印耗时，以及总耗时

```java
public class Main {
    public static void main(String[] args) {
    MultiThreadTest multiThreadTest = new MultiThreadTest();
    new Thread(multiThreadTest::printCharacterInLowerCase).start();
    new Thread(multiThreadTest::printCharacterInUpperCase).start();
}
}

class MultiThreadTest {
    /**
     * 控制小写字母输出的信号量
     */
    private Semaphore semaphoreLower = new Semaphore(1);

    /**
     * 控制大写字母输出的信号量
     */
    private Semaphore semaphoreUpper = new Semaphore(0);

    /**
     * 线程1执行所用时间
     */
    private long timeOfThread1;

    /**
     * 输出小写字母
     */
    public void printCharacterInLowerCase() {
        long startTime = System.currentTimeMillis();
        try {
            for (int i = 97; i < 123; i++) {
                semaphoreLower.acquire();
                System.out.print((char) i);
                semaphoreUpper.release();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        timeOfThread1 = System.currentTimeMillis() - startTime;
    }

    /**
     * 输出大写字母
     */
    public void printCharacterInUpperCase() {
        long startTime = System.currentTimeMillis();
        try {
            for (int i = 65; i < 91; i++) {
                semaphoreUpper.acquire();
                System.out.print((char) i);
                semaphoreLower.release();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        long timeOfThread2 = System.currentTimeMillis() - startTime;
        System.out.println("\n线程1执行时间: " + timeOfThread1 + "ms");
        System.out.println("线程2执行时间: " + timeOfThread2 + "ms");
        System.out.println("总执行时间: " + (timeOfThread1 + timeOfThread2) + "ms");
    }
}
```

2. 求 100 以内的质数的阶乘和，即 2! + 3! + 5! + ... + 97! 的和（会溢出，用 BigDecimal 类）

```java
public BigDecimal primeFactorialSum() {
    BigDecimal num = new BigDecimal(1);
    BigDecimal sum = new BigDecimal(0);
    for (int i = 2; i < 100; i++) {
        // 计算阶乘
        num = num.multiply(new BigDecimal(i));
        // 只有是质数时才相加
        if (isPrime(i)) {
            sum = sum.add(num);
        }
    }
    return sum;
}

public boolean isPrime(int x) {
    for (int i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
```

3. 设计并实现一个尽可能满足 Exactly Once 协议的阻塞队列，并基于该队列实现一个准确计数的 publish-subscribe 模型

没写，有空再看。

4. 有 23 枚硬币在桌子上，10 枚正面朝上，假设别人蒙住你的眼睛，而你的手又摸不出硬币的正反面。让你用最好的方法把硬币分成两堆，每堆正面朝上的硬币个数相同

分为一堆 10 个，另一堆 13 个，然后将 10 个那一堆所有的硬币翻转就可以了。

5. 中间只隔一个数字的两个质数被称为质数对，比如 17 和 19。证明质数对之间的数字总能被 6 整除（假设这两个质数都大于 6）

- 穷举：通过代码可以验证一定范围内（比如小于 2147483674 的质数对）的质数对都是满足题意的
- 数学证明：
    - 两个质数都不会被 2 整除，因此中间的数是 2 的倍数
    - 两个质数都不会被 3 整除，因此第一个质数的前一个数也不会被 3 整除（因为它和后一个质数相差 3），所以中间的数是 3 的倍数
    - 因为中间的数既是 2 的倍数，又是 3 的倍数，所以这个数是 6 的倍数

## 视频面
### 一面

1. 自我介绍
2. 简单聊聊项目
3. TCP/IP 模型
4. TCP 三次握手
5. TCP 的超时重传机制
6. 操作系统的分页和分段
7. 常见的排序算法
8. 它们的时间复杂度和空间复杂度各是多少
9. 快排的时间复杂度为什么是 $O(logn)$
10. 快排除了递归的写法还知道其他实现方式嘛
11. 算法题：手写快排或者堆排
12. MySQL 索引
13. B 树、B + 树、红黑树的区别
14. 红黑树的时间复杂度为什么是 $O(logn)$
15. `HashMap` 底层数据结构
16. `HashMap` 的 `put` 操作的逻辑
17. `ConcurrentHashMap` 如何保证线程安全
18. 微服务的优点
19. 最近看了什么书
20. 有什么想问我的

### 二面

1. 自我介绍
2. 链表和数组的特点
3. 链表查询的时间复杂度是 $O(n)$，怎么优化（我回答红黑树）
4. 红黑树相比 B 树有什么优点
5. Redis 的基本数据结构
6. `zset` 的底层数据结构（到了这个问题我才意识到面试官的第三个问题是想让我答跳跃表）
7. 跳跃表的原理
8. 给你一百万的数据，跳跃表只能建立一层索引，跳跃表的步长怎么定
9. 有什么问题想问我的

## 总结

Boss 直聘给我感觉是面试体验最差的，两个面试官都贼严肃，整场面试下来感觉特别压抑。而且 hr 打电话的时候直接说了加班比较严重，我和之前在这个公司的一个同事聊天也确认了，加班确实严重，准备去这里的提前做好心理准备。
