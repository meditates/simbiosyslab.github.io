---
layout: post
type: system
title: Blind Source Separation study in I/O classification
date: 2017-11-14 12:00:00
authors:
 - Si Chen
keywords:
- BSS algorithms
- I/O classification
---
I/O system can be characterized as a Blind Source Separation (BSS), where the output is the combination of multiple workloads with some noise. We implement some BSS techniques to separate interleaved workload. These algorithms, like FastICA (Independent Components Analysis), SCA (Sparse Component Analysis), DUET (Degenerate Unmixing Estimation Technique), and AMUSE (Algorithm for Multiple Unknown Signals Extraction), have been used successfully to separate other dependent parallel time series. We compare their performances and aim to develop a BSS algorithm optimized for identifying and isolating self-similar undercurrents (ideal streams of groups).
