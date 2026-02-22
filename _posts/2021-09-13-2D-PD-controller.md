---
layout: post
title: "二维 PD 控制器"
date: 2021-09-13 16:44:00
description: 来自 Coursera 的一门关于飞行器基础理论和应用的公开课笔记
tags: engineering control robotics
categories: engineering
---

[上篇]({% post_url 2021-09-11-1D-PD-controller %})中我们讨论了 PD 算法的基本思想，但在应用时仅限于一维的运动。本篇我们将来讨论如何将 PD 算法来控制二维平面内的运动。内容的 credit 依然归于宾大工程系教授 Vijay Kumar 在 Coursera 上的公开课。

## 原理

在公开课里学习控制的是常见的四轴无人机。这类飞行器拥有四个旋翼，呈十字形布局。通过调整各个旋翼的相对速度，就可以控制不同位置的推力以及旋翼之间的扭力矩，实现飞行姿态的调整，并完成各种机动飞行任务。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/quadropod.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

在这里，我们限定无人机仅在 $$y$$-$$z$$ 平面内运动，并且无人机只有两个可控的输出：升力 $$T$$ （thrust force） 和扭力矩 $$\tau$$  （torque）（我们暂且不管每个旋翼应该如何协调产生所需的 $$F$$ 和 $$\tau$$）。我们要解决的的核心问题是：如果要求飞行器在起飞后，必须沿着某条预先设定的路线飞行，那么无人机该如何控制自己的输出，从而可以跟随着这条指定的路径飞行？

计划的路线可以写成随时间的参数方程：

$$
y^{\text{des}} = y^{\text{des}}(t), \qquad z^{\text{des}} = z^{\text{des}}(t)
$$

如果要求无人机按规定路线飞行，则在每个点上，无人机必须以一个合适的姿态，输出一个大小和方向都适合的升力 $$T$$，才能产生正确的加速度来实现速度控制。同时，无人机也要输出一个合适的扭力矩 $$\tau$$，从而可以在下一个位置，依然能够以一个合适的姿态作后续的调整。

由于运动仅限于 $$y$$-$$z$$ 平面，要考虑的转动只剩下绕 $$x$$-轴的转动。记无人机四个旋翼所处的平面相对于水平方向的夹角为 $$\phi$$，即为无人机姿态的描述变量。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/desired_traj.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

在规定的路线上的任意一点，无人机也相应有一个特定的姿态，记为

$$
\phi_c = \phi_c(t)
$$

我们的任务就是要确定该如何控制升力 $$T$$ 及扭矩 $$\tau$$，使得 $$y(t)$$，$$z(t)$$ 和 $$\phi(t)$$ 能每时每刻都尽可能地接近 $$y^\text{des}(t)$$，$$z^\text{des}(t)$$ 和 $$\phi_c(t)$$？

定义实际路线和计划路线之间的误差函数：

$$
\begin{aligned}
e_y(t) &= y^\text{des}(t) - y(t) \\
e_z(t) &= z^\text{des}(t) - z(t) \\
e_\phi(t) &= \phi_c(t) - \phi(t)
\end{aligned}
$$

根据 PD 控制器的思想，如果选择合适的输出，使得这些误差函数符合如下的微分方程：

$$
\ddot{e} + K_d \dot{e} + K_p e = 0
$$

那么误差值就会随着时间衰减到零。由于现在有 $$y$$，$$z$$ 和 $$\phi$$ 三个变量，因此会有三组微分增益 $$K_d$$ 和比例增益 $$K_p$$，总共6个可调参数。把这些全部写出来，稍作整理后，可以得到

$$
\begin{aligned}
\ddot y &= \ddot{y}^\text{des} + K_{d,y} (\dot{y}^\text{des} - \dot{y}) + K_{p,y} (y^\text{des} - y) &{(1a)} \\
\ddot z &= \ddot{z}^\text{des} + K_{d,z} (\dot{z}^\text{des} - \dot{z}) + K_{p,z} (z^\text{des} - z) &{(1b)}\\
\ddot \phi &= \ddot{\phi}_c + K_{d,\phi} (\dot{\phi}_c - \dot{\phi}) + K_{p,\phi} (\phi_c - \phi) &{(1c)}
\end{aligned} 
$$

根据这些期望的加速度，我们就可以去计算对应需要多少升力 $$T$$ 及扭矩 $$\tau$$ 了。

稍稍运用一点力学定律，就可以写出无人机系统满足的动力学方程：

