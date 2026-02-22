---
layout: post
title: "平方反比律推导开普勒三定律"
date: 2020-06-07 08:35:00
description: 从引力的平方反比律来推导行星椭圆轨道定律
tags: mathematics physics mechanics a-level gravity
categories: mathematics physics a-level theoretical-physics
---

[上一篇文章]({{site.baseurl}}/blog/2020/polar-coordinates/)，我们介绍了极坐标以及极坐标下牛顿第二定律的形式。在这一篇中，我们将来使用这些数学工具，来处理行星绕恒星运动的两体问题。我们将证明，若恒星和行星之间的引力符合平方反比率（inverse square law），就必将有开普勒三定律：

1. 行星沿椭圆轨道上绕恒星运动，并且恒星的位置位于椭圆的焦点之一
2. 连接行星与恒星的线段在单位时间内扫过的面积为定值
3. 行星轨道的周期的平方正比于椭圆长轴的三次方。

## 两体问题的初步探讨

记恒星和行星的质量分别为 $$M$$ 和 $$m$$，它们相对某个参考系原点的位置矢量分别为 $$\boldsymbol{R}$$ 和 $$\boldsymbol{r}$$，则可以写出两者的运动方程

$$
\begin{aligned}
m\ddot{\boldsymbol{r}} &= \frac{GMm}{|\boldsymbol{R}-\boldsymbol{r}|^3}(\boldsymbol{R}-\boldsymbol{r}) = -\frac{GMm}{r_\text{rel}^3}\boldsymbol{r}_\text{rel}  &\qquad (1a) \nonumber  \\ 
M\ddot{\boldsymbol{R}} &= \frac{GMm}{|\boldsymbol{r}-\boldsymbol{R}|^3}(\boldsymbol{r}-\boldsymbol{R}) = \frac{GMm}{r_\text{rel}^3}\boldsymbol{r}_\text{rel}  &\qquad (1b) \nonumber 
\end{aligned} 
$$

其中我们定义了 $$\boldsymbol{r}_\text{rel} = \boldsymbol{r} - \boldsymbol{R}$$ 为行星相对于恒星的位置矢量。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kepler_1.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    两体问题中位置矢量的定义
</div>

将上面两式相加，可以得到

$$
M\ddot{\boldsymbol{R}} + m\ddot{\boldsymbol{r}} = 0 \qquad(2)
$$

为了更清楚地看出这个式子说明什么，我们稍作改写

$$
 \frac{M\ddot{\boldsymbol{R}} + m\ddot{\boldsymbol{r}}}{M+m} = 0 \qquad (3)
$$

注意我们这个两体系统**质心**的位置矢量为

$$
\boldsymbol{r}_\text{cm} = \frac{M\boldsymbol{R} + m\boldsymbol{r}}{M+m} \qquad (4)
$$

因此 $$(3)$$ 式可以被简写成

$$
\ddot{\boldsymbol{r}}_\text{cm} = 0 \qquad (5)
$$

这说明体系的质心将保持匀速直线运动。这丝毫不令人感到意外，我们考察的是一个没有外力作用的两体系统，它的质心必然不会有任何的加速度。如果我们乐意，我们完全可以取质心的随动参照系，即跟着质心以相同的速度运动的参照系，这样 $$(5)$$ 式可以进一步简化成 $$\boldsymbol{r}_\text{cm}=0$$，我们根本不用去纠结质心的位置变化。

接下来我们再看看两个星体的相对位置会有怎样的关系。在 $$(1a)$$ 中消去 $$m$$，在 $$(1b)$$ 中消去 $$M$$，再将两式相减，可以得到

$$
\ddot{\boldsymbol{r}} - \ddot{\boldsymbol{R}} = -\frac{G(M+m)}{r_\text{rel}^3}\boldsymbol{r}_\text{rel} \qquad (6)
$$
注意到 $$\ddot{\boldsymbol{r}}_\text{rel} = \ddot{\boldsymbol{r}} - \ddot{\boldsymbol{R}}$$，以及 $$\hat{\boldsymbol{r}} = \boldsymbol{r}_\text{rel}/r_\text{rel}$$ 给出了相对位置矢量方向的单位向量，上式可以改写为

