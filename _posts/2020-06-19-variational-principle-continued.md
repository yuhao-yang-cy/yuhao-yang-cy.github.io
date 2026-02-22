---
layout: post
title: "续浅谈变分原理：运动常数、拉格朗日乘子法"
date: 2020-06-19 22:59:00
description: further discussions on constant of motion and Lagrangian multipliers
tags: mathematics physics calculus
categories: mathematics physics theoretical-physics
---

本篇狗尾续貂我的拙作[《浅谈变分原理》]({% post_url 2020-05-09-variational-principle %})。这篇文章成了[我的知乎专栏上最受欢迎的一篇文章](https://zhuanlan.zhihu.com/p/139018146)，大家的支持也给了我继续创作的动力。这篇文章将致力于解答评论区中提到的一些非常棒的问题。

## Euler-Lagrange 方程：回顾

若期望端点确定的泛函 $$I=\int_a^b f(y,y') \mathrm{d} x$$ 取得极值，则目标函数 $$y(x)$$ 符合 **Euler-Lagrange 方程**

$$
\frac{\partial f}{\partial y} - \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial f}{\partial y'} \right) = 0  \qquad (1)
$$

如果泛函 $$I$$ 取决于多个变量 $$y_i$$，即

$$
I = \int f(y_1, y_1'; y_2, y_2'; \cdots ; y_n , y_n') \mathrm{d}x
$$

则对于这其中的任何一个 $$y_i$$，都会有相应的 Euler-Lagrangian 方程：

$$
\frac{\partial f}{\partial y_i} - \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial f}{\partial y_i'} \right) = 0  \qquad (2)
$$


## 运动常数与守恒律

在上篇介绍变分原理的文章中，我举了3个求极值问题的例子，写下它们的 Euler-Lagrange 方程后，眼尖的读者很神奇地注意到了这么一件事情：这3个问题对应的二阶微分方程，形式上虽然一个比一个恶心，它们最终都可以降阶化成一个一阶的微分方程，从而使得我们可以顺利地解出目标函数的具体形式。

这其实并不是巧合。在这里，我们就来探讨一下这是为什么。

如果 $$f(y,y')$$ 不显含 $$x$$，那么 $$f$$ 的全微分将有

$$
\frac{\mathrm{d}f}{\mathrm{d}x} = \frac{\partial f}{\partial y} \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{\partial f}{\partial y'} \frac{\mathrm{d}y'}{\mathrm{d}x} \quad \Rightarrow \quad \frac{\mathrm{d}f}{\mathrm{d}x} = y' \frac{\partial f}{\partial y} + y'' \frac{\partial f}{\partial y'} \qquad (3)
$$

注意到在之前的例子中，化简出来的微分方程两边同乘以一个 $$y'$$ 就可以化腐朽为神奇。由此启发，现在我们来考虑这么一件事情：如果在 Euler-Lagrange 方程乘上一个 $$y'$$，可以搞出什么名堂？

$$
\begin{aligned}
y' \left[ \frac{\partial f}{\partial y} - \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial f}{\partial y'} \right) \right] & = y'\frac{\partial f}{\partial y} - y' \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial f}{\partial y'} \right) \\
& = y'\frac{\partial f}{\partial y} + y'' \frac{\partial f}{\partial y'} - y'' \frac{\partial f}{\partial y'} - y' \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial f}{\partial y'} \right) \\
& = \frac{\mathrm{d}}{\mathrm{d}x} \left( f - y'\frac{\partial f}{\partial y'} \right) \qquad (4)
\end{aligned}
$$

根据 Euler-Lagrange 方程，上式左边为零，这说明右边括号里那一坨必须是一个常数，对应的这个量

$$
J = f - y'\frac{\partial f}{\partial y'} \qquad (5)
$$

被称为**运动常数**（constant of motion），或者叫**第一积分**（first integral）。它具有性质

$$
\frac{\mathrm{d}J}{\mathrm{d}x} = 0 \qquad (6)
$$

有了它，二阶的微分方程就可以降为一个更容易解出的一阶方程。

更普遍的，如果泛函 $$I$$ 取决于多个变量 $$y$$，即

$$
I = \int f(y_1, y_1'; y_2, y_2'; \cdots ; y_n , y_n') \mathrm{d}x
$$

则相应的第一积分将变成

$$
J = f - \sum_i y_i' \frac{\partial f}{\partial y_i'} \qquad (7)
$$

