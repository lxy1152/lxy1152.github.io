---
title: 💁‍♂️ Redis 事务
---

## Redis 怎么处理事务？

Redis 使用 `MULTI`、`EXEC`、`DISCARD`、`WATCH` 这四个命令完成事务。

使用 `MULTI` 开启事务，客户端可以向服务器发送任意多个命令，这些命令不会立马执行，而是被放到一个队列中，当调用 `EXEC` 命令时，所有队列中的命令才会被执行。如果没有执行 `EXEC`，那么事务中的所有命令都不会被执行。如果在执行 `EXEC` 命令之后发生了错误，或者在事务中某个命令发生了错误，事务也会正常执行，不会进行回滚。比如下面的操作将正常执行：

```text
127.0.0.1:6379> multi 
OK 
127.0.0.1:6379> set key value1 
QUEUED 
127.0.0.1:6379> incr key 
QUEUED 
127.0.0.1:6379> set key value2 
QUEUED 
127.0.0.1:6379> exec 
1) OK 
2) (error) ERR value is not an integer or out of range 
3) OK 
127.0.0.1:6379> get key 
"value2" 
```

通过调用 `DISCARD` 命令，客户端可以清空事务队列，并放弃执行事务。在事务执行之前，可以通过 `WATCH` 命令监视一个或多个 `key`，如果在事务执行之前这个（或这些）`key` 被其他命令修改了，那么事务将被打断。可以视为 Redis 提供的 CAS 锁。
