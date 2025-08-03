"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(true) // Domyślnie rozwinięte

  const menuItems = [
    {
      icon: Phone,
      label: "Telefon",
      href: "tel:+48502939725",
      color: "bg-green-600 hover:bg-green-700",
      text: "+48 502 939 725",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:lazurresort@op.pl",
      color: "bg-red-600 hover:bg-red-700",
      text: "lazurresort@op.pl",
    },
    {
      icon: MapPin,
      label: "Mapa Google",
      href: "https://maps.google.com/?q=Lazur+Resort+Rogowo",
      color: "bg-blue-600 hover:bg-blue-700",
      text: "Lokalizacja",
    },
    {
      icon: Calendar,
      label: "Booking.com",
      href: "https://www.booking.com/hotel/pl/lazur-resort.pl.html",
      color: "bg-orange-600 hover:bg-orange-700",
      text: "Booking.com",
    },
  ]

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex items-center">
        {/* Menu Items */}
        <div
          className={`flex flex-col space-y-2 transition-all duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${item.color} text-white p-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-200 group relative`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="font-semibold">{item.label}</div>
                <div className="text-xs text-gray-300">{item.text}</div>
              </span>
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-l-lg shadow-lg ml-0"
          size="sm"
        >
          {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  )
}
