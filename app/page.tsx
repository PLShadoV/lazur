import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Wifi, Car, Trees, Waves, Home, Users, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingMenu from "@/components/floating-menu"
import Header from "@/components/header"

export default function LazurResort() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Lazur+Resort+Rogowo+domki+nad+morzem"
          alt="Lazur Resort Rogowo - domki letniskowe nad morzem"
          fill
          className="object-cover"
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Domki letniskowe <span className="text-blue-300">Lazur Resort</span> Rogowo
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Nowoczesne domki nad morzem w Rogowie, województwo zachodniopomorskie. Idealne noclegi dla 8 osób w
              otoczeniu natury, blisko plaży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rezerwacja">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Rezerwuj domek
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
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dlaczego domki Lazur Resort w Rogowie?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy 4 komfortowe domki letniskowe nad morzem, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Domki dla 8 osób</h3>
              <p className="text-gray-600">Przestronne domki letniskowe z pełnym wyposażeniem dla całej rodziny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Blisko morza</h3>
              <p className="text-gray-600">Noclegi nad morzem w Rogowie - zaledwie kilka minut do plaży</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pełne wyposażenie</h3>
              <p className="text-gray-600">WiFi, TV, klimatyzacja i wszystko czego potrzebujesz na wakacje</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Parking</h3>
              <p className="text-gray-600">Bezpłatny parking przy każdym domku letniskowym</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nasze domki letniskowe nad morzem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4 identyczne domki w Rogowie, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Domek+Lazur+Resort+Rogowo"
                  alt="Domek letniskowy Lazur Resort Rogowo - noclegi nad morzem dla 8 osób"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Dostępne 4 domki</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Domek Lazur Resort
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">do 8 osób</span>
                  </div>
                </CardTitle>
                <CardDescription>Komfortowy domek letniskowy nad morzem w Rogowie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />3 sypialnie + salon z rozkładaną sofą
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Kuchnia z pełnym wyposażeniem
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />2 łazienki z prysznicem
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Duży taras z meblami ogrodowymi
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      WiFi i telewizja satelitarna
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Miejsce na grilla
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Parking przy domku
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />5 minut pieszo do morza
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/cennik" className="text-2xl font-bold text-blue-600 hover:underline">
                      Zobacz cennik
                    </Link>
                    <p className="text-gray-600">Ceny sezonowe</p>
                  </div>
                  <Link href="/rezerwacja">
                    <Button className="bg-blue-600 hover:bg-blue-700">Rezerwuj domek</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lokalizacja */}
      <section id="lokalizacja" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lokalizacja - Rogowo nad morzem</h2>
              <p className="text-gray-600 mb-6">
                Lazur Resort znajduje się w Rogowie w województwie zachodniopomorskim. Nasze domki letniskowe nad morzem
                to idealne miejsce na wypoczynek z rodziną, blisko plaży i atrakcji turystycznych.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>72-330 Rogowo, województwo zachodniopomorskie</span>
                </div>
                <div className="flex items-center">
                  <Waves className="w-5 h-5 text-blue-600 mr-3" />
                  <span>5 minut pieszo do morza</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-blue-600 mr-3" />
                  <span>15 km od Kołobrzegu</span>
                </div>
                <div className="flex items-center">
                  <Trees className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Otoczenie lasów i wydm</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Atrakcje w pobliżu:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Plaża w Rogowie - 400m</li>
                  <li>• Ścieżki rowerowe - 100m</li>
                  <li>• Kołobrzeg - 15 km</li>
                  <li>• Mrzeżyno - 8 km</li>
                  <li>• Dźwirzyno - 12 km</li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Mapa+Rogowo+domki+nad+morzem"
                alt="Mapa lokalizacji Lazur Resort Rogowo - domki letniskowe nad morzem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Opinie o domkach Lazur Resort</h2>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600">4.9/5 na podstawie 127 opinii</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Wspaniałe domki nad morzem! Bardzo czyste, dobrze wyposażone. Lokalizacja idealna - blisko plaży w
                  Rogowie. Polecam wszystkim szukającym noclegów nad morzem."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">AK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Anna Kowalska</p>
                    <p className="text-sm text-gray-500">Sierpień 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Rodzinny wypoczynek w domku letniskowym udany w 100%! Miejsce dla 8 osób, dzieci były zachwycone
                  bliskością morza. Na pewno wrócimy do Lazur Resort!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">MN</span>
                  </div>
                  <div>
                    <p className="font-semibold">Marek Nowak</p>
                    <p className="text-sm text-gray-500">Lipiec 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Piękne, spokojne miejsce nad morzem. Domek w Rogowie to prawdziwa perełka. Obsługa bardzo miła,
                  polecam te noclegi nad morzem!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">EW</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ewa Wiśniewska</p>
                    <p className="text-sm text-gray-500">Wrzesień 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Lazur Resort</h4>
                  <p className="text-sm text-gray-400">Rogowo</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Domki letniskowe nad morzem w Rogowie. Noclegi dla 8 osób w województwie zachodniopomorskim.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Strony</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/galeria" className="hover:text-white">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link href="/cennik" className="hover:text-white">
                    Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/rezerwacja" className="hover:text-white">
                    Rezerwacja
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-white">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Okolica</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/okolica/mrzezyno" className="hover:text-white">
                    Domki Mrzeżyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/dzwirzyno" className="hover:text-white">
                    Domki Dźwirzyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/kolobrzeg" className="hover:text-white">
                    Domki Kołobrzeg
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/noclegi-z-psem" className="hover:text-white">
                    Noclegi z psem
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Kontakt</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+48 123 456 789</li>
                <li>rezerwacje@lazurresort.pl</li>
                <li>72-330 Rogowo</li>
                <li>woj. zachodniopomorskie</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Lazur Resort Rogowo. Domki letniskowe nad morzem. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
