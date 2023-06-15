import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { useContext } from 'react'

const RotateButtonBox = ({ isReverse, setIsReverse }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletScreen = useMediaQuery('(max-height:860px)')

  return (
    //  box
    <div className="flex w-[50%] box h-full p-[0.8vh]">
      <button
        className={`relative pill m-auto ${
          tabletScreen ? 'h-full' : 'h-[125px]'
        }  w-full border-[#1e1e1e] rounded-[100px] rounded-3xl p-[6.25px] flex items-center justify-center ${
          darkMode ? 'bg-[#D8D8D8]' : 'bg-[#fff]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onClick={() => setIsReverse(!isReverse)}
      >
        <Image src="./icons/rotation_icon.svg" fill alt="rotation icon" className="rotation" />
      </button>
    </div>
  )
}

export default RotateButtonBox
