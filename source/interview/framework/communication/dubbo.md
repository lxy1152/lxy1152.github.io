---
title: 🍁 Dubbo
---

## 什么是 Dubbo？

Dubbo 是阿里开源的高性能 RPC 分布式服务框架。

## Dubbo 服务治理的逻辑？

:::center
![Dubbo服务治理.png](https://i.loli.net/2021/07/31/bGE1WX8RKnsVrk9.png)
:::

## Dubbo 都支持哪些协议？

Dubbo 支持 dubbo、rmi、hessian、http、webservice、thrift、redis、rest 等协议。dubbo 协议是推荐使用的，默认使用的协议就是 dubbo 协议，这种协议采用单一长连接和 NIO 异步通讯，适合于小数据量、大并发的服务，或者服务消费者机器数远大于服务提供者机器数的情况。dubbo 协议的缺点是不适合传送大数据量的服务，比如传送文件、视频等，除非请求量很低。

## Dubbo 有哪几种节点角色？

- Provider：暴露服务的服务提供方
- Consumer：调用远程服务的服务消费方
- Registry：服务注册与发现中心
- Monitor：监控中心
- Container：服务运行容器

## 服务注册与发现流程图？

:::center
![Dubbo服务注册与发现.png](https://i.loli.net/2021/07/31/Tql5AeNrvS92MYo.png)
:::

## Dubbo 有哪几种集群容错方案？

- failsafe：失败安全，出现错误时直接忽略
- failover（默认）：失败时会自动重试其他服务器
- failfast：快速事变，立即报错，只发起一次调用
- failback：失败后自动恢复，记录失败请求，定时重发
- forking：并行调用一个服务器，只要一个成功就返回
- broadcast：广播并逐个调用服务者，任意一个报错则就失败

## Dubbo 的负载均衡策略？

- Random LoadBalance：随机，按权重设置随机概率（默认）
- RoundRobin LoadBalance：轮询，按公约后的权重设置轮询比率
- LeastActive LoadBalance：最少活跃调用数，相同活跃数的随机，活跃数指调用前后计数差
- ConsistentHash LoadBalance：一致性哈希，相同参数的请求总是发到同一提供者
