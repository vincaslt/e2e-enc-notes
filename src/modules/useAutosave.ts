import { useMemo, useRef, useState } from 'react'
import debounce from '~/utils/debounce'
import useUpdateEffect from '~/utils/useUpdateEffect'

interface Params<T> {
  watch: T
  save: (value: T) => Promise<void>
  getId: (value: T) => unknown
  ignoreInitial: boolean
}

function useAutosave<T>({ save, watch, getId, ignoreInitial }: Params<T>) {
  const prevIdRef = useRef<unknown>()
  const [isSaving, setSaving] = useState(false)
  const [isPending, setPending] = useState(false)

  const saveDebounced = useMemo(
    () =>
      debounce((value: T) => {
        setSaving(true)
        save(value).finally(() => {
          setSaving(false)
          setPending(false)
        })
      }, 1000),
    [save]
  )

  const id = getId(watch)

  useUpdateEffect(() => {
    if (!ignoreInitial || prevIdRef.current === id) {
      setPending(true)
      saveDebounced(watch)
    } else {
      prevIdRef.current = id
    }
  }, [id, ignoreInitial, saveDebounced, watch])

  return {
    isSaving,
    isPending,
  }
}

export default useAutosave
