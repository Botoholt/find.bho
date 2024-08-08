import { TypingAnimation } from "@/shared/ui/typing-animation"
import KickIcon from "@/shared/assets/icons/kick.svg"
import TwitchIcon from "@/shared/assets/icons/twitch.svg"
import YouTubeIcon from "@/shared/assets/icons/youtube.svg"
import { useTranslations } from "next-intl"

export function Slogan() {
  const t = useTranslations("Find")

  return (
    <div className="text-start align-middle font-bold text-white">
      <span className="text-3xl lg:text-4xl">{t("slogan")}</span>{" "}
      <div className="platforms-gradient inline-flex rounded-2xl">
        <TypingAnimation
          duration={200}
          className="m-1 h-10 w-[204px] justify-center rounded-xl bg-b-primary pb-2 pt-2 text-3xl lg:h-12 lg:w-[228px] lg:pb-3 lg:pt-3 lg:text-4xl"
          texts={[
            {
              text: "Twitch",
              className: "text-twitch",
              icon: <TwitchIcon className="inline-block size-7 fill-twitch lg:size-8" />,
            },
            {
              text: "YouTube",
              className: "text-youtube",
              icon: <YouTubeIcon className="inline-block h-8 fill-youtube lg:h-10" />,
            },
            {
              text: "Kick",
              className: "text-kick",
              icon: <KickIcon className="inline-block size-6 fill-kick lg:size-7" />,
            },
          ]}
        />
      </div>{" "}
      <span className="text-3xl lg:text-4xl">{t("slogan-steam")}</span>
    </div>
  )
}
