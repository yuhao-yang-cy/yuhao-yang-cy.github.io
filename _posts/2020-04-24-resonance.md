---
layout: post
title: "受迫阻尼振动与共振"
date: 2020-04-24 08:13:00
description: "如果一个简谐振子同时受到阻力和一个周期性的驱动力的作用，那么它会做怎样的运动？"
tags: physics a-level mechanics oscillators
categories: physics a-level engineering
---

这大约是关于振动问题的系列文章的最后一篇了，我打算来解决如下的问题：

如果一个简谐振子同时受到阻力和一个周期性的驱动力的作用，那么它会做怎样的运动？更进一步的问，它振动的振幅和相位与施加的驱动力会有怎样的关系？

我们就此问题试着来推导一波。

## 运动方程的建立

开门第一件事，先建立运动方程。

假定振子一开始静置于平衡位置，从 $$t=0$$ 时刻起施加的驱动力为 $$F(t) = F_0\cos\omega t$$，运动过程中受到的阻力正比于速度大小 $$f_R = \alpha v$$，由此可以写下运动方程：

$$
m\frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -m\omega_0^2 x - \alpha \frac{\mathrm{d}x}{\mathrm{d}t} + F_0 \cos\omega t
$$

式中 $$m\omega_0^2x$$ 代表简谐振子自身的回复力，其大小正比于位移 $$x$$，方向与 $$x$$ 相反，故带有负号；阻力与运动速度反向，故也带负号。如果我们引入新的参数：$$ \beta = \frac{\alpha}{2m}$$，及 $$f = \frac{F_0}{m}$$，则运动方程可以被改写为：

$$
\boxed{ \frac{\mathrm{d}^2x}{\mathrm{d}t^2} + 2\beta \frac{\mathrm{d}x}{\mathrm{d}t} + \omega_0^2 x  = f \cos\omega t }  \quad (\#)
$$

## 方程求解

这是一个二阶常系数的非齐次微分方程。在前几篇关于简谐振子的文章中，我们已经对这类方程的求解方法做过基本介绍。我们可以分别找出齐次方程的通解，并于非齐次方程的特解叠加，最后根据初始条件确定可调的系数，得到问题的唯一解。

注意到之前解振动方程，我们可以让位移函数 $$x(t)$$ 取复数值，然后通过施加具有物理意义的限定条件，最终得到实数的解。拓展到复数领域后，指数函数有诸多友好的性质可以帮助我们简化计算。为了对付现在的这个问题，我们也采取进入到复数域中去求解的策略。不妨假定我们要求的位移函数 $$x(t)$$ 是某个复数函数 $$\tilde{x}(t)$$ 的实部，然后注意到 $$f\cos\omega t$$ 就是 $$f\mathrm{e}^{i\omega t}$$ 的实部。所以我们可以试着来求解方程：

$$
\boxed{ \frac{\mathrm{d}^2\tilde{x}}{\mathrm{d}t^2} + 2\beta \frac{\mathrm{d}\tilde{x}}{\mathrm{d}t} + \omega_0^2 \tilde{x}  = f\mathrm{e}^{i\omega t} }  \quad (*) 
$$

解出 $$\tilde{x}(t)$$，取其实部，就可以得到真正的位移函数 $$x(t)$$ 了。为了方便，下面求解(\*)式的过程中，对 $$\tilde{x}$$ 和 $$x$$ 我们不作符号上的区分，只是在最终结果中才特别标注。但大家要记得最后求的(\*)式的解，必须要取实部才有物理意义。

---

首先处理齐次方程：$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} + 2\beta \frac{\mathrm{d}x}{\mathrm{d}t} + \omega_0^2 x  = 0$$。

注意到这个方程描述的其实就是一个不受驱动力、但是受到阻力作用的简谐振动，我们在[《无阻尼受迫振动》]({{site.baseurl}}/blog/2020/forced-oscillation/) 一文中，对这个方程的求解已经有了很详细的讨论，我们在此仅仅列出大致的推导框架。

