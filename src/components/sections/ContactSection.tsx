"use client";

import { motion } from "framer-motion";
import ChromaKeyVideo from "@/components/ui/ChromaKeyVideo";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-24 relative overflow-hidden bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      
      {/* Animated Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap pb-10 sm:pb-16 lg:pb-24 relative z-10">
        <motion.div
          className="flex items-center gap-6 sm:gap-8 md:gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 md:gap-12 text-[36px] sm:text-[60px] md:text-[90px] lg:text-[140px] font-bold tracking-tight leading-none">
              <span
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Contact Us
              </span>
              <span className="text-slate-900 dark:text-white transition-colors duration-300">Get In Touch</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1200px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-black border border-slate-200 dark:border-[#2a2a2a] rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl transition-colors duration-300"
        >
          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-slate-900 dark:text-white leading-tight mb-6 sm:mb-8">
              Ready to Start <br className="hidden md:block" />
              Your Project?
            </h2>
            
            <form className="flex flex-col gap-3.5 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-white dark:bg-[#111] border border-slate-200 dark:border-[#2a2a2a] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-slate-900 dark:text-gray-300 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-3.5 sm:gap-4">
                <div className="w-full md:w-1/2">
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full bg-white dark:bg-[#111] border border-slate-200 dark:border-[#2a2a2a] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-slate-900 dark:text-gray-300 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-white dark:bg-[#111] border border-slate-200 dark:border-[#2a2a2a] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-slate-900 dark:text-gray-300 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="Message"
                  rows={3}
                  className="w-full bg-white dark:bg-[#111] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-slate-900 dark:text-gray-300 placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="mt-2">
                <button 
                  type="submit" 
                  style={{
                    background:
                      "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  }}
                  className="w-full sm:w-auto text-white font-semibold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,134,25,0.4)] text-xs sm:text-sm uppercase tracking-wider"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Graphic Side */}
          <div className="w-full lg:w-1/2 relative min-h-[220px] sm:min-h-[300px] lg:min-h-full bg-slate-100 dark:bg-black flex items-center justify-center overflow-hidden transition-colors duration-300">
            <ChromaKeyVideo 
              src="/images/VIDEO/3D11.mp4" 
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] sm:h-[70%] lg:h-[80%] w-auto object-contain"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
