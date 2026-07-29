"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WorksSection from "@/components/sections/WorksSection";

export default function WorksPage() {
  return (
    <main className="bg-[#090514] min-h-screen text-white selection:bg-[#f58619] selection:text-white">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[42vh] min-h-[340px] flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#130b1c]">
        {/* Darker Purple/Magenta/Orange Glassy Background Gradients */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.22),_rgba(195,84,15,0.14),_transparent_70%)] blur-[140px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#5b3181]/25 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-[#932574]/20 blur-[160px] rounded-full pointer-events-none" />

        {/* Cyber Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg"
          >
            Our Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
            >
              Works
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-2 h-2 rounded-full bg-[#f58619]"></span>
            <span className="text-[#f58619] font-semibold drop-shadow-md">Our Works</span>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Works Content Section
      ────────────────────────────────────────────── */}
      <WorksSection />
      
    </main>
  );
}
