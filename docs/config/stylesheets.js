// 在这个文件中配置docsify要使用的css文件
let stylesheets = [
    "//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css",
    "//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css",
    "//cdn.bootcss.com/prism/1.15.0/plugins/line-numbers/prism-line-numbers.css",
    // "/config/style/code.css"
    // "/config/style/scroll_bar.css"
    "//cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
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