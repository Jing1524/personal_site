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

export default function Home() {
  const { darkMode } = useModeToggle()
  return (
    <main className={classNames('relative z-0', darkMode ? 'dark bgTransition' : 'light bgTransition')}>
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
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
