import { Card, CardContent } from "@/components/Card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-8">Kontakt</h1>

          <p className="text-muted-foreground mb-8">
            Masz pytania lub uwagi? Skontaktuj się z nami! Odpowiadamy w ciągu
            24 godzin.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">kontakt@linguashare.pl</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Telefon</h3>
                <p className="text-muted-foreground">+48 500 123 456</p>
                <p className="text-sm text-muted-foreground">
                  Pon-Pt: 9:00 - 17:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Adres</h3>
                <p className="text-muted-foreground">
                  ul. Akademicka 15/4
                  <br />
                  00-001 Warszawa
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <h3 className="font-medium mb-4">Formularz kontaktowy</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Twój email"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <textarea
                  placeholder="Wiadomość..."
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
