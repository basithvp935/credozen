"use client";

import { motion } from "framer-motion";
import { MessageSquare, LayoutDashboard, Palette, Code, CheckCircle, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { icon: <MessageSquare className="w-6 h-6" />, title: "Discussion", desc: "Understanding your vision, requirements, and business goals." },
    { icon: <LayoutDashboard className="w-6 h-6" />, title: "Planning", desc: "Creating a comprehensive roadmap and system architecture." },
    { icon: <Palette className="w-6 h-6" />, title: "Design", desc: "Crafting beautiful, user-centric interfaces and prototypes." },
    { icon: <Code className="w-6 h-6" />, title: "Development", desc: "Building the solution using modern technologies and best practices." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Testing", desc: "Rigorous quality assurance to ensure flawless performance." },
    { icon: <Rocket className="w-6 h-6" />, title: "Launch", desc: "Deploying your project to the world and providing ongoing support." },
  ];

  return (
    <section className="py-24 relative bg-[#080B14]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-3"
          >
            How We Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Process</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-cyan-900 to-purple-900 -translate-y-1/2 rounded-full opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-cyan-900 to-purple-900 -translate-x-1/2 z-0"></div>
                )}

                <div className="w-16 h-16 rounded-full bg-[#050810] border-2 border-slate-700 group-hover:border-cyan-500 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 relative z-10 mb-6">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center border-2 border-[#080B14]">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
