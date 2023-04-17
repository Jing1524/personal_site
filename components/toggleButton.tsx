import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import { motion } from 'framer-motion'

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useModeToggle()
  return (
    <button
      className={classNames(
        'w-16 ml-4 rounded-full h-7 p-[6.25px] box-content flex overflow-hidden relative',
        darkMode ? 'justify-end glass' : 'justify-start glassLight'
      )}
      onClick={toggleDarkMode}
    >
      <motion.div layout transition={spring}>
        {darkMode ? (
          <motion.div initial="out" animate="in" variants={boxVariants}>
            <motion.div
              className="absolute top-[70%] left-[25%] h-[3.5px] w-[3.5px] rounded-full bg-white"
              variants={childVariants}
            />
            <motion.div
              className="absolute top-[35%] left-[38%] h-[4.5px] w-[4.5px] rounded-full bg-white"
              variants={childVariants}
            />
            <motion.div
              className="absolute top-[25%] left-[55%] h-[2.5px] w-[2.5px] rounded-full bg-white"
              variants={childVariants}
            />
            <motion.div
              className="absolute top-[25%] left-[15%] h-[10px] w-[10px] starOne bg-white"
              variants={childVariants}
            />
            <motion.div
              className="absolute top-[55%] left-[45%] h-[8px] w-[8px] starOne bg-white"
              variants={childVariants}
            />
            <motion.div className="moon mr-[12px]" />
          </motion.div>
        ) : (
          <div className="w-6 h-6 bg-[#FFA500] rounded-full sun mt-[1.8px]" />
        )}
      </motion.div>
    </button>
  )
}

export default ToggleButton

const spring = {
  type: 'spring',
  stiffness: 800,
  damping: 30,
}

const boxVariants = {
  out: {
    y: 0,
  },
  in: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.2,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  out: {
    y: -600,
  },
  in: {
    y: 0,
  },
}
