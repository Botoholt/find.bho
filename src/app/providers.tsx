"use client"

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export function Providers({
  locale,
  children,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}) {
  return (
    <NextIntlClientProvider timeZone="Europe/Moscow" messages={messages} locale={locale}>
      <ThemeProvider disableTransitionOnChange defaultTheme="system" attribute="data-theme">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
