---
layout: post
title: "从概率到预测：理解最大似然估计与线性回归"
date: 2026-04-04 23:30:00
description: 笔记将以正态分布为例，推导最大似然估计的求解过程，分析其统计偏差，并展示其与线性回归中误差平方和最小化之间的联系
tags: mathematics linear-algebra machine-learning
categories: mathematics linear-algebra machine-learning
---

> Coursera 刷完吴恩达的『[Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)』系列后，在课程结尾的推荐书目发现了一本 Christopher M. Bishop 和 Hugh Bishop 父子合著的『[Deep Learning: Foundations and Concepts](https://www.bishopbook.com/)』，似乎是个非常适合我这半吊子水平，最近每天拿来当睡前读物。目前也还有3分钟热度，做的读书笔记就趁热乎地发了。

在概率与统计学中，我们常常面临这样一类问题：已知某些数据是由某个参数化的概率分布产生的，但分布的参数本身是未知的。这篇笔记介绍求解这类问题最经典的框架之一——**最大似然估计法**（maximum likelihood estimation）。其核心思想直观而朴素——选取使观测数据出现可能性最大的参数值，作为对真实参数的估计。

笔记将以正态分布为例，具体推导最大似然估计的求解过程，分析其统计偏差，并进一步展示其与线性回归中误差平方和最小化之间的联系。


## 最大似然估计

假设连续变量 $$x$$ 服从平均值 $$\mu$$ 和方差 $$\sigma^2$$ 均未知的**正态分布** $$\mathcal{N}(\mu, \sigma^2)$$：

$$
\mathcal{N}(x |\mu, \sigma^2) = \frac{1}{\sqrt{2\pi \sigma^2}} \mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}} \tag{1}
$$

如果我们对该变量作观测，进而得到了一系列的观测值 $$\mathbf{x} = (x_1, x_2, \cdots, x_N)$$。如果每次观测得到的数据点都是相互独立的，那么整个数据集出现的可能性，也可称为**似然函数**（likelihood function），可以写成：

$$
p(\mathbf{x}|\mu, \sigma^2) = \prod_{n=1}^N p(x_n|\mu, \sigma^2) = \prod_{n=1}^N \mathcal{N}(x_n |\mu, \sigma^2) \tag{2}
$$

我们常常希望能通过这些观测值 $$x_1, x_2, \cdots, x_N$$ 去估计概率分布参数 $$\mu$$ 和 $$\sigma^2$$。一种常见的方法便是去寻找可以让似然函数最大化的参数 $$\mu^*$$ 和 $$\sigma^{*2}$$，称作**最大似然估计**（maximum likelihood）。

注意到一个函数取得极大值等价于该函数的对数取得极大值，我们可以先对 $$p(\mathbf{x}|\mu, \sigma^2)$$ 取对数，得到**对数似然函数**（log likelihood function）：

$$
\begin{align*}
\ln p(\mathbf{x}|\mu, \sigma^2) & = \ln \left[ \prod_{n=1}^N \frac{1}{\sqrt{2\pi \sigma^2}} \mathrm{e}^{-\frac{(x_n-\mu)^2}{2\sigma^2}} \right] \\
& = -\frac{1}{2}N\ln(2\pi) - N\ln\sigma - \frac{1}{2\sigma^2} \sum_{n=1}^N (x_n-\mu)^2
\end{align*}
$$

关于 $$\mu$$ 求偏导可以得到**样本平均**（sample mean）：

$$
\begin{align*}
\frac{\partial \ln p}{\partial \mu} &= -\frac{1}{\sigma^2} \sum_{n=1}^N (x_n-\mu) = 0 \\
\Rightarrow \mu^* &= \frac{1}{N} \sum_{n=1}^N x_n \tag{3}
\end{align*}
$$

关于 $$\sigma$$ 求偏导可以得到**样本方差**（sample variance）：

$$
\begin{align*}
\frac{\partial \ln p}{\partial \sigma} &= -\frac{N}{\sigma} + \frac{1}{\sigma^3} \sum_{n=1}^N (x_n-\mu)^2 = 0 \\
\Rightarrow \sigma^{*2} &= \frac{1}{N} \sum_{n=1}^N (x_n-\mu^*)^2 \tag{4}
\end{align*}
$$


## 最大似然估计的偏差

上述得到的样本平均 $$\mu^*$$ 和样本方差 $$\sigma^{*2}$$ 都是观测数据 $$x_1, x_2, \cdots, x_n$$ 的函数，它们并不等同于观测数据们实际服从的正态分布的真实参数 $$\mu$$ 和 $$\sigma^2$$。我们接下来讨论 $$\mu^*$$ 和 $$\sigma^{*2}$$ 的期望值，进而分析它们与真实值之间可能存在的**偏差**（bias）。

对于样本平均，我们有：

$$
\mathbb{E}(\mu^*) = \frac{1}{N} \sum_{n=1}^N \mathbb{E} (x_n) = \frac{1}{N} \sum_{n=1}^N \mu \quad \Rightarrow \quad \mathbb{E}(\mu^*) = \mu \tag{5}
$$

对于样本方差，我们有：

$$
\mathbb{E} (\sigma^{*2}) = \frac{1}{N} \sum_{n=1}^N \mathbb{E} \left( \left(x_n - \frac{1}{N} \sum_{m=1}^N x_m\right)^2 \right) \tag{6}
$$

作平方展开

