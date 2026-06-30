---
title: "Tiny debounce (vanilla JS)"
date: 2025-04-20
category: snippet
tags: [javascript]
lang: javascript
excerpt: "A 6-line debounce with no dependencies."
---
```js
const debounce = (fn, ms = 200) => {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
};
```
