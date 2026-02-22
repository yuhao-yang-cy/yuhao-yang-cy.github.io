---
layout: post
title: 线性代数读书笔记：可逆矩阵定理大串烧
date: 2025-01-16 22:29:00
description: 那些年我大约是没太整明白的问题之——判定一个矩阵是否可逆的一大长串等价命题
tags: mathematics linear-algebra matrix
categories: mathematics linear-algebra
---

最近三天打鱼两天晒网地翻（hui2）完（lu2）了 David C. Lay 撰写的基础线性代数教材 [Linear Algebra and Its Application]({{site.baseurl}}/books/2025_linear_algebra/)，一本抽象程度不高、但非常侧重应用的工科数学教材，读完学到了不少自己不曾了解过的美妙概念和神奇应用。

这篇打算来写（shui3）一写（shui3）线性代数中最美妙的定理之一——可逆矩阵定理（inverse matrix theorem）。这条定理包含了判定一个矩阵是否可逆的一大长串等价命题。我写这篇公众号文章的原因之一是我在重读线性代数时，我发现对靠后的这些命题已经没有很深刻的印象了，所以想着就不妨逐字地在笔记里敲一遍，好歹让这些神奇的定理从大脑皮层再度划过。而另一个原因，就是终于可以把这张收藏已久的梗图拿出来镇场了。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/inverse_matrices.jpg" title="Inverse Matrix Theorem" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    盗图来自网络 No Rights Reserved
</div>

显然，打穿这条定理中的所有等价命题需要对线性代数这门学科不断深入的理解。我很喜欢 David Lay 在编写这本教材时将帷幕一点一点揭开的写法，过一两个章节，就适时地在等价命题的列表中添上几个新的条目。开篇从很基本的线性方程组切入，然后在提出并解决新问题的过程中，循序渐进地引入线性代数中的一系列核心概念。每隔一两个章节，读者就会发现自己从一个山头跑到了另一个山头，从一个新的视角来看待同一个问题。通过可逆矩阵定理，那些乍看起来似乎互不相关的数学概念被编织成了一套和谐的圆舞曲：逆矩阵的存在性，线性方程组的解的唯一性，相应的线性变化的双射性，列向量的线性无关性，行列式非零，几个子空间之间的联系，等等，都被紧密地交织在了一起。

下面也不多废话了，给出可逆矩阵定理的完整表述。这是一篇纯纯的抄书笔记，因为我读的是英文原版，也懒得翻译，索性下面就违和地都用英语水了吧。。。

For a given $n \times n$ square matrix $A$, then the following statements are all equivalent:

- $A$ is invertible.
- $A$ is row equivalent to the $n \times n$ identity matrix $I_n$.
- $A$ has $n$ pivot positions.
- The equation $A \mathbf{x} = \mathbf{0}$ has only the trivial solution $\mathbf{x} = \mathbf{0}$.
- For each vector $\mathbf{b} \in \mathbb{R}^n$, the equation $A \mathbf{x} = \mathbf{b}$ has a unique solution.
- The columns of $A$​ form a linearly independent set.
- The columns of $A$ span $\mathbb{R}^n$.
- The linear transformation $\mathbf{x} \mapsto A \mathbf{x}$​​ is one-to-one.
- The linear transformation $\mathbf{x} \mapsto A \mathbf{x}$ maps $\mathbb{R}^n$ onto  $\mathbb{R}^n$.
- There exists an $n\times n$ matrix $C$ such that $CA = I_n$.
- There exists an $n \times n$ matrix $D$ such that $AD = I_n$.
- The transpose matrix $A^T$ is invertible.
- The columns of $A$ form a basis of $\mathbb{R}^n$​.
- The column space of $A$ is equal to $\mathbb{R}^n$, i.e., $\text{Col } A = \mathbb{R}^n$.
- The dimension of the column space of $A$ is $n$, i.e., $\dim \text{Col } A = n$.
- The rank of $A$ is n, i.e., $\text{rank } A = n $.
- The null space of $A$ only contains the zero vector, i.e., $\text{Nul } A = \{ \mathbf{0} \}$.
- The dimension of the null space of $A$ is 0, i.e., $\dim \text{Nul } A = 0$​.
- The determinant of $A$ is non-zero, i.e., $\det A \neq 0$.
- The number $0$ is not an eigenvalue of $A$.
- The orthogonal complement of the column space of $A$ only contains the zero vector, i.e., $(\text{Col } A)^\perp = \{ \mathbf{0} \}$​.
- The orthogonal complement of the null space of $A$ is equal to $\mathbb{R}^n$, i.e., $(\text{Nul } A)^\perp = \mathbb{R}^n$​.
- The row space of $A$ is equal to $\mathbb{R}^n$, i.e., $\text{Row } A = \mathbb{R}^n$​.
- $A$ has $n$ non-zero singular values.

