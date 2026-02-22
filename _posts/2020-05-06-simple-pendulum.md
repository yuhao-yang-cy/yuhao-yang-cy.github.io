---
layout: post
title: "单摆周期的公式推导"
date: 2020-05-06 11:25:00
description: "单摆周期的积分表达式及逐级近似计算"
tags: physics a-level mathematics mechanics
categories: physics mathematics a-level
pretty_table: true
---

记单摆摆球质量为 $$m$$，摆线长度为 $$r$$，摆动过程中偏离竖直方向的夹角为 $$\theta$$。若摆动的最大幅度为 $$\theta_0$$，我们来试求摆动周期 $$T$$。

{% include figure.liquid loading="eager" path="assets/img/pendulum.jpg" title="" class="img-natural rounded z-depth-1" %}


## 周期的积分表达式

不考虑空气阻力等非保守力导致的能量损耗，则摆动过程中总机械能守恒

$$
\frac{1}{2}mv^2 + mgr(1-\cos\theta) = E \qquad (1)
$$

上式中我们将势能零点取在了最低点处，即平衡位置处的势能为零。

在 $$ \theta = \theta_0 $$ 时，动能为零，机械能为纯势能，我们很容易写出总能量 $$E$$ 的一个表达式：

$$
E = mgr(1-\cos\theta_0) \qquad (2)
$$

联立（1）和（2），就可以解出速度的关系式：

$$
v = \sqrt{2gr(\cos\theta - \cos\theta_0)} \qquad (3)
$$

另外，我们还可以将速度写成如下的形式：

$$
v = \omega r = \frac{\mathrm{d\theta}}{\mathrm{d}t}\times r \qquad (4)
$$

将（4）代入（3）中，我们可以得到

$$
\begin{aligned}
\frac{\mathrm{d\theta}}{\mathrm{d}t} & = \sqrt{ \frac{2g}{r} (\cos\theta - \cos\theta_0) } \\
\mathrm{d}t  & = \sqrt{ \frac{r}{2g} } \frac{\mathrm{d}\theta}{\sqrt{ \cos\theta - \cos\theta_0} }  \qquad (5)
\end{aligned}
$$

分离变量后，我们可以两边积分。左边对 $$t$$ 的积分代表摆动过程的时间，右边对 $$\theta$$ 积分的结果自然就应该给出这个时间的计算关系式。我们考虑单摆从 $$\theta=-\theta_0$$ 摆动到 $$\theta=+\theta_0$$ 的过程，所需的时间等于周期 $$T$$ 的一半。于是我们可以写下 $$T$$ 的公式：

$$
\begin{aligned}
& T = 2\times \int_{-\theta_0}^{\theta_0} \sqrt{ \frac{r}{2g} } \frac{\mathrm{d}\theta}{\sqrt{ \cos\theta - \cos\theta_0} } \\
& \boxed{ T = \sqrt{\frac{2r}{g}}\int_{-\theta_0}^{\theta_0} \frac{\mathrm{d}\theta}{\sqrt{\cos\theta - \cos\theta_0}} }\qquad (6)
\end{aligned}
$$

若能将（6）式的积分接出来，就可以得到单摆周期的精确公式。但问题是这个积分的结果并不能用初等函数表示，所以光有这个漂亮的积分式并不解决问题。

不过如果我们关心的是摆幅并不算大的振动，那么就可以利用一些近似方法来处理这个积分，得到近似的结果。

## 一级近似

在 $$\theta < 1$$ 时，有 $$\cos\theta$$ 的 McLaurin-Taylor 展开： 

$$
\cos\theta = \sum_{n=0}^\infty \frac{(-1)^n \theta^{2n}}{(2n)!} = 1 - \frac{1}{2}\theta^2+\frac{1}{24}\theta^4 + \cdots \qquad (7)
$$

为了处理（6）式中的被积函数，最粗暴的近似可以对 $$\cos\theta$$ 和 $$\cos\theta_0$$ 只保留到展开式中的前2项，于是

$$
\begin{aligned}
(\cos\theta-\cos\theta_0)^{-\frac{1}{2}} & \approx \left[ \frac{1}{2}(\theta_0^2 - \theta^2) \right]^{-\frac{1}{2}} \\
& = \frac{\sqrt{2}}{\sqrt{\theta_0^2-\theta^2}}\qquad (8)
\end{aligned}
$$

代回（6）式后，周期的积分变成

$$
T \approx 2\sqrt{\frac{r}{g}} \int_{-\theta_0}^{\theta_0} \frac{\mathrm{d}\theta}{\sqrt{\theta_0^2-\theta^2}} \qquad(9)
$$

这个积分并不困难，常规操作作三角换元就可以很快搞定了。令 $$\theta = \theta_0\sin t$$，则 $$\sqrt{\theta_0^2-\theta^2}=\theta_0\cos t$$，$$\mathrm{d}\theta = \theta_0\cos t\mathrm{d}t$$，积分上下限 $$\theta = \pm \theta_0 \to t=\pm \frac{\pi}{2}$$。于是有

