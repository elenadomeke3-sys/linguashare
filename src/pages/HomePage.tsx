import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Badge } from "@/components/Badge";
import {
  Search,
  Download,
  Upload,
  Star,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";

const LANGUAGES = [
  { name: "Angielski", slug: "angielski" },
  { name: "Niemiecki", slug: "niemiecki" },
  { name: "Francuski", slug: "francuski" },
  { name: "Hiszpański", slug: "hiszpanski" },
  { name: "Włoski", slug: "wloski" },
  { name: "Rosyjski", slug: "rosyjski" },
  { name: "Polski", slug: "polski" },
];

const FEATURES = [
  {
    icon: Search,
    title: "Wyszukiwarka",
    description: "Szybkie wyszukiwanie materiałów po języku, poziomie i typie.",
  },
  {
    icon: Download,
    title: "Pobieranie",
    description:
      "Pobieraj materiały w jednym kliknięciu. Wsparcie PDF, DOCX, obrazy.",
  },
  {
    icon: Upload,
    title: "Dziel się",
    description: "Udostępniaj własne materiały i buduj swoją reputację.",
  },
  {
    icon: Star,
    title: "Oceny",
    description: "System ocen 1-5 gwiazdek. Wybieraj najlepsze materiały.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Moderacja treści i ochrona przed piractwem.",
  },
  {
    icon: Zap,
    title: "Szybkość",
    description: "Znajdź i pobierz materiały w mniej niż 5 minut.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marta K.",
    role: "Korepetytorka angielskiego",
    content: "Oszczędzam 3 godziny tygodniowo!",
    rating: 5,
  },
  {
    name: "Tomasz W.",
    role: "Nauczyciel w liceum",
    content: "Świetna platforma dla nauczycieli.",
    rating: 5,
  },
  {
    name: "Anna P.",
    role: "Studentka filologii",
    content: "Must-have dla korepetytorów!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Platforma dla korepetytorów językowych
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Materiały dydaktyczne w jednym miejscu
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Znajdź, pobierz i dziel się materiałami do nauki języków obcych.
              Oszczędź 2-5 godzin tygodniowo na szukaniu materiałów.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/materials">
                <Button size="lg" className="gap-2">
                  Przeglądaj materiały
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline">
                  Dodaj swoje materiały
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-12 border-y bg-muted/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            Materiały do nauki języków
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {LANGUAGES.map((lang) => (
              <Link key={lang.slug} to={`/materials?language=${lang.slug}`}>
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Globe className="h-3 w-3 mr-2" />
                  {lang.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Wszystko czego potrzebujesz
            </h2>
            <p className="text-muted-foreground">
              Kompletny zestaw narzędzi dla korepetytorów językowych
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="border-muted">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jak to działa?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Znajdź</h3>
              <p className="text-sm text-muted-foreground">
                Przeszukaj katalog używając filtrów
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Pobierz</h3>
              <p className="text-sm text-muted-foreground">
                Pobierz materiały w jednym kliknięciu
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Dodaj własne</h3>
              <p className="text-sm text-muted-foreground">
                Udostępnij swoje materiały
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prosty cennik</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Darmowy</CardTitle>
                <CardDescription>Dla początkujących</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  0 PLN
                  <span className="text-sm font-normal text-muted-foreground">
                    /mc
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">3 pobrania miesięcznie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Nielimitowane dodawanie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Popularne</Badge>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Dla aktywnych nauczycieli</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  19 PLN
                  <span className="text-sm font-normal text-muted-foreground">
                    /mc
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Nielimitowane pobrania</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Nielimitowane kolekcje</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Co mówią nauczyciele</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Zacznij już dziś</h2>
              <p className="text-primary/80 mb-6">
                Dołącz do społeczności korepetytorów językowych
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary">
                  Załóż darmowe konto
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
