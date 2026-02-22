---
layout: post
title: "线性代数读书笔记：为什么可逆矩阵必须是方阵？"
date: 2024-12-25 10:59:00
description: 那些年我大约是没太整明白的问题之——为什么可逆矩阵必须是方阵？
tags: mathematics linear-algebra matrix
categories: mathematics linear-algebra
---

> 最近终于忙完了申请季的文书、面试笔试辅导，也有闲暇功夫来灌灌水了。能水的素材倒是不少，最近在回炉的一本 [Linear Algebra (David Lay)]({{site.baseurl}}/books/2025_linear_algebra/)，新开的生物物理学（Philip Nelson），都想整一点读书笔记，顺手准备开一个『那些年我大约没太整明白的问题』系列，看看能坚持多少期。当然也有跟教学工作更相关的内容，比如今年为了牛剑模拟面试设（piao2）计（qie4）的一些有意思的新问题，和更新的 A-Level 刷题集，慢慢地整理，也应该会陆陆续续地发一些出来。
> 
> 临近年底冲一波业绩，就拿只需要码字的数学问题开涮吧。

记忆中曾经读过的很多线性代数教材在引入逆矩阵（inverse matrix）的概念时，都是直接默认**只有方阵（square matrix）才能定义逆矩阵**。例如维基百科就是这么定义逆矩阵的：
>给定一个 $n$ 阶方阵 $A$，若存在一个 $n$ 阶方阵 $B$ 使得 $AB = BA = I_n$，其中 $I_n$ 为 $n$ 阶单位矩阵，则称 $A$ 是可逆的，且 $B$ 是 $A$ 的逆矩阵，记作 $A^{-1}$。

并且在此段定义后立刻强调了
> 只有方阵（$n \times n$ 的矩阵）才可能有逆矩阵。

脑洞略略开一点的就很自然地会问：**凭什么不是方阵的矩阵就不配拥有逆矩阵了呢？**

对于一个 $m \times n$ 的矩阵 $A$，原则上也可以有 $n \times m$ 的矩阵 $C$ 使得 $CA = I_n$. 例如我们取

$$
A = \begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6 
\end{bmatrix}
$$

我们可以找到如下的矩阵 $C$

$$
C = \begin{bmatrix}
-\frac{5}{3} & \frac{4}{3} & 0 \\
\frac{1}{3} & \frac{1}{3} & -\frac{1}{3} 
\end{bmatrix} 
$$

不难验证

$$
CA = \begin{bmatrix}
-\frac{5}{3} & \frac{4}{3} & 0 \\
\frac{1}{3} & \frac{1}{3} & -\frac{1}{3} 
\end{bmatrix} \begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6 
\end{bmatrix} = \begin{bmatrix}
1 & 0 \\
0 & 1 
\end{bmatrix} = I_{2}
$$

而事实上，使得 $CA = I_2$ 成立的矩阵 $C$ 有无穷多个。上面举的例子中，2阶单位矩阵仅含有4个矩阵元，而我们需要寻找的矩阵 $C$ 含有6个未知的矩阵元参数，这里有足够的自由度可以让我们可以把其中2个参数作为可以随意取值的自由参数，然后再根据限制条件去敲定剩下的4个参数。因此，以上给出的 $C$ 只是无数种可能中的其中一种。有兴趣的读者不妨去试着找找其他符合条件的矩阵 $C$。

类似地，对于一个 $m \times n$ 的矩阵 $A$，也可以有 $n \times m$ 的矩阵 $D$ 使得 $AD = I_m$.  比如我们这次取

$$
A = \begin{bmatrix}
1 & 3 & 5 \\
2 & 4 & 6 
\end{bmatrix}
$$

我们也可以找到矩阵 $D$

$$ D = \begin{bmatrix}
1 & \frac{3}{2} \\
-5 & -\frac{1}{2} \\
3 & 0 
\end{bmatrix} $$

同样不难验证

