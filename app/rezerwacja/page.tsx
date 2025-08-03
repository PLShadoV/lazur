import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rezerwacja - Lazur Resort Rogowo | Zarezerwuj domek nad morzem",
  description:
    "Zarezerwuj domek letniskowy w Lazur Resort Rogowo. Online rezerwacja noclegów nad morzem dla 8 osób w województwie zachodniopomorskim.",
  keywords:
    "rezerwacja domki letniskowe Rogowo, booking noclegi nad morzem, Lazur Resort rezerwacja online, domki zachodniopomorskie booking",
}

export default function Rezerwacja() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rezerwacja Domków Letniskowych Lazur Resort</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zarezerwuj swój domek nad morzem w Rogowie już dziś! Noclegi dla 8 osób w województwie zachodniopomorskim z
            pełnym komfortem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Formularz rezerwacji domku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="twoj@email.pl" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefon *</label>
                      <Input placeholder="+48 123 456 789" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Data przyjazdu *</label>
                      <Input type="date" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Data wyjazdu *</label>
                      <Input type="date" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Liczba dorosłych *</label>
                      <Input type="number" min="1" max="8" placeholder="Maksymalnie 8" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Liczba dzieci</label>
                      <Input type="number" min="0" max="8" placeholder="0" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Czy przyjeżdżacie z psem?</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="pet" value="nie" className="mr-2" defaultChecked />
                        Nie
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="pet" value="tak" className="mr-2" />
                        Tak (+30 zł/noc)
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Dodatkowe informacje</label>
                    <Textarea placeholder="Szczególne życzenia, pytania o domek letniskowy nad morzem..." rows={4} />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">Informacja o rezerwacji:</p>
                        <p>
                          Po wysłaniu formularza skontaktujemy się z Państwem w ciągu 24 godzin w celu potwierdzenia
                          dostępności i warunków rezerwacji domku letniskowego.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Wyślij zapytanie o rezerwację
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Domek Lazur Resort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Maksymalna liczba osób:</span>
                    <Badge>8 osób</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dostępne domki:</span>
                    <Badge variant="outline">4 domki</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Odległość do morza:</span>
                    <span className="text-sm">400m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Parking:</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>WiFi:</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cennik sezonowy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Sezon niski:</span>
                    <span className="font-semibold">200 zł/noc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sezon średni:</span>
                    <span className="font-semibold">300 zł/noc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sezon wysoki:</span>
                    <span className="font-semibold">450 zł/noc</span>
                  </div>
                  <hr className="my-3" />
                  <div className="text-xs text-gray-500">
                    <p>• Minimalna rezerwacja: 2 noce</p>
                    <p>• Kaucja zwrotna: 200 zł</p>
                    <p>• Pies: +30 zł/noc</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontakt bezpośredni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm">+48 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm">rezerwacje@lazurresort.pl</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Preferujesz kontakt telefoniczny? Zadzwoń do nas codziennie w godzinach 8:00 - 20:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Dlaczego rezerwować domki w Lazur Resort Rogowo?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Gwarancja najlepszej ceny</h3>
              <p className="text-sm text-blue-100">Konkurencyjne ceny noclegów nad morzem</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Bezpłatna anulacja</h3>
              <p className="text-sm text-blue-100">Do 7 dni przed przyjazdem</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Obsługa 24/7</h3>
              <p className="text-sm text-blue-100">Zawsze jesteśmy do Państwa dyspozycji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
