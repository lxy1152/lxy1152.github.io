(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{723:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍一下-java-中的异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-java-中的异常"}},[t._v("#")]),t._v(" 介绍一下 Java 中的异常？")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/31/kyXmHLnpdaj7vQw.png",alt:"异常.jpg"}})])]),t._v(" "),a("p",[a("code",[t._v("Throwable")]),t._v(" 可以用来表示任何可以作为异常抛出的类，分为 "),a("code",[t._v("Error")]),t._v(" 和 "),a("code",[t._v("Exception")]),t._v(" 两种类型。")]),t._v(" "),a("h3",{attrs:{id:"error-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-错误"}},[t._v("#")]),t._v(" Error-错误")]),t._v(" "),a("p",[a("code",[t._v("Error")]),t._v(" 表示 JVM 无法处理的错误，如："),a("code",[t._v("OutOfMemoryError")]),t._v("，"),a("code",[t._v("StackOverflowError")]),t._v(" 等。")]),t._v(" "),a("h3",{attrs:{id:"exception-异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-异常"}},[t._v("#")]),t._v(" Exception-异常")]),t._v(" "),a("p",[a("code",[t._v("Exception")]),t._v(" 表示异常，它会再细分为下面两类：")]),t._v(" "),a("ul",[a("li",[t._v("非受检异常：是程序运行时的错误，也可以通过 "),a("code",[t._v("try/catch")]),t._v(" 来捕获处理，如："),a("code",[t._v("NPE")]),t._v("，"),a("code",[t._v("IndexOutOfBoundsException")]),t._v(" 等")]),t._v(" "),a("li",[t._v("受检异常：必须使用 "),a("code",[t._v("try/catch")]),t._v(" 语句捕获并处理的异常，如果不处理就要使用 "),a("code",[t._v("throws")]),t._v(" 关键字向上层抛出")])]),t._v(" "),a("h2",{attrs:{id:"什么是异常链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是异常链"}},[t._v("#")]),t._v(" 什么是异常链？")]),t._v(" "),a("p",[t._v("异常链是指在进行一个异常处理时抛出了另外一个异常，由此产生了一个异常链条。特别需要注意的是如果你因为一个异常而决定抛出另一个新的异常时，一定要包含原有的异常（通过 "),a("code",[t._v("Throwable")]),t._v(" 提供的构造器），这样处理程序才可以通过 "),a("code",[t._v("getCause()")]),t._v(" 和 "),a("code",[t._v("initCause()")]),t._v(" 方法来访问异常最终的根源。")]),t._v(" "),a("h2",{attrs:{id:"try-中如果包含返回语句-finally-会怎么执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-中如果包含返回语句-finally-会怎么执行"}},[t._v("#")]),t._v(" try 中如果包含返回语句，finally 会怎么执行？")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("try")]),t._v(" 中如果使用了返回语句，仍然会继续执行 "),a("code",[t._v("finally")]),t._v(" 块。如果 "),a("code",[t._v("finally")]),t._v(" 块同样使用了返回语句，那么返回值将会使用 "),a("code",[t._v("finally")]),t._v(" 块中的返回值，而不是 "),a("code",[t._v("try")]),t._v(" 中的返回值。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("在 finally 中修改返回值对应的变量的的值并不会影响返回值")]),t._v(" "),a("p",[t._v("在下面的这个例子中，将输出 1 而不是 2：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用return会返回2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return 2;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);