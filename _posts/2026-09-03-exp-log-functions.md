---
layout: post
title: "exp(x) 与 ln(x) 的另一种诞生方式"
date: 2026-09-03 20:48:00
description: 本文从 $$\ln(x)$$ 等于一个变上限的定积分作为定义出发，并以此为基石推导出所有关于 $$f(x) = \exp(x)$$ 和 $$f(x) = \ln x$$ 的基本性质。
tags: mathematics a-level calculus
categories: mathematics a-level 
---

不务正业的物理老师又耐不住性子来写数学了，这篇我们来谈一谈神奇的指数函数 $$\mathrm{e}^x$$ 和对数函数 $$\ln x$$。

在下面的正文展开前，读者朋友不妨回想一下这个问题：我们是如何从数学上定义我们都很熟悉的指数函数 $$\mathrm{e}^x$$ 和对数函数 $$\ln x$$ 的？

在不少基础微积分课程中，我们通过定义一个具有特别性质的常数 $$\displaystyle \mathrm{e} \equiv \lim_{n\to\infty} \left( 1 + \frac{1}{n} \right)^n = 2.718 \cdots$$ （A-Level 数学中甚至是更加简单粗暴地把 $$\mathrm{e}$$ 直接丢出来的），然后定义以它为底的指数函数 $$f(x) = \mathrm{e}^x$$，进而定义它的反函数 $$f(x) = \ln x$$，由此可以证明它们具有诸多奇妙又有用的性质（比如 $$\mathrm{e}^x$$ 的导数等于它自己，$$\ln x$$ 的导数等于 $$\frac{1}{x}$$ 等等）。

然而数学的美妙正在于它逻辑体系的自洽性，在最近翻阅 Stephen Fletcher Hewson 著有的 [A Mathematical Bridge]({{site.baseurl}}/books/2026_math_bridge/) 和齐民友先生所著的《重温微积分》过程中，我又跟着一起走了一遍所谓 Late Transcendentals 的逻辑体系，即在建立微积分学的基本框架后，将 $$\ln x$$ 定义为一个变上限的定积分函数，并以此为基石推导出所有关于 $$f(x) = \mathrm{e}^x$$ 和 $$f(x) = \ln x$$ 的基本性质。

以下便是我的话痨版笔记。

## 从幂函数的导数和积分谈起

初学微积分时，我们很快都会学到，对于任意幂次的幂函数（power function），我们都可以快乐地求出它的导数（derivative）

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left( x^n \right) = n x^{n-1} \qquad \text{for any } n \in \mathbb{R}
$$

后续学习幂函数的积分时，我们也有如下的针对幂次 $$n\neq-1$$ 时的结果：

$$
\int x^n \, \mathrm{d}x = \frac{x^{n+1}}{n+1} + C \qquad (n\neq-1)
$$

一个自然的问题便是，$$n=-1$$ 的情况到底特别在哪里呢？$$f(x)=x^{-1}$$ 并不是什么犯了天条的雷霆函数，在不包含 $$x=0$$ 的区间上它有着规规矩矩的连续性、可导性，所以它的积分显然可以给出有意义的结果。另一方面，这家伙似乎就是会破坏整个幂函数家族的队形，是个很特别的另类。有微积分基础的同学应该都知道，对 $$f(x)=x^{-1}$$ 的积分会颇为出人意料地给出对数函数：

$$
\int \frac{1}{x} \, \mathrm{d}x = \ln x + C
$$

那如果我们零帧起手，索性把这个幂函数家族中特立独行的 $$\frac{1}{x}$$ 的积分定义成所谓的对数函数 $$f(x) = \ln x$$，我们是否能够推导出我们所熟悉的关于对数函数的诸多基本性质呢？

## 对数函数 $$\ln x$$ 的引入

起跑线迈出第一步，我们定义：

$$
\ln x \equiv \int_1^x \frac{1}{u} \, \mathrm{d}u \quad (x \in \mathbb{R}^+) \tag{1-1}
$$

我们把定积分的下限固定在 $$1$$，即 $$\ln x$$ 给出的是 $$u=1$$ 到 $$u=x$$ 区间内曲线 $$f(u) = \frac{1}{u}$$ 下的面积。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/defining-log.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

定积分上下限相等时，定积分结果为零，我们立刻得到：

$$
\ln 1 = 0 \tag{1-2}
$$

考察定积分上限在 $$u=1$$ 左侧或右侧的情形，我们也很容易得到：

$$
\begin{cases}
\ln x > 0 & \text{for } x > 1 \\
\ln x < 0 & \text{for } 0 < x < 1
\end{cases} \tag{1-3}
$$

根据微积分基本定理，即求导和积分互为逆运算，我们也可以从定义 (1-1) 得出：

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left( \ln x \right) = \frac{1}{x} \tag{1-4}
$$

接下来我们考虑 $$\ln(ax)$$ 的导数（其中 $$a$$ 是任意正数）。利用链式求导法则（chain rule）：

$$
\frac{\mathrm{d}}{\mathrm{d}x}  \ln (ax)  = a \cdot \frac{1}{ax} = \frac{1}{x} = \frac{\mathrm{d}}{\mathrm{d}x} \left( \ln x \right)
$$

