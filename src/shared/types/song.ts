import { Artist } from "./artist"

export type Song = {
  id: number
  artcover: string
  subtitle: string
  title: string
  genres: {
    primary: string
  }
  shazamUrl: string
  youtubeUrl: string
  artists: Artist[]
}
