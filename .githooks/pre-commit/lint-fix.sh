#!/bin/bash

CHANGED_FILES=$(git diff --cached --name-only --diff-filter=ACMR "*.js" "*.jsx" "*.ts" "*.tsx" | sed 's| |\\ |g')

[[ -z "$CHANGED_FILES" ]] && exit 0

echo "Fixing eslint 🔧 🪚 🔨"

if echo "$CHANGED_FILES" | xargs ./node_modules/.bin/eslint --fix ; then
    echo "$CHANGED_FILES" | xargs git add
    echo "Done fixing eslint ✨✨"
    exit 0
else
    echo "Failed fixing eslint, please check the output 🐞"
    exit 1
fi