齐次方程的通解仍将具有 $$\mathrm{e}^{\lambda t}$$ 的形式，代入后可以得到关于 $$\lambda$$ 的特征方程：$$ \lambda^2 + 2\beta\lambda + \omega_0^2 = 0$$。

如果阻尼不是很强，即欠阻尼振动，此时 $$\beta < \omega_0$$，特征方程的根将是复数：$$\lambda = -\beta \pm i\omega'$$，其中我们定义 $$\omega' = \sqrt{\omega_0^2 - \beta^2}$$。于是我们找到齐次方程通解为

$$
\tilde{x}_c(t) = \mathrm{e}^{-\beta t}\left( A_1 \mathrm{e}^{i\omega't} + A_2 \mathrm{e}^{-i\omega't}\right)
$$

其中 $$A_1, A_2$$ 为任意常数，并且可以取复数。

取 $$\tilde{x}_c(t)$$ 实部，并重新定义一系列新的常数，可以得到

$$
\boxed{x_c(t) = x_0\mathrm{e}^{-\beta t} \cos(\omega't + \phi)}
$$

常数 $$x_0$$ 和 $$\phi$$ 的取值都将由振动的初始条件决定。但是注意到式子中的 $$\mathrm{e}^{-\beta t}$$ 项，这告诉我们 $$x_c(t)$$ 对总位移的贡献会随时间指数衰减。在充分长的时间后，这一项的贡献就可以忽略不计。

如果阻尼足够强，即过阻尼振动，此时 $$\beta>\omega_0$$，特征方程的根为 $$\lambda = -\beta \pm \sqrt{\beta^2-\omega_0^2}$$，两者皆为复数。于是过阻尼情况下，位移函数随时间作指数衰减：

$$ \boxed{x_c(t) = A_1 \mathrm{e}^{-\lambda_1 t} + A_2 \mathrm{e}^{-\lambda_2 t} }$$

所以**不论是欠阻尼还是过阻尼，都存在随时间指数衰减的因子，受迫阻尼振动更有意思的物理结果，其实都藏在非齐次方程的特解中**。

---

我们接下来求解非齐次方程：$$\frac{\mathrm{d}^2x}{\mathrm{d}t^2} + 2\beta \frac{\mathrm{d}x}{\mathrm{d}t} + \omega_0^2 x  = f\mathrm{e}^{i\omega t}$$

可以猜想特解将具有 $$x_p(t) = K\mathrm{e}^{i\omega t}$$ 的形式，代入上式中，我们得到：

$$
(-\omega^2 + 2\beta \omega i + \omega_0^2) K\mathrm{e}^{i\omega t} = f\mathrm{e}^{i\omega t}
$$

这要对任何 $$t$$ 都成立，所以必然有：$$K = \frac{f}{-\omega^2 + 2\beta \omega i + \omega_0^2}$$。于是特解就是：

$$
\tilde{x}_p(t) = \frac{f}{-\omega^2 + 2\beta \omega i + \omega_0^2}\mathrm{e}^{i\omega t}
$$

为了提取实部，我们先对分母有理化：

$$
\tilde{x}_p(t) = \frac{f(\omega_0^2-\omega^2-2\beta\omega i)}{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} \mathrm{e}^{i\omega t}
$$

这一大坨东西的实部为：

$$
x_p(t) = \frac{f}{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} \left[ (\omega_0^2-\omega^2)\cos\omega t + 2\beta \omega \sin\omega t \right]
$$

运用三角函数辅助角公式，方括号里的部分可以写成：$$\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2 } \cos(\omega t - \psi)$$，其中相位角 $$\psi$$ 满足 $$ \cos\psi = \frac{\omega_0^2-\omega^2}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} }$$，以及 $$ \sin\psi = \frac{2\beta\omega}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} }$$（关于相位差的问题我们稍后作详细讨论）。将这些结果塞回 $$x_p(t)$$ 的表达式中，我们得到：

