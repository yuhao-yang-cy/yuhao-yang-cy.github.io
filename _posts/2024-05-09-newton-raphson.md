---
layout: post
title: "浅说 Newton-Raphson 方法——从一道 STEP II 2023 的真题说起"
date: 2024-05-09 07:27:00
description: 启发于 STEP II 2023 的卷子中出现的一个设计非常惊艳的大题，来水一点 Newton-Raphson 方法的科普
tags: mathematics analysis step
categories: mathematics step
---

## 开篇的絮絮叨叨

在数值分析中，Newton-Raphson 方法是一种用于求解方程的根的高效迭代算法，同时这个方法也是 A-Level Further Mathematics 与数值计算相关的版块中要求掌握的。

Newton-Raphson 方法属于微积分中比较基础的内容，长久以来我也只是把它当作一把好刀，需要的时候拿出来用用而已。近几年瞎折腾的活里，比如帮某人画弱碱滴强酸/弱酸滴强碱的 pH 值变化曲线、SIR 传染病模型里去估计不同基本传播数 $$\mathcal{R}_0$$ 下的疾病扩散规模等问题中，都快乐地把 Newton-Raphson 方法招呼上来干活。然而，在运用这套方法时，我只知道它很有效，却没有太多想过它为什么那么高效。

前几天肝完的一套 STEP II 2023 的卷子中，出现了一个设计非常惊艳的大题。题目给出了一个基于 Newton-Raphson 方法的求根公式，可以在扳手指就能数清的迭代步数内，快速地找到非常非常非常非常接近 $$\sqrt{2}$$ 的有理分式，十进制展开形式的精度可达小数点后数百位！ 受到这个问题的震撼，也是受到了推导过程的启发，我萌生了写下这篇公众号的想法。

接下来，就让我们进入正题吧。

## Newton-Raphson 算法简介

Newton-Raphson 方法得名于 Isaac Newton 和 Joseph Raphson，这套算法的核心思想在于从一个现有的近似解开始，生成一个又一个更接近于精确解的更好的近似根。其中，每一步迭代获得的精度上的提升，具体的步骤可以通过以下的图文来展现。

{% include figure.liquid loading="eager" path="assets/img/newton_raphson.png" title="Inverse Matrix Theorem" class="img-natural rounded z-depth-1" %}

记方程 $$f(x)=0$$ 的精确解为 $$\alpha$$，即 $$f(\alpha)=0$$ 严格成立。

假设从某个初始的拍脑门的猜测开始后的第 $$n$$ 步，我们得到了近似解 $$x_n$$。既然是近似解，$$x_n$$ 和精确解 $$\alpha$$ 之间或多或少总会存在那么一点偏差。

接下来我们在点 $$(x_n, f(x_n))$$ 处作函数 $$y=f(x)$$ 的切线，注意到这条切线会与 $$x$$ 轴相交于一个离精确解 $$\alpha$$ 更近的点，自然地，我们将其取作一个更好的近似根，记作 $$x_{n+1}$$。如此不断地重复，我们就可以不断地逼近真正的精确解 $$\alpha$$，直到我们满意的精度。

于是，这套算法的核心就归结于如何从 $$x_n$$ 生成 $$x_{n+1}$$ 的迭代公式。而这背后的推导，只需要用到一些基本的微积分工具就可以办到。

函数 $$y=f(x)$$ 在点 $$(x_n, f(x_n))$$ 处的切线方程为：

$$
y-f(x_n) = f'(x_n) (x-x_n)
$$

其中，$$f'(x_n)$$ 表示 $$y=f(x)$$ 在 $$x=x_n$$ 处的一阶导数。

在切线方程中，令 $$y=0$$ 就可以找到它与 $$x$$ 轴的交点坐标，我们得到：

