import Image from 'next/image'
import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import HiddenProjectBox from '@/components/HiddenProjectBox'
const ProjectBox = ({ expand, projectSliderValue, setProjectSliderValue }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletView = useMediaQuery({ width: '1024px', height: '1366px' })

  return (
    <div className={`flex flex-col basis-1/2 ${expand ? 'hidden' : 'block'} `}>
      <div className="w-full box p-[10px] h-1/2 xl:h-full">
        <div
          className={`pill w-full h-full border rounded-[100px] box-border flex flex-col gap-2 bg-[#5a6191] p-[2rem] justify-center`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex flex-col w-full">
            <p className="font-bold text-[1rem] text-[#1e1e1e]">Recent Project:</p>
            <p className="font-medium text-[0.8rem] text-[#1e1e1e]">Yet Another Music App</p>
            <a
              href="https://yama-one.vercel.app"
              target="_blank"
              className="mt-3 text-[#1e1e1e] hover:underline font-medium text-[0.8rem]"
            >
              yama-one.vercel.app
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
          </div>

          <div className="flex w-full xl:mt-[2vw] xl:flex-row ">
            <p className="text-[0.8rem] font-bold basis-1/2 2xl:basis-1/3">Teck stack:</p>
            <div className="flex flex-col gap-2">
              <p className="text-[0.8rem] font-medium">Next.js</p>
              <p className="text-[0.8rem] font-medium">Redux Toolkit for state management</p>
              <p className="text-[0.8rem] font-medium">Tailwind for styling</p>
              <p className="text-[0.8rem] font-medium">RapidAPI for data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full box p-[10px] h-1/2 xl:hidden">
        <div
          className={`pill w-full h-full border rounded-[100px] box-border flex flex-col gap-2 bg-[#5a6191] p-[2rem] justify-center`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex flex-col w-full">
            <p className="font-bold text-[1rem] text-[#1e1e1e]">Previous work:</p>
            <p className="font-medium text-[0.8rem] text-[#1e1e1e]">Pineapple Workshop</p>
            <a
              href="https://pineappleworkshop.com"
              target="_blank"
              className="mt-3 text-[#1e1e1e] hover:underline font-medium text-[0.8rem]"
            >
              pineappleworkshop.com
            </a>
          </div>

          <div className="flex w-full xl:mt-[2vw] xl:flex-row ">
            <p className="text-[0.8rem] font-bold basis-1/2 2xl:basis-1/3">Teck stack:</p>
            <div className="flex flex-col gap-2">
              <p className="text-[0.8rem] font-medium">Next.js</p>
              <p className="text-[0.8rem] font-medium">React context hook for state management</p>
              <p className="text-[0.8rem] font-medium">Tailwind for styling</p>
              <p className="text-[0.8rem] font-medium">Framer motion for animation</p>
              <p className="text-[0.8rem] font-medium">Contentful for data hosting</p>
            </div>
          </div>
        </div>
      </div>

      {/* slider  */}
      <div className="box order-last p-[10px] h-[20%] w-full hidden xl:block">
        <div
          className={`pill h-full w-full border border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
            darkMode ? 'bg-[#E59394]' : 'bg-[#EAC7C7]'
          }`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex items-center w-full px-6">
            <input
              type="range"
              min="1"
              max="800"
              value={projectSliderValue}
              className="projectSlider"
              id="myRange"
              onChange={(e) => setProjectSliderValue(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectBox
