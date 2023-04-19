import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
const SectionWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl"
      >
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
