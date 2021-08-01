(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{758:function(t,v,a){"use strict";a.r(v);var r=a(1),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍一下-jvm-是怎么划分的内存区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-jvm-是怎么划分的内存区域"}},[t._v("#")]),t._v(" 介绍一下 JVM 是怎么划分的内存区域？"),a("Badge",{attrs:{text:"重点",type:"error"}})],1),t._v(" "),a("p",[t._v("不同的 JDK 版本对于内存区域的实现不尽相同，下图中的左侧区域为 JDK 1.6 版本的内存区域划分，右侧为 JDK 1.8 版本的内存区域划分。在 JDK8 中移除了方法区，替代的是元空间（Metaspace）。")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/30/pFHz9cBLidmeZWI.png",alt:"JVM内存划分.jpg"}})])]),t._v(" "),a("h2",{attrs:{id:"线程共享区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程共享区域"}},[t._v("#")]),t._v(" 线程共享区域")]),t._v(" "),a("h3",{attrs:{id:"什么是堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是堆"}},[t._v("#")]),t._v(" 什么是堆？")]),t._v(" "),a("p",[t._v("堆是所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。Java  中几乎所有的对象都在堆中分配，但是随着 JIT 编译器的发展与逃逸分析技术逐渐成熟，栈上分配、标量替换优化技术将会导致一些微妙的变化，所有的对象都分配到堆上也渐渐变得不那么绝对了。从 JDK7 开始已经默认开启逃逸分析，如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在栈上分配内存。")]),t._v(" "),a("p",[t._v("堆是垃圾收集器管理的主要区域，因此也被称作 GC 堆（Garbage Collected Heap）。从垃圾回收的角度，由于现在收集器基本都采用分代垃圾收集算法，所以 Java 堆还可以细分为：新生代和老年代。再细致一点会有：Eden、From Survivor、To Survivor 空间等。进一步划分的目的是更好地回收内存，或者更快地分配内存。")]),t._v(" "),a("p",[t._v("在 JDK7 之前，堆内存分为以下三个部分：")]),t._v(" "),a("ul",[a("li",[t._v("新生代内存(Young Generation)")]),t._v(" "),a("li",[t._v("老年代(Old Generation)")]),t._v(" "),a("li",[a("strong",[t._v("永生代(Permanent Generation)")])])]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/30/pfl9b7PGLhXxaOs.png",alt:"JDK7区域划分.jpg"}})])]),t._v(" "),a("p",[t._v("在 JDK8 之后，"),a("strong",[t._v("方法区/永生代被移除")]),t._v("，取而代之的是"),a("strong",[t._v("元空间")]),t._v("，元空间使用直接内存。")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/30/fiuUV7ndOxqR19a.png",alt:"JDK8区域划分.jpg"}})])]),t._v(" "),a("p",[t._v("Eden 区、两个 Survivor 区都属于新生代，中间一层属于老年代。大部分情况，对象都会首先在 Eden 区域分配，在一次新生代垃圾回收后，如果对象还存活，则会进入 Survivor 区，并且对象的年龄还会加 1（Eden 区移动到 Survivor 区后对象的初始年龄变为 1），当它的年龄增加到一定程度，就会被晋升到老年代中。对象晋升到老年代的年龄阈值，可以通过参数 "),a("code",[t._v("-XX:MaxTenuringThreshold")]),t._v(" 来设置。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("动态年龄计算")]),t._v(" "),a("p",[t._v("Hotspot 采用动态年龄计算，遍历所有对象时，按照年龄从小到大对其所占用的大小进行累积，当累积的某个年龄大小超过了 Survivor 区的一半时，取这个年龄和 "),a("code",[t._v("MaxTenuringThreshold")]),t._v(" 中更小的一个值，作为新的晋升年龄阈值。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("OOM")]),t._v(" "),a("p",[t._v("堆最容易出现的是 "),a("code",[t._v("OutOfMemoryError")]),t._v("，比如：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("OutOfMemoryError: GC Overhead Limit Exceeded")]),t._v("：当 JVM 花太多时间执行垃圾回收但只能回收很少的堆空间时，就会发生此错误")]),t._v(" "),a("li",[a("code",[t._v("OutOfMemoryError: Java heap space")]),t._v("：假如在创建新的对象时, 堆内存中的空间不足以存放新创建的对象，就会引发这个错误")])]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("-Xms")]),t._v(" 和 "),a("code",[t._v("-Xmx")]),t._v(" 这两个 VM 参数可以指定堆内存的大小，第一个参数设置初始值，第二个参数设置最大值。")])]),t._v(" "),a("h3",{attrs:{id:"什么是方法区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是方法区"}},[t._v("#")]),t._v(" 什么是方法区？")]),t._v(" "),a("p",[t._v("方法区用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。虽然 Java 虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做 Non-Heap（非堆），目的应该是与 Java 堆区分开来。通过下面的参数可以对元空间进行设置：")]),t._v(" "),a("ul",[a("li",[t._v("-XX:MetaspaceSize=N，表示元空间首次空间不足而触发 FullGC 的阈值")]),t._v(" "),a("li",[t._v("-XX:MaxMetaspaceSize=N，表示元空间的最大大小")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("方法区和永久代之间的关系")]),t._v(" "),a("p",[t._v("《Java 虚拟机规范》只是规定了有方法区这么个概念和它的作用，并没有规定如何去实现它，因此在不同的 JVM 上方法区的实现肯定是不同的了。方法区和永久代的关系很像 Java 中接口和类的关系，而永久代就是 HotSpot 虚拟机对虚拟机规范中方法区的一种实现。")]),t._v(" "),a("p",[t._v("也就是说，永久代是 HotSpot 虚拟机中的概念，方法区是 Java 虚拟机规范中的定义，一个是标准，一个是实现，其他的虚拟机实现中并没有永久代这一说法。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("为什么要将方法区替换为元空间")]),t._v(" "),a("ol",[a("li",[t._v("永久代有一个 JVM 本身设置的固定大小上限，无法进行调整，而元空间使用的是直接内存，受本机可用内存的限制，虽然元空间仍旧可能溢出，但是比原来出现的几率会更小，当元空间溢出时，报错 "),a("code",[t._v("java.lang.OutOfMemoryError: MetaSpace")])]),t._v(" "),a("li",[t._v("元空间里面存放的是类的元数据，这样加载多少类的元数据就不由 "),a("code",[t._v("MaxPermSize")]),t._v("（VM 参数，表示永久代的最大大小） 控制了，而由系统的实际可用空间来控制，能加载的类就更多了")]),t._v(" "),a("li",[t._v("在 JDK8 中合并 HotSpot 和 JRockit（Oracle JVM）的代码时，JRockit 并没有一个叫永久代的东西，合并之后就没有必要额外的设置这么一个永久代的地方了")])])]),t._v(" "),a("h3",{attrs:{id:"什么是运行时常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是运行时常量池"}},[t._v("#")]),t._v(" 什么是运行时常量池？")]),t._v(" "),a("p",[t._v("运行时常量池是方法区的一部分。Class 文件中除了有类的版本、字段、方法、接口等描述信息外，还有常量池表（用于存放编译器生成的各种字面量和符号引用）。")]),t._v(" "),a("p",[t._v("既然运行时常量池是方法区的一部分，自然受到方法区内存的限制，当常量池无法再申请到内存时会抛出 "),a("code",[t._v("OutOfMemoryError")]),t._v(" 错误。JDK8 Hotspot 虚拟机移除了永久代转而使用元空间，"),a("strong",[t._v("字符串常量池在堆中，运行时常量池在元空间")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"什么是直接内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是直接内存"}},[t._v("#")]),t._v(" 什么是直接内存？")]),t._v(" "),a("p",[t._v("直接内存并不是虚拟机运行时数据区的一部分，也不是虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用。而且也可能导致 "),a("code",[t._v("OutOfMemoryError")]),t._v(" 错误的出现。")]),t._v(" "),a("p",[t._v("JDK1.4 中新加入的 NIO（Non-blocking IO) 类，引入了一种基于通道（Channel）与缓存区（Buffer）的 I/O 方式，它可以直接使用 Native 函数库分配堆外内存，然后通过一个存储在 Java 堆中的 "),a("code",[t._v("DirectByteBuffer")]),t._v(" 对象作为这块内存的引用进行操作。这样就能在一些场景中显著提高性能，因为它避免了在 Java 堆和 Native 堆之间来回复制数据。本机直接内存的分配不会受到 Java 堆的限制，但是既然是内存就肯定会受到本机总内存大小以及处理器寻址空间的限制。")]),t._v(" "),a("h2",{attrs:{id:"线程私有区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程私有区域"}},[t._v("#")]),t._v(" 线程私有区域")]),t._v(" "),a("h3",{attrs:{id:"什么是虚拟机栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟机栈"}},[t._v("#")]),t._v(" 什么是虚拟机栈？")]),t._v(" "),a("p",[t._v("Java 虚拟机栈是线程私有的，它的生命周期和线程相同，描述的是 Java 方法执行的内存模型，每次方法调用的数据都是通过栈传递的。每个 Java 方法在执行的同时会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息。从方法调用直至执行完成的过程，对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。")]),t._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/07/30/f6FXDZAvkqs4z7B.png",alt:"栈帧.jpg"}})])]),t._v(" "),a("p",[t._v("Java 虚拟机栈会出现两种错误："),a("code",[t._v("StackOverFlowError")]),t._v(" 和 "),a("code",[t._v("OutOfMemoryError")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("StackOverFlowError")]),t._v("：若 Java 虚拟机栈的内存大小不允许动态扩展，那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候，就抛出 "),a("code",[t._v("StackOverFlowError")]),t._v("，比如无限递归")]),t._v(" "),a("li",[a("code",[t._v("OutOfMemoryError")]),t._v("：若 Java 虚拟机堆中没有空闲内存，并且垃圾回收器也无法提供更多内存的话，就会抛出 "),a("code",[t._v("OutOfMemoryError")])])]),t._v(" "),a("h3",{attrs:{id:"什么是本地方法栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是本地方法栈"}},[t._v("#")]),t._v(" 什么是本地方法栈？")]),t._v(" "),a("p",[t._v("和虚拟机栈所发挥的作用非常相似，区别在于虚拟机栈为虚拟机执行 Java 方法（也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。在 HotSpot 虚拟机中将虚拟机栈和本地方法栈合二为一了。")]),t._v(" "),a("p",[t._v("本地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。方法执行完毕后相应的栈帧会出栈并释放内存空间，也会出现 "),a("code",[t._v("StackOverFlowError")]),t._v(" 和 "),a("code",[t._v("OutOfMemoryError")]),t._v(" 两种错误。")]),t._v(" "),a("h3",{attrs:{id:"什么是程序计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是程序计数器"}},[t._v("#")]),t._v(" 什么是程序计数器？")]),t._v(" "),a("p",[t._v("程序计数器是一块较小的内存空间，可以看作是当前线程所执行的字节码的行号指示器。字节码解释器工作时通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等功能都需要依赖这个计数器来完成。另外为了线程切换后能恢复到正确的执行位置，每个线程都需要有一个独立的程序计数器，各线程之间计数器互不影响，独立存储。")])])}),[],!1,null,null,null);v.default=e.exports}}]);