---
layout: post
title: "单变量线性回归模型"
date: 2022-08-10 11:20:00
description: 一篇写给小小白们的线性回归入门教程
tags: mathematics linear-algebra matrix
categories: mathematics linear-algebra machine-learning
---

这是一篇小白写给小小白的有关**单变量线性回归（linear regression with one variable）**的 note。

问题：给定一系列的数据点 $$(x_i, y_i)$$ （$$i=1,2,\cdots, m$$），如何找到一条和全体数据点匹配得最好的拟合直线（best-fit line），使得所有的数据点尽可能地落在这条直线附近。

设直线方程为 $$y = f(x) = wx + c$$，问题即找出最优的斜率参数 $$w$$ 及截距参数 $$c$$。

{% include figure.liquid loading="eager" path="assets/img/linear_reg_1.png" title="" class="img-natural rounded z-depth-1" %}

## 最小二乘法（Least Square Method）

在动手求解最佳拟合直线之前，首先需要明确这里所说的“最佳”究竟是什么意思。

显然，给定任意数据点的 $$x$$ 坐标，直线方程预测给出 $$y$$ 坐标和数据点实际的 $$y$$ 坐标会多少存在偏差。我们将这个差异量称为**误差**（error）。对于数据点 $$(x_i, y_i)$$，误差可以写作：

$$
e_i = f(x_i) - y_i = wx_i +c - y_i
$$

大体而言，我们希望误差越小越好。容易拍脑门想到的方案，是去用每个数据点的误差的总和来估计拟合的好坏，但误差可正可负，这样不同数据点的误差就可以互相抵消，即便某些点匹配得非常离谱，求和时依然有机会跟别人抵消后被抹去，所以这个方案不是个好主意。一个更好的方案，便是用误差的平方和来评判拟合函数的匹配程度，这样所有数据点的贡献都是正的，不存在抵消的情况。这种做法就是所谓的**最小二乘法**，也称作**最小平方法**。

需要考察的**损失函数**（cost function）可以被定义为：

$$
E = \sum \left( wx_i +c - y_i \right)^2 \tag{1}
$$

我们的目标是让它取得极小。显然，损失函数取得极小的必要条件为：

$$
\frac{\partial E}{\partial w} = 0 \qquad \frac{\partial E}{\partial c} = 0 \tag{2}
$$

其中：

$$
\begin{aligned}
\frac{\partial E}{\partial w} &=  \sum 2x_i (wx_i + c - y_i) \\
&= 2w \sum x_i^2 + 2c \sum x_i - 2\sum x_i y_i \\
\frac{\partial E}{\partial c} &=  \sum 2(wx_i + b - y_i) \\
&= 2w \sum x_i + 2mc - 2\sum y_i \\
\end{aligned}
$$

由此得到一组关于 $$w$$ 和 $$c$$ 的方程：

$$
\begin{aligned}
w \sum x_i^2 + c \sum x_i &= \sum x_i y_i \\
w \sum x_i + mc &= \sum y_i \\
\end{aligned}  \tag{3}
$$

这就是一个常规的二元一次方程组，容易解出结果：

$$
\begin{aligned}
w &=  \frac{m \sum x_i y_i - \sum x_i \sum y_i}{m \sum x_i^2 - \left( \sum x_i \right)^2 } \\
c &= \frac{\sum x_i^2 \sum y_i - \sum x_i y_i \sum x_i}{m \sum x_i^2 - \left( \sum x_i \right)^2 }
\end{aligned} \tag{4}
$$

这便给出了最佳拟合直线的所有参数。

### 示例

举个栗子。

设某次实验得到了三个数据点 $$(0,0)$$，$$(1,1)$$，$$(2,1)$$。我们希望找出一条最匹配的直线。

{% include figure.liquid loading="eager" path="assets/img/linear_reg_2.png" title="" class="img-natural rounded z-depth-1" %}

不难验证：

$$
\begin{aligned}
m &= 3 \\
\sum x_i &= 0 + 1 + 1 = 3 \\
\sum y_i &= 0 + 1 + 1 = 2 \\
\sum x_i^2 &= 0^2 + 1^2 + 2^2 = 5 \\
\sum y_i^2 &= 0^2 + 1^2 + 1^2 = 2 \\
\sum x_i y_i &= 0\times0 + 1\times1 + 2\times1 = 3 \\
\end{aligned}
$$

