---
layout: post
title: "『概率论笔记』中心极限定理：从二项分布到正态分布"
date: 2026-10-01 10:56:00
description: 重温概率论的抄书笔记：随机过程在不确定性的外表之下，如何暗藏着有组织有纪律的规律
tags: mathematics a-level calculus probability
categories: mathematics a-level 
---

## 中心极限定理：引子

对正态分布的了解越多，越能感受到它的神奇。在今年早些时候的一篇关于[信息熵的笔记]({{site.baseurl}}/blog/2026/maximum-entropy/)中，我们介绍过正态分布是一种最无知的分布。具体而言，在已知均值和方差的前提下，使得信息熵 $$H[p] = - \int p(x) \ln p(x) \,\mathrm{d}x$$ 有极大值的连续概率分布恰恰就是正态分布！

在本篇笔记中，我们来探究统计学中另一个重要的结论——中心极限定理（Central Limit Theorem）：对于任何遵从相同概率分布的一系列独立随机变量 $$X_1, X_2, \cdots, X_n$$，且方差有限，那么不论它们服从的原始分布的形状如何，只要样本数量足够大，这些随机变量的总和（或者样本均值）总是趋向服从于一个正态分布（normal distribution）。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/central_limit.gif" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    盗图来自：<a href="https://blog.devgenius.io/central-limit-theorem-an-experimental-proof-b79c4ea62a13">https://blog.devgenius.io/central-limit-theorem-an-experimental-proof-b79c4ea62a13</a>
</div>

换言之，中心极限定理告诉我们，随机过程在不确定性的外表之下，暗藏着有组织有纪律的规律，大量随机变量之和注定要归于正态分布。在实际应用中，如果我们能够采集足够多的样本，不论是检测工业流水线上的零件指标是否合规，还是信号处理中需要面对的背景噪声问题，又或是拥有大量客户的保险公司确定合理的保费和理赔金额，很多时候我们就可以用正态分布来对这个系统建模。中心极限定理可谓是数理统计学和误差分析的重要理论基础。

中心极限定理的证明乍一想会让人觉得很复杂，事实上也确实一点也不简单。它的严格证明历经由多位数学家逐渐接力完成，前后跨越了200来年的历程。18世纪30年代，法国数学家 Abraham De Moivre 在研究二项分布问题（binomial distribution）时，首次发现当样本量很大时，二项分布的概率规律可以由正态分布来近似，建立起了中心极限定理的最早雏形。到了19世纪初，同样是法国数学界大腕的 Pierre-Simon Laplace 扩展了 De Moivre 的工作，证明了对于更一般的二项分布参数，大样本下收敛于正态分布依然成立。如今我们将这一针对二项分布的结论称为 De Moivre–Laplace 中心极限定理。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binomial_to_normal.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    盗图来自：<a href="https://statisticsfundamentals.com/binomial-distribution/">https://statisticsfundamentals.com/binomial-distribution/</a>
</div>

19世纪末期至20世纪初，Pafnuty Chebyshev 和其学生开创了俄罗斯概率论学派，Aleksandr Lyapunov 对独立但不同分布的随机变量总和的分布给出了严格、精确的数学证明，确立了 Lyapunov 中心极限定理。此后，Jarl Waldemar Lindeberg、Paul Lévy、William Feller 等数学家在20世纪20~30年代给出了通用的中心极限定理以及定理成立的充分必要条件，标志着中心极限定理在现代概率论中的理论大厦彻底完成。

我显然是远没有打通这一套满血版中心极限定理的功力，所以在这篇笔记中，我将继续借（chao1）鉴（xi2）Stephen Hewson 所著的 [A Mathematical Bridge]({{site.baseurl}}/books/2026_math_bridge/)，探讨中心极限定理的一个简单特例（其实就是重走一遍 De Moivre 当年的路，虽然好像也不那么简单）。即便只是这么一个弱化版本定理的证明，其过程依然用到了许多数学技巧，值得我们去品味和理解。

## De Moivre–Laplace 中心极限定理

在我们考察的特例中，我们约定随机变量 $$X_1, X_2, \cdots, X_n$$ 均服从成功概率为 $$p=\dfrac{1}{2}$$ 的 Bernoulli 分布（等同于抛硬币实验，即每个 $$X_i$$ 都是一半的概率等于1，一半的概率等于0），于是它们的总和服从二项式分布：