$$
\begin{aligned}
T & \approx 2\sqrt{\frac{r}{g}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{\theta_0\cos t\mathrm{d}t}{\theta_0\cos t} \\
& = 2\sqrt{\frac{r}{g}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \mathrm{d}t \\
& = 2\sqrt{\frac{r}{g}} \times \Big[ t \Big]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \qquad (10)
\end{aligned}
$$

我们就得到了大家可能都比较熟悉的单摆周期公式：

$$
\boxed { T\approx 2\pi\sqrt{\frac{r}{g}} } \qquad (11)
$$

## 二级近似

当然，我们可以将近似做得更精细一些。对 $$\cos\theta$$ 和 $$\cos\theta_0$$ 作展开时，我们可以取到展开式（7）的第3项，然后进行一通操作：

$$
\begin{aligned}
(\cos\theta-\cos\theta_0)^{-\frac{1}{2}} & \approx \left[ \frac{1}{2}(\theta_0^2 - \theta^2) - \frac{1}{24}( \theta_0^4 - \theta^4 )\right]^{-\frac{1}{2}} \\
& = \left[ \frac{1}{2}(\theta_0^2-\theta^2)\left( 1 - \frac{\theta_0^2 + \theta^2}{12}\right) \right]^{-\frac{1}{2}} \\
& = \frac{\sqrt{2}}{\sqrt{\theta_0^2-\theta^2}} \left( 1 - \frac{\theta_0^2 + \theta^2}{12}\right)^{-\frac{1}{2}} \qquad (12)
\end{aligned}
$$

圆括号里的这一坨，我们可以接着用二项式展开去作近似：

$$
\left( 1 - \frac{\theta_0^2 + \theta^2}{12}\right)^{-\frac{1}{2}} \approx 1 + \frac{\theta_0^2+\theta^2}{24} \qquad (13)
$$

把这些近似的鬼玩意儿一股脑通通塞回（6）式，我们得到：

$$
T \approx 2\sqrt{\frac{r}{g}} \int_{-\theta_0}^{\theta_0} \left(1 + \frac{\theta_0^2+\theta^2}{24}\right)\frac{\mathrm{d}\theta}{\sqrt{\theta_0^2-\theta^2}} \qquad(14)
$$

同样作三角换元，令 $$\theta = \theta_0\sin t$$，有

$$
\begin{aligned}
T & \approx 2\sqrt{\frac{r}{g}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \left( 1 + \frac{\theta^2_0+\theta_0^2\sin^2 t}{24}\right) \frac{\theta_0\cos t\mathrm{d}t}{\theta_0\cos t} \\
& = 2\sqrt{\frac{r}{g}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \left[ 1 + \frac{\theta_0^2}{24}(1+\sin^2 t)\right]\mathrm{d}t \\
& = 2\sqrt{\frac{r}{g}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \left[ 1 + \frac{\theta_0^2}{24}\left( \frac{3}{2} - \frac{\cos 2t}{2} \right) \right]\mathrm{d}t \\
& = 2\sqrt{\frac{r}{g}} \left[ t + \frac{\theta_0^2}{16} t - \frac{\theta_0^2}{96}\sin2t\right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \qquad (15)
\end{aligned}
$$

最后进行一些不算繁琐的运算后，我们求得单摆的周期近似为：

$$
\boxed { T \approx 2\pi \sqrt{\frac{r}{g}} \left(1 + \frac{\theta_0^2}{16}  \right) } \qquad(16)
$$

## 一些讨论

以上推导中，我们最多保留到了 $$\cos\theta$$ 展开式的前3项、二项式展开的前2项。如果有谁觉得自己头铁，可以试着继续保留后面的高次项，从头再算一波，近似结果会来得更精确。我查阅到的结果如下：

$$
T=2 \pi \sqrt{\frac{r}{g}}\left(1+\frac{1}{16} \theta_{0}^{2}+\frac{11}{3072} \theta_{0}^{4}+\frac{173}{737280} \theta_{0}^{6}+\frac{22931}{1321205760} \theta_{0}^{8}+\cdots\right)
$$

反正我是不大有勇气再算下去的。

显然这个推导的结果，包括（16）式的结果，在 $$\theta_0 \to 0$$ 时，都会很自然地会退化成（11）式

$$
T \approx 2\pi \sqrt{\frac{r}{g}} \qquad(11)
$$

这个结果其实在很多高中教材中都有介绍，常规的证明方法是先证明单摆在小角度近似下作简谐振动（simple harmonic oscillation），然后通过解运动方程获得角频率（angular frequency）的信息，从而推出周期。当然，猜想角频率 $$\omega$$ 应该取决于诸如摆球质量 $$m$$、摆线长度 $$r$$ 以及重力加速度 $$g$$，通过量纲分析（dimensional analysis），也能大致能混出这个结果，这个推导比较简单，留给有兴趣的同学作为练习。

一般我们认为在 $$5^\circ \sim 10^\circ$$ 的角振幅内，单摆的周期都可以很好地用（11）式来预测，（16）式相当于在更高的精度上对（11）式做了一项修正。

我们不妨计算不同角振幅下（11）和（16）两式的偏差，其中差的无非就是 $$\frac{\theta_0^2}{16}$$ 这个修正项。


| $$ \theta_0 /^\circ$$ | $$ \theta_0/\text{rad} $$ | $$ \displaystyle \frac{\theta_0^2}{16} $$ |
| :-------------------: | :-----------------------: | :---------------------------------------: |
|           5           |          0.08727          |                  0.00048                  |
|          10           |          0.17453          |                  0.00190                  |
|          20           |          0.34907          |                  0.00762                  |
|          30           |          0.52360          |                  0.01713                  |
|          50           |          0.87266          |                  0.04760                  |



好像就算到了$$50^\circ$$的振幅，误差也不过不到5%，也没有很可怕。

所以我们算了这么一通，究竟图什么呢？（手动狗头）