"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

  return (
    <section className="bg-black text-white py-0 border-y border-white/10 overflow-hidden" id="services">
      <div className="w-full flex flex-col">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative w-full border-b border-white/5 last:border-none transition-all duration-500 cursor-pointer"
              style={{
                background: isActive ? "linear-gradient(90deg, #141414 0%, #0a0a0a 60%, #000000 100%)" : "#000000",
              }}
            >
              <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 min-h-[220px]">
                
                {/* Left: Radio Button & Title */}
                <div className="flex-1 flex items-center gap-6 mb-8 md:mb-0">
                  {/* Custom Radio Button */}
                  <div 
                    className="flex items-center justify-center w-6 h-6 rounded-full border border-white/30 transition-colors duration-300"
                    style={{ borderColor: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)" }}
                  >
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-white"
                      initial={false}
                      animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-500"
                    style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)" }}
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
                      style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.3)" }}
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
                      className="relative w-[260px] h-[260px] xl:w-[360px] xl:h-[360px]"
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
