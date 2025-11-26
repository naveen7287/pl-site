import React from 'react'
const projects = [
  {title: 'HIAIL Airport Project', desc: 'Diamond cutting works for L&T Constructions.'},
  {title: 'Phoenix Projects Collaboration', desc: 'Core cutting and waterproofing solutions.'},
  {title: 'Yashoda Hospitals Project', desc: 'Anchoring systems implemented for safety.'},
  {title: 'Movie Towers Development', desc: 'False ceiling works and precision finishes.'}
]
export default function Projects(){
  return (
    <section id="projects" className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Project Experience</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.title} className="p-4 rounded border-l-4 border-orange-500 bg-gradient-to-b from-white/3 to-white/2">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-300 mt-1">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
