---
layout: default
title: Projects
permalink: /projects/
description: "Selected work — products, experiments, and open source."
---

<div class="container container--page-narrow">
  <header class="section-head">
    <span class="eyebrow">Work</span>
    <h2>Projects</h2>
    <p>{{ page.description }}</p>
  </header>

  {% assign items = site.projects | sort: "year" | reverse %}
  {% if items.size > 0 %}
  <div class="content-grid">
    {% for project in items %}
    <article class="content-card">
      {% if project.cover %}
      <a class="content-card__media" href="{{ project.url | relative_url }}">
        <img src="{{ project.cover | relative_url }}" alt="{{ project.title | escape }}" loading="lazy">
      </a>
      {% endif %}
      <div class="content-card__body">
        <h3 class="content-card__title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        {% if project.summary %}<p class="content-card__excerpt">{{ project.summary }}</p>{% endif %}
        {% if project.tags %}
        <div class="content-card__meta">
          {% for t in project.tags limit: 3 %}<span class="badge">{{ t }}</span>{% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="content-card__footer">
        <a class="readmore" href="{{ project.url | relative_url }}">View project <i class="ph-bold ph-arrow-right"></i></a>
      </div>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="text-muted text-center">No projects published yet — check back soon.</p>
  {% endif %}
</div>
