import { FindArguments, Platform, Song } from "../types"

export type FindSongResult = {
  status: "success" | "error"
  platform: Platform
  username: string
  errorType?: "streamer-not-found" | "streamer-offline" | "unknown" | "song-not-recognized"
  avatar?: string
  shazamStartTime: Date
  shazamEndTime?: Date
  song?: Song
}

export async function findSong(args: FindArguments): Promise<FindSongResult> {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const time = new Date()

  return {
    status: "success",
    platform: args.platform,
    username: args.streamer,
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/309c7c07-6269-479d-8239-71a31ed35807-profile_image-70x70.png",
    shazamStartTime: time,
    shazamEndTime: time,
    song: {
      id: 939129,
      artcover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d4/a4/3c/d4a43c80-f475-41c2-125d-97936c928cf8/21UM1IM34355.rgb.jpg/400x400cc.jpg",
      subtitle: "sanah & Vito Bambino",
      title: "Ale jazz! Lrem some one text i dont no what iam write",
      genres: {
        primary: "Pop",
      },
      shazamUrl: "https://www.shazam.com/track/552406075/ale-jazz",
      youtubeUrl: "https://www.youtube.com/watch?v=hHb3owr6PQ",
      artists: [
        {
          artwork: {
            bgColor: "675c5a",
            height: 2513,
            url: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b2/a6/3e/b2a63e37-e057-b87b-b8f6-11cf3303be93/pr_source.png/{w}x{h}bb.jpg",
            width: 2513,
          },
          id: 12939492,
          name: "sahan",
          appleMusicUrl: "https://music.apple.com/artist/sanah/215896170",
          shazamUrl: "https://music.apple.com/artist/sanah/215896170",
        },
        {
          artwork: {
            bgColor: "d1d5d4",
            height: 2540,
            url: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/48/82/56/48825644-5d9e-4c7a-11be-9776af9ede15/d47ef2d4-6e80-43d6-85c2-3dd3d527befd_ami-identity-53045741255f402a44cf760f85a54016-2023-02-15T12-51-02.042Z_cropped.png/{w}x{h}bb.jpg",
            width: 2540,
          },
          id: 1443869312,
          name: "Vito Bambino",
          appleMusicUrl: "https://music.apple.com/artist/vito-bambino/1443869312",
          shazamUrl: "https://music.apple.com/artist/vito-bambino/1443869312",
        },
      ],
    },
  }
}
