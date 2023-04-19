import react, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { styles } from '../../styles/style'
import { navLinks } from '../../constants'
import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import useMediaQuery from '@/hooks/useMediaQuery'
import kittyAnimate from '../../assets/lottie/kitty.json'
import { motion } from 'framer-motion'
import ToggleButton from '../toggleButton'
import MenuOverlay from './MenuOverlay'
import { MenuButton } from './MenuButton'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [active, setActive] = useState('')
  const { darkMode, toggleDarkMode } = useModeToggle()
  const isMobileView = useMediaQuery('(max-width: 768px)')

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: kittyAnimate,
  }

  return (
    <>
      <div className="z-20 fixed left-[50%] -translate-x-1/2">
        <nav
          className={classNames(
            'flex items-center px-4 w-[90vw] rounded-2xl shadow-xl bg-white mt-[18px]',
            darkMode ? 'dark bgTransition drop-shadow-[0_8px_10px_rgba(255,255,255)]' : 'light bgTransition'
          )}
        >
          <motion.h1 className="ml-4 text-lg font-black text-transparent animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
            A Frontend Engineer&apos;s <br /> PORTFOLIO
          </motion.h1>
          <div className="m-0 -ml-[70px]">
            <Lottie options={defaultOptions} height={60} width={40} />
          </div>
          {isMobileView ? (
            <button className="flex ml-auto mr-2 font-normal text-Metropolis font-base">
              {' '}
              <MenuButton
                isOpen={navbarOpen}
                // @ts-ignore
                onClick={() => setNavbarOpen(!navbarOpen)}
                strokeWidth="4.5"
                color="#ff6666"
                lineProps={{ strokeLinecap: 'round' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                width="24"
                height="20"
              />
            </button>
          ) : (
            <ul className="flex gap-12 mx-auto font-normal text-Metropolis font-base">
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
          )}

          <ToggleButton />
        </nav>
      </div>
      {navbarOpen && <MenuOverlay active={active} setActive={setActive} />}
    </>
  )
}
