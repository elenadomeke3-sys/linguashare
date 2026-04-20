# Opis Projektu — LinguaShare

**Data:** 16 marca 2026

---

## 1. Executive Summary

**LinguaShare** to platforma SaaS typu marketplace i baza wiedzy dla korepetytorów językowych i nauczycieli, umożliwiająca dzielenie się materiałami dydaktycznymi. Platforma rozwiązuje problem fragmentarycznych źródeł i czasochłonnego researchu, oferując centralizację jakościowych materiałów z systemem reputacji, filtrów i modelem współdzielenia "give-to-get".

**Premisa:** Korepetytorzy językowi spędzają 2-5 godzin tygodniowo na tworzeniu lub wyszukiwaniu materiałów dydaktycznych. LinguaShare skraca ten czas do minut, oferując jeden spójny ekosystem.

---

## 2. Problem i Pain Points

### 2.1 Główne Problemy Docelowej Grupy

| Problem | Opis | Częstotliwość |
|---------|------|----------------|
| **Brak centralizacji** | Materiały rozrzucone po wielu źródłach (FB, Telegram, blogi, Drive) | Codziennie |
| **Czas na research** | 2-5h/tydzień na szukanie i tworzenie materiałów | Tygodniowo |
| **Jakość niepewna** | Brak systemu ocen i rekomendacji | Często |
| **Piractwo** | Nielegalne kopiowanie materiałów z podręczników | Często |
| **Brak współpracy** | Nauczyciele nie dzielą się między sobą | Bardzo często |

### 2.2 Segmenty Rynku

- **Rynek Polski:** ~30-50 tys. aktywnych korepetytorów językowych
- **Średnia stawka za godzinę:** 60-120 PLN
- **Potencjalny czas zaoszczędzony:** 2-5h/tydzień = 100-250 PLN wartości czasu

---

## 3. Rozwiązanie — Funkcje Platformy

### 3.1 Core Features (MVP)

| Funkcja | Opis | Priorytet |
|---------|------|-----------|
| **Wielojęzyczność** | Polski rynek - 100% PL + materiały do nauki języków obcych | Must Have |
| **Katalog Materiałów** | Upload (PDF, DOCX, obrazki, linki do Quizlet/Canva) + automatyczna kategoryzacja | Must Have |
| **Wyszukiwarka i Filtry** | Pełnotekstowe wyszukiwanie + filtry: język, poziom (A1-C2), typ, format | Must Have |
| **System Reputacji** | Ocena 1-5 gwiazdek + komentarze, profil z portfolio, badge "Trusted Creator" | Must Have |
| **Model Współdzielenia** | Free: 3 pobrania/miesiąc, upload bez limitu; Premium: bez limitu | Must Have |
| **System Creditów** | Za każdy udostępniony materiał +1 dodatkowy download | Should Have |
| **Moderacja i Anty-Troll** | Automatyczne skanowanie plików, weryfikacja, system zgłoszeń | Must Have |

### 3.2 Rozszerzone Funkcje (Post-MVP)

| Funkcja | Opis | Priorytet |
|---------|------|-----------|
| **Kolekcje i Pakiety** | Tworzenie własnych kolekcji ("Mój kurs A1"), gotowe ścieżki od top autorów | Should Have |
| **AI Plagiarism Check** | Automatyczne skanowanie przy upload | Should Have |
| **Zabezpieczenia przed Trollami** | System weryfikacji, limitów, blacklista | Should Have |
| **Integracje** | Export do Quizlet, Canva, Google Classroom | Could Have |

### 3.3 Model "Give-to-Get"

```
Free Tier:
├── Pobierz: 3 materiały/miesiąc
├── Upload: bez limitu
└── Kolekcje: 3 własne

Premium Tier ($9.99/miesiąc):
├── Pobierz: bez limitu
├── Upload: bez limitu + promowanie
├── Kolekcje: bez limitu
└── Wsparcie priorytetowe

Team Tier ($29.99/miesiąc):
├── Wszystko z Premium
├── 5 członków zespołu
├── Wspólne kolekcje
└── Analytics dla szkoły
```

---

## 4. Propozycja Wartości (Value Proposition)

### Dla Nauczycieli/Korepetytorów:

