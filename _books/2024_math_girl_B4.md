---
layout: book-review
title: "数学女孩4 : 随机算法"
author: 结城浩
cover: assets/img/book_covers/math_girl_b4_cover.jpg
isbn: 9787115509338 # use ISBN to fetch cover
categories: [mathematics, popular-science, algorithm]
tags: [mathematics, algorithm]
date: 2024-04-22
finished: 2024-04-22
released: 2019
stars: 4.3
status: Finished
---

来自日本科普作着结城浩的《数学女孩》系列，这次分享的是系列第4册——《随机算法》。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/books/math_girl_b4.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
	
行文依然是同样的配方、同样的味道：一如既往青春恋爱风的封面图，但实质却是一本起点不高、但落点不低的相当有水平的数学硬科普！暧昧么必然是要搞的，男主和身边的三个妹子，常常气氛一点点烘托到节骨眼上，然后就猝不及防，什么青春啦、校园爱情啦，通通靠边，来，我们开始聊数学！真的是清新脱俗，完全脱离了低级趣味！
	
这本的主题显然是关于随机算法，针对诸如二分查找（Binary Search）、冒泡排序（Bubble Sort）这些非常基础的计算机算法，作者都做了对小白非常友好的介绍。在概率论和基础的数学分析工具这块，作者也很细致地引入了概率论公理、矩阵对角化法求矩阵的 n 次方、Stirling 公式、大 O 表示法的意义等等，为后续的大问题做足了铺垫。
	
全书后半部分深入到两个大问题（至少是在我读来最有收获感和喜悦感的两个大问题）。展开讨论的一个大问题是历史上第一个被判定为 NP 完全问题的可满足性问题（SAT, Satisfiability Problem）。针对该问题的一个弱化版本，作着给出了一套基于随机漫步（Random Walk）+修正的搜索算法，并且对循环成功概率的下界一步一步地作了手把手的推导。
	
第二个大问题也是我在讲授的 A-Level Decision Maths 这门课时要求学生掌握的快速排序算法（Quick Sort）。书中介绍了常规版本的快速排序，只是将对每次迭代中对枢纽项（pivot）的选取从指定的取法改为随机选择，马上就变成了在分析算法效率时可以不必考虑原始输入符合什么特殊分布的随机快速排序。在分析算法复杂度时，对于随即快速排序平均运行步数和总比较次数期望值为什么服从 O(n log n) 的推导，两条路线一路推下来，作者做得可以说是不能再详细了。
	
阅读体验非常棒，而且读来会颇有收获的一套数学科普，推荐给喜欢数学、尤其是对算法有兴趣的同学们。
	
推荐指数：8.5/10