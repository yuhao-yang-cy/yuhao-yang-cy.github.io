---
layout: post
title: "分析力学读书笔记：限制性三体问题及拉格朗日点"
date: 2021-05-24 21:16:00
description: 简化版的限制性三体问题的6000字长文笔记
tags: mathematics physics mechanics gravity
categories: mathematics physics theoretical-physics
---

> 题记：随手翻翻理论力学的书，重新把限制性三体问题整清楚了，就想自己写一写。原本想着可能也就是写一个比 note 长一丢丢的文章，没想到写着写着变成了6000多字的一篇小论文。就这么着吧，自己开心就是最好的！

## 1、什么是三体问题

学习牛顿引力理论时，大家对**二体问题**（two-body problem）应该不会陌生：两个星体在对方的引力作用下，会做怎样的运动？这个问题的解答对我们理解行星绕太阳的运动、卫星绕地球的运动、或是宇宙中非常常见的双星系统，有着重要的意义。

早在17世纪，所谓的二体问题就由牛顿本尊做出了解答。在经典引力作用下，可被视作质点的两个星体，将绕着体系的质心画出封闭的椭圆形轨道（这里没有考虑非束缚态的情况）。二体问题的求解，只消利用近现代的数学工具，对于现在的高年级的理工科学生来说，已经不是什么难题。求解过程也早就写进了绝大多数经典力学的教科书。

很自然的，二体问题稍作推广便是**三体问题（three-body problem）：如果三个质点受到互相产生的引力影响，它们会描绘出怎样的运动轨迹？** 事实证明，严格可解的二体问题，一旦引入了第三个质点，马上变得无比复杂。一般的三体问题不存在简单的封闭轨道，并且没法用基本的代数表达式或是积分形式表示出解析解。三体问题的求解普遍需要借助计算机数值模拟。另一方面，科学家们发现这个系统的行为非常敏感地取决于初始条件，换言之，三体系统是一个混沌系统，尽管决定状态演变的方程是完全确定的，但是我们无从对这个系统可能呈现出的各种无规则的奇特行为做出准确的预测。

历史上，热爱科学的瑞典国王在1887年发起了一项科学挑战：征求太阳系体系内行星轨道的是否稳定的答案。这个问题吸引了法国大数学家**亨利·最后一个数学全才正是在下·庞加莱**（Henry Poincare）的注意。不过庞加莱并没有着手解决大太阳加上一堆行星的极度复杂的多体问题，而是着手解决看起来更为实际的三体问题。在研究过程中，他甚至开创了代数拓扑（algebraic topology）的新数学工具，并发现了一般的三体系统中会产生混沌现象。庞加莱的论文尽管没有给出原始挑战问题的答案，但是他的突破性成果还是为他赢得了当年的奖金。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/poincare.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    年轻时帅气英发的庞加莱
</div>

强如庞加莱以及他同时代的数学家们都没有完全解决三体问题，可见问题的复杂性。但是好消息是，对于一些具有特殊性质的三体系统，作合理的近似和简化，就可以让问题变得可解。**简化版的限制性三体问题的解依然可以给我们带来深刻的见解：它不但可以帮助我们理解太阳系中的一些可以观察到的现象，也可以给制定人造卫星的轨道提供思路。**

我将在这篇文章接下来的部分引入这个限制性三体问题，并对其作一个相对完整的解答和讨论。

## 2、限制性三体问题

对于一般性的三体引力问题，设三个质点的质量分别为 $$M_1$$，$$M_2$$ 和 $$M_3$$。除了假定它们之间互相作用的引力符合经典的平方反比律之外，*在限制性三体问题中，我们继续作如下假定：*

1. *前两个星体的质量远大于第三个星体：$$M_1, M_2 \geq m$$ （这里我们已经把第三个星体的质量直接记作了 $$m$$）。因此第三个小星体朋友对大质量星体的运动影响可以忽略不计，我们可以先从两个大质量星体的二体问题入手。*
2. *进一步考略两个大质点星体的运动轨道时，我们只考虑最简单的情形：它们互相绕着共同的质心作匀速圆周运动。*
3. *考虑小质量星体的运动时，我们假定它与两个大质量星体处于同一平面内。这样我们就这需要对付一个二维问题，而不是更复杂的三维问题。*
4. *最后，我们只考虑小质量星体也以同样的角速度与大质量双星一起转动的情形。也就是说，放到转动参照系里，这三颗星体都会处于静止状态。*

