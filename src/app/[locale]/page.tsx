import { FindField } from "@/components/find-field"
import { Slogan } from "@/components/slogan"
import { unstable_setRequestLocale } from "next-intl/server"

export default function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <div className="container h-[calc(100dvh-124px)]">
      <div className="px-1 pt-[calc(50dvh-172px)] sm:px-3">
        <Slogan />
        <FindField />
      </div>
    </div>
  )
}
