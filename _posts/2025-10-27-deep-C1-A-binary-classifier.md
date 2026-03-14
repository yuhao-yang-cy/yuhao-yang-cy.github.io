---
layout: post
title: Binary Classifier with Logistic Regression (Deep Learning Notes C1-A)
date: 2025-10-27 13:21:00
description: forward and backward propagation for a simple binary classifier
tags: machine-learning deep-learning classification regression
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Neural Networks and Deep Learning](https://www.coursera.org/learn/neural-networks-deep-learning), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 1 to Week 3.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

---

## forward propagation

logistic regression is used to predict an output/prediction $$\hat{y}$$ from an input $$\mathbf{x}$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_logistic_regression.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

- $$z = \mathbf{w}^T \mathbf{x} + b$$  (weighted sum of the input plus a bias term)
- $$a = g(z)$$    (activation function to introduce non-linearity)
- $$\hat{y} = a$$    (predicted output)

where $$\displaystyle \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_{n_x} \end{bmatrix}, \mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_{n_x} \end{bmatrix}$$ and $$z, b \in \mathbb{R}$$.

## estimation of loss

we want to have $$\hat{y} = y$$ (i.e., prediction by model is the same as the desired output)

- **mean square error** (MSE): $$L(\hat{y}, y) = \frac{1}{2}(\hat{y} - y)^2$$.

- **cross-entropy**: $$L(\hat{y}, y) = -y \log \hat{y} - (1-y) \log(1-\hat{y})$$.
  - if $$y=1$$, then $$L(\hat{y}, y) = -\log \hat{y} \,$$   is minimised if $$\hat{y} \rightarrow 1$$
  - if $$y=0$$, then $$L(\hat{y}, y) = -\log(1-\hat{y}) \,$$   is minimised if $$\hat{y} \rightarrow 0$$

for classification tasks, <u>cross-entropy loss</u> is more preferable:

- strong penalty for highly confident wrong predictions

- measure of difference between probability distributions

- lead to convex loss function (with logistic activation)

  ensure gradient descent does not stuck in local minima

for all $$m$$ samples, we can define **cost function** to be:

$$
J(\mathbf{w}, b) = -\frac{1}{m} \sum_{i=1}^m \left[y^{(i)} \log a^{(i)} + (1-y^{(i)}) \log(1-a^{(i)}) \right]
$$

our objective is to find $$\mathbf{w}^*$$ and $$b^*$$ in parameter space such that $$J(\mathbf{w}, b)$$ is minimised

## vectorisation 

for a dataset with $$m$$ samples, we introduce

$$
\begin{align*}
\text{input: } & X =\begin{bmatrix} \vdots & \vdots & &\vdots \\ x^{(1)} & x^{(2)} & \cdots & x^{(m)} \\ \vdots & \vdots & &\vdots \end{bmatrix}_{n_x \times m}\\
\text{weights: } & W = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_{n_x} \end{bmatrix}_{n_x \times 1}\\
\text{bias: } & b = \begin{bmatrix} b & b & \cdots & b \end{bmatrix}_{1 \times m}
\end{align*}
$$


then we can write:

$$
\begin{align*}
Z &= W^T X + b = \begin{bmatrix} z^{(1)} & z^{(2)} & \cdots & z^{(m)} \end{bmatrix}_{1 \times m} \\
A &= \begin{bmatrix} g(z^{(1)}) & g(z^{(2)}) & \cdots & g(z^{(m)}) \end{bmatrix}_{1 \times m} = \begin{bmatrix} a^{(1)} & a^{(2)} & \cdots & a^{(m)} \end{bmatrix}_{1 \times m} \\
\end{align*}
$$

matrix multiplication $$W^T X$$ can be implemented with `np.dot`

to add bias $$b$$, Python can <u>broadcast</u> a scalar $$b$$ to an array that matches the shape of $$W^T X$$

## activation functions

#### sigmoid

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_sigmoid.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>


- limits: $$\displaystyle \lim_{z\to+\infty} \sigma(z) = +1$$ and $$\displaystyle \lim_{z\to-\infty} \sigma(z) = 0$$
- derivative: $$\displaystyle \sigma'(z) = \frac{e^{-z}}{(1+e^{-z})^2} = \frac{1}{1+e^{-z}} \cdot \frac{e^{-z}}{1+e^{-z}} \;\Rightarrow \;\sigma'(z) = \sigma(z)(1-\sigma(z))$$. 
- limit of derivative: $$\displaystyle \lim_{z\to\pm\infty} \sigma'(z) = 0$$

#### hyperbolic tangent

$$
\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_tanh.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

- limits: $$\displaystyle \lim_{z\to\pm\infty} \tanh(z) = \pm1$$
- derivative: $$\tanh'(z) - 1 - \tanh^2(z)$$
- limit of derivative: $$\displaystyle \lim_{z\to\pm\infty} \tanh'(z) = 0$$

#### ReLU (Rectified Linear Unit)

$$
\text{ReLU}(z) = \text{max}(0,z) = \left\{\begin{array}{ll} z & \text{for } z \geq 0 \\ 0 & \text{for } z < 0 \end{array} \right.
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_ReLU.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>


- derivative: $$\displaystyle \text{ReLU}(z) = \left\{\begin{array}{ll} 1 & \text{for } z \geq 0 \\ 0 & \text{for } z < 0 \end{array} \right.$$

  technically $$\text{ReLU}(z)$$ is not defined at $$z=0$$, but in practice $$p(z=0)\approx0$$

#### leaky ReLU

$$
\text{leaky ReLU} = \text{max}(\beta,z) = \left\{\begin{array}{ll} z & \text{for } z \geq 0 \\ \beta z & \text{for } z < 0 \end{array} \right. \quad \text{where }\beta \ll 1
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C1_leaky_ReLU.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>


#### how to choose activation functions?

an empirical rule for choosing activation functions:

- output layer of binary classifier $$\Rightarrow$$ sigmoid function
- hidden layers in the network $$\Rightarrow$$ $$\text{ReLU}$$, $$\tanh$$



## gradient descent and backward propagation

iteratively update parameters so gradient descent takes $$J(\mathbf{w}, b)$$ closer to its global minimum

$$
\mathbf{w} := \mathbf{w} - \alpha \frac{\partial J}{\partial \mathbf{w}} \qquad b := b - \alpha \frac{\partial J}{\partial b}
$$

the hyperparameter $$\alpha$$ is the **learning rate**


#### backward propagation for cross-entropy

the derivatives $$\displaystyle \frac{\partial J}{\partial \mathbf{w}}$$ and $$\displaystyle \frac{\partial J}{\partial b}$$ are computed using the <u>chain rule</u>

it turns out that these derivatives can be calculated using the <u>cached values</u> obtained during forward propagation

for cross-entropy loss:

$$
\begin{align*}
\frac{\partial J}{\partial a^{(i)}} &= -\frac{1}{m} \frac{\partial}{\partial a^{(i)}} \left[ y^{(i)} \log a^{(i)} + (1-y^{(i)}) \log(1-a^{(i)}) \right] \\
\Rightarrow \frac{\partial J}{\partial a^{(i)}} & = -\frac{1}{m} \left[ \frac{y^{(i)}}{a^{(i)}} - \frac{1-y^{(i)}}{1-a^{(i)}} \right]
\end{align*}
$$

suppose we use sigmoid as the activation function

$$
\begin{align*}
\frac{\partial J}{\partial z^{(i)}} &= \frac{\partial J}{\partial a^{(i)}} \frac{\partial a^{(i)}}{\partial z^{(i)}}\\
&= -\frac{1}{m} \left[ \frac{y^{(i)}}{a^{(i)}} - \frac{1-y^{(i)}}{1-a^{(i)}} \right] \times a^{(i)}(1-a^{(i)}) \\
&= -\frac{1}{m} \left[ y^{(i)}(1-a^{(i)}) - (1-y^{(i)})a^{(i)}\right] \\
\Rightarrow \frac{\partial J}{\partial z^{(i)}} &= \frac{1}{m} \left( a^{(i)} - y^{(i)}\right)
\end{align*}
$$

with $$z^{(i)} = \mathbf{w}^T \mathbf{x}^{(i)} + b$$, we have

$$
\begin{align*}
\frac{\partial J}{\partial b} &= \sum_{i=1}^m \frac{\partial J}{\partial z^{(i)}} \frac{\partial z^{(i)}}{\partial b} = \frac{1}{m} \sum_{i=1}^m \left( a^{(i)} - y^{(i)}\right) \\
\frac{\partial J}{\partial w_k} &= \sum_{i=1}^m \frac{\partial J}{\partial z^{(i)}} \frac{\partial z^{(i)}}{\partial w_k} = \frac{1}{m} \sum_{i=1}^m \left( a^{(i)} - y^{(i)}\right) x_k^{(i)} \\
\end{align*}
$$

by spirit of vectorisation, we can introduce

$$
\begin{align*}
X & = \begin{bmatrix} \vdots & \vdots & &\vdots \\ x^{(1)} & x^{(2)} & \cdots & x^{(m)} \\ \vdots & \vdots & &\vdots \end{bmatrix}_{n_x \times m}\\
Y & = \begin{bmatrix} y^{(1)} & y^{(2)} & \cdots & y^{(m)}\end{bmatrix}_{1 \times m}\\
A & = \begin{bmatrix} a^{(1)} & a^{(2)} & \cdots & a^{(m)} \end{bmatrix}_{1 \times m}
\end{align*}
$$

then we have:

$$
\begin{align*}
db &\equiv \frac{\partial J}{\partial b} = \frac{1}{m} \times (\text{sum of elements of } A-Y) \\
dW &\equiv \begin{bmatrix} \frac{\partial J}{\partial w_1} \\ \frac{\partial J}{\partial w_2} \\ \vdots \\ \frac{\partial J}{\partial w_{n_x}} \end{bmatrix}_{n_x \times 1} = \frac{1}{m} X(A-Y)^T
\end{align*}
$$

these results can be implemented with the pseudo Python codes

$$
\begin{align*}
db &= \frac{1}{m} * \text{np.sum}(A - Y) \\
dW &= \frac{1}{m} * \text{np.dot}(X, (A-Y)\text{.T})).
\end{align*}
$$

## implementation of binary classifier

**initialisation of weights**

```python
W = np.random.randn(n_x, 1)
b = 0
```

- when initialising the weights, one can multiply $$W$$ by a small number (e.g., multiply by 0.01) to keep away from the flat part of the sigmoid activation

- bias $$b$$ is usually initialised to 0

**optimisation** (iteration through `for` loop):

```python
# forward propagation
Z = np.dot(W.T, X) + b
A = sigmoid(Z)

# backward propagation
dZ = 1/m * (A-Y)
dW = np.dot(X, dZ.T)
db = np.sum(dZ)

# gradient descent
w = w - learning_rate * dW
b = b - learning_rate * db

```