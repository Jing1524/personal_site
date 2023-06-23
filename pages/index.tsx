import ContactBox from '@/components/ContactBox'
import ExperienceToggle from '@/components/ExperienceBox/ExperienceToggle'
import SideBarWorkExperience from '@/components/ExperienceBox/SideBarWorkExperience'
import GreetingBox from '@/components/GreetingBox'
import ModeToggleBox from '@/components/ModeToggleBox'
import OverViewBox from '@/components/OverviewBox'
import ProfileBox from '@/components/ProfileBox'
import ProjectBox from '@/components/ProjectBox'
import RotateButtonBox from '@/components/RotateButtonBox'
import SliderBox from '@/components/SliderBox'
import SocialBox from '@/components/SocialBox'
import TechStackBox from '@/components/TechStack/TechStackBox'

import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext'
import { useMediaQuery, useMediaQueryWidth } from '@/hooks/useMediaQuery'

import Head from 'next/head'
import { useState, useRef, useContext, useEffect } from 'react'
import { ColorPalletes } from '../constants/colorTheme'

import { setColors } from '../utils/addTheme'
import { motion } from 'framer-motion'
import HiddenProjectBox from '@/components/HiddenProjectBox'

export default function Home() {
  const { darkMode } = useModeToggle()
  const tabletScreen = useMediaQueryWidth('(min-width:1024px)')

  const tabletView = useMediaQuery({ width: '1024px', height: '1366px' })

  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [isReverse, setIsReverse] = useState<boolean>(false)
  const [expand, setExpand] = useState<boolean>(false)
  const [sliderValue, setSliderValue] = useState<any>(1)
  const [projectSliderValue, setProjectSliderValue] = useState<any>(0)
  const [browser, setBrowser] = useState<string>('')
  const { theme, updateTheme } = useContext(ThemeContext)
  const pillsRef = useRef<Element[]>([])
  const boxesRef = useRef<Element[]>([])
  const bodyBackgroundRef = useRef<any>()
  const togglePillRef = useRef<any>()
  console.log({ sliderValue })
  const [hiddenProjectBoxWidth, setHiddenProjectBoxWidth] = useState(0)

  useEffect(() => {
    const pills = document.querySelectorAll('.pill')
    const boxes = document.querySelectorAll('.box')
    const pillBgColor = '#eae0d7'
    const pillBorderColor = '#1e1e1e'
    if (pillsRef.current && boxesRef.current && bodyBackgroundRef.current && theme) {
      if (sliderValue === 1) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          togglePillRef.current,
          darkMode ? theme.pillBackgroundColor.dark : theme.pillBackgroundColor.light,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : pillBorderColor, //border color
          '100px',
          null,
          darkMode ? theme.bodyBackgroundColor.dark : theme.bodyBackgroundColor.light,
          darkMode ? '#eae0d7' : '#1e1e1e'
        )
      }
      if (sliderValue > 1 && sliderValue <= 3) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          togglePillRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition1,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition1, //border color
          '80px',
          darkMode ? null : ColorPalletes.boxBgTransition1,
          darkMode ? theme.bodyBackgroundColor.dark : '',
          '#1e1e1e'
        )
      }
      if (sliderValue >= 4 && sliderValue <= 6) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          togglePillRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition2,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition2, //border color
          '60px',
          darkMode ? null : ColorPalletes.boxBgTransition2,
          darkMode ? theme.bodyBackgroundColor.dark : '',
          '#1e1e1e'
        )
      }
      if (sliderValue >= 7 && sliderValue < 9) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          togglePillRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition3,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition3, //border color
          '40px',
          darkMode ? null : ColorPalletes.boxBgTransition3,
          darkMode ? theme.bodyBackgroundColor.dark : '',
          '#1e1e1e'
        )
      }
      if (sliderValue > 9) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          togglePillRef.current,
          pillBgColor,
          ColorPalletes.pillBorderColorTransition4, //border color
          '20px',
          null,
          theme.bodyBackgroundColor.dark,
          '#eae0d7'
        )
      }
    }
  }, [
    theme.pillBackgroundColor.light,
    theme.bodyBackgroundColor.light,
    sliderValue,
    theme.pillBackgroundColor.dark,
    theme.bodyBackgroundColor.dark,
    expand,
    darkMode,
    theme,
  ])

  useEffect(() => {
    // Set the initial value on component mount
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--translate-x', `${projectSliderValue / 5}px`)
      document.documentElement.style.setProperty('--translate-y', `${-projectSliderValue * 1.5}px`)
      document.documentElement.style.setProperty('--another-translate-x', `${projectSliderValue / 1.1}px`)
    }
  }, [projectSliderValue])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent
      console.log(userAgent)
      // Check for browser information
      if (userAgent.includes('Chrome')) {
        setBrowser('Chrome')
      }
      // else if (userAgent.includes('Safari')) {
      //   setBrowser('Safari')
      // } else if (userAgent.includes('Firefox')) {
      //   // Firefox browser
      //   console.log('Firefox')
      // } else {
      //   // Other browser
      //   console.log('Other')
      // }
    }
  }, [])

  return (
    <ThemeProvider>
      <main ref={bodyBackgroundRef} className="w-screen overflow-hidden">
        <Head>
          <title>Jing&apos;s portfolio</title>
        </Head>

        <SideBarWorkExperience showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div
          className={`flex ${
            isReverse ? 'flex-col-reverse' : 'flex-col'
          } items-stretch h-screen overflow-x-hidden lg:overflow-y-hidden`}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-wrap items-center lg:flex-nowrap w-screen lg:flex-row lg:h-[20%]"
          >
            <ExperienceToggle setShowSideBar={setShowSideBar} showSideBar={showSideBar} tabletView={tabletView} />

            <GreetingBox sliderValue={sliderValue} />
            <ProfileBox />
          </motion.div>

          <div
            className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-screen lg:h-[80%] flex-1`}
          >
            {/* Second row left box */}

            <motion.div
              className={`flex flex-col ${browser === 'Chrome' ? 'min-w-[60vw]' : 'min-w-[50vw]'}  lg:basis-7/12`}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <div className={`flex flex-col w-full lg:flex-row lg:h-[20%]`}>
                <SocialBox />

                <TechStackBox />
              </div>

              <div className={`flex flex-col-reverse w-full flex-col lg:flex-row lg:h-[80%]`}>
                <OverViewBox expand={expand} setExpand={setExpand} />
                <ProjectBox
                  expand={expand}
                  projectSliderValue={projectSliderValue}
                  setProjectSliderValue={setProjectSliderValue}
                  sliderValue={sliderValue}
                />
              </div>
            </motion.div>

            {/* Second row right box   */}
            <motion.div
              className="flex h-full lg:basis-5/12"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <HiddenProjectBox
                projectSliderValue={projectSliderValue}
                hiddenProjectBoxWidth={hiddenProjectBoxWidth}
                setHiddenProjectBoxWidth={setHiddenProjectBoxWidth}
                isReverse={isReverse}
                sliderValue={sliderValue}
              />
              <motion.div
                className={`flex w-full ${isReverse ? 'flex-col-reverse' : 'flex-col'} hidden-project-wrapper`}
              >
                <div
                  className={`h-[80%] w-full flex flex-col xl:flex-row ${
                    isReverse ? 'translate-y-custom' : 'translate-x-custom'
                  }`}
                >
                  <ContactBox sliderValue={sliderValue} />
                  <SliderBox sliderValue={sliderValue} setSliderValue={setSliderValue} />
                </div>
                <div
                  className={`flex lg:h-[20%] w-full justify-center lg:items-center  ${
                    isReverse ? 'translate-y-custom' : 'translate-x-custom'
                  }`}
                >
                  {tabletScreen && <RotateButtonBox isReverse={isReverse} setIsReverse={setIsReverse} />}
                  <ModeToggleBox togglePillRef={togglePillRef} sliderValue={sliderValue} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
