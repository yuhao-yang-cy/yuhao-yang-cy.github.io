---
layout: post
title: "无阻尼受迫振动：振幅、相位及共振"
date: 2020-04-23 08:17:00
description: "我们讨论一个简谐振子在一个周期性的外加驱动力影响下，受迫振动行为会有如何的响应"
tags: physics a-level mechanics oscillators
categories: physics a-level engineering
---

## 无阻尼受迫振动

之前的两篇文章，我们推导了理想简谐振子以及阻尼振动的运动方程。在这篇中，我们将讨论**一个简谐振子在一个周期性的外加驱动力（driving force）影响下，受迫振动（forced oscillation）行为会有如何的响应**。最近在 A-Level 物理中，部分读者可能已经熟悉如下的结论：

> 对于一个受到外力驱动的简谐振子，如果外力的频率和振子的自然频率（natural frequency）相近，则受迫振动的振幅的幅度将会达到最大值，这个现象称作共振（resonance）。对于没有阻尼（undamped）的情况，振幅将趋于无穷大。 

另外，在一些教材里，对于无阻尼受迫振动，还会给出一个也挺有意思的结论：

> - 若驱动力频率小于振子的自然频率，振动与驱动力同相位（in phase）；
>
> - 若驱动力频率大于振子的自然频率，振动与驱动力反相（out of phase）；
>
> - 若驱动力频率等于振子的自然频率，振动落后于驱动力 $$\frac{\pi}{2}$$ 的相位差。

粗略想来，无阻尼受迫振动的这些特点似乎也不难理解。振子最喜欢以它的自然频率振动，所以如果外加了一个正对它胃口的驱动力，这一个愿打一个愿挨，大家步调一致，就可以搞出很大的振幅。

而对于受迫振动的相位问题，前两条的结论似乎也很容易说得通。驱动力频率太低，振子就有资本嫌振动太慢，不费吹灰之力就能跟住驱动力。驱动力频率太高，振子提着裤子都追不上，所以总是要落后个半拍。

但是要是问起受迫振动的振幅究竟有多大？共振时为什么偏偏是这么个令人疑惑的 $$\frac{\pi}{2}$$ 的相位差？驱动力频率小于/大于自然频率时真的是严格同相/反相？要解答这些问题，大概就需要数学硬钢，而不是直觉来指引我们正确的物理图像了。

下面我们来试着推导上面的几条结论。

## 运动方程

无阻尼条件下的受迫简谐振子，受到的作用包括固有的回复力（restoring force）和周期性驱动力。体系的运动方程可以写作：

$$ m\ddot{x} = -m\omega_0^2 x + F_0\cos\omega t $$

为了书写方便，定义 $$f=F_0/m$$，于是这个方程可以写成一个**非齐次的二阶微分方程**（second-order differential equation）。

