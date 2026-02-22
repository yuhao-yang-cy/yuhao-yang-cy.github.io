---
layout: post
title: "霍尔效应 Hall Effect"
date: 2023-04-16 15:34:00
description: "A-Level 物理中不少熊孩纸学不明白的霍尔效应，一篇文章讲个通透"
tags: physics a-level electromagnetism
categories: physics a-level
---

说起霍尔效应（Hall Effect），学A2物理的熊孩纸们几乎是闻之色变。作为新大纲中加进电磁学的看似一小块内容，其实里面大有文章。今天我们就来谈谈霍尔效应是咋回事。（以为我会按照 A-Level 大纲讲吗？有氰提示：瞎扯蛋如果没有超纲超到飞起来那我就不是烤羚羊。。。）

## 1、概述

**在一个磁场中放置一块导体，在垂直于磁场的方向上施加一个电流时，载流的带电粒子会在磁场力作用下发生偏转，导体横向两侧的电荷会重新分布，从而产生一个内部的电场。这个现象便是霍尔效应，由此产生的导体两端的电势差通常称为霍尔电压（Hall voltage）。**这一现象于1879年由美国科学家 Edwin Hall 发现，由此得名。

## 2、原理

 下图展示的是一个典型的霍尔效应示意。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hall-effect-setup.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

为讨论方便起见，我们记磁感应强度（magnetic flux density）恒定为 $$B$$，方向竖直向上。与磁场垂直的电流大小为 $$I$$，方向向右。根据左手法则，我们可以判断出载流子（charge carrier）受到的磁场力会向外作用，于是载流子会偏转聚集到靠近画面的导体前侧面来。

常见的导体中，参与导电的是自由电子（free electron），它们带负电。于是导体的前侧面会聚集起额外的负电荷，这样导体内就会产生一个朝着画面向外（out of plane of the diagram）的内部电场。如果我们在导体前后两侧间接一个电压表，就可以测得霍尔电压的读数。

由于内部电场的产生，后续进入导体的载流子在原先的磁场力作用外，还受到了额外的电场力的作用。注意到同种电荷具有排斥作用，内部电场会阻止电荷源源不断地聚集下去。**当载流子受到的磁场力和电场力相互抵消时，导体两侧的电荷分布趋于平衡，内部电场趋于稳定，霍尔电压将会达到一个恒定值**。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hall-effect-mechanism.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

根据上述分析，**稳定的平衡条件即，载流子受到的电场力 $$F_E$$ 与磁场力 $$F_B$$ 大小相等**。

$$ qE = qvB$$

式中 $$q$$ 代表每个载流子的带电量，即一个电子的电荷，$$v$$ 代表自由电子定向移动形成电流的迁移速度（drift velocity）。

导体内部电场 $$E$$ 可以视作匀强电场，它与霍尔电压 $$V_H$$ 具有关系

$$ E = \frac{V_H}{d}$$

其中 $$d$$ 是这块导体的深度。

由此，我们可以得到霍尔电压的一个表达式

$$ V_H = Bvd$$

在实际测量中，导体内的电荷迁移速度 $$v$$ 不容易直接测量，但它和电流大小 $$I$$ 密切相关。电流的微观模型给出关系

$$ I = nAvq$$

其中 $$n$$ 代表载流子的数密度，即单位体积内自由电子的数量，$$A$$ 表示电流所通过的横截面积。我们可以利用该式将电荷迁移速度 $$v$$ 表示成电流 $$I$$ 的形式，代回霍尔电压的表达式后，我们得到：

$$ V_H = \frac{BId}{nAq}$$

注意到横截面积 $$A=dt$$，$$d$$、$$t$$ 分别代表导体的深度和厚度（见上图），霍尔电压最终可以写成：

$$ \boxed{ V_H = \frac{BI}{ntq} }$$

## 3、讨论

### 3.1 测量磁场强度

从式中可以看出，给定一种导体，载流子数密度 $$n$$ 就确定了。如果控制通过导体的电流 $$I$$ 恒定，霍尔电压 $$V_H$$ 的大小正比于磁场强度 $$B$$。因此霍尔效应可以用来间接地测量一个未知磁场的强度，这样的磁场测量器件叫做霍尔传感器（Hall probe）。

### 3.2 优化霍尔电压的测量

若想获得一个可测的、即数值比较大的霍尔电压，**在制作霍尔传感器时，核心导体器件的厚度 $$t$$ 应当足够小**，我们应当将其切割得很薄。

另一方面，应当选择载流子数密度 $$n$$ 比较小的材料，即导电性较弱的材料，所以**实际的霍尔传感器中，核心的器件通常会用半导体材料来制作**。

