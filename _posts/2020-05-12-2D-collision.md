---
layout: post
title: "两体弹性碰撞问题：暴算与讨论"
date: 2020-05-12 22:40:00
description: "不作质心系的变换硬算两体碰撞后的角度偏转和动能传递问题"
tags: physics a-level mechanics
categories: physics a-level
---

## 问题概要

今天来捋一捋两体的**弹性碰撞问题**。

设两个物体的质量分别为 $$ m_1$$ 和 $$ m_2$$。为了讨论方便起见，我们假定，$$ m_1 $$ 沿 $$x$$-轴方向以初速度 $$u$$ 朝着处于静止状态的 $$ m_2 $$ 杀将过来。碰撞后，$$ m_1$$ 和 $$ m_2$$ 分别以速度 $$ v_1$$ 和 $$ v_2 $$ 各作鸟兽散，其中 $$ v_1$$ 和 $$ v_2 $$ 与 $$x$$-轴方向所成的角度分别为 $$ \alpha$$ 和 $$\beta$$（如图所示）。

{% include figure.liquid loading="eager" path="assets/img/2D_collision.jpg" title="" class="img-natural rounded z-depth-1" %}

接下来我们想解决的以下几个问题：

1. 对所有可能的 $$m_2$$ 被撞后的运动方向，$$m_1$$ 的运动轨迹在碰撞过程中会有多大的偏转？
2. $$m_1$$ 的初动能有多少比例会在碰撞过程中传递给 $$m_2$$？

这个问题在大学的力学课程中，通常会放到**质心参照系**（centre of mass frame）中处理，结果非常漂亮。我最近也许是闲得过头了，试着在实验室参照系直接硬解出相同的结果，解完后随便写点，就当没白忙活。

## 问题求解

对于碰撞问题，我们可以列出如下**动量守恒**的相关方程：

$$
\begin{aligned}
m_1 u = m_1 v_1 \cos\alpha + m_2 v_2 \cos\beta & \quad (1) \\
0 = m_1 v_1 \sin\alpha - m_2 v_2 \sin\beta & \quad (2) \\
\end{aligned}
$$

我们可以从这两条方程先解出 $$v_1$$ 和 $$v_2$$ 初步的关系式。我们当然可以硬来，不过这里将动量守恒用矢量三角形的方式表示出来，求解 $$v_1$$ 和 $$v_2$$ 会容易得多。

{% include figure.liquid loading="eager" path="assets/img/2D_collision_momentum.jpg" title="" class="img-natural rounded z-depth-1" %}

运用正弦定理，很容易得出

$$
\frac{m_1 v_1}{\sin \beta} = \frac{m_2 v_2}{\sin \alpha} = \frac{m_1 u}{\sin(\alpha + \beta)} \qquad (3)
$$

从而

$$
v_1 = \frac{u\sin\beta}{\sin(\alpha + \beta)}, \quad v_2 = \frac{m_1u\sin\alpha}{m_2\sin(\alpha + \beta)} \qquad (4)
$$

因为碰撞是弹性的，因此撞前和撞后的**总动能**保持不变

$$
\frac{1}{2}m_1 u^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2  \qquad (5)
$$

将 $$v_1$$ 和 $$v_2$$ 的表达式代入进来，稍作整理

$$
\begin{aligned}
m_1 u^2 = m_1 \frac{u^2 \sin^2\beta}{\sin^2(\alpha + \beta)} + m_2 \frac{m_1^2 u^2 \sin^2\alpha}{m_2^2 \sin^2(\alpha + \beta)} \\
\sin^2(\alpha + \beta) = \sin^2\beta + \frac{m_1}{m_2} \sin^2\alpha \qquad (6)
\end{aligned}
$$

我们接下来将 $$m_2$$ 的运动方位角 $$\beta$$ 视作已知参数，来试求出给定 $$\beta$$ 的条件下 $$m_1$$ 的偏转角度 $$\alpha$$。

