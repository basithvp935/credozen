"use client";

import { motion } from "framer-motion";
import { 
  Aperture, Triangle, Layers, Hexagon, Infinity, Flame, 
  Activity, Target, Wind, Fingerprint, Circle, Zap 
} from "lucide-react";

// Professional dummy logos with icons
const row1 = [
  { name: "Lumina", icon: Aperture },
  { name: "Vertex", icon: Triangle },
  { name: "Strata", icon: Layers },
  { name: "Nexus", icon: Hexagon },
  { name: "Quantum", icon: Infinity },
  { name: "Forge", icon: Flame },
];

const row2 = [
  { name: "Pulse", icon: Activity },
  { name: "Echo", icon: Target },
  { name: "Zephyr", icon: Wind },
  { name: "Aegis", icon: Fingerprint },
  { name: "Orbit", icon: Circle },
  { name: "Nova", icon: Zap },
];

export default function ClientsLogoSection() {
  return (
    <section className="py-24 overflow-hidden bg-[#050505] border-y border-white/5 relative" id="clients">
      
      {/* Pure CSS Animation Styles */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#f47721]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#f47721] mb-3">
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight capitalize">
            Our <span className="text-[#f47721]">Clients</span>
          </h2>
          <p className="text-gray-400 text-[16px] max-w-xl mx-auto font-medium">
            We've partnered with forward-thinking brands across the globe to build digital excellence.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-8 overflow-x-hidden max-w-[100vw]">
        {/* Gradient Masks for fading edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track 1 (Moving Left) */}
        <div className="flex whitespace-nowrap w-max items-center animate-marquee-left hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 mx-10 md:mx-16 transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105 cursor-pointer group"
            >
              <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#f47721] transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee Track 2 (Moving Right) */}
        <div className="flex whitespace-nowrap w-max items-center animate-marquee-right hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 mx-10 md:mx-16 transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105 cursor-pointer group"
            >
              <logo.icon className="w-7 h-7 md:w-9 md:h-9 text-white group-hover:text-[#f47721] transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