$$
\boxed{ x_p(t) = \frac{f}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} } \cos(\omega t - \psi) }
$$

---

综合齐次方程的通解和非齐次方程的特解，原运动方程的解将是 $$x(t) = x_c + x_p$$。具体写开，对于欠阻尼和过阻尼这两种情况，位移函数的形式分别为：

$$
x(t) = x_0\mathrm{e}^{-\beta t} \cos(\omega't + \phi) + \frac{f}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} } \cos(\omega t - \psi)
$$

或

$$
x(t) = A_1 \mathrm{e}^{-\lambda_1 t} + A_2 \mathrm{e}^{-\lambda_2 t} + \frac{f}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} } \cos(\omega t - \psi)
$$

第一项描述振子在自身回复力和阻尼的共同作用下的振动行为，而第二项则是振子在外界驱动力作用下的受迫振动行为。考虑振子的长期行为，即考虑 $$t\to\infty$$ 的极限，由于阻尼的影响，第一项都终将趋于零，因此受迫振动最终将非常敏感地取决于外力的性质：

$$
\boxed{ x(t) \sim \frac{f}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} } \cos(\omega t - \psi) }
$$

## 共振频率

容易看出，施加的驱动力频率不同，振子会有不同的振幅响应。受迫振动的振幅 $$A$$ 是驱动力频率 $$\omega$$ 的函数：

$$
\boxed{ A(\omega) = \frac{f}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} } }
$$

为了考察 $$A(\omega)$$ 的极值，我们可以把它分母上那个根式下面的一大坨拖出来，看看能搞出什么名堂：

$$
\begin{aligned}
(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2 &= \omega^4 - 2(\omega_0^2 - 2\beta^2) \omega^2 + \omega_0^4 \\ &= \Big[ \omega^2 - (\omega_0^2 - 2\beta^2) \Big]^2 + \omega_0^4 - (\omega_0^2 - 2\beta^2)^2 \\ & = \Big[ \omega^2 - (\omega_0^2 - 2\beta^2) \Big]^2 + 4\beta^2(\omega_0^2-\beta^2)
\end{aligned}
$$

显然，若 $$2\beta^2 < \omega_0^2$$，则这坨东西在 $$\omega = \sqrt{\omega_0^2 - 2\beta^2}$$ 时会有最小值，此时振幅 $$A(\omega)$$ 则将有最大值。也就是说，**在阻尼并不强时，可以在某个特定驱动力频率下获得最大振幅**，对应的共振频率为：

 $$
 \boxed{ \omega_\text{res} = \sqrt{\omega_0^2 - 2\beta^2} }
 $$ 

注意到，共振频率 $$\omega_\text{res}<\omega_0$$，即**共振在在驱动力频率略小于简谐振子自然频率时发生**，具体的偏差会取决于 $$\beta$$ 的大小，即**阻尼的强度会决定共振频率和自然频率的偏差量**。

若 $$2\beta^2 > \omega_0^2$$，$$A(\omega)$$ 分母上那坨东西会随 $$\omega$$ 增加而单调递增，也就是说，**阻尼比较大时，驱动力频率越大，振幅就会越小**。由此看到，**过阻尼的情形下，振子将不会出现共振的行为**。

## 共振振幅

当共振发生时，我们可以计算对应的振幅大小：

$$
A_\text{res} = \frac{f}{2\beta\sqrt{\omega_0^2-\beta^2}}
$$

不难论证，在可以发生共振的阻尼条件下（ $$2\beta^2 < \omega_0^2$$），**阻尼越弱，共振的振幅就越大**。

我们可以将不同 $$\beta$$ 对应的 $$A(\omega)$$ 曲线绘制在同一张图上。图中可以直观地看到阻尼对共振频率以及振幅的影响。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/resonance-curve.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

## 受迫振动的相位

注意到振子的位移有 $$x(t)\sim \cos(\omega t-\psi)$$，驱动力则有 $$F(t)\sim\cos\omega t$$。对比可知，振子的运动将会较驱动力有大小为 $$\psi$$ 的相位滞后。更精确的讲，相位差 $$\psi$$ 满足：

$$
\cos\psi = \frac{\omega_0^2-\omega^2}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} }
$$

