---
layout: post
title: Image Semantic Segmentation (Deep Learning Notes C4W3)
date: 2025-12-30 13:50:00
description: labelling and colouring the pixels of an image into a set of predefined classes
tags: machine-learning deep-learning CNN computer-vision
categories: machine-learning computer-science
---

> These are some notes for the Coursera Course on [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks), which is a part of the [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning). This post is a summary of the course contents that I learned from Week 3.
>
> These notes are far from original. All credits go to the course instructor Andrew Ng and his team.

## Semantic Segmentation: Overview

Semantic image segmentation is the task of labelling each pixel of an image into a predefined set of classes. The output assigns a semantic class label to each pixel, so a segmented map can be drawn such that regions of the same class labelled with the same colour.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_sementation_map.jpg" title="Semantic Segmentation as A Probability Map" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Semantic Segmentation as A Probability Map
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_FSO-1.jpg" title="Semantic Segmentation as A Colour Labelled Map" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Semantic Segmentation as A Colour Labelled Map
</div>



Applications of semantic segmentations include

- Autonomous vehicles: help car distinguish roads, lanes, pedestrians and obstacles for safer navigation
- Medical imaging: distinguish organs, tumours and tissues with high precision for diagnostics
- Satellite imagery: map land use, model cities, analyse urban development, monitor water bodies, etc.
- Augmented reality and photography: enable live background replacement, portrait modes and advanced filters

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_segmentaion-in-real-time.gif" title="Real-time Semantic Segmentation for Autonomous Vehicles" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Real-time Semantic Segmentation for Autonomous Vehicles
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_medical-image-segmentation_feature_Image.png" title="Medical Image Segmentation" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Medical Image Segmentation
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_satellite-imagery.jpg" title="Semantic Segmentation for Satellite Imagery" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Semantic Segmentation for Satellite Imagery
</div>


## Fully Convolutional Networks (FCNs)

Like other computer vision tasks, we use a CNN for semantic segmentation. However, unlike image classification problems, where the size of the input image gets **downsampled** through a series of strided convolutional and pooling layers and is finally fed into fully-connected layers for classification purposes, semantic segmentation problems requires the output have the same resolution as the input image.

To retain the spatial information that is lost during the downsampling phase, we replace the fully-connected layers in the network by a series of **upsampling** layers followed by more convolutional layers to reproduce higher resolution feature maps. This architecture is called a **Fully Convolutional Network (FCN)**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_segmentation-CNN.jpg" title="Fully Convolutional Network (FCN)" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fully Convolutional Network (FCN)
</div>

The reason behind this general architecture is the following. A typical CNN starts with a high resolution image so it is impractical to connect each neuron to all other neurons. Hence, the initial layers in a CNN can only capture information about smaller regions of the image and learn low-level features like lines, edges and colours. As the feature map is passed through more layers, the size of the image keeps on decreasing and the number of the channels keeps on increasing. Despite the loss of spatial information, the deeper layers become able to learn high-level features like faces and objects. These high-level information about the input image is contained in its various channels.

Now that we have obtained this low-resolution tensor, we have to increase its resolution up to the original image to achieve the task of semantic segmentation. During the upsampling phase, the resolution of the image gets restored while the number of the channels in the feature maps decreases.

#### Transpose Convolution

**Transpose convolution**, also called fractionally-strided convolution, is a type of CNN layer that is useful for tasks that involve upsampling. Instead of sliding the filter over the input, a transposed convolutional layer slides the input over the filter. The element-wise multiplication and summations are performed in a similar way.

The example below illustrates how the transposed convolution with a $$2\times2$$ filter is computed for a $$2\times2$$ input tensor with a stride of $$1$$ and no padding.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_transpose-convolution.png" title="Transpose Convolution" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Transpose Convolution
</div>

The next example illustrates how the transposed convolution is computed with stride $$s=2$$ and padding $$p=1$$.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_transpose-convolution-with-stride.png" title="Transpose Convolution with Strides" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Transpose Convolution with Strides
</div>

In general, if an input feature map of size $$n_h\times n_w$$ is passed through a weighted filter of size $$f \times f$$ with a stride of $$s$$ and padding of $$p$$, then the output of the transposed convolutional layer will be:

$$
\left( (n_h-1)\times s + f - 2p \right) \times \left( (n_w-1)\times s + f - 2p \right)
$$

This could result in an output that is larger than the input, and hence increase the spatial dimensions of the feature maps.

## U-Net

**U-Net**, named for its U-shape, was originally created for tumour detection, but has now become a popular choice for many other semantic segmentation tasks.

U-Net improves on the FCN, using a somewhat similar design, but differing in some important ways. It uses a matching number of convolutions for downsampling and transposed convolutions for upsampling. It also adds **skip connections**, to retain information that would otherwise become lost during encoding. Skip connections send information to every upsampling layer in the decoder from the corresponding downsampling layer in the encoder, capturing finer information while also keeping computation low. These help prevent information loss, as well as model overfitting.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_u-net-architecture.png" title="U-Net" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    U-Net Architecture
</div>



#### U-Net: Model Details

In the programming assignment of the course, we got to build our own U-Net for image segmentation. The architecture of this particular U-Net is shown below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_unet.jpg" title="U-Net" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    U-Net Model
</div>

- **Contracting path** (Encoder containing downsampling steps): The contracting path follows a regular CNN architecture to downsample the image and extract its features. In detail, it consists of the repeated application of two $$3\times3$$ same padding convolutions, each followed by a ReLU unit and a $$2\times2$$ max pooling operation with stride 2 for downsampling. At each downsampling step, the number of feature channels is doubled.

- **Crop function**: This step crops the image from the contracting path and concatenates it to the current image on the expanding path to create a skip connection.

- **Expanding path** (Decoder containing upsampling steps): The expanding path performs the opposite operation of the contracting path, growing the image back to its original size, while shrinking the channels gradually. In detail, each step in the expanding path upsamples the feature map, followed by a $$2\times2$$ transposed convolution. This transposed convolution halves the number of feature channels, while growing the height and width of the image. Next is a concatenation with the correspondingly cropped feature map from the contracting path, and two $$3\times3$$ convolutions, each followed by a ReLU.

- **Final Feature Mapping Block**: In the final layer, a $$1\times1$$ convolution is used to map each 64-component feature vector to the desired number of classes. By choosing an appropriate number of $$1\times1$$ filters, the channel dimensions can be reduced to have one layer per class.

The U-Net network has 23 convolutional layers in total.

#### Experimental Results

The U-Net model for semantic image segmentation is implemented with **sparse categorical cross entropy** for pixelwise multiclass prediction and trained on on the **CARLA** self-driving car dataset.

Although the model was only trained for 40 epochs due to computational constraints for the assignment, we get some pretty amazing results.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_unet-result-2.png" title="Training Results" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Training Results 1
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/deep/C4W3_unet-result-3.png" title="Training Results" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Training Results 2
</div>
