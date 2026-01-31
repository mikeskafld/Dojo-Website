# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dojo is a marketing site and subscription platform built on Next.js 15 with Supabase backend and Polar.sh payment integration. The site uses a dark theme with cyan/teal accents.

## Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack (localhost:3000)
pnpm build            # Production build
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
pnpm format:check     # Prettier check
pnpm format:write     # Prettier auto-fix

# Database
pnpx supabase db link                    # Link to Supabase project
pnpx supabase db push                    # Push migrations to remote
pnpx supabase gen types typescript --project-id <id> --schema public > types/db.ts  # Generate types

# Polar
pnpm polar:seed       # Seed Polar products
```

## Architecture

### Route Groups
- `app/(marketing)/` - Public marketing pages, uses `.dojo` theme class for dark styling
- `app/(authenticated)/` - Protected dashboard pages behind auth

### Key Patterns

**Server Actions** (`lib/db/actions.ts`):
- All database operations use `"use server"` directive
- Use `createClient()` from `lib/db/server.ts` for server-side Supabase
- Export action types alongside functions for UI components

**Supabase Clients**:
- `lib/db/server.ts` - Server components (uses cookies)
- `lib/db/client.ts` - Client components (browser)
- `lib/db/service-role.ts` - Admin operations (webhooks)
- `lib/db/middleware.ts` - Auth middleware

**Theming** (`app/globals.css`):
- Tailwind v4 with `@theme inline` configuration (no tailwind.config.js)
- Dojo dark theme activated by `.dojo` class on root element
- CSS variables: `--dojo-cyan`, `--dojo-bg`, `--dojo-text`, etc.
- Utility classes: `.dojo-card`, `.dojo-btn-primary`, `.dojo-glow`

**Components**:
- UI primitives in `components/ui/` (shadcn/ui pattern)
- Marketing components in `app/(marketing)/marketing-*.tsx`
- Animation components use `motion` library (Framer Motion)

### Polar Integration
- Webhook handler: `app/api/webhook/polar/route.ts`
- Products fetched via `polarApi` from `lib/polar.ts`
- Subscriptions stored in Supabase `subscriptions` table

## Supabase/Postgres Guidelines

**Migrations** (in `supabase/migrations/`):
- Filename format: `YYYYMMDDHHmmss_description.sql`
- Always enable RLS on new tables
- Create separate policies for each operation (select, insert, update, delete)
- Use `(select auth.uid())` not bare `auth.uid()` for performance

**Functions**:
- Default to `SECURITY INVOKER`
- Always set `search_path = ''`
- Use fully qualified table names (`public.table_name`)

**SQL Style**:
- Lowercase keywords
- snake_case for identifiers
- Plural table names, singular column names
- Always add table comments

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
POLAR_ACCESS_TOKEN=
POLAR_WEBHOOK_SECRET=
```
