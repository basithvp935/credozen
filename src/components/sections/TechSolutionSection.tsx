"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const features = [
  { 
    id: "tailored", 
    title: "Tailored solution", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations.",
    image: "/images/tech_tailored.png"
  },
  { 
    id: "cutting-edge", 
    title: "Cutting-edge technology", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations.",
    image: "/images/tech_cutting_edge.png"
  },
  { 
    id: "discovery", 
    title: "Discovery & Analysis", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations.",
    image: "/images/tech_discovery.png"
  },
  { 
    id: "deployment", 
    title: "Deployment & Support", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations.",
    image: "/images/tech_deployment.png"
  }
];

export default function TechSolutionSection() {
  const [activeFeature, setActiveFeature] = useState("cutting-edge");
  const [isOpened, setIsOpened] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" id="tech-solution">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 lg:mb-16">
          <div className="max-w-2xl relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#e8effd] text-blue-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-8"
            >
              Tech Solution
            </motion.div>
            

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight mb-8"
            >
              The Complete <span className="font-light text-slate-500">Platform</span> <span className="font-bold">To Power Your Operations</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed max-w-lg"
            >
              In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
            </motion.p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Accordion / Tabs */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2">
            {features.map((feature, idx) => {
              const isActive = activeFeature === feature.id;
              
              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`
                    cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden border border-transparent
                    ${isActive ? 'bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : 'hover:bg-gray-50'}
                  `}
                >
                  <div className={`p-6 md:p-8 flex items-start gap-4 ${isActive ? 'border-l-4 border-blue-600' : 'border-l-4 border-transparent'}`}>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-black mb-4' : 'text-slate-500'}`}>
                        {feature.title}
                      </h3>
                      
                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-slate-600 leading-relaxed text-base pr-4">
                              {feature.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Animated Laptop Graph (3D) */}
          <div className="w-full lg:w-[55%] relative flex justify-center items-center py-10 -mt-12 lg:-mt-20" style={{ perspective: "1500px" }}>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-[650px] relative z-20"
            >
              <div className="relative" style={{ perspective: "2000px" }}>
                <motion.div 
                  className="relative aspect-[16/10] z-20"
                  style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
                  initial={{ rotateX: -90 }}
                  whileInView={{ rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={() => {
                    setIsOpened(true);
                    setTimeout(() => setShowDashboard(true), 1500);
                  }}
                >
                  {/* Lid (Back Face) */}
                  <div 
                    className="absolute inset-0 rounded-t-2xl md:rounded-t-3xl border-x border-t border-slate-400 shadow-xl flex items-center justify-center overflow-hidden"
                    style={{ 
                      background: "linear-gradient(to bottom right, #e2e8f0, #94a3b8)", 
                      transform: "rotateX(180deg) translateZ(1px)", 
                      backfaceVisibility: "hidden" 
                    }}
                  >
                    {/* Apple-like metallic logo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-slate-300 to-white shadow-[inset_0_0_10px_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.1)] flex items-center justify-center opacity-80" />
                  </div>

                  {/* Screen (Front Face) */}
                  <div 
                    className="absolute inset-0 rounded-t-2xl md:rounded-t-3xl p-2 md:p-3 shadow-2xl flex flex-col border-x border-t border-[#333]"
                    style={{ 
                      background: "#000", // Black bezel
                      backfaceVisibility: "hidden" 
                    }}
                  >
                    {/* Camera Dot */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a1a1a] rounded-full border border-black/50 flex items-center justify-center">
                       <div className="w-0.5 h-0.5 bg-blue-900/50 rounded-full" />
                    </div>
                    
                    {/* Inner Screen Area */}
                    <div className="relative w-full h-full bg-[#0a0a0a] rounded-t-lg md:rounded-t-xl overflow-hidden flex flex-col mt-0.5 border border-[#222]">
                
                {/* Boot Sequence Overlay */}
                <AnimatePresence>
                  {isOpened && !showDashboard && (
                    <motion.div
                      key="boot-logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "backOut" }}
                        className="relative"
                      >
                        <Image src="/logo.png" alt="Logo" width={110} height={110} className="object-contain relative z-10" />
                        <motion.div 
                           className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"
                           animate={{ opacity: [0, 0.6, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="mt-8 w-32 h-1 bg-white/10 rounded-full overflow-hidden shadow-inner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div 
                          className="h-full bg-gradient-to-r from-gray-400 to-white"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Browser Bar */}
                <div className="h-5 md:h-7 w-full bg-[#1a1a1a] flex items-center px-3 md:px-4 gap-1.5 md:gap-2 border-b border-black/80">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
                
                {/* Screen Content - Animated Dashboard */}
                <div className="flex-1 bg-gradient-to-br from-[#0a0a0a] to-[#111622] p-4 md:p-6 relative flex flex-col z-10 overflow-hidden">
                  
                  {/* Glowing scanning line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-12 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent z-20 pointer-events-none"
                  />
                  <AnimatePresence mode="wait">
                    {showDashboard && (
                      <motion.div 
                        key={activeFeature}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col"
                      >
                      {/* Dashboard Header */}
                      <div className="flex justify-between items-start mb-4 md:mb-6">
                        <div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="text-white font-bold text-sm md:text-lg"
                          >
                            {features.find(f => f.id === activeFeature)?.title}
                          </motion.div>
                          <div className="text-gray-500 text-[10px] md:text-xs mt-1">Real-time Analytics Dashboard</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-[10px] text-blue-400 font-medium">Live</div>
                        </div>
                      </div>
                      
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                        {[
                          { label: "Efficiency", val: 98.5, suffix: "%", color: "text-green-400" },
                          { label: "Latency", val: 1.2, suffix: "ms", color: "text-blue-400" },
                          { label: "Uptime", val: 99.9, suffix: "%", color: "text-purple-400" }
                        ].map((stat, i) => {
                          const variance = (activeFeature.length % 5) * 0.1 * (i % 2 === 0 ? 1 : -1);
                          const finalVal = (stat.val + variance).toFixed(1);
                          return (
                            <div key={i} className="bg-white/5 rounded-lg p-2 md:p-3 border border-white/5 backdrop-blur-sm">
                              <div className="text-gray-500 text-[10px] md:text-xs mb-1">{stat.label}</div>
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + (i * 0.1) }}
                                className={`text-sm md:text-lg font-bold ${stat.color}`}
                              >
                                {finalVal}{stat.suffix}
                              </motion.div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Main Graph Area */}
                      <div className="flex-1 border-t border-dashed border-white/10 pt-4 relative">
                        <div className="absolute inset-0 pt-4 pb-0 z-10 w-full h-full flex gap-2 md:gap-3">
                          {/* Widget 1: Circular Progress */}
                          <div className="flex-1 bg-white/[0.03] rounded-lg border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                            <motion.div 
                               animate={{ rotate: 360 }} 
                               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                               className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-dashed border-blue-500/30 border-t-blue-400"
                            />
                            <motion.div 
                               animate={{ rotate: -360 }} 
                               transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                               className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] border-purple-500/30 border-b-purple-400"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.span 
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-white text-[10px] md:text-xs font-bold"
                              >
                                {activeFeature === 'tailored' ? '92%' : '87%'}
                              </motion.span>
                            </div>
                          </div>

                          {/* Widget 2: Bar Chart */}
                          <div className="flex-[1.5] bg-white/[0.03] rounded-lg border border-white/5 p-2 md:p-3 flex items-end justify-around gap-1 relative overflow-hidden">
                            <motion.div 
                               animate={{ top: ["-10%", "110%"] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                               className="absolute left-0 w-full h-4 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-20 pointer-events-none"
                            />
                            {[40, 70, 45, 90, 60, 85].map((h, i) => (
                              <motion.div
                                key={i}
                                className="w-full bg-gradient-to-t from-blue-600/40 to-cyan-400/80 rounded-t-sm relative"
                                animate={{ height: [`${h}%`, `${h * 0.5}%`, `${h}%`] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                              >
                                <div className="absolute top-0 w-full h-[2px] bg-cyan-300 shadow-[0_0_5px_rgba(103,232,249,0.8)]" />
                              </motion.div>
                            ))}
                          </div>

                          {/* Widget 3: Activity List */}
                          <div className="flex-1 bg-white/[0.03] rounded-lg border border-white/5 p-2 md:p-3 flex flex-col gap-1.5 md:gap-2 overflow-hidden justify-center">
                            {[1, 2, 3].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="w-full py-1.5 md:py-2 rounded bg-white/5 flex items-center px-2 gap-2 border border-white/5"
                                animate={{ x: [10, 0], opacity: [0, 1] }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                              >
                                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === 1 ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`} />
                                <div className="flex-1 h-1 md:h-1.5 bg-white/20 rounded overflow-hidden">
                                  <motion.div 
                                    className="h-full bg-white/40 rounded"
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 2 + i, repeat: Infinity }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Realistic screen glass glare/reflection */}
                  <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden rounded-t-lg md:rounded-t-xl">
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/10 via-white/5 to-transparent -translate-y-[40%] translate-x-[20%] rotate-12 mix-blend-overlay" />
                  </div>
                </div>
                  </div>
                 </div>
                </motion.div>

              {/* Laptop Base */}
              <div 
                className="relative w-[114%] -left-[7%] h-3 md:h-5 bg-gradient-to-b from-[#d1d5db] to-[#6b7280] rounded-b-[16px] md:rounded-b-[24px] border-t border-[#f3f4f6] flex justify-center items-start shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-10"
              >
                {/* Trackpad indentation (Opening lip) */}
                <div className="w-[15%] h-1 md:h-1.5 bg-[#9ca3af] rounded-b-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)] mt-0" />
                
                {/* Subtle base reflection/highlight */}
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <div className="absolute bottom-0 w-full h-[1px] bg-black/20" />
              </div>
              
              {/* Floating accent shapes behind laptop */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-12 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl -z-10" 
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -left-12 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10" 
              />
              
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
