# Job To Be Done — LinguaShare

**Data:** 16 marca 2026

---

## Cel Dokumentu

Celem tego dokumentu jest zdefiniowanie "pracy" którą użytkownik chce wykonać (Job to Be Done), hipotez walidacyjnych i eksperymentów do przeprowadzenia przed i po budowie MVP.

---

## 1. Job To Be Done Framework

### 1.1 Główne Zadanie

**"Gdy [kontekst], chcę [motywacja], żeby [oczekiwany rezultat]."**

| Element | Opis |
|---------|------|
| **Kontekst** | Gdy przygotowuję się do lekcji i potrzebuję materiałów dydaktycznych |
| **Motywacja** | Chcę szybko znaleźć i pobrać wysokiej jakości materiały |
| **Oczekiwany rezultat** | Żeby mieć gotowe materiały w 5 minut bez szukania po całym internecie |

### 1.2 Jobs to Be Done

#### Primary Jobs (Core)

| Job | Opis | Priorytet |
|-----|------|-----------|
| **Find materials** | Szybko znaleźć materiały do konkretnego tematu/poziomu | Must Have |
| **Download materials** | Pobierać materiały w użytecznym formacie | Must Have |
| **Rate materials** | Ocenić materiały, żeby wiedzieć które są dobre | Must Have |
| **Upload own materials** | Udostępnić własne materiały społeczności | Should Have |
| **Organize materials** | Tworzyć własne kolekcje/kategorie | Should Have |

#### Secondary Jobs (Growth)

| Job | Opis | Priorytet |
|-----|------|-----------|
| **Build reputation** | Zbudować reputację jako ekspert | Could Have |
| **Earn money** | Zarobić na sprzedaży materiałów | Could Have |
| **Collaborate** | Współpracować z innymi nauczycielami | Could Have |
| **Track usage** | Śledzić kto pobiera moje materiały | Could Have |

#### Emotional Jobs

| Job | Opis | Priorytet |
|-----|------|-----------|
| **Feel professional** | Czuć się profesjonalnym nauczycielem | Should Have |
| **Save time** | Oszczędzać czas na researchu | Must Have |
| **Avoid guilt** | Unikać poczucia winy za "kradzione" materiały | Could Have |

---

## 2. Jobs Progress Matrix

### 2.1 Jak użytkownik wykonuje zadanie obecnie?

| Job | Obecne rozwiązanie | Problem |
|-----|-------------------|---------|
| **Find materials** | Google, grupy FB, blogi | Chaos, niska jakość, czasochłonne |
| **Download materials** | Bezpośrednie linki, Drive | Format niepasujący, brak archiwum |
| **Rate materials** | Opinie na grupach FB | Subiektywne, nieaktualne |
| **Upload own materials** | Własny Drive, Dropbox | Brak zasięgu |
| **Organize materials** | Foldery na dysku | Brak struktury |

### 2.2 Jak LinguaShare rozwiązuje te problemy?

| Job | LinguaShare Solution | Metric |
|-----|---------------------|--------|
| **Find materials** | Katalog + filtry + wyszukiwarka | Time to find < 2 min |
| **Download materials** | Jeden klik, formaty gotowe | Downloads > 3/miesiąc |
| **Rate materials** | System gwiazdek + komentarze | Rating visible |
| **Upload own materials** | Upload + automatyczne tagi | Upload > 1/miesiąc |
| **Organize materials** | Kolekcje własne | Collections > 1/user |

---

## 3. Hipotezy Walidacyjne

### 3.1 Hipotezy Problemowe (Pre-MVP)

| ID | Hipoteza | Metoda walidacji | Kryterium sukcesu |
|----|----------|------------------|-------------------|
| H1 | Korepetytorzy spędzają >2h/tydzień na szukaniu materiałów | Wywiady (n=10) | 80% respondentek potwierdza |
| H2 | Głównym źródłem materiałów jest Google i grupy FB | Ankieta (n=50) | >70% odpowiedzi |
| H3 | Nauczyciele chętnie dzielą się materiałami | Wywiady | >50% chętnych do oddania |
| H4 | Gotowość płacenia za oszczędność czasu | Ankieta WTP | >30% "tak, zapłaciłbym" |

### 3.2 Hipotezy Produktowe (MVP)

| ID | Hipoteza | Metoda walidacji | Kryterium sukcesu |
|----|----------|------------------|-------------------|
| H5 | Użytkownicy znajdują materiały w <2 min | User testing | 80% użytkowników |
| H6 | System ocen wpływa na decyzję pobrania | Analytics | >50% sprawdza oceny |
| H7 | Model "give-to-get" zwiększa upload | A/B test | >20% więcej uploads |
| H8 | Free tier wystarczy do wartości | Retention data | >40% aktywnych po 30 dniach |

### 3.3 Hipotezy Biznesowe (Growth)

