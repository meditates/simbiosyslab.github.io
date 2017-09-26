---
layout: post
authors:
  - Jason Yang
date: "2017-09"
---

The missing dimension in the cache 
===================================

### Keywords: cache, time-based cache behavior, key-value store, CDN 

 

Cache is a major component in the memory hierarchy, which bridges the gap
between fast computing devices and slow storage devices. A considerable amount
of effort has been devoted to improving cache performance. However, due to high
computation overhead, research in the past overlooked the time dimension of
cache and focused more on the static modeling and analysis of cache. In fact, we
noticed that cache behavior varies with time, and we can see phase change and
diurnal patterns in the storage traces and CDN cache traces. One example figure
is here:

![](../resources/posts/cache_time/w92_vscsi1.vscsitrace_heatmap_LRU_800000_r.png)

 

this is a heat map of a seven-day storage cache trace. The color of a pixel at
(x, y) in the plot shows the hit ratio if we start cache at time x and end at
time y. This figure clears shows that there is phase changes of cache behavior
and self-repeating behavior from day to day. This phenomenon is not unique to
this single trace, we have observed on most of our 100 storage and CDN traces.
Moreover, we believe similar pattern widely exists in most caches and should be
exploited for improving cache performance.

 

So in this project, we aims to exploit the similarity in cache behavior and make
cache smarter.

 
