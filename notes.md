---
layout: default
title: Notes
permalink: /notes/
description: "Short-form notes, TILs, and snippets I want to remember."
---

<div class="container container--page-narrow">
  <header class="section-head">
    <span class="eyebrow">Garden</span>
    <h2>Notes</h2>
    <p>{{ page.description }}</p>
  </header>

  {% assign items = site.notes | sort: "date" | reverse %}
  {% if items.size > 0 %}
  <ul class="list--unstyled" style="list-style:none;padding:0;margin:0;display:grid;gap:1rem;">
    {% for note in items %}
    <li>
      <a class="card card--link" href="{{ note.url | relative_url }}" style="flex-direction:row;align-items:center;justify-content:space-between;gap:1rem;">
        <span>
          <strong class="text-contrast">{{ note.title }}</strong>
          {% if note.tags %}<span class="text-muted text-sm"> · {% for t in note.tags %}#{{ t }} {% endfor %}</span>{% endif %}
        </span>
        {% if note.date %}<time class="text-muted text-sm" datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: "%b %d, %Y" }}</time>{% endif %}
      </a>
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p class="text-muted text-center">No notes yet.</p>
  {% endif %}
</div>
