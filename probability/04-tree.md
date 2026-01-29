---
layout: default
title: Tree diagrams
---

{% include question_tree.html
    id="tree_q_example"
    title="Probability Tree"
    question_text="Fill in the missing probabilities. P(Car) is given as 0.82."
    
    text_a_top="Car"        
    text_a_bot="No Car"
    
    text_b_1="Refreshments"
    text_b_2="No Ref"
    text_b_3="Refreshments"
    text_b_4="No Ref"

    val_a_top="0.82"
    val_a_bot="INPUT"

    val_b_1="INPUT"
    val_b_2="INPUT"
    val_b_3="INPUT"
    val_b_4="INPUT"

    answers="0.18 || 0.6 || 0.4 || 0.3 || 0.7"
    solution_text="No Car: 1 - 0.82 = 0.18. etc..."
%}
