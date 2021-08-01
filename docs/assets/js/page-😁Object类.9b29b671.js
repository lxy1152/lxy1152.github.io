(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{726:function(e,v,t){"use strict";t.r(v);var _=t(1),o=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"介绍一下-equals-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-equals-方法"}},[e._v("#")]),e._v(" 介绍一下 equals() 方法？"),t("Badge",{attrs:{text:"重点",type:"error"}})],1),e._v(" "),t("ul",[t("li",[e._v("自反性：自身和自身是相同的")]),e._v(" "),t("li",[e._v("对称性：a 和 b 相同，同时 b 和 a 也是相同的（调换前后顺序不影响结果）")]),e._v(" "),t("li",[e._v("传递性：a 和 b 相同且 b 和 c 相同，可以得到 a 和 c 相同")]),e._v(" "),t("li",[e._v("一致性：多次调用 "),t("code",[e._v("equals()")]),e._v(" 方法，结果是不变的")]),e._v(" "),t("li",[e._v("与 "),t("code",[e._v("null")]),e._v(" 的比较：结果一定是 "),t("code",[e._v("false")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("等价与相等")]),e._v(" "),t("ul",[t("li",[e._v("对于基本类型，"),t("code",[e._v("==")]),e._v(" 判断两个值是否相等，基本类型没有 "),t("code",[e._v("equals()")]),e._v(" 方法")]),e._v(" "),t("li",[e._v("对于引用类型，"),t("code",[e._v("==")]),e._v(" 判断两个变量是否引用同一个对象，而 "),t("code",[e._v("equals()")]),e._v(" 判断引用的对象是否等价（默认也是通过 "),t("code",[e._v("==")]),e._v(" 来进行比较，这就是为什么需要重写这个方法）")])])]),e._v(" "),t("h2",{attrs:{id:"介绍一下-hashcode-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-hashcode-方法"}},[e._v("#")]),e._v(" 介绍一下 hashcode() 方法？"),t("Badge",{attrs:{text:"重点",type:"error"}})],1),e._v(" "),t("p",[t("code",[e._v("hashCode()")]),e._v(" 方法将返回这个对象对应的哈希值，等价的两个对象散列值一定相同，但是散列值相同的两个对象不一定等价，这是因为计算哈希值具有随机性，两个值不同的对象可能计算出相同的哈希值。 在覆盖 "),t("code",[e._v("equals()")]),e._v(" 方法时应当总是覆盖 "),t("code",[e._v("hashCode()")]),e._v(" 方法，保证等价的两个对象哈希值也相等。")]),e._v(" "),t("h2",{attrs:{id:"介绍一下-tostring-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-tostring-方法"}},[e._v("#")]),e._v(" 介绍一下 toString() 方法？")]),e._v(" "),t("p",[e._v("默认返回 "),t("code",[e._v("ClassName@30dae81")]),e._v(" 这种形式，其中 "),t("code",[e._v("@")]),e._v(" 后面的数值为哈希值的无符号十六进制表示。")]),e._v(" "),t("h2",{attrs:{id:"介绍一下-clone-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-clone-方法"}},[e._v("#")]),e._v(" 介绍一下 clone() 方法？")]),e._v(" "),t("p",[e._v("虽然 "),t("code",[e._v("clone()")]),e._v(" 是 "),t("code",[e._v("Object")]),e._v(" 类中的方法，但直接重写（因为 "),t("code",[e._v("clone()")]),e._v(" 方法的权限是 "),t("code",[e._v("protected")]),e._v("，需要重写并将权限放大，要不然无法调用）并调用会抛出 "),t("code",[e._v("CloneNotSupportedException")]),e._v(" 异常。这是因为 "),t("code",[e._v("Cloneable")]),e._v(" 接口的规定：如果一个类没有实现 "),t("code",[e._v("Cloneable")]),e._v(" 接口又调用了 "),t("code",[e._v("clone()")]),e._v(" 方法，就会抛出 "),t("code",[e._v("CloneNotSupportedException")]),e._v(" 异常。")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("浅拷贝")]),e._v(" "),t("p",[e._v("直接调用 "),t("code",[e._v("super.clone()")]),e._v(" 所得到对象的是浅拷贝对象。")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("clone() 方法的替代方案")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("clone()")]),e._v(" 方法来拷贝一个对象即复杂又有风险，它会抛出异常，并且还需要类型转换。替代方案有：")]),e._v(" "),t("ol",[t("li",[e._v("提供拷贝构造函数："),t("code",[e._v("public MyClass(MyClass clazz)")])]),e._v(" "),t("li",[e._v("提供拷贝工厂")]),e._v(" "),t("li",[e._v("实现序列化接口")])])])])}),[],!1,null,null,null);v.default=o.exports}}]);