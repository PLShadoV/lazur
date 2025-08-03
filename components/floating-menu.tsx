"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Calendar, ChevronUp, ChevronDown } from "lucide-react"

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

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
      href: "/kontakt",
      color: "bg-blue-600 hover:bg-blue-700",
      text: "Kontakt",
    },
    {
      icon: MapPin,
      label: "Mapa Google",
      href: "https://maps.google.com/?q=Lazur+Resort+Rogowo",
      color: "bg-red-600 hover:bg-red-700",
      text: "Lokalizacja",
    },
    {
      icon: Calendar,
      label: "Rezerwacja",
      href: "/rezerwacja",
      color: "bg-red-500 hover:bg-red-600",
      text: "Rezerwuj online",
    },
  ]

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-end">
        {/* Menu Items */}
        <div
          className={`flex flex-col space-y-2 transition-all duration-300 mb-2 ${
            isOpen ? "translate-y-0 opacity-100 visible" : "translate-y-full opacity-0 invisible"
          }`}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${item.color} text-white p-2.5 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-200 block w-fit`}
                title={item.label}
              >
                <item.icon className="w-4 h-4" />
              </a>
              <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                <div className="font-semibold">{item.label}</div>
                <div className="text-xs text-gray-300">{item.text}</div>
              </span>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="bg-[#001e4c] hover:bg-[#002a66] text-white p-2.5 rounded-l-lg shadow-lg transition-colors w-fit"
          type="button"
        >
          {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
    </div>
  )
}
