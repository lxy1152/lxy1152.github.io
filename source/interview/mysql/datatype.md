---
title: 👋 数据类型
---

## Mysql 有哪些数据类型，使用的时候有没有什么注意点？

- 整数类型：BIT、BOOL、TINY INT、SMALL INT、MEDIUM INT、INT、BIG INT
- 浮点数类型：FLOAT、DOUBLE、DECIMAL
- 字符串类型：CHAR、VARCHAR、TINY TEXT、TEXT、MEDIUM TEXT、LONGTEXT、TINY BLOB、MEDIUM BLOB、LONG BLOB
- 日期类型：Date、DateTime、TIMESTAMP、TIME、YEAR

:::tip 使用建议
使用的时候建议遵循从小原则。另外：
- 使用 `char` 和 `varchar` 的时候，需要注意 `char` 会去掉字符串末尾的空格
- 使用 `text` 和 `blob` 的时候，注意定期清理碎片空间，使用 `OPTIMIZE TABLE` 命令
- 浮点数会造成精度丢失，尽量使用定点数 `DECIMAL`
:::

## Mysql 中 varchar 和 char 的区别？

`varchar` 会根据存储的内容改变长度，`char` 是定长，如果长度不够，则使用空格补齐。使用空格补齐仅是在插入的时候，检索的时候会将末尾的空格删掉。

## Mysql 中插入数据使用自增 id 好还是使用 uuid，为什么？
- 单实例或单节点组，不担心网络爬虫获取数据量，推荐使用自增id，性能更好
- 分布式场景，20 个节点下的小规模分布式场景，推荐 uuid；20~200 个节点的中规模分布式场景，推荐自增 id + 步长的策略；200 以上节点，推荐雪花算法的全局自增 id
