(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{711:function(t,a,s){"use strict";s.r(a);var r=s(1),o=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是-dubbo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dubbo"}},[t._v("#")]),t._v(" 什么是 Dubbo？")]),t._v(" "),s("p",[t._v("Dubbo 是阿里开源的高性能 RPC 分布式服务框架。")]),t._v(" "),s("h2",{attrs:{id:"dubbo-服务治理的逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-服务治理的逻辑"}},[t._v("#")]),t._v(" Dubbo 服务治理的逻辑？")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/07/31/bGE1WX8RKnsVrk9.png",alt:"Dubbo服务治理.png"}})])]),t._v(" "),s("h2",{attrs:{id:"dubbo-都支持哪些协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-都支持哪些协议"}},[t._v("#")]),t._v(" Dubbo 都支持哪些协议？")]),t._v(" "),s("p",[t._v("Dubbo 支持 dubbo、rmi、hessian、http、webservice、thrift、redis、rest 等协议。dubbo 协议是推荐使用的，默认使用的协议就是 dubbo 协议，这种协议采用单一长连接和 NIO 异步通讯，适合于小数据量、大并发的服务，或者服务消费者机器数远大于服务提供者机器数的情况。dubbo 协议的缺点是不适合传送大数据量的服务，比如传送文件、视频等，除非请求量很低。")]),t._v(" "),s("h2",{attrs:{id:"dubbo-有哪几种节点角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-有哪几种节点角色"}},[t._v("#")]),t._v(" Dubbo 有哪几种节点角色？")]),t._v(" "),s("ul",[s("li",[t._v("Provider：暴露服务的服务提供方")]),t._v(" "),s("li",[t._v("Consumer：调用远程服务的服务消费方")]),t._v(" "),s("li",[t._v("Registry：服务注册与发现中心")]),t._v(" "),s("li",[t._v("Monitor：监控中心")]),t._v(" "),s("li",[t._v("Container：服务运行容器")])]),t._v(" "),s("h2",{attrs:{id:"服务注册与发现流程图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务注册与发现流程图"}},[t._v("#")]),t._v(" 服务注册与发现流程图？")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/07/31/Tql5AeNrvS92MYo.png",alt:"Dubbo服务注册与发现.png"}})])]),t._v(" "),s("h2",{attrs:{id:"dubbo-有哪几种集群容错方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-有哪几种集群容错方案"}},[t._v("#")]),t._v(" Dubbo 有哪几种集群容错方案？")]),t._v(" "),s("ul",[s("li",[t._v("failsafe：失败安全，出现错误时直接忽略")]),t._v(" "),s("li",[t._v("failover（默认）：失败时会自动重试其他服务器")]),t._v(" "),s("li",[t._v("failfast：快速事变，立即报错，只发起一次调用")]),t._v(" "),s("li",[t._v("failback：失败后自动恢复，记录失败请求，定时重发")]),t._v(" "),s("li",[t._v("forking：并行调用一个服务器，只要一个成功就返回")]),t._v(" "),s("li",[t._v("broadcast：广播并逐个调用服务者，任意一个报错则就失败")])]),t._v(" "),s("h2",{attrs:{id:"dubbo-的负载均衡策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-的负载均衡策略"}},[t._v("#")]),t._v(" Dubbo 的负载均衡策略？")]),t._v(" "),s("ul",[s("li",[t._v("Random LoadBalance：随机，按权重设置随机概率（默认）")]),t._v(" "),s("li",[t._v("RoundRobin LoadBalance：轮询，按公约后的权重设置轮询比率")]),t._v(" "),s("li",[t._v("LeastActive LoadBalance：最少活跃调用数，相同活跃数的随机，活跃数指调用前后计数差")]),t._v(" "),s("li",[t._v("ConsistentHash LoadBalance：一致性哈希，相同参数的请求总是发到同一提供者")])])])}),[],!1,null,null,null);a.default=o.exports}}]);