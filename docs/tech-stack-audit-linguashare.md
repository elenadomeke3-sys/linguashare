# Tech Stack Audit — LinguaShare

**Data:** 16 marca 2026

---

## Cel Dokumentu

Celem tego dokumentu jest rekomendacja stacku technologicznego dla projektu LinguaShare, analiza ryzyk technicznych i checklist przed deployem MVP.

---

## 1. Rekomendowany Tech Stack

### 1.1 Frontend

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| **Framework** | Next.js 14 (App Router) | SEO-friendly, server-side rendering, React |
| **Styling** | Tailwind CSS | Szybki development, consistency |
| **UI Components** | shadcn/ui | Gotowe komponenty, accessible |
| **State Management** | Zustand | Prosty, lekki |
| **Forms** | React Hook Form + Zod | Validation, type-safe |
| **Animations** | Framer Motion | Smooth interactions |

### 1.2 Backend

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| **Framework** | Next.js API Routes lub Server Actions | Full-stack, keeps it simple |
| **Database** | PostgreSQL (Supabase) | Relacyjne dane, Supabase = Postgres + Auth + Storage |
| **ORM** | Prisma lub Drizzle | Type-safe database access |
| **Authentication** | Supabase Auth lub Clerk | Gotowe rozwiązanie, social login |
| **File Storage** | Supabase Storage lub AWS S3 | Pliki użytkowników |
| **Search** | Algolia lub pg_search | Full-text search |

### 1.3 DevOps & Infrastructure

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| **Hosting** | Vercel | Native Next.js support, CDN |
| **CDN** | Vercel Edge Network | Global delivery |
| **Database Hosting** | Supabase lub Neon | Serverless PostgreSQL |
| **CI/CD** | GitHub Actions | Automated testing & deploy |
| **Monitoring** | Sentry | Error tracking |
| **Analytics** | Posthog lub Plausible | Product analytics |

### 1.4 Payments

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| **Payments** | Stripe | Standard for SaaS |
| **Subscription Management** | Stripe Billing | Recurring payments |
| **Invoicing** | Stripe Invoicing | Fakturowanie |

---

## 2. Alternatywne Stacki

### 2.1 No-Code / Low-Code (dla MVP)

| Platforma | Zalety | Wady |
|-----------|--------|------|
| **Bubble** | Szybki MVP, visual | Drogi przy skali, ograniczenia |
| **Flutterflow** | Mobile-first | Tylko mobile |
| **Softr** | Airtable + membership | Ograniczone |

**Rekomendacja:** Tylko jeśli MVP ma być proof-of-concept bez ambicji skalowania. Dla prawdziwego SaaS - kod.

### 2.2 Inne opcje

| Stack | Kiedy użyć |
|-------|------------|
| **Next.js + Supabase** | ✅ Rekomendowany dla większości przypadków |
| **Remix + Railway** | Jeśli wolisz Remix |
| **Django + PostgreSQL** | Jeśli preferujesz Python |
| **Laravel + MySQL** | Jeśli wolisz PHP |

---

## 3. Szacunkowe Koszty (Month 1-12)

| Usługa | Miesiąc 1-3 | Miesiąc 4-12 | Rocznie |
|--------|-------------|--------------|--------|
| **Vercel Pro** | $20 | $20 | $240 |
| **Supabase Pro** | $25 | $50 | $450 |
| **Stripe** | $0 (do $1k) | 2% revenue | zmienne |
| **Sentry** | $0 (free tier) | $0 | $0 |
| **Domeny** | $10 | $10 | $20 |
| **RAZEM** | **~$55-80/mies** | **~$80-100/mies** | **~$700-1000** |

---

