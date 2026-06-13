"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const services = [
  {
    id: "branding",
    title: "Branding Identity",
    subItems: ["Legacy Modernization", "Solution Design", "Technology Enabling", "Mobile-First Systems"],
    image: "/service_branding.png",
  },
  {
    id: "interactive",
    title: "Interactive Design",
    subItems: ["Legacy Modernization", "Solution Design", "Technology Enabling", "Mobile-First Systems"],
    image: "/service_interactive.png",
  },
  {
    id: "development",
    title: "Development",
    subItems: ["Legacy Modernization", "Solution Design", "Technology Enabling", "Mobile-First Systems"],
    image: "/service_development.png",
  },
  {
    id: "marketing",
    title: "SEO/Marketing",
    subItems: ["Legacy Modernization", "Solution Design", "Technology Enabling", "Mobile-First Systems"],
    image: "/service_marketing.png",
  },
];

const romanNumerals = ["I.", "II.", "III.", "IV."];

export default function WhatWeDoAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (theme === 'dark' || resolvedTheme === 'dark') : true;

  return (
    <section className="bg-white dark:bg-black text-slate-900 dark:text-white pt-24 pb-0 border-y border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300" id="services">
      {/* Header Area */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] mb-12">
        <h4 className="text-sm md:text-sm uppercase tracking-widest text-[#ea612a] mb-4 font-medium">
          EMPOWERING YOUR BRAND JOURNEY
        </h4>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter">
          We innovate <span className="text-[#f47721]">digital</span><br className="hidden md:block" /> experiences
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="w-full h-px bg-slate-300 dark:bg-white/30" />
      </div>

      <div className="w-full flex flex-col">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative w-full border-b border-slate-200 dark:border-white/5 last:border-none transition-all duration-500 cursor-pointer"
              style={{
                background: isActive 
                  ? (isDark ? "linear-gradient(90deg, #141414 0%, #0a0a0a 60%, #000000 100%)" : "linear-gradient(90deg, #f8fafc 0%, #ffffff 60%, #f1f5f9 100%)")
                  : (isDark ? "#000000" : "#ffffff"),
              }}
            >
              <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 flex flex-col md:flex-row items-start md:items-center py-6 md:py-10 min-h-[160px]">
                
                {/* Left: Radio Button & Title */}
                <div className="flex-1 flex items-center gap-6 mb-8 md:mb-0">
                  {/* Custom Radio Button */}
                  <div 
                    className="flex items-center justify-center w-6 h-6 rounded-full border transition-colors duration-300"
                    style={{ borderColor: isActive ? (isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)") : (isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)") }}
                  >
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: isDark ? "#ffffff" : "#0f172a" }}
                      initial={false}
                      animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-500"
                    style={{ color: isActive ? (isDark ? "#ffffff" : "#0f172a") : (isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.4)") }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Center: Sub-Items */}
                <div className="flex-1 flex flex-col gap-2 pl-12 md:pl-0">
                  {service.subItems.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 text-sm tracking-wide transition-colors duration-500"
                      style={{ color: isActive ? (isDark ? "#ffffff" : "#0f172a") : (isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)") }}
                    >
                      <span className="font-medium">{romanNumerals[i]}</span>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Empty spacer to balance the layout, image is absolute */}
                <div className="hidden lg:block flex-1" />

              </div>

              {/* Absolute 3D Image reveal */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 150, rotate: 10, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 150, rotate: -10, scale: 0.8 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 lg:right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 z-0 hidden lg:block pointer-events-none"
                    style={{ mixBlendMode: "lighten" }}
                  >
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-[200px] h-[200px] xl:w-[280px] xl:h-[280px]"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>
    </section>
  );
}
