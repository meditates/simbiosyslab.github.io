---
layout: post
type: dataScience
abstract:
title: Predicting Epidemics Through Cellphone Metadata
date: 2017-06-1 12:00:00
authors:
  - Thorgeir A. Karlsson
  - Atli F. Einarsson
  - Derek Onken
  - Rebecca Mitchell
  - Ymir Vigfusson
keywords:
  - Cellphone Metadata
  - Call Detail Records
  - Epidemiological Surveillance
  - Behavioral Analysis
---

### Keywords: Cellphone Metadata, Epidemics, Behavior Analysis

## What is it?

Epidemics cause significant tolls financially and on the population. [Influenza A](https://en.wikipedia.org/wiki/Influenza) alone is responsible for some of the deadliest outbreaks in the past century. Effective outbreak containment and eradication requires quick detection. Traditional detection methods occupy weeks or require active participation by population members. By using mobile phones as behavioral sensors, a novel real-time outbreak detection method can exist. This method depends on two assumptions: population members actually alter activity while sick and mobile phone metadata collected passively can quantifiably capture this behavioral change. With the 2009 H1N1 outbreak in Iceland as a use case, we use call-detail records (CDR) provided by a large mobile network operator (MNO) in Iceland, to observe that diagnosed individuals do indeed alter behavior. Furthermore, we aim to build a model that uses this behavior change to estimate the number of sick individuals in a population.

## Our Goal

The goal of this project is to improve the state of the art in epidemic surveillance. It uses passively collected cell phone metadata as a near real-time source of behavioral markers. This projects builds on a dataset which links individuals phone data with verified diagnosis data.

## Approach

We obtained anonymized cellphone metadata during the 2009 H1N1 pandemic. CHS-CDC operates a centralized database of diagnoses in Iceland and performed a blinded join between our data and recorded cases of Influenza-Like Illness (ILI) diagnosis during the outbreak. The call data covers 30-40% of the country's population at the time of the 2009 outbreak. The metadata contains information about each phone call placed or received by users: who initiated, who received, timestamp, length, and the coordinates of the tower that received the connection.

First, we extract features from the data, including unique locations visited, number of calls (outgoing and incoming), mean call duration, etc. We first observed that features varies in a weeklong cycle (as depicted, Friday is the highest and Sunday is the lowest). This leads to our need to control by day of the week, and thus we choose to rank each user against their past behavior for the same day of the week (we use the past 10 weeks). Another phenonmenon we observe is that major events (holidays) have a pronounced influence on human behavior. Models that fail to account for such major events often grossly mispredict. Seasonality also demonstrates influence on behavioral patterns. Colder months are asssociated with less movement and other feature changes. The data actually displays such influences!

To control for these influences, we compare each individual's extracted feature value against their feature values from the same day of the week for the prior 10 weeks. We use fractional ranking and then linearly map these values to the range of [0,1] so each user has an equal footing. We then calcualte these values for each day relative to the user's date of diagnosis, plotting these on the 4-week period rangin from 2 weeks before diagnosis and 2 weeks after.



## Publications

<iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~thorgeirk11/2439.embed"></iframe>

<div class="ui segments">
  <div class="ui secondary segment">
    This graph shows the number of unique locations users visit on different days around their date of diagnosis.
  </div>
  <div class="ui segment">
    <img class="ui centered large rounded image" style="width: 700px; height: 500px;" src="../resources/projects/cdr/unique_locations_visited_bin0.png"/>
  </div>
  <div class="ui secondary segment">
    For each day we rank the value to the previous 10 values for the same weekday. The ranking ranges from 0 to 1 where 0 represents the lowest value and 1 the highest. Also, a ranking of 0.5 means that the value should fall in the middle of the 10 values, when ordered.
    <br>
    The x-axis shows the relative days around date of diagnosis (DoD) where 0 is DoD. The y-axis shows the mean ranking for all users. The blue line represents infected users and the orange line represents all those who were not infected.
  </div>
</div>


 

## Sponsors

<div class="ui segments">
  <img class="ui centered large rounded image" src="../resources/projects/cdr/Nvidia.png"/>
</div>
<div class="ui segments">
  <img class="ui centered large rounded image" src="../resources/projects/cdr/Leverhulme.jpg"/>
</div>
<div class="ui segments">
  <img class="ui centered large rounded image" src="../resources/projects/cdr/emory.png"/>
</div>
<div class="ui segments">
  <img class="ui centered large rounded image" src="../resources/projects/cdr/rannis.jpg"/>
</div>
