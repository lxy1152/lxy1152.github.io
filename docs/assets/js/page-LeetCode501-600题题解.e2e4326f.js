(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{698:function(s,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_561-数组拆分i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_561-数组拆分i"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/array-partition-i/",target:"_blank",rel:"noopener noreferrer"}},[s._v("561.数组拆分I"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给定长度为 "),a("code",[s._v("2n")]),s._v(" 的整数数组 "),a("code",[s._v("nums")]),s._v(" ，你的任务是将这些数分成 "),a("code",[s._v("n")]),s._v(" 对，例如 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("a")]),a("mn",[s._v("1")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("b")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("a")]),a("mn",[s._v("2")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("b")]),a("mn",[s._v("2")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mo",[s._v("…")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("a")]),a("mi",[s._v("n")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("b")]),a("mi",[s._v("n")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("(a1, b1), (a2, b2), \\dots , (an, bn)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathnormal"},[s._v("a")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("b")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathnormal"},[s._v("a")]),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("b")]),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[s._v("…")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathnormal"},[s._v("an")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("bn")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" ，使得从 "),a("code",[s._v("1")]),s._v(" 到 "),a("code",[s._v("n")]),s._v(" 的 "),a("code",[s._v("min(ai, bi)")]),s._v("\n总和最大。")]),s._v(" "),a("p",[s._v("返回该"),a("strong",[s._v("最大总和")]),s._v(" 。")]),s._v(" "),a("p",[s._v("其中：")]),s._v(" "),a("ul",[a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("≤")]),a("mi",[s._v("n")]),a("mo",[s._v("≤")]),a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("4")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1 \\le n \\le 10^4")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.78041em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])])])])])]),s._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(".")]),a("mi",[s._v("l")]),a("mi",[s._v("e")]),a("mi",[s._v("n")]),a("mi",[s._v("g")]),a("mi",[s._v("t")]),a("mi",[s._v("h")]),a("mo",[s._v("=")]),a("mn",[s._v("2")]),a("mo",[s._v("×")]),a("mi",[s._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums.length = 2 \\times n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("n")]),a("span",{staticClass:"mord mathnormal"},[s._v("u")]),a("span",{staticClass:"mord mathnormal"},[s._v("m")]),a("span",{staticClass:"mord mathnormal"},[s._v("s")]),a("span",{staticClass:"mord"},[s._v(".")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathnormal"},[s._v("e")]),a("span",{staticClass:"mord mathnormal"},[s._v("n")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"mord mathnormal"},[s._v("t")]),a("span",{staticClass:"mord mathnormal"},[s._v("h")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("n")])])])])]),s._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("4")])],1),a("mo",[s._v("≤")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("≤")]),a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("4")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-10^4 \\le nums[i] \\le 10^4")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.950078em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[s._v("n")]),a("span",{staticClass:"mord mathnormal"},[s._v("u")]),a("span",{staticClass:"mord mathnormal"},[s._v("m")]),a("span",{staticClass:"mord mathnormal"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathnormal"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])])])])]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"示例输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例输出"}},[s._v("#")]),s._v(" 示例输出")]),s._v(" "),a("p",[s._v("{% tabs sample %}\n"),s._v("\n输入："),a("code",[s._v("nums = [1, 4, 3, 2]")]),s._v("\n输出："),a("code",[s._v("4")])]),s._v(" "),a("p",[s._v("输入："),a("code",[s._v("nums = [6, 2, 6, 5, 1, 2]")]),s._v("\n输出："),a("code",[s._v("9")]),s._v(" "),s._v("\n{% endtabs %}")]),s._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[s._v("#")]),s._v(" 解题思路")]),s._v(" "),a("p",[s._v("题目要求返回所有最小值的和的最大值，只要能保证以下两点就可以保证最后的结果是符合题意的：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("取最小值时只舍弃一个局部最大值")]),s._v(" "),a("p",[s._v("比如对于 "),a("code",[s._v("[1, 4, 3, 2]")]),s._v("，如果将 "),a("code",[s._v("[1, 4]")]),s._v(" 组合并舍弃 "),a("code",[s._v("4")]),s._v(" 是不合理的，但 如果将"),a("code",[s._v("[1, 2]")]),s._v(" 组合并舍弃 "),a("code",[s._v("2")]),s._v(" 是合理的，这里 "),a("code",[s._v("2")]),s._v(" 就是相对于 "),a("code",[s._v("1")]),s._v(" 的一个局部最大值")])]),s._v(" "),a("li",[a("p",[s._v("求和时每一个部分都是局部最大")])])]),s._v(" "),a("p",[s._v("如果满足了第一点，那么数组就会剩下相对较大的值，就可以保证第二点的实现。因此本题只需关注第一点要求。")]),s._v(" "),a("p",[s._v("为了实现这一点要求，需要找到相对于当前数字的一个最小的最大值。不难想到需要对数组做排序，排序后的下一个数字就是相对于上一个数字的最小的最大值，这样每两个数取最小值就可以保证舍弃的只是一个局部最大值，而数组整体中的较大值会被保留下来（满足了第二点要求）。")]),s._v(" "),a("p",[s._v("同时，由于每次都是对排序后的数组两两取最小值，那么最后会被保留的就是奇数位置（索引是偶数）的数，在求和时只要对他们求和就可以了。")]),s._v(" "),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arrayPairSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("hr")])}),[],!1,null,null,null);t.default=i.exports}}]);