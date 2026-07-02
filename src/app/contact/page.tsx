"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#090b10] min-h-screen text-slate-900 dark:text-slate-200 selection:bg-[#f47721] selection:text-white pb-20">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/contactus.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0a192f]/80 mix-blend-multiply z-0"></div>
          <div 
            className="absolute inset-0 opacity-[0.05] z-0" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-widest uppercase shadow-lg"
          >
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Contact <span className="text-[#f47721]">Us</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">Contact Us</span>
          </motion.div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg className="block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#050505]"></path>
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         CTA Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#050505] pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-white/20 rounded-[2rem] p-10 md:p-20 overflow-hidden bg-[#0c0502]/50 backdrop-blur-sm shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/contact5.jpg" 
                alt="Abstract background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Continue Exploring — Your<br className="hidden md:block" /> <span className="text-[#f47721]">Next Section</span> Awaits
              </h2>
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              </p>
              
              <div className="relative flex items-center w-full max-w-lg mx-auto bg-black/40 backdrop-blur-md border border-white/30 rounded-full p-1.5 focus-within:border-[#f47721] focus-within:shadow-[0_0_15px_rgba(244,119,33,0.3)] transition-all">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="w-full bg-transparent border-none text-white px-5 placeholder-white/50 focus:outline-none focus:ring-0" 
                />
                <button className="bg-[#f47721] hover:bg-[#d8651a] text-white font-bold px-8 py-3 rounded-full shrink-0 transition-colors shadow-lg shadow-[#f47721]/30">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Contact Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#f2f4f6] dark:bg-[#090b10] pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column - Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h5 className="text-slate-500 dark:text-slate-400 font-semibold tracking-widest text-sm uppercase mb-4">
                Common Questions
              </h5>
              <h2 className="text-[3rem] sm:text-[3.5rem] leading-[1.1] font-bold text-[#2a2a2a] dark:text-white mb-6">
                Have <span className="text-[#f47721]">inquiries?</span><br />Reach out to us!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                We are here to assist you with any questions or concerns you may have. Feel free to reach out to us anytime.
              </p>
              
              <div className="flex flex-col gap-6">
                {/* Location */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full text-[#f47721] group-hover:scale-110 transition-transform">
                    <MapPin strokeWidth={2} size={22} />
                  </div>
                  <span className="text-slate-500 dark:text-slate-300 font-medium">1032 N 9th Ave, Tucson, AZ 85705, USA</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full text-[#f47721] group-hover:scale-110 transition-transform">
                    <Phone strokeWidth={2} size={22} />
                  </div>
                  <span className="text-[#2a2a2a] dark:text-white font-bold">+1 840 841 25 69</span>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full text-[#f47721] group-hover:scale-110 transition-transform">
                    <Mail strokeWidth={2} size={22} />
                  </div>
                  <span className="text-slate-500 dark:text-slate-300 font-medium">info@avola.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#2a2a2a] dark:text-slate-200 font-semibold text-sm">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-5 py-3.5 rounded-3xl bg-transparent border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all"
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#2a2a2a] dark:text-slate-200 font-semibold text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-5 py-3.5 rounded-3xl bg-transparent border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#2a2a2a] dark:text-slate-200 font-semibold text-sm">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter your number" 
                    className="w-full px-5 py-3.5 rounded-3xl bg-transparent border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#2a2a2a] dark:text-slate-200 font-semibold text-sm">
                    Message
                  </label>
                  <textarea 
                    placeholder="Enter your message" 
                    rows={5}
                    className="w-full px-5 py-4 rounded-3xl bg-transparent border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3 mt-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-5 h-5 rounded border-slate-300 dark:border-white/30 text-[#f47721] focus:ring-[#f47721] bg-transparent cursor-pointer appearance-none checked:bg-[#f47721] checked:border-[#f47721] border relative after:content-[''] after:absolute after:top-[2px] after:left-[6px] after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100 transition-all"
                  />
                  <label htmlFor="terms" className="text-slate-400 dark:text-slate-400 text-sm cursor-pointer select-none">
                    I agree that my submitted data is being <span className="text-[#f47721]">collected and stored</span>.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button 
                    type="submit" 
                    className="bg-[#f47721] hover:bg-[#d8651a] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg shadow-[#f47721]/30"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
