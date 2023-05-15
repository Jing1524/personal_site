import { useModeToggle } from '@/context/ModeProvider'

const TechStackBox = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="min-h-[600px] lg:min-h-[150px] lg:basis-3/4 bg-[#238] box stretchable lg:transform-none">
      <div className={`pill ${darkMode ? 'bg-[#FFE193]' : 'bg-[#FEF8DF]'}`}>
        <p> TECKSTACK</p>{' '}
      </div>
    </div>
  )
}

export default TechStackBox
