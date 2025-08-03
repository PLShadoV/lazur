import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Waves, Camera, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Domki na wynajem Mrzeżyno - Lazur Resort Rogowo | Noclegi nad morzem",
  description:
    "Domki letniskowe w okolicy Mrzeżyna. Lazur Resort Rogowo - idealna baza do zwiedzania Mrzeżyna. Noclegi nad morzem 8 km od popularnego kurortu.",
  keywords:
    "domki wynajem Mrzeżyno, noclegi Mrzeżyno, Lazur Resort Mrzeżyno, domki letniskowe Mrzeżyno, noclegi nad morzem Mrzeżyno",
}

export default function Mrzezyno() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Domki na Wynajem w Okolicy Mrzeżyna</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lazur Resort w Rogowie to doskonała alternatywa dla domków bezpośrednio w Mrzeżynie. Zaledwie 8 km dzieli
            nas od tego popularnego kurortu nadmorskiego.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego Lazur Resort zamiast domków w Mrzeżynie?</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Car className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Bliska odległość</h3>
                  <p className="text-gray-600">Zaledwie 8 km i 10 minut jazdy samochodem do centrum Mrzeżyna</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Spokój i cisza</h3>
                  <p className="text-gray-600">Z dala od tłumów turystycznych, ale blisko wszystkich atrakcji</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Lepsze ceny</h3>
                  <p className="text-gray-600">Konkurencyjne ceny w porównaniu do domków bezpośrednio w Mrzeżynie</p>
                </div>
              </div>
            </div>
            <Link href="/rezerwacja">
              <Button className="bg-blue-600 hover:bg-blue-700">Zarezerwuj domek w Rogowie</Button>
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Mrzeżyno+plaża+domki"
              alt="Mrzeżyno plaża - domki letniskowe Lazur Resort w pobliżu"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Atrakcje Mrzeżyna dostępne z Lazur Resort
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Waves className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Szeroka plaża</h3>
                <p className="text-gray-600">
                  Jedna z najszerszych plaż na polskim wybrzeżu z drobnym, złotym piaskiem. Idealna dla rodzin z
                  dziećmi.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Promenada nadmorska</h3>
                <p className="text-gray-600">
                  Malownicza promenada z licznymi restauracjami, kawiarniami i sklepami z pamiątkami.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Port rybacki</h3>
                <p className="text-gray-600">
                  Klimatyczny port z możliwością zakupu świeżych ryb bezpośrednio od rybaków.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Domki Letniskowe Lazur Resort - Twoja Baza w Okolicy Mrzeżyna
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dlaczego warto wybrać nasze domki?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Domki dla maksymalnie 8 osób</li>
                <li>• 3 sypialnie + salon z rozkładaną sofą</li>
                <li>• W pełni wyposażona kuchnia</li>
                <li>• 2 łazienki z prysznicem</li>
                <li>• Duży taras z meblami ogrodowymi</li>
                <li>• Bezpłatny parking</li>
                <li>• WiFi i TV satelitarna</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Lokalizacja względem Mrzeżyna</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 8 km do centrum Mrzeżyna</li>
                <li>• 10 minut jazdy samochodem</li>
                <li>• Bezpośrednie połączenie drogowe</li>
                <li>• Możliwość dojazdu rowerem (30 min)</li>
                <li>• Blisko przystanku autobusowego</li>
                <li>• Parking przy każdym domku</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Zarezerwuj Domek w Okolicy Mrzeżyna</h2>
          <p className="text-xl mb-6">Lazur Resort Rogowo - idealna alternatywa dla domków w Mrzeżynie!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezerwacja">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Sprawdź dostępność
              </Button>
            </Link>
            <Link href="/cennik">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