$$
\ddot{\boldsymbol{r}}_\text{rel} = -\frac{G(M+m)}{r_\text{rel}^2}\hat{\boldsymbol{e}}_{r_\text{rel}} \qquad (7)
$$

我们在上一篇中曾经假设了恒星固定不动、行星绕着运动的情况，将恒星视作极坐标原点可以写出行星位置矢量所满足的方程

$$
\ddot{\boldsymbol{r}} = -\frac{GM}{r^2}\hat{\boldsymbol{e}}_{r} \qquad (8)
$$

从中可见简化模型下的 $$(8)$$ 式其实只需稍作魔改就可以适用于更普遍情形下成立的 $$(7)$$ 式：将方程中的质量项改写成两体的总质量，并方程描述的变量被明确地写成了行星相对于恒星的位置 $$\boldsymbol{r}_\text{rel}$$。

当然，读者也可以验证，如果恒星的质量远远大于行星质量，即 $$M \gg m$$ 时，

$$
\boldsymbol{r}_\text{cm} = \frac{\boldsymbol{R} + \frac{m}{M} \boldsymbol{r}}{1+\frac{m}{M}} \approx \boldsymbol{R} \qquad (9)
$$

上式说明体系的质心坐标会跟大质量恒星的位置非常靠近。两体系统的质心作匀速直线运动，意味着恒星也可被视作作匀速直线运动。在质心的随动参照系中，将恒星作为参照系原点，可以认为恒星会一直在原点处静止，这就很自然地回到了 $$(8)$$ 式所考虑的简单假设。

在后面的讨论中，为了书写方便，我们将 $$(7)$$ 式写成如下形式：

$$
\ddot{\boldsymbol{r}} = -\frac{GM}{r^2}\hat{\boldsymbol{e}}_{r} \qquad (10)
$$

但在求解的过程中，我们要谨记这里的 $$M$$ 是恒星和行星的总质量，$$\boldsymbol{r}$$ 是行星较于恒星的相对位置矢量。

## 角动量守恒与开普勒第二定律

在上一篇文章[《极坐标下的牛顿定律]({{site.baseurl}}/blog/2020/polar-coordinates/)》中，我们引入了处理行星轨道问题所需要的数学工具——**极坐标**。我们直接引用结论，在极坐标下，加速度可以写成

$$
\ddot{\boldsymbol{r}} = (\ddot{r} - r\dot{\theta}^2)\boldsymbol{e}_r + (2\dot{r}\dot{\theta}+r\ddot{\theta})\boldsymbol{e}_\theta  \qquad (11)
$$

运动方程 $$(10)$$ 可以由此分离成两条独立的方程：

$$
\begin{aligned}
	\ddot{r} - r\dot{\theta}^2 + \frac{GM}{r^2} &= 0 \qquad (12a) \nonumber \\
	2\dot{r}\dot{\theta}+r\ddot{\theta} &= 0 \qquad (12b) \nonumber 
\end{aligned}
$$

这两个家伙中，显然 $$(12b)$$ 更好对付些。先来捏这个软柿子，注意到

$$
\frac{\mathrm{d} }{\mathrm{d} t}(r^2\dot{\theta}) = 2r\dot{r}\dot{\theta} + r^2\ddot{\theta} = r(2\dot{r}\dot{\theta}+r\ddot{\theta}) \qquad (13)
$$

因此 $$(12b)$$ 可以被写成

$$
\frac{1}{r} \frac{\mathrm{d} }{\mathrm{d} t}(r^2\dot{\theta}) = 0 \qquad (14)
$$

这说明 $$r^2\dot{\theta}$$ 是一个不随时间发生变化的常量，我们惊喜地发现了一个**守恒量**！我们先给它一个记号

$$
l \equiv r^2\dot{\theta} \qquad (15)
$$

有转动力学基础的读者应该马上就能看出来，这其实就是伪装起来的**角动量守恒定律**（conservation of angular momentum）。我们也可以马上看到，这个守恒律可以立刻导出**开普勒第二定律**。如果行星在短暂的时间间隔 $$\Delta t$$ 内从一个位置 $$P$$ 运动到了新的位置 $$Q$$，连接行星和恒星的线段扫过的面积近似为一个瘦长的三角形

$$
	\Delta A = \frac{1}{2}r_P r_Q \sin\Delta \theta \qquad (16)
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kepler_2.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    连接行星与恒星的线段在一段时间内扫过的面积
</div>

