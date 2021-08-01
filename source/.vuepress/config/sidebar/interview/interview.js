const {sidebarConfig} = require("vuepress-theme-hope");

module.exports = sidebarConfig([
    "",
    {
        title: "😉 Java 基础",
        prefix: "/interview/java-basic/",
        children: [
            "",
            "oo-feature",
            "keyword",
            "datatype-wrapper-cache",
            "object-class",
            "string-class",
            "exception",
            "reflect",
            "generics",
            "other"
        ]
    },
    {
        title: "🌈 Java 容器",
        prefix: "/interview/java-collection/",
        children: [
            "",
            {
                title: "🌫️ Set 接口",
                prefix: "set/",
                children: [
                    "",
                    "treeset",
                    "hashset",
                    "linkedhashset"
                ]
            },
            {
                title: "☂️ List 接口",
                prefix: "list/",
                children: [
                    "",
                    "arraylist",
                    "vector",
                    "linkedlist"
                ]
            },
            {
                title: "☔ Map 接口",
                prefix: "map/",
                children: [
                    "",
                    "hashmap",
                    "hashtable",
                    "concurrenthashmap",
                    "linkedhashmap"
                ]
            }
        ]
    },
    {
        title: "🐺 Java 并发",
        prefix: "/interview/java-multithread/",
        children: [
            "",
            "jmm",
            "process-thread",
            "thread-pool",
            "juc",
            "lock",
            "non-lock"
        ]
    },
    {
        title: "⛳ Java I/O",
        prefix: "/interview/java-io/",
        children: [
            ""
        ]
    },
    {
        title: "🌏 JVM",
        prefix: "/interview/jvm/",
        children: [
            "",
            "memory-partition",
            "classloader",
            "gc"
        ]
    },
    {
        title: "🌱 框架使用",
        prefix: "/interview/framework/",
        children: [
            "",
            {
                title: "🌸 Spring 全家桶",
                prefix: "spring/",
                children: [
                    "",
                    "spring",
                    "spring-mvc",
                    "springboot",
                    "springcloud"
                ]
            },
            {
                title: "💮 MyBatis",
                prefix: "mybatis/",
                children: [
                    "",
                    "mybatis"
                ]
            },
            {
                title: "🏵️ 通讯",
                prefix: "communication/",
                children: [
                    "",
                    "netty",
                    "dubbo"
                ]
            }
        ]
    },
    {
        title: "👊 MySQL",
        prefix: "/interview/mysql/",
        children: [
            "",
            "normal-form",
            "datatype",
            "engine",
            "ddl",
            "transcation",
            "m-index",
            "lock",
            "slow-query",
            "view",
            "cluster"
        ]
    },
    {
        title: "🤷‍♂️ Redis",
        prefix: "/interview/redis/",
        children: [
            "",
            "redis-basic",
            "redis-implemention",
            "redis-elimination",
            "redis-persistence",
            "redis-transcation",
            "troubleshooting",
            "redis-cluster"
        ]
    },
    {
        title: "🎠 中间件",
        prefix: "/interview/middleware/",
        children: [
            "",
            "kafka",
            "zookeeper"
        ]
    },
    {
        title: "👨‍👧‍👧 计算机网络",
        prefix: "/interview/network/",
        children: [
            "",
            {
                title: "🏃‍♂️ IP 协议",
                prefix: "ip/",
                children: [
                    "",
                    "ip-basic",
                    "ip-address",
                    "other"
                ]
            },
            {
                title: "🧑‍🤝‍🧑 TCP 协议",
                prefix: "tcp/",
                children: [
                    "",
                    "tcp-basic",
                    "tcp-connection",
                    "tcp-retry",
                    "tcp-window",
                    "tcp-control"
                ]
            },
            {
                title: "👪 HTTP 协议",
                prefix: "http/",
                children: [
                    "",
                    "http-basic",
                    "http-method",
                    "https",
                    "http-improve"
                ]
            }
        ]
    },
    {
        title: "🦸 操作系统",
        prefix: "/interview/os/",
        children: [
            "",
            "memory",
            "cpu-cache",
            "process-thread",
            "lock",
            "io"
        ]
    },
    {
        title: "🏭 设计思想",
        prefix: "/interview/thoughts/",
        children: [
            "",
            "design-pattern"
        ]
    },
    {
        title: "📚 面经",
        prefix: "/interview/experience/",
        children: [
            "",
            "bytedance",
            "meituan",
            "baidu",
            "yuanfudao",
            "tiger",
            "boss",
            "haodf",
            "xuetangzaixian",
            "yuanbaoshuke"
        ]
    }
]);
