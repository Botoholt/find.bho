import { findSong, FindSongResult } from "@/shared/api"
import { FindArguments, Status } from "@/shared/types"
import { useState } from "react"

export function useFindSong() {
  const [song, setSong] = useState<FindSongResult | null>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [args, setArgs] = useState<FindArguments | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const onFindSong = (args: FindArguments) => {
    setStatus("loading")
    setArgs(args)
    findSong(args)
      .then((song) => {
        setSong(song)
        setStatus("success")
      })
      .catch((error) => {
        setError(error)
        setStatus("error")
      })
  }

  return { song, status, error, args, onFindSong }
}
