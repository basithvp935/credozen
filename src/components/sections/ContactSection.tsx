"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 lg:py-16 relative overflow-hidden bg-slate-50 dark:bg-[#1e1e1e] transition-colors duration-300">
      
      {/* Animated Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap pb-16 lg:pb-24 relative z-10">
        <motion.div
          className="flex items-center gap-8 md:gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 text-[60px] md:text-[90px] lg:text-[140px] font-bold tracking-tight leading-none">
              <span className="text-[#f47721]">Contact Us</span>
              <span className="text-slate-900 dark:text-white transition-colors duration-300">Get In Touch</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black border border-[#2a2a2a] rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl"
        >
          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white leading-tight mb-8">
              Ready to Start <br className="hidden md:block" />
              Your Project?
            </h2>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-[#111] border border-[#2a2a2a] rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="Message"
                  rows={3}
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded-3xl px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#f47721] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="mt-2">
                <button 
                  type="submit" 
                  className="bg-[#f47721] hover:bg-[#e06616] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Graphic Side */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-black flex items-center justify-center overflow-hidden">
            
            {/* SVG Greenscreen Keyer */}
            <svg className="absolute w-0 h-0">
              <filter id="green-key">
                <feColorMatrix type="matrix" values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  4 -5 4 0 1
                " />
              </filter>
            </svg>
            
            {/* Video Graphic */}
            <video 
              src="/images/VIDEO/3D11.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ filter: "url(#green-key)" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] lg:h-[80%] w-auto object-contain"
            ></video>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
