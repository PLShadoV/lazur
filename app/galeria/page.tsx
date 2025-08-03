import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria - Lazur Resort Rogowo | Zdjęcia domków letniskowych nad morzem",
  description:
    "Zobacz galerię zdjęć domków letniskowych Lazur Resort w Rogowie. Noclegi nad morzem dla 8 osób, wnętrza domków, otoczenie i plaża.",
  keywords:
    "galeria domki letniskowe Rogowo, zdjęcia noclegi nad morzem, Lazur Resort galeria, domki zachodniopomorskie zdjęcia",
}

export default function Galeria() {
  const images = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Domek+z+zewnątrz",
      alt: "Domek letniskowy Lazur Resort Rogowo z zewnątrz",
    },
    { src: "/placeholder.svg?height=400&width=600&text=Salon+domku", alt: "Salon w domku letniskowym nad morzem" },
    { src: "/placeholder.svg?height=400&width=600&text=Kuchnia", alt: "Kuchnia w domku Lazur Resort" },
    { src: "/placeholder.svg?height=400&width=600&text=Sypialnia+1", alt: "Sypialnia w domku letniskowym Rogowo" },
    { src: "/placeholder.svg?height=400&width=600&text=Sypialnia+2", alt: "Druga sypialnia w domku nad morzem" },
    { src: "/placeholder.svg?height=400&width=600&text=Łazienka", alt: "Łazienka w domku letniskowym" },
    { src: "/placeholder.svg?height=400&width=600&text=Taras", alt: "Taras z meblami ogrodowymi" },
    { src: "/placeholder.svg?height=400&width=600&text=Grill", alt: "Miejsce na grilla przy domku" },
    { src: "/placeholder.svg?height=400&width=600&text=Parking", alt: "Parking przy domkach Lazur Resort" },
    { src: "/placeholder.svg?height=400&width=600&text=Plaża+Rogowo", alt: "Plaża w Rogowie blisko domków" },
    { src: "/placeholder.svg?height=400&width=600&text=Las", alt: "Las w okolicy domków letniskowych" },
    { src: "/placeholder.svg?height=400&width=600&text=Ścieżka+rowerowa", alt: "Ścieżka rowerowa w Rogowie" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeria - Domki Letniskowe Lazur Resort Rogowo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz zdjęcia naszych domków nad morzem w Rogowie. Komfortowe noclegi dla 8 osób w województwie
            zachodniopomorskim, blisko plaży i atrakcji turystycznych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Domki Letniskowe nad Morzem w Rogowie</h2>
          <p className="text-gray-700 mb-4">
            Lazur Resort w Rogowie to 4 identyczne domki letniskowe, każdy przystosowany dla maksymalnie 8 osób. Nasze
            noclegi nad morzem w województwie zachodniopomorskim oferują pełen komfort i bliskość natury.
          </p>
          <p className="text-gray-700 mb-4">
            Każdy domek posiada 3 sypialnie, 2 łazienki, w pełni wyposażoną kuchnię oraz przestronny salon z rozkładaną
            sofą. Duży taras z meblami ogrodowymi i miejscem na grilla to idealne miejsce na wieczorne spotkania.
          </p>
          <p className="text-gray-700">
            Lokalizacja w Rogowie zapewnia łatwy dostęp do pięknej plaży (zaledwie 5 minut pieszo), ścieżek rowerowych
            oraz atrakcji turystycznych takich jak Kołobrzeg, Mrzeżyno czy Dźwirzyno.
          </p>
        </div>
      </div>
    </div>
  )
}
