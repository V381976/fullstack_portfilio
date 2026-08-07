import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import PageAtmosphere from '@/components/atmosphere/PageAtmosphere'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <PageAtmosphere />
      <div className="relative z-10 w-full max-w-[100vw]">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
