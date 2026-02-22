---
layout: post
title: "Lotka-Volterra 猎食者-猎物模型"
date: 2021-09-23 16:49:00
description: 数学模型的视角来理解生态系统中的两个物种的数量变化规律
tags: mathematics biology modelling
categories: mathematics biology
---

## 历史回顾

据我的不靠谱考证，早在1942年，统计学家 Charles Elton 和 Mary Nicholson 通过分析加拿大一家名为 Hudson Bay 的皮草贸易公司在一个多世纪的交易数据后发现，每年捕获的雪兔数量和猞猁数量呈现出十分规则的周期变化。可以认为，在野生动物保护法规没有那么严格的当时，每年捕获的野生动物数量与该物种自身的种群规模大体呈正比。在自然界中，雪兔和猞猁互为猎物和猎食者，它们的种群数量的这种变化规律引发了不少研究学者的关注。

{% include figure.liquid loading="eager" path="assets/img/hare-lynx.png" title="" class="img-natural rounded z-depth-1" %}

而在1925年前后，美国数学家 Alfred J. Lotka (1880-1949) 和意大利数学家 Vito Volterra (1860-1940) 前后独立提出了一个类似的可以描述这种涨落规律的模型。该模型后来就因此以这两位研究者的名字命名，现被称为 Lotka-Volterra 模型，也常被称作猎食者-猎物（predator-prey）模型，后来逐渐发展成为了生态系统研究中的一个标志性的模型。

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra.jpg" title="" class="img-natural rounded z-depth-1" %}

这个模型核心的两条微分方程，即 Lotka-Volterra 方程，可以给出掠食者和猎物的种群规模（population size）的变化如何却决于双方的数量和互动。在这篇文章中，我们将来了解下 Lotka-Volterra 模型给出的一些有趣的结论。

## Lotka-Volterra 方程

猎物的种群数量 $$U(t)$$ 和捕食者的种群数量 $$V(t)$$ 随时间 $$t$$ 的变化由如下的 Lotka-Volterra 方程给出：

