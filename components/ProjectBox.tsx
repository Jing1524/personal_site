import Image from 'next/image'
import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'

const ProjectBox = ({ pillsRef }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletScreen = useMediaQuery('(max-height:860px)')

  return (
    <div className="flex flex-col">
      <div className="w-full h-full box p-[0.8vh]">
        <div
          ref={pillsRef}
          className={`pill w-full h-full border rounded-[100px] box-border overflow-hidden flex justify-center items-center`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="relative flex flex-col items-center h-full group">
            <p className="absolute font-bold font-lg">Project 1</p>
            <a href="https://yama-one.vercel.app" target="_blank">
              <img src="/images/music-player.png" alt="music player project" className="object-cover opacity-50" />
            </a>

            <div className="absolute bg-[#fff]/70 w-full bottom-0 h-[20%] p-2 lg:p-4">
              <div className="flex items-center justify-center w-full gap-2">
                <p className="text-[1.5vw] lg:text-[0.8vw] font-bold">Teck Stack:</p>
                <p className="text-[1.5vw] lg:text-[0.8vw] border border-2 border-[#1e1e1e] rounded-lg px-2 min-h-[36px] flex justify-center items-center">
                  Next.js
                </p>
                <p className="text-[1.5vw] lg:text-[0.8vw] border border-2 border-[#1e1e1e] rounded-lg px-2  min-h-[36px] flex justify-center items-center">
                  Redux Toolkit
                </p>
                <p className="text-[1.5vw] lg:text-[0.8vw] border border-2 border-[#1e1e1e] rounded-lg px-2 min-h-[36px] flex justify-center items-center">
                  Tailwind
                </p>
                <p className="text-[1.5vw] lg:text-[0.8vw] border border-2 border-[#1e1e1e] rounded-lg px-2 min-h-[36px] flex justify-center items-center">
                  RapidAPI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full h-full box p-[10px] ${tabletScreen ? 'hidden' : 'block'}`}>
        <div
          ref={pillsRef}
          className={`pill w-full h-full border rounded-[100px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
            darkMode ? 'bg-[#eae0d7]' : 'bg-[#54a58a]'
          } basis-1/3`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <h1 className="font-bold">Coming Soon...</h1>
        </div>
      </div>
      <div className={`w-full h-full box p-[10px] ${tabletScreen ? 'hidden' : 'block'}`}>
        <div
          ref={pillsRef}
          className={`pill w-full h-full border rounded-[100px] border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
            darkMode ? 'bg-[#eae0d7]' : 'bg-[#e6abbe]'
          } basis-1/3`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <h1 className="font-bold">Coming Soon...</h1>
        </div>
      </div>
    </div>
  )
}
export default ProjectBox
