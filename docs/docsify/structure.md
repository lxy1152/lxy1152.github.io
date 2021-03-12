# 结构化的配置Docsify

官网上的例子都是直接在 `index.html` 文件中修改的 Docsify 配置，在内容比较多的时候，看起来会感觉很乱。

可以将这些配置项单独写在 `js` 文件中，在 `index.html` 文件中引入对应的脚本即可。

```html
<!-- 加载docsify的配置信息 -->
<script src="config/docsify-config.js"></script>

<!-- 加载其他依赖项 -->
<script src="config/dependencies.js"></script>

<!-- 加载样式表 -->
<script src="config/stylesheets.js"></script>
```

`docsify-config.js` 文件中对 Docisfy （和使用的插件）的一些配置项进行了定义。

[docsify-config.js](../config/docsify-config.js ':include')

`dependencies.js` 文件对 Docisfy 使用的所有 `js` 文件进行统一管理。只需要修改 `dependencies` 数组即可快速修改依赖项。

[dependencies.js](../config/dependencies.js ':include')

`stylesheets.js` 文件对涉及的所有样式表进行统一管理。只需要修改 `stylesheets` 数组即可快速修改样式表配置。

[stylesheets.js](../config/stylesheets.js ':include')
