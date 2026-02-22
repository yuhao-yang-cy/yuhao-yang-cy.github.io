---
layout: book-review
title: "深度学习入门：基于 Python 的理论与实现"
author: 斋藤康毅
cover: assets/img/book_covers/fish_book_cover.jpg
isbn: 9787115485588 # use ISBN to fetch cover (if no `olid` is provided, dashes are optional)
categories: [textbook, computer, machine-learning]
tags: [computer, machine-learning, python]
date: 2023-06-09
finished: 2023-06-09
released: 2018
stars: 4.8
status: Finished
---

这是一本真心想把我教懂的神经网络入门书！
	
这本书的写法很吸引我的点是：作者把深度学习背后的数学交待得足够深入浅出，并和实操联系得很紧密地把实现方法也展现得非常具体。从很笼统的什么是神经网络开始，每一层的设计动机、数学公式推演和实现代码结合，一点点铺开，最终落脚点也一点也不低。

{% include figure.liquid loading="eager" path="assets/img/books/deep_fish_book.jpg" title="" class="img-natural rounded z-depth-1" %}
	
流水账地罗列下我读下来学到的东西包括：
	
- 几种激活函数（Sigmoid、阶跃、ReLU 等）的定义和实现
	
- 输出 Affine/Softmax 层的实现
	
- 几种损失函数（mean square、cross entropy）的定义和实现
	
- 实现神经网络参数优化的随机梯度下降法（stochastic gradient descent）
	
- 神经网络梯度的反向传播法（backward propagation）计算原理和实现
	
- 加入了可以提取区块特征的卷积层（convolution layer）和池化层（pooling layer）的卷积神经网络（CNN）
	
作者在不依赖 scikit-learn、Caffe、TensorFlow 等成熟的深度学习的前提下，全程靠 Numpy + Matplotlib 手搓，带着读者手把手地搭起了一个卷积神经网络（CNN），在公开的 MNIST 手写图像数据集上，训练出了一个对0~9这十个数字的识别率高达99%+的模型。
	
此外，作者也探讨了很多训练神经网络的技巧，例如除随机梯度下降法之外的其他优化方法、保证中间层传递数据始终具有适当广度的激活函数初始值的最佳分布、避免过拟合而引入的抑制机制（权值衰减的惩罚机制、随机删除神经元进行参数更新的 Dropout 方法）、确定学习率（learning rate）等超参数合适范围的方法，等等，都是很具有启发意义的课题。
	
随书还提供的完整的源代码，跟着跑一跑，训练一个模型玩一玩，甭管脑子是不是学会了，但是至少眼睛可以美滋滋地说：我会了！

{% include figure.liquid loading="eager" path="assets/img/books/deep_fish_book_codes.jpg" title="" class="img-natural rounded z-depth-1" %}