# Ant Design & Styling

## Ant Design setup

antd 6.x is transpiled via `transpilePackages` in `next.config.ts` (required for App Router SSR compatibility). All components must include `'use client'` since antd uses browser APIs.

## Styling approach

Tailwind CSS is imported in `globals.css` (`@import "tailwindcss"`) but styling is done almost entirely via inline `style` props to match the pixel-accurate design spec. Tailwind utility classes are used sparingly (layout helpers only). The design token reference is the DOM tree/color spec in the user's design notes — sidebar `#101924`, active item `#182536`, primary blue `#0B3175`, accent teal `#17B799`.
