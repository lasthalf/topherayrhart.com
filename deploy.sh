#!/usr/bin/env bash

set -e

# Load CLOUDFLARE_API_TOKEN from keychain
echo "Loading CLOUDFLARE_API_TOKEN from keychain..."
CLOUDFLARE_API_TOKEN=$(security find-generic-password -a "$USER" -s "CLOUDFLARE_API_TOKEN" -w 2>/dev/null)

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Error: CLOUDFLARE_API_TOKEN not found in keychain"
  echo ""
  echo "To store it securely:"
  echo "  secret set CLOUDFLARE_API_TOKEN your-token-here"
  exit 1
fi

export CLOUDFLARE_API_TOKEN

# Check for deployment type argument
if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh [preview|prod]"
  echo ""
  echo "  preview  Deploy Worker and test locally with wrangler dev"
  echo "  prod     Deploy Worker to production (topherayrhart.com)"
  exit 1
fi

DEPLOY_TYPE="$1"

case "$DEPLOY_TYPE" in
  preview)
    echo "Starting local dev server..."
    npx wrangler dev
    ;;
  prod)
    echo "Deploying Worker to production..."
    npx wrangler deploy
    echo "Production deployed to topherayrhart.com"
    ;;
  *)
    echo "Error: Invalid argument '$DEPLOY_TYPE'"
    echo "Usage: ./deploy.sh [preview|prod]"
    exit 1
    ;;
esac
