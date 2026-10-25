---
layout: post
title: "AMC10 备课笔记：Stewart 定理、三角形顶角平分线长度公式、中线长度公式"
date: 2026-09-14 11:07:00
description: AMC10 数学竞赛真是能学到东西，在初等数学领域竟有如此之多我活了大半辈子都还不曾知道的神奇定理
tags: mathematics a-level geometry
categories: mathematics a-level 
---

最近在捣鼓些个 AMC 数学竞赛的东西，没想到当年高考数学常年稳定140+、从业后又带过花样繁多的各种数学课程的小镇做题家，在初等数学领域还能学到这么多新东西。

这篇笔记来写写我活了这么多年一直都不知道的关于三角形的几条奇妙定理：

- 切氏线长度公式（Stewart 定理）
- 角平分线定理
- 角平分线长度公式
- 中线长度公式（Apollonius 定理）

简单查阅了一些史料后，更加惊讶地发现这些结果还都是2000多年前那些个古希腊几何大神玩剩下的东西，大为震撼。

## Stewart 定理

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stewart.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

连接 $$\triangle ABC$$ 的顶点 $$A$$ 和对边 $$BC$$ 上的任意点 $$P$$，记 $$BP=m$$，$$CP=n$$，及切氏线（cevian）$$AP=d$$，则：

$$
b^2m + c^2n = a(d^2 + mn)
$$

如果我们关注切氏线 $$AP$$ 的长度，不难整理得到：

$$
d^2 = \frac{b^2m + c^2n}{a} - mn \tag{*}
$$

有记载的苏格兰数学家 Matthew Stewart 在 1746 年证明并发表的这个结果，我们现在也将此称作 Stewart's Theorem。但 Wikipedia 上也提到一些数学学者的考据表明，很可能那位表示给他一根杠杆就可以撬动地球的 Archimedes 就已经撬动过这个非常 general 的三角形定理。

Wikipedia 上还查到了一个颇为“炸裂”的记忆口诀：把等式改写成 $$man + dad = bmb + cnc$$，这就变成了朗朗上口的

> A <u>man</u> and his <u>dad</u> put a <u>bomb</u> in the <u>sink</u>.

校园里这些个“我去炸学校”的烂梗也真是国际通用语言。

#### proof using law of cosines

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stewart1.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

对于 $$\triangle ABP$$，由余弦定理（law of cosines），我们有：

$$
c^2 = m^2 + d^2 - 2md \cos \theta  \tag{1}
$$

类似地，对于 $$\triangle ACP$$，我们有：

$$
b^2 = n^2 + d^2 - 2nd \cos \theta'
$$

注意到 $$\theta' + \theta = \pi$$，因此 $$\cos\theta' = -\cos\theta$$，因此上式可以改写为：

$$
b^2 = n^2 + d^2 + 2nd \cos \theta \tag{2}
$$

$$(2)\times m + (1)\times n$$ 可得：

$$
b^2m + c^2n = mn^2 + md^2 + nm^2 + nd^2
$$

等式右边的四项可以因式分解成 $$(m+n)(mn + d^2)$$，其中 $$m+n=a$$ 正是 $$BC$$ 的边长，因此得证：

$$
b^2m + c^2n = a(d^2 + mn)
$$


#### proof using Pythagorean theorem

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stewart2.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

如果不用余弦定理，Stewart's Theorem 也可以有更初等的证明。

过顶点 $$A$$ 作一条 $$BC$$ 边上的高（height），记垂足为 $$H$$，$$PH=x$$。如此分出来的两个直角三角形 $$\triangle ABH$$ 和 $$\triangle ACH$$ 中有：

$$
\begin{align*}
c^2 &= h^2 + (m+x)^2 \\
b^2 &= h^2 + (n-x)^2 \\
\end{align*}
$$

在另一个直角三角形 $$\triangle APH$$ 中还有：$$h^2 = d^2 - x^2$$. 于是：

