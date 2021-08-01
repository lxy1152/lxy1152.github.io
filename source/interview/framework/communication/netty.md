---
title: 🍀 Netty
---

## 什么是 Netty？

- Netty 是一个基于 NIO 的 client-server（客户端服务器）框架，使用它可以快速简单地开发网络应用程序
- 它极大地简化并优化了 TCP 和 UDP 套接字服务器等网络编程，并且性能以及安全性等很多方面甚至都要更好
- 支持多种协议，如 FTP，SMTP，HTTP 以及各种二进制和基于文本的传统协议

用官方的总结就是：Netty 成功地找到了一种在不妥协可维护性和性能的情况下实现易于开发、性能、稳定性和灵活性的方法。

## 为什么要使用 Netty？

- 统一的 API，支持多种传输类型，阻塞和非阻塞的
- 简单而强大的线程模型
- 自带编解码器解决 TCP 粘包/拆包问题
- 自带各种协议栈
- 真正的无连接数据包套接字支持
- 比直接使用 Java 核心 API 有更高的吞吐量、更低的延迟、更低的资源消耗和更少的内存复制
- 安全性不错，有完整的 SSL/TLS 以及 StartTLS 支持
- 社区活跃，成熟稳定，经历了大型项目的使用和考验，而且很多开源项目都使用到了 Netty， 比如 Dubbo、RocketMQ 等

## Netty 有哪些应用场景？

- 作为 RPC 框架的网络通信工具
- 作为 HTTP 服务器（可类比 Tomcat）
- 实现一个即时通讯软件
- 实现消息推送系统

## Netty 有哪些核心组件？

### Channel

`Channel` 接口是 Netty 对网络操作抽象类，它除了包括基本的 I/O 操作，以及 `bind()`、`connect()`、`read()`、`write()` 操作等。比较常用的 `Channel` 接口实现类是 `NioServerSocketChannel`（服务端）和 `NioSocketChannel`（客户端），这两个 `Channel` 可以和 BIO 编程模型中的 `ServerSocket` 以及 `Socket` 两个概念对应上。Netty 的 `Channel` 接口所提供的 API，大大地降低了直接使用 Socket 类的复杂性。


### EventLoop

`EventLoop` 定义了 Netty 的核心抽象，用于处理连接的生命周期中所发生的事件，主要作用就是负责监听网络事件并调用事件处理器进行相关 I/O 操作的处理。

### ChannelFuture

Netty 是异步非阻塞的，所有的 I/O 操作都是异步的。可以通过 `ChannelFuture` 接口的 `addListener()` 方法注册一个 `ChannelFutureListener`，当操作执行成功或者失败时，监听就会自动返回结果。

### ChannelHandler 和 ChannelPipeline

`ChannelHandler` 是消息的具体处理器，它负责处理读写操作、客户端连接等事情。`ChannelPipeline` 为 `ChannelHandler` 的链，提供了一个容器并定义了用于沿着链传播入站和出站事件流的 API 。当 `Channel` 被创建时，它会被自动地分配到它专属的 `ChannelPipeline`，再通过 `addLast()` 方法添加一个或者多个 `ChannelHandler`，因为一个数据或者事件可能会被多个 `Handler` 处理。当一个 `ChannelHandler` 处理完之后就将数据交给下一个 `ChannelHandler`。

## 什么是 EventLoopGroup？