## 4. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                             │
│   Next.js 14 (React) + Tailwind + shadcn/ui                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        API LAYER                            │
│        Next.js API Routes / Server Actions                 │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  SUPABASE     │    │   STRIPE     │    │   SEARCH      │
│  Database     │    │   Payments   │    │   Algolia     │
│  Auth         │    │               │    │               │
│  Storage      │    │               │    │               │
└───────────────┘    └───────────────┘    └───────────────┘
```

---

## 5. Database Schema (High-Level)

### 5.1 Główne Tabele

| Tabela | Opis |
|--------|------|
| **users** | Profile użytkowników |
| **materials** | Materiały dydaktyczne |
| **categories** | Kategorie (język, poziom, typ) |
| **tags** | Tagi materiałów |
| **ratings** | Oceny materiałów |
| **downloads** | Logi pobrań |
| **collections** | Kolekcje użytkowników |
| **subscriptions** | Subskrypcje premium |
| **credits** | System creditów (give-to-get) |

### 5.2 Przykładowy Schema (Prisma)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  avatar        String?
  isPremium     Boolean  @default(false)
  credits       Int      @default(3)
  createdAt     DateTime @default(now())
  materials     Material[]
  ratings       Rating[]
  collections   Collection[]
}

model Material {
  id          String   @id @default(cuid())
  title       String
  description String?
  fileUrl     String
  language    String
  level       String
  type        String
  price       Float    @default(0)
  isPremium   Boolean  @default(false)
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  ratings     Rating[]
  downloads   Download[]
  createdAt   DateTime @default(now())
}

model Rating {
  id         String   @id @default(cuid())
  stars      Int
  comment    String?
  userId     String
  materialId String
  user       User     @relation(fields: [userId], references: [id])
  material   Material @relation(fields: [materialId], references: [id])
}
```

---

## 6. Ryzyka Techniczne

| Ryzyko | Poziom | Mitygacja |
|--------|--------|----------|
| **Cold start performance** | 🟡 Średni | Optimistic UI, skeletons |
| **File upload size limits** | 🟢 Niski | Limit 10MB, client-side validation |
| **Search performance** | 🟡 Średni | Algolia lub PostgreSQL full-text |
| **Security** | 🟡 Średni | RLS w Supabase, sanitize inputs |
| **GDPR/RODO** | 🟡 Średni | Data retention policy, consent |

---

## 7. MVP Tech Checklist

### 7.1 Przed Development

- [ ] Wybrany stack (Next.js + Supabase)
- [ ] Konto Vercel + deploy pipeline
- [ ] Konto Supabase + database setup
- [ ] Stripe test account
- [ ] GitHub repo + CI/CD
- [ ] Domain purchased

### 7.2 Development

- [ ] Auth flow (signup, login, reset)
- [ ] Material upload (drag & drop)
- [ ] Material search + filters
- [ ] Material download (presigned URLs)
- [ ] Rating system
- [ ] Payment flow (Stripe Checkout)
- [ ] Email notifications

### 7.3 Przed Deploy MVP

- [ ] All tests passing
- [ ] Lighthouse score > 90
- [ ] Mobile responsive check
- [ ] Security audit (OWASP)
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Contact page / support email
- [ ] Error tracking (Sentry) setup
- [ ] Analytics (Posthog) setup
- [ ] Backup strategy defined

---

## 8. Rekomendacje Solo-Dev

| Aspekt | Rekomendacja |
|--------|--------------|
| **Start** | Next.js + Supabase + Vercel = najszybszy time-to-market |
| **Scope** | Zacznij od max 5 funkcji core |
| **Design** | Użyj shadcn/ui - gotowe, professional |
| **Payments** | Stripe Checkout (nie custom Elements) |
| **Search** | Na start PostgreSQL full-text, potem Algolia |
| **Files** | Supabase Storage - proste, tanie |

---

## 9. Wnioski

**Stack rekomendowany:** Next.js 14 + Supabase + Tailwind + Stripe

**Uzasadnienie:**
- ✅ Najszybszy development dla MVP
- ✅ Serverless = automatic scaling
- ✅ Wszystko w jednym miejscu (DB + Auth + Storage)
- ✅ Dla solo-deva: minimalny ops overhead
- ✅ Community: duże, aktywne

**Szacowany czas MVP:** 2-3 miesiące (solo dev)

---

## 10. Checklist Przed Deployem MVP

- [ ] ✅ Tech stack wybrany i skonfigurowany
- [ ] ✅ Database schema zaprojektowana
- [ ] ✅ Auth flow działa (signup, login, reset password)
- [ ] ✅ Material upload + download działa
- [ ] ✅ Search + filters działają
- [ ] ✅ Rating system działa
- [ ] ✅ Stripe integration działa (test mode)
- [ ] ✅ Mobile responsive
- [ ] ✅ Performance > 90 Lighthouse
- [ ] ✅ Privacy policy + ToS
- [ ] ✅ Error tracking + analytics

---

*Dokument utworzony w ramach metodyki Architekt Biznesu SaaS — Tech Stack Audit workflow*