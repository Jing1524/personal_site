import react, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { styles } from '../styles/style'
import { navLinks } from '../constants'
import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import useMediaQuery from '@/hooks/useMediaQuery'
import kittyAnimate from '../assets/lottie/kitty.json'
import { motion } from 'framer-motion'
import ToggleButton from './toggleButton'
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [active, setActive] = useState('')
  const { darkMode, toggleDarkMode } = useModeToggle()
  const isTabletView = useMediaQuery('(max-width: 950px)')
  console.log(darkMode)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: kittyAnimate,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice',
    // },
  }

  return (
    <>
      <div className="z-20 fixed left-[50%] -translate-x-1/2">
        <nav
          className={classNames(
            'flex items-center px-4 w-[90vw] rounded-2xl shadow-xl bg-white mt-[18px]',
            darkMode ? 'dark bgTransition' : 'light bgTransition'
          )}
        >
          <div className="m-0">
            <Lottie options={defaultOptions} height={60} width={40} />
          </div>

          <h1 className="ml-4">
            Jing Li <p>Frontend Engineer</p>
          </h1>

          <ul className="flex gap-8 ml-auto font-normal text-Metropolis font-base">
            {navLinks.map((link) => {
              return (
                <motion.li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-black`}
                  onClick={() => setActive(link.title)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </motion.li>
              )
            })}
          </ul>
          <ToggleButton />
        </nav>
      </div>
      {/* {navbarOpen && <MenuOverlay navData={navData} />} */}
    </>
  )
}
