---
layout: page
title: SIR Modelling
description: A short course on the mathematical modelling of epidemics
img: assets/img/projects/SIR-modelling-IDE.jpg
importance: 2
category: STEM
related_publications: false
images:
  slider: true
---

## Introduction

This is a short course that I have done for high school students who are interested in mathematical sciences. The contents are also suitable for first-year undergraduates.

In this eight-week course, the students would learn about the mathematical modelling of infectious diseases based on the SIR equations. As the students gain a deeper understanding of how mathematical tools can be applied into real-world problems and bring new insights to the society, they would also hone their mathematical skills in handling differential equations and also build the starter skills to carry out scientific computing tasks with Python.

For the reference if you want to check out, I have also written a set of [blog posts]({{ site.baseurl }}/blog/tag/SIR/) on the same topic in Chinese.

## Structure

- Week 1: Python basics and a crash introduction to `numpy` and `matplotlib`
- Week 2: Numerical methods to ODEs and implementation with Python
- Week 3: SIR modelling: simulation and interpretations
- Week 4: Data fitting with simple linear regression
- Week 5: Basic reproductive ratio; conditions for an epidemic outbreat
- Week 6: Scale of an epidemics; consequence of virus mutation
- Week 7: Extensions of the SIR model
- Week 8: Wrap-up

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/SIR-course-fitting.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/SIR-course-parameter.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/SIR-course-spread.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/SIR-course-SEQIR.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
</swiper-container>

There are a lot of things beyond the school curriculum that are covered in the course, some of the tasks are at the level for a university course, so I do not expect a high school student would dive into and understand all the materials that I have prepared. However, there are several directions that any curious student could go into. If you are interested in any of the following
- solving complex equations numerically with a computer program
- refining the model by introducing more realistic elements into the problem
- studying the mathematical structures behind the differential equations
- tuning model parameters to fit observed data and hence make more reliable predictions
I guess you would have some fun from this course.

## Acknowledgement

Most of the ideas of the lectures come from the brilliant online resources listed below:
- [Jeffrey R. Chasnov](https://www.math.hkust.edu.hk/~machas/), [Mathematical Biology](https://www.math.hkust.edu.hk/~machas/mathematical-biology.pdf), Lecture notes for MATH 4333
- Andrew French, [BPhO Computational Physics Challenge Online Course 2023](https://www.youtube.com/watch?v=Qlfv77GPS5Y)
- Robin Thompson, [How do mathematicians model infectious disease outbreaks?](https://www.youtube.com/watch?v=m6Hr69JH_wA), Oxford Mathematics Public Lecture 2020

## Download

The project is hosted on [https://github.com/yuhao-yang-cy/sci-simulations/tree/main/SIR-modelling](https://github.com/yuhao-yang-cy/sci-simulations/tree/main/SIR-modelling).

## Copyright

This work is offered under a **CC BY-NC** (Creative Commons Attribution-Non-Commercial) license. You may remix, adapt, and build upon this work, as long as the attribution is given and the new work is *non-commercial*.