$$
\begin{aligned}
(\sin\alpha \cos\beta + \cos\alpha \sin\beta)^2 = \sin^2\beta + \frac{m_1}{m_2} \sin^2\alpha \\
\sin^2 \alpha \cos^2\beta + \cos^2\alpha \sin^2\beta +2\sin\alpha\cos\alpha\sin\beta\cos\beta = \sin^2\beta + \frac{m_1}{m_2} \sin^2\alpha \\
\tan^2\alpha\cos^2\beta + \sin^2\beta + \tan\alpha\sin2\beta = \sin^2\beta(1+\tan^2\alpha) + \frac{m_1}{m_2}\tan^2\alpha \\
\tan^2\alpha\left( \cos^2\beta - \sin^2\beta - \frac{m_1}{m_2} \right) + \tan\alpha \sin2\beta = 0\\
\tan\alpha\left(  \cos2\beta - \frac{m_1}{m_2} \right) + \sin2\beta = 0 \\
\boxed{ \tan\alpha = \frac{\sin2\beta}{\frac{m_1}{m_2} - \cos2\beta} } \qquad (7)
\end{aligned}
$$

在上面推导的第3步，我们在方程两边同除以了 $$\cos^2\alpha$$，中间还运用到了诸多三角恒等式进行化简。

显然 $$\beta$$ 可以在可以在 $$0$$ 到 $$\frac{\pi}{2}$$ 的区间内取值，（7）式可以立即给出了相应的 $$ \alpha $$。我用作图工具绘制了不同 $$\frac{m_1}{m_2}$$ 情况下 $$\alpha$$ 随 $$\beta$$ 的变化关系，有兴趣的读者可以自行看图作解读。

{% include figure.liquid loading="eager" path="assets/img/2D_collision_angle_relation.jpg" title="" class="img-natural rounded z-depth-1" %}

## 讨论

我们接下来对（7）式的结果作一点讨论。

### $$m_1 \ll m_2$$ 的情况

$$ \frac{m_1}{m_2} \approx 0$$，（7）式变为：

$$
\tan \alpha \approx \frac{\sin2\beta}{-2\cos2\beta} = -2\tan2\beta
$$

因此有 $$\alpha \approx \pi - 2\beta$$。

这相当于质量可以忽略不计的 $$m_1$$ 挨上了一个它完全撞不动的 $$m_2$$，$$m_2$$ 撞后速度依然微乎其微，而 $$m_1$$ 直接被弹开，入射角跟反射角近似相等。

{% include figure.liquid loading="eager" path="assets/img/2D_collision_hard.jpg" title="" class="img-natural rounded z-depth-1" %}

### $$m_1 < m_2$$ 的一般情况

此时 $$ \frac{m_1}{m_2} - \cos2\beta $$ 可正可负，$$ \tan \alpha$$ 可以取到任意值，因此 $$\alpha$$ 的偏转角度可能取到 $$0$$ 至 $$\pi$$ 之间的任意角度。

特别的，两球之间发生正碰（head-on collision）时，$$\beta \to 0$$，注意到 $$\sin2\beta \to 0$$ 以及 $$ \frac{m_1}{m_2} - \cos2\beta \to \frac{m_1}{m_2} - 1 <0$$，因此 $$ \tan\alpha \to 0^-$$，故 $$\alpha \to \pi$$，即小的质量 $$m_1$$ 在正碰后直接被撞得调转了方向。

另外，如果 $$\beta \to \frac{\pi}{2}$$，$$\sin 2\beta \to 0$$，因此 $$\alpha \to 0$$。这意味着 $$m_1$$ 与 $$m_2$$ 几乎是擦身而过，就是蹭了层皮的碰撞，类似台球中的超级薄球，碰撞后 $$m_1$$ 的运动方向几乎不变。

### $$m_1>m_2$$ 的情况

此时 $$ \frac{m_1}{m_2} - \cos2\beta $$ 恒为正，$$ \tan \alpha$$ 会存在极大值，因此 $$\alpha$$ 的偏转只能在有限的范围以内。

我们来试着找找看 $$\alpha $$ 的极大值。对（7）式微分：

$$
\begin{aligned}
\frac{\mathrm{d}\tan\alpha}{\mathrm{d}(2\beta)}\Bigg|_{\beta = \beta_s} =0 \\
\frac{\left(\frac{m_1}{m_2} - \cos2\beta_s \right) \cos2\beta_s - \sin2\beta_s \sin2\beta_s}{\left(\frac{m_1}{m_2} - \cos2\beta_s \right)^2} = 0 \\
\frac{m_1}{m_2}\cos2\beta_s - 1 =0 \\
\cos 2\beta_s = \frac{m_2}{m_1} \qquad (8)
\end{aligned}
$$

