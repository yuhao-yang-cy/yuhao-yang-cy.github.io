---
layout: post
title: "反应动力学——连续两个一级反应的产物生成率"
date: 2021-09-08 15:21:00
description: 这次没有披着物理的外皮来写数学了，我这次披了个化学的外衣……
tags: mathematics chemistry
categories: mathematics chemistry
---

在很多化学反应，乃至核衰变的过程中，反应过程经常不是一步到位的，而是分阶段进行的：原始的反应物，先转化成成某些中间产物，最终再变化成最终的产物。由于中间产物的存在，这种反应会比一步到位的反应来得更复杂。具体而言，产物生成率、中间产物每时每刻的含量如何随时间变化，都不是那么很显而易见了。在这篇文章中，我想来利用一些数学工具，对相对还比较简单的分成两阶段的连续反应过程做一些讨论。

设有某个反应物 $$A$$ 会经历一系列的过程，先生成中间产物 $$B$$，再进而转变成最终产物 $$C$$。

整个系列的反应可以表示为：

$$
A \stackrel{k_1}{\longrightarrow} B \stackrel{k_2}{\longrightarrow} C
$$

其中 $$k_1$$ 和 $$k_2$$ 分别是各阶段反应的速率常数。如果每个阶段涉及到的都是一级反应（first-order reaction），我们就可以写出 $$A$$, $$B$$, $$C$$ 三者浓度（concentration）随时间变化的微分方程。

$$
\begin{align*}
\frac{\mathrm{d} A}{\mathrm{d} t} &= -k_1 A \tag{a} \\
\frac{\mathrm{d} B}{\mathrm{d} t} &= k_1 A - k_2 B \tag{b}\\
\frac{\mathrm{d} C}{\mathrm{d} t} &= k_2 B \tag{c}
\end{align*}
$$

我这里为了打字方便，没有很规范地像多数教材中把某个物质 $$X$$ 的浓度写成 $$[X]$$ 的形式。所以大家记得在方程中出现的代表物质种类这些字母，意指它们各自的浓度。我们继续约定，在反应刚开始时只有反应物 $$A$$，其初始浓度记为 $$A_0$$。于是待解的微分方程的初始条件为：

$$
A(0)=A_0 \qquad B(0)=C(0)=0
$$

我们来依次解出上面的三条方程。

$$A$$ 随时间的变化很容易通过将方程 $$(a)$$ 分离变量后，再两边积分求出来

$$
\begin{align*}
\frac{\mathrm{d} A}{A} &= -k_1 \mathrm{d} t \\
\int_{A_0}^{A(t)} \frac{\mathrm{d} A}{A} &= -\int_0^t k_1 \mathrm{d} t \\
\ln A - \ln A_0 &= -k_1t \\
\end{align*}
$$

化简后得到大家都很熟悉的结果，$$A$$ 的浓度随时间呈指数递减：

$$
\boxed {A(t) = A_0 \mathrm{e}^{-k_1 t}}
$$

把结果代入方程 $$(b)$$ 中，可以写出

$$
\frac{\mathrm{d} B}{\mathrm{d} t} + k_2 B = A_0 k_1 \mathrm{e}^{-k_1t}
$$

这个方程不能直接分离变量来搞定，但是只要在方程两边乘上一个合适的因子，就可以把左边凑出一整个微分项，进而可以快乐地分离变量。

$$
\begin{align*}
\left( \frac{\mathrm{d} B}{\mathrm{d} t} + k_2 B\right) \mathrm{e}^{k_2 t}  &= A_0 k_1 \mathrm{e}^{-k_1 t} \times \mathrm{e}^{k_2 t} \\
\frac{\mathrm{d} }{\mathrm{d} t} \left( B \mathrm{e}^{k_2 t}\right) & = A_0 k_1 \mathrm{e}^{-(k_1-k_2) t} \\
\int_{B(0)=0}^{B(t)} \mathrm{d} \left( B \mathrm{e}^{k_2 t}\right) &= \int_0^t A_0 k_1 \mathrm{e}^{-(k_1-k_2) t} \mathrm{d} t \\ 
B \mathrm{e}^{k_2 t} &= -\frac{A_0 k_1}{k_1-k_2}\left( \mathrm{e}^{-(k_1-k_2) t} - 1\right)
\end{align*}
$$

整理后得到 $$B$$ 的浓度随时间的变化：

$$
\boxed{ B(t) = \frac{A_0 k_1}{k_1-k_2}\left( \mathrm{e}^{-k_2 t} - \mathrm{e}^{-k_1 t}\right)}
$$

最后把这坨东西代近方程 $$(c)$$ 中，剩下的就是体力活了，硬着头皮积分就完事。

$$
\begin{align*}
\frac{\mathrm{d} C}{\mathrm{d} t} &= \frac{A_0 k_1 k_2}{k_1-k_2}\left( \mathrm{e}^{-k_2 t} - \mathrm{e}^{-k_1 t}\right) \\
\int_0^C \mathrm{d} C &= \frac{A_0 k_1 k_2}{k_1-k_2} \int_0^t \left( \mathrm{e}^{-k_2 t} - \mathrm{e}^{-k_1 t}\right) \mathrm{d} t \\
C &= \frac{A_0 k_1 k_2}{k_1-k_2} \left( -\frac{1}{k_2}\left(\mathrm{e}^{-k_2 t} -1 \right) + \frac{1}{k_1}\left(\mathrm{e}^{-k_1 t} -1 \right) \right)
\end{align*}
$$

