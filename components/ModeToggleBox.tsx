import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import { motion } from 'framer-motion'

const ModeToggleBox = () => {
  const { darkMode, toggleDarkMode } = useModeToggle()
  return (
    <div className="min-h-[50px] min-w-[150px] for-toggle">
      <button
        className={classNames(
          'w-full h-full border-[8px] border-[#1e1e1e] rounded-full p-[6.25px] box-content flex overflow-hidden relative',
          darkMode ? 'justify-end glass' : 'justify-start glassLight'
        )}
        onClick={toggleDarkMode}
      >
        <motion.div layout transition={spring}>
          {darkMode ? (
            <motion.div initial="out" animate="in" variants={boxVariants}>
              <motion.div
                className="absolute top-[35%] left-[38%] h-[4.5px] w-[4.5px] rounded-full bg-white"
                variants={childVariants}
              />
              <motion.div
                className="absolute top-[25%] left-[15%] h-[10px] w-[10px] starOne bg-white"
                variants={childVariants}
              />
              <motion.div
                className="absolute top-[70%] left-[25%] h-[3.5px] w-[3.5px] rounded-full bg-white"
                variants={childVariants}
              />

              <motion.div
                className="absolute top-[25%] left-[55%] h-[2.5px] w-[2.5px] rounded-full bg-white"
                variants={childVariants}
              />

              <motion.div
                className="absolute top-[55%] left-[45%] h-[8px] w-[8px] starOne bg-white"
                variants={childVariants}
              />
              <motion.div className="moon mr-[20px]" />
            </motion.div>
          ) : (
            <div className="w-12 h-12 bg-[#FFA500] rounded-full sun ml-[5px]" />
          )}
        </motion.div>
      </button>
    </div>
    // </div>
  )
}

export default ModeToggleBox

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
      duration: 0.6,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.1,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.25,
    },
  },
}

const childVariants = {
  out: {
    y: -50,
    transition: {
      type: 'tween',
    },
  },
  in: {
    y: 0,
    transition: {
      type: 'tween',
    },
  },
}
