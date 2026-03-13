---
layout: default
title: PDFs
---

# PDF Files for Printing

<ul>
{% assign docs = site.static_files | where: "path", "assets/pdf" %}
{% for file in site.static_files %}
  {% if file.path contains '/pdf/' %}
    <li><a href="{{ file.path | relative_url }}" target="_blank">{{ file.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>
