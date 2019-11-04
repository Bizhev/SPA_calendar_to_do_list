#!/usr/bin/env sh

# not publish on error
autor="Bizhev"
repo="SPA_calendar_to_do_list"

set -e

git init
git add -A
git commit -m "$*"

#git push -f git@github.com:$autor/$autor.github.io.git vue:vue
git push -f git@github.com:$autor/$repo.git master:master