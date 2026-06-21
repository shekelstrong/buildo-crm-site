import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buildo CRM — Buildo CRM",
  description: "AI-CRM с автоматизацией продаж через Telegram-ботов",
  themeColor: "#3B82F6",
  openGraph: {
    title: "Buildo CRM",
    description: "AI-CRM с автоматизацией продаж через Telegram-ботов",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
