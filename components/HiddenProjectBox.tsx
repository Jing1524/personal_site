import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { useContext, useEffect, useRef, useLayoutEffect } from 'react'

const HiddenProjectBox = ({ projectSliderValue, setHiddenProjectBoxWidth, hiddenProjectBoxWidth }: any) => {
  const { theme } = useContext(ThemeContext)

  const hiddenBoxRef = useRef<any>()

  console.log(typeof projectSliderValue)
  useEffect(() => {
    if (hiddenBoxRef.current) {
      const hiddenBox = hiddenBoxRef.current
      hiddenBox.style.width = `${projectSliderValue}px`
      setHiddenProjectBoxWidth(projectSliderValue)
    }
  }, [projectSliderValue, hiddenBoxRef.current])

  return (
    <div
      ref={hiddenBoxRef}
      style={{ borderWidth: theme.strokeWidth }}
      className={`pill ${
        projectSliderValue >= 2 ? 'block' : 'hidden'
      } border rounded-[100px] border-[#1e1e1e] h-1/2 p-[2rem]`}
    >
      <div className={`${projectSliderValue === 700 ? 'block' : 'hidden'} h-full flex flex-col justify-center w-full`}>
        <p className="font-bold text-[1rem] text-[#1e1e1e] ">Previous Work:</p>
        <p className="font-medium text-[0.8rem] text-[#1e1e1e]">Pineapple Workshop</p>
        <a
          href="https://pineappleworkshop.com"
          target="_blank"
          className="mt-3 text-[#1e1e1e] hover:underline font-medium text-[0.8rem]"
        >
          pineappleworkshop.com
        </a>

        <div className="flex w-full mt-2">
          <p className="text-sm font-medium basis-1/2">Teck stack:</p>
          <div className="flex flex-col gap-1">
            <p className="text-[0.8rem] font-medium">Next.js</p>
            <p className="text-[0.8rem] font-medium">React context hook for state management</p>
            <p className="text-[0.8rem] font-medium">Tailwind for styling</p>
            <p className="text-[0.8rem] font-medium">Framer motion for animation</p>
            <p className="text-[0.8rem] font-medium">contentful for data hosting</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HiddenProjectBox
