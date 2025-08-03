"use client"

import { Button } from "@/components/ui/button"
import { Waves, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-cream-50 shadow-sm border-b border-navy-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-cream-50" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900">Lazur Resort</h1>
              <p className="text-sm text-navy-600">Rogowo - domki nad morzem</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/galeria" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
              Galeria
            </Link>
            <Link href="/cennik" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
              Cennik
            </Link>
            <Link href="/okolica" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
              Okolica
            </Link>
            <Link href="/kontakt" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
              Kontakt
            </Link>
            <Link href="/rezerwacja">
              <Button className="bg-navy-700 hover:bg-navy-800 text-cream-50">Rezerwuj</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-navy-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-navy-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/galeria" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
                Galeria
              </Link>
              <Link href="/cennik" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
                Cennik
              </Link>
              <Link href="/okolica" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
                Okolica
              </Link>

              {/* Podstrony o okolicy */}
              <div className="ml-4 space-y-2 border-l-2 border-navy-200 pl-4">
                <Link
                  href="/okolica/mrzezyno"
                  className="text-sm text-navy-600 hover:text-navy-800 transition-colors block"
                >
                  Domki Mrzeżyno
                </Link>
                <Link
                  href="/okolica/dzwirzyno"
                  className="text-sm text-navy-600 hover:text-navy-800 transition-colors block"
                >
                  Domki Dźwirzyno
                </Link>
                <Link
                  href="/okolica/kolobrzeg"
                  className="text-sm text-navy-600 hover:text-navy-800 transition-colors block"
                >
                  Domki Kołobrzeg
                </Link>
                <Link
                  href="/okolica/noclegi-z-psem"
                  className="text-sm text-navy-600 hover:text-navy-800 transition-colors block"
                >
                  Noclegi z psem
                </Link>
                <Link
                  href="/okolica/sciezki-rowerowe"
                  className="text-sm text-navy-600 hover:text-navy-800 transition-colors block"
                >
                  Ścieżki rowerowe
                </Link>
              </div>

              <Link href="/kontakt" className="text-navy-700 hover:text-navy-900 transition-colors font-medium">
                Kontakt
              </Link>
              <Link href="/rezerwacja">
                <Button className="bg-navy-700 hover:bg-navy-800 text-cream-50 w-full">Rezerwuj</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
