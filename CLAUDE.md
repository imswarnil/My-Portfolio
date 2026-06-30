# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website/blog for Swarnil Singhai, served at `dev.imswarnil.com` (see `CNAME`). It is a **Jekyll** site, originally forked from the [Alembic](https://alembic.darn.es/) theme and then heavily customized — the theme's source (`_includes/`, `_layouts/`, `_sass/`) is vendored directly into this repo rather than consumed as a gem, so edit those files in place.

## Commands

```bash
bin/serve                      # local dev server + livereload (recommended)
bin/build                      # production build into _site/
```

In an interactive terminal, plain `bundle install` / `bundle exec jekyll serve` work because `~/.zshrc` activates **chruby `ruby-3.4.1`** (`~/.rubies/ruby-3.4.1`). The **macOS system Ruby (2.6, `/usr/bin/ruby`) cannot build this site** — `sass-embedded` / `google-protobuf` crash with `cannot load such file -- google/protobuf_c` — so if a shell falls back to it (e.g. chruby didn't load), builds break. `bin/serve` / `bin/build` guard against that by forcing `~/.rubies/ruby-3.4.1/bin` onto PATH. `vendor/bundle` is per-Ruby: if you switch Ruby versions, `rm -rf vendor/bundle Gemfile.lock && bundle install`. CI (Ruby 3.1) is unaffected. `Gemfile.lock` is gitignored, so the scripts delete any stale lock before installing.

For a quick SCSS-only check without Jekyll: `npx --yes sass@1.77.8 --no-source-map _sass/main.scss /tmp/out.css`.

There is no test suite, linter, or JS build step — content is plain Markdown/Liquid and Sass compiled by `jekyll-sass-converter`.

## Deployment

Pushing to `main` triggers `.github/workflows/jekyll.yml`, which runs `bundle exec jekyll build` (Ruby 3.1, production env) and deploys `_site/` to GitHub Pages. `Gemfile.lock` is gitignored (`.gitignore`), so CI resolves gem versions fresh each run.

## Architecture

### IM CSS framework (`_sass/im/`)
The styling is a self-contained, custom framework called **IM CSS**. All previous Alembic/Swarnil SCSS (`_base`, `_normalize`, `_variables`, `components/`, `elements/`, `layouts/`, `sections/`, `utility/`) has been **deleted** — do not look for it. `assets/styles.scss` → `_sass/main.scss` → `_sass/im/_index.scss`, which imports (in order): `_config` (build-time SCSS maps/breakpoints/mixins — the single source of truth), `_tokens` (emits all runtime `--im-*` CSS custom properties for light + `[data-color-scheme="dark"]`/system), `_base`, `_navbar`, `_layout`, `_hero`, `_components`, `_collection`, `_post`, `_home`, `_footer`, and `_utilities` last. Everything browser-facing is prefixed `im-` (classes `im-card`, `im-row`, `im-col-6`, `im-pcard--video`, helpers `im-padding-top-2`, `im-text-small`, …) and reads `var(--im-*)` tokens, so the whole site re-themes at runtime. Theme is set by an inline no-flash script in `head.html` writing `data-color-scheme` (light/dark/system) to `<html>`; the navbar toggle persists it to `localStorage` (`im-color-scheme`).

### Collections & layouts
Content lives in **six content-typed collections** (no `_posts` / `posts` collection): `_blog`, `_projects`, `_portfolio`, `_videos`, `_snippets`, `_prompts`. Each is declared in `_config.yml` `collections:` with custom keys `singular`, `icon`, `schema` (schema.org type), `style` (homepage section style) and `image` (fallback cover). `defaults` give every collection entry `layout: post` and pages `layout: page`. Only **three layouts** remain: `default`, `post`, `page` (archive/categories/home/note/project/resume were deleted). The **blog** collection is paginated via `jekyll-paginate-v2` (`pagination:` block in `_config.yml`, rendered by `blog.html` + `_includes/pagination.html`, pages at `/blog/page/:num/`).
- `post.html` is collection-aware: it switches on `page.collection` to render type-specific lead media (YouTube embed for videos, `<audio>` for podcasts, star rating for reviews, fact bars for trips/projects).
- `page.html` doubles as a collection index when front matter sets `list_collection: <label>` (see `guides.md`, `videos.md`, …); otherwise it's a plain page.
- Cards: `_includes/utility/card.html` is a chooser that maps `item.collection` → a per-collection partial in `_includes/cards/` (`video.html`, `review.html`, …), each of which calls the shared `_includes/utility/pcard.html`. `_includes/utility/collection-list.html` renders a whole collection as an `im-cards` grid.
- SEO: `_includes/seo/jsonld.html` emits per-collection JSON-LD (`@type` from the collection's `schema`), included from `head.html` for `layout: post` entries. Image fallback chain (`_includes/utility/image.html`): entry `image`/`cover` → collection `image` → `site.placeholder_image` (`/assets/img/placeholder.svg`). Per-collection covers live in `assets/img/covers/`.

### Configurable chrome (header / footer / search / home)
- **Header** (`_includes/header.html`) is fully driven by the `header:` block in `_config.yml`: `layout: island|full`, `sticky`, `blur`, `brand: both|logo|title`, `show_icons`, `dropdowns`, `megamenu` (an item with `megamenu: true` + `children` opens a wide panel; `blurb`/`sub` keys feed it), `search`, `dark_toggle`, `github` (live star count via the GitHub API, cached in localStorage — JS in `default.html`), `sponsor`, `cta`. Styling lives in `_sass/im/_navbar.scss` (`.im-navbar--island/--full`, `.is-sticky`, `.is-blur`, `.im-dropdown`, `.im-mega`, mobile drawer toggled by `.is-nav-open`).
- **Footer** (`_includes/footer.html` + `footer-social.html`) driven by `footer:` block: `layout: columns|minimal` (two switchable styles), `boxed: true` (optional rounded island-card wrapper, works with either), plus `tagline`, `show_collections`, `show_nav`, `show_social`, `newsletter`. Links use the animated-underline `.im-flink` class; the columns style has a back-to-top link targeting `#top` on `<main>`. Styling in `_sass/im/_footer.scss`.
- **Search**: a command-palette overlay (`_includes/search-modal.html`, opens on the navbar search button or the `/` key) plus the full `/search/` page (`_includes/site-search.html`). Both read `assets/search.json` (which now includes a `collection` field per entry). Styling in `_sass/im/_search.scss`.
- **Homepage** (`index.html`) renders each collection in a signature style via `_includes/home/collection-section.html` (param `style`): `featured` (videos: hero + grid), `numbered` (blog), `bento` (projects), `gallery` (portfolio), `compact` (snippets), `cards` (prompts). Styling in `_sass/im/_home.scss`.

### Reading layout, sidebar, TOC & ads
The `layout:` block in `_config.yml` (`sidebar`, `ad_rails`, `toc`) controls the content shell. `default.html` wraps `<main>` in `.im-rails` (sticky vertical ad rails on ≥1500px when `ad_rails` + adsense enabled; per-page `ad_rails: false` opts out). `post.html` uses `.im-shell.has-sidebar`: a reading-width article column (`--im-content` 44rem) plus a right `.im-sidebar` (`_includes/sidebar.html`: TOC widget, square ad, about/CTA). Per-page `sidebar: false` disables it. The **TOC** is generated by `_includes/toc-script.html` from the article's `h2/h3` — it fills the desktop sidebar widget (`#im-toc`, IntersectionObserver active-highlight) and a mobile collapsible `<details>` (`#im-toc-mobile`) shown above content. **Ads**: `_includes/ad.html` (param `type`: horizontal|square|vertical|in_article|fluid) renders a themed, "Advertisement"-labelled `adsbygoogle` unit from `site.adsense.placements`, with a dashed placeholder when ads are disabled. Container widths live in `--im-container` (64rem) / `--im-container-wide` (75rem) / `--im-container-narrow` (42rem) tokens. Styling in `_sass/im/_shell.scss`.

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
