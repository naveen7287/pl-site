import React from 'react'
const services = [
  {title: 'RCC Concrete Cutting', desc: 'Precise removal and cutting of reinforced concrete.'},
  {title: 'Core Cutting', desc: 'Diamond core drilling for penetrations and service openings.'},
  {title: 'Anchoring', desc: 'Chemical and mechanical anchoring systems for structural stability.'},
  {title: 'Waterproofing', desc: 'Durable waterproofing to protect structures from moisture.'},
  {title: 'False Ceiling Works', desc: 'Professional false ceiling installation and finishes.'},
  {title: 'Wall Saw & Diamond Wire Saw', desc: 'Vertical wall sawing and diamond wire cutting for heavy structures.'}
]
export default function Services(){
  return (
    <section id="services" className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Our Specialized Services</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map(s => (
          <div key={s.title} className="p-4 rounded-lg border border-slate-700 bg-gradient-to-br from-white/3 to-white/2">
            <div className="text-orange-400 font-semibold mb-1">{s.title}</div>
            <div className="text-sm text-slate-300">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
