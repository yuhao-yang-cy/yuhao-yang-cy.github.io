---
layout: post
title: "从无序到正态分布：信息熵的极值原理"
date: 2026-04-10 22:41:00
description: 本篇从信息量的基本性质出发，导出信息熵的定义，并借助统计力学中的热力学熵给出其直观诠释。在此基础上，我们将证明，在均值与方差给定的约束下，使信息熵取得最大值的概率分布正是正态分布。
tags: mathematics probability machine-learning entropy
categories: mathematics linear-algebra machine-learning
---

> 依旧是来自 Christopher M. Bishop 和 Hugh Bishop 父子合著的『Deep Learning: Foundations and Concepts』的读书笔记。网上一查第一作者 Christopher Bishop，现任职于 Microsoft Research AI for Science 并且在 University of Edinburgh 和 University of Cambridge 担任客座教授的计算机科学大佬，生涯前半辈子一直到 PhD 和 postdoc 都是在做理论物理，也难怪某只半吊子的理论物理狗拿起来读着就莫名感到亲近。
>
> 碎碎念结束，以下正文。

熵是对概率分布不确定性的定量刻画，在信息论与统计力学中均扮演着核心角色。本篇笔记从信息量的基本性质出发，导出信息熵的定义，并借助统计力学中的热力学熵给出其直观诠释。在此基础上，我们考察一个自然的极值问题：在均值与方差给定的约束下，何种概率分布能使信息熵取得最大值？我们将证明，答案正是正态分布。这一结论揭示了正态分布在所有同方差分布中具有最大不确定性的深刻含义，也展示了最大熵原理作为建模工具的优雅与普适性。

本篇中会涉及到的数学工具——变分法与 Lagrange 乘子法，可以参考这两篇以前的文章：

- [从最速降曲线谈起——浅谈变分大法]({{site.baseurl}}/blog/2020/variational-principle/)
- [续浅谈变分原理：运动常数、拉格朗日乘子法]({{site.baseurl}}/blog/2020/variational-principle-continued/)

## 信息熵

假设离散变量 $$x$$ 遵循概率分布 $$p(x)$$，在对 $$x$$ 作观测得到了某个确定的数值，我们可以将从这次测量中所获得的信息视作知道 $$x$$ 取那个值给我们带来的意外程度：如果非常小概率的 $$x$$ 值被观测到了，这对应着大的信息量；反之，如果观测到的是原本就大概率出现的 $$x$$ 值，这类平平无奇的观测结果就没有太多信息量。这里笼统所说的信息量的多少，显然取决于变量 $$x$$ 的概率分布 $$p(x)$$。如果我们想用一个函数 $$h(x)$$ 来定量描述单侧观测到 $$x$$ 值所获得的信息量，并且希望 $$h(x)$$ 具有如下的基本性质：

- 信息量函数 $$h(x)$$ 应是一个非负函数，即 $$h(x) \geq 0$$
- 两次独立观测事件获得的总信息是单次观测获得的信息之和，即 $$h(x_1, x_2) = h(x_1) + h(x_2)$$

不难验证，我们可以将 $$h(x)$$ 取作概率分布函数 $$p(x)$$ 的负对数，即

$$
h(x) = - \ln p(x)
$$

若对变量 $$x$$ 作随机取样，可以得到的信息的期望值为

$$
H[x] = -\sum_x p(x) h(x)
$$

这个信息论中具有重要意义的量被称作**信息熵**（entropy），我们将其写作：

$$
\boxed{ H[x] = -\sum_x p(x) \ln p(x) }
$$

推广至 $$x$$ 是连续变量的情形。将 $$x$$ 分割至许多宽度为 $$\Delta x$$ 的区间，若 $$p(x)$$ 是连续函数，根据中值定理，对于第 $$i$$ 个这样的区间，必然存在某个 $$x_i \in [i\Delta x, (i+1)\Delta x]$$ 使得：

$$
\int_{i\Delta}^{(i+1)\Delta} p(x) \,\mathrm{d}x = p(x_i) \Delta
$$