只关注 $$M_1$$ 和 $$M_2$$ 互相绕行的运动，我们可以列出如下的运动方程：

$$
\begin{aligned}M_1 \ddot{\mathbf{R}}_1 &= -\frac{GM_1M_2}{|\mathbf{R}_1 - \mathbf{R}_2|^3} (\mathbf{R}_1 - \mathbf{R}_2) & (1a) \\ M_2 \ddot{\mathbf{R}}_2 &= -\frac{GM_1M_2}{|\mathbf{R}_1 - \mathbf{R}_2|^3} (\mathbf{R}_2 - \mathbf{R}_1) & (1b)\\\end{aligned}
$$

其中 $$\mathbf{R}_1$$ 和 $$\mathbf{R}_2$$ 可以是相对于任何地方的一个惯性参考者的位移矢量。将 $$(1a)$$ 和 $$(1b)$$ 相加，得到

$$
M_1 \ddot{\mathbf{R}}_1 + M_2 \ddot{\mathbf{R}}_2 = 0
$$

记 $$M_1$$ 和 $$M_2$$ 的质心坐标为 $$\mathbf{R}_{cm} = \frac{M_1\mathbf{R}_1 + M_2 \mathbf{R}_2}{M_1+M_2}$$，则有

$$
\ddot{\mathbf{R}}_{cm} = 0 \qquad {(2)}
$$

*这说明 $$M_1$$ 和 $$M_2$$ 组成的体系的质心在空间中作匀速直线运动*，由于体系不受外力作用，这个结论其实是很显而易见的。我们完全可以取随质心以相同速度运动的惯性参考系，这样就只用考虑 $$M_1$$ 和 $$M_2$$ 之间的相对运动了。

接下来我们重新定义 $$\mathbf{R}_1$$ 和 $$\mathbf{R}_2$$ 是两个天体相对于质心的位移，并且记它们的相对位移矢量 $$\mathbf{d} = \mathbf{R}_1 - \mathbf{R}_2$$，运动方程可以被写成

$$
\begin{aligned}\ddot{\mathbf{R}}_1 &= -\frac{GM_1\mathbf{d}}{|\mathbf{d}|^3} & (3a) \\ \ddot{\mathbf{R}}_2 &= \frac{GM_2\mathbf{d}}{|\mathbf{d}|^3} & (3b)\\\end{aligned}
$$

两式相减得到

$$
\ddot{\mathbf{d}} =\ddot{\mathbf{R}}_1 - \ddot{\mathbf{R}}_2 = -\frac{G(M_1+M_2)\mathbf{d}}{|\mathbf{d}|^3} \qquad (4)
$$

这便是经典的引力二体问题，一般情况下可以证明 $$M_1$$ 和 $$M_2$$ 会在椭圆轨道上运动。严格的求解过程可以参考我在知乎上写过的一篇文章，这里不再详细展开。



我们在此只想关注正圆轨道的运动，即 $$|\mathbf{d}|$$ 大小恒定的特别情形。利用向心加速度的公式：$$\ddot{\mathbf{d}} = - \omega^2 \mathbf{d}$$，可以得到角速度 $$\omega$$ 的大小满足：

$$
\omega^2 = \frac{G(M_1+M_2)}{d^3} \qquad (5)
$$

注意到 $$d=R_1+R_2$$ 以及质心参考系中 $$M_1 R_1 = M_2 R_2$$，我们很容易计算得到 $$M_1$$ 和 $$M_2$$ 的圆周轨道半径分别为

$$
\begin{aligned}
R_1 &= \frac{M_2R}{M_1+M_2} = \frac{\mu R}{M_1} \\
R_2 &= \frac{M_1R}{M_1+M_2} = \frac{\mu R}{M_2}
\end{aligned} \qquad (6)
$$

其中我们引入了约化质量 $$\mu = \frac{M_1M_2}{M_1 + M_2}$$。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/two-body-problem.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    两个大质量星体各自绕共同质心作匀速圆周运动
</div>

