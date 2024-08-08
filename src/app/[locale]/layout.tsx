import { Header } from "@/components/header"
import { locales } from "@/shared/config/i18n.config"
import { siteConfig } from "@/shared/config/site.config"
import type { Metadata } from "next"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { Providers } from "../providers"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon/icon.svg",
    apple: "/favicon/apple-icon.png",
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="h-dvh bg-b-app">
        <Providers locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
