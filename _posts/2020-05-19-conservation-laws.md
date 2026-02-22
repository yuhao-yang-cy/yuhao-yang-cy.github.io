---
layout: post
title: "分析力学读书笔记：对称性与守恒律"
date: 2020-05-19 11:09:00
description: 来自 Tom Kibble 经典力学教材的摘抄：利用 Hamiltonian Formalism 巧妙揭示对称性和守恒量之间的深刻关联
tags: mathematics physics mechanics symmetry
categories: mathematics physics theoretical-physics
---

## 一些题外话

本篇是我重读 Tom Kibble 编写的经典力学教材的读书笔记。

对称性和守恒律之间的紧密联系可谓是理论物理中最深刻的一条结论。德国数学家 Emmy Noether 在1918年证明了现在冠有她大名的著名定理：**对于一个物理体系，任何能够使得体系作用量不变的连续变换都会有一个守恒量与之对应。**

这个重要对应关系的建立，在几乎任何一本量子场论（QFT）的教材里都会有涉及，我第一次见到 Noether 定理的证明大约是第一次读 Peskin & Schroeder，后来又在很多其他的 QFT 教材中见到过。QFT 中通常的处理是利用变分法，建立起 Euler-Lagrange 方程，然后要求连续变换下最用量具有不变性，可以导出对应的守恒流与守恒荷。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/noether.jpg" title="Emmy Noether 和她揭示的 Noether 定理，盗图来自网络" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Emmy Noether 和她揭示的 Noether 定理，盗图来自网络
</div>

我在 Kibble 的书中读到的是另一种截然不同的推导思路。不过在具体展开之前，请容许我再话痨几句说说 Tom Kibble 这尊大神是何许人也。Tom Kibble 是帝国理工学院（Imperial College London）的荣誉教授，在高能粒子理论、广义相对论、宇宙学等领域都有非常漂亮的工作。早在60年代，为了解释基本粒子的质量起源问题，有3个团队的6位科学家几乎同时、独立地提出了现在被称作**对称破缺（symmetry breaking）**的机制。Tom Kibble 就是其中的一位。近50年后，这个理论预言的 Higgs boson 在高能强子对撞机实验中被发现，很多媒体将其称为所谓的“上帝粒子”。这6位科学家中的两位，Peter Higgs 和 François Englert 因为这项工作荣获了2013年的诺贝尔物理学奖，而同样作出重大贡献的 Tom Kibble 遗憾地与物理殿堂的最高荣誉失之交臂，这点后来也是备受争议。

但是毫无疑问，作为这个星球上对理解对称性作出重要工作的科学家之一，Tom Kibble 对对称性的理解是非常深刻的。在 Kibble 的力学教材中，他采取的哈密顿力学框架（Hamiltonian formalism）下的证明思路，异常巧妙地揭示了对称性和守恒量之间的深刻关联。

## 推导过程

假设存在某个取决于坐标 $$q$$、动量 $$p$$ 和时间 $$t$$ 的物理量 $$ G(q,p,t) $$，我们将它视作关于 $$q,p,t$$ 的一个函数，并定义它可以产生如下的变换

$$
\delta q_\alpha = \frac{\partial G}{\partial p_\alpha} \delta \lambda, \quad \delta p_\alpha = -\frac{\partial G}{\partial q_\alpha} \delta \lambda \qquad (1)
$$

其中 $$ \delta \lambda $$ 是一个无穷小的参量。如果有另一个函数 $$ F(q,p,t)$$，在生成函数 $$G$$ 产生的变换下导致的变化为：

$$
\begin{aligned}\delta F & = \sum_{\alpha=1}^N \left( \frac{\partial F}{\partial q_\alpha} \delta q_\alpha + \frac{\partial F}{\partial p_\alpha} \delta p_\alpha \right)  \\& = \sum_{\alpha=1}^N \left( \frac{\partial F}{\partial q_\alpha} \frac{\partial G}{\partial p_\alpha}  - \frac{\partial F}{\partial p_\alpha} \frac{\partial G}{\partial q_\alpha} \right) \delta \lambda \\& = [F,G] \delta \lambda \qquad (2)\end{aligned}
$$

上式中定义了泊松括号（Poisson bracket）

