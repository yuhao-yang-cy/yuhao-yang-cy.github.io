---
layout: post
title: "分析力学读书笔记：Bertrand 定理"
date: 2021-05-24 21:16:00
description: why does the gravitational force obey inverse square law?
tags: mathematics physics mechanics gravity
categories: mathematics physics theoretical-physics
---

在经典力学中，有这么一个神奇的定理：**只有两种有心力（central force）可以导致稳定的闭合轨道，力或是随距离呈平方反比地减小（比如牛顿经典引力势），或是随距离呈正比地增大（比如径向谐振子势）。**唯有此二种情况，可以保证物体从经过一段路径后，又可以回到原先一模一样的位置，重复先前的运动模式，也即轨道是闭合的。

这个定理被称作 **Bertrand 定理**，最早于1873年由法国数学家 Joseph Louis Francois Bertrand 作出证明。我搜到了 Bertrand 原始论文的英文翻译版，表示读得非常吃力。而自己最近回炉 Herbert Goldstein 的经典力学教材时，又读到了这么一个定理，就试着再搜了点自己能 follow 的材料，发现最终兜兜转转，居然让自己整明白的是 Goldstein 上一版同名教材的附录。自己跟着推了一遍，感觉还挺好玩的，就做个搬运工，写下这篇 note，内容的 credit 应该全部归于 Goldstein。

------

一个在有心力场中运动的物体的 Lagrangian 可以写作

$$
L= \frac{1}{2}m(\dot{r}^2+r^2\dot{\theta}^2)-V(r) \tag{1}
$$

运用 Euler-Lagrange 方程，容易建立运动方程。其中关于 $$\theta$$ 的运动方程会给出

$$
\frac{\mathrm{d} }{\mathrm{d} t}\left( mr^2\dot{\theta} \right) \equiv \frac{\mathrm{d} l}{\mathrm{d}t }= 0 \tag{2}
$$

这说明角动量（angular momentum） $$l=mr^2\dot{\theta}$$ 是一个守恒量。

我们也可以写出关于 $$r$$ 的运动方程：

$$
m\ddot{r} -mr\dot{\theta}^2+\frac{\partial V}{\partial r}=0 \tag{3}
$$

为了讨论轨道的形状，我们更关心 $$r$$ 随角度 $$\theta$$ 的变化。利用 $$(2)$$ 式，我们可以把 $$r$$ 随时间 $$t$$ 的导数写成 $$r$$ 随角度 $$\theta$$ 的变化率：

$$
\frac{\mathrm{d} }{\mathrm{d} t} = \frac{\mathrm{d} \theta}{\mathrm{d} t} \frac{\mathrm{d} }{\mathrm{d} \theta} = \frac{l}{mr^2}\frac{\mathrm{d} }{\mathrm{d} \theta} \tag{4}
$$

利用上面的关系，并注意到有心力 $$f(r)=-\frac{\partial V}{\partial r}$$，我们可以将 $$(3)$$ 式改写成：

$$
\frac{l}{r^2}\frac{\mathrm{d} }{\mathrm{d} \theta}\left( \frac{l}{mr^2}\frac{\mathrm{d} r}{\mathrm{d} \theta} \right) - \frac{l^2}{mr^3} = f(r) \tag{5}
$$

再作变换 $$u=\frac{1}{r}$$，则有

$$
\frac{\mathrm{d} r}{\mathrm{d} \theta} = \frac{\mathrm{d} r}{\mathrm{d} u}\frac{\mathrm{d} u}{\mathrm{d} \theta} = -\frac{1}{u^2}\frac{\mathrm{d} u}{\mathrm{d} \theta}
$$

最终，轨道的方程可以被写成：

$$
\frac{\mathrm{d}^2 u }{\mathrm{d} \theta^2} + u = - \frac{m}{l^2u^2} f\left(\frac{1}{u}\right) \equiv J(u) \tag{6}
$$

如果这是一个圆轨道，那么显然有

$$
u_0 = J(u_0) \tag{7}
$$

