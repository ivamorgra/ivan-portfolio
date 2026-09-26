import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import SectionTimeline from './components/SectionTimeline'
import HowIApproachThings from './components/HowIThink'
import Experience from './components/Experience'

import { LanguageProvider } from './i18n/LanguageContext'


function App(){
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
        <Navbar />
        <SectionTimeline />
        <Hero />
        <WhoIAm />
        <HowIApproachThings />
        <Experience />
      </main>
    </LanguageProvider>
  )
}

export default App