$$
AD = \begin{bmatrix}
1 & 3 & 5 \\
2 & 4 & 6 
\end{bmatrix} \begin{bmatrix}
1 & \frac{3}{2} \\
-5 & -\frac{1}{2} \\
3 & 0 
\end{bmatrix} = 
\begin{bmatrix}
1 & 0 \\
0 & 1 
\end{bmatrix} = I_{2}
$$

同样，这里给出的矩阵 $D$ 也是不唯一的，符合 $AD = I_2$ 的矩阵 $D$ 也是有无限多种可能。

通过上面的讨论，我们可以看到，似乎未必一定是要方矩阵才可以定义逆矩阵。所以到底是哪里卡 bug 了呢？

这里面妙不可言的一个关键点在于定义方阵 $A$ 的逆矩阵 $B = A^{-1}$ 时，同时要求 $AB = I_n$ 以及 $BA = I_n$。如果不限定 $A$ 是方阵，即对于任意形状的 $m \times n$ 的矩阵 $A$，我们接下来会看到，如果存在矩阵 $C$ 和矩阵 $D$ 使得 $CA = I_n$ 以及 $AD = I_m$ 同时成立，**这个可交换的性质不仅会对 $A$ 的形状作出明确的限定，而且 $C$ 和 $D$ 还必然是同一个矩阵。**

---

让我们回到更具一般性的设定，即 $A$ 是一个 $m \times n$ 的矩阵。

假定存在 $n \times m$ 的矩阵 $C$ 使得 $CA = I_n$，我们来看看会有怎样的推论。考虑矩阵方程 $A\mathbf{x} = \mathbf{0}$，如果方程存在非平凡解 $\mathbf{x} \neq \mathbf{0}$，则 $CA\mathbf{x} = I_{n} \mathbf{x} = \mathbf{x} \neq 0$。但另一方面，$CA \mathbf{x} = C \mathbf{0} = \mathbf{0}$，由此导致矛盾，因此矩阵方程 $A\mathbf{x} = \mathbf{0}$ 只能有唯一解 $\mathbf{x} = \mathbf{0}$，这说明矩阵 $A$ 由一堆线性无关（linearly independent）的列向量（column vector）构成的。这是一堆 $m$ 维的列向量，总共有 $n$ 个，彼此线性无关必然有 $m \geq n$.

另一方面，假定存在 $n \times m$ 的矩阵 $D$ 使得 $AD = I_m$，我们也来试着瞧瞧看会得到怎样的结论。对于任意 $\mathbf{b} \in \mathbb{R}^m$，考虑矩阵方程 $A\mathbf{x} = \mathbf{b}$. 由于 $AD\mathbf{b} = I_{m}\mathbf{b} = \mathbf{b}$，因此 $\mathbf{x}=D\mathbf{b}$ 一定是方程 $A\mathbf{x} = \mathbf{b}$ 的一个解。注意到我们设定的 $\mathbf{b}$ 是 $\mathbb{R}^m$ 空间中的任意向量，这说明矩阵 $A$ 的所有列向量的线性组合（linear combinations）可以生成（span）整个 $\mathbb{R}^m$ 空间。要做到这一点，必须要有足够多的向量才行。矩阵 $A$ 由 $n$ 个 $m$ 维的列向量构成，因此必然有 $n \geq m$.

那如果对于给定的 $m \times n$ 的矩阵 $A$，既存在矩阵 $C$ 使得 $CA = I_n$，也存在矩阵 $D$ 使得 $AD = I_m$，那就必须有 $m\geq n$ 和 $n\geq m$ 同时成立。铛铛！此处应有掌声！我们只可能有 $m=n$，即 **$A$ 必须是一个方阵**！

我们再考虑 $CAD$ 这三个矩阵的乘积。一方面 $CAD = (CA)D = I_n D = D$，另一方面 $CAD = C(AD) = CI_{m} = C$. 铛铛！此处又该有掌声！这说明 $C=D$，即矩阵的左逆和右逆本质上没有区别，由此我们也论证了**逆矩阵的唯一性**。

