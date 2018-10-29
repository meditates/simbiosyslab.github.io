---
layout: post
type: system
authors:
  - Si Chen, Avani Wildani
title: Chasing the Signal:Statistically Separating Multi-Tenant I/O Workloads  
date: '2018-10-27 12:00:00'
keywords:
  - Blind Source Separation
  - I/O Workload seperation
  - Storage System

---

Identifying the characteristics of a storage workload is critical for resource provisioning for metrics including performance, reliability, and utilization. Although multi-tenant systems are increasingly commonplace, characterization of multiple workloads within a single system trace is difficult because workloads are highly dynamic and typically not labeled. We show that, by converting a block I/O workload to a signal and applying blind source separation, we are able to successfully separate many application workloads.

 

Motivation
----------

Part of provisioning a storage system is understanding how to balance the unique needs of multiple clients with individual service level agreements (SLAs). Since most I/O traces composed of interleaved workload, SLAs are hard to consistently meet when it is difficult to isolate a client’s activity. Moreover, a single client may have multiple, functionally distinct workloads that are not rigorously defined. If a trace is translated into a signal by binning across the spatial dimension, the problem of separating workloads becomes analogous to separating any set of signals that share a noisy channel. We thus
posit that they are amenable to blind source separation techniques such as independent component analysis (ICA) that traditionally are used for signal separation.
 

Approaches
----------
For the sake of demonstration, we use PID as a ground truth indicator of workload label. To further simplify the problem, we removed accesses that did not correspond to one of the top 10 PIDs. All source traces were converted to signals, centered, whitened, and mixed using a mixing matrix of full rank. We use several ICA algorithms to recover the source signals, such as FastICA, JADE, SOBI. To validate, we calculate Mean Square Error (MSE) between the recovered signals and the true source signals.

 

result
-------------
Mixes of I/O workloads are separable using BSS techniques. Even though they run on the same hardware, PID signals are independent and leveraging the excess kurtosis shows very low error values. While PID is not a perfect indicator
of workload, we are specifically looking for functional groups of signals.
<img class="ui centered large rounded image" style="width: 640px; height: 300px;" src="../resources/projects/BSS/bss_10min_vs_1hr.png"/>
