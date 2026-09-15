import type { Metadata, Viewport } from "next"
import { Sora, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Workforce Attrition Intelligence — HR Analytics & Risk Modeling",
  description:
    "An interactive HR analytics platform that surfaces attrition signals, scores individual employee flight risk with a trained model, and lets you explore 5,500+ employee records — all in the browser.",
  keywords: [
    "HR analytics",
    "employee attrition",
    "attrition prediction",
    "workforce intelligence",
    "people analytics",
    "retention",
  ],
  authors: [{ name: "Workforce Attrition Intelligence" }],
  openGraph: {
    title: "Workforce Attrition Intelligence",
    description:
      "Interactive HR analytics: attrition signals, individual flight-risk scoring, and a full data explorer.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