### 3.3 磁场与电流夹角关系

在先前的讨论中，我们为了方便，将导体所处的磁场和施加的电流设置为相互垂直的关系。如果磁场和电流方向成任意夹角，使得载流子偏转的磁场力取决于磁场的垂直于电流方向的分量。将电流与磁场之间的夹角记作 $$\theta$$，则具体的公式可以写作：

$$ V_H = \frac{BI}{ntq}\sin\theta$$

**在使用霍尔器件时，转动传感器会导致霍尔电压的读数产生变化**。当电流与待测磁场垂直时，霍尔电压有最大值；当两者平行时，霍尔电压为零。测量时，我们应该尝试着调整传感器的角度，记录最大读数来推算磁场强度的大小。

### 3.4 霍尔电压与载流子

同样为了讨论方便，先前我们简单默认材料中参与导电的是自由移动的电子。但在不同的材料中，参与导电的载流子也可以是其他形式的粒子。金属中自由电子参与导电，半导体中可以有空穴（hole）参与导电，盐溶液中可以有离子（ion）参与导电。载流子可能带正电荷，也可能带负电荷。在一般的电路中，这对电流、电压的测量没有任何影响。但在霍尔效应中，不同极性的载流子会导致霍尔电压的不同极性。因此霍尔效应也经常被用来判断某种材料中的载流子的性质。

## 4、拓展

讨论开始前先作个两个小小的声明：

为了不引进太多稀奇古怪的新物理量，在这个板块的讨论中我会采取一些比较粗暴的处理，方式会跟主流的方式不太一样（毕竟本文大多数读者应该没见过学术界中主流的玩法，我就不妨欺负下熊孩纸们读的书少喽），但是这并不影响接下来会提到的一些定性的结果。

由于楼主远离学术界好多年，脑袋生锈，接下来写的内容是对着以前的笔记、讲义，查着 Wikipedia 理出来的。以前就学的时候就一知半解，现在就更不用说。如有错误，请轻拍。

### 4.1 量子霍尔效应

我们可以将霍尔电压与施加的电流的比值定义为所谓的霍尔电阻。利用之前的结论，对于确定的材料，霍尔电阻的数值应当与磁感应强度成正比。

$$ \displaystyle R_H \equiv \frac{V_H}{I} = \frac{B}{ntq}$$

然而**德国科学家 Klaus von Klitzing 在1980年发现，在极端低温和强磁场的环境中，材料的霍尔电阻会随着磁场的增强呈现出阶梯式上升的变化趋势！**（如下图所示）

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/quantum-hall-plateau.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

这些平台（plateau）对应的数值，可以精确地由下式给出

$$ \boxed{ R_H = \frac{1}{\nu}\frac{h}{e^2}}$$

其中 $$h$$ 是Planck常数，$$e$$ 是基本电荷单位，而 $$\nu$$ 称为填充数（filling factor），它的取值是一系列正整数1，2，3，……，对应于图中的一个个平台。也就是说，**霍尔电阻呈现出量子化（quantisation）的现象！这个现象叫做量子霍尔效应（Quantum Hall Effect）**。

从经典图像来看，在弱磁场中，电子流过材料时仅仅是发生偏转。如果磁场足够强，电子在磁场力作用下的偏转会非常迅猛，从而团团转地作圆周运动。**量子理论的框架下这些电子轨道将会是量子化的，即只能取一系列分立的数值（discrete values），每个能级（energy level）可容纳的电子数跟磁场的强度有关。磁场很强时，每个能级可以容纳大量电子态，材料中所有的自由电子只能填充少数几个能级，这便是量子霍尔效应的起源。**这些特殊的整数也因此被叫做填充数。

要问量子霍尔效应这玩意有啥用？注意到**上式中出现的物理常数组合 $$h/e^2$$，恰好和电阻具有相同的量纲，于是量子霍尔效应中提供了精确定义电阻标准单位的新方案**。

另一方面，**量子霍尔效应中出现的整数，数学上具有相当好的拓扑不变性。可以证明它们是跟量子态所对应的某种几何贝里相（Berry phase）相关，这些整数在拓扑学（topology）中被称作第一类陈省声示性数（first Chern number）**。楼主当年读相关的文献时，就颇有一种『居然还能这样玩！』的惊叹。

### 4.2 分数量子霍尔效应

**在整数量子霍尔效应被观测到后不久，分数量子霍尔效应（Fractional Quantum Hall Effect），即填充数取值为分数的平台效应，也由美籍华裔的物理学家崔琦，德国物理学家 Horst Störmer 等人发现，并且很快就由美国理论物理学家 Robert B. Laughlin 提出了唯象的解释**。Laughlin 凭借准确的物理直觉写下的描述多体相互作用的波函数（wave function），后人尊称之为 Laughlin 波函数，堪称是霍尔效应研究中的神来之笔。