$$
[F,G] = \sum_{\alpha=1}^N \left( \frac{\partial F}{\partial q_\alpha} \frac{\partial G}{\partial p_\alpha}  - \frac{\partial F}{\partial p_\alpha} \frac{\partial G}{\partial q_\alpha} \right) \qquad (3)
$$

从定义中很容易看出泊松括号的反对称性质

$$
[F,G] = -[G,F] \qquad (4)
$$

我们接下来就可以来讨论体系的对称性质了。如果体系的哈密顿量（Hamiltonian）$$ H$$ 在某个 $$G$$ 生成的空间和动量变换下保持不变，那么 $$H$$ 必须满足：

$$
\delta H = [H,G] \delta \lambda = 0 \qquad (5)
$$

这要求 $$[H,G]=0$$，如果这个关系成立，那么根据（4）立刻得知 $$[G,H]=0$$。

现在考虑 $$G$$ 随时间的变化率

$$
\frac{\mathrm{d}G}{\mathrm{d}t} = \frac{\partial G}{\partial t} + \sum_{\alpha=1}^N \left( \frac{\partial G}{\partial q_\alpha} \dot{q}_\alpha + \frac{\partial G}{\partial p_\alpha} \dot{p}_\alpha \right) \qquad (6)
$$

利用哈密顿方程（Hamiltonian equations）

$$
\frac{\partial H}{\partial p_\alpha} = \dot{q}_\alpha, \quad \frac{\partial H}{\partial q_\alpha} = -\dot{p}_\alpha \qquad (7)
$$

（6）可以改写成：

$$
\begin{aligned}
\frac{\mathrm{d}G}{\mathrm{d}t} & = \frac{\partial G}{\partial t} + \sum_{\alpha=1}^N \left( \frac{\partial G}{\partial q_\alpha} \frac{\partial H}{\partial p_\alpha} - \frac{\partial G}{\partial p_\alpha} \frac{\partial H}{\partial q_\alpha} \right) \\
& = \frac{\partial G}{\partial t} + [G,H] \qquad (8)
\end{aligned}
$$

我们已经论证了如果 $$H$$ 具有不变性则 $$[G,H]=0$$，如果 $$G$$ 还不显含时间 $$t$$，那么就有

$$
\frac{\mathrm{d}G}{\mathrm{d}t}=0 \qquad (9)
$$

这说明**如果 $$H$$ 在一个不显含时间的变换 $$G$$ 下具有不变性，那么对应的 $$G$$ 将是一个守恒量。**

## 小结：不变性与守恒量

我们小结一下得到的结论。

我们可以考虑各种有意义的坐标变换和动量变换，然后试写出变换所对应的生成函数 $$G$$。如果 $$G$$ 满足如下条件：

1. $$[H,G]=0$$
2. $$G$$ 不显含时间

那么 $$G$$ 是一个守恒量。

## 例1：时间平移变换

若在时间上进行无穷小的平移 $$\delta t$$，可以证明：对应 $$\boldsymbol{r}$$ 和 $$\boldsymbol{p}$$ 的变化可以由哈密顿量 $$H$$ 生成。我们直接取 $$G=H$$，可以验证

$$
\begin{aligned}
\frac{\partial H}{\partial p_\alpha} \delta t = \dot{q}_\alpha\delta t = \delta q_\alpha \\-\frac{\partial H}{\partial q_\alpha} \delta t = \dot{p}_\alpha\delta t = \delta p_\alpha
\end{aligned}
$$

即为（1）式定义的变换规则。

很显然 $$[H,H]=0$$。如果 $$H$$ 不显含时间，那么 $$H$$ 自身就是一个守恒量：$$\frac{\mathrm{d}H}{\mathrm{d}t}=0$$。这个其实是一个**能量守恒定律**。

## 例2：空间平移变换

在空间中沿 $$x$$ 方向的无穷小平移变换可以表示为：

$$
\begin{aligned}
\delta x_i = \delta \lambda, \quad \delta y_i = \delta z_i = 0 \qquad (10a)\\
\delta p_{xi} = \delta p_{yi} = \delta p_{zi} = 0 \qquad (10b)
\end{aligned}
$$

