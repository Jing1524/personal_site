import { useModeToggle } from '@/context/ModeProvider'
import PacmanCanvas from '../canvas/pacmanCanvas'
import { technologies } from '@/constants'
import BallCanvas from '../canvas/BallCanvas'
import Matterjs from '../matterjs'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const TechStackBox = () => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="box p-[0.8vh] w-[120px] lg:w-0 min-h-[600px] lg:min-h-[16vh] lg:basis-3/4 lg:transform-none">
      <div
        className={`pill h-full w-full border border-[#1e1e1e] rounded-[100px] box-border overflow-hidden flex justify-center items-center  ${
          darkMode ? 'bg-[#eae0d7]' : 'bg-[#de7258]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
      >
        <Matterjs />
      </div>
    </div>
  )
}

export default TechStackBox
