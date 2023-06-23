import { useState, useEffect } from 'react'

export const useMediaQuery = ({ width, height }: { width: string; height: string }) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}) and (max-height: ${height})`)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, width, height])

  return matches
}

export const useMediaQueryExact = ({ width, height }: { width: string; height: string }) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(width: ${width}) and (height: ${height})`)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, width, height])

  return matches
}

export const useMediaQueryWidth = (query: any) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
