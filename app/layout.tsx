import type React from "react"
import type { Metadata } from "next"
import { Manrope, Lato } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CafeHopper - Instagram Growth for Cafés",
  description:
    "I Love Cafés. I work from cafés. I grow cafés on Instagram. Professional Instagram growth services for café owners.",
  keywords: ["instagram growth", "cafe marketing", "social media", "coffee shop", "instagram specialist"],
  authors: [{ name: "CafeHopper" }],
  openGraph: {
    title: "CafeHopper - Instagram Growth for Cafés",
    description: "Professional Instagram growth services for café owners",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">{children}</body>
    </html>
  )
}