上式其实等价于 $$f(\frac{1}{u_0})=-\frac{u_0^3l^2}{m} = -\frac{\frac{1}{r_0^3} (mr_0^2\dot{\theta})^2}{m} = -m\dot{\theta}^2r_0$$，及有心力恰好等于离心力，这自然对应圆轨道。当然，对于一个稳定的圆轨道，它的能量还必须满足相应的条件：在 $$r_0=\frac{1}{u_0}$$ 处的有效势能应有极小值。即便物体的运动受到微小的能量扰动，它依然将被束缚在这个圆轨道附近运动。

我们接下来要讨论的问题，也即是 Bertrand 定理的核心：**如果进一步要求这个轨道是稳定且闭合的，这对作用力的形式会有怎样的约束？**

记运动过程中 $$u$$ 与 $$u_0$$ 的偏差量为 $$x$$：

$$
x = u-u_0 \tag{8}
$$

如果 $$x$$ 不是很大，我们可以对 $$J(u)$$ 在 $$u_0$$ 附近作 Taylor 展开

$$
J(u) = u_0 + x J'(u_0) + \frac{1}{2}x^2 J''(u_0) + \frac{1}{6}x^3 J'''(u_0) + \cdots \tag{9}
$$

这样轨道方程方程 $$(6)$$ 式可以被改写成：

