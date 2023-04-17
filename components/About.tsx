import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
export default function About() {
  return (
    <section className="flex mx-auto w-[90vw]">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>
      <Tilt className="p-4 ml-4 bgGlass">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Working as a frontend engineer at Pineapple Workshop, I leveraged my background in design and music to
          approach engineering challenges with a unique viewpoint on creativity, self-discipline, and teamwork. With two
          years of experience building and delivering web applications, I have honed my skills in modern development
          technologies. At Pineapple, I developed my expertise in writing, testing, and documenting scalable, reusable
          code. I thrive in collaborative environments and am equally comfortable taking ownership of projects and
          driving them to completion.
        </motion.p>
      </Tilt>
    </section>
  )
}
