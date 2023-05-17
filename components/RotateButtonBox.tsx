import { useModeToggle } from '@/context/ModeProvider'
import Image from 'next/image'

const RotateButtonBox = ({ isReverse, setIsReverse, pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  return (
    //  box
    <div className="w-[50%]">
      <button
        ref={pillsRef}
        className={`pill m-auto h-[125px] w-full border-[8px] lg:border-[12px] border-[#1e1e1e] rounded-3xl p-[6.25px] box-content flex items-center justify-center ${
          darkMode ? 'bg-[#D8D8D8]' : 'bg-[#fff]'
        }`}
        onClick={() => setIsReverse(!isReverse)}
      >
        <Image src="./icons/rotation_icon.svg" height={100} width={100} alt="rotation icon" className="rotation" />
      </button>
    </div>
  )
}

export default RotateButtonBox
