---
title: 🤝 集群
---

## MySQL 集群有哪几种方式，分别适用于什么场景？

组建 MySQL 集群的方式：

- LVS + Keepalived + MySQL
- DRBD + Heartbeat + MySQL
- MySQL + Proxy
- MySQL Cluster
- MySQL + MHA
- MySQL + MMM

使用场景：

- 如果是双主复制，不需要数据拆分，可以使用 MHA 或 Keepalived 或 Heartbeat
- 如果是双主复制，需要数据拆分，采用 Cobar
- 如果是双主复制 + Slave，还做了数据拆分，需要读写分离，采用 Amoeba

## MySQL 集群如何保证主从可用性？

使用 HA（High Availability） 检测工具。HA 工具部署在第三台服务器上，同时连接主从，检测主从是否存活。如果主库宕机则及时将从库升级为主库，将原来的主库降级为从库。

## MySQL 主从复制的原理？<Badge text="重点" type="error"/>

:::center
![MySQL主从.png](https://i.loli.net/2021/07/30/cwYKFULqp7zToQ8.png)
:::

## MySQL 主从模式如何保证主从强一致性？

主从复制的原理是：主服务器写数据留下写入日志（Binary log），从服务器根据主服务器留下的日志（Relay log）模仿数据执行过程写入。所以有两个步骤可能导致主从复制不一致：

- 主服务器写日志不成功
- 从服务器根据日志恢复不成功

### 主服务器

修改配置，保证每次事务提交后，都能实时刷新到磁盘中，尤其是确保每次事务对应的 binlog 都能及时刷新到磁盘中：

```text
innodb_flush_log_at_trx_commit = 1
sync_binlog = 1
```

### 从服务器

修改配置，确保在从服务器上和复制相关的元数据表也采用 InnoDB 引擎，受到 InnoDB 事务安全的保护。后一个选项的作用是开启 relay log 自动修复机制，发生 crash 时，会自动判断哪些 relay log 需要重新从主服务器上抓取回来再次应用，以此避免部分数据丢失的可能性：

```text
master_info_repository = "TABLE"
relay_log_info_repository = "TABLE"
relay_log_recovery = 1
```

## MySQL 读写分离有哪些解决办法？

- 配置多数据源
- 使用中间件代理

:::tip 独写分离的目的
- 主从服务器负责各自的读和写，极大程度缓解了锁的争用
- 从服务器可以使用 MyISAM，提升查询性能以及节约系统开销
- 增加冗余，提高可用性
:::