如果我们把连续变量 $$x$$ 落进 $$[i\Delta x, (i+1)\Delta x]$$ 的情况都等同于 $$x=x_i$$，则我们观测到 $$x_i$$ 出现的概率就是 $$p(x_i) \Delta x$$。由此可以写出离散形式的信息熵：

$$
H = - \sum_i p(x_i) \Delta x \ln \left( p(x_i) \Delta x\right) = - \sum_i p(x_i) \Delta x\ln  p(x_i) - \ln \Delta x
$$

取 $$\Delta x \to 0$$ 的极限，上式中的第一项的求和可以替换成积分。由于我们取的区间宽度 $$\Delta x$$ 与 $$p(x)$$ 无关，我们可以先不管 $$\ln \Delta x$$ 的项，定义**连续信息熵**为：

$$
\boxed{ H[x] = - \int p(x) \ln p(x) \,\mathrm{d}x }
$$

我们为了方便起见省去了积分的上下限，在这里和后面的讨论中，$$\displaystyle \int (\cdots)\mathrm{d}x$$ 一律默认代表 $$\displaystyle \int_{-\infty}^{+\infty} (\cdots)\mathrm{d}x$$.

相比于离散信息熵，连续信息熵多出了额外的 $$- \ln \Delta x$$，而这个额外项在 $$\Delta x \to 0$$ 极限下会趋于 $$+\infty$$，这反映了如果我们把 $$x$$ 的取值划出茫茫多的区间，每个区间 $$\Delta x$$ 划分得非常精细，那我们就可以以非常高精度地给出一个连续变量 $$x$$ 的观测值，从而导致更高的信息熵。



## 统计力学视角

在统计力学中，我们也有类似的熵的概念来描述一个热力学系统的无序程度。考虑将 $$N$$ 个粒子占据总计 $$M$$ 个可能的能量状态的所有可能。我们对所有粒子不作区分，那么有 $$n_i$$ 个粒子占据第 $$i$$ 个能量状态的所有微观状态数为：

$$
W = \frac{N!}{\prod_i n_i!}
$$

某个宏观状态可以对应很多个微观状态数，其中最有可能出现的宏观状态便是对应微观状态数 $$W$$ 最多的态。因为 $$W$$ 取得最大值的条件等同 $$\ln W$$ 取得最大值，于是可以引入热力学熵：

$$
H = \frac{1}{N} \ln W = \frac{1}{N} \ln N! - \frac{1}{N} \sum_i \ln n_i!
$$

在 $$n \gg 1$$ 时，有 Stirling 公式 $$n! \approx n\ln n - n$$。所以，若取极限 $$N\to \infty$$ 时，我们有：

$$
\begin{align*}
H & \approx \frac{1}{N} (N \ln N - N) - \frac{1}{N} \sum_i (n_i \ln n_i - n_i) \\
& = \ln N - 1 - \frac{1}{N} \sum_i n_i \ln n_i + \frac{1}{N} \sum_i n_i \\
& = \ln N - \frac{1}{N} \sum_i n_i \ln n_i 
\end{align*}
$$

上式最后一步用到了粒子总数量 $$N = \sum_i n_i$$ 的关系。我们继续运用这个关系去改写 $$H$$ 函数：

$$
\begin{align*}
H & \approx \frac{\sum_i n_i}{N} \ln N - \frac{1}{N} \sum_i n_i \ln n_i \\
& = \sum_i \frac{n_i}{N} \left( \ln N - \ln n_i \right) \\
\Rightarrow H & \approx - \sum_i \frac{n_i}{N} \ln \frac{n_i}{N}
\end{align*}
$$

在热力学极限 $$N\to\infty$$ 下，注意到 $$\frac{n_i}{N}$$ 的意义即是粒子占据第 $$i$$ 个能量状态的概率，于是我们得到：

$$
H = -\sum_i p_i \ln p_i
$$

形式上与离散信息熵完全一致，这也说明了信息熵同热力学熵类似地都是系统无序程度的度量。

