<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# FastCons - Insight

A Vietnamese construction SaaS dashboard built with Next.js 16 (App Router), React 19, Ant Design 6, Recharts 3, and Tailwind CSS 4. All data is static mock data under `src/data/` (VND figures in tỷ/triệu) — there is no backend/API.

## Commands

```bash
npm run dev       # Start dev server (Turbopack, http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npx tsc --noEmit  # Type-check without emitting
eslint .          # Lint (run eslint directly — `next lint` was removed in v16)
```

## Routes

| Route | Page | Vietnamese label |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Tổng quan |
| `/insight/finance` | `src/app/insight/finance/page.tsx` | Theo dõi tài chính |
| `/insight/contract` | `src/app/insight/contract/page.tsx` | Theo dõi HĐ nhận thầu |
| `/insight/material` | `src/app/insight/material/page.tsx` | Cung ứng vật tư |
| `/insight/project` | `src/app/insight/project/page.tsx` | Tiến độ thi công |
| `/insight/project/[id]` | `src/app/insight/project/[id]/page.tsx` | Project detail (tabbed) |
| `/insight/gallery` | `src/app/insight/gallery/page.tsx` | Hình ảnh thi công |

For detailed conventions (data layer, chart patterns, styling tokens, Next.js 16 breaking changes), see `CLAUDE.md` and `.claude/rules/`.
