import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { Hero } from './components/sections/Hero'
import { Process, Faq } from './components/sections/Faq'
import { TaglineReveal } from './components/sections/TaglineReveal'
import { ScrollWorld } from './components/sections/ScrollWorld'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Services } from './components/sections/Services'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <ScrollWorld />
        <About />
        <Projects />
        <TaglineReveal />
        <Experience />
        <Skills />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
