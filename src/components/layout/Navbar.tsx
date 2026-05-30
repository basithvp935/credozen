"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topLinks = [
    { name: "Home", href: "#home" },
    { name: "Consultancy", href: "#about" },
    { name: "Implementation", href: "#services" },
    { name: "Case Studies", href: "#portfolio" },
  ];

  const bottomLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Community", href: "#community" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants: import("framer-motion").Variants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const linkVariants: import("framer-motion").Variants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3 + (i * 0.05), duration: 0.4, ease: [0.76, 0, 0.24, 1] as const }
    })
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="/" className="z-[110]" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Credozen Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Menu Toggle */}
        <button 
          className="z-[110] relative w-10 h-10 flex flex-col justify-center items-end gap-2 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`h-1 bg-white transition-all duration-300 ease-out ${isMenuOpen ? "w-8 rotate-45 translate-y-[12px]" : "w-10 group-hover:w-8"}`}></span>
          <span className={`h-1 bg-white transition-all duration-300 ease-out ${isMenuOpen ? "opacity-0" : "w-8 group-hover:w-10"}`}></span>
          <span className={`h-1 bg-white transition-all duration-300 ease-out ${isMenuOpen ? "w-8 -rotate-45 -translate-y-[12px]" : "w-6 group-hover:w-10"}`}></span>
        </button>
      </nav>

      {/* Sidebar Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] z-[90] bg-[#b3b3b3] flex flex-col justify-center px-12 md:px-16 shadow-2xl border-l border-white/10"
          >
            {/* Border Element for Menu */}
            <div className="absolute inset-4 border-4 border-white/20 rounded-3xl pointer-events-none"></div>

            <div className="flex flex-col relative z-10 w-full">
              
              {/* Top Links */}
              <div className="flex flex-col space-y-5 mb-8">
                {topLinks.map((link, i) => (
                  <motion.div 
                    custom={i} 
                    variants={linkVariants} 
                    initial="closed" 
                    animate="open" 
                    exit="closed"
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl md:text-3xl font-black text-white hover:text-brand-cyan transition-colors uppercase tracking-wide block w-max"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Dashed Separator */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full flex gap-3 mb-8 opacity-60"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-1 w-8 bg-white rounded-full"></div>
                ))}
              </motion.div>

              {/* Bottom Links */}
              <div className="flex flex-col space-y-4">
                {bottomLinks.map((link, i) => (
                  <motion.div 
                    custom={i + topLinks.length} 
                    variants={linkVariants} 
                    initial="closed" 
                    animate="open" 
                    exit="closed"
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      className="text-xl md:text-2xl font-black text-white hover:text-brand-cyan transition-colors uppercase tracking-wide block w-max"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
