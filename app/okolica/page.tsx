import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Button } from "@/components/ui/button"
import { Waves, Camera, Bike, Fish, Anchor } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Okolica Rogowa - Lazur Resort | Atrakcje nad morzem Bałtyckim",
  description:
    "Odkryj okolice Rogowa - spokojną miejscowość nad Bałtykiem. Blisko Mrzeżyna, Dźwirzyna i Kołobrzegu. Domki letniskowe Lazur Resort w sercu nadmorskich atrakcji.",
  keywords:
    "Rogowo okolica, Mrzeżyno Dźwirzyno Kołobrzeg, domki nad Bałtykiem, trasy rowerowe Rogowo, jezioro Resko, plaża Rogowo",
}

export default function Okolica() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Okolica Rogowa - Perła nad Bałtykiem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odkryj urokliwe miejscowości w okolicy Lazur Resort. Rogowo to idealna baza wypadowa do zwiedzania
            najpiękniejszych zakątków zachodniopomorskiego wybrzeża.
          </p>
        </div>

        {/* Rogowo */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Waves className="w-8 h-8 text-blue-600 mr-3" />
                Rogowo – kameralna perełka nad Bałtykiem
              </h2>
              <p className="text-gray-700 mb-4">
                Rogowo to cicha, malowniczo położona miejscowość nad morzem, usytuowana pomiędzy Mrzeżynem a Dźwirzynem.
                To idealne miejsce dla osób poszukujących wytchnienia od miejskiego zgiełku.
              </p>
              <p className="text-gray-700 mb-4">
                Szeroka, piaszczysta plaża oddzielona od zabudowań pasem sosnowego lasu tworzy idealne warunki do
                relaksu i spacerów. W Rogowie znajduje się jezioro Resko, idealne do wędkowania, windsurfingu czy
                kajaków.
              </p>
              <p className="text-gray-700 mb-6">
                Dzięki swojej lokalizacji, noclegi w Rogowie są świetną bazą wypadową do zwiedzania okolicznych
                atrakcji: latarni morskiej w Kołobrzegu, portu w Mrzeżynie, czy tras rowerowych do Dźwirzyna i Grzybowa.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  domki letniskowe Rogowo
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">spokojna plaża</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">jezioro Resko</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">noclegi blisko morza</span>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Rogowo+plaża+las+sosnowy"
                alt="Rogowo - spokojna plaża z lasem sosnowym"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mrzeżyno */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Mrzeżyno+port+rybacki+kutry"
                alt="Mrzeżyno - port rybacki z kutrami"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Anchor className="w-8 h-8 text-blue-600 mr-3" />
                Mrzeżyno – port rybacki i klimatyczne plaże
              </h2>
              <p className="text-gray-700 mb-4">
                Mrzeżyno to nadmorska miejscowość z wyjątkowym klimatem, położona zaledwie 8 km od Rogowa. Znana z
                urokliwego portu rybackiego, gdzie można obserwować kutry wypływające w morze i kupić świeże ryby prosto
                z łodzi.
              </p>
              <p className="text-gray-700 mb-4">
                Plaże w Mrzeżynie są szerokie, czyste i strzeżone – idealne dla rodzin z dziećmi. Dużym atutem są także
                nadmorskie kawiarnie, smażalnie i promenada.
              </p>
              <p className="text-gray-700 mb-6">
                Turyści doceniają Mrzeżyno za kameralność i bliskość natury, a także możliwość skorzystania z rejsów
                turystycznych po morzu Bałtyckim.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">port rybacki</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">świeże ryby</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">plaża strzeżona</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">rejsy po Bałtyku</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dźwirzyno */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Fish className="w-8 h-8 text-blue-600 mr-3" />
                Dźwirzyno – raj dla rodzin i wodniaków
              </h2>
              <p className="text-gray-700 mb-4">
                Dźwirzyno to znane nadmorskie letnisko z dostępem do morza oraz jeziora Resko Przymorskie. Idealne dla
                rodzin z dziećmi, rowerzystów i amatorów sportów wodnych.
              </p>
              <p className="text-gray-700 mb-4">
                Miejscowość posiada zadbane plaże z łagodnym zejściem, placami zabaw oraz punktami gastronomicznymi. W
                sezonie letnim funkcjonują wypożyczalnie kajaków, rowerów wodnych i sprzętu do windsurfingu.
              </p>
              <p className="text-gray-700 mb-6">
                Spacer promenadą lub ścieżką wzdłuż jeziora to obowiązkowy punkt dla każdego turysty. Dźwirzyno to
                doskonałe miejsce na rodzinne wakacje i aktywny wypoczynek nad morzem.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  jezioro Resko Przymorskie
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">sporty wodne</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">wakacje z dziećmi</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">windsurfing</span>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Dźwirzyno+jezioro+kajaki+windsurfing"
                alt="Dźwirzyno - jezioro z kajakami i windsurfingiem"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Kołobrzeg */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Kołobrzeg+latarnia+morska+molo"
                alt="Kołobrzeg - latarnia morska i molo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="w-8 h-8 text-blue-600 mr-3" />
                Kołobrzeg – nadmorskie uzdrowisko z historią
              </h2>
              <p className="text-gray-700 mb-4">
                Kołobrzeg to największe uzdrowisko w północnej Polsce i jeden z najchętniej odwiedzanych kurortów nad
                Bałtykiem. Oferuje bogactwo atrakcji: słynne molo, latarnia morska, nadmorski park zdrojowy, promenada
                oraz port pasażerski z rejsami turystycznymi.
              </p>
              <p className="text-gray-700 mb-4">
                W Kołobrzegu znajdziesz również aquaparki, muzea, kawiarnie, galerie sztuki oraz wiele punktów
                gastronomicznych. Miasto łączy w sobie funkcję wypoczynkową i leczniczą, dzięki rozbudowanej
                infrastrukturze sanatoryjnej.
              </p>
              <p className="text-gray-700 mb-6">
                Dzięki dobremu połączeniu z Rogowem (tylko 15 min drogi), warto zaplanować tam choć jeden dzień pobytu.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">latarnia morska</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">molo Kołobrzeg</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">uzdrowisko</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">aquapark</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trasy rowerowe */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Bike className="w-8 h-8 text-blue-600 mr-3" />
                Trasy rowerowe w Rogowie i okolicy
              </h2>
              <p className="text-gray-700 mb-4">
                Rogowo to prawdziwy raj dla miłośników aktywnego wypoczynku. Przez miejscowość przebiega Nadmorski Szlak
                Rowerowy R-10, będący częścią międzynarodowej trasy EuroVelo 10, która prowadzi wzdłuż całego Bałtyku.
              </p>
              <p className="text-gray-700 mb-4">
                To idealne miejsce, by rozpocząć malownicze wycieczki w kierunku Mrzeżyna, Dźwirzyna, Grzybowa i
                Kołobrzegu. Ścieżki rowerowe w tej okolicy są dobrze oznaczone i prowadzą przez piękne tereny — lasy
                sosnowe, wydmy nadmorskie oraz wzdłuż brzegu jeziora Resko Przymorskie.
              </p>
              <p className="text-gray-700 mb-4">
                To doskonała okazja, aby połączyć sport z odkrywaniem uroków przyrody. Trasy są odpowiednie zarówno dla
                rodzin z dziećmi, jak i dla bardziej doświadczonych rowerzystów.
              </p>
              <p className="text-gray-700 mb-6">
                W okolicy dostępne są także liczne punkty widokowe, miejsca do odpoczynku i lokalne atrakcje, które
                można odwiedzić podczas przejażdżki. Dzięki spokojnemu ruchowi samochodowemu, region ten jest wyjątkowo
                bezpieczny i przyjazny dla fanów jednośladów.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Nadmorski Szlak R-10</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">EuroVelo 10</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">trasy rodzinne</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">punkty widokowe</span>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Ścieżka+rowerowa+las+sosnowy+Rogowo"
                alt="Ścieżka rowerowa przez las sosnowy w Rogowie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Odkryj Okolice Rogowa z Lazur Resort</h2>
          <p className="text-xl mb-6">
            Zarezerwuj domek letniskowy i ciesz się bliskością najpiękniejszych miejsc nad Bałtykiem!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezerwacja">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Zarezerwuj domek
              </Button>
            </Link>
            <Link href="/galeria">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Zobacz galerię
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
