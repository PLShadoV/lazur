import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Wifi, Car, Trees, Waves, Home, Users, Star, CheckCircle, Heart, Bike } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingMenu from "@/components/floating-menu"
import Header from "@/components/header"

export default function LazurResort() {
  return (
    <div className="min-h-screen bg-perla-50">
      <Header />
      <FloatingMenu />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-slate-800 via-blue-800 to-cyan-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="https://lazurrogowo.pl/wp/wp-content/uploads/2025/08/dji_fly_20250718_105210_175_1752828774533_photo_optimized.jpg"
          alt="Lazur Resort Rogowo - domki letniskowe nad morzem"
          fill
          className="object-cover"
          priority
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-perla-50">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                WebkitTextStroke: "1px black",
              }}
            >
              Domki letniskowe <span className="leading-7 text-white font-sans">Lazur Resort</span> Rogowo
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-perla-100 drop-shadow-lg"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                WebkitTextStroke: "0.5px black",
              }}
            >
              Oferujemy domki letniskowe nad morzem dla 4, 6 lub 8 osób
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rezerwacja">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                  Rezerwuj domek
                </Button>
              </Link>
              <Link href="/cennik">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-gray-100 hover:text-black"
                >
                  Zobacz cennik
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-szafir-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-szafir-900 mb-4">Dlaczego domki Lazur Resort w Rogowie?</h2>
            <p className="text-szafir-700 max-w-2xl mx-auto">
              Oferujemy 4 komfortowe domki letniskowe nad morzem, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-szafir-100 to-szafir-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Home className="w-8 h-8 text-szafir-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-szafir-800">Domki dla 8 osób</h3>
              <p className="text-base md:text-base text-szafir-600">
                Przestronne domki letniskowe z pełnym wyposażeniem dla całej rodziny
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rusinowy-100 to-rusinowy-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-8 h-8 text-rusinowy-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-szafir-800">Blisko morza</h3>
              <p className="text-base md:text-base text-szafir-600">
                Noclegi nad morzem w Rogowie - zaledwie kilka minut do plaży
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zloty-100 to-zloty-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wifi className="w-8 h-8 text-zloty-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-szafir-800">Pełne wyposażenie</h3>
              <p className="text-base md:text-base text-szafir-600">
                WiFi, TV, klimatyzacja i wszystko czego potrzebujesz na wakacje
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Car className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-szafir-800">Parking</h3>
              <p className="text-base md:text-base text-szafir-600">Bezpłatny parking przy każdym domku letniskowym</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-szafir-900 mb-4">Nasze domki letniskowe nad morzem</h2>
            <p className="text-szafir-700 max-w-2xl mx-auto">
              4 identyczne domki w Rogowie, każdy dla maksymalnie 8 osób
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-szafir-100 rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://lazurrogowo.pl/wp/wp-content/uploads/2022/05/IMG_20220513_132903.jpg"
                  alt="Domek letniskowy Lazur Resort Rogowo - noclegi nad morzem dla 8 osób"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-rusinowy-600 text-perla-50">Dostępne 4 domki</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-szafir-800">
                  Domek Lazur Resort
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">do 8 osób</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-szafir-600">
                  Komfortowy domek letniskowy nad morzem w Rogowie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />3 sypialnie + salon z rozkładaną sofą
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                      Kuchnia z pełnym wyposażeniem
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />2 łazienki z prysznicem
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                      Duży taras z meblami ogrodowymi
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                      WiFi i telewizja satelitarna
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                      Miejsce na grilla
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                      Parking przy domku
                    </div>
                    <div className="flex items-center text-sm text-szafir-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />5 minut pieszo do morza
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/cennik" className="text-2xl font-bold text-szafir-700 hover:underline">
                      Zobacz cennik
                    </Link>
                    <p className="text-szafir-600">Ceny sezonowe</p>
                  </div>
                  <Link href="/rezerwacja">
                    <Button className="bg-rusinowy-600 hover:bg-rusinowy-700 text-perla-50">Rezerwuj domek</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nowa sekcja - Psy i Rowery */}
      <section className="py-16 bg-szafir-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kolumna z psami */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Pies+na+plaży+Rogowo+domki+przyjazne+zwierzętom"
                  alt="Pies na plaży w Rogowie - domki przyjazne zwierzętom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-rusinowy-600 mr-3" />
                  <h3 className="text-2xl font-bold text-szafir-900">Noclegi z psem nad morzem</h3>
                </div>
                <p className="text-szafir-700 mb-4">
                  Twój czworonożny przyjaciel jest u nas mile widziany! Nasze domki w Rogowie to idealne miejsce na
                  wakacje z psem nad Bałtykiem.
                </p>
                <ul className="space-y-2 text-szafir-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Ogrodzony taras przy każdym domku
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Plaża przyjazna psom (400m)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Lasy sosnowe do spacerów
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Dopłata tylko 15 zł/noc
                  </li>
                </ul>
                <Link href="/okolica/noclegi-z-psem">
                  <Button className="bg-rusinowy-600 hover:bg-rusinowy-700 text-perla-50">
                    Dowiedz się więcej o noclegach z psem
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kolumna z rowerami */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Ścieżka+rowerowa+R-10+Rogowo+las+sosnowy"
                  alt="Ścieżka rowerowa R-10 przez las sosnowy w Rogowie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Bike className="w-8 h-8 text-szafir-600 mr-3" />
                  <h3 className="text-2xl font-bold text-szafir-900">Ścieżki rowerowe nad Bałtykiem</h3>
                </div>
                <p className="text-szafir-700 mb-4">
                  Rogowo to raj dla rowerzystów! Przez miejscowość przebiega Nadmorski Szlak R-10 i międzynarodowa trasa
                  EuroVelo 10.
                </p>
                <ul className="space-y-2 text-szafir-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Nadmorski Szlak Rowerowy R-10
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Trasy do Mrzeżyna, Dźwirzyna, Kołobrzegu
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Bezpieczne ścieżki przez lasy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Wypożyczalnia rowerów w pobliżu
                  </li>
                </ul>
                <Link href="/okolica/sciezki-rowerowe">
                  <Button className="bg-szafir-600 hover:bg-szafir-700 text-perla-50">Odkryj trasy rowerowe</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalizacja */}
      <section id="lokalizacja" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-szafir-900 mb-6">Lokalizacja - Rogowo nad morzem</h2>
              <p className="text-szafir-700 mb-6">
                Lazur Resort znajduje się w Rogowie w województwie zachodniopomorskim. Nasze domki letniskowe nad morzem
                to idealne miejsce na wypoczynek z rodziną, blisko plaży i atrakcji turystycznych.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-rusinowy-600 mr-3" />
                  <span className="text-szafir-700">72-330 Rogowo, województwo zachodniopomorskie</span>
                </div>
                <div className="flex items-center">
                  <Waves className="w-5 h-5 text-rusinowy-600 mr-3" />
                  <span className="text-szafir-700">5 minut pieszo do morza</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-rusinowy-600 mr-3" />
                  <span className="text-szafir-700">15 km od Kołobrzegu</span>
                </div>
                <div className="flex items-center">
                  <Trees className="w-5 h-5 text-rusinowy-600 mr-3" />
                  <span className="text-szafir-700">Otoczenie lasów i wydm</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-szafir-800">Atrakcje w pobliżu:</h3>
                <ul className="space-y-2 text-szafir-700">
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

      {/* Opinie Google */}
      <section className="py-16 bg-szafir-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-szafir-900 mb-4">Opinie Google o Lazur Resort</h2>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-zloty-400 fill-current" />
              ))}
              <span className="ml-2 text-szafir-700">4.9/5 na podstawie opinii Google</span>
            </div>
            <p className="text-szafir-600">Wyszukaj: "Lazur Resort domki letniskowe" w Google</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Fantastyczne domki nad morzem! Byliśmy z rodziną 8 osób i wszyscy byli zachwyceni. Domek bardzo
                  czysty, dobrze wyposażony. Plaża blisko, parking przy domku. Właściciele bardzo mili i pomocni.
                  Zdecydowanie wrócimy!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-szafir-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-szafir-700 font-semibold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Magdalena Kowalczyk</p>
                    <p className="text-sm text-szafir-500">2 miesiące temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Świetne miejsce na wakacje z psem! Nasz labrador był zachwycony plażą i lasem. Domek przestronny,
                  taras ogrodzony - pies mógł swobodnie biegać. Lokalizacja idealna - spokojnie, a blisko do Kołobrzegu.
                  Polecam!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rusinowy-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rusinowy-700 font-semibold">PW</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Piotr Wiśniewski</p>
                    <p className="text-sm text-szafir-500">3 miesiące temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Najlepsze domki nad morzem w jakich byliśmy! Czysto, komfortowo, wszystko działa. Dzieci były
                  zachwycone bliskością plaży. Rowery można wypożyczyć w pobliżu - świetne trasy. Obsługa na najwyższym
                  poziomie. 10/10!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-zloty-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-zloty-700 font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Anna Szymańska</p>
                    <p className="text-sm text-szafir-500">1 miesiąc temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Domek w Rogowie to strzał w dziesiątkę! Spokojnie, czysto, blisko morza. Kuchnia świetnie wyposażona,
                  łazienki czyste. WiFi działa bez zarzutu. Parking bezpłatny. Właściciele bardzo pomocni. Już planujemy
                  kolejny pobyt!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-700 font-semibold">TN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Tomasz Nowak</p>
                    <p className="text-sm text-szafir-500">4 miesiące temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Rewelacyjne wakacje w Lazur Resort! Domek dla 6 osób idealny dla naszej rodziny. Wszystko czyste i
                  zadbane. Taras z grillem super. Plaża piękna i blisko. Ścieżki rowerowe fantastyczne. Już
                  zarezerwowaliśmy na przyszły rok!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-szafir-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-szafir-700 font-semibold">KL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Katarzyna Lewandowska</p>
                    <p className="text-sm text-szafir-500">2 miesiące temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zloty-400 fill-current" />
                  ))}
                </div>
                <p className="text-szafir-700 mb-4">
                  "Najlepszy wybór na wakacje nad morzem! Domki w Rogowie to prawdziwa perełka. Cisza, spokój, a
                  jednocześnie blisko do wszystkich atrakcji. Kołobrzeg 15 minut autem. Polecam każdemu szukającemu
                  komfortowego wypoczynku!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rusinowy-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rusinowy-700 font-semibold">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-szafir-800">Jakub Kowalski</p>
                    <p className="text-sm text-szafir-500">1 miesiąc temu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-szafir-900 text-perla-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-rusinowy-600 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-perla-50" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Lazur Resort</h4>
                  <p className="text-sm text-perla-300">Rogowo</p>
                </div>
              </div>
              <p className="text-perla-300 text-sm">
                Domki letniskowe nad morzem w Rogowie. Noclegi dla 8 osób w województwie zachodniopomorskim.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Strony</h5>
              <ul className="space-y-2 text-sm text-perla-300">
                <li>
                  <Link href="/galeria" className="hover:text-perla-100">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link href="/cennik" className="hover:text-perla-100">
                    Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/rezerwacja" className="hover:text-perla-100">
                    Rezerwacja
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-perla-100">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Okolica</h5>
              <ul className="space-y-2 text-sm text-perla-300">
                <li>
                  <Link href="/okolica/mrzezyno" className="hover:text-perla-100">
                    Domki Mrzeżyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/dzwirzyno" className="hover:text-perla-100">
                    Domki Dźwirzyno
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/kolobrzeg" className="hover:text-perla-100">
                    Domki Kołobrzeg
                  </Link>
                </li>
                <li>
                  <Link href="/okolica/noclegi-z-psem" className="hover:text-perla-100">
                    Noclegi z psem
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Kontakt</h5>
              <ul className="space-y-2 text-sm text-perla-300">
                <li>+48 502 939 725</li>
                <li>lazurresort@op.pl</li>
                <li>72-330 Rogowo</li>
                <li>woj. zachodniopomorskie</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-szafir-800 mt-8 pt-8 text-center text-sm text-perla-300">
            <p>&copy; 2024 Lazur Resort Rogowo. Domki letniskowe nad morzem. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
