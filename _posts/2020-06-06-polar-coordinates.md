---
layout: post
title: "极坐标下的牛顿定律"
date: 2020-06-06 12:09:00
description: 从引力的平方反比律来推导行星椭圆轨道的预备工作
tags: mathematics physics mechanics a-level
categories: mathematics physics a-level theoretical-physics
---

Issac Newton 最伟大的成就之一莫过于从第一性原理推导出了 Johannes Kepler 发现的三大行星运动定律。Newton 证明了，只要恒星和行星之间的引力符合平方反比率，就会有

1. 行星会在椭圆轨道上绕恒星运动
2. 连接行星与恒星的线段在单位时间内扫过的面积为定值
3. 行星轨道的周期的平方正比于椭圆长轴的三次方。

让我们跟随 Newton 的步伐，从平方反比率试着去推导出行星轨道是椭圆的结论[^1]。

我将文章分成了上下两部分。在第一部分中，我们将介绍极坐标的预备知识，并给出牛顿定律在极坐标下的方程形式。在[第二部分]({{site.baseurl}}/blog/2020/keplers-laws/)，我们将着手处理行星轨道的求解。本文的假想受众是高中数学、物理水平的同学，我会尽量以不是那么高级的数学工具来试图把要解决的问题阐述清楚。

## 极坐标的引入

二维平面上的任意一点，可以由两个坐标参数来完全确定。高中阶段大家已经非常熟悉的平面直角坐标系（Cartesian coordinates），就是用一个横坐标 $$x$$ 和一个纵坐标 $$y$$ 来确定某个点的具体位置。然而，$$(x,y)$$ 的坐标给出的信息完全可以用另外两个参数来表示。在极坐标（polar coordinates）下，我们可以用某点到原点连线的距离 $$r$$，以及这条连线和某个特定方向的夹角 $$\theta$$ 来完全确定该点的位置。习惯上，我们会选定 $$x$$ 轴所在方向为 $$\theta=0$$（也可以放过来说是将 $$\theta=0$$ 的方向视作是 $$x$$ 轴的方向），于是直角坐标系和极坐标系会具有如下的坐标变换：

$$
\begin{aligned}
(x,y) \longrightarrow (r,\theta) &= \left(\sqrt{x^2+y^2}, \, \tan^{-1}\frac{y}{x}\right) \\
(r,\theta) \longrightarrow (x,y) &= (r\cos\theta, \, r\sin\theta)
\end{aligned} \qquad (1)
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polar_1.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    平面直角坐标系与极坐标系
</div>

由于引力取决于两个星体之间的距离 $$r$$，直角坐标系中具体写出来的 $$r=\sqrt{x^2+y^2}$$ 会把 $$x$$、$$y$$ 坐标搅在一起，分离变量再分别求解的套路将变得非常困难。相比较而言，选择极坐标会便是更好的切入点。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polar_2.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    更适合用来描述行星轨道的极坐标系
</div>

根据牛顿第二定律，运动方程总是可以写作

$$
\boldsymbol{F}(\boldsymbol{r}) = m\ddot{\boldsymbol{r}} \qquad (2)
$$

我们现假定作用力 $$\boldsymbol{F}(\boldsymbol{r})$$ 仅取决于到原点的距离，如果我们用 $$\boldsymbol{e}_r$$ 来表示沿 $$\boldsymbol{r}$$ 方向的单位矢量（unit vector），则作用力可以写作：$$\boldsymbol{F}(\boldsymbol{r}) = F(r)\boldsymbol{e}_r$$。比如在原点处固定一个质量源 $$M$$[^2]，那在其引力场下运动的物体受到的力就只跟 $$r$$ 有关，具体方程可以写出来：

$$
-\frac{GMm}{r^2} \boldsymbol{e}_r = m \ddot{\boldsymbol{r}} \qquad (3)
$$

注意上式中的负号，它源于引力的吸引作用。要解出行星轨道，我们就是要来求解形如 $$(3)$$ 式的微分方程。这里有点小麻烦的地方在于我们目前还不知道加速度 $$\ddot{\boldsymbol{r}}$$ 在极坐标下会具有怎样的形式，这也就是我们在这篇文章中重点要攻克的问题。

## 极坐标下单位向量的变化率

我们已经将加速度 $$\ddot{\boldsymbol{r}}$$ 写成了位置矢量 $$\boldsymbol{r}$$ 的二阶导数形式。在直角坐标系中，$$\boldsymbol{r} = x \hat{\boldsymbol{i}} + y \hat{\boldsymbol{j}} $$，其中 $$\hat{\boldsymbol{i}}$$、$$\hat{\boldsymbol{j}}$$ 代表对应方向上的单位矢量。注意到 $$\hat{\boldsymbol{i}}$$、$$\hat{\boldsymbol{j}}$$ 都是常量，不论我们考察的点在什么位置，$$\hat{\boldsymbol{i}}$$、$$\hat{\boldsymbol{j}}$$ 都不会有变化，因此直角坐标系下求 $$\boldsymbol{r}$$ 的导数非常容易：