将（8）式代回（7）式中，可以得到 $$\tan\alpha$$ 的最大值

$$
\tan\alpha_\text{max} = \frac{\frac{\sqrt{m_1^2-m_2^2}}{m_1}}{\frac{m_1}{m_2}-\frac{m_2}{m_1}} = \frac{m_2}{\sqrt{m_1^2-m_2^2}} \qquad (9)
$$

不难得到 $$\sin\alpha$$ 的最大值

$$
\boxed{ \sin\alpha_\text{max} = \frac{m_2}{m_1} } \qquad (10)
$$

如果我们拿一个 $$\alpha$$ 粒子轰向一个静止的电子（质量差了约7300倍），可以算出 $$\alpha$$ 粒子的偏转最多不会超过 $$0.008^\circ$$。因此在 $$\alpha$$ 粒子散射实验中，我们可以完全忽略原子中的电子产生的影响。

### $$m_1 = m_2$$ 的情况

此时 $$\frac{m_1}{m_2} = 1$$，（7）式即退化为：

$$
\tan\alpha = \frac{\sin2\beta}{1-\cos2\beta} = \frac{2\sin\beta\cos\beta}{2\sin^2\beta} = \frac{1}{\tan\beta} \qquad (11)
$$

我们立刻发现 $$\alpha + \beta = \frac{\pi}{2}$$：一个小球撞向另一个质量与其相等的静止小球，撞后两个小球的运动方向将总是呈直角！下次打台球不妨多留意一下（我们这里没有考虑给母球加旋转的高级杆法）。

---

我们接下来看看撞前撞后的动能关系。

我们这里关心的问题是：$$m_1$$ 在碰撞过程中损失了百分之多少的动能？或者说，$$m_1$$ 在碰撞中将百分之多少的初动能传递给了 $$m_2$$？

让我们把这个比例称作 $$\gamma$$，它的式子不难列出

$$
\gamma = \frac{\frac{1}{2}m_2v_2^2}{\frac{1}{2}m_1u^2} = \frac{m_2v_2^2}{m_1 u^2} \qquad (12)
$$

将（4）式的结果代入

$$
\begin{aligned}
\gamma = \frac{m_2}{m_1u^2} \times \frac{m_1^2 u^2 \sin^2\alpha}{m_2^2\sin^2(\alpha + \beta)} \\
\gamma = \frac{m_1 \sin^2\alpha}{m_2\sin^2(\alpha + \beta)} \qquad (13) 
\end{aligned}
$$

这东西的化简可谓路漫漫兮，也许有更简便的算法，但反正我是没想到。铁了头算

$$
\begin{aligned}
\gamma & = \frac{m_1 \sin^2\alpha}{m_2 (\sin^2 \alpha \cos^2\beta + \cos^2\alpha \sin^2\beta +2\sin\alpha\cos\alpha\sin\beta\cos\beta)} \\
& = \frac{m_1}{m_2} \left[ \cos^2\beta + \frac{\sin^2\beta}{\tan^2\alpha} + \frac{\sin2\beta}{\tan\alpha} \right]^{-1} \\
& = \frac{m_1}{m_2} \left[ \cos^2\beta + \sin^2\beta \left( \frac{\frac{m_1}{m_2} - \cos2\beta}{\sin2\beta} \right)^2+ \left( {\frac{m_1}{m_2} - \cos2\beta} \right) \right]^{-1} \\
& = \frac{m_1}{m_2} \left[ \cos^2\beta +  \sin^2\beta \frac{ \left( \frac{m_1}{m_2} - \cos2\beta \right)^2}{4\sin^2\beta\cos^2\beta} + \left( {\frac{m_1}{m_2} - \cos2\beta} \right) \right]^{-1} \\
& = \frac{4m_1}{m_2} \cos^2\beta\left[ 4\cos^4\beta +  \left( \frac{m_1}{m_2} - \cos2\beta \right)^2 + 4\cos^2\beta \left( {\frac{m_1}{m_2} - \cos2\beta} \right) \right]^{-1} \\
& = \frac{4m_1}{m_2} \cos^2\beta\left[ 4\cos^4\beta +   \frac{m_1^2}{m_2^2} + \cos^2 2\beta - \frac{2m_1}{m_2}\cos2\beta + {\frac{4m_1}{m_2}\cos^2\beta -  4\cos^2\beta\cos2\beta}  \right]^{-1} \\
& = \frac{4m_1}{m_2} \cos^2\beta\left[ \frac{m_1^2}{m_2^2} + \frac{2m_1}{m_2} (2\cos^2\beta - \cos2\beta) + (4\cos^4\beta +    \cos^2 2\beta -  4\cos^2\beta\cos2\beta) \right]^{-1} \\
\end{aligned}
$$

