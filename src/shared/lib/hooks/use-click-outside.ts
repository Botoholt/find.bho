/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RefObject } from "react"
import { useEffect, useRef, useState } from "react"

type UseClickOutsideTarget = RefObject<Element | null | undefined> | (() => Element) | Element

const getElement = (target: UseClickOutsideTarget) => {
  if (typeof target === "function") {
    return target()
  }

  if (target instanceof Element) {
    return target
  }

  return target.current
}

export type UseClickOutside = {
  <Target extends UseClickOutsideTarget | UseClickOutsideTarget[]>(
    target: Target,
    callback: (event: Event) => void,
  ): void

  <Target extends UseClickOutsideTarget | UseClickOutsideTarget[]>(
    callback: (event: Event) => void,
    target?: never,
  ): (node: Target) => void
}

export const useClickOutside = ((...params: any[]) => {
  const target = (typeof params[1] === "undefined" ? undefined : params[0]) as
    | UseClickOutsideTarget
    | UseClickOutsideTarget[]
    | undefined
  const callback = (params[1] ? params[1] : params[0]) as (event: Event) => void

  const [internalRef, setInternalRef] = useState<Element>()
  const internalCallbackRef = useRef(callback)
  internalCallbackRef.current = callback

  useEffect(() => {
    if (!target && !internalRef) return
    const handler = (event: Event) => {
      if (Array.isArray(target)) {
        if (!target.length) return

        const isClickedOutsideElements = target.every((target) => {
          const element = getElement(target)
          return element && !element.contains(event.target as Node)
        })

        if (isClickedOutsideElements) internalCallbackRef.current(event)

        return
      }

      const element = target ? getElement(target) : internalRef

      if (element && !element.contains(event.target as Node)) {
        internalCallbackRef.current(event)
      }
    }

    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [internalRef, target])

  if (target) return
  return setInternalRef
}) as UseClickOutside