通通塞进 $$(4)$$ 式中去，有

$$
\begin{aligned}
w &= \frac{3\times3-3\times2}{3\times5-3^2} = \frac{1}{2} \\
c &= \frac{5\times2-3\times3}{3\times5-3^2} = \frac{1}{6}
\end{aligned}
$$

与三个数据点匹配度最高的直线方程为

$$
y = \frac{1}{2}x + \frac{1}{6}
$$

## 线性代数的视角

换个角度看待这个问题。显然，最理想情况的拟合直线会穿过所有的数据点，即对于所有的 $$(x_i, y_i)$$，都有 $$wx_i + c = y_i$$ 完美地成立。这 $$m$$ 条方程可以写成向量方程的形式：

$$
w \begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_m
\end{bmatrix}
+
c
\begin{bmatrix}
1 \\
1 \\
\vdots \\
1
\end{bmatrix}
=
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_m
\end{bmatrix}
$$

或者再进一步写成矩阵形式：

$$
\begin{bmatrix}
x_1 & 1\\
x_2 & 1\\
\vdots & \vdots \\
x_m & 1\\
\end{bmatrix}
\begin{bmatrix}
w \\
c
\end{bmatrix}
=
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_m
\end{bmatrix} \tag{5}
$$

如果我们把上面的三个矩阵分别记为 $$A$$，$$t$$，$$b$$，则矩阵方程还可以简写成：

$$
A t = b \tag{5'}
$$

这里的 $$A$$ 和 $$b$$ 都是已知的，它们由数据点坐标完全确定。真正待解的是 $$t = [w \; c]^T$$，未知参数的数量只有 $$w$$ 和 $$c$$ 两个，而方程的数量 $$m$$ 通常情况下远大于 2，除非是数据集全都作弊似地商量好了，$$A t = b$$ 这个方程一般是无解的。

用线性代数的语言来讲，构成 $$A$$ 的那两个列向量张成的线性空间（记作 $$C(A)$$）只是 $$m$$ 维空间的一个很小的子空间，而 $$b$$ 这个目标向量不在 $$A$$ 的列空间 $$C(A)$$中，所以我们没法找到任何线性组合使得 $$A t = b$$。

精确解找不到，我们就试着找出一个尽可能好的近似解，使得

$$
A t = \hat{b} \tag{6}
$$

我们暂时还没有说明这里的 $$\hat{b}$$ 是什么东西。但是应该意识到一点，拟合问题其实是要在 $$C(A)$$ 中，找到一个距离 $$b$$ 最近的向量，即这里的 $$\hat{b}$$，使得 $$A t = \hat{b}$$ 成立。$$\hat{b}$$ 有点退而求其次的味道，它应该具有怎样的特性呢？（可参考后文图3）

做个类比。脑补下我们生活的三维世界里忽然出现了一个奶头乐产品，它凭着一口仙气漂浮在半空中，而你只能在地面上活动。你非常渴望得到这个奶头乐，就算够不着，但哪怕离它近一点能看得更清楚也好，那么你会怎样选择你的走位呢？显然你会跑到那东西的正下方，也就是奶头乐投影到地面所在平面的那个位置。

回到 $$A t = \hat{b}$$ 的问题，意识到**这个 $$\hat{b}$$ 其实就是 $$b$$ 在 $$A$$ 张成的列空间中 $$C(A)$$ 的投影**。可以证明（见后文补充证明）：

$$
t = \left( A^T A \right)^{-1} A^T b \tag{7}
$$

于是需要求解的线性回归问题，最终归为求解线性方程：

$$
A^T A t = A^T b \tag{8}
$$

将 $$A$$ 和 $$b$$ 代入，做下基本的矩阵乘法，有

$$
\begin{aligned}
A^T A & = \begin{bmatrix}
x_1 & x_2 &\cdots & x_m\\
1 & 1 & \cdots & 1
\end{bmatrix}
\begin{bmatrix}
x_1 & 1\\
x_2 & 1\\
\vdots & \vdots \\
x_m & 1\\
\end{bmatrix}
= \begin{bmatrix}
\sum x_i^2 & \sum x_i \\
\sum x_i & m \\
\end{bmatrix} \\
A^T b & = \begin{bmatrix}
x_1 & x_2 &\cdots & x_m\\
1 & 1 & \cdots & 1
\end{bmatrix}
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_m \\
\end{bmatrix}
= \begin{bmatrix}
\sum x_i y_i \\
\sum y_i \\
\end{bmatrix}
\end{aligned}
$$

需要求解的方程由此被写成

$$
\begin{bmatrix}
\sum x_i^2 & \sum x_i \\
\sum x_i & m \\
\end{bmatrix}
\begin{bmatrix}
w \\
c
\end{bmatrix}

= \begin{bmatrix}
\sum x_i y_i \\
\sum y_i \\
\end{bmatrix} \tag{9}
$$

眼尖的读者可能已经看出来，这里得到的关于 $$w$$ 和 $$c$$ 的方程，其实跟前面已经出现过的 $$(3)$$ 式是完全一样的。因此，**最小平方差的直线拟合，本质上其实是求解一个目标向量在某个线性子空间里的投影问题。**

从计算角度而言，$$(9)$$ 式也很容易在计算机上借用数值计算工具得到结果。

### 示例

继续拿前面用过的数据集举例。

三个数据点分别为 $$(0,0)$$，$$(1,1)$$，$$(2,1)$$。对应的矩阵和向量分别为：

$$
A= \begin{bmatrix}
0 & 1 \\
1 & 1 \\
2 & 1
\end{bmatrix} \qquad 
t = \begin{bmatrix}
w \\ c
\end{bmatrix} \qquad 
b= \begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix}
$$

