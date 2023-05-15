import { useModeToggle } from '@/context/ModeProvider'
import PacmanCanvas from '../canvas/pacmanCanvas'
import { technologies } from '@/constants'
import BallCanvas from '../canvas/BallCanvas'

const TechStackBox = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="w-[100px] lg:w-0 min-h-[600px] lg:min-h-[150px] lg:basis-3/4 lg:transform-none">
      <div className={`pill ${darkMode ? 'bg-[#FFE193]' : 'bg-[#FEF8DF]'}`}>
        <div id="tech" className="flex flex-col items-center mx-auto lg:flex-row">
          <div className="w-full lg:w-[15%]">
            <PacmanCanvas />
          </div>
          <div className="flex flex-col flex-wrap items-center lg:flex-row">
            {/* <BallCanvas /> */}
            {technologies.map((technology, idx) => {
              return (
                <div className="w-12 h-12" key={technology.name}>
                  <BallCanvas icon={technology.icon} idx={idx} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackBox
