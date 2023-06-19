import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const ModeToggleBox = ({ togglePillRef, sliderValue }: any) => {
  const { darkMode, toggleDarkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  console.log({ darkMode })
  return (
    <div className="flex items-center self-center justify-center h-full for-toggle lg:m-0 lg:basis-3/5 box">
      <button
        disabled={sliderValue > 1}
        ref={togglePillRef}
        className={classNames(
          'togglePill h-[100px] w-[230px] lg:w-[80%] border-[#1e1e1e] rounded-full p-[6.25px] flex overflow-hidden relative lg:m-auto',
          darkMode ? 'justify-end' : 'justify-start'
        )}
        style={{ borderWidth: theme.strokeWidth, background: darkMode ? '#29296b' : '#669ff2' }}
        onClick={toggleDarkMode}
      >
        <motion.div layout transition={spring}>
          {darkMode ? (
            <motion.div initial="out" animate="in" variants={boxVariants}>
              <motion.div
                className="absolute top-[35%] left-[38%] h-[6.5px] w-[6.5px] rounded-full bg-white"
                variants={childVariants}
              />
              <motion.div
                className="absolute top-[25%] left-[15%] h-[14px] w-[14px] starOne bg-white"
                variants={childVariants}
              />
              <motion.div
                className="absolute top-[70%] left-[25%] h-[5.5px] w-[5.5px] rounded-full bg-white"
                variants={childVariants}
              />

              <motion.div
                className="absolute top-[25%] left-[55%] h-[4px] w-[4px] rounded-full bg-white"
                variants={childVariants}
              />

              <motion.div
                className="absolute top-[55%] left-[45%] h-[10px] w-[10px] starOne bg-white"
                variants={childVariants}
              />
              <motion.div className="moon mr-[20px] mt-1" />
            </motion.div>
          ) : (
            <div className="w-14 h-14 bg-[#FFA500] rounded-full sun ml-[5px] mt-1" />
          )}
        </motion.div>
      </button>
    </div>
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