$$
\begin{aligned}
\frac{\mathrm{d}^2 x}{\mathrm{d} \theta^2} + u_0 + x &= u_0 +x J'(u_0) + \frac{1}{2}x^2 J''(u_0) + \frac{1}{6}x^3 J'''(u_0) + \cdots \\
\frac{\mathrm{d}^2 x}{\mathrm{d} \theta^2} + \beta^2 x &= \frac{1}{2}x^2 J''(u_0) + \frac{1}{6}x^3 J'''(u_0) + \cdots
\end{aligned}\tag{10}
$$

其中我们引入了记号 $$\beta^2 \equiv 1-J'(u_0)$$。

如果只保留到一阶项，丢掉 $$(10)$$ 式右边所有的东西，就有

$$
\frac{\mathrm{d}^2 x}{\mathrm{d} \theta^2} + \beta^2 x = 0 \tag{11}
$$

如果 $$\beta^2<0$$，$$x$$ 将随 $$\theta$$ 指数增长或指数衰减，这显然不再会是一个稳定轨道。因此稳定轨道要求 $$\beta^2>0$$，此时 $$x$$ 将随 $$\theta$$ 作周期性的正弦或余弦振荡。

代入 $$J(u)$$ 的具体形式 $$(6)$$ 式

$$
\begin{aligned}
J'(u_0) & = \frac{\mathrm{d} }{\mathrm{d} u} \left[ - \frac{m}{l^2u^2} f\left(\frac{1}{u}\right)\right]\Bigg|_{u=u_0} \\
&= \left[ \frac{2m}{l^2u^3}f\left(\frac{1}{u}\right) - \frac{m}{l^2u^2} \frac{\mathrm{d} }{\mathrm{d} u}f\left(\frac{1}{u}\right) \right]\Bigg|_{u=u_0} \\
&= -2 + \frac{u_0}{f_0} \frac{\mathrm{d} }{\mathrm{d} u}f\left(\frac{1}{u_0}\right) \\
&= -2 + \frac{1}{r_0f_0}  \frac{\mathrm{d} r}{\mathrm{d} u}\Bigg|_{r=r_0} \frac{\mathrm{d} f}{\mathrm{d} r}\Bigg|_{r=r_0} \\
&= -2 - \frac{r_0}{f_0} \frac{\mathrm{d} f}{\mathrm{d} r}\Bigg|_{r=r_0} \\
& = -2 - \left(\frac{r}{f} \frac{\mathrm{d} f}{\mathrm{d} r}\right)\Bigg|_{r=r_0}
\end{aligned}
$$

于是，轨道稳定的条件要求：

$$
\beta^2 = 3 + \left(\frac{r}{f} \frac{\mathrm{d} f}{\mathrm{d} r}\right)\Bigg|_{r=r_0} >0 \tag{13}
$$

选择合适的方位作为 $$\theta$$ 的零点，方程 $$(11)$$ 的解可以是：

$$
x = a\cos\beta \theta\tag{14}
$$

如果进一步要求轨道闭合，则参数 $$\beta$$ 必须是一个有理数。显然，我们期待在各种不同的 $$r_0$$ 处都可以有稳定的闭合轨道。想象当 $$r_0$$ 连续变化时，参数 $$\beta$$ 应当保持恒定才能保证轨道的闭合，因此 $$\beta$$ 应当具有处处相等的恒定值。于是我们可以把 $$(13)$$ 式当作关于 $$f(r)$$ 的微分方程，从中可以解出作用力随距离的关系：

$$
f(r) = \pm \frac{k}{r^{3-\beta^2}}
$$

$$f(r)>0$$ 对应于排斥作用，容易证明此种情况下的圆轨道的有效势能不是极小值，因此并不是稳定轨道。所以满足需求的作用力有 $$f(r)<0$$，对应于吸引作用，可以写作：

$$
f(r) = - \frac{k}{r^{3-\beta^2}} \tag{15}
$$

至此，我们得到了一个结论：如果轨道在微小扰动下依然能保持稳定且闭合，则有心力的大小将符合 $$(15)$$ 式给出的关系，其中 $$\beta$$ 须是有理数。

如果扰动再大一点，计算就必须也要考虑轨道方程 $$(10)$$ 式中更高阶项的贡献了。如果轨道依然是闭合的，我们可以以 $$(14)$$ 式为基础，将它视作是轨道方程的 Fourier 展开，其最主要的贡献来自于 $$\cos\beta\theta$$ 项，但是也可以引入更多的展开项来描述更大扰动情况下的轨道方程。我们可以尝试写出：

$$
x=a_0 + a_1 \cos\beta\theta + a_2 \cos2\beta\theta + a_3 \cos3\beta\theta + \cdots \tag{16}
$$

我们期待展开式中，$$a_1 \gg a_0 \sim a_2 \gg a_3 \gg \cdots$$，在接下来的计算中，我们会关注 $$a_1$$ 相关的项，不含 $$a_1$$ 的交叉项将被忽略。在考虑方程 $$(10)$$ 的右边的展开后，我们会发现对 $$x$$ 的展开式保留到 $$\cos3\beta\theta$$ 项就够了，暂且不需要额外的高阶项。当然，在后面的计算完成后，我们也会回头来检验这些估计是否合理。

接下来要做的事情，就是把 $$(16)$$ 式塞进方程 $$(10)$$ 中蛮力计算了。方程两边各项先单独拿出来算一算：

$$
\begin{aligned}
\frac{\mathrm{d}^2 x}{\mathrm{d} \theta^2} &\approx -a_1\beta^2\cos\beta\theta -4a_2\beta^2\cos2\beta\theta-9a_3\beta^2\cos3\beta\theta \\
\beta^2 x &\approx a_0 \beta^2 + a_1\beta^2\cos\beta\theta + a_2\beta^2\cos2\beta\theta + a_3\beta^2\cos3\beta\theta \\
\frac{1}{2}x^2 J'' &\approx \frac{1}{2}J'' \left[a_1^2\cos^2\beta\theta + 2a_0a_1\cos\beta\theta + 2a_1a_2 \cos\beta\theta \cos2\beta\theta\right] \\
&= \frac{1}{2}J'' \left[\frac{1}{2}a_1^2(1+\cos2\beta\theta) + 2a_0a_1\cos\beta\theta + a_1a_2 (\cos\beta\theta +\cos3\beta\theta)\right]\\
&= \frac{1}{4}a_1^2 J'' + \left( a_0a_1+\frac{1}{2}a_1a_2 \right) J''\cos\beta\theta + \frac{1}{4}a_1^2 J''\cos2\beta\theta + \frac{1}{2}a_1a_2  J''\cos3\beta\theta \\
\frac{1}{6}x^3 J''' &\approx \frac{1}{6} J''' a_1^3\cos^3\beta\theta \\
&= \frac{1}{6} J''' a_1^3 \times\frac{1}{4}(\cos3\beta\theta+3\cos\beta\theta) \\
&= \frac{1}{8} a_1^3 J''' \cos\beta\theta + \frac{1}{24} a_1^3 J''' \cos3\beta\theta
\end{aligned}
$$

