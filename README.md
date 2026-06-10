# FastCons - Insight

A Vietnamese construction SaaS dashboard built with [Next.js 16](https://nextjs.org) (App Router), React 19, [Ant Design 6](https://ant.design), [Recharts 3](https://recharts.org), and Tailwind CSS 4.

All data shown is static mock data (Vietnamese construction figures, VND in tỷ/triệu) under `src/data/` — there is no backend/API.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npx tsc --noEmit` | Type-check without emitting |
| `eslint .` | Lint the project |

## Pages

| Route | Description |
| --- | --- |
| `/` | Tổng quan — main dashboard |
| `/insight/finance` | Theo dõi tài chính — finance tracking |
| `/insight/contract` | Theo dõi HĐ nhận thầu — contract tracking |
| `/insight/material` | Cung ứng vật tư — material supply |
| `/insight/project` | Tiến độ thi công — project list |
| `/insight/project/[id]` | Per-project detail (tabbed) |
| `/insight/gallery` | Hình ảnh thi công — construction photo gallery |

## Project structure

- `src/app/` — Next.js App Router pages, one per route above
- `src/components/layout/` — shared `AppLayout`, `Sidebar`, `Header`
- `src/components/<feature>/` — cards, charts, and tables grouped by page (`dashboard`, `finance`, `contract`, `material`, `projectprogress`, `gallery`)
- `src/data/` — static mock data per page

## Development notes

This project runs **Next.js 16.2.7**, which has breaking changes from 15/14 (async `params`/`searchParams`, `proxy.ts` instead of `middleware.ts`, Turbopack by default, etc.). See `AGENTS.md` and `CLAUDE.md` / `.claude/rules/` for the full set of conventions used in this codebase before making changes.
