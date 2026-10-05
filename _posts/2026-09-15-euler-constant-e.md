---
layout: post
title: "从极限到级数：证明 e 的两种定义等价"
date: 2026-09-15 09:38:00
description: 本抄书笔记证明了为什么看起来毫不相关的通过无穷级数展开定义的常数 e 和一个特殊数列极限值 e 最终殊途同归完全等价
tags: mathematics a-level calculus
categories: mathematics a-level 
---

## 前文回顾

[上篇]({{site.baseurl}}/blog/2026/exp-log-functions/)中我们通过所谓 Late Transcendentals 的逻辑体系从数学上定义了指数函数 $$\mathrm{e}^x$$ 和对数函数 $$\ln x$$.

从 $$\ln x \equiv \int_1^x \dfrac{1}{u} \,\mathrm{d} u$$ 为对数函数的定义出发，我们推导出了一系列 $$\ln x$$ 和它的反函数 $$\exp(x)$$ 的性质。

其中一个重要的结果是 $$\exp(x)$$ 的展开式：

$$
\exp(x) =\sum_{r=0}^\infty \frac{1}{r!}x^r =  1 + x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 +\cdots
$$

我们证明了 $$\exp(1)$$ 是刚好让 $$\ln x$$ 的函数值为 $$1$$ 的一个特别常数，并且 $$\exp(x)$$ 其实就是底数为 $$\exp(1)$$ 的指数函数。在 $$\exp(x)$$ 的无穷级数展开式中取 $$x=1$$，还得到常数 $$\exp(1)$$ 的一个级数展开式：

$$
\exp(1) = \sum_{r=0}^\infty \frac{1}{r!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} +\cdots  \tag{1}
$$

很多读者可能会对以上小众的符号记法表示不解，在 A-Level 数学和很多通用的教材中，我们通常将指数函数 $$\exp(x)$$ 写成 $$\mathrm{e}^x$$，其中底数 $$\mathrm{e} = \exp(1)$$ 是著名的 Euler 常数。对微积分略有所知的读者可能也知道，我们也可以利用极限定义这个常数 $$\mathrm{e}$$：

$$
\mathrm{e} \equiv \lim_{n\to\infty} \left( 1 + \frac{1}{n} \right)^n \tag{2}
$$

在本篇笔记中，我们就来证明为什么看起来毫不相关的 (1) 式和 (2) 式最终殊途同归。为了区分两者，我们特意将由 (1) 式无穷逼近的常数表示成 $$\exp(1)$$，而将由 (2) 式给出的常数用惯用符号 $$\mathrm{e}$$ 来表示。我们的目标即要证明：$$\exp(1) = \mathrm{e}$$.

## 证明开摆

引入数列

$$
e_n = \left( 1 + \frac{1}{n} \right)^n \tag{3}
$$

先用二项式定理（binomial theorem）对付下 $$n$$ 为有限正整数时的情况：

$$
\begin{align*}
e_n &= 1 + \frac{n}{1!}\frac{1}{n} + \frac{n(n-1)}{2!}\frac{1}{n^2} + \frac{n(n-1)(n-2)}{3!}\frac{1}{n^3} + \cdots \\
& \hspace{80pt} + \frac{n(n-1)(n-2)\cdots2\cdot1}{n!}\frac{1}{n^n} \\
&= 1 + 1 + \frac{1}{2!}\left( 1 - \frac{1}{n} \right) + \frac{1}{3!}\left( 1 - \frac{1}{n} \right)\left( 1 - \frac{2}{n} \right) + \cdots \\
& \hspace{80pt} + \frac{1}{n!}\left( 1 - \frac{1}{n} \right)\left( 1 - \frac{2}{n} \right) \cdots \left( 1 - \frac{n-1}{n} \right) \tag{4}  \\
\end{align*}
$$

顺手写出下一项：

$$
\begin{align*}
e_{n+1} &= 1 + 1 + \frac{1}{2!}\left( 1 - \frac{1}{n+1} \right) + \frac{1}{3!}\left( 1 - \frac{1}{n+1} \right)\left( 1 - \frac{2}{n+1} \right) + \cdots \\
& \hspace{50pt} + \frac{1}{n!}\left( 1 - \frac{1}{n+1} \right)\left( 1 - \frac{2}{n+1} \right) \cdots \left( 1 - \frac{n-1}{n+1} \right) \\
& \hspace{50pt} + \frac{1}{(n+1)!}\left( 1 - \frac{1}{n+1} \right)\left( 1 - \frac{2}{n+1} \right) \cdots \left( 1 - \frac{n-1}{n+1} \right) \left( 1 - \frac{n}{n+1} \right)
\end{align*}
$$

