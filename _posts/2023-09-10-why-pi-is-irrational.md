---
layout: post
title: 圆周率是无理数的最短证明
date: 2023-09-10 12:32:00
description: 大半页纸就证明完了圆周率是无理数，就说秀不秀？
tags: mathematics number-theory pi
categories: mathematics
---

在 Twitter 的一则帖子上读到了这么一个关于 $$\pi$$ 是无理数的证明。

该证明由加拿大数学家 Ivan M. Niven 于1946年作出并于1947年发表在美国数学学会的期刊（Bulletin of the American Mathematical Society）上，全文篇幅不足1页，正文内容总计不超过15行，短小精悍，却处处充满了妙到毫巅的构造。

智力碾压的数学达人们可以直接阅读 Ivan Niven 的原文，我直接贴在下面。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ivan_niven_proof.png" title="Ivan M. Niven's Proof" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ivan M. Niven 仅仅不超过15行的证明原文
</div>


作为老咸鱼的数学爱好者，我能做的事情，当然是在欣赏之余，把大佬们三言两语就讲清楚的事情，掰扯成我等凡人的智力也能 follow 的话痨版。

___


思路基于反证法，我们先假定 $$\pi$$ 是有理数，即假定存在互质的正整数 $$a$$ 和 $$b$$ 使得 $$\pi = \frac{a}{b}$$，依此来引出矛盾。

首先构造两个辅助函数

$$
f(x) = \frac{x^n (a-bx)^n}{n!}
$$

以及

$$
F(x) = f(x) - f^{(2)}(x) + f^{(4)}(x) - \cdots + (-1)^n f^{(2n)}(x)
$$

其中 $$n$$ 为正整数，$$f^{(k)}(x)$$ 表示函数 $$f(x)$$ 的第 $$k$$ 阶导数。

注意到 $$x^n (a-bx)^n$$ 展开后是一个最低项是 $$x^n$$、最高项为 $$x^{2n}$$ 的多项式。又由于$$a$$，$$b$$，$$n$$ 都是正整数，因此该多项式的系数皆为整数。因此可以将其记作

$$
f(x) = \frac{1}{n!} \left( c_n x^n + c_{n+1} x^{n+1} + c_{n+2} x^{n+2} + \cdots + c_{2n} x^{2n} \right)
$$

其中系数 $$c_i$$ 都是整数，指标 $$i=n,n+1, n+2, \cdots, 2n$$。

接下来考察在 $$x=0$$ 处 $$f(x)$$ 的各阶导数，即 $$f^{(k)}(0)$$ 的值。

我们依次来分析 $$f(x)$$ 多项式展开中的每一项的 $$k$$ 阶导数。当 $$k > i$$ 时，恒有

$$
\frac{d^k}{dx^k} \left( \frac{1}{n!}c_i x^i\right) = 0
$$

而当 $$k < i$$ 时，有

$$
\frac{d^k}{dx^k} \left( \frac{1}{n!}c_i x^i\right)\Bigg|_{x=0} = \frac{i(i-1)\cdots(i-k+1)}{n!}c_i x^{i-k}\Bigg|_{x=0} = 0
$$

仅当 $$k=i$$ 时，有

$$
\frac{d^k}{dx^k} \left( \frac{1}{n!}c_i x^i\right) = \frac{i!}{n!}c_i
$$

注意到 $$n \leq i$$，因此 $$\frac{i!}{n!}$$ 是正整数，而 $$c_i$$ 也是整数，因此 $$\frac{i!}{n!}c_i$$ 必是整数。

综上三种情况，我们可以断定 $$f^{(k)}(0)$$ 都是整数。根据构造，$$F(0)$$ 也是一个整数。

另一方面，可以注意到 $$f(x)$$ 具有对称性：

$$
\begin{aligned}
    f(\pi - x) &= f\left(\frac{a}{b} - x\right) \\
    &= \frac{\left(\frac{a}{b} - x\right)^n \left[ a - b\left(\frac{a}{b} -x \right) \right]^n}{n!} \\
    &= \frac{\left(\frac{a}{b} - x\right)^n \left( bx\right)^n}{n!} \\
    & = \frac{x^n (a-bx)^n}{n!} \\
    & = f(x)
\end{aligned}
$$

于是

$$
f^{(k)}(\pi - x) = (-1)^k f^{(k)}(x)
$$

