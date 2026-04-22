---
layout: default
title: Review
---

{% include question_tree.html
    id="tree_ua"
    title="1"
    question_text="Fill in the missing probabilities as decimals between 0 and 1."
    
    text_a_top="departs late"        
    text_a_bot="departs on-time"
    
    text_b_1="arrives late"
    text_b_2="arrives on-time"
    text_b_3="arrives late"
    text_b_4="arrives on-time"

    val_a_top="0.35"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.65 || 0.75 || 0.25 || 0.20 || 0.80"
    solution_text="departs late: $1 - 0.35$.  For the departs late branch we will have $0.75$ and $1 - 0.75$ and for the departs on-time branch we will start with $0.2$."
%}