:::center
![EventLoopGroup.png](https://i.loli.net/2021/07/31/ihueo5ZHfASXItr.png)
:::

`EventLoopGroup` 包含多个 `EventLoop`，`EventLoop` 处理的 I/O 事件都将在它专有的 `Thread` 上被处理，即 `Thread` 和 `EventLoop` 属于 `1 : 1` 的关系，从而保证线程安全。上图是一个服务端使用 `EventLoopGroup` 的模块图，其中 `Boss EventloopGroup` 用于接收连接，`Worker EventloopGroup` 用于具体的处理（消息的读写以及其他逻辑处理）。

当客户端通过 `connect()` 方法连接服务端时，`bossGroup` 处理客户端连接请求。当客户端处理完成后，会将这个连接提交给 `workerGroup` 来处理，然后 `workerGroup` 负责处理其 I/O 相关操作。

## 什么是 Bootstrap 和 ServerBootstrap？

`Bootstrap` 是客户端的启动引导类/辅助类，`ServerBootstrap` 是客户端的启动引导类/辅助类。区别：

- `Bootstrap` 通常使用 `connect()` 方法连接到远程的主机和端口，作为一个 Netty TCP 协议通信中的客户端。但是它也可以通过 `bind()` 方法绑定本地的一个端口，作为 UDP 协议通信中的一端
- `ServerBootstrap` 通常使用 `bind()` 方法绑定本地的端口上，然后等待客户端的连接
- `Bootstrap` 只需要配置一个线程组，而 `ServerBootstrap` 需要配置两个线程组，一个用于接收连接（`bossGroup`），一个用于具体的处理（`workerGroup`）

## NioEventLoopGroup 的默认构造函数会启动多少个线程？

默认数量为 CPU 核心数 * 2。

## 介绍一下 Netty 的线程模型？<Badge text="重点" type="error"/>

### 单线程模型

一个线程需要执行处理所有的 `accept`、`read`、`decode`、`process`、`encode`、`send` 事件。对于高负载、高并发，并且对性能要求比较高的场景不适用。

### 多线程模型

一个 `Acceptor` 线程只负责监听客户端的连接，一个 NIO 线程池负责具体处理： `accept`、`read`、`decode`、`process`、`encode`、`send` 事件。满足绝大部分应用场景，并发连接量不大的时候没啥问题，但是遇到并发连接大的时候就可能会出现问题，成为性能瓶颈。

:::center
![Netty多线程模型.png](https://i.loli.net/2021/07/31/jLMVbGTH3Dw6qlP.png)
:::

### 主从多线程模型
从一个主线程 NIO 线程池中选择一个线程作为 `Acceptor` 线程，绑定监听端口接收客户端的连接，其他线程负责后续的接入认证等工作。连接建立完成后，Sub NIO 线程池负责具体处理 I/O 读写。如果多线程模型无法满足需求，可以考虑使用主从多线程模型。

:::center
![Netty主从多线程模型.png](https://i.loli.net/2021/07/31/LbNd4cTRja1SHvU.png)
:::

## Netty 服务端的启动过程？

- 创建两个 `NioEventLoopGroup` 对象实例：`bossGroup` 和 `workerGroup`
- 创建服务端启动引导/辅助类：`ServerBootstrap`，这个类将引导服务端的启动工作
- 给引导类配置上面示例化的两大线程组，确定了线程模型
- 给引导类指定 I/O 模型为 NIO
- 给引导类指定 `ChannelInitializer`，指定 `ChannelPipeline` 和 `ChannelHandler` 的初始化方式
- 通过引导类绑定端口

## Netty 客户端的启动过程？

- 创建一个 `NioEventLoopGroup` 对象
- 创建客户端启动引导类：`Bootstrap`
- 给引导类 `Bootstrap` 配置一个线程组
- 给引导类 `Bootstrap` 指定了 I/O 模型为 NIO
- 给引导类配置 `ChannelInitializer`，指定 `ChannelPipeline` 和 `ChannelHandler` 的初始化方式
- 调用 `Bootstrap` 类的 `connect()` 方法进行连接，参数为 IP 地址和端口号

## 什么是 TCP 粘包/拆包？

TCP 粘包/拆包指的：基于 TCP 发送数据的时候，出现了多个字符串“粘”在了一起或者一个字符串被“拆”开的问题。

## Netty 怎么解决的 TCP 粘包/拆包问题？

使用 Netty 自带的解码器：

- `LineBasedFrameDecoder`：发送端发送数据包的时候，每个数据包之间以换行符作为分隔，`LineBasedFrameDecoder` 会遍历判断是否有换行符，然后进行相应的截取
- `DelimiterBasedFrameDecoder`：自定义分隔符解码器，`LineBasedFrameDecoder` 实际上是一种特殊的 `DelimiterBasedFrameDecoder` 解码器
- `FixedLengthFrameDecoder`：固定长度解码器，它能够按照指定的长度对消息进行相应的拆包
- `LengthFieldBasedFrameDecoder`：自定义长度解码器

## 介绍一下 Netty 的心跳机制？

在 TCP 保持长连接的过程中，可能会出现断网或者其他的引起网络异常的情况，在异常发生的时候，如果客户端与服务端之间没有交互的话，它们彼此是无法发现对方已经掉线的。为了解决这个问题, 需要引入心跳机制。

心跳机制的工作原理是：当客户端与服务端在一定时间内没有数据交互时，客户端或服务器就会发送一个特殊的数据包给对方，当接收方收到这个数据报文后，也立即发送一个特殊的数据报文进行回应。所以当某一端收到心跳消息后，就知道了对方仍然在线，确保了 TCP 连接的有效性。通过 Netty 实现心跳机制的核心类是 `IdleStateHandler`。

## 介绍一下 Netty 的零拷贝机制？

在操作系统层面，**零拷贝通常指避免在用户态与内核态之间来回拷贝数据**。而在 Netty 层面，零拷贝主要体现在对于数据操作的优化：

- 使用 Netty 提供的 `CompositeByteBuf` 类, 可以将多个 `ByteBuf` 合并为一个逻辑上的 `ByteBuf`，避免了各个 `ByteBuf` 之间的拷贝
- `ByteBuf` 支持 `slice` 操作，因此可以将 `ByteBuf` 分解为多个共享同一个存储区域的 `ByteBuf`，避免了内存的拷贝
- 通过 `FileRegion` 包装的 `FileChannel.transferTo` 实现文件传输，可以直接将文件缓冲区的数据发送到目标 `Channel`，避免了传统通过循环 `write` 方式导致的内存拷贝问题
