"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Simulate loading time (increased for the two-step animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#090b10] flex flex-col items-center justify-center"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ clipPath: "inset(-20% 72% -20% -20%)", x: "36%" }}
              animate={{ clipPath: "inset(-20% -20% -20% -20%)", x: "0%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
              className="relative"
            >
              <motion.img 
                src="/logo.png" 
                alt="Credozen Logo" 
                animate={{ 
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 0px rgba(234,112,51,0))", 
                    "drop-shadow(0 0 15px rgba(234,112,51,0.6))", 
                    "drop-shadow(0 0 0px rgba(234,112,51,0))"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="h-16 md:h-24 w-auto object-contain mb-10"
              />
            </motion.div>
            
            {/* Custom Loading Bar - Delayed appearance */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                  className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#ba4b9e] via-[#ea7033] to-[#ba4b9e] rounded-full"
                />
              </div>
              
              {/* Loading Text */}
              <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase font-medium animate-pulse">
                Loading
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
