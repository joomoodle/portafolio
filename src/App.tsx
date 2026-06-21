import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { CursorGlow } from './components/ui/CursorGlow'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <ScrollProgress />
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
