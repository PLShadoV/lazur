import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bike, MapPin, Trees, Waves, Camera, Clock, Users, Route } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ścieżki rowerowe Rogowo - Lazur Resort | Trasy rowerowe nad morzem",
  description:
    "Ścieżki rowerowe w Rogowie i okolicy. Lazur Resort - idealna baza dla rowerzystów. Nadmorski Szlak R-10, EuroVelo 10, trasy do Mrzeżyna, Dźwirzyna, Kołobrzegu.",
  keywords:
    "ścieżki rowerowe Rogowo, trasy rowerowe Bałtyk, Nadmorski Szlak R-10, EuroVelo 10, rowery Lazur Resort, cycling Rogowo",
}

export default function SciezkiRowerowe() {
  const routes = [
    {
      name: "Rogowo - Mrzeżyno",
      distance: "8 km",
      difficulty: "Łatwa",
      time: "30 min",
      description: "Malownicza trasa wzdłuż wybrzeża do portu rybackiego",
      highlights: ["Port rybacki", "Plaża w Mrzeżynie", "Promenada"],
    },
    {
      name: "Rogowo - Dźwirzyno",
      distance: "12 km",
      distance: "12 km",
      difficulty: "Średnia",
      time: "45 min",
      description: "Trasa przez lasy i wydmy do jeziora Resko Przymorskie",
      highlights: ["Jezioro Resko", "Rezerwat przyrody", "Punkt widokowy"],
    },
    {
      name: "Rogowo - Kołobrzeg",
      distance: "15 km",
      difficulty: "Średnia",
      time: "1 godz",
      description: "Główna trasa do największego uzdrowiska nad Bałtykiem",
      highlights: ["Latarnia morska", "Molo", "Promenada"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Bike className="w-10 h-10 text-green-600 mr-3" />
            Ścieżki Rowerowe w Rogowie i Okolicy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lazur Resort w Rogowie to raj dla miłośników jazdy na rowerze. Odkryj najpiękniejsze trasy rowerowe nad
            Bałtykiem, w tym słynny Nadmorski Szlak R-10 i międzynarodową trasę EuroVelo 10.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rogowo - Centrum Tras Rowerowych</h2>
            <p className="text-gray-700 mb-4">
              Przez Rogowo przebiega <strong>Nadmorski Szlak Rowerowy R-10</strong>, będący częścią międzynarodowej
              trasy <strong>EuroVelo 10</strong>, która prowadzi wzdłuż całego Bałtyku. To idealne miejsce, by rozpocząć
              malownicze wycieczki rowerowe.
            </p>
            <p className="text-gray-700 mb-4">
              Ścieżki rowerowe w okolicy są dobrze oznaczone i prowadzą przez piękne tereny — lasy sosnowe, wydmy
              nadmorskie oraz wzdłuż brzegu jeziora Resko Przymorskie. Trasy są odpowiednie zarówno dla rodzin z
              dziećmi, jak i dla bardziej doświadczonych rowerzystów.
            </p>
            <p className="text-gray-700 mb-6">
              Dzięki spokojnemu ruchowi samochodowemu, region ten jest wyjątkowo bezpieczny i przyjazny dla fanów
              jednośladów. W okolicy dostępne są liczne punkty widokowe, miejsca do odpoczynku i lokalne atrakcje.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Route className="w-5 h-5 text-green-600 mr-3" />
                <span>Nadmorski Szlak Rowerowy R-10</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span>EuroVelo 10 - trasa wokół Bałtyku</span>
              </div>
              <div className="flex items-center">
                <Trees className="w-5 h-5 text-green-600 mr-3" />
                <span>Trasy przez lasy sosnowe i wydmy</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Ścieżka+rowerowa+R-10+Rogowo+las"
              alt="Ścieżka rowerowa R-10 przez las sosnowy w Rogowie"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popularne Trasy Rowerowe z Rogowa</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{route.name}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{route.difficulty}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm">{route.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm">{route.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Główne atrakcje:</h4>
                    <ul className="text-sm text-gray-600">
                      {route.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dlaczego Lazur Resort to idealna baza dla rowerzystów?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Udogodnienia dla rowerzystów</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bezpieczne miejsce do przechowywania rowerów</li>
                <li>• Możliwość wypożyczenia rowerów na miejscu</li>
                <li>• Mapy tras rowerowych dostępne w recepcji</li>
                <li>• Punkt naprawy rowerów w pobliżu</li>
                <li>• Prysznic po powrocie z wycieczki</li>
                <li>• Parking dla samochodów z bagażnikami</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Lokalizacja</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bezpośredni dostęp do szlaku R-10</li>
                <li>• Start tras do wszystkich głównych miejscowości</li>
                <li>• Spokojne drogi z małym ruchem</li>
                <li>• Bliskość lasu i wydm nadmorskich</li>
                <li>• Łatwy dostęp do punktów widokowych</li>
                <li>• Połączenie z trasami EuroVelo 10</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Atrakcje na Trasach Rowerowych</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Trees className="w-8 h-8 text-green-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Lasy sosnowe</h3>
                <p className="text-gray-600 text-sm">
                  Kilometry ścieżek przez pachnące żywicą lasy sosnowe z miejscami na odpoczynek
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Waves className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Wydmy nadmorskie</h3>
                <p className="text-gray-600 text-sm">Unikalne krajobrazy wydm z panoramicznymi widokami na Bałtyk</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Camera className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Punkty widokowe</h3>
                <p className="text-gray-600 text-sm">
                  Liczne miejsca z pięknymi widokami na morze, jeziora i okoliczne krajobrazy
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-red-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Miejsca odpoczynku</h3>
                <p className="text-gray-600 text-sm">Ławeczki, wiaty i miejsca piknikowe rozmieszczone wzdłuż tras</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                Trasy dla rodzin z dziećmi
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Krótka pętla wokół Rogowa (5 km) - płaska, bezpieczna trasa</span>
                </div>
                <div className="flex items-start">
                  <Trees className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Ścieżka do jeziora Resko (3 km) - przez las, z miejscami na piknik</span>
                </div>
                <div className="flex items-start">
                  <Waves className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Trasa na plażę (1 km) - najkrótsza, idealna dla małych dzieci</span>
                </div>
                <div className="flex items-start">
                  <Camera className="w-4 h-4 text-purple-600 mr-2 mt-1" />
                  <span>Wszystkie trasy z punktami obserwacji przyrody</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bike className="w-5 h-5 text-green-600 mr-2" />
                Praktyczne informacje
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Clock className="w-4 h-4 text-orange-600 mr-2 mt-1" />
                  <span>Najlepszy czas: maj-październik, unikaj godzin 12-15</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Wypożyczalnia rowerów w Mrzeżynie (8 km)</span>
                </div>
                <div className="flex items-start">
                  <Trees className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Serwis rowerowy w Kołobrzegu (15 km)</span>
                </div>
                <div className="flex items-start">
                  <Waves className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Pamiętaj o wodzie i ochronie przeciwsłonecznej</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-green-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Odkryj Bałtyk na Rowerze z Lazur Resort!</h2>
          <p className="text-xl mb-6">
            Zarezerwuj domek i wyrusz na niezapomniane przygody rowerowe po najpiękniejszych trasach nad morzem!
          </p>
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
                Zapytaj o rowery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