$$
S_n = X_1 + X_2 + \cdots + X_n \sim B\left(n, \frac{1}{2}\right)
$$

样本总和 $$S_n = r$$ 的概率为：

$$
P(S_n = r) = \frac{n!}{r!(n-r)!} \times \frac{1}{2^n}
$$

显然，$$S_n$$ 的期望值和标准差（此处默认读者对二项分布足够熟悉）分别为：

$$
\mu_n = \frac{1}{2}n \qquad \sigma_n=\frac{1}{2}\sqrt{n}
$$

当 $$n$$ 充分大时，可以用 Stirling 公式把阶乘改写成幂次的形式：

$$
n! \approx \sqrt{2\pi n} \cdot \left( \frac{n}{e}\right)^n \qquad (n\gg1)
$$

于是有：

$$
\begin{align*}
P(S_n = r) & \approx \frac{\sqrt{2\pi n} \cdot \left( \dfrac{n}{e}\right)^n}{\sqrt{2\pi r} \cdot \left( \dfrac{r}{e}\right)^r \times \sqrt{2\pi (n-r)} \cdot \left( \dfrac{n-r}{e}\right)^{n-r} } \times \frac{1}{2^n} \\
& = \frac{1}{\sqrt{2\pi}} \sqrt{\frac{n}{r(n-r)}} \cdot\left( \dfrac{n}{2}\right)^n \frac{1}{r^r \cdot(n-r)^{n-r}} \\
& = \frac{1}{\sqrt{2\pi}} \sqrt{\frac{n}{r(n-r)}} \left( \dfrac{\frac{1}{2}n}{r}\right)^r \left( \dfrac{\frac{1}{2}n}{n-r}\right)^{n-r} \\
& = \frac{1}{\sqrt{2\pi}} \sqrt{\frac{n}{r(n-r)}} \left( \dfrac{r}{\frac{1}{2}n}\right)^{-r} \left( \dfrac{n-r}{\frac{1}{2}n}\right)^{-n+r}
\end{align*}
$$

接下来，我们将看到这一大东西的不同部分在 $$n$$ 充分大的情况下会各自趋于某个合理的极限，从而能够让 $$P(S_n = r)$$ 的结果大大简化。

引入记号：

$$
\begin{align*}
\alpha(n,r) &= \sqrt{\frac{n}{r(n-r)}} \\
\beta(n,r) & = \left( \dfrac{r}{\frac{1}{2}n}\right)^{-r} \left( \dfrac{n-r}{\frac{1}{2}n}\right)^{-n+r}
\end{align*}
$$

处理 $$\alpha(n,r)$$ 之前，我们先对 $$r$$ 作一波标准化变换（standardization），即将 $$S_n = r$$ 的值转换成相较于期望值 $$\mu$$ 偏离了 $$x_r$$ 倍标准差 $$\sigma$$ 的描述，记：

$$
r = \mu_n + x_r\sigma_n = \frac{1}{2}n + \frac{1}{2}\sqrt{n} x_r
$$

顺手有：

$$
n-r = \frac{1}{2}n - \frac{1}{2}\sqrt{n} x_r
$$

代入至 $$\alpha(n,r)$$ 中：

$$
\begin{align*}
\alpha(n,r) &= \sqrt{\frac{n}{\left( \frac{1}{2}n + \frac{1}{2}\sqrt{n} x_r \right)\left( \frac{1}{2}n - \frac{1}{2}\sqrt{n} x_r \right)}} \\
& = \sqrt{\frac{n}{ \frac{1}{4}n^2 - \frac{1}{4}n x_r^2}} \\
&= \sqrt{\frac{\frac{4}{n}}{ 1 -  \frac{x_r^2}{n}}} \\
\Rightarrow \;\alpha(n,r) &\approx \frac{2}{\sqrt{n}}
\end{align*}
$$

$$\beta(n,r)$$ 长得更加不讨喜，慢慢来，也先把标准化变换用进来：

$$
\beta(n,r) = \left( 1 + \frac{x_r}{\sqrt{n}}\right)^{-r} \left( 1 - \frac{x_r}{\sqrt{n}} \right)^{-n+r}
$$

再取个对数先把幂次给干掉：

$$
\ln \beta(n,r)  = -r\ln\left( 1 + \frac{x_r}{\sqrt{n}}\right) -(n-r)\ln\left( 1 - \frac{x_r}{\sqrt{n}} \right)
$$

接着用 $$\ln(1+t)$$ 的 Taylor 级数展开：