$$
\begin{align*}
\left(x_n - \frac{1}{N} \sum_{m=1}^N x_m\right)^2 &= x_n^2 - \frac{2}{N} \sum_{m=1}^N x_n x_m + \frac{1}{N^2} \left(\sum_{m=1}^N x_m \right)^2 \\
& = x_n^2 - \frac{2}{N} \sum_{m=1}^N x_n x_m + \frac{1}{N^2} \sum_{m=1}^N \sum_{m'=1}^N x_m x_{m'} \\
& = x_n^2 - \frac{1}{N} \sum_{m=1}^N x_n x_m
\end{align*}
$$

代回(6)式后我们得到

$$
\begin{align*}
\mathbb{E} (\sigma^{*2})  & = \frac{1}{N} \sum_{n=1}^N \mathbb{E} (x_n^2) - \frac{1}{N^2} \sum_{n=1}^N \sum_{m=1}^N \mathbb{E} ( x_n x_m) \tag{7}
\end{align*}
$$

又注意到：

$$
\mathbb{E} ( x_n x_m) = \left\{
\begin{align*}
&\mathbb{E} (x_n^2) = \mu^2 + \sigma^2  & \text{if } n = m  \\
&\mathbb{E} (x_n)  \mathbb{E} (x_m) = \mu^2  &\text{if } n \neq m \\
\end{align*}
\right. \tag{8}
$$

于是

$$
\sum_{n=1}^N \sum_{m=1}^N \mathbb{E} ( x_n x_m) = N \times \bigg[ \underbrace{(\mu^2 + \sigma^2)}_{\text{from } m=n} + \underbrace{(N-1)\mu^2}_{\text{from } m \neq n} \bigg] = N\sigma^2 + N^2\mu^2
$$

最终化简得到：

$$
\begin{align*}
\mathbb{E} (\sigma^{*2})  & = (\mu^2 + \sigma^2) - \left(\frac{1}{N}\sigma^2 + \mu^2\right) \\
\Rightarrow \mathbb{E} (\sigma^{*2}) &= \frac{N-1}{N}\sigma^2 \tag{9}
\end{align*}
$$

(5)式和(9)式的结果说明，**最大似然估计得到的样本平均等于真实平均**，但是**样本的方差会小于真实方差**。由于样本方差是相对于样本平均而非真实平均估计得来的，因此样本方差必然会低估真实方差。**无偏差的真实方差**的计算公式应该被修正为：

$$
\sigma^{*2}_\text{unbiased} = \frac{1}{N-1} \sum_{n=1}^N (x_n-\mu^*)^2 \tag{10}
$$


## 线性回归

**线性回归**（linear regression）问题旨在找到一个合适的多项式函数来描述一系列输入数据 $$\mathbf{x} = (x_1, x_2, \cdots, x_N)$$和一系列输出数据 $$\mathbf{y} = (y_1, y_2, \cdots, y_N)$$ 之间的关系。假定对于任意给定的输入值 $$x_n$$，相应的输出值 $$y_n$$ 符合一个均值等于 $$\hat{y}(x_n, \mathbf{w})$$、方差为 $$\sigma^2$$ 的正态分布，其中 $$\hat{y}(x_n, \mathbf{w})$$ 是一个关于 $$x$$ 的、系数为 $$\mathbf{w}$$ 的多项式函数。那么该问题的似然函数可以写作

$$
p(\mathbf{y} | \mathbf{x} , \mathbf{w}, \sigma^2) = \prod_{n=1}^N p(y_n|x_n, \mathbf{w}, \sigma^2) = \prod_{n=1}^N \mathcal{N}(y_n | \hat{y}(x_n, \mathbf{w}), \sigma^2) \tag{11}
$$

可以类似地导出对数似然函数：

$$
\begin{align*}
\ln p(\mathbf{y} | \mathbf{x} ,\mu, \sigma^2) & = \ln \left[ \prod_{n=1}^N \frac{1}{\sqrt{2\pi \sigma^2}} \mathrm{e}^{-\frac{(\hat{y}(x_n, \mathbf{w}) - y_n)^2}{2\sigma^2}} \right] \\
& = -\frac{1}{2}N\ln(2\pi) - N\ln\sigma - \frac{1}{2\sigma^2} \sum_{n=1}^N ( \hat{y}(x_n, \mathbf{w}) - y_n)^2 \tag{12}
\end{align*}
$$

注意到如果我们关于 $$\mathbf{w}$$ 求偏导，上式中仅最后一项会有贡献，因此最大似然函数取关于多项式系数 $$\mathbf{w}$$ 取得极大值的条件，等价于如下的函数取极小值：

$$
J(\mathbf{w}) = \frac{1}{2}\sum_{n=1}^N ( \hat{y}(x_n, \mathbf{w}) - y_n)^2 \tag{13}
$$

这便是机器学习领域非常常见的**误差平方和**函数（sum-of-squares error function）。我们可以看到，**基于数据噪声符合正态分布的假定，最大似然估计的自然结果就是要求误差平方和最小。**

关于 $$\sigma$$ 求偏导的过程和先前非常类似，我们可以得到：

$$
\sigma^{*2} = \frac{1}{N} \sum_{n=1}^N ( \hat{y}(x_n, \mathbf{w}) - y_n)^2 \tag{14}
$$


## 参考资料

- *Christopher M. Bishop & Hugh Bishop* (2024), **Deep Learning: Foundations and Concepts** [Chapter 2 - Probabilities], Springer Nature  