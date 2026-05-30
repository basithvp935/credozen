"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#b3b3b3] relative overflow-hidden" id="cta-section">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[50%] h-[120%] bg-gradient-to-bl from-pink-100/40 via-transparent to-transparent -rotate-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[100%] bg-gradient-to-tr from-blue-100/60 via-transparent to-transparent rotate-6 transform origin-bottom-left"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left: Image with Animated SVGs */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            
            {/* The main portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-xl bg-white/50"
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
              <svg viewBox="0 0 500 600" className="w-full h-full absolute transform scale-[1.2] md:scale-[1.4] -translate-x-4 md:-translate-x-12">
                
                {/* Orange Curved Arrow */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  d="M 280 150 C 150 140, 50 250, 60 380 L 50 350 M 60 380 L 90 370"
                  fill="none"
                  stroke="#ff8800"
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
                  d="M 120 580 C 350 550, 380 300, 250 150"
                  fill="none"
                  stroke="#66cc00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Light Blue Arrow pointing Right */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
                  d="M 330 300 C 400 240, 480 260, 530 300 L 490 300 M 530 300 L 510 260"
                  fill="none"
                  stroke="#a3b8ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Floating tiny circle (from screenshot) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute top-12 right-0 md:-right-12 w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center z-20"
            >
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            </motion.div>

          </div>

          {/* Right: Text and CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#d4439c] text-white px-5 py-1.5 rounded-full text-sm font-bold mb-6 shadow-md"
            >
              Have A Projects?
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-medium text-gray-900 leading-[1.1] mb-6"
            >
              Have <span className="font-bold">A Project? Speak With Our</span> expert.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-lg mb-12 max-w-lg"
            >
              Leave your contacts and get a free consultation from
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#9b49a5] to-[#f47721] text-white font-semibold py-4 px-12 lg:w-[80%] rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>

          </div>
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h3>
              <p className="text-sm text-gray-500 mb-6">Leave your details and our expert will reach out.</p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d4439c] focus:border-transparent outline-none text-gray-900" placeholder="+1 (555) 000-0000" />
                </div>
                <button type="submit" className="mt-4 bg-gradient-to-r from-[#9b49a5] to-[#f47721] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all">
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
