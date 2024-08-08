"use client"
import GlobeIcon from "@/shared/assets/icons/globe.svg"
import { Locale, localeObjects, locales, usePathname, useRouter } from "@/shared/config/i18n.config"
import { useClickOutside } from "@/shared/lib/hooks/use-click-outside"
import { cn } from "@/shared/lib/utils"
import { useState } from "react"

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const switcher = useClickOutside<HTMLDivElement>(() => {
    setOpen(false)
  })

  const changeLocale = (locale: Locale) => {
    setOpen(false)
    router.replace(pathname, { locale })
  }

  return (
    <div className="relative" ref={switcher}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex-center h-10 gap-2 rounded-xl bg-transparent p-1 px-2 text-t-primary hover:bg-b-secondary",
          open && "bg-b-secondary hover:bg-b-secondary",
        )}
      >
        <GlobeIcon className="size-6 stroke-t-primary" />
        {localeObjects[locale].short}
      </button>
      <div
        className={cn(
          "absolute -bottom-20 left-0 hidden w-full flex-col gap-1 rounded-xl bg-b-primary p-1",
          open && "flex",
        )}
      >
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            className="h-8 w-full rounded-lg p-1 hover:bg-b-secondary"
            onClick={() => changeLocale(locale)}
          >
            {localeObjects[locale].icon} {localeObjects[locale].short}
          </button>
        ))}
      </div>
    </div>
  )
}
