import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const locales = ["en", "ru"] as const
export type Locale = (typeof locales)[number]
export const { Link, useRouter, usePathname } = createSharedPathnamesNavigation({ locales })

export const localeObjects: Record<Locale, { name: string; short: string; icon: string }> = {
  en: { name: "English", short: "ENG", icon: "🇬🇧" },
  ru: { name: "Русский", short: "RUS", icon: "🇷🇺" },
}
