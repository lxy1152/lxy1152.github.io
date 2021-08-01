---
title: 🖐️ 存储引擎
---

## InnoDB 和 MyISAM 的区别？

- Innodb 支持事务，MyISAM 不支持
- Innodb 支持外键，MyISAM 不支持
- Innodb 主键索引的叶子节点是数据文件，辅助索引的叶子节点是主键的值；MyISAM 的主键索引和辅助索引的叶子节点都是数据文件的指针
- Innodb 不保存表的行数，执行 `select count(*) from table` 需要全表扫描；MyISAM 用一个变量保存了整个表的行数，执行上述语句只需要读取该变量，速度很快
- Innodb 所有的表在磁盘上保存在一个文件中；MyISAM 存储成三个文件
- Innodb 需要更多的内存和存储；MyISAM 可被压缩，存储空间较小
- Innodb 移植方案拷贝文件、备份 binlog，或者用 mysqldump，移植较困难；MyISAM 数据以文件形式存储，在备份和回复时可以单独针对表进行操作
- Innodb 支持行锁、表锁；MyISAM 支持表锁
- Innodb 在 5.7 版本之前不支持全文索引；MyISAM 支持全文索引

## InnoDB 的默认加锁方式，怎么实现的？

InnoDB 默认加锁方式是行级锁，通过给索引上的索引项加锁来实现的。
