import { useState, useMemo, useEffect } from 'react'

export default function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  let observer: any
  useEffect(() => {
    observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
  }, [])

  useEffect(() => {
    if (!ref.current) return
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
