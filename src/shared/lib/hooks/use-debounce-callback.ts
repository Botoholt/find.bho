import { useMemo } from "react"
import { debounce } from "../debounce"

export function useDebounceCallback<Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number,
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useMemo(() => debounce(callback, delay), [delay])

  return debounced
}
