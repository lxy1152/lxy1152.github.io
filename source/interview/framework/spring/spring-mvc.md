---
title: 🌳 SpringMVC
---

## Spring MVC 的请求流程？

:::center
![SpringMVC流程图.jpg](https://i.loli.net/2021/07/31/7Po6lweIR3ntqsy.png)
:::

:::tip 基本不会有视图渲染的过程
由于现在基本都是前后端分离开发，所以上图已经不适用了。步骤 7 就会返回最终结果，不再需要后续的视图解析与渲染。
:::

## @RestController 和 @Controller 注解有什么区别？

### 使用 @Controller 注解

单独使用 `@Controller` 不加 `@ResponseBody` 注解一般使用在要返回一个视图的情况，这种情况属于比较传统的 Spring MVC 的应用，对应于前后端不分离的情况。如果需要在 Spring4 之前开发 RESTFul Web 服务的话，需要使用 `@Controller` 并结合 `@ResponseBody` 注解，也就是说 `@Controller + @ResponseBody = @RestController`（Spring 4 之后新加的注解）。

### 使用 @RestController 注解

`@RestController` 只返回对象，对象数据直接以 JSON 或 XML 形式写入 HTTP Response 中，这种情况属于 RESTFul Web 服务，这也是目前日常开发所接触的最常用的情况。

## Cookie 和 Session

### 什么是 Cookie？

Cookie 一般用来保存用户信息，比如：

- 替用户填入基本信息
- 保存用户的登录状态（一般是一个 token）

### 什么是 Session？

Session 的主要作用是通过服务端记录用户的状态。因为 HTTP 协议是无状态的，服务端给特定的用户创建特定的 Session 之后就可以标识这个用户并且跟踪这个用户了。

### Cookie 和 Session 的区别？

Cookie 数据保存在客户端，Session 数据保存在服务器端，所以相对来说 Session 安全性更高，最好不要在 Cookie 中保存敏感信息。Cookie 可以手动设置过期时间，Session 在关闭浏览器后就关闭了。
