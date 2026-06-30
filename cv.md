---
layout: default
title: CV
permalink: /cv/
description: "A concise, printable one-page CV."
rails: false
---

{% assign r = site.resume %}
<div class="container container--page-narrow">
  <div class="cv-actions hide-print">
    <a class="btn btn--outline is-sm" href="/resume/"><i class="ph-bold ph-arrow-left"></i><span>Interactive résumé</span></a>
    <button class="btn is-sm" onclick="window.print()"><i class="ph-bold ph-printer"></i><span>Print / Save PDF</span></button>
  </div>

  <article class="cv typeset">
    <header class="cv-head">
      <h1>{{ r.name | default: site.title }}</h1>
      <p class="lead">{{ r.tagline | default: site.job_title }}</p>
      <p class="text-muted text-sm">
        {% if r.contact.location %}{{ r.contact.location }} · {% endif %}
        {% if r.contact.email %}<a href="mailto:{{ r.contact.email }}">{{ r.contact.email }}</a> · {% endif %}
        {% if r.contact.site %}<a href="https://{{ r.contact.site }}">{{ r.contact.site }}</a>{% endif %}
      </p>
    </header>

    <hr>

    <h2>Experience</h2>
    {% for job in r.experience %}
    <div class="cv-row">
      <div class="cv-row__head">
        <strong>{{ job.role }} · {{ job.org }}</strong>
        <span class="text-muted text-sm">{{ job.when }}{% if job.where %} · {{ job.where }}{% endif %}</span>
      </div>
      {% if job.body %}<p>{{ job.body }}</p>{% endif %}
      {% if job.points %}<ul>{% for p in job.points %}<li>{{ p }}</li>{% endfor %}</ul>{% endif %}
    </div>
    {% endfor %}

    <h2>Education</h2>
    {% for ed in r.education %}
    <div class="cv-row">
      <div class="cv-row__head">
        <strong>{{ ed.degree }} · {{ ed.school }}</strong>
        <span class="text-muted text-sm">{{ ed.when }}{% if ed.where %} · {{ ed.where }}{% endif %}</span>
      </div>
      {% if ed.body %}<p>{{ ed.body }}</p>{% endif %}
    </div>
    {% endfor %}

    <h2>Skills</h2>
    <ul class="tags">
      {% for s in r.skills %}<li><span class="tag">{{ s.name }}</span></li>{% endfor %}
    </ul>

    {% if r.awards %}
    <h2>Awards</h2>
    <ul>
      {% for a in r.awards %}<li><strong>{{ a.title }}</strong>{% if a.meta %} — <span class="text-muted">{{ a.meta }}</span>{% endif %}</li>{% endfor %}
    </ul>
    {% endif %}
  </article>
</div>
