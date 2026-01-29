---
layout: default
title: Venn diagrams
---

<div class="explanation" markdown="1">

## Venn Diagrams

A **Venn diagram** is a graphical display of frequencies or probabilities of multiple events.  Each event is represented by a cirlce and all the circles are placed within a rectangle.  The rectangle represents the **sample space**, which represents everything that can happen.  The total of the frequencies or probabilities in the rectangle add up to the total frequency or 1 respectively.  Overlaps in the circles represent frequencies or probabilities of all the overlapping events occurring. 

</div>

{% include question_venn.html
    id="venn_q1"
    title="1"
    question_text="A = NFC payment, B = Phone App."
    label_a="NFC payment"
    label_b="Phone App"
    val_a="INPUT"
    val_mid="INPUT"
    val_b="INPUT"
    val_out="INPUT"
    answers="0.1 || 0.2 || 0.5 || 0.2"
    tolerance="0.01"
    solution_text="A only: 0.1. Intersection: 0.2. B only: 0.5. Outside: 0.2."
%}
