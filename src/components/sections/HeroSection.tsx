"use client";

import { motion } from "framer-motion";
import AnimatedLine from "@/components/ui/AnimatedLine";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#962f92] to-[#7e51a1]" id="home">
      
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 w-full">
          
          {/* Left Side Heading (CREDOZEN) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-start w-full"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white font-serif drop-shadow-lg text-center md:text-left">
              CREDOZEN
            </h2>
          </motion.div>

          {/* Right Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-center md:items-end text-white space-y-6 md:space-y-8 text-center md:text-right"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-xl">
              Transform Your Business <br className="hidden md:block"/>
              <span className="font-light italic font-serif">Through Strategic</span>
            </h1>
            
            <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/80 max-w-md">
              IT Solutions
            </p>
            
            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 flex flex-col items-center md:items-end"
            >
              scroll down
              <div className="w-[2px] h-12 bg-white/50 mt-4 animate-bounce md:mr-6"></div>
            </motion.div>
          </motion.div>

        </div>

      </div>
      
      {/* Background connecting lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedLine 
          path="M 0 0 C 800 200, 200 600, 1600 800"
          viewBox="0 0 1600 800"
          className="absolute top-0 left-0 w-full h-full opacity-20"
          strokeWidth={16}
          color="#ffffff"
        />
      </div>

    </section>
  );
}
