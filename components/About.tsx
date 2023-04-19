import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from './SectionWrapper'
import { useState } from 'react'
const About = () => {
  const [isInView, setIsInView] = useState(false)
  return (
    // TODO: add sliding in effect for both introduction and the card
    <motion.section
      className="relative z-0 flex flex-col px-6 py-10 mx-auto md:flex-row sm:px-16 sm:py-16 max-w-7xl"
      // @ts-ignore
      whileInView={() => {
        return setIsInView(true)
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>
      {/* TODO: add glare color */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView && { x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <Tilt className="p-4 ml-4 bgGlass" tiltMaxAngleX={8} tiltMaxAngleY={8} tiltAngleYInitial={8}>
          <motion.p
            // variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
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
