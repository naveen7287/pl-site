import React, { useState, useEffect } from 'react'

export default function ImageCarousel({ images = ['/images/maxresdefault.jpg','/images/maxresdefault (1).jpg','/images/2-Workers-on-Construction-Site-Top-Floor.png'], autoPlay = true, interval = 4000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [images.length, autoPlay, interval])

  function go(i){ setIndex(i) }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <img src={images[index]} alt={`slide-${index}`} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" loading="lazy" />
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/60" aria-label="Previous slide">‹</button>
        <button onClick={() => setIndex(() => (index + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/60" aria-label="Next slide">›</button>
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {images.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} className={`w-3 h-3 rounded-full ${i === index ? 'bg-orange-400' : 'bg-slate-500'}`} />
        ))}
      </div>
    </div>
  )
}
