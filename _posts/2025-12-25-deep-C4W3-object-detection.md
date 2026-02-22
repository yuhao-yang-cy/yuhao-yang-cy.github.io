---
layout: post
title: Object Detection (Deep Learning Notes C4W3)
date: 2025-12-30 13:50:00
description: object detection and the YOLO algorithm
tags: machine-learning deep-learning CNN computer-vision
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 3.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

## Typical Tasks in Computer Vision

- **Image Classification**: classify an image to a specific class (usually only one object in the whole image)

- **Classification with Localisation**: learn the class of the object, and generate a bounding box to give the location of the object in the image (usually only one object in the whole image)

- **Object Detection**: detect all the objects in the image and predict their classes and give their locations (usually more than one object from different classes in the image)

- **Semantic Segmentation**: label each pixel in the image with a category label

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_image_segmentation.jpg" title="Common Computer Vision Tasks" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Common Computer Vision Tasks
</div>

## Object Detection

#### Defining the Outputs

The output vector $$y$$ in the classification with localisation problem can be defined as:
$$
y = \left[ \begin{array}{c} P_c \\ b_x  \\ b_y \\ b_w \\ b_h  \\ C_1 \\ C_2 \\ \vdots \\ C_s \end{array} \right]
$$
where

- $$P_c$$ gives the probability if there is an object in the image
- $$b_x$$ and $$b_y$$ give the coordinates of the centre of the object
- $$b_w$$ and $$b_h$$ are the width and height of the object
- $$C_1, C_2, \cdots , C_s$$ are the probabilities that the object belongs to each of the $$s$$​ classes

The output $$y$$ can also be defined to be:
$$
y = \left[ \begin{array}{c} P_c \\ b_x  \\ b_y \\ b_w \\ b_h  \\ c \end{array} \right]
$$
where $$c$$ is the class index that represents one of the $$s$$ classes to which the object belongs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_box_label.jpg" title="Output Vector" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Output Vector for the Problem
</div>

#### Landmarks

In computer vision problems like face recognition problems, we might also want to output some points on the face like corners of the eyes, corners of he mouth, corners of the nose and so on, which makes it possible to predict the facial expressions of that person. Another example is when we get the skeleton of a person, outputting the positions of the hands, elbows, shoulders, knees, feet and so on could be helpful in predicting what the person is doing. This is called **landmark detection**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_Facial Landmark Detection.jpg" title="Facial Landmarks" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Facial Landmarks
</div>

Instead of using four numbers to give the location and the size of the object of interest, a collection of landmarks are needed in the labelled data.
$$
y=\left[ \begin{array}{c} P_c \\ l_{1,x} \\ l_{1,y} \\ l_{2,x} \\ l_{2,y} \\ \vdots \\ l_{s,x} \\ l_{s,y} \end{array} \right]
$$
where $$(l_{i,x}, l_{i,y})$$ are the coordinates of the $$i^\text{th}$$ landmark which can be the left corner of the left eye, or the right corner of the nose, etc.

#### Choosing the Loss Function