尽管物理学家们尚未完全理解分数量子霍尔效应（FQHE）的微观起源，但是这一现象的重要性已经引起了大批科学工作者的研究兴趣。**物理学家们一直相信可以用对称性（symmetry）来解释各种物态的重要概念和本质，然而 FQHE 却难以用对称性破缺（symmetry breaking）理论来描述，FQHE 态代表了一种含有全新拓扑序（topological order）的新物态，这大大丰富了物理学家们对量子相（quantum phase）和相变的认知，为凝聚态物理的研究打开了一扇新的大门**。回顾2016年新鲜出炉的诺贝尔物理学奖，就颁给了在物质拓扑相变研究领域作出漂亮理论工作的 David J. Thouless，Duncan Haldane，Michael Kosterlitz。

### 4.3 自旋霍尔效应

**霍尔效应的核心在于不同电荷的载流子在磁场的作用下被分离到了两个相对的表面。在自旋霍尔效应（Spin Hall Effect）中，不同自旋态（spin）的电子会被分离到两个相对的表面。**

打个不恰当的比喻，技艺高超的足球运动员知道，脚内侧和外脚背搓出的皮球的弧线是会拐往不同方向的，自旋相反的电子在材料中运动中也仿佛亦是如此。这个现象早在1971年就由俄罗斯物理学家 M. I. Dyakonov 和 V. I. Perel 预言，但要直到近30年后才有研究者做出相关的实验结果。

**自旋霍尔效应的神奇之处在于，它甚至不需要外界磁场的帮助。这给了科学家一个不需通过磁场、只通过电流就能控制电子自旋的新思路。**电子形成电流的过程中，很容易经历随机碰撞从而耗散能量。利用电子自旋和电流的规律，我们也许能够指挥电子进行有序的运动，从而减低能耗。自旋霍尔效应有可能会在不久的将来应用到计算机的芯片制造中，设计出下一代的性能更优越的芯片。

近年来，华裔的物理学家张首晟和其他一些研究者又进一步提出量子自旋霍尔效应（Quantum Spin Hall Effect），前几年在新闻报道中看到中科院的薛其坤团队做出了一些非常牛掰的实验结果。这些东西楼主自己也是屁都不懂，所以实在是编不下去了。。。

## 推荐阅读

- Hall Effect: [https://en.wikipedia.org/wiki/Hall_effect](https://en.wikipedia.org/wiki/Hall_effect)

- Quantum Hall Effect: [https://en.wikipedia.org/wiki/Quantum_Hall_effect](https://en.wikipedia.org/wiki/Quantum_Hall_effect)

- Spin Hall Effect: [https://en.wikipedia.org/wiki/Spin_Hall_effect](https://en.wikipedia.org/wiki/Spin_Hall_effect)

- David Tong's Lectures on the Quantum Hall Effect: [http://www.damtp.cam.ac.uk/user/tong/qhe.html](http://www.damtp.cam.ac.uk/user/tong/qhe.html)

## 学术文献

- K. v. Klitzing; G. Dorda; M. Pepper (1980). "New method for high-accuracy determination of the fine-structure constant based on quantized Hall resistance", *Phys. Rev. Lett. 45 (6): 494–497*
- R. B. Laughlin (1981). "Quantized Hall conductivity in two dimensions", *Phys. Rev. B. 23 (10): 5632–5633*
- R.B. Laughlin (1983). "Anomalous Quantum Hall Effect: An Incompressible Quantum Fluid with Fractionally Charged Excitations", *Physical Review Letters. 50 (18): 1395*
- D. J. Thouless, M. Kohmoto, M. P. Nightingale, and M. den Nijs (1982), "Quantized Hall Conductance in a Two-Dimensional Periodic Potential". *Physical Review Letters. 49 (6): 405–408*
- M. I. Dyakonov and V. I. Perel,; Perel' (1971), "Possibility of orientating electron spins with current". *Sov. Phys. JETP Lett. 13: 467*
- Y. Kato; R. C. Myers; A. C. Gossard; D. D. Awschalom (2004), "Observation of the Spin Hall Effect in Semiconductors". *Science. 306 (5703): 1910–1913*
- B. Andrei Bernevig and Shou-Cheng Zhang (2006), “Quantum Spin Hall Effect”, *Phys. Rev. Lett. 96, 106802*
- B. Andrei Bernevig, Taylor L. Hughes and Shou-Cheng Zhang (2006), “Quantum Spin Hall Effect and Topological Phase Transition in HgTe Quantum Wells”, *Science, 314, 1757*