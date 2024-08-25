import KickIcon from "@/shared/assets/icons/kick.svg"
import TwitchIcon from "@/shared/assets/icons/twitch.svg"
import YouTubeIcon from "@/shared/assets/icons/youtube.svg"
import { cn } from "@/shared/lib/utils"
import { Platform } from "@/shared/types"
import { ReactNode } from "react"

interface Props {
  platform: Platform
  onClick: () => void
}

export function FindPlatformButton({ onClick, platform }: Props) {
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

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex-center h-14 w-full gap-2 rounded-bl-2xl bg-twitch px-4 text-lg font-medium text-white transition-all focus:border-none focus:outline-none focus:ring md:w-40 md:rounded-none lg:text-xl",
        platformObject.className,
      )}
    >
      {platformObject.icon}
      {platformObject.name}
    </button>
  )
}
