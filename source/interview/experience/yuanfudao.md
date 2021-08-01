---
title: 🎺 猿辅导
---

## 视频面试

### 一面

1. 自我介绍
2. 聊聊专注度检测系统（简历上我的毕设项目）
3. 聊聊报表
4. 写 SQL 的时候你是怎么优化的
5. `explain` 字段有哪些，说说这些字段不同取值代表什么含义
6. 索引有哪些
7. 索引底层数据结构
8. 为什么用B+树，而不是B树和红黑树
9. 索引失效的场景
10. 隐式类型转换一定会导致索引失效吗
11. 最左匹配原则
12. 面试官写了三个 SQL，问我哪个会用索引
13. MySQL 隔离级别
14. 脏读、不可重复读、幻读
15. MySQL 默认的隔离级别
16. MVCC + Next-Key Lock
17. 除了行锁、间隙锁还知道哪些锁
18. MySQL 主从复制原理
19. Redis 的数据结构
20. SDS 的底层实现
21. Spring Bean 生命周期
22. Spring 三级缓存
23. 通过构造器和 `set` 方法的注入都可以通过三级缓存解决循环引用吗
24. 分布式微服务的优点
25. `HashMap` 是线程安全的吗
26. `ConcurrentHashMap` 怎么保证线程安全
27. `HashMap` 的 `put` 操作逻辑
28. `List` 怎么获取一定范围的子集
29. `ThreadLocal` 底层数据结构
30. `ThreadLocal` 所用 Map 的键是什么
31. `ThreadLocal` 取值的逻辑
32. 线程池的 7 个参数
33. 线程池在什么情况下会触发拒绝策略
34. 线程池的线程什么时候会被回收
35. 核心线程一定不会被回收吗
36. 核心线程数量你们是怎么定义的
37. `volatile` 关键字

12题：
表里可能还有别的字段

索引1：abcd

索引2：e

- `select * from table where b = 1 and c = 3 and a > 1 and d like '%12' order by b;`
- `select * from table where b < 3 and c = 3 and a > 1 and d like '%12' order by e;`
- `select * from table where e > 3;`

## 总结

猿辅导是我所有面试里面问的最细最多的，尤其是 MySQL 和并发，可劲怼着问。现在教育行业有点不太行，可能刚进去就直接被裁。谨慎考虑一下。
