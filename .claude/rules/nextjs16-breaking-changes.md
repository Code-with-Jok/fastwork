# Next.js 16 — Critical Breaking Changes

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
