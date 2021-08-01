(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{736:function(t,e,r){"use strict";r.r(e);var v=r(1),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"vector-是如何保证线程安全的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vector-是如何保证线程安全的"}},[t._v("#")]),t._v(" Vector 是如何保证线程安全的？")]),t._v(" "),r("p",[r("code",[t._v("Vector")]),t._v(" 使用 "),r("code",[t._v("synchronized")]),t._v(" 关键字实现同步，但同步的是方法，所以效率很低。")]),t._v(" "),r("h2",{attrs:{id:"vector-的扩容机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vector-的扩容机制"}},[t._v("#")]),t._v(" Vector 的扩容机制？")]),t._v(" "),r("p",[t._v("可以通过 "),r("code",[t._v("Vector")]),t._v(" 的构造器传入 "),r("code",[t._v("capacityIncrement")]),t._v("，表示扩容时的增长大小。这个参数默认为 0，表示每次都将容量翻倍。")]),t._v(" "),r("h2",{attrs:{id:"vector-的替代方案有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vector-的替代方案有哪些"}},[t._v("#")]),t._v(" Vector 的替代方案有哪些？"),r("Badge",{attrs:{text:"重点",type:"error"}})],1),t._v(" "),r("h3",{attrs:{id:"collections-synchronizedlist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#collections-synchronizedlist"}},[t._v("#")]),t._v(" Collections.synchronizedList()")]),t._v(" "),r("p",[r("code",[t._v("Collections.synchronizedList()")]),t._v(" 方法会对传入的 "),r("code",[t._v("List")]),t._v(" 接口实现类做包装，并返回一个线程安全的 "),r("code",[t._v("SynchronizedRandomAccessList")]),t._v(" 或者 "),r("code",[t._v("SynchronizedList")]),t._v("（取决于是否实现了 "),r("code",[t._v("RandomAccess")]),t._v(" 接口）。")]),t._v(" "),r("p",[t._v("与 "),r("code",[t._v("Vector")]),t._v(" 的对比：")]),t._v(" "),r("ul",[r("li",[t._v("只要实现了 "),r("code",[t._v("List")]),t._v(" 接口就可以生成一个新的线程安全的包装类")]),t._v(" "),r("li",[t._v("通过同步代码块实现加锁（"),r("code",[t._v("Vector")]),t._v(" 是同步方法），默认为 "),r("code",[t._v("this")]),t._v("，当然也可以指定其他的对象")]),t._v(" "),r("li",[t._v("迭代是非同步的，所以迭代时需要手动加锁（如果需要）")])]),t._v(" "),r("h3",{attrs:{id:"copyonwritearraylist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist"}},[t._v("#")]),t._v(" CopyOnWriteArrayList")]),t._v(" "),r("p",[r("code",[t._v("CopyOnWriteArrayList")]),t._v(" 是 J.U.C 包下的一个类，它将读写操作进行了分离，写操作在一个新复制的数组中进行，读操作还是在原始数组中进行，互不影响。这样就允许了在写操作的同时进行读操作，大大提高了读操作的性能，很适合读多写少的应用场景。")]),t._v(" "),r("p",[t._v("但是这种设计会导致：")]),t._v(" "),r("ul",[r("li",[t._v("内存占用增大：在写操作时需要复制一个新的数组，使得内存占用为原来的两倍左右")]),t._v(" "),r("li",[t._v("数据不一致：读操作不能读取实时性的数据，因为部分写操作的数据还未同步到读数组中")])]),t._v(" "),r("p",[t._v("所以 "),r("code",[t._v("CopyOnWriteArrayList")]),t._v(" 不适合内存敏感以及对实时性要求很高的场景，另外需要注意：")]),t._v(" "),r("ul",[r("li",[t._v("写操作时需要加锁，防止并发写入时导致写入数据丢失")]),t._v(" "),r("li",[t._v("写操作结束之后需要把原始数组指向新的复制数组")])])])}),[],!1,null,null,null);e.default=_.exports}}]);