$$
x=x_n - \frac{f(x_n)}{f'(x_n)}
$$

这即是我们所需的 Newton-Raphson 迭代公式

$$
x_{n+1}=x_n - \frac{f(x_n)}{f'(x_n)}
$$

通常来讲，只要我们对付的方程 $$f(x)=0$$ 不要具有一些过于离谱的性质，这套算法都可以快速收敛到精确解附近。甚至从一些相差十万八千里的根本谈不上近似解的初始值开始，它都可以通过迭代将求解过程拉上轨道，收敛至精确解。由于这套算法高效，而且实现起来也很方便，因此是数值计算中求解方程的一套非常有用的算法。

## Newton-Raphson 方法求根

举个 Newton-Raphson 算法应用的简单例子：对任意正实数 $$a>0$$ 开根。

对此问题，我们可以将待计算的 $$\alpha = \sqrt{a}$$ 视作方程 $$f(x) = x^2 - a$$ 的根。

不难计算

$$
f'(x_n) = 2x\big|_{x=x_n} = 2x_n
$$

根据 Newton-Raphson 迭代公式：

$$
x_{n+1} = x_n - \frac{x_n^2 - a}{2x_n} \quad \Rightarrow \quad x_{n+1} = \frac{x_n^2+a}{2x_n}
$$

比方说，如果我们想知道 $$\sqrt{2}$$ 是多少，令 $$a=2$$，然后随手设一个初始值，比如 $$x_0 = 1$$，那么接着不断套娃就可以有：

$$
\begin{align*}
x_1 &= \frac{1^2 + 2}{2\times1} = \frac{3}{2} = 1.5 \\
x_2 &= \frac{\left(\frac{3}{2}\right)^2 + 2}{2\times\left(\frac{3}{2}\right)} = \frac{17}{12} = 1.4166 \cdots \\
x_3 &= \frac{\left(\frac{17}{12}\right)^2 + 2}{2\times\left(\frac{17}{12}\right)} = \frac{577}{408} = 1.4142156 \cdots\\
x_4 &= \frac{\left(\frac{577}{408}\right)^2 + 2}{2\times\left(\frac{577}{408}\right)} = \frac{665857}{470832} = 1.4142135623746 \cdots \\
&\vdots
\end{align*}
$$

与 $$\sqrt{2} = 1.4142135623730\cdots$$ 比较，我们可以看到，仅仅迭代4步之后，得到的有理分式的十进制小数形式和 $$\sqrt{2}$$ 的匹配度已经达到了小数点后11位，已经是大多数同学手边的计算器都算不到的精度了。

## 验证精度：大力出奇迹的数值计算

我们当然还可以再给力一点：迭代计算嘛，这种事情，写个小程序丢给计算机去做最合适不过了。

测试下来10轮迭代算下来已经很丧心病狂了，想再继续算下去的，浅浅修改下下面的 Python 示例代码的参数也很容易。

```python
from fractions import Fraction
x = [Fraction(1,1)]
for i in range(10):
    x.append((x[i]**2 + 2)/(2*x[i]))
```

10次迭代得到的 $$\sqrt{2}$$ 近似式已经是个分子和分母都是692位数的巨无霸分式。

{% include figure.liquid loading="eager" path="assets/img/newton_raphson_test_1.jpg" title="Inverse Matrix Theorem" class="img-natural rounded z-depth-1" %}

想看看这货的十进制展开长什么样子，没问题，一样交给程序干。Python 默认的浮点数计算精度显然是不够用了，我调用了 decimal 的库，设定算到800位的精度，也就一秒钟不到的事情。

```python
import decimal
# decimal expansion of the fractional approximation
appr_frac = x[10]
decimal.getcontext().prec = 800
appr = decimal.Decimal(appr_frac.numerator)/decimal.Decimal(appr_frac.denominator)
print(f"{appr:2.800f}")
```

当然，我们也可以狠狠算一波 $$\sqrt{2}$$ 的十进制展开，一样是用了 decimal 的库。

```python
import decimal
# decimal expansion of the fractional approximation
res = x[10]
decimal.getcontext().prec = 800
appr = decimal.Decimal(res.numerator) / decimal.Decimal(res.denominator)
print(f"{appr:2.800f}")
```

好了，接下来就是见证神奇的时刻了，我们的暴算结果如下图：

{% include figure.liquid loading="eager" path="assets/img/newton_raphson_test_2.jpg" title="Inverse Matrix Theorem" class="img-natural rounded z-depth-1" %}

{% include figure.liquid loading="eager" path="assets/img/newton_raphson_test_3.jpg" title="Inverse Matrix Theorem" class="img-natural rounded z-depth-1" %}

那个10轮迭代得到的暴躁的有理分式和 $$\sqrt{2}$$ 能够匹配到小数点后780+位，这精度是不是高得非常出人意料？！

## Newton-Raphson 求根公式为什么收敛得这么快？

这么一个看起来人畜无害的迭代公式 $$x_{n+1} = \frac{x_n^2+a}{2x_n}$$，为什么可以有如此的魔力？

以下的讨论借鉴了 STEP II 2023 卷的 Question 5。原问题只关注 $$\sqrt{2}$$ 的估值，但在它的启发下，我对中间的推导作了一些推广和改进，使得问题的讨论可以适用于任意 $$a>0$$ 的求根运算，也将迭代的偏差估计缩得更紧。

言归正传。为了讨论数列 $$\{x_n\}$$ 的收敛速度，我们先来证明一个有用的关系式：

$$
x_{n+1} - \sqrt{a} = \frac{x_n^2+a}{2x_n} - \sqrt{a} = \frac{x_n^2-2\sqrt{a}\cdot x_n+(\sqrt{a})^2}{2x_n}
$$

$$
x_{n+1} - \sqrt{a} = \frac{\left(x_n-\sqrt{a}\right)^2}{2x_n} \qquad (*)
$$

如果取 $$x_0 > 0$$，那么根据递推公式，很显然 $$x_n >0$$ 对所有的 $$n$$ 都成立。注意到 $$(*)$$ 式右边的完全平方，因此对任意 $$n\geq 0$$ 都有 $$x_{n+1} - \sqrt{a} \geq 0$$，即对任意 $$n\geq 1$$ 都有 $$x_n \geq \sqrt{a}$$。换言之，除了迭代公式决定不了的初始项，但凡我们手摆进去的 $$x_0>0$$，迭代公式确保后面的项总是从 $$\sqrt{a}$$ 的上方逼近 $$\sqrt{a}$$

 $$(*)$$ 式于是可以被放缩成不等式关系：

$$
x_{n+1} - \sqrt{a} \leq \frac{1}{2\sqrt{a}}{\left(x_n-\sqrt{a}\right)^2}
$$

不断套用这个不等式，我们有：

$$
\begin{align*}
x_n - \sqrt{a} & \leq \frac{1}{2\sqrt{a}}{\left(x_{n-1}-\sqrt{a}\right)^2} \\
& \leq \frac{1}{2\sqrt{a}} \left[ \frac{1}{2\sqrt{a}}{\left(x_{n-2}-\sqrt{a}\right)^2} \right]^2 = \frac{1}{2\sqrt{a}} \frac{1}{(2\sqrt{a})^2} \left(x_{n-2}-\sqrt{a}\right)^4 \\
& \leq \frac{1}{2\sqrt{a}} \frac{1}{(2\sqrt{a})^2} \left[ \frac{1}{2\sqrt{a}}{\left(x_{n-3}-\sqrt{a}\right)^2} \right]^4 = \frac{1}{2\sqrt{a}} \frac{1}{(2\sqrt{a})^2} \frac{1}{(2\sqrt{a})^4} \left(x_{n-3}-\sqrt{a}\right)^8 \\
& \leq \cdots \\
& \leq \frac{1}{2\sqrt{a}} \frac{1}{(2\sqrt{a})^2} \frac{1}{(2\sqrt{a})^4} \cdots \frac{1}{(2\sqrt{a})^{2^{n-2}}} \left(x_1-\sqrt{a}\right)^{2^{n-1}} \\
& = \frac{1}{2\sqrt{a}} \frac{1}{(2\sqrt{a})^2} \frac{1}{(2\sqrt{a})^4} \cdots \frac{1}{(2\sqrt{a})^{2^{n-2}}} \frac{1}{(2x_0)^{2^{n-1}}} \left(x_0-\sqrt{a}\right)^{2^{n}}
\end{align*}
$$

上面推导的最后一行中，由于 $$x_0$$ 可以自由选择，放缩的不等式关系对此情况未必成立，因此我们直接应用了 $$(*)$$ 的等式关系。针对 $$x_0$$ 的取值情况之后我们再作讨论。先化简下最后一行的结果，注意到前面的那堆分式的分母部分：

$$
\begin{align*}
2\sqrt{a}\cdot(2\sqrt{a})^2\cdot(2\sqrt{a})^4\cdots(2\sqrt{a})^{2^{n-2}} \cdot  (2x_0)^{2^{n-1}} &= (2\sqrt{a})^{1+2+4+\cdots+2^{n-2}} \times  (2x_0)^{2^{n-1}}\\
&= (2\sqrt{a})^{2^{n-1}-1} \times (2x_0)^{2^{n-1}}\\
&= 2^{-1} \cdot 4^{2^{n-1}} \cdot (\sqrt{a})^{2^{n-1}-1} \cdot x_0^{2^{n-1}} \\
&= \frac{1}{2\sqrt{a}}\left(4 \sqrt{a} \cdot x_0\right)^{2^{n-1}}
\end{align*}
$$

于是有

$$
x_n - \sqrt{a} \leq \frac{2\sqrt{a}}{\left(4 \sqrt{a} \cdot x_0\right)^{2^{n-1}}} ( x_0  -\sqrt{a})^{2^n}
$$

略微整理后得到偏差估计的最终结果：

$$
x_n - \sqrt{a} \leq 2\sqrt{a} \left[ \frac{( x_0  -\sqrt{a})^2}{4\sqrt{a}\cdot x_0}\right]^{2^{n-1}} \qquad (\#)
$$

不妨拿之前算 $$\sqrt{2}$$ 的例子来看看这个很狂躁的式子能不能说明点问题。在上式中，令 $$a=2$$，并取跟之前同样的初始值 $$x_0=1$$，得到：

$$
x_n - \sqrt{2} \leq 2\sqrt{2} \left[ \frac{(\sqrt{2}-1)^2}{4\sqrt{2}} \right]^{2^{n-1}}
$$

我们据此来估计第10轮迭代后的结果：

$$
x_{10} - \sqrt{2} \leq 2\sqrt{2} \left[ \frac{(\sqrt{2}-1)^2}{4\sqrt{2}} \right]^{2^9}=2\sqrt{2}\times\left( \frac{3-2\sqrt{2}}{4\sqrt{2}}\right)^{512}
$$

不难证明：$$3-2\sqrt{2}<\frac{1}{4\sqrt{2}}$$，这是因为

$$
\begin{align*}
3-2\sqrt{2}&<\frac{1}{4\sqrt{2}} \\
\Leftrightarrow 3\sqrt{2} -4 &< \frac{1}{4} \\
\Leftrightarrow 3\sqrt{2} &< \frac{17}{4} \\
\Leftrightarrow 12\sqrt{2} &< 17 \\
\Leftrightarrow 288 &< 289
\end{align*}
$$

于是有

$$
\frac{3-2\sqrt{2}}{4\sqrt{2}} < \frac{1}{4\sqrt{2}\times4\sqrt{2}}=\frac{1}{32}
$$

$$
\left( \frac{3-2\sqrt{2}}{4\sqrt{2}}\right)^{512} < \left( \frac{1}{32} \right)^{512} = \left( \frac{1}{1024} \right)^{256} < \left( 10^{-3} \right)^{256} = 10^{-768}
$$

对 $$2\sqrt{2}$$ 也进行小幅放缩 $$2\sqrt{2}<10$$，因此我们有：

$$
x_{10} - \sqrt{2} < 10\times 10^{-768} = 10^{-767}
$$

之前已经证明过对于 $$n\geq1$$ 总有 $$x_n\geq \sqrt{2}$$，所以

$$
\sqrt{2} \leq x_{10} < \sqrt{2} + 10^{-767}
$$

这也说明将 $$x_{10}$$ 作为 $$\sqrt{2}$$ 的近似值，偏差仅仅只有不到 $$10^{-767}$$，也就是十进制展开后，至少在小数点 $$767$$ 位之前两者都是完全相同的，这跟我们之前数值计算显示的结果基本一致。

上面的讨论依然是基于计算的，要对 Newton-Raphson 的收敛速度建立起更深刻的认识，我们可以回到前面已经证明好的对误差上界的估计:

$$
x_n - \sqrt{a} \leq 2\sqrt{a} \left[ \frac{( x_0  -\sqrt{a})^2}{4\sqrt{a}\cdot x_0}\right]^{2^{n-1}} \qquad (\#)
$$

如果我们的数感极其优秀，一上来猜测的初始值 $$x_0$$ 就足够接近 $$\sqrt{a}$$，即 $$x_0 - \sqrt{a} = \epsilon \ll \sqrt{a}$$，很容易看出， $$(\#)$$ 式中 $$[\cdots]$$ 项大体上会变成 $$\frac{\epsilon^2}{4a}$$ 即一个非常小的正数。当 $$n$$ 足够大时，不等式 $$(\#)$$ 的右边会逐渐趋于零。再注意到 $$[\cdots]$$ 项外面顶着的指数，是一个随着 $$n$$ 指数增长的 $$2^{n-1}$$，足以想见整一坨趋于零的速度会非常惊人。

但即便我们上来的盲猜非常离谱，Newton-Raphson 求根公式一样可以对付。如果 $$x_n \gg \sqrt{a}$$，那么在迭代的下一步，我们有

$$
x_{n+1} = \frac{x_n^2 + a}{2x_n} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right) \approx \frac{1}{2}x_n
$$

即对于大的离谱的估值，迭代会以大致每步减半的速度把值给降下来，这种大刀阔斧的连续打对折，放在迭代初期也算进步可观了。

反过来，如果 $$x_n \ll \sqrt{a}$$，往下算一步会有

$$
x_{n+1} = \frac{x_n^2 + a}{2x_n} \approx \frac{a}{2x_n} \gg \sqrt{a}
$$

即会立即生成一个大的离谱的估值，于是在之后的迭代中就会如同刚才讨论的那样，从 $$\sqrt{a}$$ 的上侧开始以持续腰斩的态势往 $$\sqrt{a}$$ 靠近。

因此我们可以看到，即便从一个很不靠谱的 $$x_0$$ 出发，也可以通过迭代快速地逼近 $$\sqrt{a}$$。设在第 $$p$$ 轮得到的 $$x_p$$ 和 $$\sqrt{a}$$ 的偏差已经来到跟 $$\sqrt{a}$$ 差不多的数量级，我们就大可以将这个 $$x_p$$ 当作后续迭代的 $$x_0$$，然后快乐地继续套用 $$(\#)$$ 式来讨论后续迭代的收敛速度。不妨记 $$x_p = \left(1 + \frac{1}{k} \right)\sqrt{a} \longrightarrow x_0$$，其中我们约定 $$k>1$$，这样可以使得 $$x_p$$ 确实是个比 $$\sqrt{a}$$ 略大但不至于大很多的数。回到 $$(\#)$$ 式中 $$[\cdots]$$ 项：

$$
\frac{( x_0  -\sqrt{a})^2}{4\sqrt{a}\cdot x_0} = \frac{\left(\frac{1}{k}\sqrt{a}\right)^2}{4\sqrt{a}\times\left(1+\frac{1}{k}\right)\sqrt{a}} = \frac{\frac{1}{k^2}}{4\left(1+\frac{1}{k}\right)} = \frac{1}{4k(1+k)}
$$

既然 $$k>1$$，则 $$\frac{1}{4k(1+k)}<\frac{1}{8}$$，放回到 $$(\#)$$ 式中，注意 $$[\cdots]$$ 项头顶上那个增长巨快的指数 $$2^{n-1}$$，我们可以推知后续迭代的精度会立刻起飞，生成的结果会极速地逼近 $$\sqrt{a}$$ 的精确值。

## 更一般的讨论

在上面的讨论中，我们已经看到 Newton-Raphson 算法得到的求根公式可以在非常有限的迭代后达到非常惊人的精度。在这篇文章的最后一个版块，我们来作一点更一般化的讨论，分析下 Newton-Raphson 方法在更普遍情形下求解方程时的收敛速度。

我们依然将方程 $$f(x)=0$$ 的精确解记作 $$\alpha$$，并将迭代第 $$n$$ 步得到的近似解记作 $$x_n$$。利用 $$f(x)$$ 在 $$x=x_n$$ 附近的 Taylor 展开式来表达 $$f(\alpha)$$，我们可以写下：

$$
f(\alpha) = f(x_n) + f'(x_n)(\alpha - x_n) + R_1 = 0
$$

上式中，一阶展开的 Lagrange 余项为

$$
R_1 = \frac{1}{2}f''(\xi_n)(\alpha-x_n)^2
$$

其中 $$\xi_n$$ 是介于$$\alpha$$ 和 $$x_n$$ 之间的某个数，咱不用管它具体是多少，但它的存在性是可以由微分中值定理担保的。

将 $$f(\alpha)$$ 的 Taylor 展开式进行整理，可以改写成：

$$
(x_n - \alpha) - \frac{f(x_n)}{f'(x_n)} = \frac{R_1}{f'(x_n)}
$$

觉得有什么似曾相识的东西吗？这里躲着一个 Newton-Raphson 的迭代公式 $$x_{n+1}=x_n - \frac{f(x_n)}{f'(x_n)}$$！顺势把 $$R_1$$ 的完整形式也塞进来，我们有：

$$
x_{n+1} - \alpha = \frac{f''(x_n)}{2f'(x_n)}(x_n - \alpha)^2
$$

注意到 $$x_n - \alpha$$ 给出的正是近似解和精确解之间的偏差，我们不妨将其记作 $$\epsilon_n \equiv x_n - \alpha$$，于是有

$$
\epsilon_{n+1} = \frac{f''(x_n)}{2f'(x_n)}\cdot \epsilon_n ^2
$$

一般情形下，我们更多关心的可能只是偏差的绝对值，于是我们得到了一个用来估计每次迭代后偏差的变化趋势的算式的最终形式：

$$
|\epsilon_{n+1}| = 
\left|\frac{f''(x_n)}{2f'(x_n)} \right|\cdot \epsilon_n ^2
$$

但凡 $$f(x)$$ 是个比较正常的函数，即我们通常意义上的光滑、连续的守规矩函数，并且在  $$f(\alpha)=0$$ 附近的一阶导数不要一个不巧会等于零，那么通过上式我们可以看到误差项 $$\displaystyle \vert \epsilon_n \vert $$ 呈现出二次收敛的性质。换句话说，近似解 $$x_n$$ 能达到的小数精度，在下一轮迭代中大体上会翻个倍。可以在此强调一下，拿近似解和精确解去比较，匹配的小数位数在每一轮迭代后不是按部就班地每次多个几位，而是翻倍！

写/读到这里，不知道读者是否跟我一样，对 Newton-Raphson 方法另眼相看了呢？