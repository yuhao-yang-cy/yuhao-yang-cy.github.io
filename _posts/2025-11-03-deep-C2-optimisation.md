---
layout: post
title: Improving Deep Neural Networks (Deep Learning Notes C2 Full)
date: 2025-11-03 19:42:00
description: hyper-parameter tuning, regularization and optimization algorithms
tags: machine-learning deep-learning optimisation regularisation
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Hyper-parameter Tuning, Regularization and Optimization](https://www.coursera.org/learn/deep-neural-network), which is the second course of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of contents from the four-week course.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

---

Building upon the foundation of the first course, the second course covers a wide range of optimization techniques, including—but not limited to:

- **Regularisation methods** for mitigating over-fitting issues
- Optimisation algorithms like **momentum**, **RMSProp** and **Adam** that are designed to accelerate the convergence of gradient descent
- **Input normalisation schemes** that facilitate faster convergence
- Weight **initialisation schemes** tailored to different activation functions
- Generalisation from binary classifiers to **multi-class classifiers**

The study notes I have compiled continue to focus primarily on the theoretical component of the course, as well as various mathematical derivations I have added myself.

The second module of the course once again reinforced my impression that the naming of concepts in the field of deep learning is truly an art form: the Momentum optimization algorithm, designed to mitigate the impact of noise, is fundamentally indistinguishable from the Moving Average Filtering technique — a common technique in digital signal processing. Similarly, the structure of the Softmax activation function bears a striking resemblance to the Boltzmann distribution in statistical mechanics. Indeed, once upgraded with a temperature coefficient, it becomes absolutely identical. As for the operations introduced in this module — specifically those found in Normalization, Initialization, and RMSProp — they amount to nothing more than standard mean-variance normalization procedures borrowed from statistics. That being said, the sheer ingenuity involved in conceiving the application of these techniques to resolve the difficulties inherent in the gradient descent optimization process is, without a doubt, truly brilliant and worthy of the highest acclaim.

---

## bias-variance trade-off

intuition of the notion of bias and variance:

- low training error / low test error $$\Rightarrow$$ low bias / low variance

  the model gives a good representation of distribution for training data

  it also generalises well (not sensitive to fluctuations in training data)

- low training error / high test error $$\Rightarrow$$ low bias / high variance

  the training data might be overfit, the model does not generalise well

- high training error / similar test error $$\Rightarrow$$ high bias / low variance

  the model might not have sufficient complexity to capture the data distribution

#### derivation of the bias–variance decomposition

suppose each input $$x$$ is mapped into an output $$y$$ as

$$
y = f(x) + \epsilon
$$

where

- $$f$$ is a deterministic function that we want to model
- $$\epsilon$$ is the error in data with $$E(\epsilon) = 0$$ and $$\text{Var}(\epsilon) = \sigma^2$$

the model makes a prediction

$$
\hat{y} = \hat{f}(x)
$$

for output $$y$$, we have:

$$
\begin{align*}
E(y) &= E(f+\epsilon) = E(f) + \cancelto{0}{E(\epsilon)} = f \\
\text{Var}(y) &= E \left( [y-E(y)]^2\right) = E\left( [(f+\epsilon) - f ]^2 \right) = E(\epsilon^2) = \sigma^2
\end{align*}
$$

for model error, we have

$$
\begin{align*}
E\left( (y-\hat{y})^2\right) &= E\left( y^2 + \hat{f}^2 - 2y\hat{f} \right) \\
&= E(y^2) + E(\hat{f}^2) - 2E(y\hat{f}) \\
&= \text{Var}(y) + E(y)^2 + \text{Var}(\hat{f}) + E(\hat{f})^2 - 2f\cdot E(\hat{f}) \\
&= \text{Var}(y) + \text{Var}(\hat{f}) + \left[ f^2 - 2f\cdot E(\hat{f}) + E(\hat{f})^2 \right] \\
&= \text{Var}(y) + \text{Var}(\hat{f}) + \left( f - E(\hat{f})\right)^2 \\
\Rightarrow E\left( (y-\hat{y})^2\right) &= \sigma^2 + \text{Var}(\hat{f}) + \text{Bias}(\hat{f})^2
\end{align*}
$$

so we can see that the expected squared difference between the output and the prediction $$\hat{f}$$ consists of three parts:

- $$\sigma^2$$ being a measure of the uncertainty in the outputs, this is the inherent noise in the data which cannot be eliminated by any modelling technique regardless of how well the model is trained
- $$\text{Var}(\hat{f})$$ represents the uncertainty in the mapping function, this measures how much the prediction $$\hat{f}(x)$$ varies across different training datasets
- $$\text{Bias}(\hat{f})^2$$ being the error arising from erroneous assumptions in the learning algorithm, which may cause the average prediction over different training sets to deviated from the true value

#### recipe for machine learning

- if there is high bias
  - try larger networks with more layers and more neurons
  - try a different model that is more suitable for the data
  - try different or advanced optimisation algorithms
- if there is high variance
  - try with more training data
  - try regularisation methods
  - try a different model that is more suitable for the data



## regularisation

> idea: penalise large weights to make the neural network less likely to overfit

#### $$L_2$$-regularisation

cost function with $$L_2$$-regularisation becomes:

$$
J(W, b) = \frac{1}{m} \sum_{i=1}^m \mathcal{L}(\hat{y}^{(i)}, y^{(i)}) + \frac{\lambda}{2m} \sum_{l=1}^L \lVert  W^{[l]}\rVert_2^2
$$

where

- $$\lambda$$ is the regularisation hyperparameter
- $$\displaystyle \lVert  W^{[l]}\rVert_2^2 = \sum_{i=1}^{n^{[l]}} \sum_{j=1}^{n^{[l-1]}} \left( w_{ij}^{[l]} \right)^2$$ is the sum of squares for all weights

this introduces an extra term for $$\displaystyle \frac{\partial J}{\partial W^{[l]}}$$:

$$
\begin{align*}
\frac{\partial J}{\partial w_{ij}^{[l]}} &= (\cdots) + \frac{\lambda}{2m} \frac{\partial}{\partial w_{ij}^{[l]}} \left( w_{ij}^{[l]} \right)^2 = (\cdots) + \frac{\lambda}{2m} w_{ij}^{[l]} \\
\Rightarrow \frac{\partial J}{\partial W^{[l]}} &= (\cdots) + \frac{\lambda}{m} W^{[l]} \quad \text{or} \quad dW^{[l]} = (\cdots) + \frac{\lambda}{m} W^{[l]}
\end{align*}
$$

note that during gradient descent, the update rule for the weights becomes

$$
W^{[l]} := W^{[l]} - \alpha \cdot dW^{[l]} = \left(1 - \frac{\alpha \lambda}{m} \right) W^{[l]} - \alpha (\cdots)
$$

the first term shows a *weight decay* for each iteration step, forcing the model to keep the weights small

#### $$L_1$$-regularisation

cost function with $$L_1$$-regularisation becomes:

$$
J(W, b) = \frac{1}{m} \sum_{i=1}^m \mathcal{L}(\hat{y}^{(i)}, y^{(i)}) + \frac{\lambda}{2m} \sum_{l=1}^L \lVert  W^{[l]}\rVert_1
$$

where

- $$\lambda$$ is the regularisation hyperparameter
- $$\displaystyle \lVert  W^{[l]}\rVert_1 = \sum_{i=1}^{n^{[l]}} \sum_{j=1}^{n^{[l-1]}} \lvert w_{ij}^{[l]} \rvert$$ is the sum of absolute values for all weights

in practice, $$L_1$$-regularisation could set many weights to *zero*, which makes the neural network simpler so less prone to over-fitting problems

#### other regularisation methods

- **dropout regularisation**

  for each training example, some neurons or weights are randomly eliminated based on a probability, leading to a smaller network

  the intuition is that the network should not rely on any one feature as it may go away at random, so the network should spread out weights

  this tends to produce a similar effect to shrinking $$\lVert W \rVert_2^2$$

- **data augmentation**

  this is a widely used method in computer vision where input size is big but there are almost never enough training samples

  the idea is to augment the training set by flipping / shifting / cropping / rotating images

- **early stopping**

  at some iteration step, development set error would stop decreasing and but start to increase, signalling over-fitting

  so we can stop training and retrieve weights from the epoch when the performance on the development set was the best



## initialisation

#### normalising inputs

two-step procedure for input normalisation:

- subtract the mean: $$\displaystyle  X := X - \mu = X - \frac{1}{m} \sum_{i=1}^m X^{(i)}$$
- normalise the variance: $$\displaystyle X := \frac{X}{\sigma} = \frac{X}{\frac{1}{m} \left(\sum_{i=1}^m {X^{(i)}}^2 \right)^\frac{1}{2}}$$

raw input data is converted into more consistent scales

shape of the cost function in parameter space becomes more symmetrical

this often allows the model to converge to an optimal solution faster

#### weight initialisation

> idea: poor initialisation can lead to vanishing or exploding gradients, which slows down the optimisation process

better initialisations that are often used include

- for $$\tanh$$
  - **Xavier initialisation**: $$W^{[l]} \sim N(0, 1) \times \sqrt{\frac{1}{n^{[l-1]}}}$$
  - Bengio (et al.) initialisation: $$W^{[l]} \sim N(0, 1) \times \sqrt{\frac{2}{n^{[l-1]} + n^{[l]}}}$$

- for $$\text{ReLU}$$
  - **He initialisation**: $$W \sim N(0, 1) \times \sqrt{\frac{2}{n^{[l-1]}}}$$

where $$N(0,1)$$ is the Gaussian distribution with zero mean and unit variance

in Python, this can be implemented by

$$
W^{[l]} = \text{np.random.randn}(n^{[l]}, n^{[l-1]}) * \text{np.sqrt} (\cdots)
$$



## optimisation algorithms

#### mini-batch gradient descent

> idea: update parameters with mini batches (portions of training set) for faster convergence

**mini-batch sizes**

- if size of mini-batch $$=m$$ $$\;\Rightarrow\;$$ regular gradient descent

- if size of mini-batch $$=1$$ $$\;\Rightarrow\;$$ *stochastic gradient descent* (SGD)

- if size of mini-batch $$=m_b$$ where $$1 < m_b < m$$

  updates would be less noisy than SGD but can also take advantage of vectorisation

- typical mini-batch sizes include 32, 64, 128, or 256 to better fit in CPU or GPU memory

**applying mini-batch gradient descent**

implementation involves

- create a randomly shuffled version of the training set $$(X, Y)$$

- partition the shuffled $$(X,Y)$$ it into mini-batches $$(X^{\{1\}}, Y^{\{1\}}), (X^{\{2\}}, Y^{\{2\}}), \cdots, (X^{\{t\}}, Y^{\{t\}})$$

  (note that size of the last mini-batch can be smaller than $$m_b$$)

#### gradient descent with momentum

> idea: path taken by mini-batch gradient descent might oscillate towards convergence, using the moving averages of the past gradients could smooth out such oscillations

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C2-momentum.jpg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

gradient descent with momentum algorithm is analogous to **moving average filters** that reduce random noise in digital signal processing

on iteration $$t$$:

- compute $$dW$$, $$db$$ on current mini-batch

- take move averages of past gradients
  
  $$
  \begin{align*}
  V_{dw} &:= \beta V_{dw} + (1 - \beta) dW \\
  V_{db} &:= \beta V_{db} + (1 - \beta) db
  \end{align*}
  $$

- update parameters with $$dW$$, $$db$$ replaced by weighted averages:
  
  $$
  \begin{align*}
  W &:= W - \alpha V_{dw} \\
  b &:= b - \alpha V_{db}
  \end{align*}
  $$

**bias correction for low initial values**

if we initialise with $$v_0=0$$, then first few averages $$v_1, v_2, \cdots$$ would be underestimated due to heavy influence of the starting point

let $$v_t$$ be the moving average of variable $$\theta_t (t=1,2,\cdots)$$, then

$$
\begin{align*}
v_t &= \beta v_{t-1} + (1-\beta)\theta_t \\
v_t &= \beta^2 v_{t-2} + \beta (1-\beta) \theta_{t-1} + (1-\beta)\theta_t \\
& \vdots \\
v_t &= \beta^t \cancelto{0}{v_0} + \beta^{t-1} (1-\beta) \theta_{1} + \beta^{t-2} (1-\beta) \theta_{2} + \cdots + (1-\beta) \theta_{t} \\
v_t &= (1-\beta) \left[ \beta^{t-1} \theta_{1} + \beta^{t-2} \theta_{2} + \cdots + \beta \theta_{t-1} + \theta_{t} \right]
\end{align*}
$$

this shows an exponetially weighted average with a sum of weights being

$$
(1-\beta) \left[ \beta^{t-1} + \beta^{t-2} + \cdots + \beta + 1 \right] = 1 - \beta^t
$$

but a weighted average should have normalised weights, so we should correct the moving average for $$v_t$$ by:

$$
V_t^\text{corrected} = \frac{V_t}{1 - \beta^t}
$$

#### RMSProp (root mean square propagation)

> idea: hope to accelerate steps in directions with small oscillations and slow down steps in directions with large oscillations

on iteration $$t$$:

- compute $$dW$$, $$db$$ on current mini-batch

- take move averages of variances of $$dW$$ and $$db$$
  
  $$
  \begin{align*}
  S_{dw} &:= \beta S_{dw} + (1 - \beta) dW^2 \\
  S_{db} &:= \beta S_{db} + (1 - \beta) db^2
  \end{align*}
  $$

- update parameters with RMSProp for gradient descent
  
  $$
  \begin{align*}
  W &:= W - \alpha \frac{dW}{\sqrt{S_{dW}}} \\
  b &:= b - \alpha \frac{db}{\sqrt{S_{db}}}
  \end{align*}
  $$

#### Adam optimisation algorithm

> idea: combine gradient descent with momentum and RMSProp

on iteration $$t$$:

- compute $$dW$$, $$db$$ on current mini-batch

- calculates moving averages for both momentum ($$V$$) and RMSProp ($$S$$)
  
  $$
  \begin{align*}
  V_{dw} &:= \beta_1 V_{dw} + (1 - \beta_1) dW \\
  V_{db} &:= \beta_1 V_{db} + (1 - \beta_1) db \\
  S_{dw} &:= \beta_2 S_{dw} + (1 - \beta_2) dW^2 \\
  S_{db} &:= \beta_2 S_{db} + (1 - \beta_2) db^2 \\
  \end{align*}
  $$

- apply bias correction to the moving averages
  
  $$
  \begin{align*}
  V_{dW}^\text{corrected} = \frac{V_{dW}}{1-\beta_1^t} & & V_{db}^\text{corrected} = \frac{V_{db}}{1-\beta_1^t} \\
  S_{dW}^\text{corrected} = \frac{S_{dW}}{1-\beta_2^t} &  &S_{db}^\text{corrected} = \frac{S_{db}}{1-\beta_2^t}
  \end{align*}
  $$

- update parameters using gradient descent
  
  $$
  \begin{align*}
  W &:= W - \alpha \frac{V_{dW}^\text{corrected}}{\sqrt{S_{dW}^\text{corrected}}} \\
  b &:= W - \alpha \frac{V_{db}^\text{corrected}}{\sqrt{S_{db}^\text{corrected}}}
  \end{align*}
  $$

there are three hyperparameters for Adam

- $$\alpha$$: learning rate
- $$\beta_1$$ for momentum
- $$\beta_2$$ for RMSProp

in practice, we can include a small number $$\epsilon \approx 0$$ (e.g., $$\epsilon = 10^{-8}$$) to avoid division-by-zero error

$$
\begin{align*}
W &:= W - \alpha \frac{V_{dW}^\text{corrected}}{\sqrt{S_{dW}^\text{corrected} + \epsilon}} \\
b &:= W - \alpha \frac{V_{db}^\text{corrected}}{\sqrt{S_{db}^\text{corrected} + \epsilon}}
\end{align*}
$$

## hyperparameter tuning

#### examples of hyperparameters

in order of importance, examples of hyperparameters include

- learning rate $$\alpha$$
- $$\beta$$-parameter for momentum
- mini-batch size
- number of hidden units and number of layers
- regularisation parameter $$\lambda$$
- $$\beta$$-parameter for RMSProp
- choice of activation functions
- ...

**rule of thumb for picking hyperparameters**

use a logarithmic scale to search for hyperparameters

suppose we want to search optimal $$\alpha^*$$ within the range $$m \leq \alpha \leq M$$

$$
\begin{align*}
\text{low} &= \log_{10} m \\
\text{high} &= \log_{10}M \\
r &= \text{low} + \text{np.random.rand()} * (\text{high} - \text{low}) \\
\alpha &= 10^r
\end{align*}
$$

#### batch normalisation

batch normalisation means normalising not only the inputs but also intermediate activations to have zero mean and unit variance

batch normalisation can make hyperparameter search easier and the neural network more robust

algorithm:

- for activations: $$\displaystyle Z^{[l]} = \begin{bmatrix} \vdots & \vdots & & \vdots \\ Z^{[l](1)} & Z^{[l](2)} & \cdots  & Z^{[l](m)} \\ \vdots & \vdots & & \vdots \end{bmatrix}$$
- compute mean: $$\displaystyle \mu^{[l]} = \frac{1}{m} \sum_{i=1}^m Z^{[l](i)}$$
- compute variance: $$\displaystyle {\sigma^{[l]}}^2 = \frac{1}{m} \sum_{i=1}^m \left( Z^{[l](i) - \mu^{[l]}} \right)^2$$
- normalisation: $$\displaystyle Z^{[l](i)}_\text{norm} = \frac{Z^{[l](i)} - \mu^{[l]}}{\sigma^{[l]}}$$

we can further set

$$
\tilde{Z}^{[l](i)} = \gamma^{[l]} Z^{[l](i)}_\text{norm} + \beta^{[l]}
$$

where $$\gamma$$ and $$\beta$$ are learnable parameters of the model, this allows $$\tilde{Z}^{[l]}$$ to fit other mean or variance

at test time, we can use weighted averages of $$\mu^{[l]}$$ and $$\sigma^{[l]}$$ across mini-batches as an estimation

## multi-class classification

for $$C$$ classes, the output layer needs $$n^{[L]} = C$$ neurons, and each neuron $$a_j^{[L]} = \hat{y}_j$$ predicts the probability of an example belonging to the $$j^\text{th}$$ class

#### softmax activation

softmax activation for output layer:

$$
a_j^{[L]} = \frac{e^{Z_j^{[L]}}}{\sum_{i=1}^C e^{Z_i^{[L]}}}
$$

this can be implemented as

$$
\begin{align*}
t &= \text{np.exp}(Z^{[L]}) \\
A^{[L]} &= \frac{t}{\text{np.sum(t)}}
\end{align*}
$$

cost function used with softmax is

$$
\begin{align*}
\mathcal{L}(\hat{y}, y) &= -\sum_{j=1}^C y_j^{(i)} \log \hat{y}_j^{(i)} \\
J(W,b) &= \frac{1}{m} \sum_{i=1}^m \mathcal{L}(\hat{y}^{(i)}, y^{(i)}) = -\frac{1}{m} \sum_{i=1}^m \sum_{j=1}^C y_j^{(i)} \log a_j^{[L](i)}
\end{align*}
$$

#### backward propagation for $$dZ^{[l]}$$

for simplicity, let's drop the $$[L]$$ / $$(i)$$ indices for now

$$
\begin{align*}
\frac{\partial J}{\partial Z_j} &= \sum_{k=1}^C \frac{\partial J}{\partial a_k} \frac{\partial a_k}{\partial Z_j} \\
&= -\frac{1}{m} \sum_{k=1}^C \frac{\partial}{\partial a_k} \left( y_k \log a_k \right) \frac{\partial}{\partial Z_j} \left( \frac{e^{Z_k}}{\sum_{i=1}^m e^{Z_i}} \right) \\
&= -\frac{1}{m} \sum_{k=1}^C \frac{y_k}{a_k} \left[ \frac{-e^{Z_k}\cdot e^{Z_j}}{\left( \sum_i e^{Z_i} \right)^2} + \delta_{jk} \frac{e^{Z_j}}{\sum_i e^{Z_i}}\right] \\
&= -\frac{1}{m} \sum_{k=1}^C \frac{y_k}{a_k} \left[ - a_k \cdot a_j + \delta_{jk} \cdot a_j\right] \\
&= -\frac{1}{m} \sum_{k=1}^C \left( - y_k a_j + \delta_{jk} y_k \right) \\
&= \frac{1}{m} {\left( \cancelto{1}{\sum_{k=1}^C y_k} \right)} a_j - \frac{1}{m} y_j \\
\Rightarrow \frac{\partial J}{\partial Z_j} &= \frac{1}{m} (a_j - y_j)
\end{align*}
$$

recovering indices, this is:

$$
\frac{\partial J}{\partial Z_j^{[L](i)}} = \frac{1}{m} (a_j^{[L](i)} - y_j^{(i)})
$$

in vectorised form, we have:

$$
dZ^{[L]} = \frac{1}{m} \left( A^{[L]} - Y \right)
$$

which takes the same form as the binary classifier

with $$dZ^{[L]}$$ as the starting point, the rest of the backward propagation steps for $$dW^{[L]}$$, $$db^{[L]}$$ and $$dA^{[L]}$$ could proceed in literally the same way as before (see note C1-B)

#### softmax with temperature

it is possible to control the randomness and flatness of the output probability distribution by a temperature parameter $$T$$

$$
a_j^{[L]} = \frac{e^{Z_j^{[L]}/T}}{\sum_{i=1}^C e^{Z_i^{[L]}/T}}
$$

larger values of $$T$$ produce a softer probability distribution over classes, making less probable options more likely

this results in less confidence and more diversity in predictions (also mistakes)