---
layout: page
title: Oscillators and PD Controllers
description: A mixed introductory course on scientific computing and simulations
img: assets/img/projects/oscillator-project.jpg
importance: 1
category: STEM
related_publications: false
images:
  slider: true
---

## Introduction

This is a short project-based course that I have done for high school students who are interested in physical and engineering sciences. The contents are also suitable for first-year undergraduates.

There are two main streams that the student could choose from:

- The Oscillator Stream: The student would go beyond what they have learned about simple harmonic oscillators in their A-Level physics course, and move on to study oscillatory motion from a more mathematical perspective. They would also have the opportunity to see damping and resonance in action via numerical simulations with Python.
- The Controller Stream: The students might get a stronger taste of practical engineering. They could also dive into PD controllers, a commonly used close-loop feedback mechanism in many engineering designs. In the guided studies, the students would see how the ideas of damped oscillators extend to the design of PD controllers, and get their hands on seeking for the best parameters to make an aerial vehicle stay on desired paths.

For the reference if you want to check out, I have also written a set of blog posts on [oscillators]({{ site.baseurl }}/blog/tag/oscillators/) and on [PD controllers]({{ site.baseurl }}/blog/tag/control/) in Chinese.

## Structure

- Week 1: Python basics and a crash introduction to `numpy` and `matplotlib`
- Week 2: Numerical methods to first order ODEs and implementation with Python
- Week 3: The ideal simple harmonic oscillator: numerical solutions and error analysis
- Week 4: Damped oscillator: mathematics and simulations
- Week 5: Forced oscillators and resonance: mathematics and simulations
- Week 5: 1D PD controllers
- Week 6: 2D PD controllers
- Week 7: 2D trajectory planning
- Week 8: Wrap-up

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-1.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-2.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-7.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-3.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-4.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-5.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-6.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/oscillator-course-8.jpg" class="img-natural rounded z-depth-1" %}</swiper-slide>
</swiper-container>

There are a lot of things going way beyond the school curriculum in this course, some of the tasks are at the level for a university course, so I do not expect a high school student would dive into and understand all the materials that I have prepared. However, there are several directions that any curious student could go into. If you are interested in any of the following
- appreciating how mathematical tools like second-order differential equations and complex numbers are applied in mechanical problems
- solving complicated differential equations numerically at very high precision with a computer program
- building interactive simulations for a physical problem or an engineering problem using Python
- gaining basic understanding of the mechanics and the control of aerial vehicles using Python
Then I guess you would have some fun from this course.

## Acknowledgement

Most of the ideas on PD controllers come from the open course on Robotics by [Professor Vijay Kumar](https://www.kumarrobotics.org/). Unfortunately this course is no longer available on Coursera the last time I checked. An archive of the course lectures might be found [here](https://www.bilibili.com/video/BV1Xa4y1h7Xt).

## Download

The project is hosted on [https://github.com/yuhao-yang-cy/sci-simulations/tree/main/PD-controller](https://github.com/yuhao-yang-cy/sci-simulations/tree/main/PD-controller).

## Copyright

This work is offered under a **CC BY-NC** (Creative Commons Attribution-Non-Commercial) license. You may remix, adapt, and build upon this work, as long as the attribution is given and the new work is *non-commercial*.
