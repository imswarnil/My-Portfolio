---
layout: page
title: Uses
permalink: /uses/
aside: false
description: "The gear, software, and tools I use every day."
---

<p class="lead">A living list of the hardware, software, and tools behind the engineering and the films. This is my <a href="https://uses.tech" rel="noopener">/uses</a> page.</p>

## Desk & hardware

| Item | What & why |
|------|------------|
| **Laptop** | MacBook P 14" — quiet, fast, great for editing on the go |
| **Display** | 27" 4K — sharp text for code and color-accurate for grading |
| **Keyboard** | Low-profile mechanical, tactile switches |
| **Camera** | Mirrorless body + a fast 35mm prime for most travel work |
| **Audio** | Lav mic for interviews, shotgun for ambient |

## Software I live in

<div class="card-grid">
  {% include components/card.html icon="ph-code" title="VS Code" text="Primary editor. Vim keybindings, a minimal theme, and a wall of extensions." %}
  {% include components/card.html icon="ph-terminal-window" title="iTerm + zsh" text="Where the real work happens — Jekyll, git, and Claude Code." %}
  {% include components/card.html icon="ph-film-strip" title="DaVinci Resolve" text="Editing, color, and audio for every film." %}
  {% include components/card.html icon="ph-chart-donut" title="CRM Analytics Studio" text="SAQL, dataflows, and dashboard design all day." %}
  {% include components/card.html icon="ph-pen-nib" title="Figma" text="Wireframes, thumbnail systems, and design tokens." %}
  {% include components/card.html icon="ph-rocket-launch" title="Jekyll + GitHub Pages" text="This site — built on the Swarnil CSS theme, deployed on every push." %}
</div>

## Everyday utilities

<ul class="tags">
  <li><span class="tag"><i class="ph-bold ph-cloud"></i> Raycast</span></li>
  <li><span class="tag"><i class="ph-bold ph-lock"></i> 1Password</span></li>
  <li><span class="tag"><i class="ph-bold ph-note"></i> Obsidian</span></li>
  <li><span class="tag"><i class="ph-bold ph-check-square"></i> Things</span></li>
  <li><span class="tag"><i class="ph-bold ph-camera"></i> CleanShot X</span></li>
</ul>

{% include components/callout.html type="tip" text="Building your own /uses page? This whole layout is just the **card**, **table**, and **tag** components from Swarnil CSS — copy the markup straight from this page's source." %}
