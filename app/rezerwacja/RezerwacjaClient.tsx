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
    <div className="min-h-screen bg-perla-50">
      <Header />
      <FloatingMenu />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-szafir-900 mb-4">
            Rezerwacja Domków Letniskowych Lazur Resort
          </h1>
          <p className="text-lg md:text-xl text-szafir-700 max-w-3xl mx-auto">
            Zarezerwuj swój domek nad morzem w Rogowie już dziś! Noclegi dla 4, 6 lub 8 osób w województwie
            zachodniopomorskim z pełnym komfortem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-szafir-100 shadow-lg">
              <CardHeader className="bg-szafir-50">
                <CardTitle className="flex items-center text-szafir-800">
                  <Calendar className="w-5 h-5 mr-2 text-szafir-600" />
                  Formularz rezerwacji domku
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Imię *</label>
                      <Input placeholder="Twoje imię" required className="border-szafir-200 focus:border-szafir-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Nazwisko *</label>
                      <Input
                        placeholder="Twoje nazwisko"
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Email *</label>
                      <Input
                        type="email"
                        placeholder="twoj@email.pl"
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Telefon *</label>
                      <Input
                        placeholder="+48 502 939 725"
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Data przyjazdu *</label>
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Data wyjazdu *</label>
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Liczba osób *</label>
                      <Input
                        type="number"
                        min="1"
                        max="8"
                        value={guests}
                        onChange={(e) => setGuests(Number.parseInt(e.target.value) || 4)}
                        placeholder="Maksymalnie 8"
                        required
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-szafir-700">Liczba dzieci</label>
                      <Input
                        type="number"
                        min="0"
                        max="8"
                        placeholder="0"
                        className="border-szafir-200 focus:border-szafir-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-szafir-700">Czy przyjeżdżacie z psem?</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="pet" value="nie" className="mr-2 text-szafir-600" defaultChecked />
                        Nie
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="pet" value="tak" className="mr-2 text-szafir-600" />
                        Tak (+15 zł/noc)
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-szafir-700">Dodatkowe informacje</label>
                    <Textarea
                      placeholder="Szczególne życzenia, pytania o domek letniskowy nad morzem..."
                      rows={4}
                      className="border-szafir-200 focus:border-szafir-400"
                    />
                  </div>

                  {/* Podsumowanie ceny */}
                  {totalPrice > 0 && (
                    <div className="bg-zloty-50 border border-zloty-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-zloty-900 mb-4">Podsumowanie rezerwacji</h3>
                      <div className="space-y-2 text-zloty-800">
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
                        <hr className="border-zloty-300" />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Całkowity koszt:</span>
                          <span>{totalPrice} zł</span>
                        </div>
                        <div className="text-sm text-zloty-700">Zadatek (20%): {Math.round(totalPrice * 0.2)} zł</div>
                      </div>
                    </div>
                  )}

                  <div className="bg-szafir-50 border border-szafir-200 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-szafir-600 mr-2 mt-0.5" />
                      <div className="text-sm text-szafir-700">
                        <p className="font-semibold mb-1">Informacja o rezerwacji:</p>
                        <p>
                          Po wysłaniu formularza skontaktujemy się z Państwem w ciągu 24 godzin w celu potwierdzenia
                          dostępności i warunków rezerwacji domku letniskowego.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-rusinowy-600 hover:bg-rusinowy-700 text-perla-50 text-lg py-3">
                    Wyślij zapytanie o rezerwację
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-szafir-100 shadow-lg">
              <CardHeader className="bg-szafir-50">
                <CardTitle className="flex items-center text-szafir-800">
                  <Users className="w-5 h-5 mr-2 text-szafir-600" />
                  Domki Lazur Resort
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Dostępne domki:</span>
                    <Badge variant="outline" className="border-szafir-300 text-szafir-700">
                      4 domki
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Domek 4 osobowy:</span>
                    <span className="text-sm text-szafir-600">2 sypialnie + salon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Domek 5-6 osobowy:</span>
                    <span className="text-sm text-szafir-600">3 sypialnie + salon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Domek 7-8 osobowy:</span>
                    <span className="text-sm text-szafir-600">3 sypialnie + sofa</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Odległość do morza:</span>
                    <span className="text-sm text-szafir-600">400m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">Parking:</span>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-szafir-700">WiFi:</span>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-szafir-100 shadow-lg">
              <CardHeader className="bg-szafir-50">
                <CardTitle className="text-szafir-800">Kontakt bezpośredni</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-szafir-600 mr-2" />
                    <span className="text-sm text-szafir-700">+48 502 939 725</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-szafir-600 mr-2" />
                    <span className="text-sm text-szafir-700">lazurresort@op.pl</span>
                  </div>
                  <p className="text-xs text-szafir-500 mt-3">
                    Preferujesz kontakt telefoniczny? Zadzwoń do nas codziennie w godzinach 8:00 - 20:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-szafir-700 text-perla-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Dlaczego rezerwować domki w Lazur Resort Rogowo?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
              <h3 className="font-semibold mb-2">Gwarancja najlepszej ceny</h3>
              <p className="text-sm text-perla-200">Konkurencyjne ceny noclegów nad morzem</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
              <h3 className="font-semibold mb-2">Bezpłatna anulacja</h3>
              <p className="text-sm text-perla-200">Do 7 dni przed przyjazdem</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
              <h3 className="font-semibold mb-2">Obsługa 24/7</h3>
              <p className="text-sm text-perla-200">Zawsze jesteśmy do Państwa dyspozycji</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
