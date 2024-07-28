import { ThemeChanger } from "@/components/theme-changer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Find - Botoholt",
  description: "Find a song live on Twitch / YouTube / Kick",
  icons: {
    icon: "./icon.svg",
    apple: "./apple-icon.png",
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const a = 1
  const b = 1
  console.log(a)

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="h-dvh w-dvw">
        <Providers>
          <header>
            <ThemeChanger />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
