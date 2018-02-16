---
layout: post
type: other
title: Generating Shakespeare
date: 2017-09-05 12:00:00
authors:
  - Ben Bolte
keywords:
  - Recurrent Neural Networks
  - Language Modeling
---

<div class="ui segments">
  <div class="ui segment">
    <div class="ui grid">
      <div class="sixteen wide column">
        <div class="ui fluid action icon input">
          <input type="text" placeholder="Enter seed phrase here" id="seed"/>
          <button class="ui disabled button" id="generate">Generate</button>
        </div>
      </div>
      <div class="eight wide column">
        <div class="ui fluid labeled input">
          <div class="ui label">Randomness</div>
          <input class="ui fluid input" type="number" value="1" min="0.1" max="10" step="0.1" name="noise" id="noise"/>
        </div>
      </div>
      <div class="eight wide column">
        <div class="ui fluid labeled input">
          <div class="ui label">Length</div>
          <input type="number" value="100" min="1" max="500" step="1" name="sequence_length" id="sequence_length" />
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment" id="write-box">
    The generated text will be displayed here.
  </div>
</div>

## TL;DR

- Use a **Recurrent Neural Network (RNN)** to predict the next character in a sequence from a list of previous characters
- Trained a model on a corpus of text written by Shakespeare <i class="ui write icon"></i>
- Continuously sample from that model to get the next character in the sequence

## More details

A **Language Model** is a model that predicts the probability of a sequence of words:

$$P(x_1, ..., x_n)$$

This can be re-written as the joint conditional probabilities:

$$P(x_1, ..., x_n) = P(x_1) P(x_2 | x_1) ... P(x_n | x_1, ..., x_{n - 1})$$

Each probability distribution can be approximated using a neural network. We need to find a function that maps a sequence of words to the next word:

$$f(x_1, ..., x_{n - 1}) = x_n$$

Recurrent neural networks are usually a good class of functions for this type of time-series prediction task.

## Links

- [Language modeling using RNNs](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)
- [Running neural networks in your browser](https://github.com/transcranial/keras-js)

<!-- Loads the Keras JS and run scripts (defers until everything else is loaded). -->
<script defer src="/resources/static/js/keras.js"></script>
<script defer src="/resources/projects/shakespeare/sequence.js"></script>