我们进一步考察 $$H$$ 取得极大值的条件。注意到 $$p_i$$ 服从概率归一化条件，所以我们要求解的是一个约束条件下的极大值问题（总能量是不是定值什么的这里暂时不管）。我们可以运用 Lagrange 乘子法，引入辅助函数：

$$
\tilde{H} = - \sum_i p_i \ln p_i - \lambda \left( \sum_i p_i -1 \right)
$$

求关于 $$p_i$$ 的偏导可以得到：

$$
\begin{align*}
\frac{\partial \tilde{H}}{\partial p_i} &= -\ln p_i - 1 - \lambda = 0 \\
\Rightarrow \ln p_i &= -1 - \lambda
\end{align*}
$$

这说明 $$H$$ 在所有的 $$p_i$$ 都等于一个相同的常数时取得极大值。$$p_i^*$$ 的值可以回去用概率归一化的条件来求得。由于能量状态总数共有 $$M$$ 个，粒子占据任何能量状态的概率都相同意味着

$$
\boxed{ p_i^* = \frac{1}{M} }
$$

此时，可以得到最大熵：

$$
H_\text{max} = \sum_i \frac{1}{M} \ln \frac{1}{M} \quad \Rightarrow \quad \boxed{H_\text{max} = \ln M}
$$



## 最大熵与正态分布

小试牛刀后，我们接下来考虑如下的问题：在均值和方差都确定的前提下，何种概率分布 $$p(x)$$ 可以使得信息熵 $$H[p] = - \int p(x) \ln p(x) \,\mathrm{d}x$$ 有极大值呢？

具体而言，待求的概率分布函数必须满足如下的约束条件：

$$
\begin{align*}
\int p(x) \,\mathrm{d}x &= 1 & (\text{C1})\\
\int x p(x) \,\mathrm{d}x &= \mu & (\text{C2})\\
\int (x-\mu)^2 p(x) \,\mathrm{d}x &= \sigma^2 & (\text{C3})
\end{align*}
$$

运用 Lagrange 乘子法构造辅助函数：

$$
\begin{align*}
\tilde{H}[x] = &- \int p(x) \ln p(x) \,\mathrm{d}x - \lambda_1\left( \int p(x) \,\mathrm{d}x - 1\right) \\
&- \lambda_2\left( \int xp(x) \,\mathrm{d}x - \mu \right) - \lambda_3\left( \int (x-\mu)^2 p(x) \,\mathrm{d}x - \sigma^2 \right)
\end{align*}
$$

泛函 $$\tilde{H}[x]$$ 的极值条件给出：

$$
\begin{align*}
\frac{\partial (\cdots)}{\partial p} &= -1 - \ln p - \lambda_1 - \lambda_2 x - \lambda_3 (x-\mu)^2 = 0 \\
\ln p &= -1 - \lambda_1 - \lambda_2 x - \lambda_3 (x-\mu)^2
\end{align*}
$$

由此得到 $$p(x)$$ 的一个初步的形式：

$$
\boxed{ p(x) = \mathrm{e}^{-1 - \lambda_1 - \lambda_2 x - \lambda_3 (x-\mu)^2} } \qquad (\text{P})
$$

我们尚需找出 Lagrange 乘子 $$\lambda_1, \lambda_2, \lambda_3$$ 的取值，这可以把毛胚版的 $$p(x)$$ 逐一代回 (C1) ~ (C3) 的约束条件一探究竟。先将 $$p(x)$$ 的形式带入概率归一的约束条件：

$$
\begin{align*}
1 &= \int \mathrm{e}^{-1 - \lambda_1 - \lambda_2 x - \lambda_3 (x-\mu)^2} \,\mathrm{d}x  \\
&= \mathrm{e}^{-1 - \lambda_1} \int \mathrm{e}^{- \lambda_2 (x+\mu) - \lambda_3 x^2} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu} \int \mathrm{e}^{- \lambda_3 x^2 - \lambda_2 x} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu} \int \mathrm{e}^{- \lambda_3 \left( x + \frac{\lambda_2}{2\lambda_3} \right)^2 + \frac{\lambda_2^2}{4 \lambda_3}} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \int \mathrm{e}^{- \lambda_3 \left( x + \frac{\lambda_2}{2\lambda_3} \right)^2 } \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \int \mathrm{e}^{- \lambda_3 x^2 } \,\mathrm{d}x \\
\Rightarrow 1 &= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \sqrt{\frac{\pi}{\lambda_3}} \qquad{(\text{C1})}
\end{align*}
$$

