"use client";

import { motion } from "framer-motion";
import AnimatedLine from "@/components/ui/AnimatedLine";

export default function ProjectsSection() {
  const projects = [
    { name: "Fintech Platform", category: "Web App", bg: "bg-slate-200" },
    { name: "Global Logistics", category: "Corporate", bg: "bg-slate-300" },
    { name: "Luxury Real Estate", category: "E-Commerce", bg: "bg-slate-200" },
    { name: "SaaS Dashboard", category: "UI/UX", bg: "bg-slate-300" },
  ];

  return (
    <section id="portfolio" className="py-32 relative bg-white text-[#090b10] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <AnimatedLine 
          path="M -100 200 Q 800 600 1600 200"
          viewBox="0 0 1600 1000"
          className="absolute top-0 w-full h-full opacity-20"
          strokeWidth={16}
          color="#ffbd62"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="mb-24 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="screen-title text-4xl md:text-6xl mb-6"
          >
            our recent<br/>
            success stories
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
          >
            We don't just build websites; we build scalable digital assets that generate tangible ROI.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`aspect-[4/3] rounded-3xl p-12 flex flex-col justify-end ${project.bg} hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
            >
              <h3 className="text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.name}</h3>
              <p className="text-brand-blue font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.category}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
