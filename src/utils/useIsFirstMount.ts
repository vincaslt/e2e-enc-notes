import { useEffect, useRef } from 'react'

function useIsFirstMount() {
  const isFirstMountRef = useRef(true)

  useEffect(() => {
    isFirstMountRef.current = false
  }, [])

  return isFirstMountRef.current
}

export default useIsFirstMount
