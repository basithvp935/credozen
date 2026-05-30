"use client";

import { motion } from "framer-motion";
import { Brain, Search, PenTool, Code, ClipboardCheck, Code2, BarChart2, Megaphone } from "lucide-react";

const steps = [
  { id: "01", label: "Brainstorming",         Icon: Brain,          color: "bg-gradient-to-r from-[#fbcd0b] to-[#f15922]", dark: false },
  { id: "02", label: "UX Research",           Icon: Search,         color: "bg-[#1a3a4a]", dark: true  },
  { id: "03", label: "Product Designing",     Icon: PenTool,        color: "bg-gradient-to-r from-[#fbcd0b] to-[#f15922]", dark: false },
  { id: "04", label: "Front-End Development", Icon: Code,           color: "bg-[#1a3a4a]", dark: true  },
  { id: "05", label: "Usability Testing",     Icon: ClipboardCheck, color: "bg-gradient-to-r from-[#fbcd0b] to-[#f15922]", dark: false },
  { id: "06", label: "Back-End Development",  Icon: Code2,          color: "bg-[#1a3a4a]", dark: true  },
  { id: "07", label: "SEO Optimization",      Icon: BarChart2,      color: "bg-gradient-to-r from-[#fbcd0b] to-[#f15922]", dark: false },
  { id: "08", label: "Digital Marketing",     Icon: Megaphone,      color: "bg-[#1a3a4a]", dark: true  },
];

export default function WorkingRoadmapSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#b3b3b3] overflow-hidden">

      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[28%] flex-shrink-0 flex flex-col items-start justify-center lg:sticky lg:top-32 pt-4"
          >
            <div className="bg-[#382d42] text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Working<br />Roadmap
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-10 max-w-xs">
              We design custom digital solutions that align with your business goals.Our strategy combines innovation, precision,<br />and performance.
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#962f92] to-[#f4821f] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Started
            </a>
          </motion.div>

          {/* Right: Infographic Steps */}
          <div className="flex-1 relative max-w-[640px] ml-auto">

            {/* Vertical Dotted Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] border-l-2 border-dashed border-slate-400 hidden md:block z-0" />

            <div className="flex flex-col gap-2 relative z-10">
              {steps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                    whileHover={{ scale: 1.03 }}
                    className={`flex items-center gap-0 w-full cursor-pointer ${isLeft ? "flex-row" : "flex-row-reverse"} group`}
                  >
                    {/* Pill Card (42% width) */}
                    <div className={`w-[42%] relative flex items-center ${isLeft ? "justify-end" : "justify-start"}`}>
                      <div className={`relative flex items-center w-full rounded-full ${step.color} shadow-xl overflow-visible ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                        {/* Icon Circle - pops out from pill */}
                        <div className={`relative flex-shrink-0 z-10 ${isLeft ? "-mr-4" : "-ml-4"}`}>
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-300">
                              <step.Icon className="w-5 h-5 text-[#1a3a4a]" />
                            </div>
                          </div>
                        </div>

                        {/* Text */}
                        <div className={`flex-1 py-3 text-white ${isLeft ? "pl-8 pr-4 text-left" : "pr-8 pl-4 text-right"}`}>
                          <div className="font-black text-sm md:text-base leading-tight">{step.label}</div>
                          <div className="text-white/70 text-xs mt-0.5 leading-snug">
                            Custom digital solutions<br />aligned with your goals
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot on the line */}
                    <div className="w-[8%] flex items-center justify-center flex-shrink-0">
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1], boxShadow: ["0px 0px 0px rgba(241,89,34,0)", "0px 0px 15px rgba(241,89,34,0.5)", "0px 0px 0px rgba(241,89,34,0)"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-4 h-4 rounded-full bg-white border-4 border-[#f15922] shadow-md z-20" 
                      />
                    </div>

                    {/* Step Number (28% width) */}
                    <div className={`w-[28%] flex flex-col justify-center ${isLeft ? "items-start pl-2" : "items-end pr-2"}`}>
                      <span className="text-slate-900 font-black text-3xl md:text-4xl leading-none">{step.id}</span>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
