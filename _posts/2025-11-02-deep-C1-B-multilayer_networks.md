---
layout: post
title: Multi-layer Neural Networks (Deep Learning Notes C1W4)
date: 2025-11-02 10:28:00
description: forward and backward propagation for a multi-layer neural network
tags: machine-learning deep-learning classification regression
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Neural Networks and Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 4.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

---

## deep $$L$$-layer neural network

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_multilayer_network.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>


#### notations

- $$n^{[l]}$$: number of neurons in layer $$l$$
- $$a^{[l]} = g^{[l]}(z^{[l]})$$: activations in layer $$l$$
- $$W^{[l]}, b^{[l]}$$: weights and biases for $$z^{[l]}$$
- $$l=0$$: $$a^{[0]} = X$$ (input).
- $$l=L$$: $$a^{[L]} = \hat{y}$$ (predicted output).


## forward propagation

at each layer $$l$$ ($$l=1,2,\cdots,L$$), we want to compute an output $$a^{[l]}$$ from an input $$a^{[l-1]}$$:

$$
\begin{align*}
z^{[l]} & = W^{[l]} a^{[l-1]} + b^{[l]} \\
a^{[l]} & = g^{[l]}(z^{[l]})
\end{align*}
$$

more explicitly, this is:

$$
\begin{align*}
\begin{bmatrix} z_1^{[l]} \\ z_2^{[l]} \\ \vdots \\ z_{n^{[l]}}^{[l]} \end{bmatrix}
& = \begin{bmatrix} \cdots & w_1^{[l]} & \cdots \\
	\cdots & w_2^{[l]} & \cdots \\ & \vdots & \\
    \cdots & w_{n^{[l]}}^{[l]}  & \cdots\end{bmatrix}
    \begin{bmatrix} a_1^{[l-1]} \\ a_2^{[l-1]} \\ \vdots \\ a_{n^{[l-1]}}^{[l-1]} \end{bmatrix}
    + \begin{bmatrix} b_1^{[l]} \\ b_2^{[l]} \\ \vdots \\ b_{n^{[l]}}^{[l]} \end{bmatrix} \\
\begin{bmatrix} a_1^{[l]} \\ a_2^{[l]} \\ \vdots \\ a_{n^{[l]}}^{[l]} \end{bmatrix}
& = \begin{bmatrix} g^{[l]}(z_1^{[l]}) \\ g^{[l]}(z_2^{[l]}) \\ \vdots \\ g^{[l]}(z_{n^{[l]}}^{[l]})\end{bmatrix}
\end{align*}
$$

where the dimensions of the vectors and matrices are:

- $$z^{[l]}$$, $$a^{[l]}$$: $$(n^{[l]} \times 1)$$
- weight matrix $$W^{[l]}$$: $$(n^{[l]} \times n^{[l-1]})$$
- bias $$b^{[l]}$$: $$(n^{[l]} \times 1)$$
- $$a^{[l-1]}$$: $$(n^{[l-1]} \times 1)$$



## backward propagation

at layer $$l$$ ($$l=L, L-1, \cdots, 2, 1$$), we want to compute the derivatives $$da^{[l-1]}, dW^{[l]}, db^{[l]}$$ from the derivative values of  $$da^{[l]}$$

#### derivative for neurons

for $$j^\text{th}$$ neuron in layer $$l$$:

$$
\begin{align*}
\frac{\partial J}{\partial z_j^{[l]}} &= \frac{\partial J}{\partial a_j^{[l]}} \frac{\partial a_j^{[l]}}{\partial z_j^{[l]}} = \frac{\partial J}{\partial a_j^{[l]}} \frac{\partial g^{[l]}(z_j^{[l]})}{\partial z_j^{[l]}} = \frac{\partial J}{\partial a_j^{[l]}} g^{[l]'}(z_j^{[l]}) \\
\Rightarrow \frac{\partial J}{\partial z^{[l]}} &= \frac{\partial J}{\partial a^{[l]}} g^{[l]'} (z^{[l]})
\end{align*}
$$

this can be written as $$dz^{[l]} = da^{[l]} * g^{[l]'}(z^{[l]})$$ where

- $$dz^{[l]}, da^{[l]}, g^{[l]'}(z^{[l]})$$ are all of the shape $$(n^{[l]} \times 1)$$ 
- "$$*$$" means element-wise multiplication


#### derivative for weights

for $$k^\text{th}$$ element of the weights ($$k=1,2,\cdots, n^{[l-1]}$$) for  $$j^\text{th}$$ neuron ($$j=1,2,\cdots, n^{[l]}$$) in layer $$l$$:

$$
\begin{align*}
\frac{\partial J}{\partial w_{jk}^{[l]}} &= \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial z_j^{[l]}}{\partial w_{jk}^{[l]}} = \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial}{\partial w_{jk}^{[l]}}\left( \sum_{k=1}^{n^{[l-1]}} w_{jk}^{[l]} a_{k}^{[l-1]} + b_{j}^{[l]}\right) = \frac{\partial J}{\partial z_j^{[l]}} a_{k}^{[l-1]} \\
\Rightarrow \frac{\partial J}{\partial W^{[l]}} &= \frac{\partial J}{\partial z^{[l]}} {a^{[l-1]}}^T
\end{align*}
$$

this can be written as $$dW^{[l]} = dz^{[l]} {a^{[l-1]}}^T$$ where

- $$dW^{[l]}$$ has dimensions $$(n^{[l]} \times n^{[l-1]})$$ 
- $$dz^{[l]}$$ has dimensions $$(n^{[l]} \times 1)$$ 
- $${a^{[l-1]}}^T$$ has dimensions $$(n^{[l-1]} \times 1)^T$$ 


#### derivative for biases

for $$j^\text{th}$$ neuron in layer $$l$$:

$$
\begin{align*}
\frac{\partial J}{\partial b_{j}^{[l]}} &= \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial z_j^{[l]}}{\partial b_{j}^{[l]}} = \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial}{\partial b_{j}^{[l]}}\left( \sum_{k=1}^{n^{[l-1]}} w_{jk}^{[l]} a_{k}^{[l-1]} + b_{j}^{[l]}\right) = \frac{\partial J}{\partial z_j^{[l]}} \\
\Rightarrow \frac{\partial J}{\partial b^{[l]}} &= \frac{\partial J}{\partial z^{[l]}}
\end{align*}
$$

