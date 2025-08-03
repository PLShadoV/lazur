"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: Phone,
      label: "Telefon",
      href: "tel:+48123456789",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rezerwacje@lazurresort.pl",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: MapPin,
      label: "Mapa",
      href: "https://maps.google.com/?q=Rogowo+72-330",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/lazurresort",
      color: "bg-blue-800 hover:bg-blue-900",
    },
    {
      icon: Calendar,
      label: "Booking.com",
      href: "https://booking.com",
      color: "bg-orange-600 hover:bg-orange-700",
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
              className={`${item.color} text-white p-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-200 group`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
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
