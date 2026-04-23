#!/usr/bin/env bash
# Rebuild catapult from source and copy dist/ into this packaging repo.
set -euo pipefail

SRC="${CATAPULT_SRC:-$HOME/coinswap-research/catapult}"
HERE="$(cd "$(dirname "$0")/.." && pwd)"

echo "Rebuilding catapult in $SRC..."
(cd "$SRC" && npm run build)

echo "Syncing dist/ -> $HERE/catapult-dist/"
rm -rf "$HERE/catapult-dist"
cp -r "$SRC/dist" "$HERE/catapult-dist"

echo "Done. $(du -sh "$HERE/catapult-dist" | cut -f1) copied."