There are two primary tasks in an object detection problem: **classification** (identifying the class of the object) and **localisation** (specifying the object's position and size). In practice, we use a combination of loss functions.

In the course, Andrew's recommendations are:

- logistic regression for $$P_c$$ and log-likelihood loss for the classes (standard loss function for most classification tasks)
- mean squared error for the bounding boxes

#### Sliding Window Technique

For object detection problems, there could be many objects scattered at multiple places across an image,  but we can build upon what we had learned earlier in this course and use the sliding window technique.

Recall that we have learned how to train a CNN for the image classification problems, that is to identity the only object in one image. For object detection, we can crop specific windows of the images (with varying sizes and varying ratios) and forward the cropped portion into a CNN and predict the corresponding class for each window.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_sliding-window-in-action.gif" title="Sliding Windows" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Sliding Window Technique
</div>

The disadvantage of this method is its high computational cost. It turns out that the sliding windows can be implemented more efficiently using convolutional networks.

#### Sliding Window with Convolutional Implementation

The illustration below shows how a convolutional network takes a $$16\times16\times3$$ image and produces a $$2\times2\times4$$ output. Each $$1\times1\times4$$ slice in the output makes a prediction about the probability that each corresponding sliding window (as shown in different colours) belongs to each one of the $$4$$ classes. Similar architectures can be applied for bigger images and more classes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_sliding-window-by-convolution.png" title="Sliding Window with Convolutional Implementation" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sliding Window with Convolutional Implementation
</div>

The sliding window approach treats each window as an independent image patch separately, but neighbouring sliding windows with large fractions of overlapping may share a lot of repeated computations. Therefore, processing the entire image as a whole with a CNN, which shares and reuses the feature map for multiple regions, can significantly eliminate redundant computations and hence reduce computational cost.

## YOLO

**YOLO** (*You Only Look Once*) is a popular algorithm for object detection problems because of its high accuracy and also its ability to run in real time. This algorithm was named YOLO as it requires only one forward propagation pass through the network to make predictions, so in this sense it only looks once at the image. After non-max suppression, it then outputs recognized objects together with the bounding boxes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_yolo_on_predict_time.png" title="YOLO in Real Time" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    YOLO in Real Time
</div>

#### Bounding Box Prediction

By dividing the input image into a smaller grid of size $$G \times G$$, we can perform a simple object localization for each grid cell where the network outputs the class probabilities and the bounding boxes of the main object in that grid cell. For each grid cell, the network detects the object for which its centre belongs to that grid cell, even if the object may span into neighbouring grid cells.

For each grid cell, if we define the target label as mentioned earlier as

$$
y = \left[ \begin{array}{c} P_c \\ b_x  \\ b_y \\ b_w \\ b_h  \\ C_1 \\ C_2 \\ \vdots \\ C_s \end{array} \right]
$$

then the dimension of the output layer is $$G \times G \times (s + 5)$$.

#### Anchor Boxes

Objects from different classes usually have different shapes. For example, we may expect the bounding box for a pedestrian to be tall and thin, while the bounding box for a car to be  relatively wider. To represent different objects in the training data, we choose reasonable height/width ratios for different classes. Such bounding boxes with predefined reference shapes are called **anchor boxes**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_anchor-boxes.png" title="Anchor Boxes" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Anchor Boxes
</div>

Suppose we have $$n_A$$ anchor boxes, then the dimension of the output tensor of the last layer is $$G \times G \times n_A \times (s+5)$$.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_architecture.jpg" title="Encoding for Multiple Anchor Boxes" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Encoding for Multiple Anchor Boxes
</div>

#### Class Scores

We can further extract a probability that the box contains a certain class by computing the element-wise product $$P_c \times C_i$$. After calculating the score for all $$s$$ classes in one anchor box, we may identify the maximum score and assign to this anchor box this class score and the corresponding class.

#### Non-Max Suppression

One problem with YOLO at this stage is that it detects the same object multiple times. The model would output $$G \times G \times n_A$$ boxes, which are way too many boxes. We need to reduce the algorithm's output to a much smaller number of detected objects. To do so, we can use non-max suppression to make sure that YOLO detect each object just once. This involves the following steps:

- choose a threshold for the class scores and get rid of the boxes with a low class score
- select only one box when several boxes overlap with each other but detect the same object

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_non-max-suppression.jpg" title="Non-Max Suppression" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Non-Max Suppression
</div>

To determine which boxes detect the same object, one measure that can be used is the **intersection over union**. The *IoU* between two bounding boxes $$B_1$$ and $$B_2$$ is defined as:

$$
IoU = \frac{B_1 \cap B_2}{B_1 \cup B_2}
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_IoU.png" title="IoU" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    IoU (Intersection over Union)
</div>

While there are too many remaining boxes, we pick the box with the largest $$P_c$$ and output that as a prediction. At the mean time, we search for and remove any remaining box with the same output but with an *IoU* that is greater than a certain threshold.

If there are $$s$$ classes to be detected, we should run non-max suppression $$s$$ times, once for each output class.

#### Visualising YOLO

One way to visualize YOLO's output is to plot the bounding boxes that it predicts. Doing this results in a picture like this:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_Detected-with-YOLO.jpg" title="Objects Detected with YOLO" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Objects Detected with YOLO
</div>

Another way to visualise what YOLO predicts on an image is to do the following:

- for each grid cell, find the highest probability score (take a maximum score across the $$s$$ classes, and one maximum for each of the $$n_A$$ anchor boxes)
- colour that grid cell according to what object that grid cell considers the most likely

Doing this results in a picture that looks like this:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_proba_map.jpg" title="Colouring Labels with YOLO" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Colouring Labels with YOLO
</div>
