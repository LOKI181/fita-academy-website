<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# FITA Academy Website — Project Handoff (Updated 2026-09-09)

## IMPORTANT: This is the ACTIVE project location
**Work from this directory ONLY:** `C:\Users\nloki\OneDrive\Desktop\PortFolio ideas\.agents\fita-academy-website`

The original at `Fita\fita-academy-website` is a READ-ONLY reference copy. Do NOT touch it.

## Project Overview
FITA Academy (Focus'd IT Academy) — Chennai's IT training & placement institute.
Full-stack Next.js website with public marketing pages + role-based dashboards.

## Stack
- Next.js 16.3.4 (App Router, RSC) + React 19.2.8 + TypeScript strict
- Tailwind CSS v4 (Tailwind v4, NOT v3 — use `@theme inline`)
- shadcn/ui (26 components in `src/components/ui/`)
- framer-motion ^13.2.0 (src/components/motion/)
- jose (JWT auth) + bcryptjs (password hash)
- nodemailer (email, SMTP-based)
- zod ^4.5.4 (validation — note v4 API not v3)
- vitest ^5 (tests in src/*.test.ts)
- lucide-react icons

## Live URLs
- Production: https://fita-academy-website.vercel.app
- GitHub: https://github.com/LOKI181/fita-academy-website (branch: main)
- Vercel project: fita-academy-website (token available, use `npx vercel --prod --token ...`)

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (MUST pass before any commit)
- `npm run lint` — eslint (must be 0 errors)
- `npm run typecheck` — tsc --noEmit (must be clean)
- `npm run test` — vitest run (3 tests)
- `npm install` uses `--legacy-peer-deps` (see .npmrc)

## Architecture
```
src/
  app/              → All routes (20+ pages, 13 API routes)
  components/ui/    → shadcn primitives
  components/site/  → Header, Footer, forms, search, auth-nav
  components/motion/→ framer-motion components (FadeIn, TiltCard, etc.)
  components/dashboard/ → student/trainer/admin dashboards
  sections/home/    → 13 homepage sections
  lib/              → types, content, auth, store, mail, recommend, rate-limit, utils
```

## Data Layer
- `src/lib/content.ts` — ALL content (12 courses, 10 branches, 8 trainers, reviews, resources)
- `src/lib/store.ts` — file-based store (`.data/store.json`), users/enrollments/certificates
- **CAVEAT:** File storage is NOT persistent on Vercel serverless. Needs DB (Vercel KV/Turso) for production.

## Auth
- JWT (jose HS256) in httpOnly cookie `fita_session`
- 3 roles: student / trainer / admin (requireUser, requireRole guards)
- Admin registration gated by `FITA_ADMIN_SETUP_KEY`

## Env Vars (NOT configured — app uses fallbacks)
| Vars | Status |
|------|--------|
| FITA_JWT_SECRET | ⚠️ Hardcoded fallback — MUST set in Vercel |
| FITA_ADMIN_SETUP_KEY | ⚠️ Hardcoded fallback — MUST set |
| SMTP_HOST/USER/PASS | ❌ not set — emails silently skip |
| RAZORPAY keys | ❌ demo mode |
| CRM_WEBHOOK_URL | ❌ not set |

## Vercel Deploy
Token is stored locally in the agent environment (env var). Do NOT commit tokens to this repo.
```
npx vercel --prod --token $env:VERCEL_TOKEN
```

## Current Status (2026-09-09)
✅ All Phases A-H complete:
- 20+ public pages, 13 API routes, 3 dashboards
- Auth, payments (demo), certificates (/verify/[id]), AI career assistant
- Security middleware, rate limiting, error boundaries
- 4 commits, clean git tree, deployed on Vercel

## GitHub Deploy
```
git add -A; git commit -m "msg"; git push origin main
```

## Known Improvements (not yet done)
1. Set FITA_JWT_SECRET + FITA_ADMIN_SETUP_KEY in Vercel
2. Add real database (Vercel KV / Turso / Prisma + Postgres)
3. Configure SMTP (Gmail app password) or Resend
4. Add Razorpay live keys
5. Add Google Analytics (NEXT_PUBLIC_GA_ID)
6. Add dark mode toggle (next-themes already installed)
7. Add OG images, breadcrumbs, CI/CD
8. More unit/e2e tests
