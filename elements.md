---
layout: page
title: Components
permalink: /elements/
aside: false
description: "The Swarnil CSS component library — every building block, in one place."
demo_tabs:
  - label: "npm"
    icon: ph-package
    body: "```bash\nnpm create swarnil-site@latest\n```"
  - label: "Bundler"
    icon: ph-gem
    body: "```ruby\ngem \"jekyll-theme-swarnil\"\n```"
  - label: "Remote theme"
    icon: ph-cloud
    body: "```yaml\nremote_theme: imswarnil/imswarnil.github.io\n```"
steps:
  - title: "Add the gem"
    body: "Drop `gem \"jekyll-theme-swarnil\"` into your **Gemfile** and run `bundle install`."
    done: true
  - title: "Set the theme"
    body: "Point `theme:` at the framework in your `_config.yml`."
    done: true
  - title: "Compose your page"
    body: "Use the includes below — callouts, cards, steppers — straight from Markdown."
faq:
  - q: "Is Swarnil CSS free to use?"
    a: "Yes — it's MIT licensed. Use it for personal or commercial projects."
  - q: "Does it support dark mode?"
    a: "Every component is theme-aware out of the box via the `data-color-scheme` attribute. No extra work."
  - q: "Do I need JavaScript?"
    a: "Almost never. Tabs use radios, accordions use native `<details>`, steppers and callouts are pure CSS."
changelog:
  - date: "v1.2 · 2026"
    title: "Component library"
    body: "Added steppers, tabs, accordions, timelines, and a print stylesheet."
  - date: "v1.1 · 2025"
    title: "Dark mode tokens"
    body: "Every component became theme-aware through a single token map."
  - date: "v1.0 · 2025"
    title: "First release"
    body: "The bento aesthetic, the island layout, and the type scale."
---

<p class="lead">Swarnil CSS is the token-driven framework that powers this theme. Everything below is a real, copy-pasteable component. Toggle dark mode (top-right) — it all adapts.</p>

{% include components/callout.html type="tip" title="How to read this page" text="Each section shows a live component followed by the one-line include that renders it. View source for the full markup." %}

## Install

{% include components/tabs.html id="install" tabs=page.demo_tabs %}

```liquid
{% raw %}{% include components/tabs.html id="install" tabs=page.demo_tabs %}{% endraw %}
```

## Callouts

{% include components/callout.html type="info" title="Info" text="A neutral, informative note." %}
{% include components/callout.html type="success" title="Success" text="Something went right." %}
{% include components/callout.html type="warning" title="Warning" text="Proceed with a little caution." %}
{% include components/callout.html type="danger" title="Danger" text="This action cannot be undone." %}

```liquid
{% raw %}{% include components/callout.html type="warning" title="Warning" text="Proceed with caution." %}{% endraw %}
```

## Cards

<div class="card-grid">
  {% include components/card.html icon="ph-lightning" title="Fast" text="Ships pure CSS — no runtime, no layout shift." %}
  {% include components/card.html icon="ph-moon-stars" title="Themed" text="Light and dark, built into every token." %}
  {% include components/card.html icon="ph-puzzle-piece" title="Composable" text="Mix includes and utilities freely." %}
</div>

```liquid
{% raw %}{% include components/card.html icon="ph-lightning" title="Fast" text="No runtime." %}{% endraw %}
```

## Stepper

{% include components/stepper.html steps=page.steps %}

```liquid
{% raw %}{% include components/stepper.html steps=page.steps %}{% endraw %}
```

## Stats

<div class="stats">
  {% include components/stat.html value="3kb" label="Core CSS, gzipped" icon="ph-feather" %}
  {% include components/stat.html value="0" label="JS dependencies" icon="ph-prohibit" %}
  {% include components/stat.html value="A+" label="Lighthouse" icon="ph-gauge" %}
</div>

## Badges & tags

{% include components/badge.html text="Default" %}
{% include components/badge.html text="Solid" variant="solid" %}
{% include components/badge.html text="Success" variant="success" icon="ph-check" %}
{% include components/badge.html text="Warning" variant="warning" %}
{% include components/badge.html text="Danger" variant="danger" %}
{% include components/badge.html text="Live" variant="info" dot=true %}

<ul class="tags">
  <li><a class="tag" href="#">#jekyll</a></li>
  <li><a class="tag" href="#">#css</a></li>
  <li><a class="tag" href="#">#design-systems</a></li>
</ul>

## Buttons

<p>
  <a class="btn" href="#">Primary</a>
  <a class="btn btn--outline" href="#">Outline</a>
  <a class="btn btn--muted" href="#">Muted</a>
  <a class="btn btn--ghost" href="#">Ghost</a>
  <a class="btn is-sm" href="#">Small</a>
  <a class="btn is-lg" href="#">Large</a>
</p>

## Accordion / FAQ

{% include components/accordion.html items=page.faq open_first=true %}

```liquid
{% raw %}{% include components/accordion.html items=page.faq open_first=true %}{% endraw %}
```

## Timeline

{% include components/timeline.html items=page.changelog %}

## Call to action

{% include components/cta.html title="Build your next site on Swarnil CSS" text="Fast, accessible, theme-aware — and entirely yours." button_text="Read the docs" button_url="/about/" secondary_text="View on GitHub" secondary_url="https://github.com/imswarnil" %}

## Misc

<p>Press <kbd>⌘</kbd> <kbd>K</kbd> to search. Hover this <span data-tooltip="I'm a CSS tooltip!">word</span> for a tooltip.</p>

<div class="progress" aria-label="60 percent"><div class="progress__bar" style="width:60%"></div></div>

<div class="divider">section break</div>

## Classic includes

These ship with the theme too:

{% include button.html text="A button" link="#" %}

{% include figure.html image="https://picsum.photos/1200/600?image=894" alt="A demo figure" caption="figure.html with a caption" %}

{% include video.html id="zrkcGL5H3MU" title="A demo video embed" %}
