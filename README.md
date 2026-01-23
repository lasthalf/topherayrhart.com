# topherayrhart.com

Personal portfolio site for Topher Ayrhart — a landing page, deployed as a Cloudflare Worker.

**Live:** [topherayrhart.com](https://topherayrhart.com)

## Why a Worker?

The entire site (HTML + CSS) is embedded in a single Worker script that runs at Cloudflare's edge. No origin server, no cache misses, consistently fast globally.

- **No cold cache problem** — Worker code is always present at every edge location
- **Sub-100ms globally** — Same speed whether it's the first request or the millionth
- **Zero dependencies** — No build step, no bundler, no framework
- **Free tier friendly** — Runs entirely on Cloudflare Workers free tier (100k requests/day)

## Project Structure

```
├── src/
│   └── index.js      # Worker script (entire site embedded)
├── deploy.sh         # Deployment helper script
└── wrangler.toml     # Cloudflare Workers config
```

## Development

### Prerequisites

- Node.js
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`npm install -g wrangler`)
- Cloudflare account with API token

### Local Development

```bash
./deploy.sh preview
```

This starts `wrangler dev` with hot reload at `http://localhost:8787`.

### Production Deployment

```bash
./deploy.sh prod
```

Deploys to the configured custom domain.

## Making Changes

All content and styling lives in `src/index.js` as a template literal. Edit the HTML/CSS there, test with `./deploy.sh preview`, and deploy when ready.

## License

MIT
