import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { useRef, useState } from 'react'

import classNames from 'classnames'
import { useModeToggle } from '@/context/ModeProvider'
const About = () => {
  const [isInView, setIsInView] = useState(false)
  const { darkMode } = useModeToggle()
  return (
    <motion.section className="relative z-0 flex flex-col px-6 py-10 mx-auto my-28 sm:px-16 sm:py-16 max-w-7xl">
      <motion.div
        // @ts-ignore
        whileInView={() => {
          return setIsInView(true)
        }}
        initial={{ x: -50, opacity: 0 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="flex self-center md:self-start items-center justify-center px-6 h-[100px] squareGlass rounded-xl -mb-[20px] md:-ml-[70px]"
      >
        <p className="text-4xl font-black tracking-normal uppercase font-ubuntu">Introduction</p>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="z-[1]"
      >
        <Tilt
          className={classNames('p-6', darkMode ? 'bgGlass-dark' : 'bgGlass-light')}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
        >
          <motion.p className="m-4 text-2xl leading-relaxed tracking-wide font-inter">
            Working as a frontend engineer at Pineapple Workshop, I leveraged my background in design and music to
            approach engineering challenges with a unique viewpoint on creativity, self-discipline, and teamwork. With
            two years of experience building and delivering web applications, I have honed my skills in modern
            development technologies. At Pineapple, I developed my expertise in writing, testing, and documenting
            scalable, reusable code. I thrive in collaborative environments and am equally comfortable taking ownership
            of projects and driving them to completion.
          </motion.p>
        </Tilt>
      </motion.div>
    </motion.section>
  )
}

export default About
