import React from "react";

export default function VideoPlayers() {
  return (
    <section
      id="videos"
      className="bg-white/5 p-6 rounded-lg mt-4 border border-slate-800"
    >
      <h3 className="text-lg font-semibold mb-2 text-slate-100">
        On-site Cutting &amp; Construction Work
      </h3>
      <p className="text-sm text-slate-300 mb-4">
        Real project footage from PL Construction &amp; Engineering Services —
        precision cutting, controlled demolition, and safe RCC/core cutting
        operations.
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        {/* New Compressed Video 1 */}
        <div className="bg-slate-900/70 rounded-xl border border-slate-800 p-3">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              src="/videos/cuttingvideo1.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
          <div className="mt-3 text-sm text-slate-200 font-medium">
            RCC Cutting – On-site Work
          </div>
          <div className="text-xs text-slate-400">
            Real footage showing RCC cutting with safety measures.
          </div>
        </div>

        {/* New Compressed Video 2 */}
        <div className="bg-slate-900/70 rounded-xl border border-slate-800 p-3">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              src="/videos/cuttingvideo2.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
          <div className="mt-3 text-sm text-slate-200 font-medium">
            Concrete Slab Cutting – Precision Work
          </div>
          <div className="text-xs text-slate-400">
            Smooth slab cutting operations on a running construction site.
          </div>
        </div>

        {/* Old Video 1 */}
        <div className="bg-slate-900/70 rounded-xl border border-slate-800 p-3">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              src="/videos/42926-434300944.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
          <div className="mt-3 text-sm text-slate-200 font-medium">
            Concrete Cutting • Live Site Work
          </div>
          <div className="text-xs text-slate-400">
            Demonstration of precision RCC cutting with safety precautions.
          </div>
        </div>

        {/* Old Video 2 */}
        <div className="bg-slate-900/70 rounded-xl border border-slate-800 p-3">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              src="/videos/6473952-uhd_3840_2160_25fps.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
          <div className="mt-3 text-sm text-slate-200 font-medium">
            Core Cutting &amp; Finishing
          </div>
          <div className="text-xs text-slate-400">
            Core cutting operations for openings and service provisions.
          </div>
        </div>

      </div>
    </section>
  );
}
