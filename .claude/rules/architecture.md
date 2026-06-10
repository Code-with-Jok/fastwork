# Architecture

**FastCons - Insight** is a Vietnamese construction SaaS dashboard built with Next.js 16 App Router.

## Route structure

```
src/app/
  page.tsx                          → / (Tổng quan / main dashboard)
  insight/finance/page.tsx          → /insight/finance (Theo dõi tài chính)
  insight/contract/page.tsx         → /insight/contract (Theo dõi HĐ nhận thầu)
  insight/material/page.tsx         → /insight/material (Cung ứng vật tư)
  insight/project/page.tsx          → /insight/project (Tiến độ thi công — project list)
  insight/project/[id]/page.tsx     → /insight/project/:id (per-project detail, tabbed)
  insight/gallery/page.tsx          → /insight/gallery (Hình ảnh thi công)
```

Each page imports `AppLayout` which wraps content with the fixed sidebar + header. Pass `activeMenu` (matches sidebar key) and `pageTitle` props.

The `[id]` project detail route is a client component (`'use client'`) and reads the route param via `useParams<{ id: string }>()` from `next/navigation`, not the async `params` prop — no `await` needed since there's no server-side data fetching.

## Shared layout system

`AppLayout` (`src/components/layout/AppLayout.tsx`) manages sidebar collapse state and renders `Sidebar` + `Header` + a content `<Layout.Content>`. All pages use this — do not embed sidebar/header directly in pages.

`Sidebar` uses `useRouter()` for navigation and accepts `activeKey` to highlight the current menu item. Menu keys: `dashboard`, `finance`, `contract`, `material`, `progress`, `photos` (defined in `menuItems` in `src/components/layout/Sidebar.tsx`).

## Adding a new Insight page

Use the `add-insight-page` skill (`.claude/skills/add-insight-page/SKILL.md`) — it scaffolds the data file, components, route page, and sidebar entry following the conventions in [data-layer.md](data-layer.md), [charts.md](charts.md), and [ui-styling.md](ui-styling.md). `src/app/insight/material/page.tsx` is the most complete reference example.
