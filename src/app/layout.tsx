import "@/shared/styles/colors.css"
import "@/shared/styles/globals.css"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