然后所有东西放到一起，得到一个很可怕的方程：

$$
\begin{aligned}
a_0 \beta^2 & -3a_2\beta^2\cos2\beta\theta-8a_3\beta^2\cos3\beta\theta \\
&= \frac{1}{4}a_1^2 J'' + \left( a_0a_1J''+\frac{1}{2}a_1a_2J'' + \frac{1}{8} a_1^3 J'''\right) \cos\beta\theta \\
& \quad+ \frac{1}{4}a_1^2 J''\cos2\beta\theta + \left( \frac{1}{2}a_1a_2  J'' + \frac{1}{24} a_1^3 J'''\right)\cos3\beta\theta
\end{aligned} \tag{17}
$$

比较两边相应余弦项的系数，有：

$$
\begin{array}{rcll}
\frac{1}{4}a_1^2 J'' &=& a_0 \beta^2 & \qquad(18a) \\
a_0a_1J''+\frac{1}{2}a_1a_2J'' + \frac{1}{8} a_1^3 J''' &=& 0  & \qquad(18b) \\
\frac{1}{4}a_1^2 J'' &=& -3a_2\beta^2 & \qquad(18c) \\
\frac{1}{2}a_1a_2  J'' + \frac{1}{24} a_1^3 J''' &=& -8a_3\beta^2 & \qquad(18d) 
\end{array}
$$

我们已经知道了我们关心的有心力必须具有 $$(15)$$ 式的形式，代入 $$J(u)$$ 的具体形式即 $$(6)$$ 式中，可以得到：

$$
J(u) = - \frac{m}{l^2u^2} \times \left( -k{u^{3-\beta^2}} \right) = \frac{km}{l^2}u^{1-\beta^2} \tag{19}
$$

逐次求导，可以得到 $$J'(u_0)$$，$$J''(u_0)$$ 和 $$J'''(u_0)$$ 的表达式：

$$
\begin{aligned}
J(u_0) &= \frac{km}{l^2}u_0^{1-\beta^2} \equiv u_0 \\
J'(u_0) &= \frac{km}{l^2}(1-\beta^2) u_0^{-\beta^2} \\
& = 1-\beta^2 \\
J''(u_0) &= \frac{km}{l^2}(1-\beta^2)(-\beta^2) u_0^{-1-\beta^2} \\
&= \frac{-\beta^2(1-\beta^2)}{u_0} \\
J'''(u_0) &= \frac{km}{l^2}(1-\beta^2)(-\beta^2)(-1-\beta^2) u_0^{-2-\beta^2} \\
&= \frac{\beta^2(1-\beta^2)(1+\beta^2)}{u_0^2} \\
\end{aligned} \tag{20}
$$

将 $$(20)$$ 式代入 $$(18)$$ 各式中，就可以求出轨道方程的 Fourier 展开式中的各项系数。首先处理比较好对付的 $$(18a)$$ 和 $$(18c)$$：

$$
\begin{aligned}
a_0 &= \frac{a_1^2 J''}{4\beta^2} = -\frac{1-\beta^2}{4u_0}a_1^2 \\
a_2 &= \frac{-a_1^2 J''}{12\beta^2} = \frac{1-\beta^2}{12u_0}a_1^2
\end{aligned} \tag{21}
$$

由此我们也可以看到，$$\frac{a_0}{a_1}\sim\frac{a_1}{u_0}$$，以及 $$\frac{a_2}{a_1}\sim\frac{a_1}{u_0}$$，说明确实有 $$a_0, a_2 \ll a_1$$。

再来对付 $$(18d)$$：

$$
\begin{aligned}
a_3 &= -\frac{1}{8\beta^2} \left( \frac{1}{2}a_1a_2 J''+ \frac{1}{24}a_1^3 J'''\right)\\
&= -\frac{1}{8\beta^2} \left( \frac{1}{2}a_1 \times \frac{1-\beta^2}{12u_0}a_1^2 \times\frac{-\beta^2(1-\beta^2)}{u_0}+ \frac{1}{24}a_1^3 \times \frac{\beta^2(1-\beta^2)(1+\beta^2)}{u_0^2}\right)\\
&= -\frac{\beta^2(1-\beta^2)}{192u_0^2}a_1^3
\end{aligned} \tag{22}
$$