取 $$x=0$$，我们有

$$
f^{(k)}(\pi) = (-1)^k f^{(k)}(0)
$$

$$f^{(k)}(0)$$ 是整数意味着 $$f^{(k)}(\pi)$$ 也是整数，因此我们马上得出 $$F(\pi)$$ 也是一个整数。

___

根据 $$F(x)$$ 和 $$f(x)$$ 的构造，还可以注意到一个精妙的关系：

$$
\begin{aligned}
    F''(x) &= \frac{d^2}{dx^2} \left[ f(x) - f^{(2)}(x) + f^{(4)}(x) - \cdots + (-1)^n f^{(2n)}(x) \right] \\
    & = f^{(2)}(x) - f^{(4)}(x) + f^{(6)}(x) - \cdots + (-1)^{n-1} f^{(2n)}(x) + (-1)^{n} f^{(2n+2)}(x) \\
    & = f(x)-\left[ f(x) - f^{(2)}(x) + f^{(4)}(x) - \cdots + (-1)^n f^{(2n)}(x) \right]  + (-1)^{n} f^{(2n+2)}(x) \\
    &= f(x) -F(x)  + (-1)^{n} f^{(2n+2)}(x) 
\end{aligned}
$$

还记得我们说过 $$f(x)$$ 是个最高项是 $$x^{2n}$$ 次的多项式吗？如果对它求导超过了 $$2n$$ 阶，结果就化成零了，因此上式中的最后一项可以直接抹掉。由此得到：

$$
f(x) = F(x) + F''(x)
$$

接下来便是作者整个证明中最为神来之笔的一个构造。考察如下这么个函数的导数：

$$
\begin{aligned}
    \frac{d}{dx} \left[ F'(x) \sin x - F(x) \cos x \right] 
    &= F''(x) \sin x + F(x) \sin x \\
    &= f(x) \sin x
\end{aligned}
$$

根据微积分基本定理，有

$$
\begin{aligned}
    \int_0^\pi f(x) \sin x \,dx &= \left[ F'(x) \sin x - F(x) \cos x \right]\bigg|_0^\pi \\
    & = \left[ F'(\pi) \underbrace{\sin \pi}_0 - F(\pi)\underbrace{\cos\pi}_{-1} \right] - \left[ F'(0)\underbrace{\sin 0}_{0} - F(0)\underbrace{\cos0}_{1}\right] \\
    &= F(0) + F(\pi)
\end{aligned}
$$

在上式的积分区域内，显然有 $$0<x<\pi$$，在此区间上 $$f(x)>0$$, $$\sin x>0$$，故被积函数 $$f(x)\sin x>0$$，因此上式的积分结果必定为正值。而我们先前已经论证了 $$F(0)$$ 和 $$F(\pi)$$ 都是整数，于是我们可以推断，上式的积分结果必定是一个正整数。

另一方面，在积分区域 $$0<x<\pi$$ 内，有 $$x<\pi$$, $$(a-bx)<a$$，及 $$\sin x \leq 1$$，因此

$$
f(x)\sin x \leq f(x) = \frac{x^n (a-bx)^n}{n!} < \frac{\pi^n a^n}{n!}
$$

我们可以对积分作出上限的估计：

$$
\int_0^\pi f(x) \sin x \,dx < \pi \times \frac{\pi^n a^n}{n!} = \frac{\pi^{n+1} a^n}{n!}
$$

因为 $$\pi$$ 和 $$a$$ 都是有限的，因此随着 $$n$$ 的增大，$$n!$$ 的增长速度比 $$\pi^n$$ 和 $$a^n$$ 的增长速度来得更加凶猛。我们完全可以找到充分大的 $$n$$，使得 $$\frac{\pi^{n+1} a^n}{n!}<1$$。于是我们也可以推断，积分结果是一个介于 $$0$$ 到 $$1$$ 之间的数。

由此引出矛盾，同样的积分结果不可能既是正整数，又不大于 $$1$$。因此原假设不成立，$$\pi$$ 必定是无理数。

## Reference

- Niven, Ivan (1947), "A Simple Proof That $$\pi$$ Is Irrational", Bulletin of the American Mathematical Society, Vol. 53, No. 6, p. 509, doi:10.1090/s0002-9904-1947-08821-2