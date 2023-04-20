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

export default function Home() {
  const { darkMode } = useModeToggle()
  return (
    <main className={classNames('relative z-0', darkMode ? 'dark bgTransition' : 'light bgTransition')}>
      <Head>
        <title>Jing&apos;s portfolio</title>
      </Head>
      <div className="bg-center bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="experienceBg">
        <Experience />
      </div>
      <Tech />
      <Projects />

      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </main>
  )
}
