import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { experiences } from '../../constants'
import 'react-vertical-timeline-component/style.min.css'
import { useModeToggle } from '@/context/ModeProvider'
import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import Link from 'next/link'

const ExperienceCard = ({ experience, darkMode }: any) => {
  // const tabletScreen = useMediaQuery('(min-width:1024px)')

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
        // marginLeft: `${tabletScreen ? '-20px' : ''}`,
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
  const router = useRouter()
  return (
    <motion.section
      id="experience"
      className={` ${showSideBar ? 'block' : 'hidden'} h-[100%] lg:w-[70%] fixed z-[100] top-[0] left-0 ${
        darkMode ? 'bg-[#1e1e1e]/90' : 'bg-[#fff]/90'
      } transition flex flex-col p-4`}
    >
      <div className="flex self-end">
        <Link
          className={`z-50 mr-8 py-2 px-10 border border-4 rounded-full max-w-[200px] font-bold bg-[#eae0d7] text-[#1e1e1e] border-[#1e1e1e]
        `}
          href="https://drive.google.com/file/d/1KJBMyx_JdEsZsA3UBzDdZEV0RtN9NDqq/view?usp=sharing"
          target="_blank"
        >
          Full Resume
        </Link>
        <button onClick={() => setShowSideBar(!showSideBar)} className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke={`${darkMode ? '#fff' : '#1e1e1e'}`}
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="h-[100%] overflow-scroll">
        <VerticalTimeline lineColor={darkMode ? '#eae0d7' : '#1e1e1e'} className="test">
          {experiences.map((experience: any, index: number) => {
            return <ExperienceCard key={index} experience={experience} darkMode={darkMode} />
          })}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}
