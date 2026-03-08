---
layout: post
title: Convolutional Neural Networks (Deep Learning Notes C4W1)
date: 2025-11-07 22:40:00
description: ABC of convolutional neural networks
tags: machine-learning deep-learning CNN computer-vision
categories: machine-learning computer-science
---

These notes come from Week 1 of the Coursera Course on [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned

I felt that this is the most challenging week in the Deep Learning Specialization so far: 2 hours of video lectures, plus 2 programming assignments, plus the time I spent on writing up the notes, it took me at least 10 hours on the basics of CNN.

In particular, we need to implement the **convolutional filters** and **pooling layers** using `numpy` only in the first programming assignment. Despite the guidance provided by the instructors, it was still very challenging to figure out every single detail of the computations and rewrite them into Python codes.

In the optional part of the programming assignment, the instructors encouraged the learners to try implementing the **backward propagation** computations for the convolutional layer and the pooling layers. A bunch of equations were given as a reference without proof. As a former theoretical physics student, my DNA would not allow me to take these unjustified equations for granted. I believe I had figured out the mathematics of nasty partial derivatives after some work, and I was satisfied to organize my derivation drafts into these notes while it was still fresh in my mind. The notations might be a bit messy, but I guess that is the way it is.

The good news is that we do not need to reinvent the wheel in the later part of the course. From Week 2, we will be using Tensorflow to build our own deep learning neural networks. Using the Keras Sequential API to build things up, sounds really awesome, isn't it?!

Despite the efforts I spent on the mathematics under the hood, I must say that these notes are far from original. All credits go to the course instructor Andrew Ng and his team.


---

## Convolutional Filtering

#### Convolutional Filters

> Idea: use a **sliding window** to detect specific features in a small portion of data such as images

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_conv_filter.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

For each slice:

$$
z_{hw}^{[l]} = \sum_{m=1}^f \sum_{n=1}^f w_c^{[l]}(m,n) \cdot A_{\text{slice}, hw}^{[l-1]}(m,n) + b^{[l]}
$$

where

- $$z_{hw}^{[l]}$$ is the output value of $$z^{[l]}$$ in $$h^\text{th}$$ row and $$w^\text{th}$$ column
- summation is performed over all elements of the filter of size $$f \times f$$
- $$w_c^{[l]}(m,n) \cdot A_{\text{slice}, hw}^{[l-1]}(m,n)$$ is an *element-wise multiplication* between the elements
- $$b^{[l]}$$ is a bias term added after the summation

Let's illustrate how a convolutional filter works with an example:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_conv_filter_example.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div>

$$
\begin{align*}
\textcolor{blue}{\square} &= 1\times3 + 0\times4 + (-1)\times5 + 2\times1 + 0\times0 + (-2)\times8 + 1\times2 + 0\times3 + (-1)\times4 = -18 \\
\textcolor{violet}{\square} &= 1\times2 + 0\times7 + (-1)\times3 + 2\times5 + 0\times6 + (-2)\times1 + 1\times4 + 0\times4 + (-1)\times2 = 9
\end{align*}
$$


#### Why Convolutional Operation?

Convolutional operation is chosen as the foundational building block of CNN for many reasons, including

- **Edge detection**: useful for identifying spatial patterns (edges, shapes, textures, etc.) in computer vision

  For example, $$\begin{bmatrix} 1 & 0 & -1 \\ 1 & 0 & -1 \\ 1 & 0 & -1 \\ \end{bmatrix}$$ detects vertical edges, $$\begin{bmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ -1 & -1 & -1 \\ \end{bmatrix}$$ detects horizontal edges.

- **Parameter sharing**: feature detector in one part of the image may be useful in detecting the same feature in other parts as well

- **Sparsity of connection**: in each layer, each neuron only looks at a local patch of the previous layer, so each output value depends only on a small number of inputs


#### Padding

> Idea: adding extra pixels (usually zeros) to the borders of the input image before convolution

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_padding.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 


If padding amount is $$p$$, then the dimensions of data would be increased from the original $$n \times n$$ to $$(n+2p)\times(n+2p)$$ after padding.

The reasons for padding include:

- preserve spatial dimensions, i.e., avoid shrinking the output
- allow pixels near edges and corners to be processed equally

Common types of padding include:

- **valid padding** (no padding)

  dimensions of the output would be smaller after convolution

- **same padding**

  output image has the same dimensions as the input image

  we need $$n+2p-f+1 = n$$, so $$p_\text{same} = \frac{f-1}{2}$$ for odd $$f$$

#### Strided Convolutions

> Idea: allow the filter to move by more than one pixel at a time, this helps to reduce the output size, hence reduces computational cost

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_strided_conv.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 

#### Convolution over Volumes

Input data may have more than one channel like three-channel RGB images. To allow the filter to extract spatial features across all channels, we need 3D convolutional filters to span the full depth of the input.

We can further use multiple filters of convolutional operation to extract multiple features at the same time. By stacking the results together, we produce an output with multiple channels.

#### Summary of Convolutional Filtering (One Layer)

Suppose at the $$l^\text{th}$$ layer, we have

- input data with the dimensions $$n_H^{[l-1]} \times n_W^{[l-1]} \times n_C^{[l-1]}$$
- $$n_C^{[l]}$$ of filters each of size $$f^{[l]} \times f^{[l]}$$, padding of $$p^{[l]}$$, and stride of $$s^{[l]}$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_conv_over_volume.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 

The dimensions of the output would be $$n_H^{[l]} \times n_W^{[l]} \times n_C^{[l]}$$, where

$$
\begin{align*}
n_H^{[l]} &= \left\lfloor \frac{n_H^{[l-1]} + 2p^{[l]} - f^{[l]}}{s^{[l]}} + 1 \right\rfloor \\
n_W^{[l]} &= \left\lfloor \frac{n_W^{[l-1]} + 2p^{[l]} - f^{[l]}}{s^{[l]}} + 1 \right\rfloor
\end{align*}
$$

## Pooling

Pooling layers are used to reduce the spatial dimensions of input data, which decreases the number of parameters and computation required, speeding up training.

Typically pooling layers are calculating either the maximum (**Max Pooling**) or the average (**Average Pooling**) value of the elements within the sliding window.

#### Max Pooling

> Idea: pick out the maximum value within the sliding window

For each slice:

$$
P_{hw}^{[l]} = \text{max} \left( A_{\text{slice}, hw}^{[l-1]}(m,n) \right) \quad \text{for } m,n=1,2,\cdots,f
$$

An self-explanatory example is shown below:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_max_pooling.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 



#### Average Pooling

> Idea: store the average value of the elements within the sliding window

For each slice:

$$
P_{hw}^{[l]} = \frac{1}{f \times f} \sum_{m=1}^f \sum_{n=1}^f A_{\text{slice}, hw}^{[l-1]}(m,n)
$$

An example is shown below:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_average_pooling.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 

$$
\begin{align*}
\textcolor{blue}{\square} &= \frac{1}{9} \left( 3 + 4 + 5 + 1 + 0 + 8 + 2 + 3 + 4 \right) = \frac{10}{3} \approx 3.33 \\
\textcolor{violet}{\square} &= \frac{1}{9} \left( 2 + 7 + 3 + 5 + 6 + 1 + 4 + 4 + 2 \right) = \frac{34}{9} \approx 3.78
\end{align*}
$$


## Convolutional Neural Networks

#### Typical CNN Architectures

The following figure shows the architecture of **LeNet** (LeNet-5), a small network introduced by and named for *Yann LeCun* initially for the purpose of recognizing handwritten digits in images. This model contains the basic modules of deep learning (convolutional layers, pooling layers, and full connected layers), and was among the first published CNNs to capture wide attention for its performance on computer vision tasks. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/lenet-5.svg" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 


The first part of LeNet is a convolutional encoder consisting of two layers. Note that each convolutional layer and its subsequent pooling layer are usually considered as one layer in CNN community.

The second part of LeNet is a dense block consisting of three fully-connected (FC) layers. The activations are $$A^{[l]} = g^{[l]} \left( W^{[l]} A^{[l-1]} + b^{[l]} \right)$$ as before.

For a CNN architecture in general, it is worth pointing out that

- Successful CNN's usually consists of multiple layers of convolution and pooling.
- As one goes through the CNN, the size of the feature maps usually decreases ($$n_H\downarrow, n_W\downarrow$$) while the number of channels usually increases ($$n_C\uparrow$$)
- The hyperparameters of a CNN include the filter sizes $$f^{[l]}$$, strides $$s^{[l]}$$, the choice of type of pooling (max or average), etc.
- Weights of convolutional layers and weights of fully-connected layers are learnable parameters. They can be optimised through gradient descent methods.
- Fully-connected layers usually have the most parameters in the CNN.

## Backward Propagation for CNN

#### Backward Pass for Pooling Layers

> Objective: compute $$dA^{[l]}$$ given $$dP^{[l]}$$.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_backward_pooling.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 

Each element of $$dA_{ij}^{[l]}$$ receives a contribution from the $$dP_{hw}^{[l]}$$'s such that the corresponding value of $$P_{hw}^{[l]}$$ was calculated using a sliding window containing $$A_{ij}^{[l]}$$. So we can iterate over all $$P_{hw}^{[l]}$$'s and add up the associated contributions to each of the $$dA_{ij}^{[l]}$$'s to obtain $$dA^{[l]}$$.

**Backward Pass for Max Pooling**

For each $$P_{hw}^{[l]} = \text{max} \left( A_{\text{slice}, hw}^{[l-1]}(m,n) \right)$$, $$dP_{hw}^{[l]}$$ only contributes to one value of $$A_{\text{slice}, hw}^{[l]}$$ in this window. We can introduce a mask matrix $$M^{[l]}_{hw}$$ that keeps track of where the maximum of $$A_{\text{slice}, hw}^{[l]}(m,n)$$ occurs (i.e., $$M^{[l]}_{hw}$$ is a matrix with all zeros except one "1" at the position of the maximum entry), then we have:

$$
dA_{\text{slice}, hw}^{[l]} = M^{[l]}_{hw} * dP^{[l]}_{hw}
$$

where both $$dA_{\text{slice}, hw}^{[l]}$$ and $$M^{[l]}_{hw}$$ have the same shape as the sliding window.

**Backward Pass for Average Pooling**

For each $$\displaystyle P_{hw}^{[l]} = \frac{1}{f \times f} \sum_{m=1}^f \sum_{n=1}^f A_{\text{slice}, hw}^{[l-1]}(m,n)$$, we have:

$$
dA_{\text{slice}, hw}^{[l]}(m,n) = \frac{1}{f \times f} \sum_{m=1}^f \sum_{n=1}^f dP^{[l]}_{hw} \quad \text{for all } m,n = 1,2,\cdots, f
$$

where each of $$dA_{\text{slice}, hw}^{[l]}(m,n)$$ is associated with $$dA_{ij}^{[l]}$$ by the relations:

$$
i = (h-1)s + m \qquad j = (w-1)s + n
$$

By iterating over all $$dA_{\text{slice}, hw}^{[l]}(m,n)$$, we add piece by piece to find each of the element $$dA_{ij}^{[l]}$$, and hence the full derivative matrix $$dA^{[l]}$$.

Note that the discussions above only dealt with one single channel, but generalisation to multiple channels should be straightforward.

#### Backward Pass for Convolutional Layers

> Objective: compute $$dA^{[l-1]}$$, $$dW_c^{[l]}$$, $$db^{[l]}$$ given $$dZ^{[l]}$$​.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W1_backward_convolution.png" title="" class="img-natural rounded z-depth-1" %}
    </div>
</div> 

Note that $$dA^{[l-1]}$$ would be $$dP^{[l-1]}$$ for an architecture of multiple layers of convolution filers followed by pooling layers.

Let's consider each element of $$dz^{[l]}_{hw}$$.

Recall that $$z_{hw}^{[l]} = \sum_{m=1}^f \sum_{n=1}^f w_c^{[l]}(m,n) \cdot A_{\text{slice}, hw}^{[l-1]}(m,n) + b^{[l]}$$.

So, each $$dz^{[l]}_{hw}$$ has a contribution to:

- $$f \times f$$ elements of $$dw_c^{[l]}(m,n) += A_{\text{slice}, hw}^{[l-1]}(m,n) \times dz^{[l]}_{hw}$$​
- 1 element of $$db^{[l]} += 1 \times dz^{[l]}_{hw}$$​
- $$f \times f$$ elements of $$dA_{\text{slice}, hw}^{[l-1]}(m,n) += w_c^{[l]}(m,n) \times dz^{[l]}_{hw}$$

Therefore, for the weights of the convolutional filter:

$$
\begin{align*}
dW_c^{[l]} &= \sum_h \sum_w A_{\text{slice}, hw}^{[l-1]} * dZ^{[l]}_{hw} \\
db^{[l]} &= \sum_h \sum_w dZ^{[l]}_{hw}
\end{align*}
$$

For the activations $$dA^{[l-1]}$$, again we need to sum up the element-wise contributions of $$dA_{\text{slice}, hw}^{[l-1]}(m,n)$$ to $$dA^{[l-1]}(i,j)$$​ with

$$
i = (h-1)s + m \qquad j = (w-1)s + n
$$


## Implementation Notes

Suppose we have a training set with $$m$$ samples and the data are stored as `numpy` arrays with the shapes:

- activations $$A^{[l]}$$ / $$Z^{[l]}$$: $$m \times n_H^{[l]} \times n_W^{[l]} \times n_C^{[l]}$$
- weights of convolutional filter $$W_c^{[l]}$$: $$f \times f \times n_C^{[l-1]} \times n_C^{[l]}$$
- biases of convolutional filter $$b^{[l]}$$: $$1 \times 1 \times 1 \times n_C^{[l]}$$

To find the pixel value at $$h^\text{th}$$ row, $$w^\text{th}$$ column, $$c^\text{th}$$ channel for the $$i^\text{th}$$ sample at layer $$l$$, the associated sliding window from the previous layer can be tracked down using the slicing operation. 

```python
A_slice_prev[h, w, c] = A_prev[i_s, h_start:h_end, w_start:w_end, c]
```

where:

```python
h_start = h * stride
w_start = w * stride
h_end = h_start + f
w_end = w_start + f
```

It is possible to use nested `for` loops to iterate over each of the sliding windows:

```python
for i_s in range(m):
    for h in range(n_H):
        for w in range(n_W):
            for c in range(n_C):
                A_slice_prev[h, w, c] = ...
```

#### Forward Propagation

- Convolution: `Z[i_s, h, w, c] = np.sum(A_slice_prev[h, w, c] * W[:, :, :, c]) + b[:, : ,:, c]`
- Max Pooling: `P[i_s, h, w, c] = np.max(A_slice_prev[h, w, c])`
- Average Pooling: `P[i_s, h, w, c] = np.mean(A_slice_prev[h, w, c])`

#### Backward Propagation

- Convolution:

  ```python
  dA_prev[i_s, h_start:h_end, w_start:w_end, :] += W[:, :, :, c] * dZ[i_s, h, w, c]
  dW[:, :, :, c] += A_slice_prev[h, w, c] * dZ[i_s, h, w, c]
  db[:, :, : c] += dZ[i_s, h, w, c]
  ```

- Max Pooling:

  ```python
  M[h, w] = (A_slice_prev[h, w, c] == np.max(A_slice_prev[h, w, c]))  ## creating a mask
  dA_prev[i_s, h_start:h_end, w_start:w_end, :] += M[h, w] * dP[i_s, h, w, c]
  ```

- Average Pooling:

  ```python
  dA_prev[i_s, h_start:h_end, w_start:w_end, :] += 1/(f*f) * dP[i_s, h, w, c] * np.ones(f, f)
  ```