import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales, type Locale } from "../config/i18n.config"

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return notFound()
  }

  return {
    timeZone: "Europe/Moscow",
    messages: (await import(`/messages/${locale}.json`)).default,
  }
})
