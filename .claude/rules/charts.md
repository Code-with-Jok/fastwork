# Chart Components

Uses **Recharts 3.x** for all charts. Key patterns:

- Tooltip `formatter` props must accept `ValueType | undefined`, not a typed `number` — always use `(v) => [String(Number(v)...)]` or `(v) => [...]` without typing the parameter.
- `Sankey` nodes/links are zero-indexed arrays; custom node/link renderers are typed via the generic parameter cast: `node={MyNode as Parameters<typeof Sankey>[0]['node']}`.
- `PieLabelRenderProps` from recharts — all fields are `number | string | undefined`; guard before arithmetic.
