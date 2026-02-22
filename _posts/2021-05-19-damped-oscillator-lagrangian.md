---
layout: post
title: "分析力学读书笔记：阻尼振子的 Lagrangian"
date: 2021-05-19 11:09:00
description: 受 Herbert Goldstein 的经典力学第2章的一个习题的启发，对阻尼振动奇怪的理解又增加了
tags: physics mechanics oscillators
categories: physics theoretical-physics
---

> 这篇读书笔记是受 Herbert Goldstein 的经典力学第2章的一个习题的启发，瞎算一通再瞎写一通。
> 
> 嗯，对阻尼振动奇怪的理解又增加了。

考虑如下的 Lagrangian：

$$
L(x,\dot{x}) = \mathrm{e}^{\frac{\gamma t}{m}} \left( \frac{1}{2}m\dot{x}^2-\frac{1}{2}kx^2\right) \tag{1}
$$

$$L(x,\dot{x})$$ 关于 $$x$$ 和 $$\dot{x}$$ 的偏微分分别为：

$$
\begin{aligned}
\frac{\partial L}{\partial \dot{x}} &= \mathrm{e}^{\frac{\gamma t}{m}}\cdot m\dot{x} \\
\frac{\partial L}{\partial \dot{x}} &= -\mathrm{e}^{\frac{\gamma t}{m}}\cdot kx
\end{aligned}
$$

利用 Euler-Lagrange 方程 $$\frac{\mathrm{d} }{\mathrm{d} t}\frac{\partial L}{\partial \dot{x}} - \frac{\partial L}{\partial {x}}=0$$，可以得出关于 $$x$$ 的运动方程：

$$
\mathrm{e}^{\frac{\gamma t}{m}} \left( m\ddot{x} + \gamma \dot{x} +kx\right) = 0
$$

由于 $$\mathrm{e}^{\frac{\gamma t}{m}}>0$$，因此上面的运动方程相当于

$$
m\ddot{x} = - \gamma \dot{x} -kx \tag{2}
$$

这可以被视作一个受阻力影响的简谐振子。其中，$$-kx$$ 可以视为和位移大小成正比的回复力，$$-\gamma\dot{x}$$ 可以理解为作用在振子上的阻力，其大小和运动速度成正比，并且在运动的反方向上作用。

比较有意思的是，$$(1)$$ 式给出的 Lagrangian 并没有引入耗散函数，但运动方程却描述了一个受到阻力影响的振动物体。

我们还可以对 $$(1)$$ 式给出的 Lagrangian 作进一步的操作。可以证明，如果进行形如 $$s=s(x)$$ 的坐标变换，则以坐标 $$s$$ 形式写出的 Lagrangian 一样可以通过相同形式的 Euler-Lagrange 方程导出正确的运动方程。具体地，如果我们设 $$s=\mathrm{e}^{\frac{\gamma t}{2m}}x$$，则有 $$x=\mathrm{e}^{-\frac{\gamma t}{2m}} s$$ 及 $$\dot{x}=\mathrm{e}^{-\frac{\gamma t}{2m}} \left( \dot{s} - \frac{\gamma}{2m}s\right)$$。于是体系的 Lagrangian 可以改写成：

$$
L(s,\dot{s}) = \frac{1}{2}m\left( \dot{s} -\frac{\gamma}{2m}s\right) ^2-\frac{1}{2}ks^2 \tag{3}
$$

$$L(s,\dot{s})$$ 关于 $$s$$ 和 $$\dot{s}$$ 的偏微分分别为：

$$
\begin{aligned}
\frac{\partial L}{\partial \dot{s}} &= m\left( \dot{s} -\frac{\gamma}{2m}s\right) = m\dot{s} - \frac{\gamma}{2}s\\
\frac{\partial L}{\partial \dot{s}} &= -\frac{\gamma}{2}\left( \dot{s} -\frac{\gamma}{2m}s\right)-ks = -\frac{\gamma}{2} \dot{s} - \left( k-\frac{\gamma^2}{4m}\right)s
\end{aligned}
$$

套进 Euler-Lagrange 方程 $$\frac{\mathrm{d} }{\mathrm{d} t}\frac{\partial L}{\partial \dot{s}} - \frac{\partial L}{\partial {s}}=0 $$ 将得到：

$$
m\ddot{s} + \left( k-\frac{\gamma^2}{4m}\right)s = 0 \tag{4}
$$

与 $$(2)$$ 式相比，$$(4)$$ 式的形式上更为简单：它少掉了一个 $$\dot{s}$$ 的一阶项，以至于直接变成了一个理想的简谐振子的运动方程。这个方程的解就是简单的三角函数。不难验证，这个二阶微分方程的解可以取作：

$$
s(t) = s_0 \sin\left( \sqrt{\frac{k}{m}-\frac{\gamma^2}{4m^2}}\cdot t + \phi \right) \tag{5}
$$

相位常数 $$\phi$$ 应由初始条件决定，但为了讨论方便，我们粗暴设 $$\phi=0$$。逆变换回到坐标 $$x$$，立即得到：

