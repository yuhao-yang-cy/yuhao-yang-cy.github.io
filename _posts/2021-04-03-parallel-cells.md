---
layout: post
title: "并联电池的等效电动势"
date: 2022-04-03 15:17:00
description: "一堆并联的电池的等效电动势和等效内阻会是什么样子的？"
tags: physics a-level electromagnetism
categories: physics a-level
---

本篇文章来自于最近教学讨论中，一位同学提出的很有意思的问题。

高中物理的电路分析中，不时地会碰到多个电池头尾相连地串联在一起的问题。有良好高中物理基础的读者应该很快就可以说出结论，这些串联电池的等效电动势（e.m.f.）是各自电动势的总和，等效内阻（internal resistance）也是各自内阻的总和。

那么如果是一堆并联的电池，它们的等效电动势和等效内阻会是什么样子的？某只学霸妹纸课上就提了这么个问题，我自己算了算，觉得还挺有意思，写篇小破文章上来灌灌水。

多个电池并联的情况在高中课程里其实也有机会碰到，不过一般也就只会考察相对简单的情形，即多个电动势和内阻都相同的电池进行并联会如何。如此得到的等效电动势就等于单个电池的电动势，而等效内阻相当于所有内阻并联的等效电阻。

但更一般的情况，具体来说，如果我们有一系列电池，电动势$$/$$内阻分别为 $$\mathcal{E}_1/r_1, \mathcal{E}_2/r_2, \cdots, \mathcal{E}_n/r_n$$，它们并联后的等效电动势 $$\mathcal{E}$$ 和等效内阻 $$r$$ 又该如何计算呢？

对于这种含有独立电源（电压源或电流源）及固定电阻的线性网络，我们其实可以用戴维宁定理（Thevenin's theorem）来将整个网络等效成一个固定内阻的等效电压源。不过这里，我们将从基本的基尔霍夫定律（Kirchhoff's laws）出发，来分析处理并联电池的问题，最后做一些讨论。

我们先来分析两个并联电池的情形。设它们的电动势分别为 $$\mathcal{E}_1$$, $$\mathcal{E}_2$$，内阻分别为 $$r_1$$, $$r_2$$（如下图所示）。

{% include figure.liquid loading="eager" path="assets/img/parallel_cells.png" title="" class="img-natural rounded z-depth-1" %}

我们假想在它们两端接上一个电阻为 $$R$$ 的用电器。不失普遍性，假设  $$\mathcal{E}_1>\mathcal{E}_2$$，各支路上的电流如图所示。

利用基尔霍夫第二定律，对于闭合回路 $$ABEFA$$，有

$$
\mathcal{E}_1 = IR + (I+i)r_1
$$

对于闭合回路 $$BCDEB$$，有

$$
\mathcal{E}_2 = IR - ir_2
$$

将上面的两个式子分别乘以 $$r_2$$ 和 $$r_1$$ 后加到一起，我们可以消去带 $$i$$ 的项，然后解出通过外电阻 $$R$$ 的电流 $$I$$：

$$
I = \frac{r_1\mathcal{E}_2 + r_2\mathcal{E}_1}{(r_1+r_2)R+r_1r_2}
$$

如果这组并联电池具有等效电动势 $$\mathcal{E}$$ 和等效内阻 $$r$$，则对于任意的 $$R$$，都必须有：

$$
\mathcal{E} = I (R+r)
$$

把我们解出的电流 $$I$$ 的表达式代进来，得到：

$$
\mathcal{E} = \frac{r_1\mathcal{E}_2 + r_2\mathcal{E}_1}{(r_1+r_2)R+r_1r_2} \times (R+r)
$$

$$
[\mathcal{E} (r_1+r_2) - (r_1\mathcal{E}_2 + r_2\mathcal{E}_1)] R = \mathcal{E} r_1r_2 - (r_1\mathcal{E}_2 + r_2\mathcal{E}_1)r
$$

上式要对所有 $$R$$ 的取值都成立，但注意式子两边，一边显含有 $$R$$ 而另一边是与 $$R$$ 无关的常数，两边恒等要求：

$$
\left\{\begin{array}{l}
\mathcal{E} (r_1+r_2) - (r_1\mathcal{E}_2 + r_2\mathcal{E}_1) = 0 \\
\mathcal{E} r_1r_2 - (r_1\mathcal{E}_2 + r_2\mathcal{E}_1)r = 0
\end{array}\right.
$$

从中可以解出

$$
\left\{\begin{array}{l}
\displaystyle r = \frac{r_1r_2}{r_1+r_2} \\
\displaystyle \mathcal{E} = \frac{r_1\mathcal{E}_2 + r_2\mathcal{E}_1}{r_1+r_2}
\end{array}\right.
$$

稍作一些变换，在分式上下同除以 $$r_1r_2$$，我们可以将结果写成更对称的形式：

$$
\left\{\begin{array}{l}
\displaystyle r = \frac{1}{\frac{1}{r_1} + \frac{1}{r_2}} \\
\displaystyle \mathcal{E} = \frac{\frac{\mathcal{E}_1}{r_1} + \frac{\mathcal{E}_2}{r_2}}{\frac{1}{r_1} + \frac{1}{r_2} }
\end{array}\right.
$$

最终可以整理成更简洁漂亮、物理意义也更明确的形式：

$$
\left\{\begin{array}{l}
\displaystyle \frac{1}{r} = \frac{1}{r_1} + \frac{1}{r_2} \\
\displaystyle \frac{\mathcal{E}}{r} = \frac{\mathcal{E}_1}{r_1} + \frac{\mathcal{E}_2}{r_2}
\end{array}\right.
$$

由此，我们可以看到，两个并联电池的内阻，就相当于两者内阻并联之后的等效电阻。但等效电动势的结果就没有显而易见了，它看起来是两个电池各自电动势以某种方式在做加权的平均。

为了更好理解等效电动势的结果，我们不妨考虑将电池短接。这时两个电池分别驱动大小为 $$I_1=\frac{\mathcal{E}_1}{r_1}$$ 和  $$I_2=\frac{\mathcal{E}_2}{r_2}$$ 的电流。这两个电流加在一起，应当等于总的短路电流，即通过等效来看可以得到的 $$I=\frac{\mathcal{E}}{r}$$。这正是等效电动势表达式所表述的结果。

以上推得的两个电阻并联的结果，可以很容易地推广到 $$n$$ 个电池并联的情况，它们的等效内阻和等效电动势由下式给出：

$$
\left\{\begin{array}{l}
\displaystyle \frac{1}{r} = \frac{1}{r_1} + \frac{1}{r_2} + \cdots + \frac{1}{r_n} \\
\displaystyle \frac{\mathcal{E}}{r} = \frac{\mathcal{E}_1}{r_1} + \frac{\mathcal{E}_2}{r_2} + \cdots + \frac{\mathcal{E}_n}{r_n}
\end{array}\right.
$$

结果的证明从略，有兴趣的读者可以自行尝试证明。