写到这里，熟悉分析力学的读者可能开始意识到这个运动常数背后所蕴含的意义。一个物理体系的作用量 $$S=\int _{t_1}^{t_2}L(q_1,\dot{q_1}; q_2,\dot{q_2}; \cdots ; q_n,\dot{q_n};) \mathrm{d} t$$ 通常取决于质点们的坐标 $$q_i$$ 以及速度 $$\dot{q_i}$$，而最小作用量原理告诉我们体系的运动方程将使得 $$S$$ 有极值。用变分原理的这套数学工具：我们将时间 $$t$$ 视作 $$x$$，将质点坐标随时间的变换关系 $$q(t)$$ 视作目标函数 $$y(x)$$，将 Lagrangian $$L(q,\dot{q})$$ 视作被积函数 $$f(y,y')$$，需要取得极值的作用量 $$S$$ 则是我们的泛函 $$I$$。一通狸猫换太子操作之后，我们很容易得到**分析力学中的 Euler-Lagrange 方程**：

$$
\frac{\partial L}{\partial q_i} - \frac{\mathrm{d}}{\mathrm{d}t}\left( \frac{\partial L}{\partial \dot{q_i}} \right) = 0  \qquad (8)
$$

在分析力学中，我们可以引入广义动量

$$
p_i = \frac{\partial L}{\partial \dot{q_i}} \qquad (9)
$$

从而定义**体系的 Hamiltonian**：

$$
H = \sum_i p_i \dot{q_i} -L \qquad (10)
$$

可以证明（此处略去2000字），如果 $$L$$ 能给出正确的牛顿定律，$$L$$ 的形式大约是一个体系动能项和一个势能项的差值，由此搞出来的 Hamiltonian 会跟体系的能量有关。如果 $$L$$ 不显含时间 $$t$$，也就是 $$H$$ 不显含时间 $$t$$，可以证明 $$H$$ 将是一个守恒量，对应的是一条能量守恒率。类比之下，是不是觉得 Hamiltonian 跟上面的第一积分 $$J$$ 有那么一腿？

让我们索性把 $$H$$ 写写开，有

$$
H = \sum_i \dot{q_i} \frac{\partial L}{\partial \dot{q_i}} - L \qquad (10')
$$

这不就相当于把 $$J$$ 里边的两项的正负号翻一翻么！所以妙不妙！所谓的运动常数，其实和物理中的能量守恒有着千丝万缕的联系！

## 拉格朗日乘子法

在用变分法求解极值问题时，我们需要寻找的目标函数时常还会受到一些**约束条件**（constraint）的限制。在上篇文章中，我举了一个简化版的悬链线的例子：我们把链条耷拉在两个固定的支点上，并没有把链条的端点固定悬挂起来，也就是说所解的问题是在两个支点间长度可变的链条的形状。眼尖的读者在评论区很自然地想到，如果就是固定在两个定点间的定长链条，它的形状又该如何求解？这个问题就额外附加了一个绳长恒定的约束条件。而这类受约束的极值问题，可以很漂亮地通过引入拉格朗日乘子来解决。

先来考虑一个二维平面内的问题：如何来寻找函数 $$f(x,y)$$ 在约束条件 $$g(x,y)=0$$ 限制下的极值？

我们可以想象 $$f(x,y) = c$$ 给出了平面内的一堆**等值线**（contour lines），而 $$g(x,y)=0$$ 给出了可取的坐标 $$(x,y)$$ 描绘出的轨迹。如果我们在 $$g(x,y)=0$$ 描述的曲线上游荡，就会从一条 $$f(x,y)$$ 的等值线，游荡到另一条等值线。当 $$f(x,y)$$ 取得极值 $$M$$ 时，可以看到 $$g(x,y) = 0$$ 的曲线和 $$f(x,y) = M$$ 的曲线刚好相切。

{% include figure.liquid loading="eager" path="assets/img/contour.jpg" title="" class="img-natural rounded z-depth-1" %}

用数学点的语言，$$f(x,y)$$ 的极值点 $$M$$ 上有：

$$
\mathrm{d}f\Big|_M = \frac{\partial f}{\partial x} \mathrm{d}x + \frac{\partial f}{\partial y} \mathrm{d}y = 0 \qquad (11)
$$

但由于约束条件的限制，$$(x,y)$$ 不能从 $$g(x,y)=0$$ 这条曲线上下来，因此还需要有：

$$
\mathrm{d}g\Big|_M = \frac{\partial g}{\partial x} \mathrm{d}x + \frac{\partial g}{\partial y} \mathrm{d}y = 0 \qquad (12)
$$

在极值点处，现在我们可以把 $$\mathrm{d}\boldsymbol{r} = (\mathrm{d}x ,\mathrm{d}y) $$ 视作可以到处撒丫子乱跑的无穷小位移，但是必须让 $$(11)$$ 和 $$(12)$$ 同时成立，于是这个方程组的系数必须是线性相关的，即：

$$
\frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x}, \quad \frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y} \qquad (13)
$$

