import React from 'react'
export default function Hero(){
  return (
    <section className="hero-gradient rounded-2xl p-8 text-slate-100 shadow-xl">
      <div className="md:flex md:items-center md:justify-between gap-6">
        <div className="md:flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 text-sm text-slate-300 mb-4 bg-black/30">Concrete & Cutting Specialists</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">Innovating in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Precision Concrete Solutions</span></h2>
          <p className="text-slate-300 max-w-xl">PL Construction &amp; Engineering Services delivers expert RCC cutting, core cutting, anchoring, waterproofing and false ceiling works across Hyderabad and beyond. Safety and quality are our priorities.</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow">Start Your Project</a>
            <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-full border border-slate-700 text-slate-200">View Brochure</a>
          </div>
          <div className="mt-4 text-sm text-slate-400 flex gap-6">
            <div><div className="font-semibold text-slate-100">Mehdipatnam</div><div>Hyderabad, Telangana</div></div>
            <div><div className="font-semibold text-slate-100">Contact</div><div>+91 96183 83481</div></div>
          </div>
        </div>

        <div className="md:w-80 mt-6 md:mt-0">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700">
            <div className="h-40 bg-slate-700 rounded-md flex items-center justify-center text-slate-300">Intro Reel • Coming Soon</div>
            <h3 className="mt-4 text-lg font-semibold">Our Story in Concrete Mastery</h3>
            <p className="text-sm text-slate-300">From tight-access core cutting to large-scale structural modification, PL Construction combines precision equipment, trained teams and a safety-first mindset.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