$$ \boxed{ \ddot{x} + \omega_0^2 x = f \cos\omega t  } \quad (\#) $$

对应齐次方程的通解（complementary function）可以写作：$$x_c(t)=x_0\cos(\omega_0t+\phi)$$，其中振幅 $$x_0$$ 和相位 $$\phi$$ 均取决于振子的初始条件。在我们的讨论中，**我们设定开始施加驱动力之前，体系处于静止的平衡状态**，即 $$x(0)=0$$，$$v(0)=0$$，之后振子受外力影响从而位移开始随时间变化。

我们接下来要试着找到非齐次方程的特解（particular integral），记作 $$x_p(t)$$。**(#)式的通解可以写成齐次方程的通解加上非齐次方程的特解**：$$x(t) = x_c + x_p$$，结合初始条件，确定下待定参数 $$x_0$$ 和 $$\phi$$，我们就可以找到符合条件的唯一解。

---

## 情况一：$$\omega \neq \omega_0$$

此时(#)式的特解将具有形式：$$x_p = A\sin\omega t + B\cos\omega t$$。将其代入原方程(#)，可以得到：

$$ (\omega_0^2 - \omega^2)A \sin\omega t + (\omega_0^2 - \omega^2 )B\cos \omega t = f \cos \omega t $$

比较 $$\sin \omega t$$ 和 $$\cos \omega t$$ 的系数，可以求出待定参数：

$$ A= 0, B=\frac{f}{\omega_0^2 - \omega^2} $$

所以(#)式的特解为：

$$ \boxed{ x_p(t) = \frac{f}{\omega_0^2 - \omega^2} \cos\omega t} $$

很多物理教材在处理受迫振动时，通常会忽略齐次方程的解，而只关注这个特解。如此处理，问题确实变得很简单明了。我们可以看出，$$ A=\frac{f}{ \lvert \omega_0^2- \omega^2 \rvert } $$。即受迫振动的幅度为恒定值：驱动力频率越接近振子的自然频率，振幅将会越大。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blow-up-amplitude.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

我们还可以讨论**振动和驱动力的相位差**。

若 $$\omega_0 > \omega$$，上式中 $$\cos\omega t$$ 前面的系数为正，故 $$x(t) \propto \cos\omega t$$，即驱动力频率小于振子自然频率时，振动与驱动力同相。

若 $$\omega_0 < \omega$$，$$\cos\omega t$$ 前面的系数为负，故 $$x(t) \propto -\cos\omega t = \cos(\omega t + \pi)$$，即驱动力频率大于振子自然频率时，振动与驱动力反相。

然而，**对非齐次微分方程求解时，我们没有理由随便地丢掉齐次方程的通解**。特别的，如果只关注运动方程的特解 $$x_p(t) = \frac{f}{\omega_0^2 - \omega^2} \cos\omega t$$，这个解会给出 $$t=0$$ 的初始时刻具有非零的初始位移，这个初始位移还必须刚好等于跟外加驱动力的频率和幅度都有关的一个特定值，一切才能说得通，但这不大合理。严格来讲，我们还是需要考察齐次方程的贡献，并且去匹配初始条件。整个受迫振子的位移函数应该写成：

$$ x(t) = x_0 \cos(\omega_0 t + \phi) + \frac{f}{\omega_0^2 - \omega^2} \cos\omega t$$

初始速度为零要求：$$v(0)= \frac{\mathrm{d}x}{\mathrm{d}t}\rvert_{t=0}=0$$，于是 $$-\omega_0 x_0\sin\phi = 0$$，故 $$\phi = 0$$。

初始位移为零要求：$$x(0) = x_0 \cos\phi + \frac{f}{\omega_0^2-\omega^2} = 0$$，故 $$x_0 = -\frac{f}{\omega_0^2-\omega^2}$$。

综上，我们得到了受迫振子位移随时间的变化关系：

$$ \boxed{ x(t) = \frac{f}{\omega_0^2 - \omega^2} \left[ \cos\omega t - \cos\omega_0 t \right]}$$

我们可以针对不同的 $$\omega$$ 的取值，绘制出对应的位移时间图像。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/forced-oscillation.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

从图像中可以看出，这个位移-时间关系其实挺迷的，这就不是一个简单的正弦或者余弦函数，似乎很难定义出一个明确的振幅或者相位。位移的贡献可以看成两部分贡献的叠加：来自于外力驱动、频率为 $$\omega$$ 的部分，以及由自身回复力驱动、频率为 $$\omega_0$$ 的部分。

如果利用三角函数的和差化积公式 $$ \cos \alpha - \cos \beta = 2\sin\frac{\beta-\alpha}{2}\sin\frac{\beta+\alpha}{2}$$，我们将位移函数改写为

$$ x(t) = \frac{2f}{\omega_0^2 - \omega^2} \sin\frac{(\omega_0-\omega)t}{2} \sin\frac{(\omega_0+\omega)t}{2}$$

从中我们可以将其理解为振子作频率为 $$\frac{\omega_0+\omega}{2}$$ 振动，但是振幅并不是恒定的，而是随时间以 $$\frac{\lvert \omega_0-\omega \rvert}{2}$$ 的频率呈周期性变化。容易判断，位移可取的的最大值为 $$\frac{2f}{\lvert \omega_0-\omega \rvert}$$，即振动的振幅为

$$ A = \frac{2f}{\lvert \omega_0-\omega \rvert}$$

尽管结果与先前得到的结论差了两倍，但并不影响一下的结论：**振幅会在驱动力频率接近振子自然频率时越来越来大。当驱动力频率与自然频率相等时，从渐进性为看来振幅将会趋于无穷大**。

下面我们具体分析驱动力频率等于自然频率的情况。

---

## 情况二：$$\omega = \omega_0$$

此时(#)式的特解将具有形式：$$x_p=At\sin\omega_0 t$$。代入原方程，进行一些不算太繁琐的运算后，可以得出待定系数 $$A = \frac{f}{2\omega_0}$$。于是，(#)式的特解为：

$$ \boxed{ x_p(t) =  \frac{f}{2\omega_0}  t\sin\omega_0 t }$$

不过为了讨论的完整，运动方程(#)式的解，还需补上齐次方程的通解。不过可以发现，如果只看特解，在 $$t=0$$ 时，初始位移 $$ x_p(0) = 0$$，并且初始速度有

$$ v_p(0) = \frac{\mathrm{d}x_p}{\mathrm{d}t}\Bigg|_{t=0} = 0 $$

$$ \frac{f}{2\omega_0}(\sin\omega_0 t + \omega_0 t \cos\omega_0 t)\Big|_{t=0} = 0$$

说明特解已经可以满足我们设定的初始条件，所以(#)式的解其实就是非齐次方程的这个特解。于是

$$ \boxed{ x(t) =  \frac{f}{2\omega_0}  t\sin\omega_0 t } $$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/forced-resonance.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

我们可以看出，**共振发生时的振幅将会随时间成正比的增长：$$A(t) = \frac{f}{2\omega_0}t$$。没有阻尼的限制，振幅最终可以趋于无限大**。另一方面，如果将上式稍作改写，变为:

$$ x_p(t) = \frac{f}{2\omega_0}t\cos(\omega_0t - \frac{\pi}{2})$$

我们可以立即看出，相比于驱动力 $$F=F_0\cos\omega_0t$$，**振子的位移将落后 $$\frac{\pi}{2}$$ 的相位差**。

## 补充讨论

在写这篇文章时，我开始试着假定对一个处于静止平衡状态的简谐振子，从 $$t=0$$ 时刻开始施加一个 $$F=F_0\sin\omega t$$ 的外力，没想到情况变得出乎意料的复杂。（当年学经典力学时我是怎么混过来的？）有一些处理我似乎没有在任何教科书中见过，但是整个推导过程感觉可以说服我自己，所以还是厚着脸皮发出来了，如有错误，欢迎指正。

对应情况下的运动方程将会变成

$$ \boxed{ \ddot{x} + \omega_0^2 x = f \sin\omega t  } \quad (*) $$

显然齐次方程的通解跟原来一样，但是非齐次方程的特解会发生变化。由此带来的问题就是，为了匹配初始位移和初始速度为零的条件，齐次方程通解中的参数会变得非常恶心。

在 $$\omega \neq \omega_0$$ 时，方程的特解为：$$x_p(t) = \frac{f}{\omega_0^2-\omega^2}\sin\omega t$$

加上齐次方程的通解，可以证明符合初始条件的唯一解为：

$$ \boxed{x(t)=\frac{f}{\omega_{0}^{2}-\omega^{2}}\left[\sin \omega t-\frac{\omega}{\omega_{0}} \sin \omega_{0} t\right] }$$

容易判断，方括号中随时间振荡的项，最大值为 $$ 1 + \frac{\omega}{\omega_0}$$，于是位移的最大值可以取到

$$A=\frac{f}{\left|\omega_{0}^{2}-\omega^{2}\right|}\left(1+\frac{\omega}{\omega_{0}}\right)=\frac{f}{\omega_{0}\left|\omega_{0}-\omega\right|}$$

尽管形式上与先前得到的结论有差异（但我印象里没有任何一本我读过的力学教材里有这个结果？），但是我们依然可以推断，**振幅会在驱动力频率接近振子自然频率时越来越来大**。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blow-up-amplitude-2.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

 而在共振 $$\omega = \omega_0$$ 发生时，方程的特解为 $$x_p(t) = -\frac{f}{2\omega_0}  t\cos\omega_0 t$$

同样可以证明，加上齐次方程通解后，符合初始条件的位移时间函数关系将会是：

$$x(t)=\frac{f}{2 \omega_{0}^{2}} \sin \omega_{0} t-\frac{f}{2 \omega_{0}} t \cos \omega_{0} t$$

提取公因式并利用三角函数的辅助角公式，还可以进一步写成：

$$\boxed{ x(t)=\frac{f}{2 \omega_{0}^{2}} \sqrt{1+\omega_{0}^{2} t^{2}} \sin \left(\omega_{0} t-\Delta \phi\right) }$$

这说明**在共振频率下，振子的振幅为 $$\frac{f}{2\omega_0^2} \sqrt{1+\omega_0^2 t^2}$$，振幅将随时间不断增大，趋于无穷**。

而对比外加的驱动力，**振动总是落后一个取决于时间的相位差**：$$\Delta \phi = \tan^{-1}(\omega_0 t)$$。当驱动力施加了足够长的时间后，$$\Delta \phi \to \frac{\pi}{2}$$，即**最终的振动相比于驱动力会落后 $$\frac{\pi}{2}$$ 的相位差**。

最后，我们也可以画出共振时振子位移随时间变化的函数图像。在图中，大家可以很清楚地看到上面提到的关于振幅和相位差的结论。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/forced-resonance-2.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

