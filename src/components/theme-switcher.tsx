"use client"

import MoonIcon from "@/shared/assets/icons/moon.svg"
import SunIcon from "@/shared/assets/icons/sun.svg"
import { cn } from "@/shared/lib/utils"
import { Skeleton } from "@/shared/ui/skeleton"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme: theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Skeleton className="h-10 w-20 rounded-xl bg-white/20" />
  }

  return (
    <div className="flex flex-row gap-1 rounded-xl bg-white/10 p-1">
      <button
        onClick={() => setTheme("light")}
        className={cn("flex-center size-8 rounded-lg", theme == "light" && "bg-white/15")}
      >
        <SunIcon className="size-6 stroke-white" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn("flex-center size-8 rounded-lg", theme == "dark" && "bg-white/15")}
      >
        <MoonIcon className="size-5 stroke-white" />
      </button>
    </div>
  )
}