若 $$\Delta t$$ 足够小，$$\Delta \theta$$ 也足够小，我们有小角度近似： $$\sin \Delta \theta \approx \Delta \theta$$。另一方面，连接行星和恒星的线段长度 $$r$$ 的变化也可以忽略不记，有 $$r_P \approx r_Q \approx r$$。于是

$$
\Delta A \approx \frac{1}{2}r^2 \Delta \theta \qquad (17)
$$

两边同除以 $$\Delta t$$，再取 $$\Delta t\to0$$ 的极限，我们得到

$$
\frac{\mathrm{d} A}{\mathrm{d} t} = \frac{1}{2} r^2 \dot{\theta} = \frac{l}{2} = \text{constant} \qquad (18)
$$

这正是开普勒第二定律的微分形式。

## 行星轨道的求解

有了 $$l$$ 这个守恒量，我们现在也有信心回过头来对付 $$(12a)$$ 了，我们将看到这里面蕴含着我们理解行星轨道形状的重要信息。将 $$\dot{\theta}$$ 替换成 $$l/r^2$$，代入 $$(12a)$$，稍作化简可以得到

$$
\ddot{r} - \frac{l^2}{r^3} +\frac{GM}{r^2} =0 \qquad (19)
$$

这个二阶微分方程没法一下子解出来，求解过程需要一些换元的技巧。可以尝试类似微分方程求解时的一个很管用的换元：
$$
u \equiv \frac{1}{r} \qquad (20)
$$

$$r$$ 随时间的一阶、二阶导数会是

$$
\begin{aligned}
	\dot{r} &= \frac{\mathrm{d}}{\mathrm{d} t}\frac{1}{u} = -\frac{\dot{u}}{u^2} \nonumber  \\
	\ddot{r} &= \frac{\mathrm{d}}{\mathrm{d} t}\left(-\frac{\dot{u}}{u^2}\right) = -\frac{\ddot{u}}{u^2} + \frac{2\dot{u}^2}{u^3} \nonumber 
\end{aligned} \qquad (21) 
$$

放回到 $$(19)$$ 式中，现在我们有

$$
-\frac{\ddot{u}}{u^2} + \frac{2\dot{u}^2}{u^3} - l^2u^3 + GMu^2 =0 \qquad (22)
$$

乍看起来，我们好像把事情越搞越糟了。不要紧，比起行星的位置随时间的变化，我们其实更关心的行星轨道的形状，即我们想知道行星和恒星间的距离 $$r$$ 会随角度 $$\theta$$ 有怎样的变化关系。因此，与其纠结 $$u$$ 相对于时间 $$t$$ 的导数，我们不妨尝试去找找 $$u$$ 相对 $$\theta$$ 的导数。

用一下链式求导法则，可以得到一阶导数的变换关系：

$$
\dot{u} = \frac{\mathrm{d} u}{\mathrm{d} \theta} \frac{\mathrm{d} \theta}{\mathrm{d} t} = \frac{\mathrm{d} u}{\mathrm{d} \theta} \times \dot{\theta} =  \frac{\mathrm{d} u}{\mathrm{d} \theta} \frac{l}{r^2} = lu^2 \frac{\mathrm{d} u}{\mathrm{d} \theta} \qquad (23)
$$

继续用链式法则，进行一通耐心的计算，也可以找到二阶导数的关系：

$$
\begin{aligned}
\ddot{u} &= \frac{\mathrm{d} \dot{u}}{\mathrm{d} \theta} \frac{\mathrm{d} \theta}{\mathrm{d} t} \nonumber \\
&= \frac{\mathrm{d}}{\mathrm{d} \theta}\left(lu^2 \frac{\mathrm{d} u}{\mathrm{d} \theta}\right) \times \dot{\theta} \nonumber \\
&=  \left(2lu \left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 + lu^2 \frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2}\right) \frac{l}{r^2} \nonumber \\
&= \left(2lu \left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 + lu^2 \frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2}\right) lu^2 \nonumber \\
&=  2l^2u^3\left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 + l^2u^4\frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2} \qquad (24) \nonumber 
\end{aligned}
$$

把 $$(23)$$ 和 $$(24)$$ 这些吓人的东西塞回 $$(22)$$ 式中去，见证奇迹的时刻到了：

