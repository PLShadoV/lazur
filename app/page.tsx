import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Car, Waves, Home, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingMenu from "@/components/floating-menu"
import Header from "@/components/header"

export default function LazurResort() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <FloatingMenu />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-navy-800 to-navy-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Lazur+Resort+Rogowo+domki+nad+morzem"
          alt="Lazur Resort Rogowo - domki letniskowe nad morzem"
          fill
          className="object-cover"
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-cream-50">
            <h1 className="text-5xl font-bold mb-6">
              Domki letniskowe <span className="text-amber-300">Lazur Resort</span> Rogowo
            </h1>
            <p className="text-xl mb-8 text-cream-100">Oferujemy domki letniskowe nad morzem dla 4, 6 lub 8 osób</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rezerwacja">
                <Button size="lg" className="bg-cream-50 text-navy-700 hover:bg-cream-100">
                  Rezerwuj domek
                </Button>
              </Link>
              <Link href="/cennik">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-navy-700 bg-transparent"
                >
                  Zobacz cennik
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Dlaczego domki Lazur Resort w Rogowie?</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Oferujemy 4 komfortowe domki letniskowe nad morzem, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-navy-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Domki dla 8 osób</h3>
              <p className="text-navy-600">Przestronne domki letniskowe z pełnym wyposażeniem dla całej rodziny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Blisko morza</h3>
              <p className="text-navy-600">Noclegi nad morzem w Rogowie - zaledwie kilka minut do plaży</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Pełne wyposażenie</h3>
              <p className="text-navy-600">WiFi, TV, klimatyzacja i wszystko czego potrzebujesz na wakacje</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Parking</h3>
              <p className="text-navy-600">Bezpłatny parking przy każdym domku letniskowym</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Nasze domki letniskowe nad morzem</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              4 identyczne domki w Rogowie, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-navy-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Domek+Lazur+Resort+Rogowo"
                  alt="Domek letniskowy Lazur Resort Rogowo - noclegi nad morzem dla 8 osób"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-sage-600 text-cream-50">Dostępne 4 domki</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-navy-800">
                  Domek Lazur Resort
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">do 8 osób</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-navy-600">
                  Komfortowy domek letniskowy nad morzem w Rogowie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />3 sypialnie + salon z rozkładaną sofą
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />
                      Kuchnia z pełnym wyposażeniem
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />2 łazienki z prysznicem
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />
                      Duży taras z meblami ogrodowymi
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />
                      WiFi i telewizja satelitarna
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />
                      Miejsce na grilla
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />
                      Parking przy domku
                    </div>
                    <div className="flex items-center text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-sage-600" />5 minut pieszo do morza
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/cennik" className="text-2xl font-bold text-navy-700 hover:underline">
                      Zobacz cennik
                    </Link>
                    <p className="text-navy-600">Ceny sezonowe</p>
                  </div>
                  <Link href="/rezerwacja">
                    <Button className="bg-navy-700 hover:bg-navy-800 text-cream-50">Rezerwuj domek</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-cream-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Lazur Resort</h4>
                  <p className="text-sm text-cream-300">Rogowo</p>
                </div>
              </div>
              <p className="text-cream-300 text-sm">
                Domki letniskowe nad morzem w Rogowie. Noclegi dla 8 osób w województwie zachodniopomorskim.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Strony</h5>
              <ul className="space-y-2 text-sm text-cream-300">
                <li>
                  <Link href="/galeria" className="hover:text-cream-100">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link href="/cennik" className="hover:text-cream-100">
                    Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/rezerwacja" className="hover:text-cream-100">
                    Rezerwacja
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-cream-100">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Okolica</h5>
              <ul className="space-y-2 text-sm text-cream-300">
                <li>
                  <Link href="/okolica/mrzezyno" className="hover:text-cream-100">
                    Domki Mrzeżyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/dzwirzyno" className="hover:text-cream-100">
                    Domki Dźwirzyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/kolobrzeg" className="hover:text-cream-100">
                    Domki Kołobrzeg
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/noclegi-z-psem" className="hover:text-cream-100">
                    Noclegi z psem
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Kontakt</h5>
              <ul className="space-y-2 text-sm text-cream-300">
                <li>+48 502 939 725</li>
                <li>lazurresort@op.pl</li>
                <li>72-330 Rogowo</li>
                <li>woj. zachodniopomorskie</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-800 mt-8 pt-8 text-center text-sm text-cream-300">
            <p>&copy; 2024 Lazur Resort Rogowo. Domki letniskowe nad morzem. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
