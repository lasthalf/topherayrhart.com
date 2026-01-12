#!/usr/bin/env bash

set -e

# Load CLOUDFLARE_API_TOKEN from keychain
echo "📦 Loading CLOUDFLARE_API_TOKEN from keychain..."
CLOUDFLARE_API_TOKEN=$(security find-generic-password -a "$USER" -s "CLOUDFLARE_API_TOKEN" -w 2>/dev/null)

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ Error: CLOUDFLARE_API_TOKEN not found in keychain"
  echo ""
  echo "To store it securely:"
  echo "  secret set CLOUDFLARE_API_TOKEN your-token-here"
  exit 1
fi

export CLOUDFLARE_API_TOKEN

# Clean up Beads socket file if it exists (causes wrangler errors)
if [ -f ".beads/bd.sock" ]; then
  rm -f .beads/bd.sock
fi

# Check for deployment type argument
if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh [preview|prod]"
  echo ""
  echo "  preview  Deploy to unique preview URL (e.g., https://abc123.topherayrhart-com.pages.dev)"
  echo "  prod     Deploy to production (topherayrhart.com)"
  exit 1
fi

DEPLOY_TYPE="$1"
PROJECT_NAME="topherayrhart-com"

case "$DEPLOY_TYPE" in
  preview)
    echo "🚀 Deploying preview build..."
    npx wrangler pages deploy . --project-name="$PROJECT_NAME" --branch=preview --commit-dirty=true
    echo "✅ Preview deployed! Check output above for unique URL"
    ;;
  prod)
    echo "🚀 Deploying to production..."
    npx wrangler pages deploy . --project-name="$PROJECT_NAME" --branch=production --commit-dirty=true
    echo "✅ Production deployed to topherayrhart.com"
    ;;
  *)
    echo "Error: Invalid argument '$DEPLOY_TYPE'"
    echo "Usage: ./deploy.sh [preview|prod]"
    exit 1
    ;;
esac