上面的推导中，第二行和倒数第二行作了平移变换 $$x \to x'=x - \mu$$ 和 $$x \to x' = x + \frac{\lambda_2}{2\lambda_3}$$，而最后一步用到了 Gaussian 积分的结果：

$$
\int \mathrm{e}^{-ax^2} \,\mathrm{d}x  = \sqrt{\frac{\pi}{a}}
$$

接着，我们再将 $$p(x)$$ 代入均值的约束条件：

$$
\begin{align*}
\mu &= \int x \mathrm{e}^{-1 - \lambda_1 - \lambda_2 x - \lambda_3 (x-\mu)^2} \,\mathrm{d}x  \\
&= \mathrm{e}^{-1 - \lambda_1} \int (x+\mu) \mathrm{e}^{- \lambda_2 (x+\mu) - \lambda_3 x^2} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu} \int (x+\mu) \mathrm{e}^{- \lambda_3 x^2 - \lambda_2 x} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu} \int (x+\mu) \mathrm{e}^{- \lambda_3 \left( x + \frac{\lambda_2}{2\lambda_3} \right)^2 + \frac{\lambda_2^2}{4 \lambda_3}} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \int (x+\mu) \mathrm{e}^{- \lambda_3 \left( x + \frac{\lambda_2}{2\lambda_3} \right)^2 } \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \int \left(x+\mu - \frac{\lambda_2}{2\lambda_3} \right) \mathrm{e}^{- \lambda_3 x^2 } \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \left[ \underbrace{\int x \mathrm{e}^{- \lambda_3 x^2 } \,\mathrm{d}x}_{0} + \left(\mu - \frac{\lambda_2}{2\lambda_3} \right) \underbrace{\int  \mathrm{e}^{- \lambda_3 x^2 } \,\mathrm{d}x}_{\sqrt{\frac{\pi}{\lambda_3}}} \right]\\
\Rightarrow \mu &= \mathrm{e}^{-1 - \lambda_1 - \lambda_2 \mu + \frac{\lambda_2^2}{4 \lambda_3}} \left(\mu - \frac{\lambda_2}{2\lambda_3} \right)\sqrt{\frac{\pi}{\lambda_3}} \qquad{(\text{C2})}
\end{align*}
$$

这里我们分别在第二行和倒数第三行中作了跟先前类似的平移变换 $$x \to x'=x - \mu$$ 和 $$x \to x'=x + \frac{\lambda_2}{2\lambda_3}$$。倒数第二行将积分拆成了两部分，根据对称性可知第一部分的积分结果为零，而第二部分则又是如假包换的 Gaussian 积分。

比较 (C1) 和 (C2) 式的结果，将两式相除，我们发现：

$$
\mu = \mu - \frac{\lambda_2}{2\lambda_3} \quad \Rightarrow \quad \boxed{\lambda_2 = 0}
$$

如此，我们得到略微简化后的结果：

$$
\begin{align*}
p(x) &= \mathrm{e}^{-1 - \lambda_1 - \lambda_3 (x-\mu)^2} & \phantom{P}(\text{P})\\
1 &= \mathrm{e}^{-1 - \lambda_1} \sqrt{\frac{\pi}{\lambda_3}} & {(\text{C1})}
\end{align*}
$$

还有最后一条关于方差的约束条件，继续撸起袖子干：

