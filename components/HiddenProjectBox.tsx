import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useContext, useEffect, useRef, useLayoutEffect } from 'react'

const HiddenProjectBox = ({ projectSliderValue, setHiddenProjectBoxWidth, hiddenProjectBoxWidth, isReverse }: any) => {
  const { theme } = useContext(ThemeContext)

  const hiddenBoxRef = useRef<any>()

  useEffect(() => {
    if (hiddenBoxRef.current) {
      const hiddenBox = hiddenBoxRef.current
      hiddenBox.style.width = `${projectSliderValue}px`
      setHiddenProjectBoxWidth(projectSliderValue)
    }
  }, [projectSliderValue, hiddenBoxRef.current])

  return (
    <div ref={hiddenBoxRef} className="flex flex-col w-full">
      <div
        style={{ borderWidth: theme.strokeWidth }}
        className={`pill ${
          projectSliderValue >= 10 ? 'block' : 'hidden'
        }  border rounded-[100px] border-[#1e1e1e] h-2/3 p-[2rem] rotate-12 ml-[4vmin] mt-[4vmin] ${
          isReverse && 'another-translate-x-custom'
        }`}
      >
        <div
          className={`${projectSliderValue === 800 ? 'block' : 'hidden'} h-full flex flex-col justify-center w-full`}
        >
          <p className="font-bold text-[2.2vmin] lg:text-[1.2vmin] xl:text-[1.8vmin] text-[#FDE2E4]">Previous Work:</p>
          <p className="font-medium text-[2vmin] lg:text-[1vmin] xl:text-[1.6vmin] text-[#FDE2E4]">
            Pineapple Workshop
          </p>
          <a
            href="https://pineappleworkshop.com"
            target="_blank"
            className="mt-[.6vmin] text-[#FDE2E4] hover:underline font-medium text-[2vmin] lg:text-[1vmin] xl:text-[1.6vmin]"
          >
            pineappleworkshop.com
          </a>

          <div className="flex w-full mt-2">
            <p className="text-[#FDE2E4] text-[2vmin] lg:text-[1vmin] xl:text-[1.6vmin] font-bold basis-1/2 2xl:basis-1/3">
              Teck stack:
            </p>
            <div className="flex flex-col gap-2 mt-[3px]">
              <p className="text-[2vmin] lg:text-[1vmin] xl:text-[1.2vmin] font-medium text-[#FDE2E4]">Next.js</p>
              <p className="text-[2vmin] lg:text-[1vmin] xl:text-[1.2vmin] font-medium text-[#FDE2E4]">
                React context for state management
              </p>
              <p className="text-[2vmin] lg:text-[1vmin] xl:text-[1.2vmin] font-medium text-[#FDE2E4]">
                Tailwind for styling
              </p>
              <p className="text-[2vmin] lg:text-[1vmin] xl:text-[1.2vmin] font-medium text-[#FDE2E4]">
                Framer motion for animation
              </p>
              <p className="text-[2vmin] lg:text-[1vmin] xl:text-[1.2vmin] font-medium text-[#FDE2E4]">
                Contentful for data hosting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ borderWidth: theme.strokeWidth }}
        className={`pill ${projectSliderValue >= 10 ? 'block' : 'hidden'} ${
          isReverse && 'another-translate-x-custom'
        }  border border-[#1e1e1e] h-[20%] p-[2rem] -rotate-12 ml-[4vmin] -mt-[4vmin]`}
      >
        <h3
          className={`${
            projectSliderValue === 800 ? 'block' : 'hidden'
          }  w-full h-full flex justify-center items-center font-bold text-[2.2vmin] lg:text-[1.2vmin] xl:text-[1.8vmin] text-[#1e1e1e]`}
        >
          more to come <span className="text-[3vmin]">&#9996;</span>
        </h3>
      </div>
    </div>
  )
}

export default HiddenProjectBox
