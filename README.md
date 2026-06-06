# Marketing Monorepo

A Turborepo-based monorepo for marketing websites, including a firm website and demo sites for various beauty and wellness professionals.

## Structure

- `apps/firm` - Main firm website
- `apps/demo-sites/barber` - Single barber website
- `apps/demo-sites/barber-shop` - Barber shop website
- `apps/demo-sites/hair-stylist` - Hair stylist website
- `apps/demo-sites/hair-salon` - Hair salon website
- `apps/demo-sites/nail-technician` - Nail technician website
- `apps/demo-sites/nail-salon` - Nail salon website
- `packages/config` - Shared configuration (ESLint, TypeScript, etc.)
- `packages/ui` - Shared UI components
- `packages/utils` - Shared utilities

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev

# Build all apps
pnpm build

# Lint all apps
pnpm lint

# Format all apps
pnpm format
```

## Tech Stack

- **Turborepo** - Build system for monorepos
- **pnpm Workspaces** - Package management
- **Next.js** - React framework for all websites
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
