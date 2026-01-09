---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
---

## Working Papers
## {% bibliography --file papers --query @*[keywords~=working_papers] --sort_by year --order descending %}
{% bibliography --file working_papers --sort_by year --order descending %}





## Work in Progress
## {% bibliography --file papers --query @*[keywords~=work_in_progress] --sort_by year --order descending %}
{% bibliography --file work_in_progress --sort_by year --order descending %}


