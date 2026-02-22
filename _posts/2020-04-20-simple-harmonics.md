---
layout: post
title: "简谐振动之运动方程推导"
date: 2020-04-20 08:00:00
description: "从简谐振动的定义出发，用两种方法推导简谐振子的位移-时间关系式"
tags: physics a-level mechanics oscillators
categories: physics a-level engineering
---

## 简谐振动

在 A-Level 物理课程中，简谐振动是一个很重要的知识点。根据定义，凡是加速度和偏离平衡位置的位移之间有大小成正比、方向相反关系的运动，就被称作为简谐振动（simple harmonic oscillation）。这个定义可以写成一个简单明了的方程式：

$$ \boxed{a = \frac{\mathrm{d}^2x}{\mathrm{d}t^2} = -\omega^2 x}$$

给定初始条件，就可以解出位移随时间变化的函数关系，通常会被表示为如下的形式：

$$ \boxed{x(t) = x_0 \cos (\omega t + \phi)} $$

从定义式直接省略 3000 字跳到这个通解，你只需要三件东西：**一个懒得跟你多废话的物理老师，一本觉得跟你扯闲话就能把你整明白的物理教材，以及对必要的推导过程不作要求的考试大纲。**

下面我们将会看到，**想要推导简谐振子的运动方程，其实你需要的只是一些非常基础的数学知识**。好叻，我们开始~~推倒~~推导吧！

## 解法一：二阶微分方程标准解法

注意到微分方程 $$ \frac{\mathrm{d}^2x}{\mathrm{d}t^2} + \omega^2 x = 0$$ 的形式，$$x(t)$$ 的二阶导数跟它自己依然有能力同归于尽，对它求了两次导数之后，它音容犹在，我们能想到的具有这个性质的，便是**我们在小学四年级就学到过的指数函数**了。于是我们可以猜想方程的解会具有形如 $$ \mathrm{e}^{\lambda t}$$ 的形式。容易验证，将 $$ x(t) = A\mathrm{e}^{\lambda t}$$ 代入原方程中可以得到：

$$ A \mathrm{e}^{\lambda t} (\lambda^2 + \omega^2) = 0$$

于是待定系数 $$\lambda$$ 有两个可取的值： $$\lambda = \pm i \omega$$

符合原方程的通解现在可以写作：

$$ \boxed{ x(t) = A_1 \mathrm{e}^{i\omega t} +  A_2 \mathrm{e}^{-i\omega t} }$$

$$A_1$$, $$A_2$$ 可以是任意常数，甚至可以是复数（complex number）。目前看起来有点大事不妙，好好的一个位移函数现在被搞成了一个复数函数（complex function）。不过没什么可怕的，毕竟**复数函数是我们在小学三年级时就已经学过的基础数学知识**。我们知道，这个位移只有取实数值才有物理意义。我们限定 $$x(t)$$ 在任意时刻都是实数，那么 $$x(t)$$ 的复共轭（complex conjugate）与它自身相等，即 $$x^* = x$$：

$$A_1^* \mathrm{e}^{-i\omega t} + A_2^* \mathrm{e}^{i\omega t} = A_1 \mathrm{e}^{i\omega t} +  A_2 \mathrm{e}^{-i\omega t}$$

由此得到两个常系数之间满足关系：$$\boxed{A_2 = A_1^*}$$

我们不妨重新将常数写作：$$A_1 = r\mathrm{e}^{i\phi}$$，以及 $$A_2 = r \mathrm{e}^{-i\phi}$$ 于是通解可以被进一步写成如下的形式：

$$x(t) = r \mathrm{e}^{i(\omega t+\phi)} + r \mathrm{e}^{-i(\omega t+\phi)}$$

$$x(t) = r\left[\mathrm{e}^{i(\omega t+\phi)} + \mathrm{e}^{-i(\omega t+\phi)}\right]$$

利用我们**小学五年级就熟悉的欧拉公式**：$$\mathrm{e}^{i\theta} = \cos\theta + i \sin\theta$$，我们很容易发现：

$$ \mathrm{e}^{i\theta} + \mathrm{e}^{-i\theta} = 2\cos\theta$$

如果我们重新定义新的常数 $$x_0 = 2r$$，那么最终得到：

$$ \boxed{x(t) = x_0 \cos(\omega t + \phi)} \quad \text{Q.E.D.}$$

## 解法二：利用运动学公式作积分变换

利用**小学三年级的科学课堂**里大家已经知道的位移、速度、加速度的关系，以及非常基础的链式求导法则（chain rule），我们就可以得到：

$$ a = \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}v}{\mathrm{d}x} \frac{\mathrm{d}x}{\mathrm{d}t} = v \frac{\mathrm{d}v}{\mathrm{d}x} $$

$$ \Rightarrow \quad \boxed{ a = \frac{1}{2} \frac{\mathrm{d}}{\mathrm{d}x}(v^2) }$$

代入简谐振子的定义公式 $$a = -\omega^2 x$$ 中，我们有：

$$ \frac{1}{2} \frac{\mathrm{d}}{\mathrm{d}x}(v^2) = -\omega^2 x  $$

$$ \mathrm{d}(v^2) = -2\omega^2 x \mathrm{d}x $$

两边积分，可以得到关于速度 $$v$$ 的一个表达式：$$v^2 = -\omega^2 x^2 + K$$，其中 $$K$$ 是一个积分常数，它的值由简谐振子的初始运动状态决定。不难想到，通过引入一个新的常数 $$x_0$$，就可以将 $$K$$ 写作 $$\omega^2 x_0^2$$，这样速度 $$v$$ 就可以写成：

$$ \boxed{ v = \frac{\mathrm{d}x}{\mathrm{d}t} = \omega \sqrt{x_0^2 - x^2} }$$

我们要面对的方程，已经降次变成了一个 $$x$$ 关于 $$t$$ 的一阶微分方程。想必大家**在小学六年级时**早就对这类方程的解法烂熟于胸，我们可以分离变量，再两边积分。

$$ \int \omega \mathrm{d}t = \int \frac{\mathrm{d}x}{\sqrt{x_0^2 - x^2}}$$

左边的积分是**你上幼儿园的弟弟**都知道怎么做的，结果就是 $$\omega t$$。右边的积分略有些技术含量，似乎要用到**一些到了初中才会学到的积分换元法**。

用三角换元，令 $$x=x_0 \cos \theta$$，那么 $$\sqrt{x_0^2 - x^2} = x_0 \sin\theta$$，以及，$$\mathrm{d}x = -x_0 \sin\theta \mathrm{d} \theta$$。通通丢回积分里边去，

$$ \omega t = \int \frac{-x_0 \sin\theta \mathrm{d}\theta}{x_0 \sin\theta} = - \int \mathrm{d}\theta$$

$$ \Rightarrow \quad \omega t = -\theta + L$$

其中 $$L$$ 为积分常数，取值同样由初始条件决定。作逆变换回归到位移 $$x$$ 上，我们发现：

$$ x = x_0 \cos \theta = x_0 \cos (-\omega t + L)$$

我们重新定义常数 $$\phi = -L$$，并且注意到**幼儿园就学过的 cosine 函数的偶函数性质**，上面的解可以最终写成如下更为人所熟知的形式：

$$ \boxed{x(t) = x_0 \cos(\omega t + \phi)} \quad \text{Q.E.D.}$$

