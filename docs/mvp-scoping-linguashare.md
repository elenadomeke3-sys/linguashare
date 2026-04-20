# MVP Scoping — LinguaShare

**Data:** 16 marca 2026

---

## Cel Dokumentu

Celem tego dokumentu jest zdefiniowanie minimalnego zakresu funkcji (MVP - Minimum Viable Product) dla platformy LinguaShare, z priorytetami i uzasadnieniem.

---

## 1. MVP Definition

### 1.1 Co to jest MVP?

**MVP LinguaShare** = Minimalny produkt, który rozwiązuje główny problem użytkowników i pozwala na walidację biznesu.

**Primary Job to Be Done:**
> "Chcę szybko znaleźć i pobrać wysokiej jakości materiały dydaktyczne bez szukania po całym internecie."

### 1.2 Co NIE jest w MVP?

| Feature | Reason for exclusion |
|---------|---------------------|
| AI Plagiarism Check | Zaawansowane, kosztowne |
| Team Tier | B2B - później |
| Watermarking | Wymaga infrastruktury |
| Download tracking (IP) | Privacy concerns |
| Badge system | Może być manualnie |
| Collections (złożone) | Tylko podstawowe |
| Export integrations | API - później |
| Messaging | Community - później |

---

## 2. MVP Features - Must Have

### 2.1 Authentication

| Feature | Opis | Priority |
|---------|------|----------|
| Email signup/login | Rejestracja przez email + hasło | Must Have |
| Social login | Google, optional | Should Have |
| Password reset | Flow resetowania hasła | Must Have |
| Profile page | Name, bio, avatar | Should Have |

### 2.2 Material Catalog

| Feature | Opis | Priority |
|---------|------|----------|
| Browse materials | Lista materiałów z paginacją | Must Have |
| Search | Full-text search po tytule, opisie | Must Have |
| Filters | Język, poziom, typ materiału | Must Have |
| Sort | Najnowsze, najpopularniejsze | Should Have |
| Material detail | Podgląd materiału (PDF viewer/link) | Must Have |
| Download | Pobieranie pliku z liczeniem limitu | Must Have |
| Download counter | Enforcement: 3 pobrania/miesiąc dla Free | Must Have |

### 2.3 Material Upload

| Feature | Opis | Priority |
|---------|------|----------|
| Upload form | Wgrywanie pliku (PDF, DOCX, obrazki) | Must Have |
| Auto-tagging | Automatyczne tagi na podstawie tytułu (level, type) | Must Have |
| Manual tagging | Ręczne tagi (język, poziom, typ) | Must Have |
| Title + description | Podstawowe metadane | Must Have |
| Preview | Podgląd przed publikacją | Should Have |

### 2.4 Moderacja i Anty-Troll (MVP)

| Feature | Opis | Priority |
|---------|------|----------|
| File validation | Sprawdzenie formatu (PDF, DOCX, JPG, PNG) i rozmiaru | Must Have |
| CAPTCHA | Ochrona przed botami przy uploadzie | Must Have |
| Upload limits | Limit 5 uploadów/dzień dla nowych użytkowników | Must Have |
| Report system | Zgłaszanie nieodpowiednich materiałów | Should Have |
| Manual review queue | Kolejka do ręcznej weryfikacji (10% losowo) | Should Have |
| Content filter | Podstawowa walidacja zawartości | Could Have |

### 2.5 Rating System

| Feature | Opis | Priority |
|---------|------|----------|
| Star rating | 1-5 gwiazdek | Must Have |
| Rating display | Widoczna średnia ocena | Must Have |
| Leave rating | Oddanie głosu (tylko po pobraniu) | Should Have |
| Comment | Opcjonalny komentarz | Could Have |

### 2.5 Basic Freemium

| Feature | Opis | Priority |
|---------|------|----------|
| Free tier | 3 pobrania/miesiąc | Must Have |
| Premium tier | Bez limitu pobrań | Must Have |
| Upgrade CTA | Prominent upgrade button | Must Have |

---

## 3. MVP Features - Should Have (Minimal)

| Feature | Opis | Priority |
|---------|------|----------|
| Material author | Widoczny autor materiału | Should Have |
| Author profile | Strona profilowa autora | Could Have |
| User dashboard | Moje materiały, pobrania | Could Have |
| Basic collections | max 3 kolekcje na Free | Could Have |

---

## 4. MVP Features - Nice to Have (Wersja 1.1+)

Te funkcje zostaną dodane po walidacji MVP:

| Feature | Opis |
|---------|------|
| Credit system | Give-to-get |
| Collections (full) | Nieograniczone kolekcje |
| AI check | Plagiarism detection |
| Watermark | Automatyczny watermark |
| Team tier | B2B |
| Export | Google Classroom, Quizlet |

---

## 5. User Flows - MVP

### 5.1 Flow: Find & Download (Free User)

