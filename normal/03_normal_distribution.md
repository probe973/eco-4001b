---
layout: default
title: Using the Normal Distribution
---

<div class="explanation" markdown="1">

# Using the Normal Distribution

Once we have defined a normal distribution, $X \sim N(\mu, \sigma^2)$, we often want to find the probability of a value falling within a certain range. 

There are generally two ways to find these probabilities:
1. **Standardising** the value and using **Standard Normal Tables**.
2. Using an **online calculator** or statistical software directly.

Let's look at an example: Suppose the heights of adult males in a city are normally distributed with a mean, $\mu$, of 175 cm and a standard deviation, $\sigma$, of 10 cm. 

We write this distribution as:
$$X \sim N(175, 10^2)$$

</div>

<div class="explanation" markdown="1">

## Method 1: Using Standard Normal Tables

To use standard normal tables, we must first convert our $X$ value into a $Z$ score using the standardising formula:

$$z = \frac{x - \mu}{\sigma}$$

**Example:** What is the probability that a randomly selected male is shorter than 190 cm? ($P(X < 190)$)

1. First, find the $z$-score for $x = 190$:
   $$z = \frac{190 - 175}{10} = \frac{15}{10} = 1.5$$
2. This tells us that 190 cm is exactly 1.5 standard deviations above the mean. We now want to find $P(Z < 1.5)$.
3. Looking up $z = 1.5$ in a <a href="https://math.arizona.edu/~rsims/ma464/standardnormaltable.pdf" target="_blank">standard normal table</a> gives us **0.9332**.

So, $P(X < 190) = 0.9332$.

*(Note: If you wanted to find the probability of being **taller** than 190 cm, $P(X > 190)$, you would subtract this value from 1, because the total probability under the curve is always 1. So, $1 - 0.9332 = 0.0668$).*

</div>

<div class="explanation" markdown="1">

## Method 2: Using an Online Calculator Directly

If you have an online calculator or a graphical calculator, you do not always need to standardise to $Z$ first. You can input the mean ($\mu$) and standard deviation ($\sigma$) of your specific distribution directly.

**Example:** What is the probability that a randomly selected male is taller than 165 cm? ($P(X > 165)$)

Instead of calculating the $z$-score by hand, we can use a calculator. 
1. Enter the mean $\mu = 175$.
2. Enter the standard deviation $\sigma = 10$.
3. Select the probability boundary (Greater than, $X > x$) and enter $165$.

<div class="gigacalculator" data-tool="/calculators/normal-distribution-calculator.php" data-width="450">
  <div class="gigacalctitle">Normal Distribution Calculator</div>
  <div class="gigacalcfooter">
    <a href="https://www.gigacalculator.com/calculators/normal-distribution-calculator.php">Normal Distribution Calculator</a> by <a class="gigacalclink" href="https://www.gigacalculator.com/">GIGAcalculator.com</a>
  </div>
</div>
<script defer src="https://cdn.gigacalculator.com/embed.min.js"></script>

**Use this calculator to confirm that $P(X > 165) = 0.8413$.**

*(Note: If you had standardised this, $z = \frac{165 - 175}{10} = -1.0$. Using the symmetry of the normal tables, $P(Z > -1.0)$ is exactly the same as $P(Z < 1.0) = 0.8413$. Both methods yield the exact same result!)*

</div>

<div class="explanation" markdown="1">

## Probabilities Between Two Values

Often, you will need to find the probability that a value falls *between* two numbers, $P(a < X < b)$. To do this, find the probability of being less than the upper boundary, and subtract the probability of being less than the lower boundary:

$$P(a < X < b) = P(X < b) - P(X < a)$$

**Example:** What is the probability that a randomly selected male is between 165 cm and 190 cm? ($P(165 < X < 190)$)

**Using Tables:**
1. We already know from Method 1 that for 190 cm ($z = 1.5$), the area to the left is **0.9332**.
2. For 165 cm, $z = -1.0$. Looking this up in the tables gives an area to the left of **0.1587**.
3. Subtract the smaller area from the larger area: 
   $$0.9332 - 0.1587 = 0.7745$$

**Using the Calculator:**
Because the embedded calculator above provides basic "Less than" or "Greater than" options, you perform the exact same subtraction:
1. Select "Less than", enter 190, and hit Calculate to get **0.93319**.
2. Keep it on "Less than", enter 165, and hit Calculate to get **0.15865**.
3. Subtract the two values yourself: $0.93319 - 0.15865 = 0.77454$.

So, $P(165 < X < 190) = 0.7745$.

</div>

### Questions

Test your understanding. The weights of a certain type of apple, $X$, are normally distributed with a mean weight of 120g and a standard deviation of 15g. 

