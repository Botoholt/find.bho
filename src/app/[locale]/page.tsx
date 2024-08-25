import { FindField } from "@/components/find-field"
import { unstable_setRequestLocale } from "next-intl/server"

export default function IndexPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <div className="container min-h-[calc(100dvh-128px)]">
      <div className="px-1 sm:px-3">
        <FindField />
      </div>
    </div>
  )
}
