"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <span>Loading...</span>
  }

  return (
    <div className="flex flex-col gap-2">
      <span>The current theme is: {resolvedTheme}</span>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}