$$
\left\{\begin{aligned}
\frac{\mathrm{d} U}{\mathrm{d} t} &= \alpha U - \gamma UV & (1a)\\
\frac{\mathrm{d} V}{\mathrm{d} t} &= -\beta V + e\gamma UV & (1b)
\end{aligned}\right.
$$

方程右边的第一项给出的是各种群自身在自然环境下的变化趋势，而第二项描述的是猎物被猎食者捕杀导致的变化。

具体而言，可以把 $$\alpha$$ 看作猎物的自然增长率，即它们的自然出生率和自然死亡率之间的差。在此我们假定猎物生存所需的资源总是充沛的，如果不存在天敌，则它们的种群可以不断繁衍，其数量呈指数增长。而对于猎食者而言，如果没有了猎物，它们就会因为缺少食物资源而饿死，自然增长率为负，所以方程中的 $$\beta$$ 可以想象成它们的自然死亡率。

另一方面，如果考虑猎物本身受到捕食，猎物的种群数量会减少。$$\gamma$$ 可以视作猎物在单位时间内被猎食者捕获的比例，所以在 $$\mathrm{d}t$$ 间隔内，被捕获的猎物总数为 $$\gamma \mathrm{d} t\times  UV$$，可以对应于方程右边的第二项。猎食者有了食物填饱肚子，就有机会繁衍它们的后代。一般猎食者总是需要吃上好几顿饱的，才有机会养育出一个新生宝宝，所以这里会有一个捕获猎物数量和新生小猎食者数量之间的换算关系，方程出现的因子 $$e$$ 就是这样一个转换系数。

有意思的是，尽管这组微分方程是非线性的，而且没有可以用初等三角函数表示的解析解，但是它们的解却总是有很有规律地呈现周期性。正如 Alfred J. Lotka 本人在1920年的一篇论文中写道：It was, therefore, with considerable surprise that the writer, on applying his method to certain special cases, found these to lead to undamped, and hence indefinitely continued, oscillations.

## 稳定性分析

在分析不同种群的竞争作用时，整个生态系统的稳定性是一个我们经常关注的议题。

Lotka-Volterra 模型中，我们很容易找到系统的平衡点，或者叫不动点（fixed point）。令 $$\frac{\mathrm{d} U}{\mathrm{d} t} = \frac{\mathrm{d} V}{\mathrm{d} t} = 0$$，即

$$
\left\{\begin{aligned}
U (\alpha  - \gamma V) &= 0\\
V (e\gamma U -\beta ) &= 0
\end{aligned} \right.
$$

可以解出两个平衡点

$$
\left\{\begin{aligned}
U^* &= 0 \\ \\
V^* &= 0
\end{aligned} \right.
\qquad \text{或} \qquad
\left\{\begin{aligned}
U^* &= \frac{\beta}{e\gamma} \\
V^* &= \frac{\alpha}{\gamma}
\end{aligned} \right.
$$

第一个平衡点将两个种群的数量全部清零，将来自然也永远为零，是一个很无趣的平庸解。此外，如果 $$U$$ 的数量存在稍许偏离，它将立刻呈现指数增长，所以这还是个不稳定的平衡点。

更有意思的第二个平衡点将是我们接下来分析的重头。我们将证明，不论那些参数驱逐如何，这一定是稳定平衡点（stable fixed point）。

设 $$U$$ 和 $$V$$ 相比 $$U^*$$ 和 $$V^*$$ 有微小的偏离，记作

$$
U(t) = U^* + \epsilon(t), \quad V = V^*+\delta(t)
$$

忽略高阶小量 $$\epsilon\delta$$，Lotka-Volterra 方程可以重新写成

$$
\left\{\begin{aligned}
\frac{\mathrm{d} \epsilon}{\mathrm{d} t} &= -\frac{\beta}{e}\delta & (2a)\\
\frac{\mathrm{d} \delta}{\mathrm{d} t} &= e \alpha \epsilon & (2b)
\end{aligned}\right.
$$

将 $$(2b)$$ 代入 $$(2a)$$ 中，可以消去 $$\delta$$，得到只含有 $$\epsilon$$ 的方程

$$
\frac{\mathrm{d}^2 \epsilon}{\mathrm{d} t^2} + \alpha\beta \epsilon = 0
$$

这是个再常见不过的二阶微分方程，引入频率 $$\omega = \sqrt{\alpha \beta}$$，方程的通解可以写成

$$
\epsilon(t) =A \cos\omega t + B\sin\omega t \qquad (3a)
$$

其中 $$A$$ 和 $$B$$ 是可以由系统初始状态确定的常数。

接着由 $$(2a)$$ 也能很快得到对应的 $$\delta$$ 的解

$$
\delta(t) = e\sqrt{\frac{\alpha}{\beta}} (A\sin\omega t - B\cos\omega t)  \qquad (3b)
$$

以上解说明，若当猎物种群数量 $$U$$ 和猎食者种群数量 $$V$$ 偏离平衡点，将来的偏离也只会在平衡点附近随时间震荡，而且呈现出非常规律的周期性。两个种群数量波动的周期都为

$$
T = \frac{2\pi}{\omega} = \frac{2\pi}{\sqrt{\alpha\beta}}
$$

## 数值模拟

Lotka-Volterra 方程组虽然不能得到解析解，但是利用软件还是很容易做参数 $$\alpha$$, $$\beta$$, $$\gamma$$ 和 $$e$$ 在不同取值时的数值模拟。

在敲代码之前，有心的读者可能会注意到，其实这个问题的求解并不需要如此多的自由参数。种群的大小可以通过与平衡点的种群大小来衡量，时间尺度则可以跟我们先前得到的周期比较来衡量。作标度变换，我们引入如下的相对种群规模变量

$$
u = \frac{U}{U^*} = \frac{e\gamma}{\beta}U, \qquad v = \frac{V}{V^*} = \frac{\gamma}{\alpha}V
$$

以及无量纲时间

$$
\tau = \sqrt{\alpha \beta} t
$$

原来的 Lotka-Volterra 方程组可以被改写成

$$
\left\{\begin{aligned}
\frac{\mathrm{d} u}{\mathrm{d} \tau} &= r (u - uv) & (1a)\\
\frac{\mathrm{d} v}{\mathrm{d} \tau} &= \frac{1}{r} (uv - v) & (1b)
\end{aligned}\right.
$$

这里只剩下了一个自由的无量纲参数 $$r = \sqrt{\frac{\alpha}{\beta}}$$。如此便说明，在数值模拟时，我们只需要调节1个而不是4个参数，问题可以大大简化。$$r$$ 值的大小和系统初始条件就可以完全确定解的行为。

下面是我用 Python + matplotlib 作的模拟图。下面几张图给出了不同 $$ r $$ 的取值对应的猎物和猎食者数量随时间的变化：

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-1.png" title="" class="img-natural rounded z-depth-1" %}

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-2.png" title="" class="img-natural rounded z-depth-1" %}

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-3.png" title="" class="img-natural rounded z-depth-1" %}

尽管种群数量可以大幅度偏离平衡点，但是随时间的波动依然非常类似于三角函数的震荡，而且呈现出明显的周期性。

图中可以看到，当猎物数量开始上升，随后不久猎食者的数量也会跟着上升。由于可以抓的猎物多了，猎食者的日子显然会变得更好过。但猎食者数量增多之后，过度捕猎会导致猎物的种群规模减小。随后由于自身生存依赖的猎物不好抓了，猎食者的数量也随之减小。当来自于猎食者的威胁变得没有那么大时，猎物种群又可以快乐繁衍，种群规模快速攀升，如此不断反复。猎食者的数量波动相比于猎物的数量总是呈现大约四分之一个周期的滞后效应。

接下来几张图给出初始条件的不同对种群数量变化的影响。

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-4.png" title="" class="img-natural rounded z-depth-1" %}

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-5.png" title="" class="img-natural rounded z-depth-1" %}

{% include figure.liquid loading="eager" path="assets/img/lotka-volterra-simulation-6.png" title="" class="img-natural rounded z-depth-1" %}

可以看到不论 $$r$$ 的取值，相图（phase diagram）总是勾画出闭合的轨迹，也正是种群数量变化具有周期性的体现。这些图中，我们也能很直观地看到猎物和猎食者的种群规模此消彼长的变化关系。

## 模型的推广

诸如开篇我们提到的雪兔-猞猁、或是狒狒-猎豹这类符合猎物-猎食者关系的物种群体，可以看到 Lotka-Volterra 方程描绘出的数量的周期性波动行为，和实测数据还是大体符合得不错。

但是这个模型中考虑的因素相比于生态系统的复杂性而言，还是太少、太过理想化。

比如在数值模拟中，某个物种的种群数量可以变成极其接近于0的值，然后又回复到可观的数量。但在实际中，不要说计算时允许出现的 0.xx 这样的数值，物种数量但凡掉到一个极低的水平以下之后，那基本就是要灭绝的节奏了。

这个模型中假设猎物总是有充足的食物，资源无限多。但是自然环境不可能无限制地容纳某个特定物种，即便是同个种群的个体之间也会因为有限的资源展开竞争，当种群规模很大时，猎物群体不再是自然增长，而是会因竞争而下降。类似的，捕猎者的个体之间，也时常会出现为了争夺领地的竞争，捕猎者数量的增长也并不是猎物多了就自然也多起来这么简单。

此外，Lotka-Volterra 还有一个非常 bug 的特点——它虽然不发散，但它也不收敛。它的初始状态直接决定了长期的行为，种群规模永远在一个固定的峰值和一个固定的谷值之间震荡，这跟通常会趋于某种平衡状态的生态系统很不一样。 

因此，在最初的 Lotka-Volterra 方程的基础上，后来的研究者们发展出了很多衍生的模型，包括引入新的项来体现竞争因素，或是利用更多的关联的微分方程来描述食物链中互相影响的多个种群。广义 Lotka-Volterra 模型不仅可以更好地描绘出生物种群的变化，它背后的动力学也吸引了很多数学研究者的兴趣。在更复杂的广义模型中，可以自发地产生混沌（chaos）现象，但也可以存在吸引子（attractor），这些都是非线性动力学中很有意思的课题。类似的模型也被研究者拿去推广至其他领域，例如研究商业经济活动中的繁荣和衰退的周期性变化。感兴趣的读者，推荐芝加哥大学的生态学教授 Stefano Allesina 编写的可在线阅读的 [Lecture Notes](https://stefanoallesina.github.io/Sao_Paulo_School/)