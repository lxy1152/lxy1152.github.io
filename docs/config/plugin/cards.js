function cardsParse(content) {
    let cardInHtml = '<div class="row">';

    while (true) {
        // card部分开始的位置
        let cardStart = content.indexOf('<!-- card:start -->');
        // card部分结束的位置
        let cardEnd = content.indexOf('<!-- card:end -->');

        // 如果全部的内容都处理完了, 退出循环
        if (cardStart === -1 || cardEnd === -1) {
            break;
        }

        // 开始的位置需要加上字符串 '<!-- card:start -->' 的长度
        cardStart += '<!-- card:start -->'.length + 1;

        // 截取card部分的内容, 再通过换行符进行分组
        let contentOfCard = content.substr(cardStart, cardEnd - cardStart).split('\n');

        let link = '/#/README';
        let card = '';
        // 拼接html
        card += '<div class="card"><div class="card-body">';
        for (let i = 0; i < contentOfCard.length; i++) {
            let arr = contentOfCard[i].split('::');
            if (arr.length === 2) {
                if (arr[0] === 'title') {
                    card += '<h5 class="card-title">' + arr[1] + '</h5>';
                } else if (arr[0] === 'description') {
                    card += '<p class="card-text">' + arr[1] + '</p>';
                } else if (arr[0] === 'link') {
                    link = arr[1];
                }
                // 需要把原文档中的内容删掉
                content = content.replace(contentOfCard[i], '')
            }
        }
        card += '</div></div>'

        cardInHtml += '<a href="' + link + '">' + card + '</a>'

        // 把开始和结束符删掉
        content = content.replace('<!-- card:start -->', '');
        content = content.replace('<!-- card:end -->', '');
    }

    cardInHtml += '</div>';

    return content.replace('<!-- cards:start -->', cardInHtml);
}
