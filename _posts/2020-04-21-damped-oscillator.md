---
layout: post
title: "简谐振动之阻尼振动"
date: 2020-04-21 08:00:00
description: "数学上推导欠阻尼、过阻尼和临界阻尼的判据和运动方程"
tags: physics a-level mechanics oscillators
categories: physics a-level engineering
---

## 阻尼振动运动方程

续[上一期的文章]({{site.baseurl}}/blog/2020/simple-harmonics/)，我们今天接着来撸一撸**带阻尼的简谐振子**（damped oscillator）。

我们假设振子在运动过程中受到的阻力仅与它的运动速度有关，并且阻力的大小简单的正比于速度的大小，即 $$f=\alpha v$$，这里 $$\alpha$$ 是一个描述阻力强弱的参数。结合简谐振子原本就受到的和位移成正比的回复力，我们可以写下阻尼振动的运动方程：

$$ ma = -m\omega^2 x - \alpha v$$

注意这里的两个负号：第一个负号是因为回复力的方向和位移相反，第二个负号是因为阻力的作用方向和运动速度方向相反。顺手将加速度 $$a$$ 和速度 $$v$$ 写成微分形式，我们得到

$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} + \frac{\alpha}{m} \frac{\mathrm{d}x}{\mathrm{d}t} + \omega^2 x = 0 $$

不妨定义 $$\beta = \frac{\alpha}{2m}$$，可以理解为描述阻力相对强弱的一个指标，这样运动方程就可以改写成：

$$\boxed{ \frac{\mathrm{d}^2x}{\mathrm{d}t^2} + 2\beta \frac{\mathrm{d}x}{\mathrm{d}t} + \omega^2 x = 0 }$$

这依然是一个常系数的微分方程。求解之后，就可以得到振子的位移随时间的变化关系。在下面的讨论中，我们假定振子在 $$t=0$$ 时刻时，初始位移为 $$x(0) = x_0$$，初始速度为 $$v(0) = 0$$，即拖到偏离平衡位置的某个地方从静止释放。可以证明，满足这两个初始条件的微分方程的解将具有唯一的形式。

我们需要找的解 $$x(t)$$，其自身、一阶导数、二阶导数一家亲，可以互相抵消搞出个零，所以可以猜想解依然会具有 $$\mathrm{e}^{\lambda t}$$ 的形式。将试解（ansatz） $$x(t)=A\mathrm{e}^{\lambda t}$$ 代入要求解的微分方程中，不难得到：

$$ (\lambda^2 + 2 \beta \lambda + \omega^2)A\mathrm{e}^{\lambda t} =0 $$

以上关系要对任意 $$t$$ 都成立，这便要求待定系数 $$\lambda$$ 满足：$$\lambda^2 + 2 \beta \lambda + \omega^2 = 0$$。习惯上这被称作微分方程的特征方程（characteristic equation）。容易解出，这个二次方程的根为

$$\boxed{ \lambda = -\beta \pm \sqrt{\beta^2 - \omega^2} }$$

根号下的 $$\beta^2 - \omega^2$$ 可能大于0，小于0，或者等于0。**这三种情况分别将对应于过阻尼（over damping）、欠阻尼（light damping）和临界阻尼（critical damping）的振动行为**，我们接下来进行分类讨论。

## 过阻尼（over damping）

若 $$\beta>\omega$$，则特征根 $$\lambda_1 = - \beta + \sqrt{\beta^2-\omega^2}$$，$$\lambda_2 = - \beta - \sqrt{\beta^2-\omega^2}$$。运动方程的解于是就可以写成如下形式：

$$ x(t) = A_1 \mathrm{e}^{\lambda_1 t} + A_2 \mathrm{e}^{\lambda_2 t} $$

$$A_1$$, $$A_2$$ 是两个任意实数，取值会由振子运动的初始条件决定。注意到 $$\sqrt{\beta^2-\omega^2}<\beta$$，故 $$\lambda_1, \lambda_2 <0$$，所以方程中的两项均随时间指数衰减。

