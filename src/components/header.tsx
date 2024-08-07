import { Locale } from "@/shared/config/i18n.config"
import { useLocale } from "next-intl"
import Image from "next/image"
import { LocaleSwitcher } from "./locale-switcher"
import { ThemeSwitcher } from "./theme-switcher"
import { cn } from "@/shared/lib/utils"

export function Header() {
  const locale = useLocale() as Locale

  const titleCn = "text-xl font-medium tracking-[0.04rem] text-white"

  return (
    <header className="bg-primary">
      <section className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex flex-row items-center gap-2">
          <Image src="/favicon/rv-icon.svg" width={32} height={32} alt="Logo" />
          <h1>
            <span className={cn(titleCn, "hidden sm:inline")}>Find - Botoholt</span>
            <span className={cn(titleCn, "sm:hidden")}>Find</span>
          </h1>
        </div>
        <div className="flex-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher locale={locale} />
        </div>
      </section>
    </header>
  )
}
