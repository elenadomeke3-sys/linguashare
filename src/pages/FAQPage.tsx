import { Card, CardContent } from "@/components/Card";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-8">Częste pytania</h1>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">
                Jak działa model "oddaj 3, pobierz bez limitu"?
              </h3>
              <p className="text-muted-foreground">
                W darmowym planie możesz pobrać 3 materiały miesięcznie. Za
                każdy dodany przez Ciebie materiał otrzymujesz dodatkowy
                download. W planie Premium masz nielimitowane pobrania.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Jakie formaty plików są obsługiwane?
              </h3>
              <p className="text-muted-foreground">
                Obsługujemy PDF, DOCX, DOC oraz popularne formaty obrazów (JPG,
                PNG). Maksymalny rozmiar pliku to 10MB.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Czy mogę używać materiałów komercyjnie?
              </h3>
              <p className="text-muted-foreground">
                Tak, materiały oznaczone jako darmowe możesz wykorzystywać w
                swojej pracy. Materiały Premium wymagają aktywnej subskrypcji.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Jak mogę zgłosić nieodpowiedni materiał?
              </h3>
              <p className="text-muted-foreground">
                Na każdej stronie materiału znajduje się przycisk "Zgłoś".
                Rozpatrujemy zgłoszenia w ciągu 24-48 godzin.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Czy moje materiały są bezpieczne?
              </h3>
              <p className="text-muted-foreground">
                Tak, stosujemy system weryfikacji i moderacji treści. Twoje
                materiały są zabezpieczone przed nieautoryzowanym kopiowaniem.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Jak anulować subskrypcję?</h3>
              <p className="text-muted-foreground">
                Możesz anulować subskrypcję w dowolnym momencie w panelu
                użytkownika. Twój dostęp do Premium pozostanie aktywny do końca
                opłaconego okresu.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
