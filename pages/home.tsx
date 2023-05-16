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
import Matterjs from '@/components/matterjs'

import { useModeToggle } from '@/context/ModeProvider'
import useMediaQuery from '@/hooks/useMediaQuery'

import Head from 'next/head'

export default function Home2() {
  const { darkMode } = useModeToggle()
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  return (
    <main className={`${darkMode ? 'bg-[#606161]' : 'bg-[#fff]'}`}>
      <Head>
        <title>Jing&apos;s portfolio</title>
      </Head>
      <SideBarWorkExperience />

      <div className="flex flex-col items-stretch h-screen gap-4 overflow-x-hidden">
        <div className="flex flex-col-reverse w-screen lg:flex-row">
          <ExperienceToggle />
          <div className="flex items-center lg:basis-10/12">
            <GreetingBox />
            <ProfileBox />
          </div>
        </div>
        {/* <Matterjs /> */}

        <div className="flex flex-col lg:flex-row w-screen h-[80%] gap-6">
          {/* Second row left box */}
          {tabletScreen ? (
            <div className="flex flex-col gap-4 basis-7/12">
              <div className="flex flex-row gap-4 px-[10px] h-[20%]">
                <SocialBox tabletScreen={tabletScreen} />
                <TechStackBox />
              </div>
              <div className="flex flex-row h-[80%]">
                <OverViewBox />
                <ProjectBox />
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <SocialBox />
              <div className="flex">
                <TechStackBox />
                <ProjectBox />
              </div>
              <OverViewBox />
            </div>
          )}

          {/* Second row right box   */}
          <div className="flex flex-col items-center gap-10 lg:basis-5/12">
            <div className="flex flex-col lg:flex-row h-[80%] w-full">
              <ContactBox />
              <SliderBox />
            </div>
            <div className="flex h-[20%] w-full lg:items-center">
              <ModeToggleBox />
              {tabletScreen && <RotateButtonBox />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