$$
\begin{align*}
c^2 &= d^2 - x^2 + (m+x)^2 \\
b^2 &= d^2 - x^2 + (n-x)^2 \\
\end{align*}
$$

上式中平方和的括号打开后，$$x^2$$ 项全部抵消，变为：

$$
\begin{align*}
c^2 &= d^2 + m^2 + 2mx \tag{3} \\
b^2 &= d^2 + n^2 - 2nx \tag{4} \\
\end{align*}
$$

$$(3)\times n + (4)\times m$$ 可得：

$$
b^2m + c^2n = mn^2 + md^2 + nm^2 + nd^2
$$

在右边进行因式分解提取出 $$m+n = a$$ 的公因式，也可得出：

$$
b^2m + c^2n = a(d^2 + mn)
$$


## 角平分线定理

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/angle_bisector.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

若 $$AP$$ 是顶角 $$A$$ 的平分线，则

$$
\frac{BP}{CP} = \frac{AB}{AC}  \qquad \text{or} \qquad bn = cm
$$

这表明，某个顶角的角平分线将其对边分成两段，其比例刚好等于该顶角两条邻边的长度比，这便是角平分线定理（angle bisector theorem）。

#### proof

对于 $$\triangle ABP$$，由正弦定理（law of sines），我们有：

$$
\frac{\sin \theta}{\sin \alpha} = \frac{c}{m}
$$

对于 $$\triangle ACP$$，由正弦定理（law of sines），我们有：

$$
\frac{\sin \theta'}{\sin \alpha} = \frac{b}{n}
$$

依然由于 $$\theta' + \theta = \pi$$，$$\sin\theta = \sin\theta'$$，所以上面两个式子的右边可以直接等起来：

$$
\frac{c}{m} = \frac{b}{n}
$$

稍作整理后即得：

$$
\frac{m}{n} = \frac{c}{b}
$$


## 角平分线长度公式

这也是我活了这么多年第一次知道的结论：角平分线居然还有个挺漂亮的长度公式！

继续沿用之前的示意图，角 $$A$$ 的平分线 $$AP$$ 的长度满足：

$$
AP^2 = AB \cdot AC - BP \cdot CP \qquad \text{or} \qquad t^2 = bc-mn
$$

#### proof

根据角平分线定理，底边 $$BC$$ 被角平分线 $$AP$$ 分成的两段的长度分别有：

$$
\frac{m}{a} = \frac{c}{b+c} \qquad \frac{n}{a} = \frac{b}{b+c}
$$

代入 Stewart's Theorem 的结果 $$(*)$$ 式：

$$
\begin{align*}
d^2 &= b^2 \cdot \frac{c}{b+c} + c^2 \cdot \frac{b}{b+c} - mn \\
& = bc \left(\frac{b}{b+c} + \frac{c}{b+c} \right) - mn \\
\Rightarrow d^2 &= bc - mn
\end{align*}
$$

## 中线长度公式

类似地，长久以来我也从来不知道三角形的中线也有长度公式。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/median.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

若 $$AP$$ 刚好平分底边 $$BC$$，即 $$BP = CP$$，则中线 $$AP$$ 的长度满足：

$$
d^2 = \frac{1}{4}(2b^2 + 2c^2 - a^2)
$$

该公式也被成为 Apollonius' Theorem，就是那位公元前200多年前就已经把圆锥曲线（conic curves）玩出花来的古希腊几何大神，读者朋友们是否也跟我一样感到十分钦佩。

#### proof

基于 Stewart's Theorem，中线长度公式的证明倒是很简单。把 $$m=n=\frac{1}{2}a$$ 代入 $$(*)$$ 式：

$$
d^2 = \frac{1}{2}b^2 + \frac{1}{2}c^2 - \left(\frac{1}{2}a\right)^2
$$

容易看出这就是我们给出的 Apollonius' Theorem 的等价形式。