export const platforms = ["twitch", "kick", "youtube"] as const
export type Platform = (typeof platforms)[number]
export interface FindArguments {
  platform: Platform
  streamer: string
}