$$
\left\{\begin{aligned}
m\ddot{y} &= -T\sin\phi &{(2a)} \\
m\ddot{z} &= T\cos\phi - mg  &{(2b)}\\
I_{xx} \ddot{\phi} &= \tau  &{(2c)}
\end{aligned} \right.
$$

因为这里出现的三角函数项，因此方程是非线性的，要求解这组方程其实还有点麻烦。

公开课里介绍了 PD 控制器中的一种惯例的近似计算方法：在平衡状态附近对方程作线性化处理（linearization）。对于无人机飞行器，它在任意位置的平衡状态显然是静止悬停，有 $$\phi^* = 0$$ 以及 $$T^*=mg$$。若飞行器全程的状态都没有大幅地偏离平衡状态，则我们大可以对 $$\phi$$ 在 $$\phi^*=0$$ 附近作 Taylor 展开，小角度近似的结果是：$$\sin\phi \approx \phi$$ 及 $$\cos\phi \approx 1$$。这样一来，这组方程就化简为：

$$
\left\{\begin{aligned}
\ddot{y} &\approx -g\phi &{(3a)}\\
\ddot{z} &\approx -g + \frac{T}{m} &{(3b)}\\
\ddot{\phi} &= \frac{\tau}{I_{xx}} &{(3c)}
\end{aligned}\right.
$$

从 $$(3b)$$ 中可以立刻得出任意时刻应该输出的升力：

$$
T = m\left[ g+\ddot{z}^\text{des} + K_{d,z} (\dot{z}^\text{des} - \dot{z}) + K_{p,z} ( z^\text{des} - z) \right]
$$

从 $$(3a)$$ 中可以先解出在任意一点上的理想姿态 $$\phi_c$$，代入 $$(3c)$$ 后可以求出控制姿态所需要的扭力矩

$$
\begin{aligned}
\phi_c &= -\frac{1}{g}\left[ \ddot{y}^\text{des} + K_{d,y} (\dot{y}^\text{des} - \dot{y}) + K_{p,y} ( y^\text{des} - y) \right] \\
\tau &= I_{xx} \left[ \ddot{\phi}_c + K_{d,\phi} (\dot{\phi}_c - \dot{\phi}) + K_{p,\phi} ( \phi_c - \phi) \right]
\end{aligned}
$$

由于已经假定 $$\phi_c$$ 总是接近于平衡姿态，及它的变化不剧烈，因此还可以粗暴地认为 $$\dot{\phi}_c \approx 0$$ 以及 $$\ddot{\phi}_c \approx 0$$，于是力矩计算式进一步简化为

$$
\tau = I_{xx} \left[ - K_{d,\phi} \dot{\phi} + K_{p,\phi} ( \phi_c - \phi) \right]
$$

## 测试

有了以上理论分析后，就可以敲点代码模拟试试看了。我在 GitHub 上新开了一个 repository，准备专门用来丢这些 Engineering Science 的模拟，也有望成为一座屎代码堆成的屎山。有兴趣的读者可以自行点开下面的传送门跟着瞎搞：[https://github.com/yuhao-yang-cy/sci-simulations](https://github.com/yuhao-yang-cy/sci-simulations)

PD 控制器中总共有6个可调的增益参数。完全盲目地乱调参数，可能会让飞行器实际路线偏移十万八千里。但是经过不断地试错，最终可以找到一组合适的参数，让飞行器的轨迹非常贴近预定的路线。

我对三种预定路线进行了测试，结果如下。

无人机快速上升到既定高度，并维持在此高度匀速水平巡航。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2D-controller-test-1.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

无人机在 $$y$$ 轴方向匀速飞行，在 $$z$$ 轴方向上下周期性地起伏，看起来就是在竖直平面内沿正弦轨迹运动。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2D-controller-test-2.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2D-controller-test-3.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

可以看到，选取的增益参数可以让无人机很好地按设定路线前行，即便刚开始时的出发状态跟设定路线有较大的偏离，无人机也可以很快地将自己的运动修正过来，到了后半程，可以看到实际轨迹和设定的轨迹已经高度重合。

但考虑到我们在推导 PD 控制器的输出时，用到了线性化的近似方法，所以我就尝试着设定一些稍显激进的路线来测试控制的效果。这里我试着让无人机在往前飞行过程中在竖直平面内绕个小螺线。但是发现之前效果很好的6个参数忽然就不顶用了。耐心的调试依然可以找出效果还不错的控制参数，但是稍作一点偏离，效果马上就大打折扣。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2D-controller-test-4.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

所以我回到了问题开始的动力学方程组 $$(2a)\sim(2c)$$，仔细地重新推了。这个问题其实可以严格解，就是解的形式会很丑陋，这里就懒得敲出来了。联立 $$(2a)$$ 和 $$(2b)$$ 可以产生所需的 $$\ddot{y}$$ 和 $$\ddot{z}$$ 对应需要多少 $$T$$ 和怎样的姿态 $$\phi_c$$。再利用 $$(2c)$$ 就可以继续算出需要多少 $$\tau$$ 才能修正实际的姿态 $$\phi$$。我自己推了下计算式，并且敲了对应的代码作测试，效果还挺好的，尤其对于比较妖娆的预定路线，严格算出的输出表现得比作线性化处理后算出的输出来得更好。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2D-controller-test-5.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

此外，那6个控制参数在一定范围内乱调，都可以得到一条和计划路线吻合得很不错的实际路线。自己动手对公开课里介绍的内容做了点延伸，感觉还挺棒棒哒！

## 下期预告

下期打算试着写写三维运动的 PD 控制，或者是公开课里另一个很好玩的问题：如何让飞行器自己进行路线规划，以最优路线依次经过预先设定的几个固定位置，最终抵达重点？不管写哪个，都得取决于我接下来能不能用 Python 把模拟结果做出来了。。。