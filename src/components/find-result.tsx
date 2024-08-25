import { FindSongResult } from "@/shared/api/find-song"
import { cn } from "@/shared/lib/utils"
import { Artists } from "@/shared/ui/artists"
import Image from "next/image"
import { useFormatter, useTranslations } from "next-intl"
import ShazamIcon from "@/shared/assets/icons/shazam.svg"
import YouTubeIcon from "@/shared/assets/icons/youtube.svg"

export function FindResult({ result }: { result: FindSongResult }) {
  const statuses = useTranslations("Statuses")
  const platforms = useTranslations("Platforms")
  const t = useTranslations("FindResult")

  const format = useFormatter()
  const platform = {
    twitch: {
      color: "twitch",
      link: (s: string) => `https://twitch.tv/${s}`,
    },
    kick: {
      color: "kick",
      link: (s: string) => `https://kick.com/${s}`,
    },
    youtube: {
      color: "youtube",
      link: (s: string) => `https://youtube.com/c/${s}/videos`,
    },
  }[result.platform]

  return (
    <section className="rounded-3xl border border-br-primary bg-b-secondary/30 p-5">
      <div className="mb-5 flex flex-row items-center gap-3">
        {result.avatar && (
          <a target="_blank" href={platform.link(result.username)} rel="noopener noreferrer">
            <Image
              src={result.avatar}
              alt={result.username}
              height={36}
              width={36}
              className={cn(
                "rounded-full ring-2",
                "ring-youtube",
                "ring-kick",
                "ring-twitch",
                `ring-${platform.color}`,
              )}
            />
          </a>
        )}
        <h2>
          <a
            target="_blank"
            href={platform.link(result.username)}
            rel="noopener noreferrer"
            className={cn(
              "underline-offset-3 text-xl font-semibold hover:underline",
              `text-${platform.color}`,
            )}
          >
            {result.username}
          </a>{" "}
          <span className="text-xl font-normal">{t("now-listening")}</span>
        </h2>
      </div>
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        <section className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:text-start">
          <Image
            src={result.song!.artcover}
            height={200}
            width={200}
            alt={result.song?.title ?? ""}
            className="rounded-2xl"
          />
          <div>
            <h3 className="pb-3 pt-2 text-3xl font-semibold">{result.song!.title}</h3>
            <div className="flex flex-row justify-center md:justify-start">
              <Artists artists={result.song!.artists} />
            </div>
            <p className="mt-3 inline-flex h-7 items-center justify-center gap-1 rounded-lg border border-br-primary bg-b-primary px-2 text-sm">
              {t("genre")}: <span className="font-medium">{result.song!.genres.primary}</span>
            </p>
            <div className="mt-3 flex flex-row justify-center gap-3 md:justify-start">
              <a
                target="_blank"
                href={result.song?.shazamUrl}
                rel="noopener noreferrer"
                className="flex h-7 flex-row items-center justify-center gap-1 rounded-lg border border-primary bg-primary/5 px-2 text-sm text-primary"
              >
                <ShazamIcon className="size-4 fill-primary" /> Shazam
              </a>
              <a
                target="_blank"
                href={result.song?.youtubeUrl}
                rel="noopener noreferrer"
                className="flex h-7 flex-row items-center justify-center gap-1 rounded-lg border border-youtube bg-youtube/5 px-2 text-sm text-youtube"
              >
                <YouTubeIcon className="size-4 fill-youtube" /> YouYube
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:gap-6">
          <div className="h-[1px] bg-br-primary/80 lg:h-auto lg:w-[1px]" />
          <div className="flex flex-col pt-3 lg:min-w-60">
            <h4 className="pb-1 text-lg font-medium">{t("summary-info")}</h4>
            <div className="sm:flex sm:flex-row sm:items-end sm:gap-14 lg:block">
              <div>
                {" "}
                <p>
                  {t("channel")}: <span className="font-medium">{result.username}</span>{" "}
                </p>{" "}
                <p>
                  {platforms("platform")}:{" "}
                  <span className="font-medium">{platforms(result.platform)}</span>{" "}
                </p>
                <p>
                  {statuses("status")}:{" "}
                  <span className="font-medium">{statuses(result.status)}</span>{" "}
                </p>
              </div>
              <div>
                {" "}
                <p>
                  {t("start")}:{" "}
                  <span className="font-medium">
                    {format.dateTime(result.shazamStartTime!, { timeStyle: "long" })}
                  </span>
                </p>
                <p>
                  {t("end")}:{" "}
                  <span className="font-medium">
                    {format.dateTime(result.shazamEndTime!, { timeStyle: "long" })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
