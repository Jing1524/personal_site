import classNames from 'classnames'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../constants'
import { useState } from 'react'
import { useModeToggle } from '@/context/ModeProvider'

function MenuOverlay({ active, setActive }: any): JSX.Element {
  const { darkMode } = useModeToggle()

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5 }}
        className={classNames(
          'fixed w-screen top-0 h-screen z-10',
          darkMode ? 'bg-black/90 bgTransition' : 'bg-white/90 bgTransition'
        )}
      >
        <ul
          className={classNames(
            'flex flex-col items-center justify-center w-full h-full gap-16 font-bold text-Metropolis text-2xl',
            darkMode ? 'text-white' : 'text-black'
          )}
        >
          {navLinks.map((link) => {
            return (
              <motion.li
                key={link.id}
                className={classNames(
                  `${active === link.title ? 'text-white' : 'text-secondary'}`,
                  darkMode ? 'hover:text-white' : 'hover:text-black'
                )}
                onClick={() => setActive(link.title)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${link.id}`}> {link.title} </a>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    </AnimatePresence>
  )
}

export default MenuOverlay

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
