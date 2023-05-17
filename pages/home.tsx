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
import useMediaQuery from '@/hooks/useMediaQuery'

import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { ColorPalletes } from '../constants/colorTheme'
import { LinearSRGBColorSpace } from 'three'
export default function Home2() {
  const { darkMode } = useModeToggle()
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [isReverse, setIsReverse] = useState<boolean>(false)
  const [sliderValue, setSliederValue] = useState<any>('1')
  const pillsRef = useRef<Element[]>([])

  let palletteIndex = 0

  ColorPalletes[palletteIndex]

  useEffect(() => {
    const pills = document.querySelectorAll('.pill')
    if (pillsRef.current) {
      pillsRef.current = Array.from(pills)
    }
    console.log(pillsRef.current)
  }, [])

  // allPills.forEach((pill, i) => (pill.style.backgroundColor = ColorPalletes[palletteIndex][i].fill))

  // const moveSlider = () => {
  //   const sliderInput = document.querySelector('#slider-input')
  //   const sliderValue = sliderInput.value
  //   if (sliderValue === 0) {
  //     //addTheme
  //   }
  //   if (sliderValue > 1 && sliderValue <= 3) {
  //     //add different theme
  //   }
  //   if (sliderValue >= 4 && sliderValue <= 6) {
  //     //add another Theme
  //   }
  //   if (sliderValue >= 7 && sliderValue < 9) {
  //     // add theme
  //   }
  //   if (sliderValue === 10) {
  //     //add final theme
  //   }
  // }

  // sliderInput.addEventListener('input', moveSlider)

  return (
    <main className={`${darkMode ? 'bg-[#606161]' : 'bg-[#fff]'}`}>
      <Head>
        <title>Jing&apos;s portfolio</title>
      </Head>

      <SideBarWorkExperience showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div
        className={`flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} items-stretch h-screen gap-4 overflow-x-hidden`}
      >
        <div className="flex flex-col-reverse w-screen lg:flex-row">
          <ExperienceToggle setShowSideBar={setShowSideBar} showSideBar={showSideBar} pillsRef={pillsRef} />
          <div className="flex items-center lg:basis-9/12">
            <GreetingBox pillsRef={pillsRef} />
            <ProfileBox pillsRef={pillsRef} />
          </div>
        </div>

        <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-screen h-[80%] gap-2`}>
          {/* Second row left box */}
          {tabletScreen ? (
            <div className="flex flex-col gap-4 basis-7/12">
              <div className="flex flex-row gap-4 px-[10px] h-[20%]">
                <SocialBox tabletScreen={tabletScreen} pillsRef={pillsRef} />
                <TechStackBox pillsRef={pillsRef} />
              </div>
              <div className="flex flex-row h-[80%]">
                <OverViewBox pillsRef={pillsRef} />
                <ProjectBox pillsRef={pillsRef} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <SocialBox tabletScreen={tabletScreen} pillsRef={pillsRef} />
              <div className="flex">
                <TechStackBox pillsRef={pillsRef} />
                <ProjectBox pillsRef={pillsRef} />
              </div>
              <OverViewBox pillsRef={pillsRef} />
            </div>
          )}

          {/* Second row right box   */}
          <div className={`flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} items-center gap-10 lg:basis-5/12`}>
            <div className="flex flex-col gap-4 lg:gap-1 lg:flex-row h-[80%] w-full">
              <ContactBox pillsRef={pillsRef} />
              <SliderBox sliderValue={sliderValue} setSliederValue={setSliederValue} pillsRef={pillsRef} />
            </div>
            <div className="flex h-[20%] w-full lg:items-center">
              <ModeToggleBox pillsRef={pillsRef} />
              {tabletScreen && (
                <RotateButtonBox isReverse={isReverse} setIsReverse={setIsReverse} pillsRef={pillsRef} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
