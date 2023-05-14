import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { experiences } from '../../constants'
import 'react-vertical-timeline-component/style.min.css'
import { useModeToggle } from '@/context/ModeProvider'
import { useState } from 'react'

const ExperienceCard = ({ experience, darkMode }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode ? '#1d1836' : '#ECF2FF',
        color: darkMode ? '#fff' : '#000',
        borderRadius: '16px',
      }}
      contentArrowStyle={{ borderRight: darkMode ? '7px solid #1d1836' : '7px solid #ECF2FF' }}
      date={experience.date}
      dateClassName="elementDate"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold font-inter">{experience.title}</h3>
        <p className="text-base font-semibold font-inter" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point: any, index: any) => {
          return (
            <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider font-inter">
              {point}
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}

export default function SideBarWorkExperience() {
  const [isInView, setIsInView] = useState(false)
  const { darkMode } = useModeToggle()
  return (
    //  sm:px-16 sm:py-16 max-w-7xl
    <motion.section
      id="experience"
      className="relative z-0 flex flex-col hidden px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl"
    >
      <motion.div
        // @ts-ignore
        whileInView={() => {
          return setIsInView(true)
        }}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="self-end"
      >
        <p className="text-4xl font-black tracking-normal uppercase font-ubuntu">what I have done so far:</p>
      </motion.div>

      <div className="flex flex-col mt-10">
        <VerticalTimeline lineColor={darkMode ? '#fff' : '#000'}>
          {experiences.map((experience: any, index: number) => {
            return <ExperienceCard key={index} experience={experience} darkMode={darkMode} />
          })}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}