逐项对比 $$e_n$$ 和 $$e_{n+1}$$，除了前两项长得一模一样，剩余 $$e_n$$ 的每一项都被 $$e_{n+1}$$ 的相应项压一头，而且 $$e_{n+1}$$ 还多了最后一个项，因此：

$$
e_n < e_{n+1} \tag{5}
$$

这说明 $$\{e_n \}$$ 是一个随着 $$n$$ 单调增长的数列。

回过头继续观察 (4) 式，注意到展开式中的每个括号都小于 $$1$$，因此

$$
e_n < 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots + \frac{1}{n!} = \sum_{r=0}^n \frac{1}{r!} \tag{6}
$$

对比 $$\exp(1)$$ 的无穷级数展开 $$\displaystyle \exp(1) = \sum_{r=0}^\infty \frac{1}{r!}$$，可以看出对于有限的正整数 $$n$$，有：

$$
e_n < \exp(1) \tag{7}
$$

这又说明了，不论正整数 $$n$$ 有多大，$$\{e_n \}$$ 总是一个有界的数列。根据数学分析里的一个基础的存在性定理，任何单调递增且有上界的数列必有极限，我们可以断言 $$\{e_n\}$$ 必然趋向某个不超过 $$\exp(1)$$ 的极限值。  

注意我们目前只证明了 $$\{e_n\}$$ 的每一项都小于 $$\exp(1)$$，但是很奇妙的是，$$\{ e_n\}$$ 的极限会等于 $$\exp(1)$$，不多也不少。这个关键证明的神来之笔莫过于去考察 $$\{e_n\}$$ 的双胞胎数列 $$\{e_{-n}\}$$。我们将会看到， 当 $$\{e_n\}$$ 从下方不断增长、无限逼近它自己的极限时，$$\{e_{-n}\}$$ 会从上方不断递减、无限逼近同一个极限。这个共同的极限只能是夹在两者之间无处可逃的 $$\exp(1)$$。

引入数列

$$
e_{-n} = \left( 1 - \frac{1}{n} \right)^{-n} \tag{8}
$$

针对二项式的指数为负整数的情形，依然可以用广义二项式定理（generalized binomial theorem）进行展开：

$$
\begin{align*}
e_{-n} &= 1 + \frac{-n}{1!}\left(-\frac{1}{n}\right) + \frac{(-n)(-n-1)}{2!}\left(-\frac{1}{n}\right)^2 \\
& \hspace{50pt}+ \frac{(-n)(-n-1)(-n-2)}{3!}\left(-\frac{1}{n}\right)^3 + \cdots \\
&= 1 + \frac{n}{1!}\frac{1}{n} + \frac{n(n+1)}{2!}\frac{1}{n^2} + \frac{n(n+1)(n+2)}{3!}\frac{1}{n^3} + \cdots \\
&= 1 + 1 + \frac{1}{2!}\left( 1 + \frac{1}{n} \right) + \frac{1}{3!}\left( 1 + \frac{1}{n} \right)\left( 1 + \frac{2}{n} \right) + \cdots  \tag{9}  \\
\end{align*}
$$

不同于指数为正整数的情形， $$e_{-n}$$ 的展开式包含无穷多项。注意到展开式中的每个括号都大于 $$1$$，逐项放缩后可知：

$$
e_{-n} > 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots  = \sum_{r=0}^\infty \frac{1}{r!} \tag{10}
$$

对比 $$\exp(1)$$ 的无穷级数，再结合 (7) 式的结果，得到夹逼不等式关系：

$$
e_n < \exp(1) < e_{-n} \tag{11}
$$

到此我们就只差证明在正整数 $$n$$ 趋于正无穷时 $$e_n$$ 和 $$e_{-n}$$ 趋于相同的极限了。

考虑这兄弟俩的比值：

$$
\frac{e_n}{e_{-n}} = \frac{ \left( 1 + \dfrac{1}{n} \right)^{n}}{ \left( 1 - \dfrac{1}{n} \right)^{-n}} =  \left( 1 + \frac{1}{n} \right)^{n}  \left( 1 - \frac{1}{n} \right)^{n} =  \left( 1 - \frac{1}{n^2} \right)^{n} \tag{12}
$$

对付这个式子的武器依然是二项式展开：

