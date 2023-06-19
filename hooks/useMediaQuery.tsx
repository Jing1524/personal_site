import { useState, useEffect } from 'react'

const useMediaQuery = ({ width, height }: { width: string; height: string }) => {
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

export default useMediaQuery