This means $X \sim N(120, 15^2)$.

{% include question_multiple_choice.html
    id="norm_mc_1"
    title="Question 1"
    question_text="If you wanted to standardise an apple weighing 145g to use a standard normal table, which calculation gives the correct $z$-score?"
    options="wrong1::(145 - 15) / 120||correct::(145 - 120) / 15||wrong2::(120 - 145) / 15||wrong3::(145 - 120) / 15^2"
    correct_answer="correct"
    solution_text="The formula is z = (x - mean) / standard deviation."
%}

{% include question_multiple_choice.html
    id="norm_mc_2"
    title="Question 2"
    question_text="Without doing any complex calculations, what is $P(X < 120)$?"
    options="wrong1::1||wrong2::0||correct::0.5||wrong3::0.95"
    correct_answer="correct"
    solution_text="Because the normal distribution is perfectly symmetrical, exactly half (0.5) of the values fall below the mean (120)."
%}

For the following numerical questions, use either the tables or the calculator. Give your answers to 4 decimal places:

{% include question_numerical.html
    id="norm_num_1"
    title="Question 3"
    question_text="What is the probability that a randomly chosen apple weighs less than 132g? i.e. Find $P(X < 132)$"
    correct_answer="0.7881"
    tolerance="0.0005"
    solution_text="Standardise: z = (132 - 120)/15 = 0.8. Look up 0.8 in tables or use calculator with mean=120, SD=15."
%}

{% include question_numerical.html
    id="norm_num_2"
    title="Question 4"
    question_text="What is the probability that a randomly chosen apple weighs more than 100g? i.e. Find $P(X > 100)$"
    correct_answer="0.9082"
    tolerance="0.0005"
    solution_text="Standardise: z = (100 - 120)/15 = -1.333. P(Z > -1.33) = P(Z < 1.33) = 0.9082. Or use calculator directly."
%}

{% include question_numerical.html
    id="norm_num_3"
    title="Question 5"
    question_text="What is the probability that a randomly chosen apple weighs between 105g and 135g? i.e. Find $P(105 < X < 135)$"
    correct_answer="0.6827"
    tolerance="0.005"
    solution_text="Standardise both bounds: z1 = (105-120)/15 = -1.0 and z2 = (135-120)/15 = 1.0. Calculate P(Z < 1) - P(Z < -1) = 0.8413 - 0.1587 = 0.6826. (Or find the two 'Less than' values on the calculator and subtract)."
%}


<div class="explanation" markdown="1">

## Working Backwards: The Inverse Normal Distribution

Sometimes we are given the probability (or percentage) and need to work backwards to find the specific value. This is known as the **inverse normal** method.

Let's look at a new example. The daily commute time, $C$, for a worker is normally distributed with a mean of 45 minutes and a standard deviation of 8 minutes.

We write this as:
$$C \sim N(45, 8^2)$$

**Example: The worker wants to know the commute time that is only exceeded 10% of the time. i.e. Find $c$ such that $P(C > c) = 0.10$.**

### Method 1: Working backwards from the Tables

If $P(C > c) = 0.10$, then the area to the *left* is $0.90$. So, $P(C < c) = 0.90$.

1. Look in the **body** (the middle) of the standard normal tables for the value closest to $0.9000$. 
2. The closest value is $0.8997$, which corresponds to a $z$-score of **1.28**. (More precise tables or calculators might give 1.2816).
3. We now rearrange the standardising formula $z = \frac{x - \mu}{\sigma}$ to solve for $x$:
   $$x = \mu + z\sigma$$
4. Substitute our values in:
   $$c = 45 + (1.28 \times 8) = 45 + 10.24 = 55.24 \text{ minutes}$$

### Method 2: Using an Inverse Normal Calculator

Most graphical calculators and online statistics tools have an **Inverse Normal** function. 

Instead of inputting the boundary to find the area, you input the **Area** (probability) to find the boundary. 
1. Select "Z from Probability" (or the equivalent option).
2. Enter the Area (e.g., $0.90$ for the area to the left).
3. Enter the mean $\mu = 45$ and standard deviation $\sigma = 8$.
4. The calculator will directly output $55.25$ minutes.

</div>

### Questions

Test your inverse normal skills using both our apple distribution ($X \sim N(120, 15^2)$) and our commute distribution ($C \sim N(45, 8^2)$).

