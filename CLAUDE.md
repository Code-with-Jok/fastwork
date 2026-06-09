# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (Turbopack, http://localhost:3000)
npm run build     # Production build (also uses Turbopack by default)
npm run start     # Start production server
npx tsc --noEmit  # Type-check without emitting
eslint .          # Lint (next lint was removed in v16 — use eslint directly)
```

No test framework is configured in this project.

## Architecture

**FastCons - Insight** is a Vietnamese construction SaaS dashboard built with Next.js 16 App Router.

### Route structure

```
src/app/
  page.tsx                    → / (Tổng quan / main dashboard)
  insight/finance/page.tsx    → /insight/finance (Theo dõi tài chính)
```

Each page imports `AppLayout` which wraps content with the fixed sidebar + header. Pass `activeMenu` (matches sidebar key) and `pageTitle` props.

### Shared layout system

`AppLayout` (`src/components/layout/AppLayout.tsx`) manages sidebar collapse state and renders `Sidebar` + `Header` + a content `<Layout.Content>`. All pages use this — do not embed sidebar/header directly in pages.

`Sidebar` uses `useRouter()` for navigation and accepts `activeKey` to highlight the current menu item. Menu keys: `dashboard`, `finance`, `contract`, `material`, `progress`, `photos`.

### Data layer

All mock data lives in `src/data/`. There is no API — everything is static Vietnamese construction figures (VND in tỷ/triệu).

- `mockData.ts` — dashboard page data (KPI, charts, debt, tables, project progress)
- `financeData.ts` — finance page data (Sankey flows, debt progress, cash flow timeseries)

### Chart components

Uses **Recharts 3.x** for all charts. Key patterns:
- Tooltip `formatter` props must accept `ValueType | undefined`, not a typed `number` — always use `(v) => [String(Number(v)...)]` or `(v) => [...]` without typing the parameter.
- `Sankey` nodes/links are zero-indexed arrays; custom node/link renderers are typed via the generic parameter cast: `node={MyNode as Parameters<typeof Sankey>[0]['node']}`.
- `PieLabelRenderProps` from recharts — all fields are `number | string | undefined`; guard before arithmetic.

### Ant Design setup

antd 6.x is transpiled via `transpilePackages` in `next.config.ts` (required for App Router SSR compatibility). All components must include `'use client'` since antd uses browser APIs.

### Styling approach

Tailwind CSS is imported in `globals.css` (`@import "tailwindcss"`) but styling is done almost entirely via inline `style` props to match the pixel-accurate design spec. Tailwind utility classes are used sparingly (layout helpers only). The design token reference is the DOM tree/color spec in the user's design notes — sidebar `#101924`, active item `#182536`, primary blue `#0B3175`, accent teal `#17B799`.

## Next.js 16 — Critical Breaking Changes

This project runs **Next.js 16.2.7** (not 15 or 14). Key differences from earlier versions:

- **`cookies()`, `headers()`, `params`, `searchParams` are async** — must be `await`ed. No synchronous access.
- **`next lint` is removed** — run `eslint` directly.
- **`middleware.ts` is renamed to `proxy.ts`** — export function named `proxy`, not `middleware`. The `edge` runtime is not supported in `proxy`.
- **Turbopack is default** for both `next dev` and `next build`. Custom webpack config will break builds — use `--webpack` flag to opt out.
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed** — use `process.env` and `NEXT_PUBLIC_` prefix.
- **`experimental.ppr` removed** — use `cacheComponents: true` instead.
- **`revalidateTag` requires a second `cacheLife` argument** — e.g. `revalidateTag('key', 'max')`.
- **Parallel routes require explicit `default.js`** — builds fail without them.
- **`devIndicators` options `appIsrStatus`, `buildActivity`, `buildActivityPosition` removed.**
- `next dev` outputs to `.next/dev` (separate from `.next/` used by build).

Read `node_modules/next/dist/docs/` for the full reference before adding new Next.js features.
