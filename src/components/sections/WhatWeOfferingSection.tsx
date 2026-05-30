"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhatWeOfferingSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#eef3fb] text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-6"
            >
              What We Offering
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              Provides Full-Cycle Custom IT<br className="hidden md:block" />Development Services.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-gray-500 text-base md:text-lg leading-relaxed"
          >
            <p>In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.</p>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="bg-[#f7f7f9] rounded-3xl p-8 relative overflow-hidden h-[380px] group cursor-pointer"
            >
              <div className="relative z-10">
                <div className="text-[#ff1a75] font-bold text-sm mb-4">Excellent Performance</div>
                <h3 className="text-3xl font-bold leading-tight mb-8 text-gray-900">ITManagement<br/>Service</h3>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Pink Gradient Background shape */}
              <div className="absolute bottom-0 left-0 w-full h-[60%] z-0 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,80 L20,80 L40,60 L60,60 L80,30 L100,30" fill="none" stroke="#ff80b3" strokeWidth="0.5" />
                  <path d="M0,100 L0,80 L20,80 L40,60 L60,60 L80,30 L100,30 L100,100 Z" fill="url(#pink-grad)" />
                  <defs>
                    <linearGradient id="pink-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffb3d9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ffb3d9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#fff0f5] rounded-3xl p-8 h-[250px] relative overflow-hidden group cursor-pointer"
            >
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <h3 className="text-2xl font-bold leading-tight text-gray-900">Cloud<br/>Computing</h3>
                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-pink-500 shadow-sm group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6">
            {/* Floating icon */}
            <div className="hidden lg:flex justify-center -mb-3 relative z-20">
               <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                 <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
               </div>
            </div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#eef3fb] rounded-3xl p-8 h-[654px] relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-[34px] font-bold leading-[1.1] mb-8 text-gray-900">Website<br/>Design &<br/>Development</h3>
                <div className="w-12 h-12 bg-[#c0397d] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>

              {/* Illustration placeholders */}
              <div className="absolute bottom-8 right-8 flex flex-col items-end pointer-events-none">
                <div className="w-40 h-28 bg-blue-600 rounded-xl shadow-lg border-4 border-gray-900 flex flex-col overflow-hidden transform rotate-[-6deg] translate-x-4 translate-y-8 z-0">
                  <div className="h-4 bg-gray-900 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center text-white text-4xl font-bold italic">V</div>
                </div>
                <div className="w-48 h-36 bg-white rounded-xl shadow-2xl border-4 border-gray-900 flex flex-col overflow-hidden relative z-10">
                  <div className="h-4 bg-gray-900 flex items-center px-2 gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white p-4">
                    <div className="w-8 h-8 rounded-full bg-[#fbbc05] mb-3"></div>
                    <div className="w-full h-2 bg-gray-100 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#f7f7f9] rounded-3xl p-8 relative overflow-hidden h-[340px] group cursor-pointer"
            >
              <div className="relative z-20">
                <h3 className="text-3xl font-bold leading-tight mb-8 text-gray-900">CRM Software<br/>Solution</h3>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Fake dashboard UI */}
              <div className="absolute -right-6 -bottom-10 w-[95%] h-[75%] bg-white rounded-tl-2xl shadow-xl border border-gray-100 p-5 transform rotate-[-4deg] pointer-events-none z-10 transition-transform duration-500 group-hover:rotate-0">
                
                {/* Header row in dashboard */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-[10px] text-gray-400 font-medium mb-1">Daily Traffic</div>
                        <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            2.579 <span className="text-[10px] text-green-500 font-semibold bg-green-50 px-1.5 py-0.5 rounded">+34%</span>
                        </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-[6px] border-gray-100 border-t-blue-500 border-r-blue-500"></div>
                </div>

                {/* Bar chart */}
                <div className="flex items-end justify-between h-20 gap-1.5 px-2 mt-6">
                  {[40, 70, 30, 80, 50, 90, 60, 45].map((h, i) => (
                    <div key={i} className="w-full bg-blue-500/80 rounded-t-sm transition-all duration-700 hover:bg-blue-600" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-[#e6fbf0] rounded-3xl p-8 h-[290px] relative overflow-hidden group cursor-pointer"
            >
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold leading-tight mb-8 text-gray-900">WowCommerce</h3>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
                {/* Decorative shape */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-green-200/50 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
