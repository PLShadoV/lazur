"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOkolicaOpen, setIsOkolicaOpen] = useState(false)

  return (
    <header className="bg-[#001e4c] shadow-lg border-b border-[#002a66] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              {/* Diament */}
              <div className="w-6 h-6 bg-white transform rotate-45 shadow-sm"></div>
              {/* Fale */}
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-b-lg opacity-70"></div>
              <div className="absolute -bottom-0.5 left-1 right-1 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-b-lg opacity-50"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Lazur Resort</h1>
              <p className="text-sm text-blue-200">Rogowo - domki nad morzem</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors font-medium">
              Strona główna
            </Link>
            <Link href="/galeria" className="text-white hover:text-blue-300 transition-colors font-medium">
              Galeria
            </Link>
            <Link href="/cennik" className="text-white hover:text-blue-300 transition-colors font-medium">
              Cennik
            </Link>

            {/* Desktop Okolica Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOkolicaOpen(!isOkolicaOpen)}
                className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
              >
                Okolica
                {isOkolicaOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
              </button>

              {isOkolicaOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/okolica"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Okolica Rogowa
                  </Link>
                  <Link
                    href="/okolica/mrzezyno"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Domki Mrzeżyno
                  </Link>
                  <Link
                    href="/okolica/dzwirzyno"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Domki Dźwirzyno
                  </Link>
                  <Link
                    href="/okolica/kolobrzeg"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Domki Kołobrzeg
                  </Link>
                  <Link
                    href="/okolica/noclegi-z-psem"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Noclegi z psem
                  </Link>
                  <Link
                    href="/okolica/sciezki-rowerowe"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Ścieżki rowerowe
                  </Link>
                </div>
              )}
            </div>

            <Link href="/kontakt" className="text-white hover:text-blue-300 transition-colors font-medium">
              Kontakt
            </Link>
            <Link href="/rezerwacja">
              <Button className="bg-[#002a66] hover:bg-[#003d99] text-white">Rezerwuj</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-[#002a66] pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors font-medium text-lg">
                Strona główna
              </Link>
              <Link href="/galeria" className="text-white hover:text-blue-300 transition-colors font-medium text-lg">
                Galeria
              </Link>
              <Link href="/cennik" className="text-white hover:text-blue-300 transition-colors font-medium text-lg">
                Cennik
              </Link>

              {/* Mobile Okolica Dropdown */}
              <div>
                <button
                  onClick={() => setIsOkolicaOpen(!isOkolicaOpen)}
                  className="text-white hover:text-blue-300 transition-colors font-medium text-lg flex items-center w-full"
                >
                  Okolica
                  {isOkolicaOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                </button>

                {isOkolicaOpen && (
                  <div className="ml-4 mt-3 space-y-3 border-l-2 border-blue-400 pl-4">
                    <Link href="/okolica" className="text-base text-blue-200 hover:text-white transition-colors block">
                      Okolica Rogowa
                    </Link>
                    <Link
                      href="/okolica/mrzezyno"
                      className="text-base text-blue-200 hover:text-white transition-colors block"
                    >
                      Domki Mrzeżyno
                    </Link>
                    <Link
                      href="/okolica/dzwirzyno"
                      className="text-base text-blue-200 hover:text-white transition-colors block"
                    >
                      Domki Dźwirzyno
                    </Link>
                    <Link
                      href="/okolica/kolobrzeg"
                      className="text-base text-blue-200 hover:text-white transition-colors block"
                    >
                      Domki Kołobrzeg
                    </Link>
                    <Link
                      href="/okolica/noclegi-z-psem"
                      className="text-base text-blue-200 hover:text-white transition-colors block"
                    >
                      Noclegi z psem
                    </Link>
                    <Link
                      href="/okolica/sciezki-rowerowe"
                      className="text-base text-blue-200 hover:text-white transition-colors block"
                    >
                      Ścieżki rowerowe
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/kontakt" className="text-white hover:text-blue-300 transition-colors font-medium text-lg">
                Kontakt
              </Link>
              <Link href="/rezerwacja">
                <Button className="bg-[#002a66] hover:bg-[#003d99] text-white w-full text-lg py-3">Rezerwuj</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