{% include question_numerical.html
    id="norm_num_4"
    title="Question 6"
    question_text="The farm wants to package the heaviest 5% of their apples as 'Jumbo' sized. Recall that $X \sim N(120, 15^2)$. What is the minimum weight required for an apple to be classified as Jumbo? (Give your answer in grams to 2 decimal places)."
    correct_answer="144.67"
    tolerance="0.1"
    solution_text="We need to find x such that P(X > x) = 0.05 (or P(X < x) = 0.95). Looking up 0.95 in the main body of the tables gives a z-score of approximately 1.645. Substitute into the rearranged formula: x = 120 + (1.645 * 15) = 144.675g."
%}

{% include question_numerical.html
    id="norm_num_5"
    title="Question 7"
    question_text="The worker gets a warning if they are in the top 2% of longest commute times. What is the cut-off time for getting a warning? $C \sim N(45, 8^2)$. (Give your answer to 2 decimal places)."
    correct_answer="61.43"
    tolerance="0.1"
    solution_text="Find c such that P(C > c) = 0.02, meaning P(C < c) = 0.98. The corresponding z-score is roughly 2.054. c = 45 + (2.054 * 8) = 61.43 minutes."
%}

{% include question_multiple_choice.html
    id="norm_mc_3"
    title="Question 8"
    question_text="A farmer harvests a batch of 2000 apples. Based on the normal distribution $X \sim N(120, 15^2)$, approximately how many of these apples are expected to weigh more than 150g?"
    options="wrong1::150||wrong2::100||correct::46||wrong3::5"
    correct_answer="correct"
    solution_text="First find P(X > 150). Standardise: z = (150 - 120) / 15 = 2.0. P(Z > 2.0) = 1 - 0.9772 = 0.0228. Multiply the probability by the total number of apples: 0.0228 * 2000 = 45.6, which rounds to 46."
%}

### Mixed Practice

Test your complete understanding with some brand new scenarios.

{% include question_numerical.html
    id="mixed_new_1"
    title="Question 9"
    question_text="A machine fills plastic bottles with water. The volume of water in each bottle, $V$, is normally distributed with a mean of 505 ml and a standard deviation of 2 ml. What is the probability that a randomly selected bottle contains less than the advertised 500 ml? (Give your answer to 4 decimal places)."
    correct_answer="0.0062"
    tolerance="0.0005"
    solution_text="The distribution is V ~ N(505, 2^2). Standardise: z = (500 - 505) / 2 = -2.5. Looking up P(Z < -2.5) in the tables or using a calculator gives 0.0062."
%}

{% include question_numerical.html
    id="mixed_new_2"
    title="Question 10"
    question_text="IQ scores in a population are modelled by a normal distribution with a mean of 100 and a standard deviation of 15. To be invited to join a high-IQ society, a person must score in the top 2% of the population. What is the minimum IQ score required? (Give your answer to 1 decimal place)."
    correct_answer="130.8"
    tolerance="0.2"
    solution_text="This is an inverse normal question. We need x such that P(I > x) = 0.02, which means the area to the left is 0.98. The corresponding z-score is approximately 2.054. Rearranging the formula gives x = 100 + (2.054 * 15) = 130.81."
%}

{% include question_numerical.html
    id="mixed_new_3"
    title="Question 11"
    question_text="The battery life of a particular smartphone model on a single charge is normally distributed with a mean of 24 hours and a standard deviation of 2.5 hours. What is the probability that a fully charged phone lasts between 20 and 26 hours? (Give your answer to 4 decimal places)."
    correct_answer="0.7333"
    tolerance="0.001"
    solution_text="Find z-scores for both bounds. For 20 hours: z = (20 - 24) / 2.5 = -1.6. For 26 hours: z = (26 - 24) / 2.5 = 0.8. Calculate P(Z < 0.8) - P(Z < -1.6) = 0.7881 - 0.0548 = 0.7333. (Using the calculator, find 'Less than 26' and subtract 'Less than 20')."
%}

{% include question_multiple_choice.html
    id="mixed_new_4"
    title="Question 12"
    question_text="A factory produces metal bolts. The length of the bolts is normally distributed as $L \sim N(50, 0.5^2)$ mm. Quality control rejects any bolt that is longer than 51 mm or shorter than 49 mm. What is the probability that a randomly selected bolt is rejected?"
    options="wrong1::0.9544||correct::0.0456||wrong2::0.0228||wrong3::0.0500"
    correct_answer="correct"
    solution_text="First standardise the boundaries: z = (51 - 50) / 0.5 = 2.0 and z = (49 - 50) / 0.5 = -2.0. The probability of being accepted (between -2 and 2) is 0.9772 - 0.0228 = 0.9544. The probability of being rejected is the outside tails: 1 - 0.9544 = 0.0456."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/normal/" | relative_url }}">← Return to Normal Distribution Menu</a>
</div>

{% include pagination.html %}
