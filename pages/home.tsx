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
import { useState, useRef, useEffect, useContext, useLayoutEffect, MutableRefObject } from 'react'
import { ColorPalletes } from '../constants/colorTheme'
import OverViewBoxMobile from '@/components/OverviewBoxMobile'
import { setColors } from '../utils/addTheme'

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

  useLayoutEffect(() => {
    const pills = document.querySelectorAll('.pill')
    const boxes = document.querySelectorAll('.box')
    const pillBgColor = '#eae0d7'
    if (pillsRef.current && boxesRef.current && bodyBackgroundRef.current && theme) {
      if (sliderValue === 1) {
        const pillBorderColor = '#1e1e1e'
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          darkMode ? theme.pillBackgroundColor.dark : theme.pillBackgroundColor.light,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : pillBorderColor, //border color
          '100px',
          null,
          darkMode ? theme.bodyBackgroundColor.dark : theme.bodyBackgroundColor.light
        )
      }
      if (sliderValue > 1 && sliderValue <= 3) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition1,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition1, //border color
          '80px',
          darkMode ? null : ColorPalletes.boxBgTransition1,
          darkMode ? theme.bodyBackgroundColor.dark : ''
        )
      }
      if (sliderValue >= 4 && sliderValue <= 6) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition2,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition2, //border color
          '60px',
          darkMode ? null : ColorPalletes.boxBgTransition2,
          darkMode ? theme.bodyBackgroundColor.dark : ''
        )
      }
      if (sliderValue >= 7 && sliderValue < 9) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          darkMode ? pillBgColor : ColorPalletes.pillBgColorTransition3,
          darkMode ? ColorPalletes.pillBorderColorTransition4 : ColorPalletes.pillBorderColorTransition3, //border color
          '40px',
          darkMode ? null : ColorPalletes.boxBgTransition3,
          darkMode ? theme.bodyBackgroundColor.dark : ''
        )
      }
      if (sliderValue > 9) {
        setColors(
          pills,
          boxes,
          bodyBackgroundRef.current,
          pillBgColor,
          ColorPalletes.pillBorderColorTransition4, //border color
          '20px',
          null,
          '#1e1e1e'
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

  return (
    <ThemeProvider>
      <main ref={bodyBackgroundRef} className="overflow-hidden">
        <Head>
          <title>Jing&apos;s portfolio</title>
        </Head>

        <SideBarWorkExperience showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className={`flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} items-stretch h-screen overflow-x-hidden`}>
          <div className="flex flex-col-reverse w-screen lg:flex-row h-[20%]">
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
        </div>
      </main>
    </ThemeProvider>
  )
}