$$
\begin{align*}
\sigma^2 &= \int (x-\mu)^2 \mathrm{e}^{-1 - \lambda_1 - \lambda_3 (x-\mu)^2} \,\mathrm{d}x  \\
&= \mathrm{e}^{-1 - \lambda_1} \int x^2 \mathrm{e}^{- \lambda_3 x^2} \,\mathrm{d}x \\
&= \mathrm{e}^{-1 - \lambda_1} \sqrt{\frac{1}{\lambda_3^3}} \int x^2 \mathrm{e}^{-  x^2} \,\mathrm{d}x\\
&= \mathrm{e}^{-1 - \lambda_1} \sqrt{\frac{1}{\lambda_3^3}} \int (-) \frac{1}{2} x \,\mathrm{d} \mathrm{e}^{-x^2}\\
&= \mathrm{e}^{-1 - \lambda_1} \sqrt{\frac{1}{\lambda_3^3}} \left( -\frac{1}{2} x \mathrm{e}^{-x^2} \bigg|_{-\infty}^{+\infty} + \frac{1}{2} \int  \mathrm{e}^{-x^2} \,\mathrm{d} x\right) \\
&= \mathrm{e}^{-1 - \lambda_1} \sqrt{\frac{1}{\lambda_3^3}} \times\frac{1}{2} \sqrt{\pi} \\
\Rightarrow \sigma^2 &= \frac{1}{2}\mathrm{e}^{-1 - \lambda_1}  \sqrt{\frac{\pi}{\lambda_3^3}} \qquad{(\text{C3})}
\end{align*}
$$

将 (C3) 除以 (C1)，我们有：

$$
\sigma^2 = \frac{1}{2} \sqrt{\frac{1}{\lambda_3^2}} \quad \Rightarrow \quad \boxed{\lambda_3 = \frac{1}{2\sigma^2}}
$$

回到 (C1)，可以得到：

$$
1 = \mathrm{e}^{-1 - \lambda_1} \sqrt{2\pi \sigma^2}  \quad \Rightarrow \quad \boxed{\mathrm{e}^{-1 - \lambda_1} = \frac{1}{\sqrt{2 \pi \sigma^2}}}
$$

把所有敲定的 Lagrange 乘子代回 $$p(x)$$ 的毛胚式，经过最后的精装后，我们得到：

$$
\boxed{ p^*(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} \mathrm{e}^{- \frac{(x-\mu)^2}{2\sigma^2}} }
$$

使得信息熵 $$H[x]$$ 极大的概率分布正是大家再熟悉不过的正态分布！在均值和方差固定的前提下，正态分布是“最无知”的分布！

下面我们来计算信息熵的极大值：

$$
\begin{align*}
H_\text{max} &= - \int p^* \ln p^* \,\mathrm{d} x \\
& = - \int \frac{1}{\sqrt{2 \pi \sigma^2}} \mathrm{e}^{- \frac{(x-\mu)^2}{2\sigma^2}} \left[ \ln \left( \frac{1}{\sqrt{2 \pi \sigma^2}}\right) - \frac{(x-\mu)^2}{2\sigma^2} \right] \,\mathrm{d} x \\
& = - \ln \left( \frac{1}{\sqrt{2 \pi \sigma^2}}\right) + \frac{1}{\sqrt{2 \pi \sigma^2}} \int \frac{(x-\mu)^2}{2\sigma^2} \mathrm{e}^{- \frac{(x-\mu)^2}{2\sigma^2}} \,\mathrm{d} x  \\
& = \ln \sqrt{2 \pi \sigma^2} + \frac{1}{\sqrt{2 \pi \sigma^2}} \sqrt{2\sigma^2} \underbrace{\int x^2\mathrm{e}^{- x^2} \,\mathrm{d} x}_{\frac{1}{2}\sqrt{\pi}}  \\
&= \frac{1}{2} \ln \left( 2\pi \sigma^2\right) + \frac{1}{2}
\end{align*}
$$

最终得到：

$$
\boxed{ H_\text{max} = \frac{1}{2} \left[ 1 + \ln \left( 2\pi \sigma^2\right) \right] }
$$

从中我们不难看到，信息熵随着方差的增加而增加，正反映了信源遵循的概率分布不确定性越大，它的信息熵越大，即它能传输的信息也越多。


## 参考资料

- *Christopher M. Bishop & Hugh Bishop* (2024), **Deep Learning: Foundations and Concepts** [Chapter 2 - Probabilities], Springer Nature  