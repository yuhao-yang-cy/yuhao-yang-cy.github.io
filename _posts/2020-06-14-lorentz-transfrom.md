---
layout: post
title: "Lorentz 变换的推导以及钟慢效应、尺缩效应、速度叠加公式"
date: 2020-06-14 13:56:00
description: 从第一性原理推导狭义相对论的 Lorentz Transformation
tags: physics relativity
categories: physics theoretical-physics
---

题记：最近写各种乱七八糟的东西写得有点小膨胀，感觉自己多年不用的脑袋好像经历了一波除锈操作，这波来斗胆写点自己所了解的狭义相对论，有错误请读者不要留情面地指正。

这是这个关于狭义相对论的小系列灌水文章的第一篇，来介绍下所谓 Lorentz 变换，和由此导出的动钟变慢、动尺变短等颠覆常识认知的物理结果。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/special-relativity.jpg" title="Special Relativity" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    文章题图来自 A. V. Kashnikov, et al, 2019, J. Phys.: Conf. Ser. 1348 012092
    
    (<a href="[url](https://iopscience.iop.org/article/10.1088/1742-6596/1348/1/012092/pdf)">https://iopscience.iop.org/article/10.1088/1742-6596/1348/1/012092/pdf</a>)
</div>

## Lorentz 变换的推导

Albert Einstein 大神的狭义相对论建立于两条最根本的假定：

1. **狭义相对性原理**：任何惯性参考系下的物理现象都遵循相同给的规律，即所有惯性参考系都是等价的。
2. **光速不变原理**：光速在任何惯性参照系中都是常数。

从这两条假定出发，Einstein 得到了 Lorentz 变换的公式，继而建立了狭义相对论的理论大厦。

**Lorentz 变换**，说的是狭义相对论中从一个惯性参照系 $$S$$ 到另一个惯性参照系 $$S'$$ 的时空坐标变换，我们不妨记作：$$S(x,y,z,t) \rightarrow S'(x',y',z',t')$$。

为了讨论方便起见，我们采用最常规的设定：惯性参照系 $$S'$$ 相对于惯性参照系 $$S$$ 以恒定的相对速度 $$v$$ 沿 $$x$$ 轴方向运动，并且在 $$t=t'=0$$ 的初始时刻，两个坐标系的原点重合。对于某个物理事件，两个参照系下一般会有 $$x'\neq x$$ 及 $$t'\neq t$$，但在我们的设定下，总会有 $$y'=y$$ 及 $$z'=z$$。要找到 $$S \rightarrow S'$$ 的变换规则，我们现在只需关心 $$(x,t) \rightarrow (x',t')$$ 的变换规则。

我们可以先考虑最简单的**线性变换**（事实上也可以证明这只能是线性变换），即假设

$$
\begin{cases}
x'=\alpha x + \beta t \\
t'=\gamma x + \delta t 
\end{cases}  \qquad (1)
$$

其中 $$\alpha, \beta, \gamma, \delta$$ 是4个我们暂且还不知道的参数，但是可以猜测它们会跟两个参考系之间的相对速度 $$v$$ 有关。我们接下来要做的，就是来分别考虑一些满足上述两条基本假定的简单运动行为在两个参照系中看起来分别会是什么样子，然后代回到 $$(1)$$ 中去，将 $$\alpha, \beta, \gamma, \delta$$ 这4个参数一一确定。

考虑 $$S$$ 系中有一从原点开始沿 $$x$$ 轴方向以 $$v$$ 作匀速运动的物体。在任意时刻 $$t$$，$$S$$ 系中均有 $$x=vt$$；在对应的时刻 $$t'$$，$$S'$$ 系中有 $$x'=0$$。 塞进 $$(1)$$ 式：

$$
x' = \alpha v t + \beta t = 0 \quad \Rightarrow \quad \beta = -\alpha v \qquad (2)
$$

接着考虑 $$S$$ 系中在原点静止的物体，则在任意时刻，$$S$$ 系中恒有 $$x=0$$，而在 $$S'$$ 系中有 $$x'=-vt'$$。塞进 $$(1)$$ 式：

$$
\begin{cases}
-vt' = \beta t \\
t' = \delta t
\end{cases} \quad \Rightarrow \quad \beta = -\delta v \qquad (3)
$$

结合 $$(2)$$ 与 $$(3)$$ 立即看到

$$
\alpha = \delta \qquad (4)
$$

于是 $$(1)$$ 式中的4个参数可以化简为2个参数，写成如下的形式：

$$
\begin{cases}
x'= \alpha (x-vt) \\
t'=\gamma x + \alpha t 
\end{cases}  \qquad (5)
$$

我们继续考虑在 $$t=t'=0$$ 时刻从原点射出的光束，由于任何参照系中的光速都为恒定值，因此在 $$S$$ 系中有 $$x=ct$$，在 $$S'$$ 系中有 $$x'=ct'$$。塞进 $$(5)$$ 式：

$$
\begin{cases}
ct' = \alpha (ct - vt)  \qquad (6a) \\
t' = \gamma ct + \alpha t \, \quad \qquad (6b)
\end{cases}
$$

$$(6b)\times c$$ 跟 $$(6a)$$ 比较可以得到：

$$
\alpha c t - \alpha v t = \gamma c^2 t + \alpha c t \quad \Rightarrow \quad \gamma=-\frac{v}{c^2}\alpha \qquad (7)
$$

不错不错，变换又可以继续化简，变成这样子：

$$
\begin{cases}
x'= \alpha (x-vt) \,\,\, \qquad (8a) \\
t'= \alpha \left( t - \frac{vx}{c^2} \right)  \qquad (8b) 
\end{cases}  
$$

好像有那味儿了？只需再找到一个什么关系，把 $$\alpha$$ 找出来就可以柳暗花明了。最后我们作如下的考虑：如果 $$S'$$ 系相对 $$S$$ 系以速度 $$v$$ 运动，那么反过来 $$S$$ 系相对 $$S'$$ 系就会以速度 $$-v$$ 运动。自然规律本身不 care 我们究竟管谁叫 $$S$$ 系和 $$S'$$ 系，我们要找的坐标变换能从 $$S$$ 系变到 $$S'$$ 系，也必须能从 $$S'$$ 系变回到 $$S$$ 系，逆变换形式上必定有：

$$
\begin{cases}
x = \alpha (x' +  vt')  \,\,\, \qquad (9a)\\
t= \alpha \left( t' + \frac{vx'}{c^2} \right)   \qquad (9b)
\end{cases} 
$$

