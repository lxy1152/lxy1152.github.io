// 在这个文件中配置docsify所依赖的其他js文件
let dependencies = [
    "config/jquery.min.js",
    "//cdn.jsdelivr.net/npm/docsify@4",
    "//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js",
    "//cdn.jsdelivr.net/gh/TaQini/docsify-twemoji@master/twemoji.min.js",
    "//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js",
    "//cdn.jsdelivr.net/npm/docsify-tabs@1",
    "//cdn.jsdelivr.net/npm/docsify-katex@latest/dist/docsify-katex.js",
    "//cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-java.js",
    "//cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js",
    "//cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
    "//cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
];

for (let i = 0; i < dependencies.length; i++) {
    document.write('<script src="' + dependencies[i] + '"></script>');
}
