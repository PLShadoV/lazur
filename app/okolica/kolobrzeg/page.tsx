import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Camera, Waves, Clock, Users, Anchor, TreePine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Domki na wynajem Kołobrzeg - Lazur Resort Rogowo | Noclegi blisko uzdrowiska",
  description:
    "Domki letniskowe w okolicy Kołobrzegu. Lazur Resort Rogowo - 15 km od największego uzdrowiska nad Bałtykiem. Noclegi dla 8 osób blisko latarni morskiej i molo.",
  keywords:
    "domki wynajem Kołobrzeg, noclegi Kołobrzeg, Lazur Resort Kołobrzeg, domki letniskowe Kołobrzeg, noclegi uzdrowisko Kołobrzeg",
}

export default function Kolobrzeg() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Domki na Wynajem w Okolicy Kołobrzegu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lazur Resort w Rogowie to idealna alternatywa dla domków bezpośrednio w Kołobrzegu. Zaledwie 15 km dzieli
            nas od największego uzdrowiska nad polskim Bałtykiem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dlaczego Lazur Resort zamiast domków w Kołobrzegu?
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Car className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Doskonała lokalizacja</h3>
                  <p className="text-gray-600">Zaledwie 15 km i 20 minut jazdy do centrum Kołobrzegu</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Spokój z dala od tłumów</h3>
                  <p className="text-gray-600">Ciesz się ciszą Rogowa, a zwiedzaj Kołobrzeg kiedy chcesz</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Atrakcyjne ceny</h3>
                  <p className="text-gray-600">Znacznie niższe koszty niż noclegi bezpośrednio w Kołobrzegu</p>
                </div>
              </div>
              <div className="flex items-start">
                <TreePine className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Bliskość natury</h3>
                  <p className="text-gray-600">Własna plaża w Rogowie + dostęp do atrakcji Kołobrzegu</p>
                </div>
              </div>
            </div>
            <Link href="/rezerwacja">
              <Button className="bg-blue-600 hover:bg-blue-700">Zarezerwuj domek w Rogowie</Button>
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Kołobrzeg+latarnia+morska+molo"
              alt="Kołobrzeg - latarnia morska i słynne molo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Atrakcje Kołobrzegu dostępne z Lazur Resort
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Latarnia morska</h3>
                <p className="text-gray-600">
                  Zabytkowa latarnia morska z 1945 roku - symbol Kołobrzegu. Wejście na szczyt zapewnia panoramiczny
                  widok na miasto i morze.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Anchor className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Molo w Kołobrzegu</h3>
                <p className="text-gray-600">
                  220-metrowe molo to najsłynniejsza atrakcja miasta. Spacer po molo, szczególnie o zachodzie słońca, to
                  niezapomniane przeżycie.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Promenada nadmorska</h3>
                <p className="text-gray-600">
                  Kilkukilometrowa promenada z restauracjami, kawiarniami, sklepami i punktami rozrywki. Idealna na
                  wieczorne spacery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Park Zdrojowy</h3>
                <p className="text-gray-600">
                  Zabytkowy park z alejkami spacerowymi, stawami i zabytkowymi budynkami uzdrowiskowymi. Miejsce relaksu
                  w centrum miasta.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Anchor className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Port pasażerski</h3>
                <p className="text-gray-600">
                  Rejsy statkiem po Bałtyku, połowy morskie i wycieczki do Bornholmu. Port oferuje wiele atrakcji
                  wodnych.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Aquapark</h3>
                <p className="text-gray-600">
                  Nowoczesny aquapark z basenami, zjeżdżalniami i strefą wellness. Idealna atrakcja dla całej rodziny w
                  każdą pogodę.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Kołobrzeg - Największe Uzdrowisko nad Polskim Bałtykiem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Historia i kultura</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ponad 750 lat historii miasta</li>
                <li>• Zabytkowa katedra i stare miasto</li>
                <li>• Muzea i galerie sztuki</li>
                <li>• Festiwale i wydarzenia kulturalne</li>
                <li>• Tradycje uzdrowiskowe od XIX wieku</li>
                <li>• Zabytki architektury sakralnej</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Nowoczesne atrakcje</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Nowoczesne sanatorium i spa</li>
                <li>• Aquaparki i centra rozrywki</li>
                <li>• Marina i port jachtowy</li>
                <li>• Centrum handlowe i restauracje</li>
                <li>• Kino, teatr i życie nocne</li>
                <li>• Korty tenisowe i pola golfowe</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Dlaczego Lazur Resort to idealna baza?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Car className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>15 minut jazdy do centrum Kołobrzegu</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Bezpłatny parking przy każdym domku</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Domki dla 8 osób - idealne dla rodzin</span>
                </li>
                <li className="flex items-start">
                  <Waves className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Własna plaża w Rogowie (400m)</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                  <span>Spokój wieczorami z dala od tłumów</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Plan dnia w Kołobrzegu</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">9:00</span>
                  <span>Wyjazd z Lazur Resort do Kołobrzegu</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">10:00</span>
                  <span>Spacer po promenadzie i molo</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">12:00</span>
                  <span>Obiad w nadmorskiej restauracji</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">14:00</span>
                  <span>Zwiedzanie latarni morskiej</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">16:00</span>
                  <span>Relaks w Parku Zdrojowym</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3 mt-0.5">18:00</span>
                  <span>Powrót do spokojnego Rogowa</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-orange-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Odkryj Kołobrzeg z Lazur Resort Rogowo</h2>
          <p className="text-xl mb-6">Zarezerwuj domek i ciesz się bliskością największego uzdrowiska nad Bałtykiem!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezerwacja">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Zarezerwuj domek
              </Button>
            </Link>
            <Link href="/cennik">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Zobacz cennik
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
