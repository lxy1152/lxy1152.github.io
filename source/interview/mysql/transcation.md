---
title: 👍 事务
---

## 什么是事务？

事务是一个操作序列，这些操作要么全部执行，要么都不执行。

## 事务的四大特性？

事务具有四大特性：

- 原子性：事务是最小的执行单位，不允许分割，事务的原子性确保动作要么全部完成，要么完全不起作用
- 一致性：执行事务前后，数据保持一致，多个事务对同一个数据读取的结果是相同的
- 隔离性：并发访问数据库时，一个用户的事务不被其他事务所干扰，多个并发事务之间相互隔离，防止出现脏读、不可重复读、幻读
- 持久性：一个事务被提交之后，它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响

## MySQL 是如何实现事务的？<Badge text="重点" type="error"/>

事务是通过如下方式实现的：

- 原子性：通过 undo log 实现，每条数据变更都伴随一条 undo log 日志的生成，当系统发生错误或执行回滚根据 undo log 做逆向操作
- 持久性：通过 redo log 实现的，redo log 记录了数据的修改日志。数据持久化到磁盘，先是储存到缓冲池里，然后缓冲池中的数据定期同步到磁盘中，如果系统宕机，可能会丢失数据，系统重启后会读取redo log恢复数据
- 隔离性：MySQL 数据库通过 MVCC + next-key 机制实现了隔离性
- 一致性：通过以上三大特性，保障了事务的一致性

:::tip binlog 和 redolog
binlog 是二进制文件，记录了对数据库执行更改的所有操作，不包括 `select`、`show`，因为这两个操作没有对数据本身做修改。但是如果操作了数据，但是数据没有发生变化，也会记录到 binlog。常用来数据恢复，数据备份。

redo log 又叫做重做日志文件，记录了事务的修改，不管事务是否提交都记录下来。在实例和介质失败时，InnoDB 存储引擎会使用 redo log 恢复到之前的状态，保证数据的完整性。
:::

## MySQL 的隔离级别都有哪些？<Badge text="重点" type="error"/>

| 隔离级别 | 脏读 | 不可重复读 | 幻读 |
| :---: | :---: | :---: | :---: |
| READ-UNCOMMITTED 读未提交 | ✔ | ✔ | ✔ |
| READ-COMMITTED 读已提交 | ❌ | ✔ | ✔ |
| REPEATABLE-READ 可重复读 | ❌ | ❌ | ✔ |
| SERIALIZABLE 可串行化 | ❌ | ❌ | ❌ |

## 什么情况会造成脏读、不可重复读、幻读？如何解决？<Badge text="重点" type="error"/>

- 脏读（**一个事务读取到另一个事务未提交的数据**）：有两个事务 A 和 B，A 读取已经被 B 修改但未提交的字段，此时 B 回滚，那么 A 读取的字段就是临时且无效的，可以提高隔离级别，改成读已提交
- 不可重复读（**一个事务读取到另一个事务提交的数据**）： 有两个事务 A 和 B，A 读取了一个字段值，然后 B 更新并且提交事务，A 再重新读取这个字段，就和之前不相等了，可以提高隔离级别，改成可重复读
- 幻读（**一个事务读取到另一个事务提交的数据**）： 有两个事务 A 和 B，A 读取某个范围内的记录时，B 又在该范围内插入了新的记录并提交，当事务 A 再次读取该范围的记录时，会产生幻行

:::tip 不可重复读和幻读的区别
- 不可重复读的重点是修改，比如多次读取一条记录发现其中某些列的值被修改
- 幻读的重点在于新增或者删除，比如多次读取一条记录发现记录增多或减少了
:::

## MVCC 的实现原理？<Badge text="重点" type="error"/>

MVCC（Multi-Version Concurrency Control，多版本并发控制）是通过在每行记录后面保存两个隐藏的列来实现的。这两个列，一个保存了行的创建时间，一个保存行的过期时间（或删除时间）。当然存储的并不是实际的时间值，而是系统版本号（system version number)。每开始一个新的事务，系统版本号都会自动递增。事务开始时刻的系统版本号会作为事务的版本号，用来和查询到的每行记录的版本号进行比较。

### SELECT

InnoDB 会根据以下两个条件检查每行记录，只有符合下面两个条件的记录，才能返回作为查询结果：

- 对于创建版本，只查找早于当前事务版本的数据行（行的系统版本号小于或等于事务版本号），这样可以确保事务读取的行，要么是在事务开始前已经存在的，要么是事务自身插入或者修改过的
- 对于删除版本，只查找早于当前事务版本的数据行（删除版本可以没有定义），这样可以确保事务读取到的行，在事务开始之前未被删除

### INSERT

对新插入的每一行保存当前系统版本号作为行版本号。

### DELETE

对删除的每一行保存当前系统版本号作为行删除标识。

### UPDATE

插入一行新记录，保存当前系统版本号作为行版本号，同时保存当前系统版本号到原来的行作为行删除标识。