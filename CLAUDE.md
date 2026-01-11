# topherayrhart.com

Personal landing page for Topher Ayrhart - a DevOps engineer's portfolio site.

## Project Overview

This is a single-page static site showcasing DevOps background, skills, and certifications. Currently hand-coded from years ago with dated information, scheduled for a complete redesign.

## Tech Stack

- **Frontend**: Pure HTML/CSS (no frameworks)
- **Assets**: Custom SVG logo
- **Hosting**: Cloudflare Pages
- **Deployment**: Git-based auto-deploy

## Project Structure

```
.
├── index.html          # Main landing page
├── style.css           # Styling
├── topher-logo.svg     # Logo asset
└── .claude/
    └── settings.json   # Claude Code configuration
```

## Current Status

**Phase**: Design exploration and modernization

The site is functional but contains outdated information (old certifications, stale skills). Planning to:
1. Refresh design with modern, expressive aesthetics
2. Update content with current background
3. Optimize deployment for edge caching (zero cold starts)
4. Maintain free hosting with maximum performance

## Development

This is a static site - no build process required. Simply edit HTML/CSS and push to deploy.

### Local Development

Open `index.html` in a browser, or use any simple HTTP server:

```bash
python -m http.server 8000
# or
npx serve
```

### Deployment

Deployed via Cloudflare Pages with automatic deploys on push to `main`.

## Beads Configuration

This project uses [Beads](https://github.com/steveyegge/beads) for AI-assisted development.

Run `beads onboard` to understand current project state and available beads.

## Design Goals

- **Expressive**: Fun, creative, modern aesthetic
- **Fast**: Sub-100ms load times, aggressive edge caching
- **Simple**: Single-page, minimal dependencies
- **Accessible**: Works everywhere, progressively enhanced

## Notes

- This site is intentionally minimal - no frameworks, no build step
- All assets should be inlined or optimized for first paint
- Target: Perfect Lighthouse scores across the board
