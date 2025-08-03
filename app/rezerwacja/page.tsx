import type { Metadata } from "next"
import RezerwacjaClient from "./RezerwacjaClient"

export const metadata: Metadata = {
  title: "Rezerwacja - Lazur Resort Rogowo | Zarezerwuj domek nad morzem",
  description:
    "Zarezerwuj domek letniskowy w Lazur Resort Rogowo. Online rezerwacja noclegów nad morzem dla 4, 6 lub 8 osób w województwie zachodniopomorskim.",
  keywords:
    "rezerwacja domki letniskowe Rogowo, booking noclegi nad morzem, Lazur Resort rezerwacja online, domki zachodniopomorskie booking",
}

export default function Rezerwacja() {
  return <RezerwacjaClient />
}