喘口气先。注意方括号里那一大坨，很恶心是吧？但是接下来马上见证奇迹，里面圆括号括起来的两小坨，它们通通可以化成常数1。第一个的圆括号部分：

$$
2\cos^2\beta - \cos2\beta = 2\cos^2\beta - (2\cos^2\beta- 1) = 1
$$

第二个圆括号的所有东西合体：

$$
\begin{aligned}
& \, 4\cos^4\beta +    \cos^2 2\beta -  4\cos^2\beta\cos2\beta \\
= &\, 4\cos^4\beta +    \cos^2 2\beta -  4\cos^2\beta(\cos^2\beta - \sin^2\beta) \\
= &\, \cos^2 2\beta + 4\sin^2\beta \cos^2\beta \\
= &\, \cos^2 2\beta + \sin^2 2\beta \\
= &\, 1
\end{aligned}
$$

于是这个方括号里的东西居然凑出了一个完全平方！

$$
\begin{aligned}
\gamma & = \frac{4m_1}{m_2} \cos^2\beta \left[ \frac{m_1^2}{m^2_2} +\frac{2m_1}{m_2} +1 \right]^{-1} \\
& = \frac{4m_1}{m_2} \cos^2\beta \left[ \left( \frac{m_1}{m_2} +1\right)^2 \right]^{-1} \\
& = \frac{4m_1}{m_2} \cos^2\beta \left( \frac{m_2}{m_1+m_2} \right)^2 \\
\end{aligned}
$$

最终化简得到 $$m_1$$ 动能损失的百分比为：

$$
\boxed{ \gamma = \frac{4m_1m_2}{(m_1+m_2)^2} \cos^2\beta } \qquad (14)
$$

如果确定 $$m_2$$ 被撞出的角度 $$\beta$$，那么 $$m_1$$ 损失动能的多少将取决于 $$m_1$$ 和 $$m_2$$ 的相对大小关系。

如果 $$m_1\gg m_2$$，$$\gamma \to 0$$。这对应一个超大质量的 $$m_1$$ 碾压式推进，轻如鸿毛的 $$m_2$$ 螳臂挡车，完全无法阻挡 $$m_1$$ 前进的步伐，故 $$m_1$$ 几乎没有动能损失。

如果 $$m_1 \ll m_2$$，同样也有 $$\gamma \to 0$$。这对应一个小质量的 $$m_1$$ 一脑门撞上一个超大吨位的 $$m_2$$，$$m_2$$ 没被撞动，自己被反弹了出去，碰撞中速度方向改变了，但速度大小没啥大的变化，因此动能损失也很少。

让我们再回到（13）式，来讨论下动能损失最大会在什么情况出现。

很显然，考虑 $$\beta$$ 的变化，则在正碰（$$\beta=0$$）时，$$m_2$$ 可以获得最多的动能，$$m_1$$ 损失的动能最大。

再考虑 $$m_1$$ 和 $$m_2$$ 的相对大小关系的影响，注意到：

$$
(m_1+m_2)^2 - 4m_1m_2 = (m_1-m_2)^2 \geq 0
$$

以上不等式当且仅当 $$m_1=m_2$$ 时才取得等号，这也对应着 $$\gamma$$ 的极大值。

$$
\gamma \leq \cos^2\beta \leq 1
$$

这个结果当然不言自明：能够损失的动能不可能超过100%。而我们的分析表明，这种极端情况只会在 $$m_1=m_2$$ 及 $$\beta = 0$$ 同时成立时才会出现，即只有迎面撞向一个质量相当的静止小球，才可能在撞后立刻静止。原先运动小球所有的初动能全部转移给了原先静止的小球，两者发生了速度交换。打台球时的定杆大约就是这么个道理。

