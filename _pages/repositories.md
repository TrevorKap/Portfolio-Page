---
layout: page
permalink: /repositories/
title: Repositories
description: A selection of notable repositories and group projects.
nav: true
nav_order: 4
---

{% if site.data.repositories.group_repos %}

## Featured Repositories

<div class="row row-cols-1 row-cols-md-3">
  {% for item in site.data.repositories.group_repos %}
    {% include repository/repo_manual.liquid repo=item.repo title=item.title description=item.description img=item.img %}
  {% endfor %}
</div>
{% endif %}
