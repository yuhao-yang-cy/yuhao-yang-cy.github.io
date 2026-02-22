---
layout: post
title: "二维 Haar 变换在图像处理中的应用"
date: 2022-05-20 11:35:00
description: 本篇中，我们要解决这样一个问题：如果图像传输过程中出现部分数据丢失，仅利用剩余的部分数据是否能尽可能保证图像的还原度？
tags: engineering signal-processing python
categories: engineering python
---

> 本篇内容来自于 [Coursera 数字信号处理（Digital Signal Processing）公开课](https://www.coursera.org/specializations/digital-signal-processing)的 Lab Project，文中展示的代码深度抄袭自 Lab Project 的示例文档。
>
> 这门公开课算得上是我在 Coursera 平台上体验过的质量最高（没有之一）的一门课，由瑞士洛桑联邦理工学院（EPFL）的 Paolo Prandoni 与 Martin Vetterli 教授共同授课，非常值得推荐给对电子电气工程和计算机科学感兴趣的同学。

本篇中，我们要解决这样一个问题：**如果图像传输过程中出现部分数据丢失，仅利用剩余的部分数据是否能尽可能保证图像的还原度？**

## 开摆

我们这个 Project 实战需要用到 Python 环境。

```python
    import matplotlib
    import matplotlib.pyplot as plt
    import numpy as np
    import IPython
    from IPython.display import Image
    import math
    plt.gray()
```

我们先打开一张图片，比如这只毛绒绒的烤羚羊。

```python
    img = np.array(plt.imread('kao-ling-yang.jpg'), dtype=int)
    plt.matshow(img)
```

{% include figure.liquid loading="eager" path="assets/img/haar_image_orig.png" title="" class="img-natural rounded z-depth-1" %}

这张渣画质黑白照片，由 $$128\times128$$ 个像素点组成，每个像素点储存了对应点的灰度（grey scale）信息，灰度数据的取值一般介于 $$0$$ 和 $$255$$ 之间。

我们完全可以把这张图片的信息想象成由 $$128\times128$$ 个数值元素构成的大矩阵（matrix）。如果能够以某种形式对这个矩阵进行编码、并进行发送，而信号接收方可以按照对应的解码方式还原出这个大数组，这幅图像就可以被还原出来。

数学上，这等价于一个矩阵空间（matrix space）中的矩阵表示问题。我们可以选取一组合适的基（basis），而需要传输的图片对应的数值矩阵总是可以唯一地由这组基的线性组合（linear combination）表示出来，涉及到的组合系数的集合就可以作为表示这个矩阵的编码。有了这些组合系数，接收方也可以计算出原始的数值矩阵，还原出发送过来的图像。

我们接下来就介绍基于两种不同基矩阵的方案。

## 标准正交基

所谓标准正交基（canonical basis），大约就是一堆除了一个元素是 $$1$$、其他所有元素都是 $$0$$ 的矩阵。

以 $$2\times 2$$ 像素的超渣画质图片为例。这个 $$2 \times 2$$ 矩阵空间的标准正交基分别为：

$$
e_1 = \begin{bmatrix}
    1 & 0 \\
    0 & 0
  \end{bmatrix},\;
  e_2 = \begin{bmatrix}
    0 & 0 \\
    1 & 0
  \end{bmatrix},\;
  e_3 = \begin{bmatrix}
    0 & 1 \\
    0 & 0
  \end{bmatrix},\;
  e_4 = \begin{bmatrix}
    0 & 0 \\
    0 & 1
\end{bmatrix}
$$

它们可以图形化地表示为：

{% include figure.liquid loading="eager" path="assets/img/canonical_basis.jpg" title="" class="img-natural rounded z-depth-1" %}

这里我们可以看出，每个基矩阵 $$e_i$$ 仅仅关注一个特定的像素点的信息。

很容易验证，任意 $$2\times 2$$ 矩阵都可以分解成：

$$
A = \begin{bmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22} 
  \end{bmatrix} = a_{11}e_1 + a_{21}e_2 + a_{12} e_3 + a_{22}e_4
$$

不难看出，线性组合的系数集合 $$\{ a_{11}, a_{21}, a_{12}, a_{22}\}$$ 无非就是原来数值矩阵中的元素排排坐。显然通过这个系数集合还原出原始的数值矩阵不费吹灰之力。

上面这套操作推广到 $$128\times128$$ 的矩阵空间也就是分分钟的事情。把编码图片的数据按着顺序一个个发送出去，如果一个不落地接收到了全部数据，那么一个萝卜一个坑地把它们摆好位置，也就重构出原始的矩阵，小菜一碟！

但如果我们丢失了后半部分的数据呢？

```python
    tx_img = np.ravel(img, "F")
    tx_img[int(len(tx_img)/2):] = 0
    rx_img = np.reshape(tx_img, (128, 128), "F")
    plt.matshow(rx_img)
```

糟糕！图片右半边烤羚羊的头没有了！

{% include figure.liquid loading="eager" path="assets/img/haar_image_left.png" title="" class="img-natural rounded z-depth-1" %}

那有没有方法可以在同等数据丢失的情况下表现得更好一点呢？

这就轮到我们接下来要介绍的 Haar 分解算法登场了。

## 一维 Haar 分解

引入二维矩阵空间的 Haar 基来处理二维图片之前，我们一步一步来，先试着拿些一维的向量玩弄一下。

假定有一个 $$4$$ 个元素构成的向量（暂时横过来写图方便），比如

$$[9,7,2,6]$$

可以计算出前两个元素的平均值和它俩与平均值的偏差，然后对后两个元素做一样的操作：

$$
\left[ \frac{9+7}{2}, \frac{2+6}{2} \right] = [\color{blue}{8}, \color{blue}{4}] \qquad \left[ \frac{9-7}{2}, \frac{2-6}{2} \right] = [\color{red}{1}, \color{red}{-2}]
$$

我们这样就对原来的向量做了一次 Haar 分解。

对新算出的平均值进行类似的操作，就可以继续 Haar 分解：

$$
\frac{\color{blue}{8}+\color{blue}{4}}{2} = \color{red}{6} \qquad \frac{\color{blue}{8} - \color{blue}{4}}{2} = \color{red}{2}
$$

至此，整个向量的 Haar 分解可以小结如下：

$$
\begin{array}{ccc}
\text{精度} & \text{平均值} & \text{差值} \\
4  & [9, 7, 2, 6]  & \\
2  & [8,4]  & [\color{red}{1},\color{red}{-2}] \\
1 & [\color{red}{6}]  &  [\color{red}{2}] \\
\end{array}
$$

把标红的 $$4$$ 个数字搜罗起来，就是 Haar 变换后可以同样表示原始向量的一组系数：

$$
[9,7,2,6] \xrightarrow{\text{Haar}} [6,2, 1, -2]
$$

逆变换也并不麻烦：

$$
[\color{red}{6} + \color{red}{2},\color{red}{6} - \color{red}{2}] = [\color{blue}{8}, \color{blue}{4}]
$$

$$
[\color{blue}{8} + \color{red}{1} , \color{blue}{8} - \color{red}{1}, \color{blue}{4} + (\color{red}{-2}), \color{blue}{4} - (\color{red}{-2})] = [9,7,2,6] \qquad
$$

如果换成任意的 $$4$$ 个数 $$[x,y,z,w]$$，进行 Haar 变换的结果是：

$$
\begin{array}{ccc}
\text{精度} & \text{平均值} & \text{差值} \\
4  &  [x,y,z,w]  & \\
2  &  \left[ \frac{x+y}{2}, \frac{z+w}{2}\right]  &  \left[ \frac{x-y}{2}, \frac{z-w}{2}\right] \\
1  &  \left[ \frac{x+y+z+w}{4}\right]  &  \left[ \frac{x+y-z-w}{4}\right]
\end{array}
$$

得到

$$
[x,y,z,w] \xrightarrow{\text{Haar}} [c_1,c_2,c_3,c_4]
$$

其中

$$
\begin{aligned}
c_1 &= \frac{x+y+z+w}{4} \\
c_2 &= \frac{x+y-z-w}{4} \\
c_3 &= \frac{x-y}{2} \\
c_4 &= \frac{z-w}{2}
\end{aligned}
$$

注意 $$\{ c_1, c_2, c_3, c_4 \}$$ 这 $$4$$ 个数的集合本质上包含了关于原始向量 $$[x,y,z,w]$$ 的全部信息。

让我们把事情搞得再明白一点。不难验证有逆变换：

$$
\begin{aligned}
x &= c_1+c_2+c_3 \\
y &= c_1+c_2-c_3 \\
z &= c_1-c_2+c_4 \\
w &= c_1-c_2-c_4
\end{aligned}
$$

或者可以写成（现在把向量竖过来写了）：

$$
\begin{bmatrix}
    x \\ y \\ z \\ w 
  \end{bmatrix} = 
  c_1 \begin{bmatrix}
    1 \\ 1 \\ 1 \\ 1 
  \end{bmatrix} + 
  c_2 \begin{bmatrix}
    1 \\ 1 \\ -1 \\ -1 
  \end{bmatrix} +
  c_3 \begin{bmatrix}
    1 \\ -1 \\ 0 \\ 0 
  \end{bmatrix} + 
  c_4 \begin{bmatrix}
    0 \\ 0 \\ 1 \\ -1 
  \end{bmatrix}
$$

由此引入 $$4$$ 个 Haar 基向量：

$$
h_1 = \begin{bmatrix}
    1 \\ 1 \\ 1 \\ 1 
  \end{bmatrix}, \;
h_2 = \begin{bmatrix}
    1 \\ 1 \\ -1 \\ -1 
  \end{bmatrix}, \;
h_3 = \begin{bmatrix}
    1 \\ -1 \\ 0 \\ 0 
  \end{bmatrix}, \;
h_4 = \begin{bmatrix}
    0 \\ 0 \\ 1 \\ -1 
\end{bmatrix}
$$

注意到这组基向量符合正交（orthogonal）关系，即对于 $$i\neq j$$，有 $$h_i^Th_j = 0$$。有了这组 Haar 基，由 $$4$$ 个元素组成的任意向量总是可以被分解成：

$$
\begin{bmatrix}
    x \\ y \\ z \\ w 
\end{bmatrix} = c_1 h_1 + c_2 h_2 + c_3 h_3 + c_4 h_4
$$

各分量前的系数 $$c_i$$ 可以由前面列出的关系给出。可以看到，第一个分量给出的是全部元素的和，一个典型的全局的性质。第二个分量给出的是比较粗糙的局部修正，即前半部分和后半部分数据的差值。而后两个分量给出的是更细化的局部的性质，分别是前两个元素的差值，和后两个元素的差值。这种首先提取全局信息，再通过差值的波动去完善局部上的细节的做法，正是 Haar 变换的核心思想。

作归一化（normalization）处理后，还可以进一步得到归一化的 Haar 基向量：

$$
\hat{h}_1 = \begin{bmatrix}
    \frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2} 
  \end{bmatrix}, \;
