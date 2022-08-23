import { useCallback, useMemo, useState } from 'react'
import debounce from '~/utils/debounce'

function useDebounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay = 1000
) {
  const [isPending, setPending] = useState(false)
  const [isExecuted, setExecuted] = useState(false)

  const debouncedFn = useMemo(
    () =>
      debounce<Args>((...args) => {
        setExecuted(true)
        setPending(false)
        fn(...args)
      }, delay),
    [delay, fn]
  )

  const runDebouncedFn = useCallback(
    (...args: Args) => {
      setPending(true)
      debouncedFn(...args)
    },
    [debouncedFn]
  )

  const flushAndReset = useCallback(() => {
    debouncedFn.flush()
    setExecuted(false)
    setPending(false)
  }, [debouncedFn])

  return useMemo(
    () =>
      [
        runDebouncedFn,
        {
          flushAndReset,
          isExecuted,
          isPending,
        },
      ] as const,
    [flushAndReset, isExecuted, isPending, runDebouncedFn]
  )
}

export default useDebounce
