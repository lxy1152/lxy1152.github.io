(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{721:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是集群"}},[t._v("#")]),t._v(" 什么是集群？")]),t._v(" "),a("p",[t._v("计算机集群简称集群。它是一种计算机系统，通过一组松散集成的计算机软件和/或硬件连接起来，高度紧密地协作完成计算工作。在某种意义上，他们可以被看作是一台计算机。集群系统中的单个计算机通常称为节点，通常通过局域网连接，但也有其它的可能连接方式。集群计算机通常用来改进单个计算机的计算速度和/或可靠性。一般情况下集群计算机比单个计算机，比如工作站或超级计算机性能价格比要高得多。")]),t._v(" "),a("p",[t._v("特点：")]),t._v(" "),a("ul",[a("li",[t._v("通过多台计算机完成同一个工作，达到更高的效率")]),t._v(" "),a("li",[t._v("两机或多机内容、工作过程等完全一样，如果一台死机，另一台可以起作用")])]),t._v(" "),a("h2",{attrs:{id:"什么是分布式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式"}},[t._v("#")]),t._v(" 什么是分布式？")]),t._v(" "),a("p",[t._v("分布式系统是一组计算机通过网络相互连接传递消息与通信后并协调它们的行为而形成的系统，组件之间彼此进行交互以实现一个共同的目标。")]),t._v(" "),a("p",[t._v("特点：")]),t._v(" "),a("ul",[a("li",[t._v("功能拆分，模块之间独立，在使用的时候再将这些独立的模块组合起来就是一个系统了")]),t._v(" "),a("li",[t._v("模块之间独立，各做各的事，便于扩展，复用性高")]),t._v(" "),a("li",[t._v("高吞吐量，某个任务需要一个机器运行 10 个小时，将该任务用 10 台机器的分布式跑（将这个任务拆分成 10 个小任务），可能 2 个小时就跑完了")])]),t._v(" "),a("h2",{attrs:{id:"为什么要采用分布式开发的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要采用分布式开发的方案"}},[t._v("#")]),t._v(" 为什么要采用分布式开发的方案？"),a("Badge",{attrs:{text:"重点",type:"error"}})],1),t._v(" "),a("p",[t._v("由于单体结构的应用随着系统复杂度的增高，会暴露出各种各样的问题，所以近些年来，微服务架构逐渐取代了单体架构，且这种趋势将会越来越流行。Spring Cloud 是目前最常用的微服务开发框架，已经在企业级开发中大量的应用。")]),t._v(" "),a("h2",{attrs:{id:"什么是-spring-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spring-cloud"}},[t._v("#")]),t._v(" 什么是 Spring Cloud？")]),t._v(" "),a("p",[t._v("Spring Cloud 是一系列框架的有序集合，它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、智能路由、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。")]),t._v(" "),a("p",[t._v("Spring Cloud 并没有重复制造轮子，它只是将各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。")]),t._v(" "),a("p",[t._v("SpringCloud 的基础功能：")]),t._v(" "),a("ul",[a("li",[t._v("服务治理：Spring Cloud Eureka")]),t._v(" "),a("li",[t._v("客户端负载均衡：Spring Cloud Ribbon")]),t._v(" "),a("li",[t._v("服务容错保护：Spring Cloud Hystrix")]),t._v(" "),a("li",[t._v("声明式服务调用：Spring Cloud Feign")]),t._v(" "),a("li",[t._v("API 网关服务：Spring Cloud Zuul")]),t._v(" "),a("li",[t._v("分布式配置中心：Spring Cloud Config")])]),t._v(" "),a("p",[t._v("SpringCloud的高级功能：")]),t._v(" "),a("ul",[a("li",[t._v("消息总线：Spring Cloud Bus")]),t._v(" "),a("li",[t._v("消息驱动的微服务：Spring Cloud Stream")]),t._v(" "),a("li",[t._v("分布式服务跟踪：Spring Cloud Sleuth")])]),t._v(" "),a("h2",{attrs:{id:"介绍一下-eureka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-eureka"}},[t._v("#")]),t._v(" 介绍一下 Eureka？")]),t._v(" "),a("p",[t._v("Eureka 是专门用于给其他服务注册的，称为 Eureka Server（服务注册中心），其余注册到 Eureka Server 上的服务称为 Eureka Client。注册的目的在于方便调用，省去了手动维护远程调用方的 IP 地址这一步骤。")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/31/XVOaj8Y3MKiZHFW.png",alt:"Eureka.png"}})])]),t._v(" "),a("h3",{attrs:{id:"服务提供者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务提供者"}},[t._v("#")]),t._v(" 服务提供者")]),t._v(" "),a("ul",[a("li",[t._v("服务注册：启动的时候会通过发送 REST 请求的方式将自己注册到 Eureka Server 上，同时带上了自身服务的一些元数据信息")]),t._v(" "),a("li",[t._v("服务续约：在注册完服务之后，服务提供者会维护一个心跳信息")]),t._v(" "),a("li",[t._v("服务下线：当服务实例进行正常的关闭操作时，它会触发一个服务下线的 REST 请求给 Eureka Server")])]),t._v(" "),a("h3",{attrs:{id:"服务消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务消费者"}},[t._v("#")]),t._v(" 服务消费者")]),t._v(" "),a("ul",[a("li",[t._v("获取服务：当我们启动服务消费者的时候，它会发送一个 REST 请求给服务注册中心，来获取注册的服务清单")]),t._v(" "),a("li",[t._v("服务调用：服务消费者在获取服务清单后，通过服务名可以获得具体提供服务的实例名和该实例的元数据信息，在进行服务调用的时候，优先访问同处一个 Zone 中的服务提供方")])]),t._v(" "),a("h3",{attrs:{id:"eureka-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka-server"}},[t._v("#")]),t._v(" Eureka Server")]),t._v(" "),a("ul",[a("li",[t._v("失效剔除：默认每隔一段时间（默认为 60 秒） 将当前清单中超时（默认为 90 秒）没有续约的服务剔除出去")]),t._v(" "),a("li",[t._v("自我保护：EurekaServer 在运行期间，会统计心跳失败的比例在 15 分钟之内是否低于 85%（通常由于网络不稳定导致的），Eureka Server 会将当前的实例注册信息保护起来，让这些实例不会过期，尽可能保护这些注册信息")])]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/31/Wg2UrxH7C3oPfLj.png",alt:"Eureka服务治理.png"}})])]),t._v(" "),a("h2",{attrs:{id:"介绍一下-ribbon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-ribbon"}},[t._v("#")]),t._v(" 介绍一下 Ribbon？")]),t._v(" "),a("p",[t._v("为了实现服务的高可用，通常需要使用集群。为了使请求能尽可能平摊到所有节点上，需要用到负载均衡。这就需要用到 Ribbon，它是客户端的负载均衡。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Ribbon 和 Nginx 的区别")]),t._v(" "),a("p",[t._v("在 Nginx 中请求是先进入负载均衡器再进行分发，而在 Ribbon 中是先在客户端进行负载均衡才进行请求的。")])]),t._v(" "),a("h2",{attrs:{id:"介绍一下-hystrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-hystrix"}},[t._v("#")]),t._v(" 介绍一下 Hystrix？")]),t._v(" "),a("p",[t._v("在高并发的情况下，由于单个服务的延迟，可能导致所有的请求都处于延迟状态，甚至在几秒钟就使服务处于负载饱和的状态，导致资源耗尽，最终整个分布式系统都不可用，这就是雪崩。针对上述问题，Spring Cloud Hystrix 实现了断路器、线程隔离等一系列服务保护功能：")]),t._v(" "),a("ul",[a("li",[t._v("Fallback（失败快速返回）：当某个服务单元发生故障（类似用电器发生短路）之后，通过断路器的故障监控（类似熔断保险丝），向调用方返回一个错误响应，而不是长时间的等待，这样就不会使得线程因调用故障服务被长时间占用不释放，避免了故障在分布式系统中的蔓延")]),t._v(" "),a("li",[t._v("资源/依赖隔离（线程池隔离）：它会为每一个依赖服务创建一个独立的线程池，这样就算某个依赖服务出现延迟过高的情况，也只是对该依赖服务的调用产生影响，而不会拖慢其他的依赖服务")])]),t._v(" "),a("p",[t._v("Hystrix提供了几个熔断相关的关键参数：滑动窗口大小（20）、 熔断器开关间隔（5s）、错误率（50%）：")]),t._v(" "),a("ul",[a("li",[t._v("每当 20 个请求中，有 50% 失败时，熔断器就会打开，此时再调用此服务，将会直接返回失败，不再调远程服务")]),t._v(" "),a("li",[t._v("直到 5s 之后，重新检测该触发条件，判断是否把熔断器关闭，或者继续打开")])]),t._v(" "),a("h2",{attrs:{id:"介绍一下-feign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-feign"}},[t._v("#")]),t._v(" 介绍一下 Feign？")]),t._v(" "),a("p",[t._v("Feign 是一种声明式、模板化的 HTTP 客户端。在 Spring Cloud 中使用 Feign，可以做到与调用本地方法一样的编码体验。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * value --\x3e 指定调用哪个服务\n * fallbackFactory --\x3e 熔断器的降级提示\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fallbackFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeptClientService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用Feign我们可以使用SpringMVC的注解来对服务进行绑定！")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dept/get/{id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dept")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dept/list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dept/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dept")]),t._v(" dept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"介绍一下-zuul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-zuul"}},[t._v("#")]),t._v(" 介绍一下 Zuul？")]),t._v(" "),a("p",[t._v("基于上面的内容，现在的程序可能设计成了这样：")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/31/e4CJ6XgAKtbqjvh.png",alt:"zuul.png"}})])]),t._v(" "),a("p",[t._v("这样的架构会有两个比较麻烦的问题：")]),t._v(" "),a("ul",[a("li",[t._v("路由规则与服务实例的维护间题：外层的负载均衡（Nginx）需要维护所有的服务实例清单（图上的 OpenService）")]),t._v(" "),a("li",[t._v("签名校验、登录校验冗余问题：为了保证对外服务的安全性，在服务端实现的微服务接口往往都会有一定的权限校验机制，但服务是独立的，这样不得不在这些应用中都实现这样一套校验逻辑，这就会造成校验逻辑的冗余")])]),t._v(" "),a("p",[t._v("为了解决上面这些常见的架构问题，API 网关的概念应运而生。在 SpringCloud 中了提供了基于 Netflix Zuul 实现的 API 网关组件 Spring Cloud Zuul。Spring Cloud Zuul 是这样解决上述两个问题的：")]),t._v(" "),a("ul",[a("li",[t._v("SpringCloud Zuul 通过与 SpringCloud Eureka 进行整合，将自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得了所有其他微服务的实例信息，外层调用都必须通过 API 网关，使得将维护服务实例的工作交给了服务治理框架自动完成")]),t._v(" "),a("li",[t._v("在 API 网关服务上进行统一调用来对微服务接口做前置过滤，以实现对微服务接口的拦截和校验")])]),t._v(" "),a("p",[t._v("Zuul 天生就拥有线程隔离和断路器的自我保护功能，以及对服务调用的客户端负载均衡功能。也就是说：Zuul 也是支持 Hystrix 和 Ribbon 的。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Zuul 既然支持负载均衡，那么 Feign 的负载均衡是否还有必要")]),t._v(" "),a("ul",[a("li",[t._v("Zuul 是对外暴露的唯一接口，相当于路由的是 Controller 请求，而 Ribbon 和 Feign 路由了 Service 请求")]),t._v(" "),a("li",[t._v("Zuul 做最外层请求的负载均衡，而 Ribbon 和 Feign 做的是系统内部各个微服务的 Service 的调用的负载均衡")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);