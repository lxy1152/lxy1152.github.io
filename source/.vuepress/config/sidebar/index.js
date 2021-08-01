const {sidebarConfig} = require("vuepress-theme-hope");

module.exports = {
    zh: sidebarConfig({
        "/interview/": require("./interview/interview"),

        "/": ["", "interview/"],
    })
}
