# Gemfile — Standalone build matching alembic-jekyll-theme.gemspec
source "https://rubygems.org"

# Core
gem 'jekyll'

# Plugins (pins from your gemspec)
group :jekyll_plugins do
  gem "jekyll-sitemap",         "~> 1.4.0"
  gem "jekyll-mentions",        "~> 1.6.0"
  gem "jekyll-paginate",        "~> 1.1.0"
  gem "jekyll-seo-tag",         "~> 2.7.1"
  gem "jekyll-redirect-from",   "~> 0.16"
  gem "jekyll-feed",            "~> 0.15"
  gem "jekyll-commonmark",      "~> 1.3.1"
  gem "jekyll-include-cache",   "~> 0.2"
  gem "jemoji",                 "~> 0.12"
end

# Helpers / runtime
gem "webrick"         # Ruby 3+ local serve
gem "faraday-retry"   # to enable Faraday v2 retry middleware
gem "tzinfo-data"
gem 'wdm', '>= 0.1.0'
gem 'jekyll-sass-converter', '~> 3.1'
gem "sassc", "~> 2.4"