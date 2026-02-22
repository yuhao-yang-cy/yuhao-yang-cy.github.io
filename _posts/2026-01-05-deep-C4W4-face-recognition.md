---
layout: post
title: Face Recognition (Deep Learning Notes C4W4)
date: 2026-01-05 19:42:00
description: training a Siamese network for face recognition tasks with a triplet loss function
tags: machine-learning deep-learning CNN computer-vision
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 4.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

## Face Recognition: Overview

Face recognition technology uses AI to analyze unique facial features, creating a mathematical encoding to identify or verify a person, common in access control systems like contactless entrance guards and phone unlocking (Face ID).

Face recognition problems commonly fall into one of the two categories:

- **Face Verification** 
  - Input: image, name/ID
  - Output: whether the input image corresponds to the claimed person (1-to-1 matching problem)

- **Face Recognition**
  - Input: image
  - Output: whether the input image corresponds to any one of the registered persons in a database (1-to-$$K$$ matching problem)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W4_face_recog_tasks.png" title="Face Recognition Tasks" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Face Recognition Tasks
</div>

## One-shot Learning

One of the difficulties in this approach is that we might only have one example image for each person to train the model. This is called **one-shot learning**.

Also, the model has to be retrained each time a new person is added to the database, and in test time, we need to compare an input image to all the instances in the database.

One possible solution for the one-shot learning problem is to learn a **similarity  function**:

$$
d(\text{img1}, \text{img2}) = \text{degree of difference between the input images}
$$

- If $$d(\text{img1}, \text{img2})$$ is less than some threshold value, then we claim the two images show the same person.
- If $$d(\text{img1}, \text{img2})$$ is greater than the threshold, then the two images show two different persons.

## Siamese Network

To learn a similarity function, we use a **Siamese Network**, which takes a person's image $$x$$ as the input and outputs an **encoding** $$f(x)$$. In the course's programming assignment, we used a 128-dimensional encoding in the output layer, i.e., the output is a vector of 128 components.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W4_f_x.jpg" title="Encoding of a Face Image" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Encoding of a Face Image
</div>


The goal of training is to learn parameters so that

- If $$x^{(i)}$$ and $$x^{(j)}$$ are the same person, then $$\| f(x^{(i)}) - f(x^{(j)}) \|^2$$ is small.
- If $$x^{(i)}$$ and $$x^{(j)}$$ are different persons, then $$\| f(x^{(i)}) - f(x^{(j)}) \|^2$$ is large.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W4_siamese.jpg" title="Siamese Network for Face Recognition Tasks" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Siamese Network for Face Recognition Tasks
</div>

## Triplet Loss

The **triplet loss** is an effective loss function for training a neural network to learn an encoding of a face image. In particular, training of the network use triplets of images $$(A, P, N)$$, that is:

- **Anchor** $$A$$: an image of a person
- **Positive** $$P$$: an image of the same person as the Anchor
- **Negative** $$N$$: an image of a different person

The network will try to learn parameters that pushes the encodings of $$A$$ and $$P$$ closer together while pulling the encodings of $$A$$ and $$N$$ further apart. For even better differentiation, we would like to make sure that the Anchor image $$A$$ is closer to the Positive image $$P$$ than to the Negative image $$N$$ by at least some margin $$\alpha$$.

$$
d(A, P) + \alpha < d(A, N)
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W4_triplet-loss.png" title="Triplet Loss" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Triplet Loss
</div>

If we measure the similarity with an $$L_2$$ distance, then this becomes

$$
\| f(A)-f(P)\|^2+\alpha <  \| f(A)-f(N)\|^2
$$

With a training dataset of many triplets, we would like to minimise the following triplet cost:

$$
\mathcal{J} = \sum^{m}_{i=1} \text{max} \left( \left[ \| f(A^{(i)}) - f(P^{(i)}) \|^2 - \| f(A^{(i)}) - f(N^{(i)}) \|^2 + \alpha \right], 0 \right)
$$

where $$(A^{(i)}, P^{(i)}, N^{(i)})$$ denotes the $$i$$-th training example.

## Binary Classification

An alternative to the triplet loss approach is to formulate the face recognition problem as a binary classification problem. The CNN computes the encodings of two input images $$x^{(i)}$$ and $$x^{(j)}$$, and use a logistic regression unit to produce an output:

$$
\hat{y} = \sigma\left( \sum_{k=1}^m \left( w_i | f(x^{(i)})_k - f(x^{(j)})_k| + b \right) \right)
$$

- $$\hat{y} = 1$$ if the two images are of the same person
- $$\hat{y} = 0$$ if the two images are of the same person

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W4_distance_kiank.jpg" title="Binary Classification" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Binary Classification
</div>


