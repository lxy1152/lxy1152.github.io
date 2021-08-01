---
title: 🌴 SpringBoot
---

## 为什么要使用 Spring Boot？

- 简化配置和开发的流程
- 简化部署流程
- 使用注解替代 XML
- 提供运行中应用状态的监控

## 什么是 Spring Boot Starter？

Starter 可以理解成配置了一堆 jar 组合的空 maven 项目，用来简化 maven 依赖配置，starter 可以继承也可以依赖于别的 starter。

## SpringBoot 支持哪些嵌入式 Servlet 容器？

- Tomcat
- Jetty
- Undertow

## 在 SpringBoot 中怎么切换嵌入式 Servlet 容器？

修改 pom.xml：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

## 介绍一下 @SpringBootApplication 注解？

使用这个注解可以配置 SpringBoot 项目的启动类。这个注解继承了 `@SpringBootConfiguration`，`@EnableAutoConfiguration`，`@ComponentScan` 注解。

- `@SpringBootConfiguration`：这个注解继承了 `@Configuration` 注解，表明这是一个配置类
- `@EnableAutoConfiguration`：启用自动配置
- `@ComponentScan`：配置注解扫描的包

## SpringBoot 是怎么实现自动配置的？

`@SpringBootApplication` 继承了 `@EnableAutoConfiguration` 注解，在这个注解中，有一行：`@Import(AutoConfigurationImportSelector.class)`。查看这个类的代码，它会调用 `getCandidateConfigurations()` 函数。这个函数内部通过 `SpringFactoriesLoader.loadFactoryNames()` 获取配置信息。它会根据相应的 starter 的 spring.factories 文件加载配置，在这个文件里面保存了要加载的配置类。比如：

```text
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\
...
```

在这些配置类上配置 `@Conditional` 注解，可以根据指定的情况动态加载配置。

## SpringBoot 项目使用的配置文件有什么格式？

可以使用 `yaml/yml` 或者 `properties` 格式的配置文件，通过配置项 `spring.profiles.active` 还可以根据不同的环境指定具体是哪个配置文件生效。

:::tip boostrap.yml
SpringBoot 除了有 `application.yml` 配置文件以外，还可以使用 `boostrap.yml` 进行配置。在启动顺序上，`bootstrap.yml` 文件会优先加载，用于应用程序上下文的引导阶段。
:::

## SpringBoot 加载配置文件的顺序是怎样的？

SpringBoot 会从以下四个位置加载配置文件，越上的优先级越高：

- 项目根路径 config 目录中的 `application.yml` 文件
- 项目根路径中的 `application.yml` 文件
- resources 目录下 config 目录中的 `application.yml` 文件
- resources 目录下的 `application.yml` 文件

## SpringBoot 读取配置文件有哪几种方式？

### 使用 @Value 注解

```java
@Value("${security.token}")
private String token
```

### 使用 @ConfigurationProperties 注解
使用 `@ConfigurationProperties` 注解可以加载一组属性的值。对于要加载的属性过多的情况，使用这个注解比 `@Value` 更加简洁。通过定义静态内部类可以获得某个配置项的子配置项。

```java
@ConfigurationProperties(prefix ="config")  
public class Config {
    // 获取 config.token 的值
    private String token;
  
    // 获取 config.username 的值
    private String username;
    
    // 定义子配置项，即 config.subconfig
    public static class SubConfig {
        // 获取 congfig.subconfig.subConfigToken 的值
        private String subConfigToken;
    }
}
```

### 读取指定文件中的内容

使用 `@PropertySource` 指定要加载的文件，再配合 `@Value` 或者 `@ConfigurationProperties` 注解加载属性值。

### 使用 Environment 接口获取配置

参考：[Bean 的生命周期](/interview/framework/spring/spring/#bean-的生命周期)

## 开发 RESTFul Web 程序常用的注解有哪些？

- `@SpringBootApplication`：启动类
- `@RestController`：控制器注解
- `@xxMapping`：指定访问的 url 以及请求类型
- `@Service`：服务层注解
- `@Repository`：DAO 层注解
- `@Component`：Bean 注解
- `@Bean`：Bean 注解
- `@Configuration`：配置类注解
- `@MapperScan`：指定 Mybatis 接口类扫描路径
- `@Value`：通过 SpEL 表达式获取 Environment 中的值
- `@Valid`：SpringBoot 校验

## 怎么通过 SpringBoot 进行运行状态监控？

SpringBoot 的 `Actuator` 提供了运行状态监控的功能，`Actuator` 的监控数据可以通过 REST、远程 shell 和 JMX 方式获得。

## SpringBoot 怎么对数据做校验？

引入 `Validation` 库：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

## SpringBoot 的全局异常处理？

新建一个类使用 `@ControllerAdvice` 注解标注，对于其中的方法，使用 `@ExceptionHandler(value = xx.class)` 注解标注。

## SpringBoot 实现定时任务？

- 使用 `java.util.Timer`
- 使用 `Quartz` 等第三方库
- 使用 `@Schedule` 注解