确定最佳拟合参数 $$w$$ 和 $$c$$ 的方程为 $$A^TAt = A^T b$$，即

$$
\begin{aligned}
\begin{bmatrix}
0 & 1 & 2 \\
1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
0 & 1 \\
1 & 1 \\
2 & 1
\end{bmatrix}
\begin{bmatrix}
w \\ c
\end{bmatrix} &=
\begin{bmatrix}
0 & 1 & 2 \\
1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
0 \\ 1 \\ 1
\end{bmatrix} \\
\begin{bmatrix}
5 & 3 \\
3 & 3
\end{bmatrix}
\begin{bmatrix}
w \\ c
\end{bmatrix} &=
\begin{bmatrix}
3 \\ 2
\end{bmatrix}
\end{aligned}
$$

这等价于二元一次方程组：

$$
\begin{aligned}
5w + 3c = 3 \\
3w + 3c = 2
\end{aligned}
$$

不难解出跟之前一样的结果：

$$
w=\frac{1}{2} \qquad c = \frac{1}{6}
$$


### 补充证明：向量 $$b$$ 在矩阵 $$A$$ 张成的列空间中的投影

将矩阵 $$A$$ 写开成如下的形式

$$
A = \begin{bmatrix}
&a_1 &\bigg| &a_2 &\bigg| &\cdots &\bigg| & a_n & 
\end{bmatrix}
$$

这里可以清楚地看到构成 $$A$$ 的一堆列向量 $$a_1, a_2, \cdots, a_n$$，它们的线性组合可以张成一个列空间 $$C(A)$$。

我们希望找到向量 $$b$$ 在矩阵 $$A$$ 张成的列空间 $$C(A)$$ 中的投影，记作 $$\hat{b}$$。由于 $$\hat{b}$$ 是 $$C(A)$$ 中的向量，它必定可以表示成 $$A$$ 所含的列向量们的线性组合，即

$$
\hat{b} = At
$$

{% include figure.liquid loading="eager" path="assets/img/linear_reg_1.png" title="" class="img-natural rounded z-depth-1" %}

从原向量 $$b$$ 抠去隶属于 $$C(A)$$ 的投影 $$\hat{b}$$，剩下的分量应正交（orthogonal）于 $$C(A)$$，我们将其记为误差向量 $$e$$：

$$e=b-\hat{b}=b-At$$

