# Gemfile
source "https://rubygems.org"

ruby ">= 3.1"

gem "jekyll", "~> 4.3.3"

group :jekyll_plugins do
  gem "jekyll-sitemap",       "~> 1.4"
  gem "jekyll-mentions",      "~> 1.6"
  gem "jekyll-paginate",      "~> 1.1"
  gem "jekyll-seo-tag",       "~> 2.8"
  gem "jekyll-redirect-from", "~> 0.16"
  gem "jekyll-feed",          "~> 0.17"
  gem "jekyll-commonmark",    "~> 1.3"
  gem "jekyll-include-cache", "~> 0.2"
  gem "jemoji",               "~> 0.12"
end

# Use jekyll-sass-converter v2 (uses libsass via sassc). Avoids sass-embedded on CI.
gem "jekyll-sass-converter", "~> 2.2"
gem "sassc", "~> 2.4"

# Local dev helpers
gem "webrick"
gem "tzinfo-data"

# Windows file watcher – only on Windows
platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", ">= 0.1.0"
end
