# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website/blog for Swarnil Singhai, served at `dev.imswarnil.com` (see `CNAME`). It is a **Jekyll** site, originally forked from the [Alembic](https://alembic.darn.es/) theme and then heavily customized — the theme's source (`_includes/`, `_layouts/`, `_sass/`) is vendored directly into this repo rather than consumed as a gem, so edit those files in place.

## Commands

```bash
bundle install                 # install gems (first run / after Gemfile change)
bundle exec jekyll serve       # local dev server with live reload at http://localhost:4000
bundle exec jekyll build       # one-off build into _site/
JEKYLL_ENV=production bundle exec jekyll build   # production build (matches CI)
```

There is no test suite, linter, or JS build step — content is plain Markdown/Liquid and Sass compiled by `jekyll-sass-converter`.

## Deployment

Pushing to `main` triggers `.github/workflows/jekyll.yml`, which runs `bundle exec jekyll build` (Ruby 3.1, production env) and deploys `_site/` to GitHub Pages. `Gemfile.lock` is gitignored (`.gitignore`), so CI resolves gem versions fresh each run.

## Architecture

- **`_config.yml`** is the control center and is large. Beyond standard Jekyll settings it drives most of the custom UI via data: `navigation_header` / `navigation_footer` (menus + submenus + Phosphor icons), `header:` (sticky/search/avatar toggles), `social_links`, `sharing_links`, `adsense:` (placement slot IDs), `fonts:`, and an entire `resume:` object (experience, education, skills, projects, stats) that the resume layout/include renders. Restart `jekyll serve` after editing `_config.yml`.
- **`_layouts/`** — page shells (`default`, `home`, `page`, `post`, `archive`, `categories`, `resume`). `home.html` renders the hero/landing from front matter in `index.md` (`hero_*`, `story_video_id`).
- **`_includes/`** — modular partials assembled by layouts (`head.html`, `header.html`, `footer.html`, nav/social/share fragments, `adsense.html`, `resume.html`, `site-search.html`). The Alembic "shortcode" includes (`figure.html`, `icon.html`, `video.html`, `map.html`, `button.html`) are called from Markdown via `{% include ... %}`.
- **`_sass/`** — Sass partials imported by `assets/styles.scss`. `_variables.scss` holds colours/typography.
- **`_posts/`** — blog posts named `YYYY-MM-DD-slug.md`. Permalinks are `pretty` (`/YYYY/MM/DD/slug/`). Posts default to the `post` layout; root `.md` pages default to `page` (see `defaults` in `_config.yml`).
- **Search** is client-side JS reading `assets/search.json` (a generated index of site content).
- **PWA**: a service worker is wired in (`_includes/site-sw.html`, `offline.md`, `assets/manifest.json`) for offline support.

## Gotchas

- **`_config.yml` has duplicate top-level keys** (`title`, `url`, `social_links` appear more than once). YAML last-value-wins, so the *final* occurrence is the effective value — check the bottom of a block before assuming. The duplicated `url` resolves to `https://imswarnil.com` while `CNAME` points to `dev.imswarnil.com`; reconcile these if links break.
- Page/post front matter options (from Alembic, documented in `README.md`): `aside: true` adds a sidebar, `feature_image` / `feature_text` add a header banner, `comments: false` disables comments, `indexing: false` adds `noindex`.
- `README.md` is the upstream Alembic theme documentation, useful as a reference for include options and layouts but not specific to this site's content.
