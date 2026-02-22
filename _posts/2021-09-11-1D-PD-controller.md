---
layout: post
title: "一维 PD 控制器"
date: 2021-09-11 15:14:00
description: 来自 Coursera 的一门关于飞行器基础理论和应用的公开课笔记
tags: engineering control robotics
categories: engineering
---

最近学新东西劲头比较足。上个月在 Coursera 的一门关于飞行器基础理论和应用的公开课，加上自己又在重新回炉自己的 Python 技能，就想着配合自己的理解和借助 Python 模拟出来的图像，把公开课里学到的东西给写出来。这篇先来介绍下在公开课里学到的 PD 控制器（PD controller），仅限于一维的运动控制。之后的灌水文章会来写写推广二维和三维的运动控制。

## 概述

在无人机运行时，我们可能会期望飞行器能够沿着某个预定的路径飞行。但实际的飞行路径总是会或多或少地和原定的路径有些许的偏差。自然地，亟待解决的问题就是，我们该如何控制飞行器，使得它的飞行路线准确而又稳定呢？

不难想到，解决方案的大体思路可以是这样：我们通过传感器时刻追踪测量实时路径，然后把收集到的数据和参考值进行对比，计算出两者之间的偏差，然后根据这个误差来调整动力输出，使得误差可以得到修正。也就是说，整个控制回路会包括三个主要部分：

1. 传感器测量实时数据
2. 控制器做出决定
3. 输出设备做出响应

控制应用中一种很常见的控制回路就是这里要介绍的 PD 控制器，它以两种纠正算法得名：PD 控制器由比例单元（Proportional）和微分单元（Derivative）组成，受控变数是比例算法和微分算法两者相加后的结果。

## 原理

在本篇中，我们先讨论一维系统中的 PD 控制机制。针对无人机，我们只考虑竖直方向这个维度的运动，也就是说，我们的目标是让无人机能在尽可能短的时间内达到既定高度。我们期望的无人机高度可以是一个时间 $$t$$ 的函数，记为 $$z^\text{des}(t)$$，这里的上标 des 来自英文 desired 的缩写。控制器测量得到的无人机在 $$t$$ 时刻的实际高度记为 $$z(t)$$。我们可以进而引入误差函数（error function）：

$$
e(t) = z^\text{des}(t) - z(t) \tag{1}
$$

这个控制问题的目标就变成了：该如何调整合适的输出，使得误差函数 $$e(t)$$ 迅速地衰减到零？

在公开课的视频中，教授给了一个很棒的类比。这个问题可以跟弹簧振子的运动行为联系起来。在弹簧提供的回复力的影响下，不论振子的初始位置在哪里，它总是会有往平衡位置加速的趋势。引入适当的阻力，振子的振幅可以不断减小，最终趋于零。也就是说，在弹簧回复力和系统内部阻力的共同作用下，原则上可以让振子的位移在一段时间后变成零。呵，是不是听起来跟手头要解决的控制问题有点像了！

典型的弹簧振子模型中，弹簧给出的回复力符合胡克定律 $$T=kx$$，阻力的大小可以假定正比于运动速度 $$f=\alpha \dot{x}$$，系统的运动方程可以写作

$$
m\ddot{x} = -kx - \alpha \dot{x}
$$

上式右边的两个负号是因为回复力方向与位移方向相反，以及阻力的方向与速度方向相反。稍作改写，可以把式子写成：

$$
\ddot{x} + B\dot{x} + Cx = 0 \qquad \left(B=\frac{\alpha}{m}, \;C=\frac{k}{m}\right)
$$

这是的 $$B$$ 和 $$C$$ 是两个大于零的常数，因此这个方程是一个标准的常系数二阶微分方程，方程的解将具有 $$x(t)\sim\mathrm{e}^{\lambda t}$$ 的形式。可以证明，对应于不同的正的 $$B$$ 和 $$C$$ 的取值，位移函数 $$x$$ 总会趋于零：它或将会随时间指数衰减趋于零（$$B^2 > 4C$$ 即阻尼影响较强的情况），或将会作振幅不断减小的往复振动最终收敛至零（$$B^2 < 4C$$ 即回复力影响较强的情况）。

回到控制问题来。类比于弹簧振子，如果能够控制飞行器输出一个合适的动力，从而使得误差函数可以满足微分方程：

$$
\ddot{e} + K_d \dot{e} + K_pe = 0 \tag{2}
$$

