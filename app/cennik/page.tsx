import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cennik - Lazur Resort Rogowo | Ceny domków letniskowych nad morzem",
  description:
    "Cennik domków letniskowych Lazur Resort w Rogowie. Atrakcyjne ceny noclegów nad morzem dla 8 osób. Rezerwuj domek w województwie zachodniopomorskim.",
  keywords:
    "cennik domki letniskowe Rogowo, ceny noclegi nad morzem, Lazur Resort ceny, domki zachodniopomorskie cennik",
}

export default function Cennik() {
  const seasons = [
    {
      name: "Sezon niski",
      period: "Styczeń - Maj, Październik - Grudzień",
      price: "200",
      description: "Idealne na spokojny wypoczynek poza sezonem",
    },
    {
      name: "Sezon średni",
      period: "Czerwiec, Wrzesień",
      price: "300",
      description: "Doskonały czas na aktywny wypoczynek nad morzem",
    },
    {
      name: "Sezon wysoki",
      period: "Lipiec - Sierpień",
      price: "450",
      description: "Najlepszy czas na wakacje z rodziną nad morzem",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cennik Domków Letniskowych Lazur Resort Rogowo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atrakcyjne ceny noclegów nad morzem w Rogowie. Domki dla 8 osób w województwie zachodniopomorskim z pełnym
            wyposażeniem i blisko plaży.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {seasons.map((season, index) => (
            <Card key={index} className={`relative overflow-hidden ${index === 1 ? "ring-2 ring-blue-500" : ""}`}>
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                  NAJPOPULARNIEJSZY
                </div>
              )}
              <CardHeader className={index === 1 ? "pt-12" : ""}>
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{season.name}</div>
                  <div className="text-sm text-gray-600 mt-2">{season.period}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{season.price} zł</span>
                  <span className="text-gray-600">/noc</span>
                </div>
                <p className="text-gray-600 mb-6">{season.description}</p>
                <Link href="/rezerwacja">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Rezerwuj domek</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Co zawiera cena domku letniskowego?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Nocleg dla maksymalnie 8 osób</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>3 sypialnie + salon z rozkładaną sofą</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>W pełni wyposażona kuchnia</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>2 łazienki z prysznicem</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Duży taras z meblami ogrodowymi</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>WiFi i telewizja satelitarna</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Miejsce na grilla</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Bezpłatny parking</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Pościel i ręczniki</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Sprzątanie końcowe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Warunki rezerwacji
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                <strong>Minimalna rezerwacja:</strong> 2 noce
              </p>
              <p>
                <strong>Zameldowanie:</strong> od 15:00
              </p>
              <p>
                <strong>Wymeldowanie:</strong> do 11:00
              </p>
              <p>
                <strong>Zaliczka:</strong> 30% wartości pobytu
              </p>
              <p>
                <strong>Dopłata za sprzątanie:</strong> wliczona w cenę
              </p>
              <p>
                <strong>Kaucja zwrotna:</strong> 200 zł
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Informacje dodatkowe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                <strong>Maksymalna liczba osób:</strong> 8
              </p>
              <p>
                <strong>Zwierzęta:</strong> dozwolone za dopłatą 30 zł/noc
              </p>
              <p>
                <strong>Parking:</strong> bezpłatny przy każdym domku
              </p>
              <p>
                <strong>Odległość do morza:</strong> 400 metrów
              </p>
              <p>
                <strong>Sklepy:</strong> 500 metrów
              </p>
              <p>
                <strong>Restauracje:</strong> 300 metrów
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Gotowy na wypoczynek nad morzem w Rogowie?</h2>
          <p className="text-xl mb-6">Zarezerwuj domek letniskowy w Lazur Resort już dziś!</p>
          <Link href="/rezerwacja">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Sprawdź dostępność i rezerwuj
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
