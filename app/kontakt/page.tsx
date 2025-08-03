import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Car, Waves } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Lazur Resort Rogowo | Domki letniskowe nad morzem",
  description:
    "Skontaktuj się z Lazur Resort w Rogowie. Rezerwacja domków letniskowych nad morzem, informacje o noclegach dla 8 osób w województwie zachodniopomorskim.",
  keywords:
    "kontakt Lazur Resort Rogowo, rezerwacja domki letniskowe, telefon noclegi nad morzem, email domki zachodniopomorskie",
}

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt - Lazur Resort Rogowo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skontaktuj się z nami w sprawie rezerwacji domków letniskowych nad morzem w Rogowie. Chętnie odpowiemy na
            wszystkie pytania dotyczące noclegów dla 8 osób.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Informacje kontaktowe</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">+48 123 456 789</p>
                  <p className="text-sm text-gray-500">Czynne codziennie 8:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">rezerwacje@lazurresort.pl</p>
                  <p className="text-sm text-gray-500">Odpowiadamy w ciągu 24 godzin</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adres</h3>
                  <p className="text-gray-600">72-330 Rogowo</p>
                  <p className="text-gray-600">województwo zachodniopomorskie</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Godziny kontaktu</h3>
                  <p className="text-gray-600">Poniedziałek - Niedziela: 8:00 - 20:00</p>
                  <p className="text-sm text-gray-500">Rezerwacje przyjmujemy całą dobę online</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Jak do nas dojechać?</h3>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-2" />
                  <span>15 km od Kołobrzegu</span>
                </div>
                <div className="flex items-center">
                  <Waves className="w-4 h-4 mr-2" />
                  <span>400 metrów do plaży</span>
                </div>
                <p className="text-sm">
                  Dojazd z Kołobrzegu drogą wojewódzką nr 163 w kierunku Mrzeżyna, następnie skręt w Rogowo zgodnie ze
                  znakowaniem.
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Wyślij zapytanie o domki letniskowe</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Imię *</label>
                    <Input placeholder="Twoje imię" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nazwisko *</label>
                    <Input placeholder="Twoje nazwisko" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input type="email" placeholder="twoj@email.pl" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Telefon</label>
                  <Input placeholder="+48 123 456 789" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Data przyjazdu</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Data wyjazdu</label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Liczba osób</label>
                  <Input type="number" min="1" max="8" placeholder="Maksymalnie 8 osób" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Wiadomość</label>
                  <Textarea placeholder="Dodatkowe informacje, pytania o domki letniskowe nad morzem..." rows={4} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Wyślij zapytanie o rezerwację</Button>

                <p className="text-xs text-gray-500 text-center">* Pola wymagane. Odpowiemy w ciągu 24 godzin.</p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Dlaczego warto wybrać domki Lazur Resort w Rogowie?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Blisko morza</h3>
              <p className="text-gray-600 text-sm">Zaledwie 400 metrów do pięknej plaży w Rogowie</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Doskonała lokalizacja</h3>
              <p className="text-gray-600 text-sm">Blisko Kołobrzegu, Mrzeżyna i innych atrakcji</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Profesjonalna obsługa</h3>
              <p className="text-gray-600 text-sm">Zawsze chętnie pomożemy i odpowiemy na pytania</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