this can be written as $$db^{[l]} = dz^{[l]}$$ where

- both $$db^{[l]}$$ and $$dz^{[l]}$$ are all of the shape $$(n^{[l]} \times 1)$$ 

#### derivative for activations in the previous layer

for $$k^\text{th}$$ neuron in layer $$l-1$$:

$$
\begin{align*}
\frac{\partial J}{\partial a_{k}^{[l-1]}} &= \sum_{j=1}^{n^{[l]}} \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial z_j^{[l]}}{\partial a_{k}^{[l-1]}} \\
&= \sum_{j=1}^{n^{[l]}} \frac{\partial J}{\partial z_j^{[l]}} \frac{\partial}{\partial a_{k}^{[l-1]}}\left( \sum_{k'=1}^{n^{[l-1]}} w_{jk'}^{[l]} a_{k'}^{[l-1]} + b_{j}^{[l]}\right) \\
& = \frac{\partial J}{\partial z_j^{[l]}} w_{jk}^{[l]} \\
\Rightarrow \frac{\partial J}{\partial a^{[l-1]}} &= {W^{[l]}}^T \frac{\partial J}{\partial z^{[l]}} 
\end{align*}
$$

this can be written as $$da^{[l-1]} = {W^{[l]}}^T dz^{[l]}$$

#### backward propagation functions wrap-up

for each layer $$l=L, L-1, \cdots, 2, 1$$:

$$
\begin{align*}
dz^{[l]} &= da^{[l]} * g^{[l]'}(z^{[l]}) \\
dW^{[l]} &= dz^{[l]} {a^{[l-1]}}^T \\
db^{[l]} &= dz^{[l]} \\
da^{[l-1]} &= {W^{[l]}}^T dz^{[l]}
\end{align*}
$$


## vectorisation with $$m$$ training examples

with vectorisation, we can work with the entire dataset as a whole

we can introduce

$$
\begin{align*}
A^{[l]} & = \begin{bmatrix} \vdots & \vdots & & \vdots \\
	a^{[l](1)} & a^{[l](2)} & \cdots & a^{[l](m)} \\
    \vdots & \vdots & & \vdots \end{bmatrix}_{n^{[l]} \times m} \\
W^{[l]} &= \begin{bmatrix} \cdots & w_1^{[l]} & \cdots \\
	\cdots & w_2^{[l]} & \cdots \\ & \vdots & \\
    \cdots & w_{n^{[l]}}^{[l]}  & \cdots\end{bmatrix}_{n^{[l]} \times n^{[l-1]}} \\
b^{[l]} &= \begin{bmatrix} b_1^{[l]} \\ b_2^{[l]} \\ \vdots \\ b_{n^{[l]}}^{[l]} \end{bmatrix}_{n^{[l]} \times 1}
\end{align*}
$$

where

- $$A^{[0]} = X = \begin{bmatrix} x^{(1)} & x^{(2)} & \cdots & x^{(m)} \end{bmatrix}$$ is the input data
- $$A^{[L]} = \hat{Y} = \begin{bmatrix} \hat{y}^{(1)} & \hat{y}^{(2)} & \cdots & \hat{y}^{(m)}\end{bmatrix}$$ is the predicted output
- $$Y = \begin{bmatrix} y^{(1)} & y^{(2)} & \cdots & y^{(m)}\end{bmatrix}$$ is the desired output

then for forward propagation at layer $$l$$:

$$
\begin{align*}
Z^{[l]} &= W^{[l]} A^{[l-1]} + b^{[l]} \\
A^{[l]} &= g^{[l]} (Z^{[l]})
\end{align*}
$$

for backward propagation at layer $$l$$:

$$
\begin{align*}
dZ^{[l]} &= dA^{[l]} * g^{[l]'}(Z^{[l]}) \\
dW^{[l]} &= dZ^{[l]} A^{[l-1]T} \\
db^{[l]} &= \sum_{i=1}^m dZ^{[l](i)} \\
dA^{[l-1]} &= {W^{[l]}}^T dZ^{[l]}
\end{align*}
$$



## typical architecture of a deep neural network

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_multilayer_architecture.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

in this course, we use:

- ReLU/tanh as activation functions for hidden layers
- sigmoid as activation function for the output layer
- cross-entropy loss as the cost function

in this case, for the output layer, we have:

$$
\begin{align*}
dZ^{[L]} &= dA^{[L]} * g^{[L]'}(Z^{[L]}) \\
&= -\frac{1}{m} \frac{\partial}{\partial A^{[L]}} \sum_{i=1}^m \left[ Y^{(i)} \log A^{(i)} + (1-Y^{(i)}) \log(1-A^{(i)})\right] * \sigma'(Z^{[l]}) \\
&= -\frac{1}{m} \left[ \frac{Y}{A^{[L]}} - \frac{1-Y}{1-A^{[L]}}\right] * A^{[L]} * (1-A^{[L]}) \\
\Rightarrow dZ^{[L]} &= \frac{1}{m} \left( A^{[L]} - Y \right)
\end{align*}
$$

this gives the starting point for backward propagation for the entire network