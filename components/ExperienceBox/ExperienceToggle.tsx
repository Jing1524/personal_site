import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'

const ExperienceToggle = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="small-box box lg:basis-2/12">
      <button
        className={`h-full w-full border border-[8px] lg:border-[12px] border-[#1e1e1e] box-border rounded-full flex justify-center items-center ${
          darkMode ? 'bg-[#199C85]' : 'bg-[#BDE3D8]'
        }`}
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
