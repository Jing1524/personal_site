import { useModeToggle } from '@/context/ModeProvider'

const SliderBox = () => {
  const { darkMode } = useModeToggle()

  return (
    <div className="order-first lg:order-last lg:basis-1/5 slider-container box">
      <div className={`pill ${darkMode ? 'bg-[#E59394]' : 'bg-[#EAC7C7]'}`}>
        <div className="input-container">
          <input id="slider-input" type="range" min="0" max="10" step="1" />
        </div>
      </div>
    </div>
  )
}

export default SliderBox