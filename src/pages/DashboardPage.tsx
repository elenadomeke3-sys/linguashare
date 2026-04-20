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
  Upload,
  Download,
  FileText,
  Star,
  Settings,
  CreditCard,
  Plus,
  FolderOpen,
} from "lucide-react";

const MOCK_USER = {
  name: "Jan Kowalski",
  email: "jan@example.pl",
  subscriptionTier: "FREE",
  downloadsUsed: 1,
  downloadsLimit: 3,
};

const MOCK_MATERIALS = [
  {
    id: "1",
    title: "Ćwiczenia na czas Present Perfect",
    language: "Angielski",
    level: "B1",
    downloads: 45,
    averageRating: 4.5,
  },
  {
    id: "2",
    title: "Fiszki - Słówka biznesowe",
    language: "Angielski",
    level: "B2",
    downloads: 128,
    averageRating: 4.8,
  },
];

const MOCK_COLLECTIONS = [
  { id: "1", name: "Gramatyka B1", materialsCount: 12 },
  { id: "2", name: "Biznesowy angielski", materialsCount: 8 },
];

export default function DashboardPage() {
  const user = MOCK_USER;
  const materials = MOCK_MATERIALS;
  const collections = MOCK_COLLECTIONS;
  const downloadsRemaining = user.downloadsLimit - user.downloadsUsed;

  return (
    <div className="bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-medium">{user.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Plan</span>
                    <Badge
                      variant={
                        user.subscriptionTier === "PREMIUM"
                          ? "default"
                          : "outline"
                      }
                    >
                      {user.subscriptionTier === "PREMIUM"
                        ? "Premium"
                        : "Darmowy"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pobrania</span>
                    <span className="font-medium">
                      {downloadsRemaining} / {user.downloadsLimit}
                    </span>
                  </div>
                  {user.subscriptionTier === "FREE" && (
                    <Link to="/pricing">
                      <Button className="w-full mt-2" size="sm">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Upgrade
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Statystyki</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Upload className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{materials.length}</p>
                    <p className="text-xs text-muted-foreground">
                      Moje materiały
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Download className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{user.downloadsUsed}</p>
                    <p className="text-xs text-muted-foreground">Pobrania</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.7</p>
                    <p className="text-xs text-muted-foreground">
                      Średnia ocena
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-4 space-y-2">
                <Link to="/dashboard/upload">
                  <Button variant="ghost" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Dodaj materiał
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost" className="w-full justify-start">
                    <FolderOpen className="h-4 w-4 mr-2" />
                    Moje kolekcje
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Ustawienia
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-primary to-purple-600 text-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Witaj, {user.name.split(" ")[0]}!
                </h2>
                <p className="text-white/90 mb-4 font-medium">
                  Masz jeszcze {downloadsRemaining} darmowe pobrania w tym miesiącu!
                </p>
                <div className="flex gap-4">
                  <Link to="/materials">
                    <Button variant="secondary">Przeglądaj materiały</Button>
                  </Link>
                  <Link to="/dashboard/upload">
                    <Button
                      variant="ghost"
                      className="text-primary-foreground hover:text-primary-foreground hover:bg-primary/20"
                    >
                      Dodaj własny
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* My Materials */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Moje materiały</CardTitle>
                  <CardDescription>Materiały które dodałeś</CardDescription>
                </div>
                <Link to="/dashboard/upload">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Dodaj
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted flex items-center justify-center rounded">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{material.title}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>
                              {material.language} {material.level}
                            </span>
                            <span>⬇ {material.downloads}</span>
                            <span>⭐ {material.averageRating}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edytuj
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collections */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Moje kolekcje</CardTitle>
                  <CardDescription>Twoje kolekcje materiałów</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Nowa
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {collections.map((collection) => (
                    <div
                      key={collection.id}
                      className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <p className="font-medium mb-1">{collection.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {collection.materialsCount} materiałów
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