$$\ln (ax)$$ 和 $$\ln x$$ 的导数相等，意味着它们之间的差是一个常数（这是 Lagrange 中值定理的一个推论：若两个函数在某区间上的导数处处相等，则它们在该区间只相差一个常数）：

$$
\ln (ax) = \ln x + C
$$

代入 $$x=1$$，我们有 $$\ln a = \cancelto{0}{\ln 1} + C$$，因此常数 $$C = \ln a$$，由此得到：

$$
\ln(ax) = \ln a + \ln x
$$

上式中将 $$x$$ 设为任意正数 $$b$$，代入 $$x=b$$，立刻得到对数函数的加法法则：

$$
\ln(ab) = \ln a + \ln b \qquad (a, b \in \mathbb{R}^+) \tag{1-5}
$$

多次运用 (1-5) 式的结果，不难证明对于正整数幂次成立的对数次方公式：

$$
\ln x^n = n\ln x \qquad (n \in \mathbb{Z}^+) \tag{1-6}
$$

引入 $$y = x^n$$ 即 $$x = y^\frac{1}{n}$$ ，代入 (1-6) 后我们有：

$$
\ln y = \ln x^n = n\ln x = n \ln y^\frac{1}{n} \quad \Rightarrow \quad \ln y^\frac{1}{n} = \frac{1}{n}\ln y
$$

把变量名换回 $$x$$，这就变成了：

$$
\ln x^\frac{1}{n} = \frac{1}{n} \ln x \qquad (n \in \mathbb{Z}^+) \tag{1-7}
$$

结合 (1-6) 和 (1-7) 的结果，我们得到对于正有理数幂次成立的对数次方公式：

$$
\ln x^\frac{n}{m} = \frac{n}{m} \ln x  \qquad (n,m \in \mathbb{Z}^+) \tag{1-8}
$$

我们还可以在 (1-5) 式中代入 $$b=\frac{1}{a}$$：

$$
\ln a + \ln \frac{1}{a} = \ln\left(a \cdot \frac{1}{a} \right) = \ln 1 = 0
$$

因此有：

$$
\ln \frac{1}{a} = \ln a^{-1} = - \ln a \qquad (a \in \mathbb{R}^+) \tag{1-9}
$$

如果我们考察 $$\ln\frac{a}{b}$$，结合 (1-5) 式，我们有：

$$
\ln\frac{a}{b} = \ln \left(a \cdot \frac{1}{b} \right) = \ln a + \ln \frac{1}{b}
$$

代入 (1-9) 式的结果就立刻可以推导出对数函数的减法法则：

$$
\ln\frac{a}{b} = \ln a - \ln b \qquad (a, b \in \mathbb{R}^+) \tag{1-10}
$$

此外，有了 (1-9) 式的结果，我们可以将 (1-8) 式的对数次方公式推广到幂次为负有理数的情况，即：

$$
\ln x^\frac{n}{m} = \frac{n}{m} \ln x  \qquad (n,m \in \mathbb{Z}) \tag{1-11}
$$

显然 $$\ln x$$ 是一个连续函数（continuous function），由有理数的稠密性，以上对所有有理数幂次都成立的对数次方公式可以进一步推广至所有实数幂次：

$$
\ln x^p = p \ln x   \qquad (p \in \mathbb{R}) \tag{1-12}
$$

最后，我们还可以从定义式 (1-1) 推导出 $$\ln(1+x)$$ 的一个无穷展开式：

$$
\begin{align*}
\ln(1+x) &= \int_1^{1+x} \frac{1}{u} \, \mathrm{d} u & \\
&= \int_0^x \frac{1}{1+v} \, \mathrm{d} v & \text{let } u = 1+v \\
&= \int_0^x ( 1 - v + v^2 - v^3 + \cdots) \,\mathrm{d}v & \text{given }  |v|<1 \\
\Rightarrow \ln(1+x) &= x - \frac{1}{2}x^2 + \frac{1}{3}x^3 - \frac{1}{4}x^4 + \cdots &\text{given }  |x|<1 \tag{1-13}\\ 
\end{align*}
$$

## 指数函数 $$\mathrm{e}^x$$ 的引入

我们把 $$f(x) = \ln x$$ 的反函数定义为一个新的函数，目前我们必须假装不知道这个函数其实是指数函数家族的一员，我们暂且将其记作 $$f(x) = \exp(x)$$。它需要满足：

$$
y = \ln x \quad \Leftrightarrow \quad x = \exp(y) \tag{2-1}
$$

由 (1-2) 式 $$\ln 1 = 0$$，立刻知道：

$$
\exp(0) = 1 \tag{2-2}
$$

考虑 (2-1) 式的导函数，由 (1-4) 式 $$\frac{\mathrm{d} y}{\mathrm{d}x} = \frac{1}{x}$$：

$$
\frac{\mathrm{d} x}{\mathrm{d}y} = x = \exp(y) \qquad \Rightarrow \qquad \frac{\mathrm{d}}{\mathrm{d}y} \exp(y) = \exp(y)
$$

