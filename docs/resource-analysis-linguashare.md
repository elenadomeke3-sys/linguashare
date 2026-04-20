# Resource Analysis — LinguaShare

**Data:** 16 marca 2026

---

## Cel Dokumentu

Celem tego dokumentu jest oszacowanie zasobów (ludzkich, finansowych, technicznych) potrzebnych do zbudowania i prowadzenia platformy LinguaShare.

---

## 1. Zasoby Ludzkie

### 1.1 Scenariusz: Solo-Dev

| Rola | Osoba | Czas |
|------|-------|------|
| Founder / CEO | Ty | Full-time |
| Developer | Ty | Full-time |
| Designer | Freelancer / Template | Part-time |
| Marketing | Ty / Freelancer | Part-time |
| Support | Ty | Part-time |

**Wymagania:**
- Umiejętności: React/Next.js, Node.js, PostgreSQL
- Alternatywa: No-code (Bubble) dla MVP

### 1.2 Scenariusz: Zespół (v2+)

| Rola | Etap | Czas |
|------|------|------|
| Full-stack developer | Growth | Full-time |
| Designer | MVP | Part-time |
| Marketing | Growth | Part-time |
| Support | Growth | Part-time |

---

## 2. Koszty Szacunkowe

### 2.1 Koszty Startup (MVP Development)

| Kategoria | Koszt (PLN) | Uwagi |
|-----------|-------------|-------|
| **Development** | | |
| - No-code (Bubble) | 1,500-3,000 | Roczna subskrypcja |
| - Custom (Next.js) | 0 (własna praca) lub 15,000-30,000 (zlecenie) | Zależy od podejścia |
| **Design** | | |
| - Template (ThemeForest) | 200-500 | Gotowy template |
| - Custom design | 3,000-10,000 | Freelancer |
| **Infrastruktura** | | |
| - Domeny | 100-200 | .com + .pl |
| **Marketing (Pre-launch)** | | |
| - FB/IG ads | 1,000 | Pre-launch |
| **Rezerwa** | 1,000 | Nieprzewidziane |
| **RAZEM** | **3,800 - 15,000** | |

### 2.2 Koszty Operacyjne (Monthly)

| Kategoria | Miesiąc 1-6 | Miesiąc 7-12 | Rocznie |
|-----------|-------------|---------------|---------|
| **Infrastruktura** | | | |
| - Hosting (Vercel) | 80 PLN | 80 PLN | 960 PLN |
| - Database (Supabase) | 150 PLN | 250 PLN | 2,400 PLN |
| - Storage (pliki) | 50 PLN | 150 PLN | 1,200 PLN |
| - CDN/Domeny | 30 PLN | 30 PLN | 360 PLN |
| **Płatności** | | | |
| - Stripe fees | 0-100 | 200-500 | 3,000 |
| **Marketing** | | | |
| - Ads | 500 | 1,000 | 9,000 |
| - Tools (email, analytics) | 100 | 100 | 1,200 |
| **Inne** | | | |
| - Freelancer/design | 200 | 0 | 1,200 |
| - Rezerwa | 200 | 200 | 2,400 |
| **RAZEM** | **~1,300 PLN** | **~2,000 PLN** | **~20,000 PLN** |

### 2.3 Koszty B2C vs B2B

| Model | Koszt miesięczny | Przychód do break-even |
|-------|------------------|------------------------|
| Solo-dev (własna praca) | 1,300 PLN | 35 płacących @ 39 PLN |
| Zespół (2 osoby) | 8,000 PLN | 210 płacących @ 39 PLN |

---

## 3. Infrastruktura Szczegółowo

### 3.1 Hosting & Compute

| Usługa | Plan | Koszt/mies | Uzasadnienie |
|--------|------|------------|--------------|
| **Vercel** | Pro | 20 USD (~80 PLN) | Next.js, CDN, preview |
| **lub** | | | |
| **Railway** | Hobby + Pro | $20-50 | Alternatywa |

### 3.2 Database & Storage

| Usługa | Plan | Koszt/mies | Uzasadnienie |
|--------|------|------------|--------------|
| **Supabase** | Pro | $25-50 (~150-250 PLN) | Postgres + Auth + Storage |
| **lub** | | | |
| **Neon + S3** | Pay-as-you-go | $20-50 | Alternatywa |

### 3.3 Narzędzia

| Kategoria | Narzędzie | Koszt/mies | Uzasadnienie |
|-----------|-----------|------------|--------------|
| **Analytics** | Posthog | $0 (free) | Product analytics |
| **Error tracking** | Sentry | $0 (free) | Error monitoring |
| **Email** | Resend | $0-25 | Transactional email |
| **Payments** | Stripe | 1.5-2% | Transaction fees |
| **Communication** | WhatsApp/Email | $0 | Support |

