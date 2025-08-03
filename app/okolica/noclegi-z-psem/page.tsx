import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Trees, Waves, Car, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Noclegi nad morzem z psem - Lazur Resort Rogowo | Domki przyjazne zwierzętom",
  description:
    "Noclegi nad morzem z psem w Rogowie. Lazur Resort - domki letniskowe przyjazne zwierzętom. Plaża dla psów, spacery po lesie, noclegi dla 8 osób + pies.",
  keywords:
    "noclegi z psem nad morzem, domki z psem Rogowo, Lazur Resort pies, noclegi przyjazne zwierzętom, plaża dla psów Bałtyk",
}

export default function NoclegiZPsem() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Heart className="w-10 h-10 text-red-500 mr-3" />
            Noclegi nad Morzem z Psem - Lazur Resort Rogowo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Twój czworonożny przyjaciel jest u nas mile widziany! Lazur Resort w Rogowie to idealne miejsce na wakacje
            nad morzem z psem. Oferujemy domki przyjazne zwierzętom w otoczeniu natury.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego Rogowo to raj dla psów?</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Trees className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Lasy sosnowe do eksploracji</h3>
                  <p className="text-gray-600">Kilometry ścieżek leśnych idealnych na długie spacery z czworonogiem</p>
                </div>
              </div>
              <div className="flex items-start">
                <Waves className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Plaża przyjazna psom</h3>
                  <p className="text-gray-600">Szeroka plaża gdzie pies może swobodnie biegać i bawić się w wodzie</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Spokojna okolica</h3>
                  <p className="text-gray-600">Z dala od ruchliwych ulic - bezpieczne środowisko dla zwierząt</p>
                </div>
              </div>
              <div className="flex items-start">
                <Car className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Parking przy domku</h3>
                  <p className="text-gray-600">Wygodny transport psa bez długich spacerów z bagażami</p>
                </div>
              </div>
            </div>
            <Link href="/rezerwacja">
              <Button className="bg-green-600 hover:bg-green-700">Zarezerwuj domek z psem</Button>
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Pies+na+plaży+Rogowo+las+sosnowy"
              alt="Pies bawiący się na plaży w Rogowie wśród lasów sosnowych"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Co oferujemy właścicielom psów w Lazur Resort?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Domki przyjazne zwierzętom</h3>
                <p className="text-gray-600">
                  Wszystkie nasze domki akceptują zwierzęta. Twój pies będzie się czuł jak w domu w przestronnym domku
                  dla 8 osób.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardContent className="p-6">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dostęp do plaży</h3>
                <p className="text-gray-600">
                  Zaledwie 400 metrów do szerokiej, piaszczystej plaży gdzie pies może swobodnie biegać i pływać w
                  Bałtyku.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardContent className="p-6">
                <Trees className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ścieżki leśne</h3>
                <p className="text-gray-600">
                  Bezpośredni dostęp do kilometrów ścieżek w lesie sosnowym - idealne na poranną i wieczorną
                  przechadzką.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ogrodzony teren</h3>
                <p className="text-gray-600">
                  Każdy domek posiada ogrodzony taras gdzie pies może bezpiecznie przebywać bez smyczy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardContent className="p-6">
                <Car className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Parking przy domku</h3>
                <p className="text-gray-600">
                  Bezpłatny parking bezpośrednio przy domku - wygodne rozładowanie bagaży i transportu zwierzęcia.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-red-200">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Przyjazna atmosfera</h3>
                <p className="text-gray-600">
                  Rozumiemy, że pies to członek rodziny. U nas każdy czworonóg jest traktowany z należytą troską.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulamin pobytu z psem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Co jest dozwolone
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pobyt psów wszystkich ras i rozmiarów</li>
                <li>• Spacery po lesie bez smyczy (pod nadzorem)</li>
                <li>• Kąpiel psa w morzu</li>
                <li>• Przebywanie na tarasie domku</li>
                <li>• Korzystanie z ścieżek rowerowych</li>
                <li>• Pobyt maksymalnie 2 psów na domek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Zasady pobytu
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dopłata 30 zł za psa za noc</li>
                <li>• Pies musi być zaszczepiony i odrobaczony</li>
                <li>• Właściciel odpowiada za zachowanie psa</li>
                <li>• Sprzątanie po psie obowiązkowe</li>
                <li>• Pies nie może przebywać sam w domku</li>
                <li>• Kaucja zwrotna zwiększona o 100 zł</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Atrakcje dla psów w okolicy</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Trees className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Las sosnowy - idealne miejsce na długie spacery</span>
                </div>
                <div className="flex items-start">
                  <Waves className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Plaża w Rogowie - swobodne bieganie po piasku</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-purple-600 mr-2 mt-1" />
                  <span>Jezioro Resko - możliwość kąpieli w słodkiej wodzie</span>
                </div>
                <div className="flex items-start">
                  <Trees className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Ścieżki rowerowe - spacery wzdłuż tras</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-purple-600 mr-2 mt-1" />
                  <span>Wydmy nadmorskie - eksploracja nowych zapachów</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Praktyczne informacje</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Car className="w-4 h-4 text-orange-600 mr-2 mt-1" />
                  <span>Weterynarz w Kołobrzegu - 15 km</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-purple-600 mr-2 mt-1" />
                  <span>Sklep zoologiczny w Mrzeżynie - 8 km</span>
                </div>
                <div className="flex items-start">
                  <Heart className="w-4 h-4 text-red-600 mr-2 mt-1" />
                  <span>Karma i miski dostępne na życzenie</span>
                </div>
                <div className="flex items-start">
                  <Trees className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  <span>Worki na odchody zapewnione</span>
                </div>
                <div className="flex items-start">
                  <Waves className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Ręczniki dla psów po kąpieli w morzu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-green-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Wakacje nad morzem z Twoim najlepszym przyjacielem!</h2>
          <p className="text-xl mb-6">
            Zarezerwuj domek w Lazur Resort i ciesz się wspólnym czasem z psem nad Bałtykiem!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezerwacja">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Zarezerwuj z psem
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
