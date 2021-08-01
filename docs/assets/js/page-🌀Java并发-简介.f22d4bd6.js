(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{752:function(v,e,t){"use strict";t.r(e);var _=t(1),a=Object(_.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("多线程开发是老生常谈的问题了，最重要的是如何保证多线程情况下数据的一致性。本部分包含以下几个内容：")]),v._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"/interview/java-multithread/jmm"}},[v._v("JMM")]),v._v("：JVM 定义的 Java 内存模型")]),v._v(" "),t("li",[t("a",{attrs:{href:"/interview/java-multithread/process-thread"}},[v._v("进程和线程")]),v._v("：看看在 Java 中如何使用线程以及如何解决多线程之间的协作问题")]),v._v(" "),t("li",[t("a",{attrs:{href:"/interview/java-multithread/thread-pool"}},[v._v("线程池")]),v._v("：频繁创建线程的开销太大，使用池化思想缓存线程")]),v._v(" "),t("li",[t("a",{attrs:{href:"/interview/java-multithread/juc"}},[v._v("J.U.C")]),v._v("：JDK 提供的适用于并发编程的工具类")]),v._v(" "),t("li",[t("a",{attrs:{href:"/interview/java-multithread/lock"}},[v._v("锁")]),v._v("：如何通过锁来保证线程安全以及锁的优化")]),v._v(" "),t("li",[t("a",{attrs:{href:"/interview/java-multithread/non-lock"}},[v._v("无同步方案")]),v._v("：某些情况下不需使用锁也可以保证线程安全")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("在实际开发过程中，提供一些建议：")]),v._v(" "),t("ul",[t("li",[v._v("给线程起个有意义的名字，这样可以方便找日志")]),v._v(" "),t("li",[v._v("缩小同步范围，从而减少锁争用，例如对于 "),t("code",[v._v("synchronized")]),v._v("，应该尽量同步代码块而不是同步方法")]),v._v(" "),t("li",[v._v("多用同步工具少用 "),t("code",[v._v("wait()")]),v._v(" 和 "),t("code",[v._v("notify()")]),v._v("。因为 "),t("code",[v._v("CountDownLatch")]),v._v("，"),t("code",[v._v("CyclicBarrier")]),v._v(" 和 "),t("code",[v._v("Semaphore")]),v._v(" 这些同步类简化了编码操作，而用 "),t("code",[v._v("wait()")]),v._v(" 和 "),t("code",[v._v("notify()")]),v._v(" 很难实现复杂控制流")]),v._v(" "),t("li",[v._v("使用 "),t("code",[v._v("BlockingQueue")]),v._v(" 实现生产者消费者问题")]),v._v(" "),t("li",[v._v("多用并发集合少用同步集合，例如应该使用 "),t("code",[v._v("ConcurrentHashMap")]),v._v(" 而不是 "),t("code",[v._v("Hashtable")])]),v._v(" "),t("li",[v._v("使用本地变量和不可变类来保证线程安全")]),v._v(" "),t("li",[v._v("使用线程池而不是直接创建线程，这是因为创建线程代价很高，线程池可以有效地利用有限的线程来启动任务")])])])}),[],!1,null,null,null);e.default=a.exports}}]);