那么，飞行器实际位置与预定位置之间的误差也将会逐渐趋于零。上式中，$$K_p$$ 项和 $$K_d$$ 项分别正比于误差函数自身和误差函数的导数，所以这 $$K_p$$ 和 $$K_d$$ 这两个参数就被称为比例增益（proportional gain）和微分增益（derivative gain）。

知道了大方向后，我们就可以反过来问：动力输出应该如何调整呢？将 $$(1)$$ 式代入 $$(2)$$ 式中，得到

$$
\ddot{z}^\text{des} - \ddot{z} + K_d (\dot{z}^\text{des} - \dot{z}) + K_p ( z^\text{des} - z) = 0
$$

其中，$${z}^\text{des}$$、$$\dot{z}^\text{des}$$、$$\ddot{z}^\text{des}$$ 取决于预先设计的规划路线，都是事先已知的函数；$$z$$、$$\dot{z}$$ 是可以通过传感器实时测量，剩下的就只需要让 $$\ddot{z}$$ 跟着其他项的脸色办事就好了。不难得出，$$\ddot{z}$$ 现在需要满足的等式是

$$
\ddot{z} = \ddot{z}^\text{des}  + K_d (\dot{z}^\text{des} - \dot{z}) + K_p ( z^\text{des} - z) = 0\tag{3}
$$

而 $$\ddot{z}$$ 代表的是飞行器的加速度，这正是可以通过调节动力输出来改变的物理量。控制器现在可以通过 $$(3)$$ 式计算出每时每刻飞行器应该具有的加速度，输出设备可以由此作出反应，从而逐渐消除飞行器与预定位置的偏差。

选择不同的常数 $$K_p$$ 和 $$K_d$$，我们还可以控制误差函数 $$e(t)$$ 趋于零的方式和速度。实际操作中，可以去尝试各种 $$K_p$$ 和 $$K_d$$ 的组合，找出可以让 $$e(t)$$ 快速趋于零的最优方案。

## 测试

先来测试一种很简单的情况：飞行器从地面起飞，快速上升到既定高度，之后保持悬停不动。

如果我们选取比较大的 $$K_p$$ 和比较小的 $$K_d$$，模拟出来的实际路线如下图所示。类比弹簧振子系统，这种情况好比回复力很强，因此振子从远端可以很快启动冲往平衡位置。但是由于阻尼相对较弱，振子有点刹不住车，会冲到平衡位置另一端，继而作来回往复的振动。随着振幅不断减小，在多个周期之后，逐渐贴近期待的平衡点。由于存在“冲过头”的现象，这种控制模式的稳定性欠佳。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-1.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

如果我们选择比较大的 $$K_d$$ 和比较小的 $$K_p$$，模拟出来的路线如下图。依然类比弹簧振子，这时就好比一个回复力不是很强、但是阻力极大的系统，振子跑回平衡位置举步维艰，最终要用很长的时间到达平衡点。虽然不会跑过头，但是收敛的速度太慢了，因此控制的结果也不是很理想。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-2.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

所以，最优的 PD 控制应该选取足够大的 $$K_p$$，保证在与预定位置偏离较远时能够即刻启动，朝着目标位置加速冲过去；但也要有足够大的 $$K_d$$，保证在快到预定位置之前，能够赶紧减速以免冲过头。但 $$K_d$$ 也不适宜取得太大，否则就会压制 $$K_p$$ 项的回复效果。模拟中得到的一个比较好的结果如下图所示，显示飞行器在1秒左右的时间内就上升到了预定高度，之后就稳定地悬停，没有多余地上下晃动，属于比较理想的控制。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-3.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

我们还可以设计更为复杂的路线进行测试。比如，让飞行器连续在几个不同的高度悬停。利用先前的 PD 控制参数，可以看到模拟的结果也是很不错的。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-4.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

我们也可以让飞行器的高度按着预定的函数连续地变化（也许合着音乐的节拍上下摇摆）。对于这种连续的、没有突变的高度变化，PD 控制器可以应付得更加漂亮。下面的模拟结果中可以看到，飞行器的高度除了在刚开始与预定值稍有偏差，之后实际高度和预定高度几乎完全重合在了一起。甚至在大幅度范围内去调 $$K_p$$ 和 $$K_d$$ 的值，这种高度重合的结果都可以复现出来。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-5.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1D-controller-test-6.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