从中可以看到 $$\frac{a_3}{a_1} \sim \left( \frac{a_1}{u_0}\right)^2$$，说明 $$a_3$$ 的确是相比于 $$a_0$$ 和 $$a_2$$ 更高阶的小量，所以我们这一波计算的处理是合理的。

最后也是最漂亮的结果，即 Bertrand 定理的核心内容，来源于剩下的 $$(18b)$$ 式。把我们得到的诸多结果通通代进来：

$$
\left(-\frac{1-\beta^2}{4u_0}a_1^2 + \frac{1}{2}\frac{1-\beta^2}{12u_0}a_1^2\right)\times a_1\times \frac{-\beta^2(1-\beta^2)}{u_0} + \frac{1}{8}a_1^3\times\frac{\beta^2(1-\beta^2)(1+\beta^2)}{u_0^2}=0
$$

化简后可以得到一个并不是那么可怕的多项式方程：

$$
\begin{aligned}
\frac{5\beta^2(1-\beta^2)^2a_1^3}{24u_0^2} + \frac{\beta^2(1-\beta^2)(1+\beta^2)a_1^3}{8u_0^2}=0 \\
\frac{a_1^3\beta^2 (1-\beta^2)}{24u_0^2} \left[ 5(1-\beta^2) + 3(1+\beta^2)\right] =0 \\
\frac{a_1^3}{12u_0^2}\beta^2 (1-\beta^2)(4-\beta^2) =0
\end{aligned} \tag{23}
$$

上式要成立，仅有三种可能：$$\beta^2=0, 1, 4$$。其中 $$\beta^2=0$$ 很无趣，因为它意味着和圆轨道的偏差为恒定值的轨道，它依然是个正圆轨道，因此显然是闭合的。而另两种情况对应于更有趣的物理图像。我们可以利用 $$(15)$$ 式写出对应的有心力的形式：

$$
\begin{aligned}
\beta^2=1 \qquad &\Rightarrow \qquad f(r) = -\frac{k}{r^2} \\
\beta^2=4 \qquad &\Rightarrow \qquad f(r) = -kr \\
\end{aligned} \tag{24}
$$

**正是牛顿的引力平方反比律（inverse square law）和胡克定律（Hooke's law）！**

不得不感叹大自然真的式非常神奇！**我们从圆轨道出发，考察了在微小能量扰动下依然可以保持轨道稳定性以及闭合性的有心力的形式。如果只是相比圆轨道微乎其微的偏移，有心力 $$f(r)$$ 将具有 $$(15)$$ 式的简单形式，其中 $$\beta$$ 可取任意有理数。但是如果要求轨道遇到更大的能量或是角动量的扰动依然能保持稳定和闭合，那么 $$\beta$$ 只能有两种可能的取值。**这两种可能性中，胡克定律显然不能在任意尺度上都成立，因为如此会导致一个随距离可以无限增大的作用力，放到宇宙尺度这就很可怕了。所以在茫茫宇宙中，星体要保持轨道的稳定和闭合，只剩下了唯一一种选择——**从我们的太阳系，到星际空间中的诸多双星系统，遍布的闭合轨道其实在变相告诉我们，引力只能是随距离呈平方反比地递减。**

{% include figure.liquid loading="eager" path="assets/img/no-other-way.jpg" title="There is no other way." class="img-natural rounded z-depth-1" %}

平方反比率这个如此神奇的性质其实来源于一个更神奇的事实：除了总能量和角动量之外，符合平方反比律的有心力场还有一个额外的守恒量——Laplace-Runge-Lenz 矢量。这个就留作下不知道会是什么时候的下次的主题吧。

### Reference

1. F. C. Santos, V. Soares, A. C. Tort, An English translation o Bertrand's theorem, arXiv:0704.2396
2. Herbert Goldstein & Charles Poole& John Safko, Classical Mechanics (3rd Edition) (2001), Chapter 3.5~3.6
3. Herbert Goldstein, Classical Mechanics (2nd Edition) (1980), Appendix-A

