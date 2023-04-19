import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '@/constants'
const Projects = () => {
  return (
    <motion.section className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl">
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">what i have build</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} {...project} index={index} />
        })}
      </div>
    </motion.section>
  )
}

export default Projects
