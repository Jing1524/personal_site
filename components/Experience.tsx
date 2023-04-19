import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css'
import { useModeToggle } from '@/context/ModeProvider'
const ExperienceCard = ({ experience }: any) => {
  const { darkMode } = useModeToggle()
  return (
    <VerticalTimelineElement
      contentStyle={{ background: darkMode ? '#1d1836' : '#1d1836', color: darkMode ? '#fff' : '#000' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p className="text-base font-semibold text-secondary" style={{ margin: 0 }}>
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
    <motion.section className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl">
      <motion.div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">What i have done so far</p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience: any, index: number) => {
            return <ExperienceCard key={index} experience={experience} />
          })}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}
