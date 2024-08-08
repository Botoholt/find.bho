"use client"

import { useEffect, useState } from "react"
import { cn } from "@/shared/lib/utils"
import { ReactNode } from "react"

interface TypingAnimationProps {
  texts: { text: string; className?: string; icon?: ReactNode }[]
  duration?: number
  className?: string
}

export function TypingAnimation({ texts, duration = 200, className }: TypingAnimationProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    const typingEffect = setInterval(
      () => {
        if (!isDeleting && !delay) {
          if (index < texts[textIndex].text.length) {
            setDisplayedText(texts[textIndex].text.substring(0, index + 1))
            setIndex(index + 1)
          } else if (index === texts[textIndex].text.length && texts[textIndex].icon && !showIcon) {
            setShowIcon(true)
            setDelay(true)
            setTimeout(() => setDelay(false), duration * 3)
          } else if (index === texts[textIndex].text.length && !texts[textIndex].icon) {
            setIsDeleting(true)
          }
        } else if (isDeleting) {
          if (index > 0) {
            setDisplayedText(texts[textIndex].text.substring(0, index - 1))
            setIndex(index - 1)
          } else {
            setIsDeleting(false)
            setShowIcon(false)
            setTextIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1))
          }
        } else if (delay && !isDeleting && showIcon) {
          setDelay(true)
          setTimeout(() => {
            setDelay(false)
            setIsDeleting(true)
          }, duration * 8)
        }
      },
      isDeleting ? duration / 3 : duration,
    )

    return () => {
      clearInterval(typingEffect)
    }
  }, [duration, index, isDeleting, delay, texts, textIndex, showIcon])

  return (
    <div
      className={cn(
        "inline-flex flex-row items-center gap-1 tracking-[0.02em]",
        className,
        texts[textIndex].className,
      )}
    >
      <div className="h-full w-[1px]" />
      {displayedText}
      {showIcon && !isDeleting && texts[textIndex].icon && texts[textIndex].icon}
    </div>
  )
}
