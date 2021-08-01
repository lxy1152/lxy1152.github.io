---
title: ✈️ Kafka
---

## Kafka 是什么？它有哪些应用场景？

Kafka 是一个分布式流式处理平台，具有三个关键功能：

- 消息队列：发布和订阅消息流，这个功能类似于消息队列，这就是 Kafka 也被归类为消息队列的原因
- 容错的持久方式存储记录消息流：Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险
- 流式处理平台：在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库

Kafka 主要有两大应用场景：

- 消息队列：建立实时流数据管道，从而可靠地在系统或应用程序之间获取数据
- 数据处理：构建实时的流数据处理程序来转换或处理数据流

## Kafka 的优势？

Kafka 相比其他消息队列主要的优势如下：

- 极致的性能：基于 Scala 和 Java 语言开发，设计中大量使用了批量处理和异步的思想，最高可以每秒处理千万级别的消息
- 生态系统兼容性无可匹敌 ：Kafka 与周边生态系统的兼容性很好，尤其在大数据和流计算领域

## 介绍一下 Kafka 的发布-订阅模型？

:::center
![kafka发布订阅.png](https://i.loli.net/2021/08/01/Vg5CxKd7vTAR9hz.png)
:::

发布-订阅模型（Pub-Sub）使用主题（Topic）作为消息通信载体，类似于广播模式。发布者发布一条消息，该消息通过主题传递给所有的订阅者，在一条消息广播之后才订阅的用户则是收不到该条消息的。在发布-订阅模型中，如果只有一个订阅者，那它和队列模型就基本是一样的了。所以说发布-订阅模型在功能层面上是可以兼容队列模型的。

## 什么是 Producer，Consumer，Broker，Topic，Partition？

:::center
![kafka角色.png](https://i.loli.net/2021/08/01/9wXLUKRDdFWfSng.png)
:::

- Producer：生产者，产生消息的一方
- Consumer：消费者，消费消息的一方
- Broker：代理，可以看作是一个独立的 Kafka 实例，多个 Kafka Broker 会组成集群
- Topic：主题，Producer 将消息发送到特定的主题，Consumer 通过订阅特定的 Topic 来消费消息
- Partition：分区是属于 Topic 的一部分，一个 Topic 可以有多个 Partition，并且同一 Topic 下的 Partition 可以分布在不同的 Broker 上

::: tip Partition 与队列
Kafka 中的 Partition（分区） 实际上可以对应消息队列中的队列。
:::

## Kafka 的多副本机制？

Kafka 为分区引入了多副本（Replica）机制。分区（Partition）中的多个副本之间会有一个 leader，其他副本称为 follower。发送的消息会被发送到 leader 副本，然后 follower 副本才能从 leader 副本中拉取消息进行同步。

这样生产者和消费者只与 leader 副本交互，其他副本的存在只是为了保证消息存储的安全性。当 leader 副本发生故障时，会从 follower 中选举出一个 leader，但是 follower 中如果有和 leader 同步程度达不到要求的是参加不了竞选的。

Kafka 采用这种机制的好处：

- 各个 Partition 可以分布在不同的 Broker 上，能提供比较好的并发能力（负载均衡）
- Partition 可以指定所需的 Replica 的数量，这极大地提高了消息存储的安全性，提高了容灾能力，不过也会增加所需要的存储空间

## ZooKeeper 在 Kafka 中的作用是什么？

### Broker 注册

在 Zookeeper 上会有一个专门用来进行 Broker 服务器列表记录的节点。每个 Broker 在启动时，都会到 Zookeeper 上进行注册，即 `/brokers/ids` 目录下创建并保存属于自己节点的节点信息。

### Topic 注册

在 Kafka 中，同一个 Topic 的消息会被分成多个分区并将其分布在多个 Broker 上，这些分区信息及与 Broker 的对应关系也都是由 Zookeeper 在维护，比如创建一个名为 my-topic 的主题并且它有两个分区，那么在 ZooKeeper 中会创建这些目录：`/brokers/topics/my-topic/Partitions/0`、`/brokers/topics/my-topic/Partitions/1`。

### 负载均衡

对于同一个 Topic 的不同 Partition，Kafka 会尽力将这些 Partition 分布到不同的 Broker 服务器上，当生产者产生消息后也会尽量投递到不同 Broker 的 Partition 里面。当 Consumer 消费的时候，ZooKeeper 可以根据当前的 Partition 数量以及 Consumer 数量来实现动态负载均衡。

## Kafka 如何保证消息的消费顺序？

:::center
![kafka-partition.png](https://i.loli.net/2021/08/01/cJOGZNY9UIB4q8K.png)
:::

每次添加消息到 Partition 的时候都会采用尾加法，并为其分配一个特定的偏移量（offset），通过这个偏移量 Kafka 可以保证消息在分区中的顺序性，但不能保证 Topic 中 Partition 的有序。保证消费有序的方式有：

- 一个 Topic 对应一个 Partition，但这种做法违背了 Kafka 的设计初衷
- 在发送消息时指定要发送到哪个 Partition

## 发送方如何保证消息不丢失？

生产者调用 send 方法发送消息之后，消息可能因为网络问题并没有发送过去。所以不能默认在调用 send 方法发送消息之后，消息就一定发送成功了。可以通过回调函数来确认消息是否发送成功：

```java
ListenableFuture<SendResult<String, Object>> future = kafkaTemplate.send(topic, o);
future.addCallback(
    result -> logger.info("生产者成功发送消息到topic:{} partition:{}的消息", 
                          result.getRecordMetadata().topic(), 
                          result.getRecordMetadata().partition()),
    ex -> logger.error("生产者发送消失败，原因：{}", ex.getMessage()));
```

## 消费者如何保证消息不丢失？

消息在被追加到 Partition 的时候都会分配一个特定的偏移量，偏移量表示 Consumer 当前消费到的 Partition 的所在的位置。Kafka 通过偏移量可以保证消息在分区内的顺序性。

当消费者拉取到了分区的某个消息之后，消费者会自动提交 offset。自动提交的话会有一个问题：当消费者刚拿到消息准备进行消费的时候，消费者突然挂掉了，消息实际上并没有被消费，但是 offset  却被自动提交了。这个问题可以通过关闭自动提交并使用手动提交来解决。

但是如果使用手动提交又会引发另一个问题：消费者在消费后挂掉了，此时没有进行提交，那么在重启后就会进行重复消费。

## Kafka 如何保证消息不丢失？

如上面所提到的，Kafka 为分区引入了多副本机制，发送的信息是到 leader，然后 follower 才开始拉取同步。如果 leader 副本在同步完成前挂了就会导致数据丢失。解决方案是修改 Kafka 的配置项：

### 设置 acks = all

`acks` 的默认值是 1，代表消息被 leader 副本接收之后就认为是成功发送，当配置 `acks = all` 时代表所有副本都要接收到该消息之后该消息才算真正发送成功。

### 设置 replication.factor >= 3

通过这个参数可以保证每个分区至少有 3 个副本，虽然造成了数据冗余，但是带来了数据的安全性。

### 设置 min.insync.replicas > 1

一般情况下还需要设置 `min.insync.replicas > 1`，这样配置代表消息至少要被写入到 2 个副本才算是成功发送。`min.insync.replicas` 的默认值为 1，在实际生产中应尽量避免使用默认值 1。

## 设置 unclean.leader.election.enable = false

这个参数配置为 false 并且 leader 发生故障时，达不到同步要求的 follower 将不会参与竞选。

## Kafka 如何保证消息不重复消费？

主要需要结合实际业务来操作:

- 如果需要写库，那可以根据主键先查一下，如果数据已经有了，则进行更新
- 如果用到了 Redis，每次都是 set，天然支持幂等性
- 如果是其他的场景，那么可以让生产者在发送每条数据的时候，在里面加一个全局唯一的 id，消费者在消费前先查一下缓存，如果存在则拒绝
