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
import useMediaQuery from '@/hooks/useMediaQuery'

import Head from 'next/head'
import { useState, useRef, useEffect, useContext } from 'react'
import { ColorPalletes } from '../constants/colorTheme'
import OverViewBoxMobile from '@/components/OverviewBoxMobile'

export default function Home2() {
  const { darkMode } = useModeToggle()
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [isReverse, setIsReverse] = useState<boolean>(false)
  const [expand, setExpand] = useState<boolean>(false)
  const [sliderValue, setSliederValue] = useState<any>(1)
  const { theme, updateTheme } = useContext(ThemeContext)
  const pillsRef = useRef<Element[]>([])
  const boxesRef = useRef<Element[]>([])
  const bodyBackgroundRef = useRef<any>()

  useEffect(() => {
    const pills = document.querySelectorAll('.pill')
    const boxes = document.querySelectorAll('.box')
    if (pillsRef.current) {
      if (sliderValue === 1) {
        pillsRef.current = Array.from(pills)
        pillsRef.current.forEach((pill, i) => {
          return (
            ((pill as HTMLElement).style.backgroundColor = ColorPalletes.pillBgColor[i]),
            ((pill as HTMLElement).style.borderColor = '#1e1e1e'),
            ((pill as HTMLElement).style.borderRadius = '100px')
          )
        })
        boxesRef.current = Array.from(boxes)
        boxesRef.current.forEach((box, i) => {
          return ((box as HTMLElement).style.backgroundColor = '')
        })
        bodyBackgroundRef.current.style.backgroundColor = theme.bodyBackgroundColor.light
      }
      if (sliderValue > 1 && sliderValue <= 3) {
        pillsRef.current = Array.from(pills)
        pillsRef.current.forEach((pill, i) => {
          return (
            ((pill as HTMLElement).style.backgroundColor = ColorPalletes.pillBgColorTransition1[i]),
            ((pill as HTMLElement).style.borderColor = ColorPalletes.pillBorderColorTransition1[i]),
            ((pill as HTMLElement).style.borderRadius = '80px')
          )
        })
        boxesRef.current = Array.from(boxes)
        boxesRef.current.forEach((box, i) => {
          return ((box as HTMLElement).style.backgroundColor = ColorPalletes.boxBgTransition1[i])
        })
        bodyBackgroundRef.current.style.backgroundColor = ''
      }
      if (sliderValue >= 4 && sliderValue <= 6) {
        pillsRef.current = Array.from(pills)
        pillsRef.current.forEach((pill, i) => {
          return (
            ((pill as HTMLElement).style.backgroundColor = ColorPalletes.pillBgColorTransition2[i]),
            ((pill as HTMLElement).style.borderColor = ColorPalletes.pillBorderColorTransition2[i]),
            ((pill as HTMLElement).style.borderRadius = '60px')
          )
        })
        boxesRef.current = Array.from(boxes)
        boxesRef.current.forEach((box, i) => {
          return ((box as HTMLElement).style.backgroundColor = ColorPalletes.boxBgTransition2[i])
        })
        bodyBackgroundRef.current.style.backgroundColor = ''
      }
      if (sliderValue >= 7 && sliderValue < 9) {
        pillsRef.current = Array.from(pills)
        pillsRef.current.forEach((pill, i) => {
          return (
            ((pill as HTMLElement).style.backgroundColor = ColorPalletes.pillBgColorTransition3[i]),
            ((pill as HTMLElement).style.borderColor = ColorPalletes.pillBorderColorTransition3[i]),
            ((pill as HTMLElement).style.borderRadius = '40px')
          )
        })
        boxesRef.current = Array.from(boxes)
        boxesRef.current.forEach((box, i) => {
          return ((box as HTMLElement).style.backgroundColor = ColorPalletes.boxBgTransition3[i])
        })
        bodyBackgroundRef.current.style.backgroundColor = ''
      }
      if (sliderValue > 9) {
        pillsRef.current = Array.from(pills)
        pillsRef.current.forEach((pill, i) => {
          return (
            ((pill as HTMLElement).style.backgroundColor = '#eae0d7'),
            ((pill as HTMLElement).style.borderColor = ColorPalletes.pillBorderColorTransition4[i]),
            ((pill as HTMLElement).style.borderRadius = '20px')
          )
        })
        boxesRef.current = Array.from(boxes)
        boxesRef.current.forEach((box, i) => {
          return ((box as HTMLElement).style.backgroundColor = '')
        })
        bodyBackgroundRef.current.style.backgroundColor = theme.bodyBackgroundColor.dark
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
  ])

  return (
    <ThemeProvider>
      <main
        ref={bodyBackgroundRef}
        className="overflow-hidden"
        // style={{
        //   backgroundColor: darkMode ? `${theme.bodyBackgroundColor.dark}` : `${theme.bodyBackgroundColor.light}`,
        // }}
      >
        <Head>
          <title>Jing&apos;s portfolio</title>
        </Head>

        <SideBarWorkExperience showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className={`flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} items-stretch h-screen overflow-x-hidden`}>
          <div className="flex flex-col-reverse w-screen lg:flex-row">
            <ExperienceToggle setShowSideBar={setShowSideBar} showSideBar={showSideBar} pillsRef={pillsRef} />
            <div className="flex items-center lg:basis-9/12">
              <GreetingBox pillsRef={pillsRef} sliderValue={sliderValue} />
              <ProfileBox pillsRef={pillsRef} />
            </div>
          </div>

          <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-screen h-[80%] flex-1`}>
            {/* Second row left box */}
            {tabletScreen ? (
              <div className="flex flex-col basis-7/12">
                <div className="flex flex-row h-[20%]">
                  <SocialBox tabletScreen={tabletScreen} pillsRef={pillsRef} />
                  <TechStackBox pillsRef={pillsRef} />
                </div>
                <div className="flex flex-row h-[80%]">
                  <OverViewBox pillsRef={pillsRef} expand={expand} setExpand={setExpand} />
                  {!expand && <ProjectBox pillsRef={pillsRef} />}
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <SocialBox tabletScreen={tabletScreen} pillsRef={pillsRef} />
                <div className="flex">
                  <TechStackBox pillsRef={pillsRef} />
                  <ProjectBox pillsRef={pillsRef} />
                </div>
                <OverViewBoxMobile pillsRef={pillsRef} />
              </div>
            )}

            {/* Second row right box   */}
            <div className={`flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} items-center w-screen lg:basis-5/12`}>
              <div className="flex flex-col lg:flex-row h-[80%] w-full">
                <ContactBox pillsRef={pillsRef} />
                <SliderBox sliderValue={sliderValue} setSliederValue={setSliederValue} pillsRef={pillsRef} />
              </div>
              <div className="flex h-[20%] w-full justify-center lg:items-center">
                {tabletScreen && (
                  <RotateButtonBox isReverse={isReverse} setIsReverse={setIsReverse} pillsRef={pillsRef} />
                )}
                <ModeToggleBox pillsRef={pillsRef} />
              </div>
            </div>
          </div>
          <footer>
            <h1
              className={`pt-3 pr-3 text-xl font-bold text-right ${
                isReverse ? 'bg-gradient-to-b' : 'bg-gradient-to-t'
              } from-white to-transparent`}
            >
              Inspired by{' '}
              <a href="https://www.saaa.am" target="_blank">
                https://www.saaa.am
              </a>
            </h1>
          </footer>
        </div>
      </main>
    </ThemeProvider>
  )
}
