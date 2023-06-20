import Image from 'next/image'
import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'

const ProjectBox = ({ expand, projectSliderValue, setProjectSliderValue }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletView = useMediaQuery({ width: '1024px', height: '1366px' })

  return (
    <div className={`flex flex-col basis-1/2 ${expand ? 'hidden' : 'block'} ${tabletView && 'h-[70%]'}`}>
      {/*  ${tabletView ? 'h-[50%]' : 'h-[40%]'} */}
      <div className="w-full box p-[10px] h-[80%]">
        <div
          className={`pill w-full h-full border rounded-[100px] box-border flex flex-col bg-[#5a6191] p-10`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <p className="font-bold text-lg text-[#1e1e1e] ">Recent Project:</p>
          <p className="font-medium text-lg text-[#1e1e1e]">Yet Another Music App</p>
          <a
            href="https://yama-one.vercel.app"
            target="_blank"
            className="mt-3 text-[#1e1e1e] hover:underline font-medium"
          >
            https://yama-one.vercel.app
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
              <p className="text-sm font-medium">Redux Toolkit for state management</p>
              <p className="text-sm font-medium">Tailwind for styling</p>
              <p className="text-sm font-medium">RapidAPI for data</p>
            </div>
          </div>
        </div>
      </div>

      {/* ${tabletScreen ? 'hidden' : 'block'} */}

      <div className="box order-last p-[10px] h-[20%] w-full">
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
              max="10"
              step="1"
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
