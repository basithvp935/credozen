"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const works = [
  { id: 1, title: "Digital Marketing", image: "/images/digital_marketing.png", hasIcon: true },
  { id: 2, title: "E-Commerce Solutions", image: "/images/ecommerce_solutions.png", hasIcon: false },
  { id: 3, title: "Branding & UI/UX", image: "/images/branding_uiux.png", hasIcon: false },
  { id: 4, title: "ERP Solutions", image: "/images/team_working_office.png", hasIcon: false },
];

export default function WorkShowcaseSection() {
  // Double the array for seamless marquee scrolling
  const scrollItems = [...works, ...works];

  return (
    <section className="py-24 bg-[#1f1929] relative overflow-hidden" id="work-showcase">
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-white/10 border border-white/5 text-white/80 px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm"
        >
          Work Showcase
        </motion.div>
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
        >
          Comprehensive IT Solution<br />
          <span className="text-white">Growth & Efficiency</span>
        </motion.h2>

      </div>

      {/* Marquee Slider */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Left/Right fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1f1929] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1f1929] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 md:gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35 // adjust duration for speed
          }}
        >
          {scrollItems.map((work, index) => (
            <div key={`${work.id}-${index}`} className="flex-shrink-0 w-[280px] md:w-[380px] lg:w-[420px] group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Icon if applicable */}
                {work.hasIcon && (
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600 z-10">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </div>
                )}
                
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1929]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white pl-2">
                {work.title}
              </h3>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