通常情况下，$$H$$ 会取决于体系内质点间的坐标差 $$\boldsymbol{r}_i - \boldsymbol{r}_j$$，因此空间整体的平移变换不会影响  $$\boldsymbol{r}_i - \boldsymbol{r}_j$$ 的值，因此 $$H$$ 应当在该空间平移变换下保持不变。

生成以上变换的函数 $$G$$ 可以取作 $$x$$ 方向上的总动量：

$$
G = P_x = \sum_{i=1}^N p_{xi} \qquad (11)
$$

将（11）代入（1）中可以很容易得到（10）的结果。

由此我们得知：$$\frac{\mathrm{d}P_x}{\mathrm{d}t}=0$$，即 $$x$$-方向上的总动量守恒。

更一般地，在空间中沿某单位矢量 $$\boldsymbol{n}$$ 的平移变换可以由如下的函数产生：

$$
G = \boldsymbol{n} \cdot \boldsymbol{P} = \sum_{i=1}^N \boldsymbol{n} \cdot \boldsymbol{P_i} \qquad (12)
$$

其中 $$\boldsymbol{P}$$ 代表体系的总动量，于是 **$$H$$ 在空间平移变换下的不变性意味着任意方向上的动量守恒**。

## 例3：转动变换

绕 $$z$$ 轴转动一个无穷小的角度 $$\delta \phi$$ 的变换可以具体表示为：

$$
\begin{aligned}
\delta x_i = -y_i \delta \phi, \quad \delta y_i = x_i \delta \phi, \quad \delta z_i = 0 \qquad (13a)\\\delta p_{xi} = -p_{yi} \delta \phi, \quad \delta p_{yi} = -p_{xi} \delta \phi, \quad \delta p_{zi} = 0 \qquad (13b)
\end{aligned}
$$

只要 $$H$$ 中不要含有太过奇葩的项，通常的 $$H$$ 在以上变换下都具有不变性。读者可以自行验证，比如 $$H$$ 中含有诸如 $$\boldsymbol{r}^2 = x_i^2 + y_i^2 + z_i^2$$，或者 $$\boldsymbol{r}_i\cdot\boldsymbol{r}_j = x_i x_j + y_i y_j + z_i z_j$$，甚至 $$\boldsymbol{r}_i\cdot\boldsymbol{p}_j  =x_i p_{xj} + y_i p_{yj} + z_i p_{zj}$$ 这样的项，都能在（13）的变换下保持不变。

读者同样可以验证，生成以上变换的函数 $$G$$ 可以取作角动量在 $$z$$ 轴方向上的分量：

$$
G = J_z = \sum_{i=1}^N (x_i p_{yi} - y_i p_{xi}) \qquad (14)
$$

根据前面的讨论，这即意味着 $$z$$ 方向上的角动量守恒：$$\frac{\mathrm{d}J_z}{\mathrm{d}t}=0$$。

更一般地，如果是绕任意单位向量 $$\boldsymbol{n}$$ 所在方向旋转 $$\delta \phi$$ 的转动变换，对应的坐标和动量变化的具体形式可以写作：

$$
\delta \boldsymbol{r}_i = \boldsymbol{n} \times \boldsymbol{r}_i \delta \phi, \quad \delta \boldsymbol{p}_i = \boldsymbol{n} \times \boldsymbol{p}_i \delta \phi \qquad (15)
$$

对应的生成函数为：

$$
G = \boldsymbol{n} \cdot \boldsymbol{J} = \sum_{i=1}^N \boldsymbol{n} \cdot (\boldsymbol{r}_i \times \boldsymbol{p}_i) \qquad (16)
$$

只要 $$H$$ 不要过于鬼畜（仅含有 $$\boldsymbol{r}_i$$ 和 $$\boldsymbol{p}_i$$ 这些东西的模或标量积），那么**转动变化下的对称性就必然会有角动量守恒定律。**

## 参考资料

1. Tom W.B. Kibble & Frank H. Berkshire, Classical Mechanics (5th Edition) [Chapter 12 Hamiltonian Mechanics]
2. Michael E. Peskin & Daniel V. Shroeder, An Introduction to Quantun Field Theory [Chapter 2.2 Elements of Classical Field Theory]
3. https://en.wikipedia.org/wiki/Tom_Kibble

