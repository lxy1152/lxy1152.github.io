---
title: 🌲 Spring
---

## 什么是 Spring 框架？

Spring 是一个轻量级开发框架，旨在提高开发人员的开发效率以及系统的可维护性。一般说的 Spring 框架指的都是 Spring Framework，它是很多模块的集合，使用这些模块可以很方便地协助开发人员进行开发。

Spring 框架的特点：

- 轻量：Spring 是轻量的
- 控制反转：Spring 通过控制反转实现了解耦
- 面向切面的编程（AOP）：Spring 支持面向切面的编程，并且把应用业务逻辑和系统服务分开
- 容器：Spring 包含并管理应用中对象的生命周期和配置
- MVC 框架：Spring 的 WEB 框架是个精心设计的框架，是 Web 框架的一个很好的替代品
- 事务管理：Spring 提供了一个持续的事务管理接口
- 异常处理：Spring 提供方便的 API 把具体技术相关的异常（比如由JDBC，Hibernate or JDO抛出的）转化为一致的 unchecked 异常。

## Spring 有哪些模块？

:::center
![Spring模块.png](https://i.loli.net/2021/07/31/7UEfnFxiscSywvQ.png)
:::

## 什么是 IoC？<Badge text="重点" type="error"/>

IoC（Inverse of Control，控制反转）是一种设计思想，就是将原本在程序中手动创建对象的控制权，交由 Spring 来管理。IoC 在其他语言中也有应用，并非 Spring 特有。IoC 容器是 Spring 用来实现 IoC 的载体，IoC 容器实际上就是个 `Map`，其中存放的是各种对象。IoC 容器就像是一个工厂一样，当需要创建一个对象的时候，只需要配置好配置文件或者注解，完全不用考虑对象是如何被创建出来的。Spring 早期版本一般是通过 XML 文件来配置 Bean，目前更为流行的是通过注解来进行配置。

## 什么是 AOP？<Badge text="重点" type="error"/>

AOP（Aspect-Oriented Programming，面向切面编程）能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性。Spring AOP 是基于动态代理实现的，如果要代理的对象实现了某个接口，那么 Spring AOP 会使用 JDKProxy 去创建代理对象，而对于没有实现接口的对象，会使用 CGLib 做代理，如下图所示：

:::center
![动态代理.png](https://i.loli.net/2021/07/31/fnhaAE5dxJw3pq6.png)
:::

## Spring 框架中使用的设计模式？<Badge text="重点" type="error"/>

- 工厂设计模式：Spring 使用工厂模式，通过 `BeanFactory`、`ApplicationContext` 创建 Bean
- 代理设计模式：Spring AOP 功能的实现
- 单例设计模式：Spring 中的 Bean 默认都是单例的
- 包装器设计模式：项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库，这种模式可以根据客户的需求能够动态切换不同的数据源
- 观察者模式: Spring 事件驱动模型
- 适配器模式：Spring AOP 的增强或通知（Advice）使用到了适配器模式，Spring MVC 中也使用到了适配器模式适配 Controller

## Spring Bean

### @Component 和 @Bean 注解的区别？<Badge text="重点" type="error"/>

#### **作用对象不同**
`@Component` 注解作用于类，而 `@Bean` 注解作用于方法。

#### **含义不同**

因为 `@Component` 注解是作用于类的，所以它通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中的（通过 `@ComponentScan` 注解定义要扫描的路径）。`@Bean` 注解作用于方法，它注明了某个方法会产生一个 Bean。

#### **@Bean 注解能力更强**
如果需要引用第三方库中的类到 Spring 容器中，那么就只能通过 `@Bean` 注解来实现。

下面为两种注解的代码示例：

```java
// Bean 注解代码示例
@Configuration
public class MyConfiguration {
    @Bean
    public MyBean createMyBean() {
        return new MyBean();
    }
}

// Component 注解代码示例
@Component
public class MyComponent {
    // fields and functions
}

@Service
public class MyService {
    @Autowried
    MyComponent myComponent;
    
    // fields and functions
}
```

:::tip Bean 的装配
一般使用 `@Autowired` 注解自动装配 Bean，要想把类标识成可用于 `@Autowired` 注解自动装配的 Bean，除了上面提到的这两种注解以外，还可以使用以下的三个注解。这些注解没有功能上的扩展，只是为了语义清晰：

- `@Repository`: 对应持久层，即 Dao 层，主要用于数据库相关操作
- `@Service`: 对应服务层，主要涉及一些复杂的业务逻辑，需要用到 Dao 层
- `@Controller`: 对应 Spring MVC 控制层，主要用于接受用户请求并调用 Service 层返回数据给前端页面
:::

### Bean 的生命周期？<Badge text="重点" type="error"/>

:::center
![Bean生命周期.jpg](https://i.loli.net/2021/07/31/VtnmjZBhIK6scJM.png)
:::

:::tip @PostConstruct 和 @PreDestroy
`@PostConstruct` 和 `@PreDestroy` 注解不是 Spring 提供的注解，而是 javax 包中提供的注解，Spring 支持使用这两个注解。
:::

示例代码如下：

```java
// 以下内容为Bean的实现
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.core.env.Environment;
import org.springframework.core.env.PropertySource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.StandardServletEnvironment;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.Map;

/**
 * 以下函数的调用顺序与函数编写顺序相同
 *
 * @author lixiangyu
 */
@Component("MyBean")
public class MyBean implements InitializingBean, DisposableBean, ApplicationContextAware, BeanFactoryAware,
        BeanClassLoaderAware, BeanNameAware, EnvironmentAware, ResourceLoaderAware {
    /**
     * 获取Bean名称
     *
     * @param s 名称
     */
    @Override
    public void setBeanName(String s) {
        System.out.println("bean name is: " + s);
    }

    /**
     * 获取类加载器
     *
     * @param classLoader 类加载器
     */
    @Override
    public void setBeanClassLoader(ClassLoader classLoader) {
        System.out.println("class loader: " + classLoader);
    }

    /**
     * 获取Bean Factory
     */
    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        System.out.println("set bean factory... ");
    }

    /**
     * 获取运行时环境变量
     */
    @Override
    public void setEnvironment(Environment environment) {
        // 这里是在获取nacos中的配置项并转为Map
        PropertySource<?> propertySource
                = ((StandardServletEnvironment) environment).getPropertySources().get("demo.yaml|DEFAULT_GROUP|||192.168.4.185:8848|||||||");
        Map<String, String> obj = (Map<String, String>) propertySource.getSource();
        System.out.println(obj);

        System.out.println("set environment...");
    }

    /**
     * 获取资源加载器
     */
    @Override
    public void setResourceLoader(ResourceLoader resourceLoader) {
        System.out.println("set resource loader..." + resourceLoader);
    }

    /**
     * 获取上下文
     *
     * @param applicationContext 上下文
     * @throws BeansException beansException
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("set application context...");
    }

    // ------ Bean Post Processor begin -----------
    // 在这里会调用postProcessBeforeInitialization方法

    /**
     * 在类实例化并且设置完属性后调用
     */
    @PostConstruct
    public void postConstruct() {
        System.out.println("postConstruct...");
    }

    /**
     * 初始化方法
     *
     * @throws Exception 异常
     */
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("after properties set...");
    }

    // 在这里会调用postProcessAfterInitialization方法
    // ------ Bean Post Processor end ------------

    /**
     * Bean销毁时执行的方法
     */
    @PreDestroy
    public void preDestroy() {
        System.out.println("pre destroy...");
    }

    /**
     * Bean销毁时执行的方法
     *
     * @throws Exception 异常
     */
    @Override
    public void destroy() throws Exception {
        System.out.println("destroy...");
    }
}

// 以下内容为后置处理器BeanPostProcessor的实现
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

@Component
public class MyBeanPostProcessor implements BeanPostProcessor {
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof MyBean) {
            System.out.println("bean post process before init...  " + bean + " " + beanName);
        }
        return BeanPostProcessor.super.postProcessBeforeInitialization(bean, beanName);
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof MyBean) {
            System.out.println("bean post process after init...  " + bean + " " + beanName);
        }
        return BeanPostProcessor.super.postProcessAfterInitialization(bean, beanName);
    }
}
```

### Bean 的作用域有哪些？<Badge text="重点" type="error"/>

| 名称 | 含义 |
| :---: | :---: |
| Singleton | 单例，Spring 中的 Bean 默认都是单例的。|
| Prototype | 每次请求都会创建一个新的 Bean 实例。 |
| Request | 每个 HTTP 请求都会产生一个新的 Bean，这个 Bean 仅在当前 HTTP request 内有效。 |
| Session | 每个 HTTP 请求都会产生一个新的 Bean，这个 Bean 仅在当前 HTTP session 内有效。 |
| Global-Session | 全局 session 作用域，仅仅在基于 Portlet 的 web 应用中才有意义，Spring5 已经没有了。Portlet 是能够生成语义代码（例如：HTML）片段的小型 Java Web 插件，它们基于 Portlet 容器，可以像 servlet 一样处理 HTTP 请求，但是与 servlet 不同的是每个 portlet 都有不同的会话。 |

### 常见的 Bean 转换工具有哪些？

推荐使用 `MapStruct`（编译时生成接口的实现类），`ModelMapper`（反射）。或者使用 Spring 提供的 `BeanUtils` 类（可能会有问题）。

:::warning 不用使用 Apache 提供的 BeanUtils 类
阿里编程规范不推荐使用 Apache 提供的 `BeanUtils` 类，因为存在性能问题（存在大量的校验和日志记录）。
:::

### BeanFactory 和 FactoryBean 有哪些区别？

`BeanFactory` 是接口，是 Spring 给 IoC 容器定义的一套完整的规范。`BeanFactory` 的实现类包括：

- `AbstractBeanFactory`：抽象 Bean 工厂，绝大部分的实现类都是继承于他
- `DefaultListableBeanFactory`：Spring 默认的工厂类
- `XmlBeanFactory`：早期使用 XML 文件配置时所使用的 Bean 工厂
- `AbstractXmlApplicationContext`：抽象应用容器上下文对象
- `ClassPathXmlApplicationContext`：XML 解析上下文对象

`FactoryBean` 是 Spring IoC 容器创建 Bean 的一种形式，融合了简单工厂设计模式与装饰器模式。

### Spring 的三级缓存？<Badge text="重点" type="error"/>

在代码中有时可能会出现循环依赖，循环依赖是指是指 A 对象需要 B 对象，B 对象又需要 A 对象。比如下面这样：

```java
public class A {
    private B b;
 
    public A(B b) {
        this.b = b;
    }
}
 
public class B {
    private A a;
 
    public B(A a) {
        this.a = a;
    }
}
```

如果碰到这种情况，那么实例化时必然会陷入死循环，因此 Spring 使用三级缓存来解决循环依赖这一问题。

- `Map<String, Object> singletonObjects`：第一级缓存，用来存放已经完全创建好的单例 Bean，映射关系为 `beanName -> Bean` 实例。
- `Map<String, Object> earlySingletonObjects`：第二级缓存，用来存放半成品的 Bean，映射关系为 `beanName -> Bean` 实例。
- `Map<String, ObjectFactory<?>> singletonFactories`：第三级缓存，用来存放单例 Bean 的 `ObjectFactory`，映射关系为 `beanName -> ObjectFactory` 实例。

还是以上面的 A 和 B 两个类为例，对创建过程详细的描述一下：

- 首先创建 A，此时三级缓存中都没有 A，将 A 扔到一个集合中，这个集合的名称叫做：`singletonsCurrentlyInCreation`，表示它们正处于创建状态
- 对 A 做实例化，并放到第三级缓存中
- 为 A 注入对象，发现需要 B
- 从三级缓存中查找 B，发现都没有 B，将 B 放到 `singletonsCurrentlyInCreation` 中
- 对 B 做实例化，并放到第三级缓存中
- 为 B 注入对象，发现需要 A
- 将 A 从第三级缓存移动到第二级缓存，并返回给 B 做填充，但此时 A 只是个半成品，它的属性还没有填充完
- B 创建完毕，从第三级缓存移动到第一级缓存
- 将 B 返回给 A，A 将 B 填充，A 创建完成
- 判断最后创建好的 A 和 B 中填充的 A 是不是一个对象，如果不是则抛出异常

## Spring 事务

### 管理事务的两种方式？

- 编程式事务，在代码中硬编码（不推荐使用）
- 声明式事务，在配置文件中配置（推荐使用），包括基于 XML 的声明式事务和基于注解的声明式事务

### 事务隔离级别有哪些？

| 名称 | 含义 |
| :---: | :---: |
| TransactionDefinition.ISOLATION_DEFAULT | 使用后端数据库默认的隔离级别，MySQL 默认采用的 REPEATABLE_READ。 |
| TransactionDefinition.ISOLATION_READ_UNCOMMITTED | 最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读和不可重复读。 |
| TransactionDefinition.ISOLATION_READ_COMMITTED | 允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读和不可重复读仍有可能发生。 |
| TransactionDefinition.ISOLATION_REPEATABLE_READ | 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。 |
| TransactionDefinition.ISOLATION_SERIALIZABLE | 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说该级别可以防止脏读、不可重复读以及幻读。但是这将严重影响程序的性能。通常情况下也不会用到该级别。 |

### 事务的传播方式有哪几种？

事务传播行为（Propagation Behavior）指的是当一个事务方法被另一个事务方法调用时，这个事务方法应该如何进行。例如：方法 A 调用方法 B 时，方法 B 是继续在调用者方法 A 的事务中运行，还是为自己开启一个新事务运行，这就是由方法 B 的事务传播行为决定的。

Spring 支持以下 7 种事务传播方式：

| 名称 | 含义 |
| :---: | :---: |
| PROPAGATION_REQUIRED | 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务 |
| PROPAGATION_SUPPORTS | 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行 |
| PROPAGATION_MANDATORY | 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常 |
| PROPAGATION_REQUIRES_NEW | 创建一个新的事务，如果当前存在事务，则把当前事务挂起 |
| PROPAGATION_NOT_SUPPORTED | 以非事务方式运行，如果当前存在事务，则把当前事务挂起 |
| PROPAGATION_NEVER | 以非事务方式运行，如果当前存在事务，则抛出异常 |
| PROPAGATION_NESTED | 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于 PROPAGATION_REQUIRED |

### 哪些方法可以开启事务？

当 `@Transactional` 注解作用于类上时，该类的所有 `public` 方法将都具有该类型的事务属性，可以在方法上再次使用该标注来覆盖类级别的定义。如果类或者方法加了这个注解，那么这个类里面的方法抛出异常，就会导致回滚。

### 什么情况下会导致事务回滚？

在 `@Transactional` 注解中如果不配置 `rollbackFor` 属性，那么事务只会在遇到 `RuntimeException` 的时候才会回滚，加上 `rollbackFor=Exception.class` 可以让事务在遇到非运行时异常时也回滚。

### 在什么场景下会导致事务失效？

- 数据库引擎不支持事务，比如 MyISAM
- 使用 `@Transactional` 标注的类没有被 Spring 容器管理
- 方法的修饰符不是 `public`
- 自调用问题
- 数据源没有配置事务管理器
- 事务传播级别为：`PROPAGATION_NOT_SUPPORTED`
- 没有添加 `rollbackFor=Exception.class`
- 使用 `try-catch` 语句对异常进行了捕获，但没有重新抛出运行时异常

:::tip 什么是自调用
自调用是指在类 A 里面有方法 a 和方法 b， 在方法 b 上面添加了 `@Transactional` 注解，在方法 a 中调用方法 b， 方法 b 的事务是不会生效的。原因在于同一个类之中，方法互相调用导致切面无效，而不仅仅是事务。事务之所以无效，是因为 Spring 的事务是通过 AOP 实现的。
:::
