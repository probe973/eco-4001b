---
layout: default
title: DRV Mean and Variance
---

# Mean and Variance of a Discrete Random Variable

<div class="instructions" markdown="1">

### Mean

Given a discrete random variable $X$ that can take a set of values of $x$, then the **mean** or **expected** value of $X$ is given by:

$$\mu = E(X) = \sum xP(X=x)$$

Both the symbols $\mu$ and $E(X)$ are used to represent the mean of the distribution.

### Variance

The variance of the distribution is given by:

$$\sigma^2 = \text{Var}(X) = \sum (x - \mu)^2P(X=x)$$

This can also be calculated, and is often easier to, using the formula:

$$\sigma^2 = \text{Var}(X) = \sum x^2P(X=x) - \left ( \sum xP(X=x) \right)^2$$

which is the same as:

$$\sigma^2 = \text{Var}(X) = \sum \left( x^2P(X=x) \right ) - \mu^2$$

$\sum x^2P(X=x)$ is often written $E(X^2)$


The $\sum$ symbol means **sum**, and for the discrete random variable you add up for all possible values of the discrete random variable.

**Example**

Find the mean and variance of the discrete random variable $X$ given:

| $x$ | $P(X = x)$ |
|:----|:----|
| 1 | 0.25 |
| 2 | 0.4 |
| 3 | 0.2 |
| 4 | 0.15 |

To find the mean we need:

$$\mu = \sum xP(X=x) = 1 \times 0.25 + 2 \times 0.4 + 3 \times 0.2 + 4 \times 0.15 = 0.25 + 0.8 + 0.6 + 0.6 = 2.25$$

To find the variance we can extend the table with columns for $x - \mu$ and $(x - \mu)^2P(x)$.  We know that $\mu = 2.25$.

| $x$ | $P(X = x)$ | $(x - \mu)$ | $(x - \mu)^2P(X=x)$ |
|:----|:----|:----|:----|
| 1 | 0.25 | -1.25 | 0.390625 |
| 2 | 0.4 | -0.25 | 0.025 |
| 3 | 0.2 | 0.75 | 0.1125 |
| 4 | 0.15 | 1.75 | 0.459375 |

Adding up the final column gives:

$$\sigma^2 = 0.390625+0.025+0.1125+0.459375 = 0.9875$$

Alternatively, workout $E(X^2) = \sum x^2P(X=x)$

$$E(X^2) = 1^2 \times 0.25 + 2^2 \times 0.4 + 3^2 \times 0.2 + 4^2 \times 0.15 = 6.05$$

Then subtract $\mu^2$:

$$\sigma^2 = 6.05 - 2.25^2 = 0.9875$$

</div>
