import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Check, X } from "lucide-react";

const PLANS = [
  {
    name: "Darmowy",
    price: "0",
    description: "Dla początkujących korepetytorów",
    features: [
      { text: "3 pobrania miesięcznie", included: true },
      { text: "Nielimitowane dodawanie materiałów", included: true },
      { text: "3 własne kolekcje", included: true },
      { text: "Podstawowa wyszukiwarka", included: true },
      { text: "System ocen", included: true },
      { text: "Nielimitowane kolekcje", included: false },
    ],
    cta: "Zacznij za darmo",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "19",
    period: "miesięcznie",
    description: "Dla aktywnych nauczycieli",
    features: [
      { text: "Nielimitowane pobrania", included: true },
      { text: "Nielimitowane dodawanie materiałów", included: true },
      { text: "Nielimitowane kolekcje", included: true },
      { text: "Podstawowa wyszukiwarka", included: true },
      { text: "System ocen", included: true },
      { text: "Promowanie materiałów", included: true },
    ],
    cta: "Przejdź na Premium",
    highlighted: true,
  },
  {
    name: "Team",
    price: "79",
    period: "miesięcznie",
    description: "Dla szkół i zespołów",
    features: [
      { text: "Wszystko z Premium", included: true },
      { text: "5 członków zespołu", included: true },
      { text: "Wspólne kolekcje", included: true },
      { text: "Analytics dla szkoły", included: true },
      { text: "Admin dashboard", included: true },
    ],
    cta: "Kontakt sprzedaż",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Pricing Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Cennik
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Prosty i przejrzysty cennik
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wybierz plan dopasowany do Twoich potrzeb. Zacznij za darmo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted ? "border-primary shadow-lg relative" : ""
              }
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Popularne
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      {" "}
                      PLN/{plan.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Częste pytania
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-medium mb-2">
                Czy mogę anulować subskrypcję w każdym momencie?
              </h3>
              <p className="text-muted-foreground">
                Tak, możesz anulować w każdym momencie.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-medium mb-2">
                Co się stanie z moimi materiałami po anulowaniu?
              </h3>
              <p className="text-muted-foreground">
                Twoje materiały pozostaną na platformie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
