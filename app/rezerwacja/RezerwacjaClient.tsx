"use client"

import Header from "@/components/header"
import FloatingMenu from "@/components/floating-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

// Funkcja do obliczania ceny na podstawie dat i liczby osób
function calculatePrice(
  checkIn: string,
  checkOut: string,
  guests: number,
): { totalPrice: number; nights: number; pricePerNight: number } {
  if (!checkIn || !checkOut) return { totalPrice: 0, nights: 0, pricePerNight: 0 }

  const startDate = new Date(checkIn)
  const endDate = new Date(checkOut)
  const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  if (nights <= 0) return { totalPrice: 0, nights: 0, pricePerNight: 0 }

  // Określenie typu domku na podstawie liczby osób
  let cottageType: "4os" | "5-6os" | "7-8os"
  if (guests <= 4) cottageType = "4os"
  else if (guests <= 6) cottageType = "5-6os"
  else cottageType = "7-8os"

  // Cennik na podstawie obrazu
  const pricingPeriods = [
    { start: "04-01", end: "05-31", prices: { "4os": 400, "5-6os": 450, "7-8os": 500 } },
    { start: "04-30", end: "05-03", prices: { "4os": 450, "5-6os": 500, "7-8os": 550 } }, // Majówka
    { start: "05-30", end: "06-22", prices: { "4os": 450, "5-6os": 500, "7-8os": 550 } },
    { start: "06-22", end: "07-06", prices: { "4os": 550, "5-6os": 600, "7-8os": 650 } },
    { start: "07-06", end: "08-17", prices: { "4os": 650, "5-6os": 700, "7-8os": 750 } }, // Sezon wysoki
    { start: "08-17", end: "08-31", prices: { "4os": 450, "5-6os": 500, "7-8os": 550 } },
    { start: "09-01", end: "10-31", prices: { "4os": 400, "5-6os": 450, "7-8os": 500 } },
  ]

  // Funkcja pomocnicza do sprawdzania czy data mieści się w okresie
  const isDateInPeriod = (date: Date, period: { start: string; end: string }) => {
    const year = date.getFullYear()
    const startDate = new Date(`${year}-${period.start}`)
    const endDate = new Date(`${year}-${period.end}`)
    return date >= startDate && date <= endDate
  }

  let totalPrice = 0

  // Oblicz cenę dla każdej nocy
  for (let i = 0; i < nights; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)

    // Znajdź odpowiedni okres cenowy
    let pricePerNight = 400 // Domyślna cena
    for (const period of pricingPeriods) {
      if (isDateInPeriod(currentDate, period)) {
        pricePerNight = period.prices[cottageType]
        break
      }
    }

    totalPrice += pricePerNight
  }

  const avgPricePerNight = Math.round(totalPrice / nights)

  return { totalPrice, nights, pricePerNight: avgPricePerNight }
}

export default function RezerwacjaClient() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(4)

  const { totalPrice, nights, pricePerNight } = calculatePrice(checkIn, checkOut, guests)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rezerwacja Domków Letniskowych Lazur Resort</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zarezerwuj swój domek nad morzem w Rogowie już dziś! Noclegi dla 4, 6 lub 8 osób w województwie
            zachodniopomorskim z pełnym komfortem.
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
                      <Input placeholder="+48 502 939 725" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Data przyjazdu *</label>
                      <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Data wyjazdu *</label>
                      <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Liczba osób *</label>
                      <Input
                        type="number"
                        min="1"
                        max="8"
                        value={guests}
                        onChange={(e) => setGuests(Number.parseInt(e.target.value) || 4)}
                        placeholder="Maksymalnie 8"
                        required
                      />
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

                  {/* Podsumowanie ceny */}
                  {totalPrice > 0 && (
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Podsumowanie rezerwacji</h3>
                      <div className="space-y-2 text-blue-800">
                        <div className="flex justify-between">
                          <span>Liczba nocy:</span>
                          <span className="font-semibold">{nights}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Liczba osób:</span>
                          <span className="font-semibold">{guests}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Typ domku:</span>
                          <span className="font-semibold">
                            {guests <= 4 ? "4 osobowy" : guests <= 6 ? "5-6 osobowy" : "7-8 osobowy"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Średnia cena za noc:</span>
                          <span className="font-semibold">{pricePerNight} zł</span>
                        </div>
                        <hr className="border-blue-200" />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Całkowity koszt:</span>
                          <span>{totalPrice} zł</span>
                        </div>
                        <div className="text-sm text-blue-600">Zaliczka (30%): {Math.round(totalPrice * 0.3)} zł</div>
                      </div>
                    </div>
                  )}

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
                  Domki Lazur Resort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Dostępne domki:</span>
                    <Badge variant="outline">4 domki</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domek 4 osobowy:</span>
                    <span className="text-sm">2 sypialnie + salon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domek 5-6 osobowy:</span>
                    <span className="text-sm">3 sypialnie + salon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domek 7-8 osobowy:</span>
                    <span className="text-sm">3 sypialnie + sofa</span>
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
                <CardTitle>Kontakt bezpośredni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm">+48 502 939 725</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm">lazurresort@op.pl</span>
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
