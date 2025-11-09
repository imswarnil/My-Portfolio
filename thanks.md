---
title: Thanks!
layout: default
permalink: /thanks/
indexing: false
sitemap: false
---

<section class="section thankyou">
  <div class="section-inner">
    <h1 class="title">{{ page.title }}</h1>
    <p class="copy">
      Thanks for getting in touch! We'll respond as soon as we can.
    </p>
  </div>
</section>

<!-- Ad Showcase (all versions, named) -->
<section class="section ad-showcase">
  <div class="section-inner">
    <h2 class="title-2">Ad Showcase (All Types)</h2>
    <!-- Row 1: Squares -->
    <div class="ad-row">
      <div class="ad-block">
        <div class="ad-name">Square</div>
        {% include adsense.html type="square" class="ad-demo" %}
      </div>
      <div class="ad-block">
        <div class="ad-name">Square — Small</div>
        {% include adsense.html type="square-small" class="ad-demo" %}
      </div>
      <div class="ad-block">
        <div class="ad-name">Square — Large</div>
        {% include adsense.html type="square-large" class="ad-demo" %}
      </div>
    </div>
    <!-- Row 2: Horizontal + Vertical -->
    <div class="ad-row">
      <div class="ad-block ad-block--wide">
        <div class="ad-name">Horizontal</div>
        {% include adsense.html type="horizontal" class="ad-demo" %}
      </div>
      <div class="ad-block">
        <div class="ad-name">Vertical</div>
        {% include adsense.html type="vertical" class="ad-demo" %}
      </div>
    </div>
    <!-- Row 3: Content-style formats -->
    <div class="ad-row">
      <div class="ad-block ad-block--wide">
        <div class="ad-name">In-Article</div>
        {% include adsense.html type="in_article" class="ad-demo" %}
      </div>
      <div class="ad-block ad-block--wide">
        <div class="ad-name">AutoRelaxed (Multiplex)</div>
        {% include adsense.html type="autorelaxed" class="ad-demo" %}
      </div>
    </div>
    <!-- Row 4: Fluid -->
    <div class="ad-row">
      <div class="ad-block ad-block--wide">
        <div class="ad-name">Fluid</div>
        {% include adsense.html type="fluid" class="ad-demo" %}
      </div>
    </div>
  </div>
</section>
