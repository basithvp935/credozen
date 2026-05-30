"use client";

import { motion } from "framer-motion";

export default function TechStackSection() {
  const technologies = [
    { name: "React", color: "text-[#61DAFB]", border: "border-[#61DAFB]/30", bg: "bg-[#61DAFB]/10" },
    { name: "Next.js", color: "text-white", border: "border-white/30", bg: "bg-white/10" },
    { name: "Node.js", color: "text-[#339933]", border: "border-[#339933]/30", bg: "bg-[#339933]/10" },
    { name: "MongoDB", color: "text-[#47A248]", border: "border-[#47A248]/30", bg: "bg-[#47A248]/10" },
    { name: "Tailwind CSS", color: "text-[#06B6D4]", border: "border-[#06B6D4]/30", bg: "bg-[#06B6D4]/10" },
    { name: "TypeScript", color: "text-[#3178C6]", border: "border-[#3178C6]/30", bg: "bg-[#3178C6]/10" },
    { name: "Firebase", color: "text-[#FFCA28]", border: "border-[#FFCA28]/30", bg: "bg-[#FFCA28]/10" },
    { name: "WordPress", color: "text-[#21759B]", border: "border-[#21759B]/30", bg: "bg-[#21759B]/10" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#080B14] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-10">
          Powered by Modern Technologies
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`px-6 py-3 rounded-full border ${tech.border} ${tech.bg} glass flex items-center justify-center cursor-pointer`}
            >
              <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