$$
\begin{aligned}
	-\frac{1}{u^2} \left(2l^2u^3\left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 + l^2u^4\frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2}\right) + \frac{2}{u^3}\left(lu^2 \frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 - l^2u^3 + GMu^2 =0 \nonumber  \\
-2l^2u\left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 - l^2u^2\frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2} + 2l^2u\left(\frac{\mathrm{d} u}{\mathrm{d} \theta}\right)^2 - l^2u^3 + GMu^2 = 0 \nonumber 
\end{aligned}
$$

第一项和第三项神奇地同归于尽了，剩下的东西可以进一步化简：

$$
\begin{aligned}
- l^2u^2\frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2} - l^2u^3 + GMu^2 &= 0 & \nonumber \\
\frac{\mathrm{d}^2 u}{\mathrm{d} \theta^2} + u &= \frac{GM}{l^2} &\qquad (25) \nonumber 
\end{aligned}
$$

窃以为此处应有掌声。这些看起来很复杂的项，经过换元、重新组合后，最后的方程居然可以写成如此简洁美妙的形式！而这个微分方程的解，是任何学过求解二阶微分方程的读者都应该烂熟于胸的，不熟悉这类方程的求解也没关系，下面的通解代回去不难自行验证是方程的解

$$
u(\theta) = A\cos(\theta + \phi) + \frac{GM}{l^2} \qquad (26)
$$

其中 $$A$$ 和 $$\phi$$ 是可以由体系初始状态确定的积分常数。被称作相位角的 $$\phi$$，可以通过重新定义我们的极坐标系被消灭掉。将原先 $$\theta = \phi$$ 的方向重新定义为 $$\theta =0$$（相当于将原来的极坐标系转了一个角度，建立了一个新的极坐标系），把 $$\phi$$ 干掉，再回到极坐标的表示，行星的轨道方程变成为

$$
r = \frac{1}{u} = \frac{1}{A\cos\theta + \frac{GM}{l^2}} = \frac{\frac{l^2}{GM}}{\frac{Al^2}{GM}\cos\theta+1}
\qquad (27)
$$

定义新的常数

$$
r_0 = \frac{l^2}{GM}, \qquad e = \frac{Al^2}{GM} \qquad (28)
$$

穷折腾了那么老半天后，我们终于可以甩出行星的轨道方程的最终形式：

$$
r = \frac{r_0}{e\cos\theta +1} \qquad (29)
$$

高中数学竞赛党们也许能一眼认出这东西就是**圆锥曲线**（conic section）在极坐标下的标准形式！行星轨道可以是一个椭圆，可以是一条双曲线，也可以是一条抛物线，具体情况取决于参数 $$e$$。

## 开普勒第一定律

先来讨论 $$e<1$$ 的情况，我们马上将看到，这描述的是一个**椭圆**轨道（ellipse）。

利用 $$x=r\cos\theta$$ 及 $$y=r\sin\theta$$，将 $$(29)$$ 式变换回平面直角坐标系：

$$
\begin{aligned}
& r = r_0 - er\cos\theta & \nonumber \\
& x^2 + y^2 = (r_0 -ex)^2 & \nonumber \\
& (1-e^2)x^2 + 2er_0x + y^2 = r_0^2 & \nonumber \\
& x^2 + \frac{2er_0x}{1-e^2}+\frac{y^2}{1-e^2} = \frac{r_0^2}{1-e^2} & \nonumber \\
& \left( x+\frac{er_0}{1-e^2} \right)^2 +\frac{y^2}{1-e^2} = \frac{r_0^2}{1-e^2} + \left( \frac{er_0}{1-e^2} \right)^2 & \nonumber \\
& \left( x+\frac{er_0}{1-e^2} \right)^2 +\frac{y^2}{1-e^2} = \frac{r_0^2}{(1-e^2)^2} & \nonumber \\
\end{aligned}
$$

定义新的常数们

$$
a^2 = \frac{r_0^2}{(1-e^2)^2}, \quad b^2 = \frac{r_0^2}{1-e^2}, \quad c = \frac{er_0}{1-e^2}= ea \qquad (30)
$$

轨道的方程可以被改写成

$$
\frac{(x+c)^2}{a^2} + \frac{y^2}{b^2} = 1 \qquad (31)
$$

