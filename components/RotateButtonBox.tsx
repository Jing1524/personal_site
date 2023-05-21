import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'

const RotateButtonBox = ({ isReverse, setIsReverse, pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    //  box
    <div className="flex w-[50%] box h-full p-[10px]">
      <button
        ref={pillsRef}
        className={`pill m-auto h-[125px] w-full border-[#1e1e1e] rounded-3xl p-[6.25px] flex items-center justify-center ${
          darkMode ? 'bg-[#D8D8D8]' : 'bg-[#fff]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onClick={() => setIsReverse(!isReverse)}
      >
        <Image src="./icons/rotation_icon.svg" height={100} width={100} alt="rotation icon" className="rotation" />
      </button>
    </div>
  )
}

export default RotateButtonBox
