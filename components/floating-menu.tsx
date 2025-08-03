"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Calendar, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    {
      icon: Phone,
      label: "Telefon",
      href: "tel:+48502939725",
      color: "bg-emerald-600 hover:bg-emerald-700",
      text: "+48 502 939 725",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:lazurresort@op.pl",
      color: "bg-rose-600 hover:bg-rose-700",
      text: "lazurresort@op.pl",
    },
    {
      icon: MapPin,
      label: "Mapa Google",
      href: "https://maps.google.com/?q=Lazur+Resort+Rogowo",
      color: "bg-slate-600 hover:bg-slate-700",
      text: "Lokalizacja",
    },
    {
      icon: Calendar,
      label: "Rezerwacja",
      href: "/rezerwacja",
      color: "bg-amber-600 hover:bg-amber-700",
      text: "Rezerwuj online",
    },
  ]

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-end">
        {/* Menu Items */}
        <div
          className={`flex flex-col space-y-2 transition-all duration-300 mb-2 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${item.color} text-white p-2.5 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-200 group relative`}
              title={item.label}
            >
              <item.icon className="w-4 h-4" />
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
          className="bg-navy-700 hover:bg-navy-800 text-white p-2.5 rounded-l-lg shadow-lg"
          size="sm"
        >
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </Button>
      </div>
    </div>
  )
}
