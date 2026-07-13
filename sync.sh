#!/usr/bin/env bash
# Re-sync the discovery prototype into this preview repo and publish to GitHub Pages.
# Usage: ./sync.sh ["optional commit message"]
set -euo pipefail
SRC="${SRC:-/Users/rakesh/repo/foodbridge-module-purchase/discovery}"
DST="$(cd "$(dirname "$0")" && pwd)"
cp "$SRC/index.html"              "$DST/index.html"
cp "$SRC/screens/screen-01.html" "$DST/screens/screen-01.html"
cp "$SRC/seed-data/seed.js"      "$DST/seed-data/seed.js"
cd "$DST"
git add -A
if git diff --cached --quiet; then echo "No changes to publish."; exit 0; fi
git commit -qm "${1:-Sync discovery prototype}"
git push -q
echo "Pushed. Pages redeploys in ~1 min → https://kumarrakesh.github.io/foodbridge-preview/"
