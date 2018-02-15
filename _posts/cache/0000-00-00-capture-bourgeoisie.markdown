---
layout: post
authors:
  - Jason Yang
date: '2018-02-14 12:00:00'
keywords:
  - Smart Cache
  - Data Mining
  - Cache Modelling
  - Machine Learning
title: Capture the “Bourgeoisie” in the Cache
---

Researches have always treated cache requests equal, however, this is NOT true.
Items in the cache also have classes, some have longer lifetime than others,
while some are prone to be re-accesssed. Different classes have different
characteristics, it is important that we distinguish the requests and treat them
differently.

 

Motivation
----------

In this project, we aim to discover the mid-class citizens in the cache, aka
items with mid-frequency. This class of items do not have a very high-frequency
to guarantee them "pinned" in the cache. While they still relatively high
frequency so that being able to capture them is useful. Consider the frequent
items, they are so often accessed that most cache replacement algorithm will be
able to cache them; while the rare items, they appear once every few years, keep
them in the cache is not a waste of precious cache space.

 

Approaches
----------

We borrow ideas from data mining and machine learning, we further develop them
into approximate online algorithms to give intelligence to existing cache
replacement algorithms.

 

Selected Work
-------------

Mithril is a history based prefetching algorithm that was inspired by sporadic
association rule mining. The main idea behind Mithril is simple, if two
non-frequent items are always accessed closely, then they are associated and we
can prefetch the other if we see one of them. Based on this idea, Mithril uses a
fast timestamp-based-comparison to discover associations in an approximately way
online.

<img class="ui centered large rounded image" style="width: 300px; height: 300px;" src="../resources/posts/cache/Mithril.png"/>


Mithril2 is an enhanced version of Mithril, it is based on the observation of
mid-frequency items in Akamai show …

 

 

 

Publications
------------

1.  Juncheng Yang, Reza Karimi, Trausti Saemundsson, Avani Wildani, Ymir
    Vigfusson. "MITHRIL Mining Sporadic Associations for Cache Prefetching." ACM
    Symposium on Cloud Computing (SoCC), 2017.
