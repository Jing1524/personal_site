import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { useContext, useRef } from 'react'

const ExperienceToggle = ({ setShowSideBar, showSideBar }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)

  return (
    <div className="h-[120px] w-[60%] sm:w-[70%] lg:h-full lg:small-box lg:basis-3/12 p-[0.8vh] box">
      <button
        className={`pill h-full w-full border border-[#1e1e1e] box-border rounded-[100px] flex justify-center items-center ${
          darkMode ? 'bg-[#eae0d7]' : 'bg-[#4a95a4]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <div className="flex items-center gap-4 arrow left-expand-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-move-arrow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>

          <h1 className="text-xl font-bold">See My Experience</h1>
        </div>
      </button>
    </div>
  )
}

export default ExperienceToggle