将上式的变量改写回看起来更习惯的 $$x$$：

$$
\frac{\mathrm{d}}{\mathrm{d}x} \exp(x) = \exp(x) \tag{2-3}
$$

即 $$f(x) = \exp(x)$$ 的导数等于其自身。

我们也可以尝试将 $$\exp(x)$$ 展开成一个无穷多项式（这里我们不加证明地默认无限项和收敛）：

$$
\exp(x) = \sum_{n=0}^\infty a_n x^n
$$

代入到 (2-3) 式中，我们有

$$
\sum_{n=0}^\infty a_n \cdot n x^{n-1} = \sum_{n=0}^\infty a_n x^n \tag{*}
$$

注意到等式左边 $$n=0$$ 项对求和的贡献为零，可以移除该项后对求和式进行改写：

$$
\sum_{n=0}^\infty a_n \cdot n x^{n-1} = \sum_{n=1}^\infty a_n \cdot n x^{n-1} = \sum_{n=0}^\infty a_{n+1} \cdot (n+1) x^{n}
$$

在上式的第二个等号中，我们将求和指标平移了一个单位 $$n \to n-1$$。代回$$(*)$$式后，我们有

$$
\begin{align*}
\sum_{n=0}^\infty a_{n+1} \cdot (n+1) x^{n} = \sum_{n=0}^\infty a_n x^n \\
\sum_{n=0}^\infty \left[ a_n - (n+1)a_{n+1} \right] x^n =0
\end{align*}
$$

我们希望上式对任意 $$x \in \mathbb{R}$$ 都成立，则展开式的系数必须满足：

$$
a_n - (n+1)a_{n+1} = 0 \quad \Rightarrow \quad a_{n+1} = \frac{1}{n+1}a_n
$$

反复运用此递推关系：

$$
a_n = \frac{1}{n} a_{n-1} = \frac{1}{n} \frac{1}{n-1} a_{n-2} = \cdots = \frac{1}{n} \frac{1}{n-1} \cdots \frac{1}{2} \cdot \frac{1}{1} \cdot a_0
$$

由此得到展开式系数：

$$
a_n = \frac{1}{n!}a_0
$$

于是 $$\exp(x)$$ 的展开式有：

$$
\exp(x) = \sum_{n=0}^\infty \frac{1}{n!}a_0x^n = a_0 \left[ 1 + x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 +\cdots \right]
$$

注意已经得出的 (2-2) 式的结果 $$\exp(0) = 1$$，可以确定下来 $$a_0 = 1$$，于是：

$$
\exp(x) = \sum_{n=0}^\infty \frac{1}{n!}x^n =  1 + x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 +\cdots  \tag{2-4}
$$

最后，我们来论证为什么 $$\exp(x)$$ 就是以某个神奇数字 $$\mathrm{e}$$ 为底的指数函数。我们知道，$$\ln 1 = 0$$ 且 $$f(x) = \ln x$$ 在 $$x\to+\infty$$ 时发散，根据介值定理，一定存在某个特殊的 $$x^* \in \mathbb{R}$$ 可以使得 $$\ln x^* = 1$$。我们将这个特别的数记作 $$\mathrm{e}$$，即 $$\mathrm{e}$$ 被定义为满足以下关系的常数：

$$
\ln \mathrm{e} \equiv 1 \tag{2-5}
$$

根据 $$\ln x$$ 和 $$\exp(x)$$ 互为反函数的定义，自然有

$$
\ln (\exp(x)) = x
$$

我们可以运用 (1-12) 式把 $$x$$ 进一步写成如下形式：

$$
x=x \cdot 1 = x \ln \mathrm{e} = \ln \left(\mathrm{e}^x \right)
$$

对比上面两式，我们得出 $$\exp(x)$$ 就是以 $$\mathrm{e}$$ 为底的指数函数：

$$
\exp(x) = \mathrm{e}^x \tag{2-6}
$$

在 (2-4) 式中取 $$x=1$$，我们还可以得到 $$\mathrm{e}$$ 的一个级数展开式：

$$
\mathrm{e} = \exp(1) = \sum_{n=0}^\infty \frac{1}{n!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} +\cdots  \tag{2-7}
$$

## 后续待填的坑

至此，指数函数 $$\mathrm{e}^x$$ 和对数函数 $$\ln x$$ 的诸多基本结论都通过 Late Transcendentals 的框架给出了推导，但是这篇笔记的篇幅已经炸了。

但我们还有一件很重要的事情没有证明：凭什么满足 $$\ln \mathrm{e} = 1$$ 的常数 $$\mathrm{e}$$、即可以用无穷级数 $$\mathrm{e} = \sum_{n=0}^\infty \frac{1}{n!}$$ 来计算到任意精度的常数 $$\mathrm{e}$$，和利用极限 $$\mathrm{e} \equiv \lim_{n\to\infty} \left( 1 + \frac{1}{n} \right)^n$$ 定义出的常数 $$\mathrm{e}$$ 是同一个数字？

[欲知后事如何，且听下回分解。]({{site.baseurl}}/blog/2026/euler-constant-e/)