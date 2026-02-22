---
layout: page
title: Decision Maths Algorithms
description: Implementation of decision mathematics algorithms with Python
img: assets/img/projects/decision_cover.jpg
importance: 4
category: STEM
related_publications: false
---

## Introduction

Decision Mathematics is an interesting module in the A-Level Mathematics and Further Mathematics curriculum. Unlike the traditional pure mathematics module or statistics module, decision mathematics focuses on algorithmic thinking and graph theory, a branch of mathematics not quite often seen in high school curriculums.

It was also a matter of coincidence that I began to teach this module. After a year of teaching or two, I became very familiar with how the simple algorithms work in theory, but I always felt that there was something missing unless I could implement these algorithms with computer programs. This is because that the students studying Decision Mathematics are not expected to write a single line of code. Instead, they are expected to turn themselves into a human computer and carry out the algorithms with pen and paper. I have wanted to turn the theories into codes for quite a long time.

I did not have the skills to do this until I finished reading [the book on data structures](https://runestone.academy/runestone/books/published/pythonds/index.html) written by *Bradley N. Miller* and *David L. Ranum*. Greatly inspired by the problems and the example codes in the book, I began to have some idea on how I could possibly implement the algorithms on graphs with Python.

This was basically how the project started. I tried to build everything from scratch without using any third-party library. Starting with self-defined classes for `Vertex` and `Edge`, I managed to further create classes for `Graph` and `Network`. By recording the information about how the vertices are interrelated using lists and dictionaries, I was able to realize several key algorithms in decision mathematics including:
- **Dijkstra's algorithm** to find the shortest path from a start vertex to any vertex on a graph
- **Route inspection algorithm** to find the length of the shortest route to traverse all edges on a graph
- **Critical path analysis** to time manage an activity network

The codes are definitely not elegant by any standard, but at least they worked. The improved program can also provide solutions that satisfy the requirements of the Decision course marking schemes.

## Examples

Here are some solved problems from the Pearson Edexcel WDM11/01 past papers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_graph.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Using a self-defined class, Graph, the information of the graph to be solved is entered into the program.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_dijkstra.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Calling the Dijkstra's method to find the shortest path from one vertex to any other vertex.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_route_inspection.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Calling the route inspection method to find the shortest route to traverse every edge on the graph given the start and finish vertices.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_activity_network.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Enter the information of an activity network into the program.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_activities.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Solving the early start time, late finish time and total float time for all the activities, and determining the minimum completion time for the project.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/decision_gantt.png" title="Graph" class="img-natural rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Plotting the Gantt diagram based on the information found and determining the minimum number of workers needed to complete the project in shortest possible time.
</div>

## Download

The project is hosted on [https://github.com/yuhao-yang-cy/sci-simulations/tree/main/Decision%20Mathematics](https://github.com/yuhao-yang-cy/sci-simulations/tree/main/Decision%20Mathematics).

## Copyright

This work is offered under a **CC BY-NC** (Creative Commons Attribution-Non-Commercial) license. You may remix, adapt, and build upon this work, as long as the attribution is given and the new work is *non-commercial*.
