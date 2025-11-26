import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import ImageCarousel from './components/ImageCarousel'
import VideoPlayers from './components/VideoPlayers'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold">PL</div>
          <div>
            <h1 className="text-xl font-semibold">PL Construction &amp; Engineering Services</h1>
            <p className="text-sm text-slate-300">Precision Cutting. Safe Execution.</p>
          </div>
          <nav className="ml-auto flex gap-4">
            <a href="#about" className="text-sm text-slate-300 hover:underline">About</a>
            <a href="#services" className="text-sm text-slate-300 hover:underline">Services</a>
            <a href="#projects" className="text-sm text-slate-300 hover:underline">Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:underline">Contact</a>
          </nav>
        </header>

        <Hero />
        <main className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <section id="about" className="bg-white/5 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm text-slate-300">PL Construction &amp; Engineering Services specializes in precision cutting. We prioritize safety in every aspect of our operations and maintain a skilled, professional workforce dedicated to excellence.</p>
            </section>

            <Services />
            <Projects />

            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Gallery / Recent Site Work</h3>
              <ImageCarousel />
            </section>

            <VideoPlayers />

            <Clients />
          </div>

          <aside className="space-y-6">
            <Contact />
            <div className="bg-white/5 p-4 rounded-lg text-sm">
              <div className="font-semibold mb-1">Office</div>
              <div className="text-slate-300">Mehdipatnam, Hyderabad</div>
              <div className="mt-2 text-xs text-slate-400">GST: 36BXCPP4415Q1ZZ</div>
              <a className="block mt-3 text-sm text-orange-400" href="/brochure.pdf" target="_blank" rel="noreferrer">Download Brochure (PDF)</a>
            </div>
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  )
}
