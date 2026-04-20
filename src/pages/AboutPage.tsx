import { Card, CardContent } from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-6">O mnie</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              Jestem młodą osobą zafascynowaną językami, która kocha dzielić się
              wiedzą i pomagać innym w nauce. Jako korepetytorka języków obcych
              wiem, jak czasochłonne jest szukanie odpowiednich materiałów
              dydaktycznych.
            </p>
            <p>
              Słyszałam od wielu nauczycieli i lektorów, jak trudno im jest
              ogarnąć materiały do nauki — godziny spędzone na przeszukiwaniu
              internetu, organizowanie własnych notatek, tworzenie od podstaw
              każdego ćwiczenia. To właśnie dlatego postanowiłam coś z tym
              zrobić.
            </p>
            <p>
              Stworzyłam <strong>LinguaShare</strong> — platformę, która łączy
              nauczycieli języków i umożliwia wymianę profesjonalnych materiałów
              edukacyjnych. Moja misja to ułatwienie pracy korepetytorom i
              lektorom, aby mogli skupić się na nauczaniu, zamiast tracić czas
              na szukanie materiałów.
            </p>
            <p>
              Wierzę, że współpraca i dzielenie się wiedzą sprawia, że wszyscy
              możemy się rozwijać. LinguaShare to moja próba stworzenia
              społeczności, która wspiera się nawzajem w edukacji językowej.
            </p>
            <p>Zapraszam do dołączenia do naszej społeczności!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
