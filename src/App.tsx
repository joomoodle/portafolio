import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { Hero } from './components/sections/Hero'
import { ScrollWorld } from './components/sections/ScrollWorld'
import { TaglineReveal } from './components/sections/TaglineReveal'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Services } from './components/sections/Services'
import { Process, Faq } from './components/sections/Faq'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <Services />
        <ScrollWorld />
        <Projects />
        <TaglineReveal />
        <Process />
        <Experience />
        <About />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