$$
\begin{align*}
\frac{e_n}{e_{-n}} &= \sum_{r=0}^n \frac{n!}{r!(n-r)!}\left( - \frac{1}{n^2} \right)^r \\
&= 1 + \sum_{r=1}^n \frac{n!}{r!(n-r)!}\left( - \frac{1}{n^2} \right)^r\tag{13}
\end{align*}
$$

把所有的负项都放大成正项：

$$
\frac{e_n}{e_{-n}} <  1 + \sum_{r=1}^n \frac{n!}{r!(n-r)!} \frac{1}{n^{2r}}
$$

求和中的二项式系数也可以进行放缩：

$$
\frac{n!}{r!(n-r)!} = \frac{n(n-1)(n-2)\cdots(n-r+1)}{r!} < \frac{n^r}{r!}
$$

于是进一步得到：

$$
\frac{e_n}{e_{-n}} < 1 + \sum_{r=1}^n \frac{n^r}{r!} \frac{1}{n^{2r}} = 1 + \sum_{r=1}^n \frac{1}{r!} \frac{1}{n^{r}}
$$

显然，对于 $$r\geq 1$$，我们有 $$\dfrac{1}{r!} \leq 1$$，于是继续放缩得到：

$$
\frac{e_n}{e_{-n}} <  1 + \sum_{r=1}^n  \frac{1}{n^{r}} \tag{14}
$$

需要估计的求和项被放缩成了一个和蔼可亲的等比级数，先暂缓搁置一下，后面不愁搞不定它。

回到 (13) 式，我们也可以如法炮制地把所有的正项都缩小成负项，如此便有：

$$
\frac{e_n}{e_{-n}} >  1 - \sum_{r=1}^n \frac{n!}{r!(n-r)!} \frac{1}{n^{2r}}
$$

通过一系列相同的放缩操作，类似可得：

$$
\frac{e_n}{e_{-n}} >  1 - \sum_{r=1}^n  \frac{1}{n^{r}} \tag{15}
$$

这样我们又得到了一个夹逼不等式：

$$
1 - \sum_{r=1}^n  \frac{1}{n^{r}} < \frac{e_n}{e_{-n}} < 1 + \sum_{r=1}^n  \frac{1}{n^{r}}  \tag{16}
$$

不等式两边要对付的是同款的等比级数：

$$
\sum_{r=1}^n  \frac{1}{n^{r}} = \frac{1}{n}\frac{ 1 - \frac{1}{n^n}}{1-\frac{1}{n}}
$$

当正整数 $$n$$ 趋于无穷大时：

$$
\lim_{n\to\infty} \frac{1}{n}\frac{ 1 - \frac{1}{n^n}}{1-\frac{1}{n}} = \lim_{n\to\infty} \frac{1}{n} \times \lim_{n\to\infty} \frac{ 1 - \frac{1}{n^n}}{1-\frac{1}{n}} = 0 \times 1 = 0
$$

这说明当 $$n$$ 趋于无穷大时，(16) 式的两边都无限趋近于 1，根据夹逼定理（squeeze theorem）有：

$$
\lim_{n\to\infty} \frac{e_n}{e_{-n}} = 1 \tag{17}
$$

这说明 $$e_n$$ 和 $$e_{-n}$$ 趋于相同的极限。再回到 (11) 式的关系：$$e_n < \exp(1) < e_{-n}$$，同样根据夹逼定理，我们得到：

$$
\lim_{n\to\infty} e_n = \lim_{n\to\infty} e_{-n} = \exp(1) \tag{18}
$$

即 $$\displaystyle \mathrm{e} \equiv \lim_{n\to\infty} e_n = \lim_{n\to\infty} \left( 1 + \frac{1}{n} \right)^n$$ 和 $$\displaystyle \exp(1) \equiv \sum_{r=0}^\infty \frac{1}{r!}$$ 给出的是如假包换的相同常数。

## 参考资料推荐

本篇笔记重度抄袭自 Stephen Fletcher Hewson 所著的 [A Mathematical Bridge]({{site.baseurl}}/books/2026_math_bridge/) 和齐民友先生所著的《重温微积分》。

虽然我把推导从头到尾顺下来了，笔记的每个字符也是我古法手敲的，但所有的 idea 都来自于上述两本教材。在此也向对数学感兴趣的读者们推荐这两本硬核读物，前者非常适合学习 A-Level 课程的同学们提升数学视野，后者则适合系统学过一点微积分乃至数学分析的数学爱好者去发掘新的观点和视角。

