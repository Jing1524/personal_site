import { motion } from 'framer-motion'

const ExperienceToggle = () => {
  return (
    <div className="small-box box lg:basis-2/12">
      <button className="pill">
        <div className="flex items-center gap-8 arrow left-expand-arrow">
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

          <h1>See My Experience</h1>
        </div>
      </button>
    </div>
  )
}

export default ExperienceToggle
