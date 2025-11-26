import React from 'react'
const clients = ['L&T','MEIL','Yashoda Hospitals','Pooja Homes','Consolidated Construction','NCC Urban','Phoenix','Movie Towers','Vamsiram Builders','My Home Group','Janapriya','Continental Hospitals']
export default function Clients(){
  return (
    <section id="clients" className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Our Top Clients</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {clients.map(c => <div key={c} className="p-3 rounded-full bg-slate-800 text-sm text-slate-300 flex items-center justify-center">{c}</div>)}
      </div>
    </section>
  )
}
