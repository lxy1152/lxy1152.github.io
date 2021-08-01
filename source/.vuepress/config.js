const {config} = require("vuepress-theme-hope");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
    title: "Xiangyu's Blog",
    description: "",

    dest: "./docs",

    blog: false,

    head: [
        [
            "script",
            {src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"},
        ],
        [
            "script",
            {
                src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
            },
        ],
        ["script", {src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
        [
            "script",
            {src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"},
        ],
    ],

    locales: {
        "/": {
            lang: "zh-CN",
            description: ""
        }
    },

    themeConfig: {
        logo: "/icon.png",
        hostname: "https://blog.lixiangyu.xyz",

        author: "Xiangyu Li",
        repo: "https://github.com/lxy1152/lxy1152.github.io",

        nav: [
            {text: "主页", link: "/", icon: "home"},
            {text: "面试题整理", link: "/interview/", icon: "launch"},
            // {
            //     text: "源码学习",
            //     icon: "creative",
            //     prefix: '/',
            //     items: [
            //         {text: "Redis源码学习", link: ""},
            //         {text: "JDK源码学习", link: ""},
            //     ]
            // },
        ],

        sidebar: sideBarConfig.zh,

        blog: false,

        searchPlaceholder: "输入要查找的内容",

        footer: {
            display: true,
            content: "",
        },

        comment: {
            type: "waline",
            serverURL: "https://blog-comment-o507f5obs-lxy1152.vercel.app/",
        },

        copyright: {
            status: "global",
        },

        git: {
            timezone: "Asia/Shanghai",
        },

        mdEnhance: {
            enableAll: true,
            presentation: {
                plugins: [
                    "highlight",
                    "math",
                    "search",
                    "notes",
                    "zoom",
                    "anything",
                    "audio",
                    "chalkboard",
                ],
            },
        },

        pwa: false,
    },
});
