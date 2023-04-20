import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import { experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css'
import { useModeToggle } from '@/context/ModeProvider'

const ExperienceCard = ({ experience }: any) => {
  const { darkMode } = useModeToggle()

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode ? '#1d1836' : '#E0B391',
        color: darkMode ? '#fff' : '#000',
        borderRadius: '16px',
      }}
      contentArrowStyle={{ borderRight: darkMode ? '' : '7px solid #E0B391' }}
      date={experience.date}
      iconStyle={{ background: '#8BC7DD' }}
    >
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p className="text-base font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point: any, index: any) => {
          return (
            <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}

export default function Experience() {
  return (
    //  sm:px-16 sm:py-16 max-w-7xl
    <motion.section className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl ">
      <motion.div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">What i have done so far</p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline lineColor={'#8BC7DD'}>
          {experiences.map((experience: any, index: number) => {
            return <ExperienceCard key={index} experience={experience} />
          })}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}
