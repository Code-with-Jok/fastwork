---
name: add-insight-page
description: Use when adding a new "Insight" dashboard page to FastCons (e.g. a new menu item like "Tiến độ thi công" or "Hình ảnh thi công"). Scaffolds the data file, card/chart/table components, the route page, and the sidebar entry following the existing contract/material/finance page conventions.
---

# Add Insight Page

Scaffolds a new `/insight/<name>` page following the conventions of the
existing `contract`, `material`, and `finance` insight pages.

## Steps

1. **Data file** — `src/data/<name>Data.ts`
   - Export typed `interface`s for each data shape, then `const` mock data
     (Vietnamese construction figures, VND in tỷ/triệu).
   - No API calls — everything is static, matching `materialData.ts` /
     `contractData.ts`.

2. **Components** — `src/components/<name>/*.tsx`
   - One component per card/chart/table (e.g. `XxxKpiCards.tsx`,
     `XxxPieChart.tsx`, `XxxDataTable.tsx`).
   - Every file starts with `'use client';`.
   - Style via inline `style` props, not Tailwind classes. Reuse the
     existing token palette:
     - Card background `#fff`, border `1px solid #e8ecf0`, `borderRadius: 8`
     - Highlight/KPI card background `#0B3175` (primary blue), white text
     - Accent teal `#17B799`, accent orange `#f7921e`
     - Standard card padding `'16px 20px'` or `'20px 22px'`
   - Charts use Recharts 3.x — follow the Tooltip `formatter` typing rules
     and `PieLabelRenderProps` guards documented in `CLAUDE.md`.
   - Pull data from the new `src/data/<name>Data.ts` file.

3. **Page** — `src/app/insight/<name>/page.tsx`
   - `'use client';` at the top.
   - Wrap everything in `<AppLayout activeMenu="<name>" pageTitle="...">`.
   - Lay out sections with CSS grid via inline styles
     (`display: 'grid', gridTemplateColumns: ..., gap: 14, marginBottom: 14`),
     matching the row structure in `src/app/insight/material/page.tsx`.

4. **Sidebar entry** — `src/components/layout/Sidebar.tsx`
   - Add an entry to the `menuItems` array: `{ key: '<name>', icon:
     <SomeOutlined />, label: '<Vietnamese label>', href: '/insight/<name>' }`.
   - Pick an unused icon from `@ant-design/icons` and add it to the import list.
   - `key` must match the `activeMenu` prop passed to `AppLayout` on the new page.

5. **Verify**
   - `npx tsc --noEmit` — must pass with no new errors.
   - `eslint .` — must pass (next lint is removed; run eslint directly).
   - Run `/run` (or `npm run dev`) and visually check the new page and the
     active sidebar highlight at `http://localhost:3000/insight/<name>`.

## Reference files

- `src/app/insight/material/page.tsx` — most recent example of the full pattern
- `src/data/materialData.ts` — data file shape
- `src/components/material/` — component conventions
- `src/components/layout/Sidebar.tsx` — menu registration