化简成勉强还能看的最终形式

$$
\displaystyle \boxed{ C(t) = A_0 \left( 1 - \frac{\frac{1}{k_1} \mathrm{e}^{-k_1 t} - \frac{1}{k_2} \mathrm{e}^{-k_2 t}}{\frac{1}{k_1} - \frac{1}{k_2}} \right) }
$$

有了上面三个框起来的式子，给定 $$k_1$$ 和 $$k_2$$ 的数值，就可以去调用作图工具来把 $$A$$、$$B$$、$$C$$ 三者随时间此消彼长的变化形象地展示出来了。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/consecutive-reactions-1.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

图看起还比较靠谱。但求出这么一坨乱七八糟的东西，心里也不一定能踏实。我们拿一些极端情况来分析讨论下看看。

如果 $$A$$ 到 $$B$$ 的反应远远快于 $$B$$ 到 $$C$$ 的反应，那可以预计 $$A$$ 的浓度会被立刻抽干，但因为后续反应很磨叽，整个反应会卡在中间产物 $$B$$ 这环，所以会看到 $$B$$ 的浓度近乎直接拉满，近似就等于 $$A$$ 的初始浓度，然后慢慢地开始随时间呈指数下降。而最终产物 $$C$$ 的浓度也由此随时间缓缓地上升。

从公式上来看，这相当于取 $$k_1 \gg k_2$$，此时 $$\frac{1}{k_1} \ll \frac{1}{k_2}$$ 以及 $$\mathrm{e}^{-k_1 t} \ll \mathrm{e}^{-k_2 t}$$，于是近似有：

$$
\begin{align*}
B(t) & \sim \frac{A_0 k_1}{k_1} \mathrm{e}^{-k_2 t} = A_0 \mathrm{e}^{-k_2 t} \\
C(t) & \sim A_0 \left( 1 - \frac{\frac{1}{k_2} \mathrm{e}^{-k_2 t}}{\frac{1}{k_2}} \right) = A_0 \left( 1 - \mathrm{e}^{-k_2 t} \right)
\end{align*}
$$


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/consecutive-reactions-2.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    $$k_1 \gg k_2$$
</div>

又如果是 $$B$$ 到 $$C$$ 的反应变得非常迅猛，远远快于 $$A$$ 到 $$B$$ 的反应，那可以预计每每 $$A$$ 很艰辛地转换了一点变成 $$B$$ 之后，$$B$$ 会立刻火急火燎地转变成 $$C$$。整个过程中的任何时刻 $$B$$ 的浓度都不会有什么存在感。

从公式上来说，这相当于 取 $$k_1 \ll k_2$$，此时 $$\frac{1}{k_2} \ll \frac{1}{k_1}$$ 以及 $$\mathrm{e}^{-k_2 t} \ll \mathrm{e}^{-k_1 t} $$，于是近似有：

$$
\begin{align*}
B(t) & \sim \frac{k_1}{k_2} \times A_0 \mathrm{e}^{-k_1 t} \approx 0 \\
C(t) & \sim A_0 \left( 1 - \frac{\frac{1}{k_1} \mathrm{e}^{-k_1 t}}{\frac{1}{k_1}} \right) = A_0 \left( 1 - \mathrm{e}^{-k_1 t} \right)
\end{align*}
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/consecutive-reactions-3.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    $$ k_2 \gg k_1 $$
</div>


在上面的讨论中，仔细观察下近似得到的 $$C(t)$$ 的表达式，我们会发现决定产物 $$C$$ 最终生成速率的总是所有环节中相对最慢的那一环。这里我们其实已经触及到了反应动力学（reaction kinetics）中一个很重要的概念：速率决定步骤（rate-determining step），真正决定整个化学反应的速度的往往就是一个化学反应当中最慢的那个步骤[^1]，如果能有效地改善这一环的速度，整个化学反应的产率也就可以大幅提升。

如果回到严格解出的 $$C$$ 的式子：$$C(t) = A_0 \left( 1 - \frac{\frac{1}{k_1} \mathrm{e}^{-k_1 t} - \frac{1}{k_2} \mathrm{e}^{-k_2 t}}{\frac{1}{k_1} - \frac{1}{k_2}} \right)$$，可以注意到它有着很有意思的对称性质。如果作替换 $$k_1 \leftrightarrow k_2$$，这个式子的形式是不变的。也就是说，对于连续两个一级反应过程，不管这个分步骤的连续过程是先快后慢，还是先慢后快，并不影响最终产物的生成率[^2]。


[^1]: 这里说“往往”，是因为也有可能存在其他的反应路径，可以绕过某个特别慢的步骤，生成同样的产物，这样的话那个步骤虽然贼慢，但对全局而言就变得不是那么重要了。
[^2]: 这个对一级反应成立的结论对于二级乃至更高级反应似乎是不成立的。二级反应意味着微分方程里会出现一系列的平方项，导致方程组变成非线性问题。这东西要手解会很困难。但这个问题似乎会很有趣，我试着跑了几轮数值解出来，发现把 $$k_1$$ 和 $$k_2$$ 的数值对调之后，$$C$$ 的行为并不相同。

