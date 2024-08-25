"use client"
import ShazamIcon from "@/shared/assets/icons/shazam.svg"
import { useCallback, useState } from "react"
import { useSearchParams } from "next/navigation"
import { z } from "zod"
import { usePathname, useRouter } from "@/shared/config/i18n.config"
import { useDebounceCallback, useFindSong } from "@/shared/lib/hooks"
import { useTranslations } from "next-intl"
import { platforms } from "@/shared/types"
import { FindPlatformButton } from "./find-platform-button"
import { Slogan } from "./slogan"
import { cn } from "@/shared/lib/utils"
import { FindResult } from "./find-result"

export function FindField() {
  const t = useTranslations("Find")
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const platform = z.enum(platforms).catch("twitch").parse(searchParams.get("p"))

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

  const { onFindSong, ...song } = useFindSong()

  return (
    <div
      className={cn(
        "mb-6 px-1 transition-all sm:px-3",
        song.song ? "px-0 sm:px-0" : "pt-[calc(50dvh-172px)]",
      )}
    >
      {!song.song && <Slogan />}
      <div className="my-4 flex flex-col items-center gap-2 md:flex-row">
        <input
          type="text"
          maxLength={96}
          value={streamer}
          onChange={({ target: { value } }) => {
            setStreamer(value)
            onChangeStreamerParam(value)
          }}
          className={cn(
            "h-14 w-full flex-grow rounded-t-2xl border border-br-primary bg-b-secondary/30 px-4 text-lg transition-all focus:border-primary/60 focus:bg-b-app focus:text-t-primary focus:outline-none focus:ring focus:ring-primary/60 md:w-full md:rounded-s-2xl md:rounded-tr-none lg:text-xl",
          )}
          placeholder={t("placeholder")}
        />
        <div className="inline-flex h-full w-full flex-row items-center gap-2 md:w-auto">
          <FindPlatformButton
            platform={platform}
            onClick={() => {
              const index = platforms.indexOf(platform)
              const newPlatform =
                index === platforms.length - 1 ? platforms[0] : platforms[index + 1]
              router.replace(pathname + "?" + createQueryString("p", newPlatform))
            }}
          />
          <button
            type="button"
            onClick={() => onFindSong({ platform, streamer })}
            disabled={song.status === "loading"}
            className="flex-center h-14 w-full gap-2 rounded-br-2xl bg-primary px-4 text-lg font-medium text-white transition-all focus:border-none focus:outline-none focus:ring focus:ring-primary/60 md:w-40 md:rounded-e-2xl lg:text-xl"
          >
            <ShazamIcon
              className={cn(
                "size-6 fill-white text-white",
                song.status === "loading" && "animate-spin",
              )}
            />
            Shazam
          </button>
        </div>
      </div>
      {song.song && <FindResult result={song.song} />}
    </div>
  )
}
