"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-0 bg-slate-50 dark:bg-[#1e1e1e] relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-300" id="cta-section">
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full lg:w-[60%] h-[100%] bg-gradient-to-r from-gray-200 dark:from-gray-500/30 via-transparent to-transparent pointer-events-none transition-colors duration-300"></div>


      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 pt-16 lg:pt-24 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left: Image with Animated SVGs */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            
            {/* The main portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-[30px] overflow-hidden bg-white shadow-2xl border border-gray-100 dark:border-none"
          >
              <Image
                src="/images/cta_woman.png"
                alt="Speak with our expert"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* SVG Animations Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 500 600" className="w-full h-full absolute transform scale-[1.2] md:scale-[1.5] -translate-x-12">
                
                {/* Orange Curved Arrow */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  d="M 220 100 C 100 120, 20 250, 40 400 L 40 420 L 70 410 M 40 420 L 30 380"
                  fill="none"
                  stroke="#f47721"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Green Curved Line */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  d="M 120 580 C 180 550, 220 480, 250 400"
                  fill="none"
                  stroke="#66cc00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            

          </div>

          {/* Right: Text and CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#f47721] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-md"
            >
              Have A Projects?
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-medium text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-300"
            >
              Have <span className="text-[#f47721] font-bold">A Project?</span> <span className="font-bold">Speak With Our expert.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-gray-300 text-[17px] mb-12 max-w-lg transition-colors duration-300"
            >
              Leave your contacts and get a free consultation from
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#f47721] text-white font-semibold py-4 px-12 w-full lg:w-[80%] rounded-lg shadow-lg hover:bg-[#e06616] transition-all duration-300"
            >
              Get Started Today
            </motion.button>

          </div>
        </div>
      </div>

      {/* Animated Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap pt-8 pb-16 relative z-10">
        <motion.div
          className="flex items-center gap-8 md:gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 text-[60px] md:text-[90px] lg:text-[140px] font-bold tracking-tight leading-none">
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(150,150,150,0.5)" }}>Contact Us</span>
              <span className="text-slate-900 dark:text-white transition-colors duration-300">Get In Touch</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 w-full max-w-md relative shadow-2xl transition-colors duration-300"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Get Started</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300">Leave your details and our expert will reach out.</p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Name</label>
                  <input required type="text" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900 dark:text-white bg-white dark:bg-slate-800 transition-colors duration-300" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Email</label>
                  <input required type="email" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900 dark:text-white bg-white dark:bg-slate-800 transition-colors duration-300" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Phone Number</label>
                  <input required type="tel" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900 dark:text-white bg-white dark:bg-slate-800 transition-colors duration-300" placeholder="+1 (555) 000-0000" />
                </div>
                <button type="submit" className="mt-4 bg-[#f47721] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
