// 在这个文件中配置需要使用的样式
let stylesheets = [
    "config/style/vue.css",
    "//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css",
    "//cdn.bootcss.com/prism/1.15.0/plugins/line-numbers/prism-line-numbers.css",
    "//cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "/config/style/docsify.css",
    "config/style/cards.css"
];

for (let stylesheet of stylesheets) {
    let link = $("<link>");
    link.attr({
        rel: "stylesheet",
        type: "text/css",
        href: stylesheet
    });
    $("head").append(link);
}
