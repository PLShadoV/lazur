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
    "Cennik domków letniskowych Lazur Resort w Rogowie. Atrakcyjne ceny noclegów nad morzem dla 4, 5-6 i 7-8 osób. Rezerwuj domek w województwie zachodniopomorskim.",
  keywords:
    "cennik domki letniskowe Rogowo, ceny noclegi nad morzem, Lazur Resort ceny, domki zachodniopomorskie cennik",
}

export default function Cennik() {
  const pricingPeriods = [
    {
      period: "01.04 – 31.05",
      name: "Sezon wiosenny",
      prices: { "4os": 400, "5-6os": 450, "7-8os": 500 },
      description: "Idealne na spokojny wypoczynek wiosną",
    },
    {
      period: "30.04 – 03.05",
      name: "Majówka",
      prices: { "4os": 450, "5-6os": 500, "7-8os": 550 },
      description: "Długi weekend majowy",
    },
    {
      period: "30.05 – 22.06",
      name: "Sezon przedwakacyjny",
      prices: { "4os": 450, "5-6os": 500, "7-8os": 550 },
      description: "Doskonały czas przed sezonem letnim",
    },
    {
      period: "22.06 – 06.07",
      name: "Początek lata",
      prices: { "4os": 550, "5-6os": 600, "7-8os": 650 },
      description: "Rozpoczęcie sezonu letniego",
    },
    {
      period: "06.07 – 17.08",
      name: "Sezon wysoki",
      prices: { "4os": 650, "5-6os": 700, "7-8os": 750 },
      description: "Najlepszy czas na wakacje z rodziną",
    },
    {
      period: "17.08 – 31.08",
      name: "Koniec lata",
      prices: { "4os": 450, "5-6os": 500, "7-8os": 550 },
      description: "Spokojniejszy koniec wakacji",
    },
    {
      period: "01.09 – 31.10",
      name: "Sezon jesienny",
      prices: { "4os": 400, "5-6os": 450, "7-8os": 500 },
      description: "Złota polska jesień nad morzem",
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
            Szczegółowy cennik noclegów nad morzem w Rogowie. Domki dla 4, 5-6 i 7-8 osób w województwie
            zachodniopomorskim z pełnym wyposażeniem i blisko plaży.
          </p>
        </div>

        {/* Tabela cenowa */}
        <div className="mb-16 overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pricingPeriods.map((period, index) => (
                <Card key={index} className={`relative overflow-hidden ${index === 4 ? "ring-2 ring-blue-500" : ""}`}>
                  {index === 4 && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                      SEZON WYSOKI
                    </div>
                  )}
                  <CardHeader className={index === 4 ? "pt-12" : ""}>
                    <CardTitle className="text-center">
                      <div className="text-lg font-bold text-gray-900">{period.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{period.period}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Domek 4 osobowy:</span>
                        <span className="font-bold text-blue-600">{period.prices["4os"]} zł/noc</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Domek 5-6 osobowy:</span>
                        <span className="font-bold text-blue-600">{period.prices["5-6os"]} zł/noc</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Domek 7-8 osobowy:</span>
                        <span className="font-bold text-blue-600">{period.prices["7-8os"]} zł/noc</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{period.description}</p>
                    <Link href="/rezerwacja">
                      <Button className="w-full bg-[#001e4c] hover:bg-[#002a66] text-white">Rezerwuj</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Co zawiera cena domku letniskowego?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Nocleg dla maksymalnie 4, 6 lub 8 osób</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>2 sypialnie + salon z rozkładaną sofą</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>W pełni wyposażona kuchnia</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>1 łazienka z prysznicem</span>
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
                <strong>Wymeldowanie:</strong> do 10:00
              </p>
              <p>
                <strong>Zaliczka:</strong> 20% wartości pobytu
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
                <strong>Domek dla 8 osób:</strong> 2 sypialnie + salon z rozkładanymi sofami i łóżkiem narożnym
              </p>
              <p>
                <strong>Zwierzęta:</strong> dozwolone za dopłatą 15 zł/dobę
              </p>
              <p>
                <strong>Odległość do morza:</strong> 400 metrów
              </p>
              <p>
                <strong>Parking:</strong> bezpłatny przy każdym domku
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center bg-[#001e4c] text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Gotowy na wypoczynek nad morzem w Rogowie?</h2>
          <p className="text-xl mb-6">Zarezerwuj domek letniskowy w Lazur Resort już dziś!</p>
          <Link href="/rezerwacja">
            <Button size="lg" className="bg-[#002a66] hover:bg-[#003d99] text-white">
              Sprawdź dostępność i rezerwuj
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