其实，要得到 $$(5)$$ 和 $$(6)$$ 的结果，只需要高中层面的物理知识就足够办到了。两者相互之间的引力提供了所需要的向心力，于是有

$$
\begin{aligned}\frac{GM_1M_2}{d^2} = M_1\omega^2R_1 \\\frac{GM_1M_2}{d^2} = M_2\omega^2R_2\end{aligned}
$$

以上与 $$d=R_1+R_2$$ 联立，经过基本的代数运算，不难验证上面给出的关系。

为了讨论方便，*我们接下来把视角切换到以质心作为原点、以恒定角速度 $$\omega$$ 旋转的转动参考系中。* 转动参照系内第三个小星体 $$m$$ 的坐标 $$(x',y', z')$$，与原来的惯性参考系下的坐标 $$(x,y,z)$$ 之间，存在如下的变换关系：

$$
\left\{\begin{array}{ccl}
x' &=& \rho\cos(\theta - \omega t) \\
y' &=& \rho\sin(\theta - \omega t) \\
z' &=& z
\end{array}\right.
$$

展开后即可得到具体的转换公式：

$$
\left\{\begin{array}{ccl}
x' &=& x\cos\omega t + y\sin\omega t \\
y' &=& - x \sin\omega t + y\cos\omega t \\
z' &=& z
\end{array}\right. \qquad(7)
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ref-frame-rot.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    质心惯性系切换到转动参照系的坐标变换
</div>

为了在转动坐标系下写出小星体的 Lagrangian，我们来试着找 $$\dot{\mathbf{r}}^2$$ 下转动坐标系下的表示形式。

通过不复杂的代数运算，可以得到逆坐标变换：

$$
\left\{\begin{array}{ccl}
x &=& x'\cos\omega t - y' \sin\omega t \\
y &=& x'\sin\omega t + y' \cos\omega t \\
z &=& z'
\end{array}\right. \qquad(7')
$$

接着强行一通操作

$$
\begin{align}
\dot{\mathbf{r}}^2 &= \dot{x}^2 + \dot{y}^2 + \dot{z}^2 \\
&= \left[ \frac{\mathrm{d}}{\mathrm{d}t}\left( x'\cos\omega t - y' \sin\omega t \right)\right]^2 + \left[\frac{\mathrm{d}}{\mathrm{d}t}\left( x'\sin\omega t + y' \cos\omega t \right)\right]^2 + \dot{z}'^2 \\
& = (\dot{x}' \cos\omega t - \dot{y}'\sin\omega t - \omega x' \sin\omega t - \omega y'\cos\omega t)^2 \\
& \qquad +(\dot{x}' \sin\omega t + \dot{y}'\cos\omega t + \omega x' \cos\omega t - \omega y'\sin\omega t)^2 + \dot{z}'^2 \\
&= \dot{x}'^2 + \dot{y}'^2 + \omega^2(x'^2 + y'^2) - 2\omega \dot{x}'y' + 2\omega x' \dot{y}' + \dot{z}'^2\\
&= (\dot{x}' - \omega\dot{y}')^2 + (\dot{y}' + \omega\dot{x}')^2 + \dot{z}'^2
\end{align}
$$

由于我们*假定 $$m$$ 与 $$M_1$$ 和 $$M_2$$ 进行圆周运动的轨道位于同一平面*，$$z'$$ 坐标就变得没有什么存在感了，可以直接丢掉。小星体 $$m$$ 的 Lagrangian 现在可以写成：

$$
L = \frac{1}{2}m\left[ (\dot{x}' - \omega\dot{y}')^2 + (\dot{y}' + \omega\dot{x}')^2 \right] - V \qquad(8)
$$

其中势能项

$$
\begin{aligned}
V &= - \frac{GM_1m}{r_1'} - \frac{GM_2 m}{r_2'} \\
&= -\frac{GM_1m}{\sqrt{\left( x'+\frac{\mu d}{M_1}\right)^2+y'^2}} -\frac{GM_2m}{\sqrt{\left( x'-\frac{\mu d}{M_2}\right)^2+y'^2}}
\end{aligned} \qquad(9)
$$

我们接下来都将用转动坐标系中的 $$(x', y', z')$$ 来表示 $$m$$ 的位置变化，为了码字方便，在后面的讨论中，我们就不再特别书写一撇的上标，后面就默认 $$(x,y,z)$$ 是转动坐标系下的坐标。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/three-body-problem.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    在转动参照系中求解小天体的运动
</div>

无脑计算出 Lagrangian 的偏导数们：

$$
\begin{aligned}
\frac{\partial L}{\partial \dot{x}} &= m(\dot{x}-\omega y) \\
\frac{\partial L}{\partial \dot{y}} &= m(\dot{y}-\omega x) \\
\frac{\partial L}{\partial x} &= \omega m (\dot{y} + \omega x) - \frac{\partial V}{\partial x}\\
\frac{\partial L}{\partial y} &= -\omega m (\dot{x} - \omega y) - \frac{\partial V}{\partial y}
\end{aligned}
$$

套进 Euler-Lagrange 方程接着可以马上得到两条运动方程：

$$
\begin{aligned}
m(\ddot{x} - \omega \dot{y}) &= \omega m (\dot{y} + \omega x) - \frac{\partial V}{\partial x} \\
m(\ddot{y} + \omega \dot{x}) &= -\omega m (\dot{x} - \omega y) - \frac{\partial V}{\partial y}
\end{aligned}
$$

化简后变成

$$
\begin{aligned}
m\ddot{x}  &= 2 m \omega \dot{y} + m\omega^2 x - \frac{\partial V}{\partial x} \\
m\ddot{y}  &= -2 m \omega \dot{x} + m\omega^2 y - \frac{\partial V}{\partial y}
\end{aligned} \qquad(10)
$$

由于我想着接下来要讨论拉格朗日点，所以就想让拉格朗日的存在感再强一点，这里就用拉格朗日分析力学来建立运动方程了。其实，不用分析力学的路数也一样可以得到这组方程。熟悉转动坐标系下牛顿方程的读者应该可以认出，上式中除了 $$-\frac{\partial V}{\partial x}$$ 和 $$-\frac{\partial V}{\partial y}$$ 是真实的作用力，其他几项均为赝力（pseudo force）。其中 $$2m\omega\dot{y}$$ 和 $$-2m\omega \dot{x}$$ 是**科里奥利力**（Coriolis force）的两个分量，$$m\omega^2x$$ 和 $$m\omega^2y$$ 是转动系下的**离心力**（centrifugal force）。

这组方程依然很难解，$$x$$ 和 $$y$$ 的密切地交织在一起，而且考虑到 $$V$$ 那还没求偏导前就已经令人如痴如醉形式：

$$
V = -\frac{GM_1m}{\sqrt{\left( x+\frac{\mu d}{M_1}\right)^2+y^2}} -\frac{GM_2m}{\sqrt{\left( x-\frac{\mu d}{M_2}\right)^2+y^2}} \qquad(9)
$$

我们继续在没出息的道路上走得再没出息一点：*只是关注下小质点 $$m$$ 相对于其余两个大质量天体静止的情况，即这三体一起以共同的角速度作匀速转动。* 更一般的情况留给庞加莱那样的大佬去操心好了。问题简化后，在我们现在的转动参照系里，便有 $$\dot{x}=\dot{y}=0$$。两条运动方程于是可以化简成：

$$
\begin{aligned}
m\omega^2 x &= \frac{\partial V}{\partial x} = \frac{GM_1m\left(x+\frac{\mu d}{M_1}\right)}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} + \frac{GM_2m\left(x-\frac{\mu d}{M_2}\right)}{\left[ \left( x-\frac{\mu d}{M_2} \right)^2 + y^2\right]^\frac{3}{2}} & \quad(11a)\\
m\omega^2 y &= \frac{\partial V}{\partial y} = \frac{GM_1my}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} + \frac{GM_2my}{\left[ \left( x-\frac{\mu d}{M_2} \right)^2 + y^2 \right]^\frac{3}{2}} & \quad(11b)
\end{aligned}
$$

要对这组方程下手，比较明智的突破口显然是 $$(11b)$$。一个显而易见的解是 $$y=0$$，即小星体位于两个大哥的连线或延长线上。如此一来，$$(11a)$$ 就退化成一个只关于 $$x$$ 的方程：

$$
\omega^2 x = \frac{GM_1\left(x+\frac{\mu d}{M_1}\right)}{ \left| x+\frac{\mu d}{M_1} \right|^3} + \frac{GM_2\left(x-\frac{\mu d}{M_2}\right)}{\left| x-\frac{\mu d}{M_2} \right|^3} \qquad (12)
$$

这鬼方程实际上是一个分段的五次多项式方程，是没有解析解的。一般看到这种高次方程，数值计算就完事儿了。我们可以试着把方程两边的函数都画出来，从图像上很容易看到，$$x$$ 将存在三个可能的解，分别位于

$$
x < - \frac{\mu d}{M_1}, \quad - \frac{\mu d}{M_1} < x <  \frac{\mu d}{M_2}, \quad x >  \frac{\mu d}{M_2} \qquad (13)
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/three-body-problem-solutions.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    通过图像可以判定限制性三体问题的三个特解
</div>


对应于小星体位于两个大哥的外侧，或者夹在它们的中间。在 $$M_1$$ 和 $$M_2$$ 质量相差很大时，可以找到形式比较简单的近似解。1767年，**莱昂哈德·数学哪儿都有我·欧拉**（Leonhard Euler）最早计算出了这三个特解。

对于 $$y\neq0$$ 的情况，从 $$(11b)$$ 我们会得到

$$
\omega^2 =  \frac{GM_1}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} + \frac{GM_2}{\left[ \left( x-\frac{\mu d}{M_2} \right)^2 + y^2 \right]^\frac{3}{2}} \qquad (14)
$$

将 $$(14)$$ 改写成 $$\frac{GM_2}{[\cdots]} = \omega^2 - \frac{GM_1}{[\cdots]}$$ 的形式后，塞进 $$(11a)$$ 中

$$
\omega^2 x = \frac{GM_1\left(x+\frac{\mu d}{M_1}\right)}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} + \omega^2 \left(x-\frac{\mu d}{M_2}\right) - \frac{GM_1\left(x-\frac{\mu d}{M_2}\right)}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} \\
\omega ^2 \frac{\mu d}{M_2} = \frac{GM_1\mu d}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}}\left( \frac{1}{M_1} +\frac{1}{M_2}\right)
$$

之后可以化简得到：

$$
\omega^2 = \frac{G(M_1+M_2)}{\left[ \left( x+\frac{\mu d}{M_1} \right)^2 + y^2\right]^\frac{3}{2}} = \frac{G(M_1+M_2)}{r_1^3} \qquad (15a)
$$

再将 $$(14)$$ 改写成 $$\frac{GM_1}{[\cdots]} = \omega^2 - \frac{GM_2}{[\cdots]}$$ 的形式塞进 $$(11a)$$，可以得到

$$
\omega^2 = \frac{G(M_1+M_2)}{\left[ \left( x-\frac{\mu d}{M_2} \right)^2 + y^2\right]^\frac{3}{2}} = \frac{G(M_1+M_2)}{r_2^3} \qquad (15b)
$$

结合早先的 $$(5)$$，$$\omega^2 = G(M_1+M_2)/d^3$$，$$(15)$$ 能成立必然需要：

$$
r_1 = r_2 = d \qquad (16)
$$

这说明这三个星体会恰好构成一个等边三角形！在我们关心的平面内可以找到两个这样的点。这两个特解最早由**约瑟夫·老子搞力学分析连图都用不着·拉格朗日**（Joseph Lagrange）于1772年得出。

于是，**对于限制性三体问题，我们一共找到了五个解。在五个特别的位置上，小星体可以以相同的角速度随着两个大哥一起匀速绕行，这五个点被称作拉格朗日点（Lagrangian points）。** 前三个 $$y=0$$ 的解依次被记为 $$L_1$$，$$L_2$$ 和 $$L_3$$；另两个 $$y\neq0$$ 的解被记为 $$L_4$$ 和 $$L_5$$。在下面的示意图中，某个三体系统的五个拉格朗日点都被一一标出。我们接下来就对这五个拉格朗日点做一些讨论。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lagrangian-points.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    限制性三体体系中的五个拉格朗日点
</div>

## 3、拉格朗日点的讨论

### $$L_1$$

我们先来看位于两个大星体连线中间的 $$L_1$$。

以太阳和大行星的二体系统为例，设 $$M_1$$ 是太阳，$$M_2$$ 是大行星，并且大行星绕太阳作圆周轨道运动。大家都知道，行星的轨道半径越大，绕行的周期就会越长，比例关系可以由开普勒第三定律精确描述。若不考虑大行星的影响，由于 $$L_1$$ 位于更靠近太阳的位置，在 $$L_1$$ 处的小天体会作周期更快的圆周运动。但是有大行星在外侧的引力拉扯，一部分太阳的引力作用被抵消，导致小天体的周期变得略长。在 $$L_1$$ 处，恰好使得小天体的轨道周期等于大行星的轨道周期，于是小天体与太阳和大行星处于相对静止的状态。

在日地系统中，$$L_1$$ 点就常被用来放置太阳观测卫星，例如 NASA（美国国家航空航天局，National Aeronautics and Space Administration）于1997年发射的执行**太阳和空间探索任务的先进成分探测器（Advanced Composition Explorer，ACE），就在 $$L_1$$ 轨道上运行，它肩负探测太阳风、行星际物质等的任务。** NASA 和 ESA（欧洲空间局，European Space Agency）联合发射的另一个探测器——**太阳和日光层探测器（Solar and Heliospheric Observatory，SOHO），同样在 $$L_1$$ 轨道处运行。自1995年发射以来，除了监测太阳活动、太空天气，SOHO 还发现了超过3,000 颗彗星，功勋卓著。**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ace.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    位于日地系统 L1 点上的 ACE 探测器（概念示意图）
</div>


### $$L_2$$ 和 $$L_3$$

$$L_2$$ 和 $$L_3$$ 位于两个大星体连线的延长线上，在两个大星体的同侧。

我们依然以太阳和大行星的二体系统来举例。$$L_2$$ 位于大行星轨道外侧，所以按照开普勒第三定律，$$L_2$$ 点处的小天体应当以更长的周期运行。但是现在大行星位于太阳同侧，来自大行星的引力拉扯可以补偿轨道离太阳更远的影响。类似的道理，或者基于对称性的考虑，也可以理解为什么 $$L_3$$ 处也是一个平衡点了。

日地系统的 $$L_2$$ 点也被诸如 NASA 和 ESA 放置空间天文台。**宇宙学领域无人不知的探测微波背景辐射（cosmic microwave background, CMB）的两颗探测器，WMAP 和 PLANCK 就被放置在日地系统的 $$L_2$$ 轨道。** 即将于2021年发射升空的詹姆斯·韦伯空间望远镜（James Webb Space Telescope, JWST）——哈勃太空望远镜的接任者——也将被送入日地系统的 $$L_2$$ 轨道。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wmap.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    在日地系统的 L2 点处运行的 WMAP 卫星（概念示意图）
</div>

地月系统中的 $$L_2$$ 点，也被我们中国的探月工程开发利用。2018年随嫦娥四号发射的登月探测器——玉兔二号——成功在月球背面着陆。这是全世界范围内成功在月球背面实现成功软着陆的首例。**玉兔二号在月背与地球的中继通信，就是靠着同年发射的鹊桥号——一颗位于地月系统 $$L_2$$ 轨道处的中继卫星——来实现的。**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/change.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    玉兔二号在月背通过日月系统 L2 点附近的鹊桥号中继卫星跟地球保持通信
</div>


日地系统中的 $$L_3$$ 位于太阳另一侧，据我所知目前人类还没有把卫星或者什么探测器放到离地球那么远的 $$L_3$$ 上做什么，不过有一些小说基于 $$L_3$$ 点存在一个反地球来虚构科幻故事。

可以证明，**$$L_1$$，$$L_2$$ 和 $$L_3$$ 的轨道总是不稳定的**。事实上，以上提到的 $$L_1$$ 和 $$L_2$$ 处的轨道，其实都是靠近拉格朗日点的三维轨道，包括有周期性的**晕轮轨道**（Halo orbit），还有非周期性的**利萨如轨道**（Lissajous orbit）。由于这些轨道都倾向于不稳定状态，稍有偏移就会随时间愈演愈烈，因此都需要卫星自身的动力推进系统来将自己固定在轨道上。上面嫦娥四号任务的示意图中，可以看到鹊桥号中继卫星其实是运行在 $$L_2$$ 附近的晕轮轨道上的。在下面可以看到上文中提到的几颗探测器的利萨如轨道示意图。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/james-webber.gif" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    詹姆斯·韦伯空间望远镜将会在发射后进入日月系统 L2 点附近的莉萨如轨道运行
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wmap-orbit.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    WMAP 自地球发射后进入日月系统 L2 点附近的莉萨如轨道
</div>


### $$L_4$$ 和 $$L_5$$

无疑 $$L_4$$ 和 $$L_5$$ 是五个拉格朗日点中尤为特别的两个。这两个位置可以让小星体 $$m$$ 作稳定运动的原因在于，它与两大星体等距离，因此受到来自于两个大天体的引力就等于它们的质量比，不难证明这两者引力的合力恰好指向体系的质心，而合力的大小又恰好可以提供小天体公转需要的向心力，非常美妙。

$$L_4$$ 和 $$L_5$$ 稳定性的分析比起前三个特解要更为复杂。但可以证明：当 $$M_1$$ 和 $$M_2$$ 的质量相差在大约25倍以内时， $$L_4$$ 和 $$L_5$$ 也是不稳定的；但是如果 $$M_1$$ 和 $$M_2$$ 质量相差悬殊，$$L_4$$ 和 $$L_5$$ 上的小星体过着两个大哥罩着的小日子会非常开心。当然，实际的天体系统，比如太阳系中，来自其他大行星的影响会让情况更为复杂。

在太阳系中，太阳和木星的质量差近1000倍，远在25倍以上，日木系统的 $$L_4$$ 和 $$L_5$$ 就成为了天然的稳定平衡点，成为了一大堆小行星的快乐家园。据统计，**日木系统中有几千枚这样的小行星，分别聚团在 $$L_4$$ 和 $$L_5$$ 处，一波运行在木星前方，一波运行在木星后方，它们被称为特洛伊小行星（trojan）**，如同木星手下的一帮贴身护卫，步调一致，不会随便走散。此外，太阳与其他行星形成的系统中，也陆续发现有很多特洛伊小行星。**火星、土星、海王星的身边，都存在数量不等的特洛伊小行星们。**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trojans.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    太阳-木星系统的 L4 和 L5 点附近俘获了大量的特洛伊小行星
</div>


而我们的地月系统中，地球的质量大约是月球的80倍，勉强过了25倍的标准，因此地月系统的 $$L_4$$ 和 $$L_5$$ 点也会是稳定的平衡点。事实上，波兰天文学家 Kazimierz Kordylewski 于1961年就报告称在相应位置观测到了两片星际尘埃的聚集现象，但由于观测难度极大，因此这项结果一直饱受争议。直到2018年，来自匈牙利的一个团队基于偏振光的观测技术，证实了**地月系统的 $$L_4$$ 和 $$L_5$$ 点处确实存在大量的微粒。**

在解释月球起源的各种假说中，颇具认可度的**大碰撞假说（giant impact hypothesis）就认为，在太阳系形成初期，地球曾于一颗火星大小相当的天体发生了猛烈撞击，被撞出的碎片后来形成了地球的天然卫星——月球。** 这颗撞击地球的假想天体被称为忒亚（Theia）。**科学家们认为，忒亚在撞击地球前，运行在日地系统的 $$L_4$$ 或 $$L_5$$ 点处，但来自木星或是其他天体的扰动改变了它的轨道，导致它与年轻的地球相撞。**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/giant-impact.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    艺术家绘制的假想中忒亚和地球的大碰撞
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/origin-of-moon.gif" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    忒亚与地球相撞形成月球的过程的动画演示
</div>


## 参考资料和素材来源说明

1. 文章除第二部分，其余部分的图片均来自 Wikipedia 的相关条目
2. 本文关于科学史的内容，主要参考了 Wikipedia 的相关条目
3. 本文第二部分的数学推导，很大程度参考了 [David Tong](https://www.damtp.cam.ac.uk/user/tong/index.html) 编写的剑桥大学理论物理讲义系列中的 [Classical Dynamics](https://www.damtp.cam.ac.uk/user/tong/dynamics.html)，§2.5.5
4. 封面题图盗自 Mateusz Ambrozewicz 为刘慈欣的科幻小说《三体》绘制的插画