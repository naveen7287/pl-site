import React, {useState} from 'react'
export default function Contact(){
  const [status,setStatus] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    console.log('Contact:', data)
    setStatus('Message recorded locally. Configure Formspree or backend to receive emails.')
    e.target.reset()
  }
  return (
    <div id="contact" className="bg-white/5 p-6 rounded-lg">
      <h4 className="text-lg font-semibold mb-2">Contact</h4>
      <div className="text-sm text-slate-300 mb-3">plservices4you@gmail.com • 9618383481</div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" required className="w-full p-2 rounded bg-slate-800 border border-slate-700" placeholder="Your name"/>
        <input name="email" type="email" required className="w-full p-2 rounded bg-slate-800 border border-slate-700" placeholder="Email"/>
        <select name="service" required className="w-full p-2 rounded bg-slate-800 border border-slate-700">
          <option value="">Select service</option>
          <option>RCC Concrete Cutting</option>
          <option>Core Cutting</option>
          <option>Anchoring</option>
          <option>Waterproofing</option>
          <option>False Ceiling Works</option>
        </select>
        <textarea name="message" className="w-full p-2 rounded bg-slate-800 border border-slate-700" placeholder="Project details"></textarea>
        <button className="px-4 py-2 bg-orange-500 rounded text-black font-semibold">Send Message</button>
        <div className="text-sm text-slate-400">{status}</div>
      </form>
    </div>
  )
}
