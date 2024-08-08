"use client"
import ShazamIcon from "@/shared/assets/icons/shazam.svg"
import KickIcon from "@/shared/assets/icons/kick.svg"
import TwitchIcon from "@/shared/assets/icons/twitch.svg"
import YouTubeIcon from "@/shared/assets/icons/youtube.svg"
import { ReactNode, useCallback, useState } from "react"
import { cn } from "@/shared/lib/utils"
import { useSearchParams } from "next/navigation"
import { z } from "zod"
import { usePathname, useRouter } from "@/shared/config/i18n.config"
import { useDebounceCallback } from "@/shared/lib/hooks/use-debounce-callback"
import { useTranslations } from "next-intl"

export function FindField() {
  const t = useTranslations("Find")

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const platforms = ["twitch", "kick", "youtube"] as const
  type Platform = (typeof platforms)[number]
  const platform = z.enum(platforms).catch("twitch").parse(searchParams.get("p"))
  const platformObjects: Record<Platform, { name: string; className: string; icon: ReactNode }> = {
    twitch: {
      name: "Twitch",
      className: "bg-twitch focus:ring-twitch/60",
      icon: <TwitchIcon className="size-6 fill-white" />,
    },
    youtube: {
      name: "YouTube",
      className: "bg-youtube focus:ring-youtube/60",
      icon: <YouTubeIcon className="size-6 fill-white" />,
    },
    kick: {
      name: "Kick",
      className: "bg-kick focus:ring-kick/60",
      icon: <KickIcon className="size-5 fill-white" />,
    },
  }
  const platformObject = platformObjects[platform]

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value.trim()) {
        params.set(name, value)
      } else {
        params.delete(name)
      }

      return params.toString()
    },
    [searchParams],
  )

  const [streamer, setStreamer] = useState(
    z.string().min(3).max(96).catch("").parse(searchParams.get("s")),
  )
  const onChangeStreamerParam = useDebounceCallback((streamer: string) => {
    router.replace(pathname + "?" + createQueryString("s", streamer))
  }, 600)

  return (
    <div className="my-4 flex flex-col items-center gap-2 md:flex-row">
      <input
        type="text"
        maxLength={96}
        value={streamer}
        onChange={({ target: { value } }) => {
          setStreamer(value)
          onChangeStreamerParam(value)
        }}
        className="h-14 w-full flex-grow rounded-t-2xl border border-br-primary bg-b-secondary px-4 text-lg text-t-secondary transition-all focus:border-primary/60 focus:bg-b-app focus:text-t-primary focus:outline-none focus:ring focus:ring-primary/60 md:w-full md:rounded-s-2xl md:rounded-tr-none lg:text-xl"
        placeholder={t("placeholder")}
      />
      <div className="inline-flex h-full w-full flex-row items-center gap-2 md:w-auto">
        <button
          type="button"
          onClick={() => {
            const index = platforms.indexOf(platform)
            const newPlatform = index === platforms.length - 1 ? platforms[0] : platforms[index + 1]
            router.replace(pathname + "?" + createQueryString("p", newPlatform))
          }}
          className={cn(
            "flex-center h-14 w-full gap-2 rounded-bl-2xl bg-twitch px-4 text-lg font-medium text-white transition-all focus:border-none focus:outline-none focus:ring md:w-40 md:rounded-none lg:text-xl",
            platformObject.className,
          )}
        >
          {platformObject.icon}
          {platformObject.name}
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="flex-center h-14 w-full gap-2 rounded-br-2xl bg-primary px-4 text-lg font-medium text-white transition-all focus:border-none focus:outline-none focus:ring focus:ring-primary/60 md:w-40 md:rounded-e-2xl lg:text-xl"
        >
          <ShazamIcon className="size-6 fill-white text-white" />
          Shazam
        </button>
      </div>
    </div>
  )
}