```
1. Landing → Browse/Search
2. Filter materials
3. View material detail
4. Check rating (1-5 stars)
5. Click "Download" → [LIMIT: 3/month]
   IF limit NOT reached:
     → Download starts
     → Count as 1 download
   ELSE:
     → Show "Upgrade to Premium" CTA
```

### 5.2 Flow: Upload Material

```
1. Click "Add Material"
2. Upload file (drag & drop)
3. Enter title
4. Select tags (language, level, type)
5. Add description (optional)
6. Preview
7. Click "Publish"
8. Material appears in catalog
```

### 5.3 Flow: Upgrade to Premium

```
1. Click "Upgrade" (banner or profile)
2. View pricing page
3. Select plan (Monthly/Yearly)
4. Redirect to Stripe Checkout
5. Complete payment
6. Redirect back → Premium activated
7. Unlimited downloads enabled
```

---

## 6. Technical MVP Scope

### 6.1 Backend

| Component | MVP Scope |
|-----------|-----------|
| Database | PostgreSQL z Prisma |
| Auth | Supabase Auth lub Clerk |
| Storage | Supabase Storage (pliki) |
| Search | PostgreSQL full-text |
| Payments | Stripe Checkout |
| Email | Resend lub SendGrid |

### 6.2 Frontend

| Component | MVP Scope |
|-----------|-----------|
| Pages | Landing, Browse, Material Detail, Auth, Profile, Pricing |
| Components | Material Card, Filter Panel, Upload Form, Rating Widget |
| State | Zustand lub React Context |
| Forms | React Hook Form + Zod |

### 6.3 Integrations

| Integration | MVP Scope |
|-------------|-----------|
| Stripe | Checkout only (no portal) |
| Google Auth | Optional |
| Sentry | Error tracking |
| Posthog | Analytics (free tier) |

---

## 7. MVP Milestones

| Milestone | Opis | Tydzień |
|-----------|------|---------|
| M1 | Basic auth + landing | 1-2 |
| M2 | Material catalog + search + filters | 3-4 |
| M3 | Material upload + detail view | 5-6 |
| M4 | Rating system | 7 |
| M5 | Basic freemium + upgrade flow | 8 |
| M6 | Testing + bug fixes | 9 |
| M7 | Deploy + soft launch | 10 |

**Total MVP Timeline:** ~10 tygodni (solo dev)

---

## 8. MVP vs Full Product Comparison

| Feature | MVP | Full |
|---------|-----|------|
| Browse + Search | ✅ | ✅ |
| Filters (basic) | ✅ | ✅ |
| Upload materials | ✅ | ✅ |
| Rating (stars) | ✅ | ✅ |
| Comments | ❌ | ✅ |
| User profiles (full) | ❌ | ✅ |
| Collections | Basic | Full |
| Credit system | ❌ | ✅ |
| Team tier | ❌ | ✅ |
| AI plagiarism | ❌ | ✅ |
| Watermark | ❌ | ✅ |
| API | ❌ | ✅ |
| Mobile app | ❌ | ✅ |

---

## 9. MVP Success Metrics

| Metric | Target |
|--------|--------|
| Time to first download | < 5 min |
| % users who download | > 50% |
| Downloads per user (month) | > 3 |
| Uploads per user (month) | > 0.5 |
| Free → Premium conversion | > 3% |
| Retention (30-day) | > 40% |

---

## 10. Ryzyka MVP

| Ryzyko | Mitigation |
|--------|------------|
| Zbyt wiele funkcji | Radical cutting - max 10 features |
| Za długi development | 10 tygodni max, ship then iterate |
| Poor quality | Focus on core UX |
| No users | Pre-launch community building |

---

## 11. Checklist MVP Scope

### 11.1 Auth
- [ ] Email signup/login
- [ ] Password reset
- [ ] Profile page (basic)

### 11.2 Catalog
- [ ] Browse materials
- [ ] Search (full-text)
- [ ] Filters (language, level, type)
- [ ] Sort (newest, popular)
- [ ] Material detail page
- [ ] Download button

### 11.3 Upload
- [ ] Upload form
- [ ] File upload (PDF, DOCX, images)
- [ ] Manual tagging
- [ ] Preview before publish

### 11.4 Ratings
- [ ] Display star rating
- [ ] Average rating calculation
- [ ] Leave rating (after download)

### 11.5 Payments
- [ ] Pricing page
- [ ] Stripe Checkout
- [ ] Premium access control
- [ ] Download limit enforcement

### 11.6 General
- [ ] Landing page
- [ ] Mobile responsive
- [ ] Error handling
- [ ] Basic analytics

---

## 12. Wnioski

**MVP Scope Summary:**
- Max 10 funkcji core
- Timeline: ~10 tygodni
- Skupienie: Find + Download + Rate
- Nie: AI, Teams, watermarks, comments

**Zasada:** "Done is better than perfect" - ship MVP, iterate based on feedback.

---

*Dokument utworzony w ramach metodyki Architekt Biznesu SaaS — MVP Scoping workflow*
