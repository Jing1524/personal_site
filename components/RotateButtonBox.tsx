import { useModeToggle } from '@/context/ModeProvider'
import Image from 'next/image'

const RotateButtonBox = ({ isReverse, setIsReverse, pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <div className="box basis-1/2">
      <button
        ref={pillsRef}
        className={`pill m-auto h-[50px] w-[150px] border-[8px] lg:border-[12px] border-[#1e1e1e] rounded-full p-[6.25px] box-content flex items-center justify-center ${
          darkMode ? 'bg-[#D8D8D8]' : 'bg-[#fff]'
        }`}
        onClick={() => setIsReverse(!isReverse)}
      >
        <Image src="./icons/rotation_icon.svg" height={50} width={50} alt="rotation icon" className="rotation" />
      </button>
    </div>
  )
}

export default RotateButtonBox
