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

import Head from 'next/head'

export default function Home2() {
  const { darkMode } = useModeToggle()
  return (
    <main>
      <Head>
        <title>Jing&apos;s portfolio</title>
      </Head>
      <SideBarWorkExperience />
      <div className="flex flex-wrap items-stretch h-screen overflow-hidden">
        <div className="flex w-screen h-[20%] lg:flex-row">
          <ExperienceToggle />
          <GreetingBox />
          <ProfileBox />
        </div>

        <div className="flex flex-col lg:flex-row w-screen h-[80%] gap-6">
          {/* Second row left box */}
          <div className="flex flex-col basis-7/12">
            <div className="flex h-[20%]">
              <SocialBox />
              <TechStackBox />
            </div>
            <div className="flex h-[80%]">
              <OverViewBox />

              <ProjectBox />
            </div>
          </div>
          {/* Second row right box */}
          <div className="flex flex-col basis-5/12">
            <div className="flex h-[80%]">
              <ContactBox />
              <SliderBox />
            </div>
            <div className="flex h-[20%]">
              <ModeToggleBox />
              <RotateButtonBox />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