由于 $$\beta$$ 是阻力强度的表征，现在我们讨论的情况无非是阻力比较大时振子的行为。我们不妨来考察阻力大得离谱时的特殊情况，此时会有 $$\beta \gg \omega$$。可以作如下的近似：

$$\sqrt{\beta^2 - \omega^2} = \beta \left(1-\frac{\omega^2}{\beta^2}\right)^{\frac{1}{2}} \approx \beta (1-\frac{1}{2}\frac{\omega^2}{\beta^2})$$

$$ \sqrt{\beta^2 - \omega^2} \approx \beta - \frac{\omega^2}{2\beta}$$

$$\lambda_1 \approx -\frac{\omega^2}{2\beta} $$

又注意到 $$|\lambda_2|>|\lambda_1|$$，所以相比方程中的第一项，第二项的衰减会来得非常快。当时间 $$t$$ 充分大时，位移 $$x(t)$$ 的取值主要由方程中的第一项决定。所以阻尼振子的位移随时间的关系就近似为：

$$ \boxed{x(t) \approx x_0 \mathrm{e}^{-\frac{\omega^2}{2\beta}t}}$$

其中我们将常数 $$A_1$$ 改写成了 $$x_0$$，因为它所代表的物理意义就是振子在 $$t=0$$ 时刻的初始位移。方程告诉我们，此后**振子的位移将随时间作指数衰减**。$$\beta$$ 越大，或者 $$\omega$$ 越小，都会有更慢的衰减。这背后的物理意义其实也很容易理解：$$\beta$$ 越大说明有很大的阻力，这显然会阻碍振子无法愉快地回去平衡位置；$$\omega$$ 越小则说明振子自身的回复力比较小，回去平衡位置的意愿不是很强，那么很自然它就会在外边游荡着，磨磨唧唧的，慢慢悠悠地蹭回平衡位置去。但无论如何，过阻尼条件下，振子的振动行为已经被完全破坏了，可怜的振子就像陷入泥潭，不用痴心妄想还能来回晃悠，最终能回到平衡位置也了不得了。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/over-damping.jpg" title="Over Damping" class="img-natural rounded z-depth-1" %}
    </div>
</div>


## 欠阻尼（light damping）

若 $$\beta<\omega$$，则特征根会是复数根：$$\lambda= - \beta \pm i\omega'$$，其中我们记 $$\omega' = \sqrt{\omega^2-\beta^2}$$。运动方程的解就可以写成如下形式：

$$ x(t) = A_1 \mathrm{e}^{(-\beta + i\omega')t} + A_2 \mathrm{e}^{(-\beta - i\omega')t} $$

$$ x(t) = \mathrm{e}^{-\beta t} \left(A_1 \mathrm{e}^{i\omega't} + A_2 \mathrm{e}^{-i\omega't} \right)$$

这里的 $$A_1$$, $$A_2$$ 可以是任意复数，但是位移函数 $$x(t)$$ 要有意义，它只能取实数值，所以必须要求 $$x^* = x$$。接下来的处理跟求解理想简谐振子的过程非常相似，在这里我们直接给出结果。可以证明，仅当 $$A_2 = A_1^*$$ 时，$$x(t)$$ 才是实数解。经过一翻常数的重新定义，我们最终可以将方程的解表示成：

