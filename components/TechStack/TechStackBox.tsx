import { useModeToggle } from '@/context/ModeProvider'
import PacmanCanvas from '../canvas/pacmanCanvas'
import { technologies } from '@/constants'
import BallCanvas from '../canvas/BallCanvas'
import Matterjs from '../matterjs'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const TechStackBox = ({ pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="w-[100px] lg:w-0 min-h-[600px] lg:min-h-[150px] lg:basis-3/4 lg:transform-none">
      <div
        ref={pillsRef}
        className={`pill h-full w-full border border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center  ${
          darkMode ? 'bg-[#FFE193]' : 'bg-[#FEF8DF]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
      >
        <Matterjs />
      </div>
    </div>
  )
}

export default TechStackBox
