// 设置docsify的各种配置项
window.$docsify = {
    // 导航栏将在小屏幕上与侧边栏合并
    mergeNavbar: true,
    // 是否通过markdown文件的形式配置导航栏
    loadNavbar: true,
    // 是否通过markdown文件的形式配置侧边栏
    loadSidebar: true,
    // 定义路由别名, 说实话不加也行, 但是console上面的报错看着很难受
    alias: {
        "/.*/_navbar.md": "/_navbar.md",
        "/leetcode/.*/_navbar.md": "/leetcode/_sidebar.md"
    },
    // 在跳转到新页面后是否自动跳转到顶部
    auto2top: true,
    // 是否自动显示标题
    autoHeader: true,
    // 分页插件配置
    pagination: {
        previousText: '上一章节',
        nextText: '下一章节',
        crossChapter: true,
        crossChapterText: true,
    },
    // 自定义插件配置
    plugins: [
        function (hook, vm) {
            hook.init(function () {
                // Called when the script starts running, only trigger once, no arguments,
            });

            hook.beforeEach(function (content) {
                // Invoked each time before parsing the Markdown file.
                // ...
                return content;
            });

            hook.afterEach(function (html, next) {
                // Invoked each time after the Markdown file is parsed.
                // beforeEach and afterEach support asynchronous。
                // ...
                // call `next(html)` when task is done.
                next(html);
            });

            hook.doneEach(function () {
                twemoji.parse(document);
            });

            hook.mounted(function () {
                // Called after initial completion. Only trigger once, no arguments.
            });

            hook.ready(function () {
                // Called after initial completion, no arguments.
            });
        }
    ]
};
