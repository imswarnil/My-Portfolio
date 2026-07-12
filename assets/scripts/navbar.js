// ======================================================================
// navbar.js — IM navbar behaviour (no dependencies)
// • scroll border/shadow (.is-scrolled)
// • page / reading progress along the navbar edge (--im-progress)
// • mobile menu toggle + nested submenu tap-to-expand
// • light/dark theme toggle
// • live GitHub star count (cached 24h in localStorage)
// ======================================================================
(function () {
  var navbar = document.querySelector('[data-im-navbar]') || document.querySelector('.im-navbar');
  var progress = document.querySelector('[data-im-progress]');

  // ---- Mobile menu toggle ----
  var navBtn = document.querySelector('[data-im-nav-toggle]');
  if (navBtn && navbar) {
    navBtn.addEventListener('click', function () {
      var open = navbar.classList.toggle('is-nav-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---- Nested submenu: tap-to-expand on touch / small screens ----
  document.querySelectorAll('.im-dropdown-item.has-sub > .im-dropdown-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(min-width: 992px)').matches) return; // desktop uses hover
      e.preventDefault();
      var li = link.parentElement;
      var open = li.classList.toggle('is-open');
      link.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // ---- Theme toggle ----
  var themeBtn = document.querySelector('[data-im-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var el = document.documentElement;
      var cur = el.getAttribute('data-color-scheme');
      var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = cur === 'dark' || (cur === 'system' && sysDark);
      var next = isDark ? 'light' : 'dark';
      el.setAttribute('data-color-scheme', next);
      try { localStorage.setItem('im-color-scheme', next); } catch (e) {}
    });
  }

  // ---- Scroll: border/shadow + progress ----
  var ticking = false;
  function onScroll() {
    if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    if (progress) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.setProperty('--im-progress', Math.min(100, Math.max(0, pct)) + '%');
    }
    ticking = false;
  }
  onScroll();
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // ---- Live GitHub star count ----
  var gh = document.querySelector('[data-im-ghstars]');
  if (gh) {
    var repo = gh.getAttribute('data-im-ghstars');
    var countEl = gh.querySelector('.im-ghstar-count');
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem('im-ghstars-' + repo) || 'null'); } catch (e) {}
    function show(n) { if (countEl) { countEl.textContent = n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n; countEl.hidden = false; } }
    if (cached && (Date.now() - cached.t) < 86400000) { show(cached.n); }
    else {
      fetch('https://api.github.com/repos/' + repo)
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (typeof d.stargazers_count === 'number') {
            show(d.stargazers_count);
            try { localStorage.setItem('im-ghstars-' + repo, JSON.stringify({ n: d.stargazers_count, t: Date.now() })); } catch (e) {}
          }
        }).catch(function () {});
    }
  }
})();
