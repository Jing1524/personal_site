import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import Navbar from '@/components/navBar/Navbar'
import Projects from '@/components/Projects'
import StarCanvas from '@/components/StarCanvas'
import Tech from '@/components/Tech'
import { useModeToggle } from '@/context/ModeProvider'
import classNames from 'classnames'
import Head from 'next/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export default function Home() {
  const { darkMode } = useModeToggle()
  return (
    <main
      className={classNames(
        'relative z-0 overflow-hidden w-[100vw]',
        darkMode
          ? 'dark bgTransition'
          : 'animate-bgGround bg-gradient-to-br from-[#8caab7] via-[#e2d4cd] to-[#f6f5f3] test bgTransition'
      )}
    >
      <Head>
        <title>Jing&apos;s portfolio</title>
      </Head>
      <div className="bg-center bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </div>
      <About />

      <Experience />

      <Tech />
      <Projects />

      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </main>
  )
}
