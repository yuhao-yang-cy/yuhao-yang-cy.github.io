---
layout: post
title: "为什么病毒倾向于往传播力更强、致死率更低的趋势变异？"
date: 2022-04-16 15:53:00
description: 用数学模型来探究病毒变异的大体方向
tags: mathematics biology SIR modelling
categories: mathematics biology
---

传染性病毒在扩散的过程中，会有一定的几率发生突变。在优胜劣汰的生物世界中，病毒该如何突变才能获得竞争优势？这篇笔记中，我们试图从数学模型的角度来分析下，为什么病毒似乎总是倾向于往传播力更强、致死率更低的趋势进化。

笔记的内容依然借（chāo）鉴（xí）自香港科技大学 [*Jeffrey R. Chasnov*](https://www.math.hkust.edu.hk/~machas/) 教授的[生物数学公开课讲义](https://www.math.hkust.edu.hk/~machas/mathematical-biology.pdf)。

---

在此我们考察一个基于 SIR 模型基础的传染病模型。设易感人群(S = Susceptible)、传染性人群（I = Infected）和康复人群（R = Recovered）的数量已处于不等于零的平衡点。然后某个病毒的变种由于偶发的突变横空出世，我们想分析在何种情况下，这个变种会将原来的初代毒株取而代之。

设初代病毒的感染率为 $$\beta$$，康复率为 $$\gamma$$，致死率为 $$c$$；变种病毒的感染率为 $$\beta'$$，康复率为 $$\gamma'$$，致死率为 $$c'$$。由于现在考虑到病毒可能会致死，所以总人口的数量不能再粗暴地当作常数。索性引入人口的出生率 $$b$$ 和与传染病无关的自然死亡率 $$f$$，让模型变得更加真实。

我们继续假定，两种毒株有着相同的易感群体 $$S$$ 和康复群体 $$R$$，即任何一个易感对象有可能被感染上两种毒株中的任意一种，而感染了任何一种毒株后康复的个体，对这两种毒株都会产生免疫。记感染了初代毒株的传染性群体数量为 $$I$$，感染了变种毒株的群体数量为 $$I'$$，则模型中各个群体数量的变化可以由如下的微分方程组描述：

$$
\begin{aligned}
\frac{\mathrm{d} S}{\mathrm{d} t} &= bN - dS - S (\beta I + \beta' I') & \qquad (1)\\
\frac{\mathrm{d} I}{\mathrm{d} t} &= \beta S I - (\gamma + c + f) I & \qquad (2)\\
\frac{\mathrm{d} I'}{\mathrm{d} t} &= \beta' S I' - (\gamma' + c' + f) I & \qquad (3)\\
\frac{\mathrm{d} R}{\mathrm{d} t} &= \gamma I + \gamma' I' - fR & \qquad (4)\\
\end{aligned}
$$

根据设定，人群在初始状态处于仅存在初代病毒时的不动点，即 $$\frac{\mathrm{d} S}{\mathrm{d} t} = \frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\mathrm{d} R}{\mathrm{d} t} = 0$$ 且 $$I_* \neq 0$$。根据 $$(2)$$ 式可知，平衡点处易感人群的数量应满足：

$$ \beta S_* I_* - (\gamma + c + f) I_* = 0 \quad \Rightarrow \quad S_* = \frac{\gamma + c + f}{\beta} $$

如果现在出现了零星的变种毒株的病例，我们可以考察在平衡点附近引入一个很小的 $$I'$$ 会导致系统如何演化。将上面的 $$S_*$$ 代入 $$(3)$$ 式：

$$
\begin{aligned}
\frac{\mathrm{d} I'}{\mathrm{d} t} &= \beta' \cdot \frac{\gamma + c + f}{\beta} \cdot I' - (\gamma' + c' + f) I' \\
\frac{\mathrm{d} I'}{\mathrm{d} t} &= \left[ \frac{\beta'}{\beta} (\gamma + c + f) - (\gamma' + c' + f) \right] I'
\end{aligned}$$

方程的解具有如下的形式：

$$ I' = I_0' \mathrm{e}^{\lambda t} \qquad (5)$$

当 $$\lambda \equiv \frac{\beta'}{\beta} (\gamma + c + f) - (\gamma' + c' + f)  > 0$$ 时，$$I'$$ 将呈现指数级的增长，即变种毒株将疯狂传播，有望取代初代毒株而占据主导地位，可谓青出于蓝而胜于蓝。

稍作代数整理，$$\lambda >0$$ 的条件也可写成：

$$ \frac{\beta'}{\gamma' + c' + f} > \frac{\beta}{\gamma + c + f} $$

接下来就可以进入看式子说话环节。假定病毒变异只会点出一个技能点，则通过实现如下的目标中的任意一个，变种病毒就可以变得更具有竞争优势：

- $$\beta' > \beta$$：这意味着变种病毒导致感染的概率更高。这是个不用建模都能想到的结论，变种病毒要去割据原先初代毒株的位置，那显然它的传播力要更强才行。

- $$\gamma' < \gamma$$：这意味着变种病毒的康复率更低，即感染了变种病毒更难快速地康复。如此病毒携带者就有机会在更长的时间内具有传染性，把病毒扩散给易感人群。

- $$c' < c$$：这意味着变种病毒会具有更低的致死率。这也不难理解，因为如果患者死亡了，那他就没有可能去接触其他人，病毒也没有机会再传播了。

综上，我们从这个数学模型中看到，病毒进化的大体方向，必然是传播力变得更强，致病时间更长，但致死率会渐渐降低。某种意义而言，病毒变异的大体趋势似乎也是在寻求与人类的共存。

但是，现实中病毒变异完全有可能有两个或更多的属性点发生突变。最可怕的情况莫过于致死率和传播力同时变高，而且传播系数的增加大过致死率的增加，如此一来，依然可以满足 $$(5)$$ 式的条件，杀伤力更强的毒株还拥有更强的传播力加成，造成比初代毒株大得多的灾害。