$$ \boxed{x(t) = x_0 \mathrm{e}^{-\beta t} \cos(\omega't +\phi)}$$

对于中间省略掉的若干步骤有疑问的读者，可以参考我的上一篇公众号文章。

不难验证，符合 $$x(0)=x_0$$, $$v(0)=0$$ 的解具有振幅和初始相位：

$$ x_0 = \frac{\sqrt{\omega'^2+\beta^2}}{\omega'} \qquad \sin \phi = \frac{-\beta}{\sqrt{\omega'^2+\beta^2}} \qquad \cos\phi = \frac{\omega'}{\sqrt{\omega'^2+\beta^2}}$$

我们可以用函数作图工具绘制出欠阻尼振动的 $$x(t)$$ 图像。这里给出了三个不同的 $$\beta$$ 取值对应的 $$x(t)$$ 图像：

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/under-damping.jpg" title="Light Damping" class="img-natural rounded z-depth-1" %}
    </div>
</div>

结合图像，我们能更直观地去试着理解这个解的物理意义。既然 $$\beta$$ 描述的是阻力的相对强度，$$\beta<\omega$$ 意味着我们现在面对的是阻力并不强的情形。这时振子大体上依然随时间作周期性振荡，但在位移函数中，多出来了一个指数衰减的因子 $$\mathrm{e}^{-\beta t}$$。因为 cosine 函数前面乘的东西可以被理解成振动的幅度（amplitude），由此我们得知，**欠阻尼振动的振幅将会随时间指数衰减**。阻尼越小，振幅降低就会越慢。

另一方面，振动频率从原来完全无阻尼时的 $$\omega$$ 变成了 $$\omega'$$。注意到 $$\omega' = \sqrt{\omega^2-\beta^2} < \omega$$，所以**有轻微阻力时，振动频率会略微降低，周期则会有所增加**。更特别的，当 $$\beta \ll \omega$$，即阻力微乎其微时，$$\omega'\to\omega$$，阻尼振动的频率跟无阻尼的理想振子的频率大抵相当。也就是说，**欠阻尼的情形其实并不显著地改变振动的频率**。这其实也不难理解，尽管在阻力作用时，振子在振动过程中，运动的速度会降低，但由于振幅减少，因此每次折返跑都可以偷懒少走一点，两方面因素抵消，所以完成一次振动所需要的时间变化不大。在上面的图像中，大家也可以将欠阻尼振动曲线和无阻尼的情况做比对。



## 临界阻尼（critical damping）

最后一种情形也是很有意思的一种情况：$$\beta = \omega$$。这时特征方程将给出重根（repeated root）：$$\lambda_1=\lambda_2=-\beta$$

这时，微分方程的解除了可以是 $$\mathrm{e}^{-\beta t}$$ 的形式，还会神奇地冒出一个 $$t\mathrm{e}^{-\omega t}$$ 的形式，不相信的话大家可以自行代回原方程去验证。所以临界阻尼下，位移随时间的变化关系就变成了：

$$ x(t) = (A+Bt)\mathrm{e}^{-\beta t} $$

很容易继续算到，速度随时间的关系会是：

$$v(t) = \frac{\mathrm{d}x}{\mathrm{d}t} = (-\beta A - \beta B t + B) \mathrm{e}^{-\beta t}$$

联系到初始条件 $$x(0)= A = x_0$$，$$v(0) = -\beta A + B = 0$$，可以解出 $$A=x_0$$，$$B=\beta x_0$$。于是符合初始条件的解为：

$$\boxed{ x(t) = (1+\beta t)x_0 \mathrm{e}^{-\beta t} }$$

同样用作图工具，我们可以将临界阻尼与过阻尼、欠阻尼这三类情况绘制在同一张图上。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/damped-oscillations.jpg" title="Damped Oscillations" class="img-natural rounded z-depth-1" %}
    </div>
</div>


从图中可以看出，**临界状态下，振子几乎是以最快速度赶回了平衡位置，然后就老老实实呆着不动，也不再继续振荡了**。

这其实是临界阻尼标志性的特征，在很多的工程设计中，都会利用这个特性来实现特定的功能，不少避震的装置中就会采用临界阻尼的设计。比如现实生活中，楼道里常会见到可以自动关闭的门，这些门的扭转弹簧同时会配有阻尼铰链，阻尼的大小会非常接近临界阻尼，这样门就可以以最快的速度自动关闭，而又不至于还在那里一个劲地来回振荡。

