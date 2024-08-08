import { useTranslations } from "next-intl"
import GitHubIcon from "@/shared/assets/icons/github.svg"
import DiscordIcon from "@/shared/assets/icons/discord.svg"

export function Footer() {
  const t = useTranslations("Footer")

  const statistics = [
    {
      title: t("all-time"),
      count: 9999,
    },
    {
      title: t("week"),
      count: 58,
    },
    {
      title: t("today"),
      count: 32,
    },
  ]

  return (
    <footer className="min-h-14 bg-b-primary py-2">
      <div className="container">
        <div className="mb-3.5 flex min-h-9 flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
          <div className="flex h-9 flex-row flex-wrap items-center gap-1.5 sm:h-full sm:gap-3">
            {statistics.map((statistic) => (
              <p key={statistic.title} className="text-nowrap text-t-secondary">
                {statistic.title}:{" "}
                <span className="font-medium tracking-wider">{statistic.count}</span>
              </p>
            ))}
          </div>
          <div className="flex flex-row place-items-center gap-4">
            <a href="https://github.com/Botoholt/find.bho" target="_blank">
              <GitHubIcon className="size-6 transition-all hover:scale-125 hover:fill-primary" />
            </a>
            <a href="https://discord.gg/BgAxx46F4e" target="_blank">
              <DiscordIcon className="size-6 transition-all hover:scale-125 hover:fill-primary" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-center gap-1 sm:flex-row sm:justify-between sm:gap-3">
          <p>
            {t("created")}{" "}
            <span className="whitespace-nowrap font-medium text-secondary">Boto Team 🤖</span>
          </p>
          <a
            href="https://boosty.to/botoholt/donate"
            target="_blank"
            className="text-end tracking-wide text-secondary transition-all hover:tracking-wider hover:underline"
          >
            {t("support")}
          </a>
        </div>
      </div>
    </footer>
  )
}
