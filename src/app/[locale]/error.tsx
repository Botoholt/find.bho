"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <section className="bg-white">
      <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
        <h1 className="mt-8 text-4xl md:text-6xl">Oops, something went wrong!</h1>
        <button
          onClick={reset}
          className="mt-4 rounded-xl bg-teal-700 px-4 py-2 duration-75 hover:bg-teal-500"
        >
          Try again
        </button>
      </div>
    </section>
  )
}
