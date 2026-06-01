"use client";

import { motion } from "framer-motion";
import { Brain, FileSearch, PenTool, Code, FileCheck, Code2, LineChart, Megaphone } from "lucide-react";

const steps = [
  { id: "01", label: "Brainstorming",         Icon: Brain,      color: "bg-[#d8358d]" },
  { id: "02", label: "UX\nResearch",          Icon: FileSearch, color: "bg-[#2c3365]" },
  { id: "03", label: "Product\nDesigning",    Icon: PenTool,    color: "bg-[#f6891f]" },
  { id: "04", label: "Front-End\nDevelopment",Icon: Code,       color: "bg-[#2c3365]" },
  { id: "05", label: "Usability\nTesting",    Icon: FileCheck,  color: "bg-[#f6891f]" },
  { id: "06", label: "Back-End\nDevelopment", Icon: Code2,      color: "bg-[#7954a1]" },
  { id: "07", label: "SEO\nOptimization",     Icon: LineChart,  color: "bg-[#d8358d]" },
  { id: "08", label: "Digital\nMarketing",    Icon: Megaphone,  color: "bg-[#1c8ca1]" },
];

export default function WorkingRoadmapSection() {
  return (
    <section className="py-24 bg-[#111111] overflow-hidden" id="process">
      <div className="container mx-auto px-4 md:px-12 max-w-[1200px]">
        
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/10"
          >
            Our Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Working Roadmap
          </motion.h2>
        </div>

        {/* Colorful Circles Grid */}
        <div className="flex flex-wrap justify-center max-w-[1000px] mx-auto">
          {steps.map((step, i) => {
            // Create a slight negative margin layout to make circles touch/overlap slightly
            // We use 4 columns on large screens
            const isTopRow = i < 4;
            const delay = i * 0.1;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
                className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full flex flex-col items-center justify-center text-center shadow-2xl hover:scale-105 transition-transform duration-300 z-10 hover:z-20 m-[-5px] md:m-[-10px]"
              >
                {/* Circle Background */}
                <div className={`absolute inset-0 rounded-full ${step.color} shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] opacity-95 hover:opacity-100 transition-opacity`}></div>

                {/* Number Badge */}
                <div className="absolute top-[8%] left-[8%] w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3b9ae1] flex items-center justify-center text-white text-xs md:text-sm font-bold shadow-lg z-20">
                  {step.id}
                </div>

                {/* Icon & Text */}
                <div className="relative z-10 flex flex-col items-center px-4 mt-2">
                  <step.Icon className="w-10 h-10 md:w-14 md:h-14 text-white mb-3 stroke-[1.5px]" />
                  <span className="text-white font-medium text-sm md:text-lg leading-tight whitespace-pre-line">
                    {step.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
