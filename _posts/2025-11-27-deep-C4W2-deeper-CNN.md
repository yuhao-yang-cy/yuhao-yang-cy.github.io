---
layout: post
title: Training Deeper CNNs (Deep Learning Notes C4W2)
date: 2025-11-27 16:47:00
description: residual networks (ResNets), depthwise separable convolutions and further advices
tags: machine-learning deep-learning CNN computer-vision
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 2.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

---

## Residual Networks (ResNets)

Deeper networks tend to have better performance (can represent more complex functions, and also can learn features at many different levels of abstraction), but the network would suffer from problems of vanishing or exploding gradients as it goes deeper.

ResNets introduce **shortcuts**, or **skip connections**, across two or more layers. Stacking ResNet blocks on top of each other makes training very deep neural networks possible.

The diagram shows a skip connection being added between the $$l^\text{th}$$ layer and the $$(l+2)^\text{th}$$ layer, which can be symbollically represented as: $$a^{[l+2]} = g\left( z^{[l+2]} + a^{[l]}\right)$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_skip_connection.png" title="Skip Connection" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Skip Connection
</div>

#### Why ResNets work?

A residual block can easily learn an **identity function**. By tuning the weights $$w^{[l+2]}$$ and $$b^{[l+2]}$$ to zero, then the activation $$z^{[l+2]} = w^{[l+2]} a^{[l+1]}  + b^{[l+2]} = 0$$, so $$a^{[l+2]} = \text{ReLU}\left(a^{[l]}\right) = a^{[l]}$$. This means that adding these two layers have little risk of harming the overall performance of the neural network.

#### Typical residual blocks

- **Identity block**: input activation has the same dimention as output activation

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_idblock3_kiank.png" title="The Identity Block" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Identity Block
</div>

- **Convolutional block**: dimenstions of input and output do not match up, so an additional convolutional layer is needed in the shortcut path to adjust the dimension of the previous activations before forwarding them to the upcoming layer

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_convblock_kiank.png" title="The Convolutional Block" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Convolutional Block
</div>


## Depthwise Separable Convolutions

Traditional convolutions can be very resource intensive, and **depthwise separable convolution**s can reduce the number of trainable parameters and operations, and hence speed up the computations.

For normal convolution operation, suppose the input data has dimensions $$n^{[l]} \times n^{[l]}\times n_C^{[l]}$$ and the output data has dimensions $$n^{[l+1]} \times n^{[l+1]}\times n_C^{[l+1]}$$, and we are using $$N = n_C^{[l+1]}$$ filters of size $$f \times f \times n_C^{[l]}$$, then the total number of multiplication in this convolution operation is: $$N \times {n^{[l+1]}}^2 \times f^2 \times n_C^{[l]}$$.

Let's see how the computations can be greatly reduced by breaking down this single convolution operation into a depthwise convolution followed by a pointwise convolution.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_depthwise_separable.png" title="Normal Convolution v.s. Depthwise Separable Convolution" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Normal Convolution v.s. Depthwise Separable Convolution
</div>

In depthwise step, instead of applying convolution to all the $$n_C^{[l]}$$ channels, the convolution is applied to a single channel at a time. So the filters will be of the size $$f \times f \times 1$$ and $$n_C^{[l]}$$ of such filters are required. The number of multiplications at depthwise step is: $$n_C^{[l]} \times {n^{[l+1]}}^2 \times f^2$$.

Next, in the pointwise step, a $$1\times1$$ convolution is applied on the $$n_C^{[l]}$$ channels. So the filter size for this operation is $$1 \times 1 \times n_C^{[l]}$$, and we would need $$N=n_C^{[l+1]}$$ such filters to match the dimension of output data. The number of multiplications at point-wise step is: $$N \times n_C^{[l]} \times {n^{[l+1]}}^2$$.

For the overall depthwise separable operation, the total number of multiplications: $$n_C^{[l]} \times {n^{[l+1]}}^2 \times (f^2+N)$$.
png
Comparing normal convolution operation with depthwise separable convolution, we find:

$$\frac{\text{\#. of mul. of depthwise separable convolution}}{\text{\#. of mul. of normal convolution}} = \frac{f^2 + N}{N \times f^2} = \frac{1}{N} + \frac{1}{f^2}$$

Take $$N=512$$ and $$f=5$$ as an example, the ratio is found to be ~4.2%, so this depthwise seperable block performs over 20 times fewer multiplications as compared to a normal convolutional block. This suggests that we can deploy faster convolution neural network models without losing much of the accuracy.

#### MobileNetV2 Architecture

The diagram below shows the architecture of MobileNetV2, which takes advantage of depthwise separable convolutions together with shortcut connections to speed up training and improve predictions. This allows MobileNetV2 to be run on mobile or other low-power applications with good efficiency. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_mobilenetv2.png" title="MobileNetV2 Architecture" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MobileNetV2 Architecture
</div>

## Inception Networks

We can apply different convolutions and pooling with filters of multiple sizes at the same layer, and concatenate them to give an output volume.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_inception_block.jpg" title="Inception Blocks" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Inception Blocks
</div>

One problem with such inception block is its high computation cost. In order to save computations, we can shrink the number of channels by using $$1\times1$$ convolution filters. The following example shows how the number of computations is greatly reduced by the bottleneck layer of $$1\times1$$ convolutions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_reduce_cost.png" title="1×1 Convolution Filters" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    1×1 Convolution Filters
</div>

## Further Advices

#### Transfer Learning

Many pre-trained models have been trained on very large datasets and have learned those weights with optimized hyperparameters.

For our own particular problem, instead of training a NN from scratch, we can use a specific NN architecture that has been trained by someone else. By replacing the output layer with a new one while keeping all the previous layers fixed, we only need to fine tune the last layer to fit the training examples. We can even compute the last activation for all training examples and save them to disk to reduce computations.

If we have enough data and computation power, instead of starting training a NN with random initialisations, we can initialise the weights with the parameters from pre-trained models and run optimisation algorithms from there. This, in general, can greatly reduce the amount of model training time.

#### Data Augmentation

Data augmentation is the process of artificially generating new data from existing data. This method helps us to have more training examples when we do not have enough data. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W2_data_augmentation.png" title="Examples of Data Augmentation Methods" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Examples of Data Augmentation Methods
</div>

Common data augmentation methods used for computer vision tasks include:

- geometric transformations (mirroring, random cropping, rotation, shearing, etc.)
- colour space transformations (add RGB distortions to the image, change contrast, change brightness, etc.)

It is also possible to add noise or randomly erase some part of the image to improve the model performance.