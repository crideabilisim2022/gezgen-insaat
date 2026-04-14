'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/loading'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Mission from '@/components/mission'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Mission />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