> "Zamiast spędzać godziny na szukaniu materiałów, pobieraj gotowe, sprawdzone zasoby i buduj swoją profesjonalną bibliotekę w kilka minut."

| Korzyść | Jak mierzalna |
|---------|---------------|
| Oszczędność czasu | 2-5h mniej tygodniowo |
| Jakość materiałów | Ocena 4+ gwiazdek |
| Rozwój zawodowy | Portfolio z badge'ami |
| Zarabianie | Premiowe materiały od innych |

### Dla Uczniów (pośrednio):

- Lepsza jakość lekcji
- Bardziej zróżnicowane materiały
- Możliwość samodzielnego dostępu do kolekcji

---

## 5. Rynek i Monetizacja

### 5.1 Rynek Docelowy

| Segment | Szacunek | Uwagi |
|---------|----------|-------|
| Korepetytorzy językowi (PL) | 30-50 tys. | Aktywni, regularne lekcje |
| Nauczyciele w szkołach | 20-30 tys. | Języki obce |
| Platformy edukacyjne | ~500 | B2B potential |

### 5.2 Model Przychodów

| Źródło | Model | Stawka |
|--------|-------|--------|
| Subskrypcja Premium | Freemium | $9.99/mies. |
| Subskrypcja Team | B2B | $29.99/mies. |
| Polecane materiały | Marketplace fee | 15% od sprzedaży |
| Reklamy | Display | CPM |

### 5.3 Projekcje (Year 1)

| Metric | Q1 | Q2 | Q3 | Q4 |
|--------|-----|-----|-----|-----|
| Użytkownicy | 500 | 2,000 | 5,000 | 10,000 |
|转化 (Free→Paid) | 3% | 5% | 6% | 7% |
| ARR | $1,500 | $7,500 | $22,500 | $52,500 |

---

## 6. Bazowe Materiały (Cold Start Solution)

Aby wyeliminować problem "zniczego pola", aplikacja startuje z gotową biblioteką z OFICJALNYCH, DARMOWYCH źródeł:

| Źródło | Ilość | Koszt | Status |
|--------|-------|-------|--------|
| **Cambridge English** | ~100 | Free | ✅ Official open resources |
| **Oxford University Press** | ~80 | Free | ✅ Official open resources |
| **British Council** | ~50 | Free | ✅ Official open resources |
| **EU Education** | ~30 | Free | ✅ Official |
| **AI generated** (sprawdzone) | ~100 | ~100 PLN | Weryfikacja ludzka |
| Od ambasadorów | ~50 | Free (w zamian dostęp) | ✅ Zweryfikowane |
| **RAZEM** | **~410** | **~200 PLN** | |

**Każdy nowy użytkownik od razu ma co pobierać → wyższy conversion i retention.**

**Zasady:**
- ✅ Tylko oficjalne, legalne źródła (Cambridge, Oxford, British Council)
- ✅ ŻADNYCH pirackich materiałów z podręczników!
- ✅ Każdy materiał oznaczony tagiem źródła
- ✅ Public domain / Creative Commons only

---

## 7. Risk Assessment Summary

| Ryzyko | Poziom | Mitygacja |
|--------|--------|-----------|
| Network effect – brak materiałów na start | ✅ Rozwiązane | Start z bazą 410+ oficjalnych materiałów |
| Jakość treści – śmieciowe materiały | 🟡 Średni | System ocen + moderacja + anty-troll |
| Piractwo – nielegalne materiały | ✅ Rozwiązane | Tylko oficjalne źródła + AI check |
| Konkurencja – darmowe zasoby | 🟢 Niskie | Lokalizacja PL + społeczność |

---

## 8. Następne Kroki

1. **Walidacja:** Przeprowadzić wywiady z 10 korepetytorami — czy mają problem z materiałami?
2. **MVP Scope:** Backend (baza + upload) + frontend (katalog + search) — możliwe na No-code (Bubble) lub Next.js + Supabase
3. **Pierwsi użytkownicy:** Znaleźć 20 korepetytorów na FB/LinkedIn do testów beta
4. **Przygotować bazę startową:** Przed launch zebrać/wygenerować 500 materiałów

---

* Dokument utworzony w ramach metodyki Architekt Biznesu SaaS
