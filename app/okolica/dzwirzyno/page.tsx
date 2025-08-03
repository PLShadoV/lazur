import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Waves, Trees, Fish, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Domki na wynajem Dźwirzyno - Lazur Resort Rogowo | Noclegi nad morzem",
  description:
    "Domki letniskowe w okolicy Dźwirzyna. Lazur Resort Rogowo - 12 km od Dźwirzyna. Noclegi nad morzem i jeziorem, spokojny wypoczynek dla 8 osób.",
  keywords:
    "domki wynajem Dźwirzyno, noclegi Dźwirzyno, Lazur Resort Dźwirzyno, domki letniskowe Dźwirzyno, noclegi nad morzem Dźwirzyno",
}

export default function Dzwirzyno() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Domki na Wynajem w Okolicy Dźwirzyna</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lazur Resort w Rogowie to doskonała baza wypadowa do Dźwirzyna - unikatowego miejsca położonego między
            morzem a jeziorem. Zaledwie 12 km dzieli nas od tej spokojnej miejscowości.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dźwirzyno - Unikalne Położenie nad Morzem i Jeziorem
            </h2>
            <p className="text-gray-600 mb-4">
              Dźwirzyno to jedna z najbardziej malowniczych miejscowości na polskim wybrzeżu. Położona na mierzei między
              Morzem Bałtyckim a Jeziorem Resko Przymorskie, oferuje wyjątkowe możliwości wypoczynku.
            </p>
            <p className="text-gray-600 mb-6">
              Wybierając domki Lazur Resort w Rogowie, zyskujesz łatwy dostęp do Dźwirzyna przy jednoczesnym zachowaniu
              spokoju i prywatności z dala od turystycznego zgiełku.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Car className="w-5 h-5 text-blue-600 mr-3" />
                <span>12 km do Dźwirzyna (15 minut jazdy)</span>
              </div>
              <div className="flex items-center">
                <Waves className="w-5 h-5 text-blue-600 mr-3" />
                <span>Dostęp do morza i jeziora</span>
              </div>
              <div className="flex items-center">
                <Trees className="w-5 h-5 text-blue-600 mr-3" />
                <span>Otoczenie lasów i rezerwatów przyrody</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Dźwirzyno+mierzeja+morze+jezioro"
              alt="Dźwirzyno mierzeja między morzem a jeziorem - domki Lazur Resort w pobliżu"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Atrakcje Dźwirzyna dostępne z Lazur Resort
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Plaża morska</h3>
                <p className="text-gray-600">
                  Szeroka, piaszczysta plaża nad Morzem Bałtyckim z czystą wodą i spokojną atmosferą, idealna dla
                  rodzin.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Fish className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Jezioro Resko Przymorskie</h3>
                <p className="text-gray-600">
                  Duże jezioro słodkowodne idealne do wędkowania, pływania kajakiem i innych sportów wodnych.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Trees className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Rezerwat "Mierzeja Reska"</h3>
                <p className="text-gray-600">
                  Unikatowy rezerwat przyrody z rzadkimi gatunkami roślin i ptaków, idealne miejsce na spacery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Punkt widokowy</h3>
                <p className="text-gray-600">
                  Wieża widokowa oferująca panoramiczny widok na morze, jezioro i okoliczne lasy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ścieżki edukacyjne</h3>
                <p className="text-gray-600">
                  Oznakowane ścieżki przyrodnicze prowadzące przez najciekawsze zakątki mierzei.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Fish className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Wędkowanie</h3>
                <p className="text-gray-600">
                  Doskonałe warunki do wędkowania zarówno w morzu jak i w jeziorze - bogactwo ryb.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dlaczego Lazur Resort to Idealna Baza do Zwiedzania Dźwirzyna?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Korzyści lokalizacji</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Spokój z dala od turystycznych tłumów</li>
                <li>• Konkurencyjne ceny w porównaniu do Dźwirzyna</li>
                <li>• Łatwy dojazd samochodem (15 minut)</li>
                <li>• Możliwość zwiedzania całego regionu</li>
                <li>• Własna plaża w Rogowie (400m)</li>
                <li>• Parking bezpłatny przy domku</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Wyposażenie domków</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Domki dla maksymalnie 8 osób</li>
                <li>• 3 sypialnie + salon z rozkładaną sofą</li>
                <li>• W pełni wyposażona kuchnia</li>
                <li>• 2 łazienki z prysznicem</li>
                <li>• Duży taras z grillem</li>
                <li>• WiFi i TV satelitarna</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-green-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Odkryj Dźwirzyno z Lazur Resort Rogowo</h2>
          <p className="text-xl mb-6">Zarezerwuj domek i ciesz się bliskością morza, jeziora i przyrody!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezerwacja">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Zarezerwuj domek
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Zadaj pytanie
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
