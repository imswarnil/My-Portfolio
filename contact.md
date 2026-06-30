---
layout: page
title: Contact
permalink: /contact/
aside: false
description: "Have a project, a question, or a collaboration in mind? Let's talk."
---

<p class="lead">The fastest way to reach me is email. I read everything and reply to most things within a couple of days.</p>

<div class="card-grid is-auto">
  {% include components/card.html icon="ph-envelope-simple" title="Email" text="contact@imswarnil.com" href="mailto:contact@imswarnil.com" cta="Send a mail" %}
  {% include components/card.html icon="ph-linkedin-logo" title="LinkedIn" text="Let's connect professionally." href="https://www.linkedin.com/in/imswarnil" cta="Connect" %}
  {% include components/card.html icon="ph-youtube-logo" title="YouTube" text="Films, stories, and behind-the-scenes." href="https://youtube.com/@ImSwarnil" cta="Subscribe" %}
</div>

## Send a message

<form class="contact-form" action="https://formspree.io/f/your-id" method="POST">
  <div class="card" style="gap:1rem;">
    <label class="field">
      <span class="fw-medium">Your name</span>
      <input type="text" name="name" placeholder="Jane Doe" required>
    </label>
    <label class="field">
      <span class="fw-medium">Email</span>
      <input type="email" name="email" placeholder="jane@example.com" required>
    </label>
    <label class="field">
      <span class="fw-medium">Message</span>
      <textarea name="message" rows="5" placeholder="Tell me about your project…" required></textarea>
    </label>
    <button class="btn is-lg" type="submit"><i class="ph-bold ph-paper-plane-tilt"></i><span>Send message</span></button>
  </div>
</form>

{% include components/callout.html type="note" text="Replace the Formspree endpoint above with your own form ID (or wire it to Netlify Forms) to start receiving submissions." %}

## Frequently asked

<div class="accordion">
  <details class="accordion__item" open>
    <summary class="accordion__summary"><span>Do you take freelance work?</span><i class="ph-bold ph-caret-down accordion__icon"></i></summary>
    <div class="accordion__body">Selectively — usually analytics dashboards, Jekyll/web builds, or short brand films. Email me with scope and timeline.</div>
  </details>
  <details class="accordion__item">
    <summary class="accordion__summary"><span>Can I use this theme?</span><i class="ph-bold ph-caret-down accordion__icon"></i></summary>
    <div class="accordion__body">Yes. The <strong>Swarnil CSS</strong> theme is open source under the MIT license — see the <a href="/elements/">components</a> page and the README to get started.</div>
  </details>
  <details class="accordion__item">
    <summary class="accordion__summary"><span>Where are you based?</span><i class="ph-bold ph-caret-down accordion__icon"></i></summary>
    <div class="accordion__body">Bengaluru, India (IST). I work comfortably with teams across time zones.</div>
  </details>
</div>
