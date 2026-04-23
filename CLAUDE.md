## How the upstream version is pulled
- Upstream source is the local repo at `~/coinswap-research/catapult/`.
  The static build output (`dist/`) is copied into this packaging repo as
  `catapult-dist/` before each `make` run. See `scripts/sync-dist.sh`.
- The image is built locally by the SDK from `./Dockerfile` — there is no
  prebuilt `dockerTag` in the manifest; `images.main.source.dockerBuild`
  is used instead.
- The container is nginx:alpine serving the static SPA. No backend process,
  no persistent volume, no dependencies. All API calls (Middle Way, Boltz,
  mempool.space) are made client-side from the browser.

> Packaged from semillabitcoin/catapult for StartOS 0.4.0.
