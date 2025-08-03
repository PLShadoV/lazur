import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Lazur Resort - Domki letniskowe nad morzem w Rogowie | Noclegi dla 8 osób",
  description: "Domki letniskowe nad morzem w Rogowie. Noclegi dla 8 osób w województwie zachodniopomorskim.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={roboto.variable}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
