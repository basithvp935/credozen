"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Rocket } from "lucide-react";

export default function ElevatesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-slate-50 dark:bg-[#1c1c1f] transition-colors duration-300" id="tech-solution">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[400vw] h-full">
          
          {/* PANEL 1: ELEVATES */}
          <div className="w-[100vw] h-full flex items-center justify-center relative bg-slate-100 dark:bg-[#28282d] text-slate-900 dark:text-white overflow-hidden shrink-0 transition-colors duration-300">
            <div className="absolute right-10 top-10 font-mono text-sm tracking-widest text-slate-500 dark:text-white/50 bg-black/5 dark:bg-white/10 px-4 py-2">INDEX &rarr;</div>
            
            {/* Crown Icon */}
            <div className="absolute top-24 right-32 w-32 h-32 text-[#ea612a]">
              <Crown className="w-full h-full" strokeWidth={1.5} />
            </div>

            {/* Red circle detail */}
            <div className="absolute top-1/3 right-1/4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#ea612a]"></div>
              </div>
            </div>

            <h1 className="text-[16vw] font-black leading-none tracking-tighter text-slate-800 dark:text-[#f4f9f4]">
              ELEVATES
            </h1>
            
            <div className="absolute bottom-20 left-10 md:left-20 font-mono text-sm tracking-widest space-y-2 opacity-90">
              <p>// MULTI-DISCIPLINARY.</p>
              <p>// STUDENT-DRIVEN.</p>
              <p>// CHAOS & CODE.</p>
            </div>
            
            {/* Slanted Transition line */}
            <div className="absolute right-[-2vw] top-[-10vh] bottom-[-10vh] w-[4vw] bg-[#ea612a]/50 origin-top rotate-[5deg] z-10" style={{ clipPath: 'polygon(50% 0, 55% 0, 5% 100%, 0% 100%)' }}></div>
          </div>

          {/* PANEL 2: EXPLORE. EXPERIMENT. EXCEL. */}
          <div className="w-[100vw] h-full flex items-center justify-center relative bg-white dark:bg-[#f4f9f4] text-slate-800 dark:text-[#28282d] overflow-hidden shrink-0 transition-colors duration-300">
            {/* Left dark slanted slice */}
            <div className="absolute left-[-5vw] top-[-10vh] bottom-[-10vh] w-[15vw] bg-slate-100 dark:bg-[#28282d] origin-top rotate-[5deg] transition-colors duration-300"></div>

            {/* Rocket Icon */}
            <div className="absolute bottom-32 left-32 w-24 h-24 text-[#464655]">
              <Rocket className="w-full h-full" strokeWidth={1.5} />
            </div>

            {/* Blue circle detail */}
            <div className="absolute bottom-40 left-72 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#0ea5e9]"></div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center -ml-10">
              <h2 className="text-[9vw] font-black leading-[0.85] tracking-tight text-[#738375] uppercase italic origin-left -skew-x-[10deg]">
                EXPLORE.
              </h2>
              <h2 className="text-[9vw] font-black leading-[0.85] tracking-tight text-[#ea612a] uppercase italic origin-left -skew-x-[10deg] -ml-8">
                EXPERIMENT.
              </h2>
              <h2 className="text-[9vw] font-black leading-[0.85] tracking-tight text-[#2b2b35] uppercase italic origin-left -skew-x-[10deg] ml-16">
                EXCEL.
              </h2>
            </div>
          </div>

          {/* PANEL 3: HANDS-ON CHAOS */}
          <div className="w-[100vw] h-full flex items-center justify-center relative bg-slate-50 dark:bg-[#0a192f] overflow-hidden shrink-0 transition-colors duration-300">
            {/* Left light slanted slice */}
            <div className="absolute left-[-5vw] top-[-10vh] bottom-[-10vh] w-[12vw] bg-white dark:bg-[#f4f9f4] origin-top rotate-[5deg] z-10 transition-colors duration-300"></div>

            {/* Grid background */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
              style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
            </div>
            
            <div className="flex flex-col items-end w-full pr-20 lg:pr-32 z-10">
              <h2 className="text-[11vw] font-black leading-[0.85] tracking-tighter text-slate-800 dark:text-[#f4f9f4] uppercase">
                HANDS-ON
              </h2>
              <div className="relative">
                <h2 className="text-[13vw] font-black leading-[0.85] tracking-tighter text-[#ea612a] uppercase relative z-10">
                  CHAOS
                </h2>
                {/* Sine wave decoration */}
                <svg className="absolute -bottom-16 -right-16 w-[150%] h-48 text-[#ea612a] opacity-50 z-0 pointer-events-none" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <path d="M0,25 C20,0 30,50 50,25 C70,0 80,50 100,25 C120,0 130,50 150,25 C170,0 180,50 200,25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M0,35 C20,10 30,60 50,35 C70,10 80,60 100,35 C120,10 130,60 150,35 C170,10 180,60 200,35" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                {/* Circle point on wave */}
                <div className="absolute bottom-4 left-1/4 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center z-10">
                   <div className="w-2 h-2 rounded-full bg-[#8b2346]"></div>
                </div>
              </div>
              
              <div className="mt-16 text-right z-10 relative">
                <p className="font-mono text-slate-700 dark:text-[#f4f9f4] text-xl mb-1">
                  Bridging the gap between theory and reality.
                </p>
                <p className="font-mono text-slate-800 dark:text-[#f4f9f4] text-xl font-bold">
                  Our Goal: Getting Jobs <span className="font-normal text-slate-500 dark:text-white/80">or</span> Creating Entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          {/* PANEL 4: OPEN SOURCE & COLLABORATION */}
          <div className="w-[100vw] h-full flex items-center justify-center relative bg-slate-100 dark:bg-[#1c1c1f] text-slate-900 dark:text-white shrink-0 overflow-hidden transition-colors duration-300">
            {/* Orange separator line on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ea612a] z-10"></div>
            
            {/* Olive background slice mimicking the previous section continuing */}
            <div className="absolute left-1 top-0 bottom-0 w-32 bg-slate-50 dark:bg-[#0a192f] z-0 transition-colors duration-300">
               {/* Grid on the olive slice */}
               <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
                  style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
                </div>
            </div>
            
            {/* Orange detail circle */}
            <div className="absolute bottom-1/4 left-1/3 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#ea612a]"></div>
              </div>
            </div>

            <div className="flex flex-col items-center z-10 w-full max-w-5xl">
              <h2 className="text-[14vw] font-black leading-[0.8] tracking-tighter text-slate-800 dark:text-[#f4f9f4] uppercase text-center w-full">
                OPEN
              </h2>
              <h2 className="text-[14vw] font-black leading-[0.8] tracking-tighter text-slate-800 dark:text-[#f4f9f4] uppercase text-center w-full">
                SOURCE
              </h2>
              <h3 className="text-[4.5vw] font-bold leading-none tracking-tight text-[#ea612a] uppercase mt-6 text-center">
                & COLLABORATION
              </h3>
              <p className="text-[#ea612a] text-2xl mt-4 tracking-wider -rotate-2 ml-32" style={{ fontFamily: "cursive" }}>
                Cross-Department. Introvert Friendly.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
