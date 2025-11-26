import React from 'react'

export default function VideoPlayers(){
  const videos = ['/videos/42926-434300944.mp4','/videos/6473952-uhd_3840_2160_25fps.mp4']

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-100">Project Videos</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((v,i) => (
          <div key={v} className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <video src={v} controls preload="metadata" className="w-full rounded-md" />
            <div className="mt-2 text-sm text-slate-300">Video {i+1}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
