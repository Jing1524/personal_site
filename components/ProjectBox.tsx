import Image from 'next/image'
import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'

const ProjectBox = ({ expand }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletScreen = useMediaQuery('(max-height:800px)')

  return (
    <div className={`flex flex-col ${expand ? 'hidden' : 'block'}`}>
      <div className={`w-full ${tabletScreen ? 'h-[50%]' : 'h-[40%]'} box p-[0.8vh]`}>
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
      </div>

      <div className={`w-full ${tabletScreen ? 'h-[50%]' : 'h-[40%]'} box p-[10px]`}>
        <div
          className={`pill w-full h-full border rounded-[100px] box-border overflow-hidden flex justify-center items-center bg-[#5a6191] `}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="relative flex flex-col items-center h-full group">
            <div className="absolute flex items-center justify-center mt-4 z-[50] w-full">
              <p className="font-bold font-lg text-[#fff] ">Yet Another Music App</p>
              <p className="ml-2 bg-[#fff] rounded-full p-2 self-end">
                <a href="https://github.com/Jing1524/yet-another-music-app" target="_blank">
                  Github
                </a>
              </p>
            </div>

            <a href="https://yama-one.vercel.app" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/music-player.png"
                alt="music player project"
                className={`object-cover ${darkMode ? 'opacity-70' : 'opacity-50'} `}
              />
            </a>

            <div className="absolute bg-[#fff]/90 w-full bottom-0 h-[20%] p-2 lg:p-4">
              <div className="flex justify-center w-full gap-2">
                <p className="text-[1.5vw] lg:text-[0.8vw] font-bold">Teck Stack:</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] divide-x-2 min-h-[36px] flex justify-center">
                  Next.js
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center ">
                  Redux Toolkit
                </p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">Tailwind</p>
                <p className="font-semibold text-[1.5vw] lg:text-[0.8vw] min-h-[36px] flex justify-center">RapidAPI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full h-[20%] box p-[10px] ${tabletScreen ? 'hidden' : 'block'}`}>
        <div
          className={`pill w-full h-full border rounded-[100px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center bg-[#e6abbe] basis-1/3`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <h1 className="font-bold">Coming Soon...</h1>
        </div>
      </div>
    </div>
  )
}
export default ProjectBox
