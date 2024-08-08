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
    return <Skeleton className="h-10 w-20 rounded-xl bg-b-secondary" />
  }

  return (
    <div className="flex flex-row gap-1 rounded-xl bg-b-secondary p-1">
      <button
        onClick={() => setTheme("light")}
        className={cn("flex-center size-8 rounded-lg", theme == "light" && "bg-primary")}
      >
        <SunIcon className={cn("size-6 stroke-t-primary", theme == "light" && "stroke-white")} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn("flex-center size-8 rounded-lg", theme == "dark" && "bg-primary")}
      >
        <MoonIcon className="size-5 stroke-t-primary" />
      </button>
    </div>
  )
}
