(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{791:function(t,a,s){"use strict";s.r(a);var r=s(1),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"虚拟内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存"}},[t._v("#")]),t._v(" 虚拟内存")]),t._v(" "),s("h3",{attrs:{id:"什么是虚拟内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟内存"}},[t._v("#")]),t._v(" 什么是虚拟内存？")]),t._v(" "),s("p",[t._v("虚拟内存是计算机系统内存管理的一种技术，它使得应用程序认为它拥有连续的可用的内存（一个连续完整的地址空间），而实际上它通常是被分隔成多个物理内存碎片，操作系统会提供一种机制负责将不同进程的虚拟地址和不同内存的物理地址映射起来。")]),t._v(" "),s("p",[t._v("操作系统会根据进程持有的虚拟地址，通过 CPU 芯片中的内存管理单元（MMU）的映射关系，来转换变成物理地址，然后再通过物理地址访问内存：")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/Xus2I9oerAECYZj.png",alt:"虚拟内存.png"}})])]),t._v(" "),s("h3",{attrs:{id:"操作系统是如何维护虚拟地址和物理地址之间的关系的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统是如何维护虚拟地址和物理地址之间的关系的"}},[t._v("#")]),t._v(" 操作系统是如何维护虚拟地址和物理地址之间的关系的？")]),t._v(" "),s("p",[t._v("主要有两种方式：")]),t._v(" "),s("ul",[s("li",[t._v("内存分段")]),t._v(" "),s("li",[t._v("内存分页")])]),t._v(" "),s("h2",{attrs:{id:"内存分段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存分段"}},[t._v("#")]),t._v(" 内存分段")]),t._v(" "),s("h3",{attrs:{id:"什么是内存分段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存分段"}},[t._v("#")]),t._v(" 什么是内存分段？")]),t._v(" "),s("p",[t._v("程序是由若干个逻辑分段组成的，如：代码分段、数据分段、栈段、堆段等。不同的段是有不同的属性的，所以就用分段（Segmentation）的形式把这些段分离出来。")]),t._v(" "),s("h3",{attrs:{id:"在分段机制下-如何将虚拟地址和物理地址进行映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在分段机制下-如何将虚拟地址和物理地址进行映射"}},[t._v("#")]),t._v(" 在分段机制下，如何将虚拟地址和物理地址进行映射？")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/MOHuUG7hKEIYbN5.png",alt:"分段.png"}})])]),t._v(" "),s("p",[t._v("分段机制下的虚拟地址由两部分组成：")]),t._v(" "),s("ul",[s("li",[t._v("段选择因子：保存在段寄存器中，最最重要的是段号，用作段表的索引，段表里面保存的是这个段的基地址、段的界限和特权等级等")]),t._v(" "),s("li",[t._v("段内偏移量：它应该位于 0 和段界限之间，如果段内偏移量是合法的，将段基地址加上段内偏移量就可以得到物理内存地址")])]),t._v(" "),s("h3",{attrs:{id:"分段机制会引发什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分段机制会引发什么问题"}},[t._v("#")]),t._v(" 分段机制会引发什么问题？")]),t._v(" "),s("h4",{attrs:{id:"产生内存碎片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产生内存碎片"}},[t._v("#")]),t._v(" 产生内存碎片")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/HQCPoBkRmz4hTfs.png",alt:"分段的问题.png"}})])]),t._v(" "),s("h4",{attrs:{id:"内存交换效率低"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存交换效率低"}},[t._v("#")]),t._v(" 内存交换效率低")]),t._v(" "),s("p",[t._v("由于分段机制会产生内存碎片，所以可以将上图中空闲的两部分写入硬盘中，再从磁盘重新读入内存。只不过读入的时候需要把它们连续放置，不能再像这样产生碎片。这种操作是很常见的，比如 Linux 系统的交换（Swap）空间，专门分出一部分硬盘空间，用于内存和硬盘的空间交换。由于段式机制的内存碎片会频繁的产生同时硬盘的访问速度要远远慢于内存，因此内存交换效率比较低。")]),t._v(" "),s("h2",{attrs:{id:"内存分页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存分页"}},[t._v("#")]),t._v(" 内存分页")]),t._v(" "),s("h3",{attrs:{id:"什么是内存分页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是内存分页"}},[t._v("#")]),t._v(" 什么是内存分页？")]),t._v(" "),s("p",[t._v("分段的好处就是能产生连续的内存空间，但是会出现内存碎片和内存交换的空间太大的问题。要解决这些问题，就要想出一个能少出现内存碎片的办法。另外当需要进行内存交换的时候，需要让交换写入或者从磁盘装载的数据更少一点。这个办法，也就是内存分页（Paging）。")]),t._v(" "),s("p",[t._v("分页是把整个虚拟和物理内存空间切成一段段固定尺寸的大小的空间。这样一个连续并且尺寸固定的内存空间，叫叫做页（Page）。在 Linux 下，每一页的大小为 4KB。虚拟地址与物理地址之间通过页表来映射，如下图：")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/pQ5h4vAef6LZmcj.png",alt:"分页.png"}})])]),t._v(" "),s("p",[t._v("页表实际上存储在 CPU 的内存管理单元 （MMU） 中，于是 CPU 就可以直接通过 MMU，找出要实际要访问的物理内存地址。当进程访问的虚拟地址在页表中查不到时，系统会产生一个缺页异常，进入系统内核空间分配物理内存、更新进程页表，最后再返回用户空间，恢复进程的运行。")]),t._v(" "),s("h3",{attrs:{id:"分页机制下-如何将虚拟地址和物理地址进行映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分页机制下-如何将虚拟地址和物理地址进行映射"}},[t._v("#")]),t._v(" 分页机制下，如何将虚拟地址和物理地址进行映射？")]),t._v(" "),s("p",[t._v("在分页机制下，虚拟地址分为两部分，页号和页内偏移。页号作为页表的索引，页表包含物理页每页所在物理内存的基地址，这个基地址与页内偏移的组合就形成了物理内存地址，见下图：")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/S71vjZulUghcRE8.png",alt:"分页地址映射.png"}})])]),t._v(" "),s("h3",{attrs:{id:"一级页表存在什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一级页表存在什么问题"}},[t._v("#")]),t._v(" 一级页表存在什么问题？")]),t._v(" "),s("p",[t._v("在 32 位环境下，虚拟地址空间共有 4GB，每个页的大小为 4KB，那么页的总数量大约为 1MB 个。每个页表项需要 4 个字节，所以这 4GB 的虚拟空间需要 4MB 的内存来存储页表。由于每个进程都有自己的虚拟地址空间，假设有 100 个进程，就需要 400MB 的空间存储页表，这个开销是相当大的。为了解决这个问题，需要引入多级页表。")]),t._v(" "),s("h3",{attrs:{id:"什么是多级页表-地址如何映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是多级页表-地址如何映射"}},[t._v("#")]),t._v(" 什么是多级页表，地址如何映射？")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/emv1faq7HtSrwpJ.png",alt:"多级页表.png"}})])]),t._v(" "),s("p",[t._v("与一级页表相比，一级页号对应的不再是物理页号而是二级页号，二级页号对应的才是物理页号。如果 4GB 的虚拟地址全部都映射到了物理内存上的话，二级分页占用空间确实是更大了（一级页表 4KB + 二级页表 4MB），但是往往不需要为一个进程分配那么多内存。")]),t._v(" "),s("p",[t._v("根据局部性原理，对于大多数程序来说，真正使用到的空间远未达到 4GB，因此会存在部分对应的页表项都是空的，根本没有分配（可以在需要时才创建二级页表），对于已分配的页表项，如果存在最近一定时间未访问的页表，在物理内存紧张的情况下，操作系统会将页面换出到硬盘，也就是说不会占用物理内存。")]),t._v(" "),s("p",[t._v("假设只有 20% 的一级页表项被用到了，那么页表占用的内存空间就只有 4KB（一级页表） + 20% * 4MB（二级页表）= 0.804MB。")]),t._v(" "),s("h3",{attrs:{id:"什么是-tlb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tlb"}},[t._v("#")]),t._v(" 什么是 TLB？")]),t._v(" "),s("p",[t._v("多级页表虽然解决了空间上的问题，但是在虚拟地址到物理地址的转换上多了几道工序，这显然就降低了地址转换的速度，也就是带来了时间上的开销。程序是有局部性的，即在一段时间内，整个程序的执行仅限于程序中的某一部分。相应地，执行所访问的存储空间也局限于某个内存区域。")]),t._v(" "),s("p",[t._v("利用这一特性，可以把最常访问的几个页表项存储到访问速度更快的硬件，于是在 CPU 芯片中加入了一个专门存放程序最常访问的页表项的 Cache，这个 Cache 就是 TLB（Translation Lookaside Buffer） ，它通常被称为页表缓存、转址旁路缓存、快表等。")]),t._v(" "),s("p",[t._v("有了 TLB 后，CPU 在寻址时会先查 TLB，如果没找到，才会继续查常规的页表。TLB 的命中率其实是很高的，因为程序最常访问的页就那么几个。")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/9jBzKGfMVCIsu3k.png",alt:"TLB.png"}})])]),t._v(" "),s("h2",{attrs:{id:"段页式管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#段页式管理"}},[t._v("#")]),t._v(" 段页式管理")]),t._v(" "),s("h3",{attrs:{id:"什么是段页式内存管理机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是段页式内存管理机制"}},[t._v("#")]),t._v(" 什么是段页式内存管理机制？")]),t._v(" "),s("p",[t._v("内存分段和内存分页并不是对立的，它们是可以组合起来在同一个系统中使用的，那么组合起来后，通常称为段页式内存管理。")]),t._v(" "),s("ul",[s("li",[t._v("先将程序划分为多个有逻辑意义的段，也就是前面提到的分段机制")]),t._v(" "),s("li",[t._v("接着再把每个段划分为多个页，也就是对分段划分出来的连续空间，再划分固定大小的页")])]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/08/01/Dbql5C7xWXHa41V.png",alt:"段页式.png"}})])])])}),[],!1,null,null,null);a.default=v.exports}}]);