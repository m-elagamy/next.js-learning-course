# Copilot Instructions for nextjs-dashboard

## Project Overview

- This is a Next.js 14+ dashboard app using the App Router, TypeScript, and Tailwind CSS.
- The main UI and logic are in the `app/` directory, with subfolders for feature areas (dashboard, customers, invoices).
- Shared UI components are in `app/ui/`, organized by feature.
- Data and utility functions are in `app/lib/`.

## Architecture & Patterns

- **App Router**: Uses file-based routing in `app/`, with nested layouts and pages (see `app/layout.tsx`, `app/dashboard/layout.tsx`).
- **Feature Structure**: Each feature (e.g., customers, invoices) has its own folder under `app/dashboard/` and `app/ui/`.
- **Data Layer**: Data is mocked in `app/lib/placeholder-data.ts` and shaped by TypeScript types in `app/lib/definitions.ts`.
- **API Routes**: Custom API logic is in `app/query/route.ts` and `app/seed/route.ts`.
- **Styling**: Uses Tailwind CSS (`tailwind.config.ts`, `postcss.config.js`). Global styles in `app/ui/global.css`.

## Developer Workflows

- **Install dependencies**: `pnpm install`
- **Run dev server**: `pnpm dev` (or `pnpm next dev`)
- **Build for production**: `pnpm build`
- **Lint**: `pnpm lint`
- **No test suite is present by default.**

## Conventions & Practices

- **TypeScript everywhere**: All code is typed; see `tsconfig.json` and `next-env.d.ts`.
- **Component organization**: UI components are grouped by feature in `app/ui/`.
- **Data flow**: Pages and components import from `app/lib/data.ts` and `app/lib/placeholder-data.ts`.
- **Routing**: Use Next.js file-based routing and nested layouts for page structure.
- **No custom state management**: Data is passed via props or imported directly.
- **No backend/database integration by default**: All data is local/mocked.

## External Integrations

- **Next.js**: Core framework.
- **Tailwind CSS**: Utility-first styling.
- **pnpm**: Package manager.

## Examples

- To add a new dashboard feature, create a folder in `app/dashboard/` and a matching UI component folder in `app/ui/dashboard/`.
- To add a new API route, create a file in `app/{feature}/route.ts`.
- To update data types, edit `app/lib/definitions.ts`.

---

For more details, see the [Next.js App Router docs](https://nextjs.org/docs/app/building-your-application/routing).