$$e$$ 与 $$C(A)$$ 中的所有向量都正交（即互相垂直）的条件意味着 $$e$$ 与全体列向量 $$a_1, a_2, \cdots, a_n$$ 的点乘等于零：

$$
\left\{
\begin{aligned}
a_1^T (b-At) &= 0 \\
a_2^T (b-At) &= 0 \\
&\cdots \\
a_n^T (b-At) &= 0 \\
\end{aligned}\right.
$$

这一堆方程可以写成紧凑的矩阵形式：

$$
A^T(b-At) = 0
$$

从中不难得出前文提及的 $$(7)$$ 和 $$(8)$$ 式：

$$
\begin{array}{c}
 A^T A t = A^T b\\
t = \left( A^T A \right)^{-1} A^T b
\end{array}
$$

连带我们还得到了 $$b$$ 在 $$C(A)$$ 空间中的投影向量为：

$$
\hat{b} = A \left( A^T A \right)^{-1} A^T b
$$

## 梯度下降算法（Gradient Descent）

除了前面提及的一击毙命的计算方法，实操中还有一种很实用的算法，可以帮助我们找到足够好的拟合参数 $$w$$ 和 $$c$$。

为了使得取得损失函数 $$E = \sum \left( wx_i +c - y_i \right)^2$$ 取得极小，我们可以先随意设定一组 $$w$$ 和 $$c$$ 的取值，然后考察一下 $$E(w,c)$$ 这个函数在给定的这两个参数发生小幅变化时候的变化率。如果 $$w$$ 和 $$c$$ 往某个方向稍稍变化一点，可以使得 $$E(w,c)$$ 的值降低，那么我们就可以用这组变化后的 $$w$$ 和 $$c$$ 作为更好的参数，然后再循环进行上面的操作，不断地找到使得 $$E(w,c)$$ 取值越来越小的参数组合，从而逼近最优解。

以上便是机器学习中梯度下降算法的核心思想。遇到损失函数并不是平方误差的情况，我们未必能找到一套可以直接照搬的公式计算出所需的最佳拟合参数，但是大多数情况总可以利用梯度下降的方法来逐步逼近一个近似最优，或者是局部的最优解。此外，梯度下降算法的代码实现并不复杂，很容易通过循环语句实现。因此，梯度下降算法在实践中具有很不错的拓展性。

回到我们的简单线性回归问题。机器学习中经常要处理的是非常庞大的数据集，所有数据点和拟合预测值的平方误差的总合会随着数据集的扩大而变得很大，研究学者们通常会对平方误差的损失函数作一个归一化处理，改写成一个类似于全体数据点平均平方误差的一个函数。习惯上还会额外引入一个因子 $$2$$，单纯是为了让后面要推导的结果变得更好看。于是，我们的损失函数被写作：

$$
J(w, c) = \frac{E}{2m} = \frac{1}{2m}\sum \left( wx_i +c - y_i \right)^2
$$

在每一步的迭代中，对 $$w$$ 和 $$b$$ 的参数值作如下的更新：

$$
\begin{align*} 
w &= w -  \alpha \frac{\partial J(w,c)}{\partial w} \\
c &= c -  \alpha \frac{\partial J(w,c)}{\partial c} \\
\end{align*}
$$

其中 $$\alpha$$ 是被称为学习率（learning rate）的一个常数，它会决定算法收敛与否以及收敛的速度。上式中偏导数的斜率项分别为：

$$
\begin{align*}
\frac{\partial J(w,c)}{\partial w}  &= 
\frac{1}{2m}\frac{\partial}{\partial w} \sum  \left( wx_i +c - y_i \right)^2 \\
& = \frac{1}{m} \sum x_i \left( wx_i +c - y_i \right) \\
 \frac{\partial J(w,c)}{\partial b}  &= 
\frac{1}{2m}\frac{\partial}{\partial c} \sum  \left( wx_i +c - y_i \right)^2 \\
& = \frac{1}{m} \sum \left( wx_i +c - y_i \right) \\
\end{align*}
$$

选取不要太离谱的初始参数 $$w$$ 和 $$c$$，以及合适的 $$\alpha$$，让程序迭代疯狂跑个成百上千轮，通常也可以给出足够好的拟合参数。



