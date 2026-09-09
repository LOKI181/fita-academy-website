# FITA Academy Website — Project Context for AI Agents

## Project Overview
FITA Academy (Focus'd IT Academy) — Chennai's IT training & placement institute.
Full-stack Next.js 16 website with public marketing pages + role-based dashboards.

## Stack
- Next.js 16.3.4 (App Router, RSC) + React 19.2.8 + TypeScript strict
- Tailwind CSS v4 (Tailwind v4, NOT v3 — use `@theme inline`)
- shadcn/ui (26 components in `src/components/ui/`)
- framer-motion ^13.2.0 (src/components/motion/)
- jose (JWT auth) + bcryptjs (password hash)
- nodemailer (email, SMTP-based) + Resend (transactional)
- zod ^4.5.4 (validation — note v4 API not v3)
- vitest ^5 (tests in src/*.test.ts)
- lucide-react icons

## Architecture
```
src/
  app/              → All routes (20+ pages, 13 API routes)
  components/ui/    → shadcn primitives
  components/site/  → Header, Footer, forms, search, auth-nav
  components/motion/→ framer-motion components (FadeIn, TiltCard, etc.)
  components/dashboard/ → student/trainer/admin dashboards
  components/json-ld/ → JSON-LD structured data components
  sections/home/    → 13 homepage sections
  lib/              → types, content, auth, store, mail, recommend, rate-limit, utils
```

## Key Libraries
- `src/lib/supabase.ts` — Server Supabase client (service role)
- `src/lib/supabase-client.ts` — Browser Supabase client (anon key)
- `src/lib/store.ts` — Supabase-backed data access (enquiries, enrollments, certificates)
- `src/lib/auth.ts` — JWT auth with jose (HS256), 3 roles
- `src/lib/mail.ts` — Resend email sending (enquiry notifications, confirmations)
- `src/lib/content.ts` — All static content (courses, branches, trainers, etc.)
- `src/lib/types.ts` — TypeScript definitions

## API Routes (13)
- `/api/auth/login` — User login
- `/api/auth/register` — User registration (admin gated)
- `/api/auth/session` — Session check
- `/api/enquiries` — Form submissions (Zod, rate limit, Supabase, Resend)
- `/api/enroll` — Course enrollment (auth required)
- `/api/payment` — Razorpay order create + verify (demo + live)
- `/api/recommend` — AI career recommendation engine
- `/api/certificates` — Issue certificates (admin)
- `/api/certificates/[id]` — Public certificate verification
- `/api/dashboard/admin` — Admin dashboard data
- `/api/dashboard/student` — Student dashboard data
- `/api/dashboard/trainer` — Trainer dashboard data

## Auth
- JWT (jose HS256) in httpOnly cookie `fita_session`
- 3 roles: student / trainer / admin
- Guards: `requireUser`, `requireRole`
- Admin registration requires `FITA_ADMIN_SETUP_KEY` header

## Data Layer
- **Supabase (PostgreSQL)** — Primary database
- Tables: `enquiries`, `enrollments`, `certificates`, `users`
- File store fallback removed — all data in Supabase
- RLS enabled, service role bypasses for server operations

## Email
- Resend for transactional emails
- `/api/enquiries` sends: owner notification + user confirmation
- Templates in `src/lib/mail.ts`

## Payments
- Razorpay integration (test mode by default)
- Demo mode works without real keys
- Live mode: `NEXT_PUBLIC_RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET`

## SEO
- `src/app/robots.ts` — robots.txt generation
- `src/app/sitemap.ts` — sitemap.xml generation (69 URLs)
- JSON-LD components: LocalBusiness, Course, Service, Breadcrumb

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (MUST pass before any commit)
- `npm run lint` — eslint (must be 0 errors)
- `npm run typecheck` — tsc --noEmit (must be clean)
- `npm run test` — vitest run (3 tests)

## Environment Variables (All in .env.local)
```
FITA_JWT_SECRET, FITA_ADMIN_SETUP_KEY
NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY, EMAIL_FROM, EMAIL_TO_OWNER
NEXT_PUBLIC_RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
```

## Deployment
- Vercel project: fita-academy-website
- Custom domain: configure in Vercel + Cloudflare DNS
- Production Supabase: separate project from dev

## Conventions
- Server components by default, `'use client'` for interactive
- shadcn/ui primitives for all form/input components
- Framer Motion for animations, respect `prefers-reduced-motion`
- Zod for all validation
- TypeScript strict mode, no `any`