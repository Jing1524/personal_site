import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useModeToggle()
  return (
    <button
      className="w-16 ml-4 rounded-full h-7 p-[6.25px] box-content flex overflow-hidden relative bg-black"
      onClick={toggleDarkMode}
    >
      <motion.div
        layout
        animate={darkMode}
        variants={{
          dark: {
            boxShadow: 'inset 0px 13px white, inset 0px 13px 1px 1px white',
            rotate: 90,
            background: 'transparent',
          },
          light: {
            boxShadow: 'inset 0px 0px white, inset 0px 0px 0px 0px white',
            rotate: 90,
            background: '#fff',
          },
        }}
        initial={false}
        className="toggle"
      />
    </button>
  )
}

export default ToggleButton
