import Image from "next/image"
import { Artist } from "../types"

export function Artists({ artists }: { artists: Artist[] }) {
  return (
    <div className="flex flex-row flex-wrap items-center">
      {artists.map((artist, index) => {
        const avatarUrl = artist.artwork.url.replace("{w}", "40").replace("{h}", "40")

        return (
          <div key={artist.id} className="inline-flex items-center">
            {index !== 0 && <span className="me-1.5 ms-1 font-medium"> & </span>}
            <Image alt="" src={avatarUrl} width={24} height={24} className="me-1 rounded-full" />
            <a
              className="underline-offset-2 hover:underline"
              href={artist.shazamUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artist.name}
            </a>
          </div>
        )
      })}
    </div>
  )
}
