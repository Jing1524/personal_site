import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import Navbar from '@/components/navBar/Navbar'
import Projects from '@/components/Projects'
import StarCanvas from '@/components/StarCanvas'
import Tech from '@/components/Tech'

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </main>
  )
}
