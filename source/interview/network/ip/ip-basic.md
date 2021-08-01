---
title: 👣 IP 协议基础
---

## 介绍一下 IP 协议？

IP 协议在 TCP/IP 模型中处于第三层，也就是网络层。网络层的主要作用是：实现主机与主机之间的通信，也叫点对点（end to end）通信。

## IP 和 MAC 之间的关系？

MAC（数据链路层） 的作用是实现直连的两个设备之间通信，而 IP（网络层） 则负责在没有直连的两个网络之间进行通信传输。

::: tip IP 与 MAC
因为出发地和目的地是不会变的，所以源 IP 地址和目标 IP 地址在传输过程中是不会变化的。但这个过程中可能通过不同的路由器进行转发，所以源 MAC 地址和目标 MAC 是一直在变化
:::