或者写作：

$$
\frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} = \lambda \left( \frac{\partial g}{\partial x} + \frac{\partial g}{\partial y} \right) \quad \Rightarrow \quad \nabla f = \lambda \cdot \nabla g\qquad (14)
$$

上式的几何意义是：如果 $$g(x,y) = 0$$ 和 $$f(x,y) = M$$ 相切，那它们各自的法向量一定互相平行（注意现在还是一个二维平面内的问题），所以一个家伙的法向量一定可以写成另一个家伙的法向量的倍数形式。

拓广到高维问题，并且如果还有多于一条的约束条件限制，那么函数 $$f(x;y_1, y_2, \cdots, y_m)$$ 取得极值 $$M$$ 时，会与所有约束条件 $$g_j(x;y_1, y_2, \cdots, y_m) = 0$$ 所描述的曲面相切。换言之，**$$f$$ 在极值点处的法向量，可以表示成一系列 $$g_j=0$$ 的法向量的线性组合**：

$$
\nabla f = \sum_j \lambda_j \nabla g_j \quad \Rightarrow \quad \nabla \left( f - \sum_j \lambda_j g_j\right) = 0 \qquad (15)
$$

这些系数 $$\lambda_i$$ 被称为**拉格朗日乘子**（Lagrangian multipliers）。由此引入辅助函数

$$
F \equiv f - \sum_j \lambda_j g_j \qquad (16)
$$

则**最开始要找的约束条件下的极值问题，就转化为了这个辅助函数的极值问题**。这个辅助函数不仅取决于原来的变量，还取决于引入的这堆拉格朗日乘子 $$\lambda_j$$。但这么做的好处在于，原来的约束条件全都自然地隐藏在了这个辅助函数里：

$$
\frac{\partial F}{\partial \lambda_j} = 0  \quad \Leftrightarrow \quad g_j = 0 \qquad (17)
$$

我们接着就可以利用之前变分大法已经得到的结果，来对付这个 $$F$$。当它取得极值时，必然有：

$$
\frac{\partial F}{\partial y_i} - \frac{\mathrm{d}}{\mathrm{d}x}\left( \frac{\partial F}{\partial y_i'} \right) = 0  \qquad (18)
$$

## 举例：悬链线

我们重新回到悬链线（catenary）的问题。这次我们不再投机取巧，而是让链条的两端牢牢地被固定在等高的两点 $$(\pm L, H)$$ 之间。

{% include figure.liquid loading="eager" path="assets/img/catenary-setup.jpg" title="" class="img-natural rounded z-depth-1" %}

平衡状态下，体系依然有势能最小，所以我们要寻找以下函数的极小值：

$$
V = \int_{-L}^{L} \rho gy \sqrt{1+y'^2} \mathrm{dx} \qquad (19)
$$

它需要满足的约束条件是绳长固定：

$$
s = \int_{-L}^L \sqrt{1+y'^2} \mathrm{d}x = \text{const} \qquad (20)
$$

引入拉格朗日乘子的辅助函数可以取作

$$
F(y,y',\lambda) = \int_{-L}^L (y-\lambda) \sqrt{1+y'^2} \mathrm{d}x \qquad (21)
$$

利用我们本篇第一部分提到的运动常数的结论，将上面的被积函数 $$(y-\lambda) \sqrt{1+y'^2}$$ 当作 $$f$$，可以试着计算

$$
\begin{aligned}
J & = f - y'\frac{\partial f}{\partial y'}  \\
& = (y-\lambda) \sqrt{1+y'^2} - y' \cdot \frac{(y-\lambda) y'}{\sqrt{1+y'^2}} \\
& = \frac{y - \lambda}{\sqrt{1+y'^2}} \qquad\qquad (22)
\end{aligned}  
$$

利用 $$(6)$$ 式 $$\frac{\mathrm{d}J}{\mathrm{d}x} = 0 $$，马上得到：

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{y - \lambda}{\sqrt{1+y'^2}} \right) = 0 \qquad (23)
$$

当然，头铁的读者也可以尝试将 $$(21)$$ 代入到 Euler-Lagrange 方程中进行一通计算（可参考上篇文章的计算过程，非常类似），也可以化简成完全相同的形式。解出这个微分方程，可以证明曲线的形状会满足方程：

$$
y(x) = c\cosh\frac{x}{c} + \lambda \qquad (24)
$$

其中参数 $$c$$ 和 $$\lambda$$ 的选取要匹配边界条件 $$y(L)=H$$ 以及绳子的长度 $$(20)$$ 式。我们看到，悬链线依然符合**双曲函数**的形状。