$$
\begin{aligned}
\dot{\boldsymbol{r}} = \dot{x} \hat{\boldsymbol{i}} + \dot{y} \hat{\boldsymbol{j}} \quad \Rightarrow \quad \boldsymbol{v} = v_x \hat{\boldsymbol{i}} + v_y \hat{\boldsymbol{j}}\\
\ddot{\boldsymbol{r}} = \ddot{x} \hat{\boldsymbol{i}} + \ddot{y} \hat{\boldsymbol{j}} \quad \Rightarrow \quad \boldsymbol{a} = a_x \hat{\boldsymbol{i}} + a_y \hat{\boldsymbol{j}}
\end{aligned} \qquad (4)
$$

上面我把求导的结果重新写成了大家熟悉的形式。这个结果告诉我们，$$x$$ 方向上的速度仅取决于 $$x$$ 方向上位移的变化率，$$x$$ 方向上的加速度仅取决于 $$x$$ 方向上速度的变化率，$$y$$ 方向上的速度、加速度也有类似的结果。这说明 $$x$$ 方向上的运动跟 $$y$$ 方向的运动完全可以分开讨论，这正是我们在分析诸如抛体运动时非常熟悉的操作。

那么在极坐标下，会不会还有这么简洁的结论呢？极坐标下的位置向量可以写成 $$\boldsymbol{r} = r\boldsymbol{e}_r$$，我们试着对它求导：

$$
\dot{\boldsymbol{r}} = \frac{\mathrm{d}}{\mathrm{d}t}(r\boldsymbol{e}_r) = \dot{r} \boldsymbol{e}_r + r \dot{\boldsymbol{e}_r} \qquad (5)
$$

用了下链式求导法则（chain rule），结果看起来好像也还行？但是，等等，$$\dot{\boldsymbol{e}_r}$$ 是什么东西？当位置矢量 $$\boldsymbol{r}$$ 发生改变时，它所在的方向也会发生改变，因此我们先前定义的单位向量 $$\boldsymbol{e}_r$$ 也会变化，这跟直角坐标系下的单位向量可不一样了！另外，如果我们要一套完整的单位向量，除了 $$\boldsymbol{e}_r$$ 我们还需要一个跟它永远垂直的家伙，让我们管它叫做  $$\boldsymbol{e}_\theta$$ 好了。$$\boldsymbol{e}_r$$ 和 $$\boldsymbol{e}_\theta$$ 这俩哥们都是会随位置变化而改变的，于是问题来了，$$\dot{\boldsymbol{e}_r}$$ 和 $$\dot{\boldsymbol{e}_\theta}$$ 究竟是啥？

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polar_3.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    极坐标系下的单位向量
</div>

让我们先把这俩单位向量丢回直角坐标系下，把它们的分量分别写开：

$$
\boldsymbol{e}_r = {\cos\theta \choose \sin\theta}, \qquad \boldsymbol{e}_\theta = {-\sin\theta \choose \cos\theta} \qquad (6)
$$

读者可以自行验证：

$$
|\boldsymbol{e}_r| = |\boldsymbol{e}_\theta|=1, \qquad \boldsymbol{e}_r\cdot\boldsymbol{e}_\theta=0 \qquad(7)
$$

即 $$\boldsymbol{e}_r$$ 和 $$\boldsymbol{e}_\theta$$ 的确是一组单位向量：单位长度、并且相互垂直。高级点，我们称它们是正交的（orthogonal）。

利用关系

$$
\begin{aligned}
\frac{\mathrm{d} \sin\theta}{\mathrm{d} t} &= \frac{\mathrm{d} \sin\theta}{\mathrm{d} \theta} \frac{\mathrm{d} \theta}{\mathrm{d} t}= \cos\theta \cdot \dot{\theta} \\
\frac{\mathrm{d} \cos\theta}{\mathrm{d} t} &= \frac{\mathrm{d} \cos\theta}{\mathrm{d} \theta} \frac{\mathrm{d} \theta}{\mathrm{d} t}= -\sin\theta \cdot \dot{\theta}
\end{aligned} \qquad (8)
$$

对 $$(6)$$ 式进行无脑求导：

$$
\begin{aligned}
\dot{\boldsymbol{e}_r} &= {-\sin\theta \choose \cos\theta} \times \dot{\theta} = \dot{\theta}\boldsymbol{e}_\theta  \\
\dot{\boldsymbol{e}_\theta} &= {-\cos\theta \choose -\sin\theta} \times \dot{\theta} = -\dot{\theta}\boldsymbol{e}_r
\end{aligned} \qquad (9)
$$

至此我们得到了极坐标下两个单位向量的变化率公式。