这是一个中心位于 $$(-c,0)$$、半长轴为 $$a$$、半短轴为 $$b$$ 的椭圆！注意 $$\boldsymbol{r}$$ 是行星相对于恒星的位置矢量，恒星所在的坐标系原点相距椭圆的中心的距离为 $$c=ea$$ 。不难验证 $$a^2 = b^2 - c^2$$，这说明恒星的位置落在这个椭圆的**焦点**（focus）上。以上正是开普勒第一定律的核心内容。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kepler_3.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    行星沿椭圆轨道（绿色）绕恒星（橙色）运动，恒星位于椭圆的一个焦点处
</div>

特别的，当 $$e=0$$ 时，有 $$a=b$$，椭圆的长轴、短轴相等，这时轨道是一个正圆。而当 $$e$$ 接近于1时，$$a \gg b$$，这会是一个拉的非常细长的椭圆。因此 $$e$$ 被形象地称作椭圆的**偏心率**（eccentricity）。太阳系中的大多数行星都有很接近0的偏心率（水星是个例外），因此大可以近似地简化为圆轨道来处理；而彗星则普遍具有很接近于1的偏心率（比如哈雷彗星 $$e\approx 0.97$$）。

当 $$e>1$$ 时，通过类似的代数运算，我们可以证明此时的轨道将是一个**双曲线**（hyperbola）。$$(29)$$ 式可以被化简成如下的形式

$$
\frac{(x-c')^2}{a'^2} - \frac{y^2}{b'^2} = 1 \qquad (32)
$$

其中

$$
a'^2 = \frac{r_0^2}{(e^2-1)^2}, \quad b'^2 = \frac{r_0^2}{e^2-1}, \quad c'=\frac{er_0}{e^2-1}=ea' \qquad (33)
$$

数学推导过程留给有心的读者作为练习。这个结果表明了，行星也可以掠过恒星的引力场，然后逃逸到无穷远去，最后趋近于作直线运动，其轨道的形状是一条以恒星为焦点的双曲线。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kepler_4.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    行星沿双曲线轨道（绿色）掠过恒星（橙色）产生的引力场
</div>

最后，当 $$e=1$$ 时，可以很轻易地证明，$$(29)$$ 式可以化简为

$$
y^2 = r_0^2 - 2r_0 x \qquad (34)
$$

这是一条典型的**抛物线**方程，推导过程和对应的物理图像留个读者作为思考。

## 开普勒第三定律

在本篇的最后，我们来讨论椭圆轨道下，行星绕行的周期会有怎样的有趣结果。

在开普勒第二定律的推导过程中，我们已经证明了单位时间内行星与恒星连线所扫过的面积为定值：$$\frac{\mathrm{d} A}{\mathrm{d} t} = \frac{1}{2}l$$。在一个周期内，扫过的面积是一个完整的椭圆，运用椭圆面积公式

$$
A = \pi a b = \pi \times \frac{r_0}{1-e^2} \times \frac{r_0}{\sqrt{1-e^2}} = \frac{\pi r_0^2}{(1-e^2)^{\frac{3}{2}}} \qquad (35)
$$

于是一个周期的时间为

$$
T = \frac{A}{\frac{1}{2}l} = \frac{2\pi r_0^2}{l(1-e^2)^{\frac{3}{2}}} \qquad (36)
$$

利用 $$(28)$$ 式 $$r_0 = \frac{l^2}{GM}$$，我们可以将 $$l$$ 写作 $$\sqrt{GMr_0}$$，于是

$$
T = \frac{2\pi r_0^2}{\sqrt{GMr_0}(1-e^2)^{\frac{3}{2}}} = \frac{2\pi}{\sqrt{GM}} \left( \frac{r_0}{1-e^2} \right)^\frac{3}{2} \qquad (37)
$$

上面括号里那是啥？！看到 $$(30)$$ 式 $$a=\frac{r_0}{1-e^2}$$，简直两眼放光太棒了有没有

$$
T = \frac{2\pi}{\sqrt{GM}} a^\frac{3}{2}
$$

或者写成更为人熟知的形式：

$$
T^2 = \frac{4\pi}{GM}a^3 \qquad (38)
$$

好了，**开普勒第三定律**板上钉钉：轨道周期的平方正比于椭圆半长轴的三次方，完结撒花！