---

## 4. Time Investment

### 4.1 Development Timeline (Solo-Dev)

| Faza | Tygodnie | Godziny/tydzień | Łącznie |
|------|----------|-----------------|---------|
| Research + Planning | 2 | 10 | 20h |
| MVP Development | 8 | 30 | 240h |
| Testing + Launch | 2 | 20 | 40h |
| **RAZEM** | **12** | | **~300h** |

### 4.2 Ongoing Time (Monthly)

| Zadanie | Godziny/mies |
|---------|--------------|
| Development/Features | 40h |
| Marketing | 20h |
| Support | 10h |
| Admin/Business | 10h |
| **RAZEM** | **~80h/mies** |

---

## 5. Break-Even Analysis

### 5.1 Scenariusz: Solo-Dev

| Metric | Wartość |
|--------|---------|
| Koszty stałe miesięcznie | 1,300 PLN |
| Średni przychód per user | 33 PLN (ARPU) |
| Break-even | 1,300 ÷ 33 = 40 płacących |
| CAC | 20 PLN |
| CAC payback | 40 × 20 = 800 PLN |
| Czas do zwrotu | 40 ÷ 5 (miesięcznie) = 8 miesięcy |

### 5.2 Scenariusz: Z Zespołem

| Metric | Wartość |
|--------|---------|
| Koszty stałe miesięcznie | 8,000 PLN |
| Średni przychód per user | 33 PLN |
| Break-even | 8,000 ÷ 33 = 242 płacących |
| CAC | 25 PLN |
| CAC payback | 242 × 25 = 6,050 PLN |
| Czas do zwrotu | 242 ÷ 20 = 12 miesięcy |

---

## 6. Alternatywne Ścieżki

### 6.1 No-Code (Bubble)

| Aspekt | No-Code | Custom Code |
|--------|---------|-------------|
| Koszt development | 1,500 PLN/rok | 0 (własna praca) lub 20,000+ |
| Czas do MVP | 2-4 tygodnie | 8-12 tygodni |
| Skalowalność | Ograniczona | Wysoka |
| Customization | Ograniczona | Pełna |
| Koszty monthly | 200-400 PLN | 1,300-2,000 PLN |

**Rekomendacja:** No-code jako proof-of-concept, potem custom dla skalowania.

### 6.2 Outsource

| Aspekt | Freelancer | Agencja |
|--------|------------|---------|
| Koszt MVP | 15,000-30,000 PLN | 50,000+ PLN |
| Czas | 2-3 miesiące | 1-2 miesiące |
| Kontrola | Średnia | Niska |
| Jakość | Zmienna | Zwykle wysoka |

---

## 7. ROI Projections

### 7.1 Scenariusz Konserwatywny (Year 1)

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|-----|-----|-----|-----|
| Users | 500 | 2,000 | 5,000 | 10,000 |
| Paid | 10 | 30 | 80 | 150 |
| Revenue | 390 | 1,170 | 3,120 | 5,850 |
| Costs | 3,900 | 3,900 | 5,000 | 6,000 |
| Net | -3,510 | -2,730 | -1,880 | -150 |

**Break-even:** Miesiąc 12-13

### 7.2 Scenariusz Optymistyczny (Year 1)

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|-----|-----|-----|-----|
| Users | 1,000 | 5,000 | 10,000 | 20,000 |
| Paid | 30 | 100 | 250 | 400 |
| Revenue | 1,170 | 3,900 | 9,750 | 15,600 |
| Costs | 5,000 | 5,000 | 6,000 | 8,000 |
| Net | -3,830 | -1,100 | 3,750 | 7,600 |

**Break-even:** Miesiąc 8-9

---

## 8. Checklist Zasobów

### 8.1 Pre-Development
- [ ] Laptop / komputer
- [ ] IDE (VS Code) - darmowe
- [ ] GitHub account - darmowy
- [ ] Figma (do design) - darmowy plan

### 8.2 Development
- [ ] Vercel account
- [ ] Supabase account
- [ ] Stripe account
- [ ] Domain (.com + .pl)

### 8.3 Launch
- [ ] Email business
- [ ] Privacy policy generator
- [ ] Terms of service
- [ ] Support email setup

---

## 9. Wnioski

**Minimalny budżet (solo-dev, no-code):**
- Startup: ~5,000 PLN
- Operacyjny: ~1,500 PLN/miesiąc

**Break-even:** 40 płacących użytkowników

**Czas do MVP:** 2-4 tygodnie (no-code) lub 8-12 tygodni (custom)

**Rekomendacja:** Zacznij od no-code (Bubble) dla szybkiej walidacji, potem custom jeśli potrzebujesz skalować.

---

*Dokument utworzony w ramach metodyki Architekt Biznesu SaaS — Resource Analysis workflow*
