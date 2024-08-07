import { HTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/utils"

export function Skeleton({
  children,
  ...props
}: { children?: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn("animate-pulse bg-t-rv-primary/85", props.className)}>
      {children}
    </div>
  )
}
