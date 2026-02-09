---
layout: default
title: Factorials
---

<div class="explanation" markdown="1">

# Factorials

Consider how many ways the letters ABC can be arranged:

ABC, ACB, BAC, BCA, CAB, CBA

There are six ways.

This number can be calculated by working out $3 \times 2 \times 1 = 6$.  

This number is written as $3!$ and pronounced **3 factorial**.

So to calculate the number of ways the letters ABCDE can be arranged:

$$5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$$

You may also have a button on your calculator `!` that you can use.

</div>

{% include question_numerical.html
id="factorial1"
title="1"
question_text="What is the value of 9!?"
correct_answer="362880"
tolerance="0"
solution_text="Use the factorial button on your calculator or calculate $9 \times 8 \times 7 \times .... \times 2 \times 1$"
%}

{% include question_numerical.html
id="factorial2"
title="2"
question_text="A musical artist has created an album of 12 songs.  How many different ways can the songs be ordered on the album?"
correct_answer="479001600"
tolerance="0"
solution_text="Use the factorial button on your calculator (12!) or calculate $12 \times 11 \times 10 \times .... \times 2 \times 1$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/binomial/" | relative_url }}">← Return to the Binomial Distribution Menu</a>
</div>

{% include pagination.html %}
