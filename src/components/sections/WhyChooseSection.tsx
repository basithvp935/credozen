"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Lightbulb, UserRound, Lock } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseSection() {
  const leftFeatures = [
    {
      title: "Technical Expertise",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: Target,
    },
    {
      title: "Innovation & Adaptability",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: Lightbulb,
    }
  ];

  const rightFeatures = [
    {
      title: "Effective Communication",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: UserRound,
    },
    {
      title: "Security And Compliance",
      desc: "An IT company must prioritize cybersecurity and data protection.",
      icon: Lock,
    }
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Expert Team" },
    { value: 15, suffix: "K", label: "Client" },
    { value: 20, suffix: "+", label: "Branch Office" },
  ];

  return (
    <section className="pt-8 lg:pt-10 pb-16 lg:pb-24 relative bg-white dark:bg-[#0b0615] text-slate-900 dark:text-white overflow-hidden font-sans transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-[1300px] relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-8 lg:mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-slate-300 dark:border-white/20 rounded-full px-6 py-2 text-sm font-medium mb-4 transition-colors duration-300"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[54px] font-medium mb-4 tracking-tight"
          >
            Magic Behind Our <span className="text-[#f47721]">IT Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-[17px] leading-relaxed transition-colors duration-300"
          >
            We begin by conducting a comprehensive needs assessment to understand your specific requirements, challenges, and goals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 lg:gap-8 items-stretch mb-16 lg:mb-20">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {leftFeatures.map((feature, idx) => (
              <motion.div 
                key={`left-${idx}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-[#11091f] border border-purple-200 dark:border-purple-800/80 rounded-2xl p-6 lg:p-8 flex items-center justify-between gap-6 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed transition-colors duration-300">{feature.desc}</p>
                </div>
                <div className="flex-shrink-0 text-[#f47721] group-hover:text-purple-600 dark:group-hover:text-[#a716a5] group-active:text-purple-700 dark:group-active:text-[#75269f] transition-colors duration-300">
                  <feature.icon size={48} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center h-[400px] lg:h-[480px] w-full"
          >
            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              <Image 
                src="/images/whychoose.jpg" 
                alt="IT Solutions" 
                fill 
                className="object-cover"
              />
              {/* Overlay gradient to blend nicely */}
              <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {rightFeatures.map((feature, idx) => (
              <motion.div 
                key={`right-${idx}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-[#11091f] border border-purple-200 dark:border-purple-800/80 rounded-2xl p-6 lg:p-8 flex items-center justify-between gap-6 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed transition-colors duration-300">{feature.desc}</p>
                </div>
                <div className="flex-shrink-0 text-[#f47721] group-hover:text-purple-600 dark:group-hover:text-[#a716a5] group-active:text-purple-700 dark:group-active:text-[#75269f] transition-colors duration-300">
                  <feature.icon size={48} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#46399c] via-[#75269f] to-[#a716a5] rounded-full py-1.5 lg:py-2 px-8 lg:px-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <span className="text-2xl md:text-3xl lg:text-[32px] font-medium leading-none mb-0.5">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/90 text-xs md:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