其实，如果读者的几何直觉足够强大，可以通过矢量图直接写出这两个单位向量的变化率。在此我仅抛砖引玉地给出一个示意图，具体的论证留给读者作思考。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/polar_4.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    极坐标下单位矢量随位置矢量的变化
</div>

## 极坐标下的速度、加速度

有了 $$(9)$$ 式的铺垫，速度和加速度的推导就是顺水推舟了。

代回 $$(5)$$ 式中，我们可以得到速度的表达式：

$$
\dot{\boldsymbol{r}} = \dot{r}\boldsymbol{e}_r + r\dot{\theta}\boldsymbol{e}_\theta \qquad(10)
$$

继续求导，并用到 $$(9)$$ 式的结果，就可以得到加速度的表达式：

$$
\begin{aligned}
\ddot{\boldsymbol{r}} &= \frac{\mathrm{d}}{\mathrm{d} t} (\dot{r}\boldsymbol{e}_r + r\dot{\theta}\boldsymbol{e}_\theta ) \\
& = \ddot{r}\boldsymbol{e}_r + \dot{r}\dot{\boldsymbol{e}_r} + \dot{r}\dot\theta\boldsymbol{e}_\theta + r\ddot{\theta}\boldsymbol{e}_\theta + r\dot{\theta}\dot{\boldsymbol{e}_\theta} \\
& = \ddot{r}\boldsymbol{e}_r + \dot{r}\dot{\theta}\boldsymbol{e}_\theta + \dot{r}\dot\theta\boldsymbol{e}_\theta + r\ddot{\theta}\boldsymbol{e}_\theta - r\dot{\theta}^2\boldsymbol{e}_r \\
& = (\ddot{r} - r\dot{\theta}^2)\boldsymbol{e}_r + (2\dot{r}\dot{\theta}+r\ddot{\theta})\boldsymbol{e}_\theta 
\end{aligned} \qquad (11)
$$

## 极坐标下的牛顿第二定律

对于 $$\boldsymbol{F}(\boldsymbol{r}) = F(r)\boldsymbol{e}_r$$ 的中心力场，运动方程 $$(2)$$ 式在极坐标下就可以被写成：

$$
F (r) \boldsymbol{e}_r = m(\ddot{r} - r\dot{\theta}^2)\boldsymbol{e}_r + m(2\dot{r}\dot{\theta}+r\ddot{\theta})\boldsymbol{e}_\theta \qquad (12)
$$

由于 $$\boldsymbol{e}_r$$ 和 $$\boldsymbol{e}_\theta$$ 的正交性，方程要成立就必须同时满足：

$$
\begin{eqnarray}
	\ddot{r} - r\dot{\theta}^2 - \frac{F(r)}{m} &=& 0 \qquad (13a)\\
	2\dot{r}\dot{\theta}+r\ddot{\theta} &=& 0 \qquad (13b)
\end{eqnarray}
$$

对于绕着一个位置固定的恒星运动的行星，$$F(r)=-\frac{GMm}{r^2}$$，要求解的方程就变成：

$$
\begin{eqnarray}
	\ddot{r} - r\dot{\theta}^2 + \frac{GM}{r^2} &=& 0 \qquad (14a)\\
	2\dot{r}\dot{\theta}+r\ddot{\theta} &=& 0 \qquad (14b)
\end{eqnarray}
$$

至此，第一部分的内容就快接近尾声了。我们已经在极坐标下写出了行星需要满足的两条运动方程[^3]，然而在这两条方程中，变量 $$r$$ 和 $$\theta$$ 依然是略有些令人头大地互相勾搭在一起，我们将在第二部分中来对付它们。我们会发现，$$(14b)$$ 其实美妙地蕴含了一条非常重要的守恒律，利用这个守恒量，$$(14a)$$ 也会可以找到一个解析解，这个解可以告诉我们行星将会按闭合的椭圆轨道绕恒星运动[^4]。

[^1]: 严格来说，轨道的形状取决于运动的星体所具有的能量。如果能量低于某临界值，则为椭圆轨道；反之，轨道形状会是双曲线的支；星体能量刚好等于临界值时，轨道会是一条抛物线。
[^2]: 如果恒星的质量远大于行星的质量，这个假定近似成立。但是更普遍的情形，这个假定并不能站住脚。然而，在下篇中，我们将看到，行星绕恒星运动的二体问题，总可以归结为求解两个星体间相对位移的变化。相对位移符合的运动方程和我们在这里简化模型得到的式子在形式上完全相同。
[^3]: 一在大学层次的分析力学课程中，将 r 和 θ 视作广义坐标写出行星的拉格朗日量，然后用 Euler-Lagrange 方程可以非常快速地建立起同样的方程。 
[^4]: 若考虑广义相对论的修正，行星绕行的椭圆轨道并不闭合，而是会缓慢地进动。


