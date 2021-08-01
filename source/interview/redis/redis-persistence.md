---
title: 🙆‍♂️ Redis 持久化策略
---

## Redis 的持久化策略有哪些？

### RDB 策略

将某个时间点的所有数据都存放到硬盘上，可以将快照复制到其它服务器从而创建具有相同数据的服务器副本，但是：

- 如果系统发生故障，将会丢失最后一次创建快照之后的数据
- 如果数据量很大，保存快照的时间会很长

:::tip 默认启用 RDB 策略
Redis 默认启用的是 RDB 策略，数据保存到 `./dump.rdb` 中。如果需要启用 AOF 策略，需要修改配置项 `appendonly` 为 `yes`，默认输出的文件是 `./appendonly.aof`。
:::

:::tip RDB 策略的优缺点
优点：

- 存储的文件是紧凑的，备份速度比 AOF 要快
- 方便恢复不同版本的数据，适合于容灾恢复，备份文件可以在其他服务器恢复

缺点：

- 如果 Redis 因为没有正确关闭而停止工作，则在下一个 RDB 备份操作到来之前，新增的数据可能会丢失
- 由于是通过 fork 子线程来进行备份操作，如果数据量很大的话，fork 比较耗时，可能会导致服务器卡顿
:::

### AOF 策略

将写命令添加到 AOF 文件（Append Only File）的末尾。使用 AOF 持久化需要设置同步选项，从而确保写命令同步到磁盘文件上的时机。这是因为对文件进行写入并不会马上将内容同步到磁盘上，而是先存储到缓冲区，然后由操作系统决定什么时候同步到磁盘。有以下同步选项：

- always：每个写命令都同步，这个选项会严重降低服务器的性能
- everysec：每秒同步一次，这个选项比较合适，可以保证系统崩溃时只会丢失一秒左右的数据，并且 Redis 每秒执行一次同步对服务器性能几乎没有任何影响
- no：让操作系统来决定何时同步，这个选项并不能给服务器性能带来多大的提升，而且也会增加系统崩溃时数据丢失的数量

:::tip AOF 策略的优缺点
优点：

- AOF 是一个日志追加文件，即使因为没有正确关闭而停止工作造成 AOF 文件末尾是一个写到一半的命令，也可以借助 `redis-check-aof` 进行恢复
- AOF 包含的是一个又一个的操作命令，易于理解和解析

缺点：

- AOF 采用文件追加的方式，使得文件越来越大，如果没有设置好对应的重写策略，容易造成内存溢出
- AOF 可能比 RDB 要慢（跟 `no-appendfsync-on-rewrite` 有关）
- AOF 采用文件追加的方式更新数据，而 RDB 是从头开始创建，更健壮和稳定
:::