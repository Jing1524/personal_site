import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { useContext } from 'react'

const RotateButtonBox = ({ isReverse, setIsReverse }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  const tabletView = useMediaQuery({ width: '1024px', height: '1366px' })

  return (
    //  box
    <div className="flex h-[70%] basis-1/2 2xl:basis-2/3 box p-[0.8vh]">
      <button
        className={`relative pill m-auto w-full h-full border-[#1e1e1e] rounded-[100px] rounded-3xl p-[6.25px] flex items-center justify-center ${
          darkMode ? 'bg-[#D8D8D8]' : 'bg-[#fff]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onClick={() => setIsReverse(!isReverse)}
      >
        <img src="./icons/rotation_icon.svg" alt="rotation icon" className="rotation h-[80%] w-[80%]" />
      </button>
    </div>
  )
}

export default RotateButtonBox
