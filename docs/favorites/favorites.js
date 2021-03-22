// 采用一个多对象JSON文件存储所有数据的方式
favorites = {
    init: function (url) {
        var that = this
        $.getJSON(url, function (data) {
            for (var className in data) {
                var classData = data[className]
                that.render(classData, className)
            }
        })
    },
    render: function (data, name) {
        var siteName,
            url,
            li = ''
        for (var i = 0; i < data.length; i++) {
            siteName = data[i].name
            url = data[i].url
            description = data[i].description
            li +=
                '<div class="card" onclick="window.open(\'' +
                url +
                '\')" >' +
                '<div class="card-header">' +
                '<div>' +
                siteName +
                '</div>' +
                '</div>' +
                '<div class="card-content">' +
                '<div>' +
                description +
                '</div>' +
                '</div>' +
                '</div>'
        }
        $(name).append(li)
    },
}
// 传入json文件的路径
favorites.init('./favorites.json')
