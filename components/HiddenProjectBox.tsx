import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { useContext, useEffect, useRef, useLayoutEffect } from 'react'

const HiddenProjectBox = ({ projectSliderValue, setHiddenProjectBoxWidth, hiddenProjectBoxWidth }: any) => {
  const { theme } = useContext(ThemeContext)

  const hiddenBoxRef = useRef<any>()
  console.log(hiddenBoxRef)

  useEffect(() => {
    if (hiddenBoxRef.current) {
      const hiddenBox = hiddenBoxRef.current
      let newWidth = 0

      if (projectSliderValue === 2) {
        newWidth = 100
      } else if (projectSliderValue === 3) {
        newWidth = 150
      } else if (projectSliderValue === 4) {
        newWidth = 200
      }
      // Add conditions for other projectSliderValue values here

      setHiddenProjectBoxWidth(newWidth)

      hiddenBox.style.width = `${newWidth}px`
      console.log('Current value:', projectSliderValue)
      console.log('Updated width:', hiddenBox.style.width)
    }
  }, [projectSliderValue, hiddenBoxRef.current])

  return (
    <div
      ref={hiddenBoxRef}
      style={{ borderWidth: theme.strokeWidth }}
      className={`pill ${projectSliderValue >= 2 ? 'block' : 'hidden'} border rounded-[100px] border-[#1e1e1e] h-full`}
    >
      <div className={`${projectSliderValue === 10 ? 'block' : 'hidden'}`}>
        <p className="font-bold text-lg text-[#1e1e1e] ">Previous Work:</p>
        <p className="font-medium text-lg text-[#1e1e1e]">Pineapple Workshop</p>
        <a
          href="https://pineappleworkshop.com"
          target="_blank"
          className="mt-3 text-[#1e1e1e] hover:underline font-medium"
        >
          https://pineappleworkshop.com
        </a>
        <button className="w-[50%] py-2 mt-3 border rounded-lg border-1 border-[#1e1e1e] hover:bg-[#1e1e1e]/20">
          <a
            href="https://github.com/Jing1524/yet-another-music-app"
            target="_blank"
            className="text-[#1e1e1e] font-medium"
          >
            Github
          </a>
        </button>
        <div className="flex w-full mt-2">
          <p className="text-sm font-medium basis-1/2">Teck stack:</p>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Next.js</p>
            <p className="text-sm font-medium">React context hook for state management</p>
            <p className="text-sm font-medium">Tailwind for styling</p>
            <p className="text-sm font-medium">Framer motion for animation</p>
            <p className="text-sm font-medium">contentful for data hosting</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HiddenProjectBox

{
  /* <div className={`w-full box p-[0.8vh]}>
        <div
          className={`overflow-hidden pill w-full h-full border rounded-[100px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center basis-1/3`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="relative flex flex-col items-center h-full group">
            <p className="absolute font-bold font-lg text-[#1e1e1e] z-[50] mt-4">Pineapple workshop</p>

            <a href="https://pineappleworkshop.com" target="_blank">
             
              <img
                src="/images/pineapple-site.png"
                alt="pineapple project"
                className={`object-fit ${darkMode ? 'opacity-70' : 'opacity-80'} `}
              />
            </a>

            <div className="absolute bg-[#fff]/90 w-full bottom-0 h-[20%] p-2 lg:p-4">
              <div className="flex justify-center w-full gap-2">
                <p className="text-[1.5vw] lg:text-[0.8vw] font-bold">Teck Stack:</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] divide-x-2 min-h-[36px] flex justify-center">
                  Next.js
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">
                  Contentful
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">Tailwind</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">
                  Framer Motion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
