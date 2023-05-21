import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const SliderBox = ({ setSliederValue, sliderValue, pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {tabletScreen ? (
        <div className="order-last basis-1/5 px-[5px] min-h-[500px]">
          <div
            ref={pillsRef}
            className={`pill h-full w-[120px] 2xl:w-[150px] border border-[#1e1e1e] box-border flex justify-center items-center rounded-[20px] ${
              darkMode ? 'bg-[#E59394]' : 'bg-[#EAC7C7]'
            }`}
            style={{ borderWidth: theme.strokeWidth }}
          >
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                defaultValue="10"
                // value={sliderValue}
                className="slider"
                id="myRange"
                onChange={(e) => setSliederValue(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="order-first px-[10px] h-[180px] w-full">
          <div
            ref={pillsRef}
            className={`pill h-full w-full border border-8 lg:border-[12px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
              darkMode ? 'bg-[#E59394]' : 'bg-[#EAC7C7]'
            }`}
          >
            <div className="flex items-center w-full px-6">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                defaultValue="1"
                value={sliderValue}
                className="slider"
                id="myRange"
                onChange={(e) => setSliederValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SliderBox