另一方面，我们也可以从 $$(8)$$ 式中蛮力硬解出逆变换。

$$
\begin{aligned}
(8a)+(8b)\times v \quad & \Rightarrow \quad x'+vt' = \alpha \left( x - \frac{v^2x}{c^2} \right) \\
& \Rightarrow \quad x = \frac{x' + vt'}{\alpha \left( 1 - \frac{v^2}{c^2} \right)} \quad \qquad \qquad (10a)\\
(8a) \times \frac{v}{c^2} +(8b) \quad & \Rightarrow \quad \frac{vx'}{c^2} + t' = \alpha \left( -\frac{v^2t}{c^2} + t \right) \\
& \Rightarrow \quad t = \frac{t' + \frac{vx'}{c^2}}{\alpha \left( 1 - \frac{v^2}{c^2} \right)} \quad  \qquad \qquad (10b)\\ \\
\end{aligned}
$$

对比 $$(9)$$ 与 $$(10)$$，容易看出

$$
\alpha = \frac{1}{\alpha \left( 1 - \frac{v^2}{c^2} \right)} \quad \Rightarrow \quad \alpha = \frac{1}{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (11)
$$

自此我们得到了 Lorentz 变换的最后形式。顺便把另两个存在感不是很强的空间维度也放回来，我们有：

$$
\begin{cases}
\displaystyle x' = \frac{x-vt}{\sqrt{1 - \frac{v^2}{c^2} }} \\
\displaystyle y' = y \\
\displaystyle z' = z \\
\displaystyle t' = \frac{t - \frac{vx}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }}
\end{cases} \qquad (12)
$$

利用以上的 Lorentz 变换和相对应的逆变换，我们可以在 $$S$$ 系和 $$S'$$ 系之间来回捣腾（这大概也是玩狭义相对论比较搞脑筋的地方，需要不断地从一个片场切到另一个片场，中间时刻要提醒自己不要拿错剧本），推导出狭义相对论中一些很（hui3）有（san1）趣（guan1）的结论。


## 钟慢效应

我们先来考虑两个相同的事件的时间间隔在 $$S$$ 系和 $$S'$$ 系看来会有怎样的关系。

在 $$S$$ 系中，事件的时间间隔记为：$$\Delta t = t_2 - t_1$$

转换到 $$S'$$ 系中，有

$$
\begin{eqnarray}
& \Delta t' = t_2' - t_1' = \frac{t_2 - \frac{vx_2}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{t_1 - \frac{vx_1}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} & \\
& \Rightarrow \quad \Delta t' = \frac{\Delta t - \frac{v \Delta x}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} &
\end{eqnarray}
$$

如果事件一和事件二在 $$S$$ 系中发生的地点相同，即 $$\Delta x = 0$$，则在 $$S'$$ 系看来，两个事件的时间间隔会有

$$
\Delta t' = \frac{\Delta t }{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (13)
$$

以上说明 $$S$$ 系中间隔为 $$\Delta t$$ 的两个事件，在 $$S'$$ 系中看起来的间隔会变得更长。例如在 $$S$$ 系中的一个时钟滴答走一秒钟，$$S'$$ 系的观察者会说他看到的滴答的时间间隔大于一秒钟，也就是说他会认为 $$S$$ 系中的时钟走得慢了。因此这个效应就被称作**钟慢效应**，也可以称作**时间膨胀**（time dilation）。

我们还可以尝试反过来从 $$S'$$ 系推回 $$S$$ 系。利用逆变换，我们可以写出

$$
\Delta x = x_2 - x_1 = \frac{x_2' + vt_2'}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{x_1' + vt_1'}{\sqrt{1 - \frac{v^2}{c^2} }} = \frac{\Delta x' + v \Delta t'}{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (14a) \\
\Delta t = t_2 - t_1 = \frac{t_2' + \frac{vx_2'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{t_1' + \frac{vx_1'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} = \frac{\Delta t' + \frac{v \Delta x'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (14b)
$$

我们先前假定了两个事件发生在 $$S$$ 系中的同一地点，为了满足 $$\Delta x = 0$$，由 $$(14a)$$ 将必然有 $$\Delta x' = -v\Delta t'$$，这其实代表着 $$S'$$ 系在眼瞅着 $$S$$ 系向着反方向以速度 $$v$$ 扬长而去。将其代回 $$(14b)$$ 中，可以得到

$$
\Delta t = \frac{\Delta t' - \frac{v^2 \Delta t'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} \quad \Rightarrow \quad \Delta t = \Delta t' {\sqrt{1 - \frac{v^2}{c^2} }} \qquad (15)
$$

结果不出意外地与 $$(13)$$ 一致。


## 尺缩效应

我们再来考虑一个运动物体的长度在不同的惯性观察者眼中又会有什么不同。

要测量一个物体的长度，需要同时确定它两个端点的位置，再将它们的坐标相减得出长度。

假设现在这个物体在 $$S'$$ 系中处于静止，也就是说它相对 $$S$$ 系正以速度 $$v$$ 作运动。记物体在 $$S'$$ 系中的长度为 $$L’=x_2'-x_1' \equiv L_0$$，其中 $$x_1'$$、$$x_2'$$ 为物体的端点坐标。我们特别地记为 $$L_0$$，是因为这是物体在静止时被测出来的长度，我们将看到在所有的惯性系中这个静止长度会具有特殊意义。

利用 Lorentz 变换，

$$
L_0 = x_2' - x_1' = \frac{x_2 - vt_2}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{x_1 - vt_1}{\sqrt{1 - \frac{v^2}{c^2} }} = \frac{L - v \Delta t}{\sqrt{1 - \frac{v^2}{c^2} }}  \\
$$

注意到若 $$L = x_2-x_1$$ 给出的是 $$S$$ 系中测到的长度，这个测量必须是在 $$S$$ 系中同时进行的，即 $$\Delta t = t_2 - t_1 = 0$$。于是我们得到：

$$
L_0 = \frac{L}{\sqrt{1 - \frac{v^2}{c^2} }} \quad \Rightarrow \quad L = L_0 \sqrt{1 - \frac{v^2}{c^2} } \qquad (16)
$$

这说明一个静止时长度为 $$L_0$$ 的物体，在运动时的长度总会有所缩短。在中文中这便被形象地称作**尺缩效应**，亦有被称作**长度收缩**（length contraction）。

我们也可以换个方式通过逆变换来推导同样的结论。可以写出

$$
L = x_2 - x_1 = \frac{x_2' + vt_2'}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{x_1' + vt_1'}{\sqrt{1 - \frac{v^2}{c^2} }} = \frac{L_0 + v \Delta t'}{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (17a) \\
0 = t_2 - t_1 = \frac{t_2' + \frac{vx_2'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} - \frac{t_1' + \frac{vx_1'}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} = \frac{\Delta t' + \frac{v L_0}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} \qquad (17b)
$$

$$S$$ 系中对物体两个端点坐标要同时作测量，就意味着 $$(17b)$$ 中必须有 $$\Delta t' = -\frac{vL_0}{c^2}$$。塞进 $$(17a)$$ 里面，

$$
L = \frac{L_0 -\frac{v^2 L_0}{c^2}}{\sqrt{1 - \frac{v^2}{c^2} }} \quad \Rightarrow \quad L = L_0 \sqrt{1 - \frac{v^2}{c^2} } \qquad (18)
$$

我们得到了跟先前一样的结果。


## 速度叠加（Velocity Addition）

假设一个物体在 $$S'$$ 系中以速度 $$u$$ 向 $$x'$$ 轴正方向运动，那么在 $$S$$ 系中看来，这个物体的速度会是多少呢？

简单起见，设 $$t_1=t_1'=0$$ 时，该物体从坐标系的原点开始运动，即 $$x_1 = x_1'=0$$。对于 $$S'$$ 系的观察者，在 $$t_2'$$ 时刻物体的位置将会来到 $$x_2' = ut_2'$$。接下来切换到 $$S$$ 系的视角：

$$
x_2 = \frac{ut_2' + vt_2'}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{(u+v)t_2'}{\sqrt{1 - \frac{v^2}{c^2}}} \\
t_2 = \frac{t_2' + \frac{v\times(ut_2')}{c^2}}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{\left( 1 + \frac{uv}{c^2} \right) t_2' }{\sqrt{1 - \frac{v^2}{c^2}}}
$$

显然物体在 $$S$$ 系中依然作匀速运动，其速度有：

$$
w = \frac{x_2-x_1}{t_2-t_1}=\frac{x_2-0}{t_2-0} \quad \Rightarrow \quad w = \frac{u+v}{1+\frac{uv}{c^2}} \qquad (24)
$$

这便是相对论下的速度叠加公式。

在低速 $$u,v \ll c$$ 的情况下，上式中的分母近似为1，速度叠加公式退化为大家感官上跟容易接受的 $$w=u+v$$。例如，某人在一列相对地面以 30 m/s 的速度行驶的列车上，很没有素质地朝前（相对他自己）以 10 m/s 的速度丢出了一坨垃圾，我们在地面上将会看到这坨垃圾近似以 40 m/s 的速度被抛出来，但这个速度其实会略微小于 40 m/s。

如果速度接近光速，比如一艘星际战舰中相对我们以 $$v=\frac{1}{2}c$$ 的速度运动，它朝前射出一枚速度为 $$u=\frac{1}{2}c$$ 的导弹，那么在我们看来，这枚导弹的速度为

$$
w = \frac{\frac{c}{2} + \frac{c}{2}}{ 1 + \frac{\frac{c}{2}\times\frac{c}{2}}{c^2}} = \frac{4}{5}c
$$

如果有一个物体在 $$S'$$ 系中以光速 $$c$$ 运动，则在 $$S$$ 系中观测到的速度大小为

$$
u = \frac{c+v}{1+\frac{cv}{c^2}} = \frac{c+v}{1+\frac{v}{c}} \quad \Rightarrow \quad u' = c
$$

这其实是重新回到了整个 Lorentz 变换的基本假定：**在任意参照系中都有恒定的光速**。
