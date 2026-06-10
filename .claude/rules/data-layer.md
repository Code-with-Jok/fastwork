# Data Layer

All mock data lives in `src/data/`. There is no API — everything is static Vietnamese construction figures (VND in tỷ/triệu).

- `mockData.ts` — dashboard page data (KPI, charts, debt, tables, project progress)
- `financeData.ts` — finance page data (Sankey flows, debt progress, cash flow timeseries)
- `contractData.ts` — contract page data (KPI, overview bars, top-projects chart, pie chart, contract table)
- `materialData.ts` — material page data (budget summary, import/export trend, top-10 materials, purchase treemap, demand table)
- `projectListData.ts` — project list page data (`ProjectListItem[]` shown on `/insight/project`)
- `projectDetailData.ts` — per-project detail data; `getProjectDetail(id)` looks up a `ProjectDetail` by id, plus `formatMoneyVN()` and `STATUS_STYLES` helpers used across project detail tabs
- `galleryData.ts` — construction photo gallery data (`galleryGroups`, grouped by date)
