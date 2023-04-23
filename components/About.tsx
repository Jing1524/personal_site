import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { useRef, useState } from 'react'

import classNames from 'classnames'
import { useModeToggle } from '@/context/ModeProvider'
import useMediaQuery from '@/hooks/useMediaQuery'
const About = () => {
  const [isInView, setIsInView] = useState(false)
  const isLargeViewPort = useMediaQuery('(min-width:1537px)')
  const isExtraLargeViewPort = useMediaQuery('(min-width:1900px)')
  const isXXLargeViewPort = useMediaQuery('(min-width:2170px)')
  const { darkMode } = useModeToggle()
  return (
    <motion.section
      id="about"
      className={classNames(
        'relative z-0 flex flex-col px-6 py-10 mx-auto my-28 sm:px-16 sm:py-16 max-w-7xl',
        isLargeViewPort && 'max-w-[90rem]',
        isExtraLargeViewPort && 'max-w-[100rem]',
        isXXLargeViewPort && 'max-w-[110rem]'
      )}
    >
      <motion.div
        // @ts-ignore
        whileInView={() => {
          return setIsInView(true)
        }}
        initial={{ x: -50, opacity: 0 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="flex self-center md:self-start items-center justify-center p-6 squareGlass rounded-xl -mb-[20px] 2xl:-ml-[70px]"
      >
        <p className="text-2xl font-black tracking-normal uppercase md:text-4xl font-ubuntu">Introduction</p>
      </motion.div>
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="z-[1] self-start max-w-screen md:max-w-[80vw] xl:max-w-[60vw] md:-ml-[30px] xl:-ml-[15px]"
        >
          <Tilt
            className={classNames('p-6', darkMode ? 'bgGlass-dark' : 'bgGlass-light')}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
          >
            <motion.p className="m-4 text-base leading-relaxed tracking-wide md:text-xl 2xl:text-2xl font-inter">
              As a frontend software engineer with a background in design and music, I approach engineering challenges
              with a unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience
              building and delivering web applications, I have honed my skills in modern development technologies such
              as React.js, TypeScript, and Node.js.
            </motion.p>
          </Tilt>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="z-[1] self-end md:-mt-[50px] max-w-screen md:max-w-[80vw] xl:max-w-[60vw] md:-mr-[30px] xl:-mr-[15px]"
        >
          <Tilt
            className={classNames('p-6', darkMode ? 'bgGlass-dark' : 'bgGlass-light')}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
          >
            <motion.p className="m-4 text-base leading-relaxed tracking-wide md:text-xl 2xl:text-2xl font-inter">
              Working at Pineapple Workshop, I developed my expertise in writing, testing, and documenting scalable,
              reusable code. I thrive in collaborative environments and am equally comfortable taking ownership of
              projects and driving them to completion. I led the project to develop a responsive, user-friendly website,
              coordinating directly with the founder/CEO and collaborating with the design team to successfully meet the
              needs and goals of Pineapple Workshop.
            </motion.p>
          </Tilt>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="z-[0] self-center md:-mt-[40px] max-w-screen md:max-w-[80vw] xl:max-w-[60vw]"
        >
          <Tilt
            className={classNames('p-6', darkMode ? 'bgGlass-dark' : 'bgGlass-light')}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
          >
            <motion.p className="m-4 text-sm leading-relaxed tracking-wide md:text-xl 2xl:text-2xl font-inter">
              In addition to my software engineering skills, I have experience working in the fashion industry as a
              designer. My background in multiple disciplines and diverse interests allow me to approach problem-solving
              from a unique perspective. I&apos;m excited to continue building my software engineering career and to
              collaborate with others to create innovative digital products.
            </motion.p>
          </Tilt>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