\hat{h}_2 = \begin{bmatrix}
    \frac{1}{2} \\ \frac{1}{2} \\ -\frac{1}{2} \\ -\frac{1}{2} 
  \end{bmatrix}, \;
\hat{h}_3 = \begin{bmatrix}
    \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \\ 0 \\ 0
  \end{bmatrix}, \;
\hat{h}_4 = \begin{bmatrix}
    0 \\ 0 \\\frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}}
  \end{bmatrix}
$$

可以验证，这套 Haar 基符合正交归一性，即

$$ \hat{h}_m^T \cdot \hat{h}_n = \delta_{mn} $$

以上便是针对包含 $$4$$ 个元素的向量的一维 Haar 分解。

这套程序可以推广到包含 $$2^k$$ 个元素的向量的情况，Haar 基向量也相应增加到 $$2^k$$ 个。未做归一化的 Haar 基向量由一系列的 $$0$$、$$1$$ 和 $$-1$$ 构成。这里仅给出结果：第 $$1$$ 个 Haar 基向量就是齐刷刷的一排 $$1$$，后面第 $$2^p + q$$ 个 Haar 基向量的第 $$i$$ 个元素为：

$$
h_{2^p+q}[i] = \left\{\begin{array}{ll}
0 & 1 \leq i \leq (q-1)2^{k-p} \\
1 & (q-1) 2^{k-p} + 1 \leq i \leq (q-1) 2^{k-p} + 2^{k-p-1} \\
-1 & (q-1) 2^{k-p} + 2^{k-p-1} + 1 \leq i \leq q 2^{k-p} \\
0 & q 2^{k-p} + 1 \leq i \leq 2^k
\end{array} \right.\\
\text{with } 0\leq p\leq k-1 \text{ and } 1\leq q \leq 2^p \phantom{\Bigg|}
$$

当然我们也可以对它们进行归一化操作，得到 $$2^k$$ 个 $$\hat{h}_i$$ Haar 基向量。这堆一维 Haar 基向量将会是我们后面要介绍的二维 Haar 分解算法的基础。

完整的一维 Haar 基向量的计算代码如下：

```python
def haar1D(n, SIZE=4):
    # check power of two
    if math.floor(math.log(SIZE) / math.log(2)) != math.log(SIZE) / math.log(2):
        print("Haar defined only for lengths that are a power of two")
        return None

    if n >= SIZE or n < 0:
        print("invalid Haar index")
        return None
  
    # zero basis vector
    if n == 0:
        h = np.ones(SIZE)
        h = h / np.linalg.norm(h)
        return h
 
    # express n > 1 as 2^p + q with p as large as possible
    # t = 2^(k-p) is the length of the support
    # s = qt is the shift
    p = math.floor(math.log(n) / math.log(2))
    pp = int(pow(2, p))
    t = SIZE / pp
    s = (n - pp) * t
 
    h = np.zeros(SIZE)
    h[int(s):int(s+t/2)] = 1
    h[int(s+t/2):int(s+t)] = -1  
    h = h / np.linalg.norm(h)
    return h
```

## 二维 Haar 分解

简单来说，二维的 Haar 分解可以看作是分别对每一行和每一列进行一维的 Haar 分解。

定义二维的 Haar 基矩阵：

$$ H_{mn} = \hat{h}_m \hat{h}_n^T$$

其中 $$\hat{h}_m$$ 和 $$\hat{h}_n$$ 是一维的 Haar 基向量。

让我们先试着将任意一个 $$2^k\times2^k$$ 的矩阵 $$A$$ 作 Haar 分解。此时的 $$m$$ 和 $$n$$ 可以在 $$1$$ 到 $$2^k$$ 之间取值，总共能得到 $$2^k\times2^k$$ 个 Haar 基矩阵，数量自然跟原矩阵的元素个数相当。

为讨论方便，将这 $$2^k\times2^k$$ 个 Haar 矩阵记作 $$H_i$$，其中 $$i=1,2,\cdots,2^k\times2^k$$。

二维 Haar 基矩阵的代码实现很容易：

```python
def haar2D(n, SIZE=4):
    # get horizontal and vertical indices
    hr = haar1D(n % SIZE, SIZE)
    hv = haar1D(int(n / SIZE), SIZE)
    H = np.outer(hr, hv)
    return H
```

即便对于我们要处理的 $$128\times128$$ 像素的那张渣画质图片，要把这里的矩阵全部写出来也太可怕了。让我们来看一下这 $$4\times4$$ 的矩阵空间里，对应的 $$16$$ 个 Haar 矩阵长什么样。直接码矩阵依然很可怕，我们这里只是把图形化的表示贴出来：

{% include figure.liquid loading="eager" path="assets/img/haar_basis.jpg" title="" class="img-natural rounded z-depth-1" %}

白色色块代表对应位置的矩阵元素为正，黑色为负，灰色为零。

不难看出，打头阵的 Haar 基矩阵，编码的将是全局平均灰度相关的信息。而越往后的 Haar 基矩阵，会越来越精细地给出局部细节上的修正。

好了，有了这堆 Haar 矩阵作为基，任意 $$2^k\times2^k$$ 的矩阵 $$A$$ 可以有如下形式的 Haar 分解：

$$ A = \sum_i c_i H_i$$

其中 $$c_i$$ 即为分解后得到的系数。

要求出这些个系数，我们需要用到这堆 Haar 矩阵具有的如下的类似正交归一的性质（证明太长懒得敲了）：

$$ \text{sum}(H_i H_j) = \delta_{ij}$$

这里的 sum 函数指的是所有矩阵元的求和。

在矩阵 $$A$$ 的 Haar 分解公式两边同乘以 $$H_j$$，并同时对所有矩阵元求和，可以写出：

$$
\begin{aligned}
\text{sum}(A H_j) &= \text{sum}\left(\sum_i c_i H_i H_j \right) \\
&= \sum_i c_i \times \text{sum} (H_i H_j) \\
&= \sum_i c_i \delta_{ij} \\
&= c_j
\end{aligned}
$$

即第 $$j$$ 个分解系数为：

$$c_j = \text{sum}(A H_j)$$

好了，万事具备，只欠东风，准备上图干吧！

## 基于 Haar 分解的图像编码

先试试水，看看 Haar 分解管不管事。

```python
tx_img = np.zeros(128*128)
for k in range(128*128):
    tx_img[k] = np.sum(img * haar2D(k, 128))

rx_img = np.zeros((128, 128))

for k in range(128*128):
    rx_img += tx_img[k] * haar2D(k, 128)

plt.matshow(rx_img)
```

{% include figure.liquid loading="eager" path="assets/img/haar_image_100.png" title="" class="img-natural rounded z-depth-1" %}

嗯，单纯通过这堆 Haar 分解得到的系数，完美无损地还原出了原始的照片。

我们再来看看现在这套操作遇上后面一半的数据丢失的情况，还原效果如何？

```python
lossy_img = np.copy(tx_img)
lossy_img[int(len(tx_img)/2):] = 0
rx_img = np.zeros((128, 128))

for k in range(0, (128*128)):
    rx_img += lossy_img[k] * haar2D(k, 128)

plt.matshow(rx_img)
```

{% include figure.liquid loading="eager" path="assets/img/haar_image_50.png" title="" class="img-natural rounded z-depth-1" %}

是不是很神奇！我们丢失了一半的数据，但是还原出来的图像质量，还相当凑合！

回想 Haar 分解的核心要义，整幅图片相对更为重要的全局信息都体现在最开始的那些分解系数里了，越往后的系数其实是越精细的小修小补，因此只有前面的系数，我们依然可以得到一个比较粗线条的原始拷贝。

甚至只保留前面 20% 的数据，依然还能辨识出图片里大概是个什么奇怪的东西。

```python
lossy_img = np.copy(tx_img)
lossy_img[int(len(tx_img)/5):] = 0

rx_img = np.zeros((128, 128))

for k in range(0, (128*128)):
    rx_img += lossy_img[k] * haar2D(k, 128)

plt.matshow(rx_img)
```

{% include figure.liquid loading="eager" path="assets/img/haar_image_20.png" title="" class="img-natural rounded z-depth-1" %}

Haar 算法的精妙之处正在于此：把最重要的信息先传输出去，把框架先搭好，后面再去逐渐完善细节、提高精度。在传输通道比较拉垮的时候，Haar 算法处理后的图像传输就会有很明显的优势了。

**所以你瞧，搞基是多么重要！**