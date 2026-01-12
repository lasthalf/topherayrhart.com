# topherayrhart.com

Personal landing page for Topher Ayrhart - a DevOps engineer's portfolio site.

## Project Overview

This is a single-page static site showcasing DevOps background, skills, and certifications. Currently hand-coded from years ago with dated information, scheduled for a complete redesign.

## Tech Stack

- **Frontend**: Pure HTML/CSS (no frameworks)
- **Assets**: Custom SVG logo
- **Hosting**: Cloudflare Pages
- **Deployment**: Wrangler direct uploads (preview/prod)

## Project Structure

```
.
├── index.html          # Main landing page
├── style.css           # Styling
├── topher-logo.svg     # Logo asset
├── deploy.sh           # Deployment script (preview/prod)
├── wrangler.toml       # Cloudflare Pages configuration
├── .wranglerignore     # Files to exclude from deployment
└── .claude/
    ├── settings.json   # Claude Code configuration
    ├── CLAUDE.md       # Project instructions
    └── AGENTS.md       # Beads workflow instructions
```

## Current Status

**Phase**: Live - Redesign v1 complete

The site has been redesigned with:
- Animated gradient background (purple → magenta → pink → orange → yellow)
- Grain texture overlay
- Clean typography with Inter font
- Updated content reflecting current role and background
- Responsive design for all screen sizes

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

**IMPORTANT: Use the deployment script, NOT git push for deployments during development.**

```bash
# Preview deployment (unique URL for testing)
./deploy.sh preview

# Production deployment (topherayrhart.com)
./deploy.sh prod
```

**Deployment Rules:**
- ALWAYS use `./deploy.sh preview` for testing iterations
- ONLY use `./deploy.sh prod` when explicitly requested by user
- Preview deployments generate unique URLs (e.g., https://abc123.topherayrhart-com.pages.dev)
- Preview alias available at: https://preview.topherayrhart-com.pages.dev
- This avoids polluting git history with iteration commits
- Token is loaded automatically from macOS Keychain (stored via `secret set CLOUDFLARE_API_TOKEN`)
- Script automatically cleans up `.beads/bd.sock` file before deployment

**Git Push:**
- Cloudflare Pages auto-deploys on push to `main` (legacy method)
- Avoid during active development to keep clean commit history

## Beads Issue Tracking

This project uses `bd` (beads) for issue tracking.

### Session Start (REQUIRED)
```bash
bd onboard        # Understand project state
bd ready          # Find available work
bd list           # View all open issues
```

### During Work
```bash
bd show <id>      # View issue details
bd update <id> --status in_progress  # Claim work
bd new --title "..." --type feature  # Create new issue
bd close <id> --reason "..."         # Complete work
```

### Session End - "Landing the Plane" (REQUIRED)

**When ending a work session**, you MUST complete ALL steps. Work is NOT complete until `git push` succeeds.

1. **File issues** for any remaining work
2. **Run quality gates** (if code changed)
3. **Update issues** - close finished, update in-progress
4. **PUSH TO REMOTE** (MANDATORY):
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Hand off** - provide context for next session

**CRITICAL:** Never stop before pushing. Never say "ready when you are" - YOU must push.

## Design Goals

- **Expressive**: Fun, creative, modern aesthetic
- **Fast**: Sub-100ms load times, aggressive edge caching
- **Simple**: Single-page, minimal dependencies
- **Accessible**: Works everywhere, progressively enhanced

## Notes

- This site is intentionally minimal - no frameworks, no build step
- All assets should be inlined or optimized for first paint
- Target: Perfect Lighthouse scores across the board
