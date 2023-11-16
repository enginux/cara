import {
  Inter as FontInter,
  JetBrains_Mono as FontJetBrainsMono,
  Roboto_Mono as FontRoboto,
  Lato,
} from "next/font/google"

export const fontInter = FontInter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontJetBrainsMono = FontJetBrainsMono({
  subsets: ["latin"],
  variable: "--font-jetbrainsmono",
})

export const fontRoboto = FontRoboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const fonLato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
})