| ID | Hipoteza | Metoda walidacji | Kryterium sukcesu |
|----|----------|------------------|-------------------|
| H9 | CAC < 30 PLN | Marketing data | Po 3 miesiącach |
| H10 | Conversion Free→Paid > 5% | Stripe data | Po 6 miesiącach |
| H11 | LTV > 300 PLN | Revenue / Churn | Po 12 miesiącach |
| H12 | NPS > 40 | Survey | Po launch |

---

## 4. Eksperymenty Walidacyjne

### 4.1 Pre-MVP Experiments

| Eksperyment | Cel | Metoda | Koszt | Czas |
|-------------|-----|--------|-------|------|
| **Landing page test** | Walidacja zainteresowania | Pre-signup page | Niski | 1 tydzień |
| **Wywiady 1:1** | Problem validation | Zoom/phone | Niski | 2 tygodnie |
| **Ankieta WTP** | Pricing validation | Google Forms | Minimalny | 1 tydzień |
| **Social listening** | Market size | FB groups monitoring | Minimalny | Ongoing |

### 4.2 MVP Experiments

| Eksperyment | Cel | Metoda | Czas |
|-------------|-----|--------|------|
| **A/B test onboarding** | Activation rate | Hotjar/Amplitude | 2 tygodnie |
| **A/B test pricing** | Conversion | Stripe A/B | 1 miesiąc |
| **Feature flag test** | Feature usage | LaunchDarkly | 2 tygodnie |
| **Survey churn** | Retention issues | In-app survey | Ongoing |

---

## 5. Jobs Stories

### 5.1 User Story 1: Find Materials

```
Jako: Nauczycielka angielskiego (Marta)
Chcę: Znaleźć materiały do nauki czasów gramatycznych dla poziomu B1
Żeby: Przygotować lekcję dla ucznia w 5 minut

Scenariusz:
1. Wchodzę na LinguaShare
2. Wpisuję w wyszukiwarkę "czas present perfect"
3. Filtruję: język=angielski, poziom=B1, typ=gramatyka
4. Przeglądam wyniki (pierwsze 5 z najwyższą oceną)
5. Wybieram materiał z 4+ gwiazdkami
6. Pobieram PDF

Kryteria sukcesu:
- Time to first download < 5 min
- Search results relevant > 80%
- Download works on first try
```

### 5.2 User Story 2: Upload Materials

```
Jako: Korepetytor (Tomek)
Chcę: Udostępnić mój zestaw ćwiczeń do gramatyki
Żeby: Inni nauczyciele mogli z tego korzystać i budować moją reputację

Scenariusz:
1. Klikam "Dodaj materiał"
2. Wgrywam plik PDF
3. System automatycznie taguje (język, poziom, typ)
4. Dodaję tytuł i opis
5. Ustalam cenę (0 PLN = darmowy)
6. Materiał jest dostępny

Kryteria sukcesu:
- Upload < 3 min
- Tags auto-assigned correctly > 70%
- Material visible in search
```

### 5.3 User Story 3: Get Credit (Give-to-Get)

```
Jako: Studentka (Ania)
Chcę: Pobierać materiały bez płacenia
Żeby: Zbudować bazę materiałów przy ograniczonym budżecie

Scenariusz:
1. Pobieram 3 materiały (mój limit w darmowym planie)
2. Widzę komunikat "oddaj 1 materiał, zyskaj +1 download"
3. Wgrywam mój własny zestaw fiszek
4. Zyskuję dodatkowy download

Kryteria sukcesu:
- User understands give-to-get mechanic
- >30% free users upload at least 1 material
- Credit system works correctly
```

---

## 6. Jobs to Metrics Mapping

| Job | Key Metric | North Star |
|-----|------------|------------|
| Find materials | Time to find | < 2 min |
| Download materials | Downloads per user | > 3/miesiąc |
| Rate materials | % who rate | > 20% |
| Upload own materials | Uploads per user | > 1/miesiąc |
| Organize materials | Collections created | > 1/user |

---

## 7. Rekomendacje

### 7.1 Priorytety dla MVP

| Job | Priority | Uzasadnienie |
|-----|----------|---------------|
| Find + Download | Must Have | Core value proposition |
| Rate + Review | Must Have | Trust + quality signal |
| Upload | Should Have | Network effect |
| Collections | Could Have | Post-MVP |

### 7.2 Eksperymenty do przeprowadzenia TERAZ

| Eksperyment | Kolejność | Deadline |
|-------------|-----------|----------|
| Landing page z pre-signup | 1 | Przed MVP |
| Wywiady z 10 nauczycielami | 2 | Przed MVP |
| Ankieta WTP | 3 | Przed MVP |

---

## 8. Checklist Walidacji

- [ ] Wywiady z 10+ użytkownikami
- [ ] Min. 100 odpowiedzi w ankiecie
- [ ] Pre-signup page > 200 zapisów
- [ ] Hipotezy H1-H4 potwierdzone
- [ ] A/B test setup dla MVP features

---

*Dokument utworzony w ramach metodyki Architekt Biznesu SaaS — Job To Be Done workflow*