$$
\ln (1+t) = t - \frac{1}{2}t^2 + \frac{1}{3}t^3 - \frac{1}{4}t^4 + \cdots \qquad (|t|<1)
$$

Taylor 展开后保留到 $$x_r^2$$ 的二阶项，可以继续化简：

$$
\begin{align*}
\ln \beta(n,r) &\approx -r \left( \frac{x_r}{\sqrt{n}} - \frac{1}{2} \frac{x_r^2}{n} + \frac{1}{3} \frac{x_r^3}{n\sqrt{n}} - \frac{1}{4} \frac{x_r^4}{n^2}\right) \\
 & \qquad-(n-r) \left( -\frac{x_r}{\sqrt{n}} - \frac{1}{2} \frac{x_r^2}{n} - \frac{1}{3} \frac{x_r^3}{n\sqrt{n}} - \frac{1}{4} \frac{x_r^4}{n^2}\right) \\
& = (n-2r)\frac{x_r}{\sqrt{n}} + n \cdot \frac{1}{2} \frac{x_r^2}{n} + (n-2r)\cdot\frac{1}{3}\frac{x_r^3}{n\sqrt{n}} + n \cdot \frac{1}{4} \frac{x_r^4}{n^2}\\
&= (-\sqrt{n} x_r) \frac{x_r}{\sqrt{n}} + \frac{1}{2} x_r^2 + (-\sqrt{n} x_r) \frac{1}{3}\frac{x_r^3}{n\sqrt{n}} + \frac{1}{4} \frac{x_r^4}{n} \\
& = -\frac{1}{2}x_r^2 - \frac{1}{12} \frac{x_r^4}{n}
\end{align*}
$$

可以看到在 $$n \to \infty$$ 的极限下，我们可以舍去 $$x_r^2$$ 更高阶的项，仅保留到二阶，我们有：

$$
\ln \beta(n,r) \approx -\frac{1}{2}x_r^2
$$

这说明：

$$
\Rightarrow \;\beta(n,r) \approx \mathrm{e}^{-\frac{1}{2}x_r^2}
$$

把 $$\alpha(n,r)$$ 和 $$\beta(n,r)$$ 的结果通通代回到 $$P(S_n = r)$$ 的概率：

$$
P(S_n = r) \approx \frac{1}{\sqrt{2\pi}} \frac{2}{\sqrt{n}} \mathrm{e}^{-\frac{1}{2}x_r^2}
$$

注意到 $$\sigma_n = \dfrac{1}{2}\sqrt{n}$$ 以及 $$x_r = \dfrac{r-\mu_n}{\sigma_n}$$，上式可以写作：

$$
\boxed{ P(S_n = r) \approx \frac{1}{\sqrt{2\pi} \sigma_n}  \mathrm{e}^{-\frac{(r-\mu_n)^2}{2\sigma_n^2}} }
$$

如果我们进一步考察样本总和 $$S_n$$ 界于某两个特定值 $$a$$ 和 $$b$$ 之间的概率，有：

$$
P(a\leq S_n \leq b) = \sum_{r=a}^b P(S_n = r) \approx \frac{1}{\sqrt{2\pi} \sigma_n} \sum_{r=a}^b \mathrm{e}^{-\frac{(r-\mu_n)^2}{2\sigma_n^2}}
$$

需要求和的这些概率值可以转化为一个定积分，推出：

$$
\boxed{ P(a\leq S_n \leq b) \approx \frac{1}{\sqrt{2\pi} \sigma_n} \int_a^b  \mathrm{e}^{-\frac{(x-\mu_n)^2}{2\sigma_n^2}} \,\mathrm{d}x }
$$

这正是如假包换的正态分布 $$N(\mu_n, \sigma_n^2)$$ 在区间 $$[a,b]$$ 上的概率。

## 彩蛋

也许这算是典型的为了一碟醋包了一盘饺子的行为？

但是入（bai4）手（jia1）了这么寓（pi4）教（yong4）于（mei3）乐（you3）的玩具，怎么着也得拿出来秀一秀，不是么？

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0" style="display: flex; justify-content: center;">
        {% include video.liquid path="assets/video/galton_board.mp4" class="img-fluid rounded z-depth-1" controls=true width=480 %}
    </div>
</div>

关键词：高尔顿板（Galton Board），有钱有闲的，懂得也都该知道可以做什么了。不用客气，再见！