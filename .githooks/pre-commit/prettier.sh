#!/bin/bash

CHANGED_FILES=$(git diff --cached --name-only --diff-filter=ACMR "*.js" "*.jsx" "*.ts" "*.tsx" | sed 's| |\\ |g')

[[ -z "$CHANGED_FILES" ]] && exit 0

echo "Running prettier 🚀🚀"
echo "$CHANGED_FILES" | xargs ./node_modules/.bin/prettier --write

echo "$CHANGED_FILES" | xargs git add
echo "Done prettier ✨✨"

exit 0