$$
x(t) = s_0 \mathrm{e}^{-\frac{\gamma t}{2m}} \sin\left( \sqrt{\frac{k}{m}-\frac{\gamma^2}{4m^2}}\cdot t\right) \tag{6}
$$

可以验证上式确实可以满足 $$(3)$$ 式的运动方程。当然，$$(3)$$ 式并不是一个很难解的二阶微分方程，直接解也是很常规的操作。我们现在取的这个特殊的解，其实对应的是一种特殊的初始条件。不难看出，这个初始条件相当于在 $$t=0$$ 时刻振子以某个不为零的初速度 $$v_0$$ 正好通过平衡位置 $$x=0$$ 处，而方程的解中的振幅项 $$s_0$$ 需满足 $$v_0 = s_0 \sqrt{\frac{k}{m}-\frac{\gamma^2}{4m^2}}$$

回到 Lagrangian 的讨论。我们可以注意到对比于开始给出的 $$x$$ 坐标下的 Lagrangian，$$s$$ 坐标下的 Lagrangian 不再显含时间 $$t$$。这意味着前方即将发现这个振动体系的一个守恒量——体系的 Hamiltonian 会是守恒的。它原先在 $$x$$ 坐标下躲得挺好，而切换到 $$s$$ 坐标下我们就能更精准地捕捉到它。我们可以算出体系的 Hamiltonian：

$$
\begin{aligned}
H(s,\dot{s}) &= \dot{s}\frac{\partial L}{\partial \dot{s}}-L \\
&=  m\dot{s} \left( \dot{s} -\frac{\gamma}{2m}s\right) - \frac{1}{2}m\left( \dot{s} + \frac{\gamma}{2m}s\right) ^2-\frac{1}{2}ks^2 \\
&= \frac{1}{2}m \dot{s}^2 + \frac{1}{2}\left(k-\frac{\gamma^2}{4m}\right)s^2
\end{aligned}
$$

这个守恒量看起来有点像一个动能项加上一个势能项。切换回 $$x$$ 坐标，我们有：

$$
\begin{aligned}
H &= \frac{1}{2}m \left[ \mathrm{e}^{\frac{\gamma t}{2m}} \left( \dot{x} + \frac{\gamma}{2m}x\right) \right]^2 + \frac{1}{2}\left(k-\frac{\gamma^2}{4m}\right) \left( \mathrm{e}^{\frac{\gamma t}{2m}} x \right)^2 \\
&= \left( \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2 + \frac{1}{2}\gamma x \dot{x} \right) \mathrm{e}^{\frac{\gamma t}{m}}
\end{aligned}
$$

这样一个守恒量直接在 $$x$$ 坐标下恐怕是挺难被发现的。我们当然也可以头铁地验证一波，把 $$(6)$$ 式中 $$x(t)$$ 的解的具体形式代进来爆算一通，神奇地消除、合并掉一堆三角函数项后，可以验证：

$$
H=\left( \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2 + \frac{1}{2}\gamma x \dot{x} \right) \mathrm{e}^{\frac{\gamma t}{m}} = \frac{1}{2}\left( k-\frac{\gamma^2}{4m}\right) s_0^2
$$

它确实是一个常数。

在阻尼趋于零的完全理想情况下，即当 $$\gamma\to0$$ 时，可以看到此时 $$H= \frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2$$ 就是理想简谐振子的总能量（包含动能和势能两部分），而且总能量是不随时间改变的，体系的 $$(x,\dot{x})$$ 随时间演化的相图是一个封闭的正椭圆。

{% include figure.liquid loading="eager" path="assets/img/phase-diag-ideal-shm.png" title="Phase Diagram of An Ideal Simple Harmonic Oscillator" class="img-natural rounded z-depth-1" %}

但是，我们现在的 Lagrangian 的写法并不是常规的 $$L(x,\dot{x})=T-V$$，它给出的 Hamiltonian 也并不能简单地就当作能量。我们只能从能量的角度来试着理解它的行为。注意到括号中的项 $$\frac{1}{2}m\dot{x}^2 + \frac{1}{2}kx^2 + \frac{1}{2}\gamma x \dot{x}$$ 表现得有点像体系的总能量，就是多出来了一个 $$\frac{1}{2}\gamma x \dot{x}$$ 的交叉项，正是在有阻尼情况下才出现的额外的项，这会让体系的相图从一个正椭圆变成一个歪椭圆。如果我们把这一堆的总和姑且视作总能量，那么当有阻尼时，体系的总能量要乘上一个随时间指数增长的因子才是常数，这意味着体系的总能量在随时间作指数衰减，逐渐降为零，而体系的 $$(x,\dot{x})$$ 随时间演化的相图大约是沿着不断缩小的斜椭圆轨道慢慢趋近于 $$(x,\dot{x})=(0,0)$$ 的原点。

{% include figure.liquid loading="eager" path="assets/img/phase-diag-damped.png" title="Phase Diagram of An Damped Oscillator" class="img-natural rounded z-depth-1" %}

### Reference

*Herbert Goldstein, CharlesPoole, & John Safko*, **Classical Mechanics (3rd Edition) (2001)**, Exercise 2.16
