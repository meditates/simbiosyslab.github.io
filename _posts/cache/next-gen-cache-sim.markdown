---
layout: post
authors:
  - Jason Yang
date: '2018-02-14 12:00:00'
keywords:
  - Smart Cache
  - Cache Simulation
  - High Performance
  - Flexibility
  - Cache Visualization
  - Data Analysis
  - Storage
  - Key-Value Store
  - CDN
title: 'Mimircache, the Next Generation Cache Analysis and Simulation Platform'
---

Cache is a major component in the memory hierarchy, which bridges the gap
between fast computing devices and slow storage devices. A considerable amount
of effort has been devoted to improving cache performance. However, as cache are
used in different settings and environments, they usually deviate from the
models researchers have long proposed. In order to provide researchers a better
tool to study different cache replacement algorithms, and provide system
administrators a better tool to understand the characteristics of their
workload, we design Mimircache.

 

What is Mimircache 
-------------------

Mimircache is the name for two platforms, PyMimircache and CMimircache, both
platforms provide the same functions, however, one is writtne in Python3 while
the other in C. Besides, PyMimircache also embeds CMMimircache into it when
possible, so that PyMimircache provides same performance as CMimircache with a
much simple interface. The website of Mimircache is at
[http://mimircache.info](http://mimircache.info ).

 

Philosolphy of Mimircache 
--------------------------

-   Performance

-   Flexibility

-   Easy-to-Use

 

Features of Mimircache 
-----------------------

-   Static analysis: computation and visualization of different cache
    replacement algorithms, different cache statistical information.

-   Dynamic analysis: computation and visualization of different cache behavior
    with changing time; variants of heatmap.

-   Easy plugins: write and test your own cache replacement algorithms has been
    made super easy in mimircache, just following the tutorial, you can write
    your own algorithm in a few miniutes.

-   Open source: mimircache is released under public domain with GPLv3 License.

 

Roadmap 
--------

-   **Feature**: Add sampling layer for all profilers (v0.8.0)

-   **Milestone**: Allow mimircache to interact with Memcached and Redis
    (v1.0.0)

-   **Feature**: Add GPU profiling support (v1.2.0)

-   **Feature**: Add Full Windows Support (v2.0.0)  

 
