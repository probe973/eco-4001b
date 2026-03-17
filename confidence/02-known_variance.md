---
layout: default
title: Confidence Intervals with Known Population Variance
---

### Calculating a 95% confidence interval for the mean, with a known population standard deviation

The margin of error in a confidence interval is determined by the level of confidence, the sample size, and the standard deviation in the sample.  When the population standard deviation is known you can use the formula, for a 95% confidence interval:

$$\bar{x} \pm 1.96 \times \frac{\sigma}{\sqrt{n}} $$

Where $\bar{x}$ is the sample mean, $\sigma$ is the population standard deviation, $n$ is the sample size.

If the sample size is large, then this formula is a close approximation when using the sample standard deviation rather than the population.

</div>

{% include question_numerical.html
    id="ciq6ai"
    title="6a part i"
    question_text="Calculate the lower value of the 95% confidence interval if sample mean = 40, population standard deviation = 10, sample size = 100"
    correct_answer="38.04"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{10}{\sqrt{10}}=1.96$ so  $40-1.96=38.04$"
%}

{% include question_numerical.html
    id="ciq6aii"
    title="6a part ii"
    question_text="Calculate the upperr value of the 95% confidence interval if sample mean = 40, population standard deviation = 10, sample size = 100"
    correct_answer="41.96"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{10}{\sqrt{10}}=1.96$ so  $40+1.96=41.96$"
%}

{% include question_numerical.html
    id="ciq6bi"
    title="6b part i"
    question_text="Calculate the lower value of the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 25"
    correct_answer="94.12"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{25}}=5.88$ so  $100-5.88=94.12$"
%}

{% include question_numerical.html
    id="ciq6bii"
    title="6b part ii"
    question_text="Calculate the upper value of the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 25"
    correct_answer="105.88"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{25}}=5.88$ so  $100+5.88=105.88$"
%}

{% include question_numerical.html
    id="ciq6ci"
    title="6c part i"
    question_text="Calculate the lower value of the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 225"
    correct_answer="98.04"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{225}}=1.96$ so  $100-1.96=98.04$"
%}

{% include question_numerical.html
    id="ciq6cii"
    title="6c part ii"
    question_text="Calculate the upper value of the 95% confidence interval if sample mean = 100, population standard deviation = 15, sample size = 225"
    correct_answer="101.96"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{15}{\sqrt{225}}=1.96$ so  $100+1.96=101.96$"
%}

{% include question_numerical.html
    id="ciq6di"
    title="6d part i"
    question_text="Calculate the lower value of the 95% confidence interval if sample mean = 100, population standard deviation = 75, sample size = 225"
    correct_answer="90.2"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{75}{\sqrt{225}}=9.2$ so  $100-9.8=90.2$"
%}

{% include question_numerical.html
    id="ciq6dii"
    title="6d part ii"
    question_text="Calculate the upper value of the 95% confidence interval if sample mean = 100, population standard deviation = 75, sample size = 225"
    correct_answer="109.2"
    tolerance="0"
    solution_text="The margin of error is $1.96 \times \frac{75}{\sqrt{225}}=9.2$ so  $100-9.2=109.2$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/confidence/" | relative_url }}">← Return to Confidence Intervals Menu</a>
</div>

{% include pagination.html %}