$$
\sin \psi = \frac{2\beta\omega}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2 \omega^2} }
$$

合并以上两式可以得到

$$
\boxed{ \tan\psi = \frac{2\beta\omega}{\omega_0^2 - \omega^2} }
$$

注意 $$\cos\psi$$ 和 $$\sin\psi$$ 可取的符号，我们有如下结论：

**若 $$\omega < \omega_0$$，则 $$0<\psi <\frac{\pi}{2}$$，意味着振子的振动稍稍落后于驱动力的变化。**

**若 $$\omega > \omega_0$$，则 $$\frac{\pi}{2} < \psi < \pi$$，意味着振子的振动相比于驱动力的变化会有更大的滞后。**

物理图像也不难想象：对于低频的驱动，振子在自己的回复力作用下其实还期望走得更快一点，可以很容易地就跟上驱动力，紧随其后。对于高频的驱动，振子就跟不上节奏，提着裤子猛追都追不上。

对于不同 $$\beta$$ 的取值，即不同阻尼约束下，我们也可以把相位差和驱动力频率的关系绘制在图像上。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/resonance-phase.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

不难看出，**在 $$\omega=\omega_0$$ 时，总会有 $$\psi=\frac{\pi}{2}$$ 的滞后**。

另外，在 $$\omega\to 0$$ 时，$$\psi \to 0$$，极低频的驱动力作用下，振子的振动可以和驱动力几乎完全同步；在 $$\omega\to\infty$$ 时，$$\psi \to \pi$$，极高频的驱动力作用下，振子的振动和驱动力几乎完全反相。

## 几个特殊极限的讨论

我们已经知道欠阻尼情形下的共振频率为 $$\omega_\text{res} = \sqrt{\omega_0^2 - 2\beta^2}$$。**当 $$\beta \to 0$$ 时，有 $$\omega_\text{res}\to \omega_0$$，即趋向零阻尼的理想条件时，共振将会在驱动力频率等于自然频率时发生**。而对于振子的相位滞后，容易验证，在趋于零阻尼时，有驱动频率低于 $$\omega_0$$ 时趋于同相、驱动频率高于 $$\omega_0$$ 时反相的结论，这些与我们在上一篇对无阻尼受迫振动推导给出的结果吻合。

如果我们取 $$\omega\to\infty$$ 的极限，可以发现 $$A\to 0$$。这说明**在驱动力频率非常大的情况下，相对慢节奏的振子完全迷失了方向**，才打算跟着驱动力往正方向迈一步，驱动力转眼就开始反方向作用了，结果就是振子只会原地踏步，不产生位移。

我们还可以**分析 $$\omega\to0$$ 的极限，此时驱动力 $$F = F_0$$ 为一个恒定力**。代入 $$A(\omega)$$ 的表达式中，我们得到此时的振幅为 $$A\to\frac{f}{\omega_0^2}=\frac{F_0}{m\omega_0^2}$$。对应的物理图像是，**恒定的外力将振子推到了某个最大位移处，在那里，这个力和振子的回复力达到了平衡，最终达到静态平衡**：$$F_0 = m\omega_0^2 A$$。此时振子不作往复运动，阻力不产生作用，因此大家也可以看到，在上面给出的 $$A(\omega)$$ 图像中，不论阻尼强度 $$\beta$$ 取值如何，在 $$\omega\to0$$ 的极限下，它们的振幅都趋于相同的值。