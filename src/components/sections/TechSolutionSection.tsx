"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const features = [
  { 
    id: "tailored", 
    title: "Tailored solution", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations." 
  },
  { 
    id: "cutting-edge", 
    title: "Cutting-edge technology", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations." 
  },
  { 
    id: "discovery", 
    title: "Discovery & Analysis", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations." 
  },
  { 
    id: "deployment", 
    title: "Deployment & Support", 
    desc: "Leveraging the latest in technology to deliver smarter, faster solutions. Stay ahead of the curve with future-ready digital innovations." 
  }
];

export default function TechSolutionSection() {
  const [activeFeature, setActiveFeature] = useState("cutting-edge");

  return (
    <section className="py-24 bg-[#090b10] relative overflow-hidden" id="tech-solution">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-white/10 text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-8 border border-white/10"
            >
              Tech Solution
            </motion.div>
            
            {/* Small circular icon top right of text */}
            <div className="absolute top-1/2 -right-8 md:-right-16 w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center pointer-events-none hidden md:flex">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-8"
            >
              The Complete <span className="font-light text-gray-300">Platform</span> <span className="font-bold">To Power Your Operations</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
            </motion.p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Accordion / Tabs */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2">
            {features.map((feature, idx) => {
              const isActive = activeFeature === feature.id;
              
              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`
                    cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden
                    ${isActive ? 'bg-[#141414] border border-white/10 shadow-xl' : 'hover:bg-white/5'}
                  `}
                >
                  <div className={`p-6 md:p-8 flex items-start gap-4 ${isActive ? 'border-l-4 border-blue-600' : 'border-l-4 border-transparent'}`}>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-white mb-4' : 'text-gray-400'}`}>
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
                            <p className="text-gray-400 leading-relaxed text-base pr-4">
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

          {/* Right: Image and Widgets */}
          <div className="w-full lg:w-[55%] relative">
            
            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[40px] overflow-hidden aspect-[4/3] w-full shadow-2xl border-8 border-[#141414]"
            >
              <Image 
                src="/images/team_working_office.png" 
                alt="Team working on tech solution" 
                fill 
                className="object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute right-8 bottom-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <Play fill="currentColor" size={24} className="ml-1" />
              </div>
            </motion.div>

            {/* Floating Widget 1: Usability Testing */}
            <motion.div 
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -left-12 bottom-20 bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl z-20 w-72 border border-white/10 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Usability testing</div>
                  <div className="text-gray-400 text-xs">12 products</div>
                </div>
              </div>

              <div className="flex justify-between text-xs mb-4">
                <div>
                  <div className="text-gray-400 mb-1">Rate</div>
                  <div className="font-bold flex items-center gap-1 text-yellow-500">
                    ★ <span className="text-white">4.9</span>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1 text-right">Type</div>
                  <div className="font-bold text-white">UI/UX design</div>
                </div>
              </div>

              {/* Bar chart visual */}
              <div className="flex items-end justify-between h-16 gap-1.5 mt-2">
                {[30, 45, 60, 40, 80, 50, 40, 65, 45, 30, 60].map((h, i) => (
                  <div key={i} className={`w-full rounded-t-sm ${i === 4 ? 'bg-blue-600' : 'bg-gray-700'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </motion.div>

            {/* Floating Widget 2: Pie Chart */}
            <motion.div 
              initial={{ opacity: 0, y: -20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-8 top-1/4 bg-[#1a1a1a] rounded-2xl p-5 shadow-2xl z-20 w-48 border border-white/10 hidden md:block"
            >
              <div className="text-xs font-bold text-white mb-4">Your Pie Chart</div>
              
              <div className="flex justify-center mb-4">
                {/* CSS Pie chart approximation */}
                <div className="w-24 h-24 rounded-full bg-gray-800 relative overflow-hidden" style={{ background: 'conic-gradient(#2563eb 0% 63%, #60a5fa 63% 80%, #334155 80% 100%)' }}>
                  <div className="absolute inset-0 m-auto w-10 h-10 bg-[#1a1a1a] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="text-xs font-bold text-white flex-1">Your data</div>
                <div className="text-xs font-bold">63%</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
