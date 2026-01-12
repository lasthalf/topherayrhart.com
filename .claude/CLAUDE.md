# topherayrhart.com

Personal landing page for Topher Ayrhart - a DevOps engineer's portfolio site.

## Project Overview

Single-page portfolio site deployed as a Cloudflare Worker. The entire site (HTML + CSS) is embedded in a Worker script that runs at the edge - no origin server, no cache eviction, consistently fast globally.

## Tech Stack

- **Runtime**: Cloudflare Workers (edge compute)
- **Frontend**: HTML/CSS inlined in Worker response
- **Hosting**: Cloudflare Workers free tier
- **Deployment**: Wrangler CLI

## Project Structure

```
.
├── src/
│   └── index.js        # Worker script (entire site embedded)
├── deploy.sh           # Deployment script (preview/prod)
├── wrangler.toml       # Cloudflare Workers configuration
├── index.html          # Legacy static file (reference only)
├── style.css           # Legacy static file (reference only)
├── topher-logo.svg     # Logo asset (unused)
└── .claude/
    ├── settings.json   # Claude Code configuration
    └── CLAUDE.md       # Project instructions
```

## Architecture

The site is served directly from Cloudflare's edge network via a Worker:

1. Request hits nearest edge location (300+ globally)
2. Worker executes (sub-millisecond for string return)
3. HTML returned directly - no cache lookup, no origin fetch

**Why Workers instead of Pages?**
- No cache eviction: Worker code is always present at every edge
- Consistent performance: Same speed whether first request or millionth
- Zero-traffic friendly: No "cold cache" problem for low-traffic sites

## Current Status

**Phase**: Live - Worker deployment

- Animated gradient background (purple → magenta → pink → orange → yellow)
- Grain texture overlay
- Clean typography with Inter font
- Responsive design for all screen sizes
- ~8.7KB total, ~3.2KB gzipped

## Development

### Local Development

```bash
./deploy.sh preview
```

This runs `wrangler dev` for local testing with hot reload.

### Deployment

```bash
# Production deployment
./deploy.sh prod
```

**URLs:**
- Production: https://topherayrhart.com (after custom domain setup)
- Workers.dev: https://topherayrhart-com.lasthalf.workers.dev

**Making Changes:**
1. Edit `src/index.js` (the HTML/CSS is embedded in the template literal)
2. Test locally with `./deploy.sh preview`
3. Deploy with `./deploy.sh prod`

**Token:**
- Loaded automatically from macOS Keychain
- Stored via `secret set CLOUDFLARE_API_TOKEN`

## Design Goals

- **Lightning fast**: Sub-100ms globally, no cache misses ever
- **Expressive**: Fun, creative, modern aesthetic
- **Simple**: Single file, no build step, no dependencies
- **Free**: Runs entirely on Cloudflare Workers free tier (100k req/day)

## Notes

- The legacy `index.html` and `style.css` files are kept for reference but are not deployed
- All content changes must be made in `src/index.js`
- Google Fonts (Inter) is the only external dependency
