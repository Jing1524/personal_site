import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { experiences } from '../../constants'
import 'react-vertical-timeline-component/style.min.css'
import { useModeToggle } from '@/context/ModeProvider'
import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

const ExperienceCard = ({ experience, darkMode }: any) => {
  const tabletScreen = useMediaQuery('(min-width:1024px)')

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode ? '#eae0d7' : '#add4bd',
        color: darkMode ? '#1e1e1e' : '#000',
        borderRadius: '16px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginRight: '10px',
      }}
      contentArrowStyle={{ borderRight: darkMode ? '7px solid #eae0d7' : '7px solid #add4bd' }}
      date={experience.date}
      dateClassName={`elementDate ${darkMode ? 'text-[#eae0d7]' : 'text-[#1e1e1e]'}`}
      iconStyle={{
        background: experience.iconBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        marginLeft: `${tabletScreen ? '-20px' : ''}`,
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[50%] h-[50%] object-contain" />
        </div>
      }
    >
      <div>
        <h3
          className={`text-[2.5vw] sm:text-[2vw] lg:text-[18px] font-bold ${
            darkMode ? 'text-[##eae0d7]' : 'text-[#1e1e1e]'
          }`}
        >
          {experience.title}
        </h3>
        <p
          className={`text-[2.5vw] sm:text-[2vw] lg:text-[16px] font-semibold ${
            darkMode ? 'text-[##eae0d7]' : 'text-[#1e1e1e]'
          }`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-1 ml-1 space-y-2 list-disc">
        {experience.points.map((point: any, index: any) => {
          return (
            <li
              key={`experience-point-${index}`}
              className={`text-[2.5vw] sm:text-[2vw] lg:text-[1vw] xl:text-[14px] pl-1 tracking-wider font-semibold text-[#1e1e1e]
              `}
            >
              {point}
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}

export default function SideBarWorkExperience({ showSideBar, setShowSideBar }: any) {
  const [isInView, setIsInView] = useState(false)
  const { darkMode } = useModeToggle()
  return (
    <motion.section
      id="experience"
      className={` ${showSideBar ? 'block' : 'hidden'} h-[100%] lg:w-[70%] fixed z-[100] top-[0] left-0 ${
        darkMode ? 'bg-[#1e1e1e]/90' : 'bg-[#fff]/90'
      } overflow-hidden transition flex flex-col p-4`}
    >
      <button
        className={`mr-10 py-2 px-10 border border-4 rounded-full max-w-[200px] self-end font-bold bg-[#eae0d7] text-[#1e1e1e] border-[#d73832]
        `}
        onClick={() => console.log('resume')}
      >
        Full Resume
      </button>
      <div className="flex flex-col justify-center h-full ">
        <VerticalTimeline lineColor={darkMode ? '#eae0d7' : '#1e1e1e'}>
          {experiences.map((experience: any, index: number) => {
            return <ExperienceCard key={index} experience={experience} darkMode={darkMode} />
          })}
        </VerticalTimeline>
      </div>
      <button
        className={`mr-10 py-2 px-10 border border-4 rounded-full max-w-[200px] self-end font-bold ${
          darkMode ? 'bg-[#eae0d7] text-[#1e1e1e] border-[#add4bd]' : 'bg-[#add4bd] text-[#1e1e1e] border-[#1e1e1e]'
        }`}
        onClick={() => setShowSideBar(!showSideBar)}
      >
        Exit
      </button>
    </motion.section>
  )
}
