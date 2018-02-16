---
layout: post
type: system
abstract: Balance Cost and Performance in the Cloud
title: Mutant
date: 2017-11-02 12:00:00
authors:
  - Hobin Yoon
  - Jason Yang
  - Ymir Vigfusson
  - Sveinn Fannar Kristjansson
  - Steinn E. Sigurdarson
  - Ada Gavrilovska
keywords:
  - NoSQL database
  - Cost-performance trade-offs
  - Cost SLO enforcement
  - Cloud storage
---

#### Keywords: NoSQL database, Cost-performance trade-offs, Cost SLO enforcement, Cloud storage

Conventional wisdom in database systems says there is a trade-off between database storage cost and the access latency:
  you can build a low-cost, high-latency database, or a low-latency, high-cost database, but not both.
We present Mutant, a layer for LSM-tree cloud data stores that balances this trade-off.
The key observation is that high temporal locality of web workloads coupled with sequential batching
  of LSM-tree tablets means that colder data lives on older tablets, allowing them to be moved to colder storage.
In addition to controlling the cost and access latency trade-off,
  our implementation of Mutant on top of RocksDB shows that Mutant reduces cloud storage costs up to 90%
when access latencies are kept fixed, and decreases latencies by 79% when cloud storage costs are fixed.

<img class="ui centered large rounded image" style="width: 300px; height: 300px;" src="../resources/projects/mutant/mutant-design-highlevel.png"/>
