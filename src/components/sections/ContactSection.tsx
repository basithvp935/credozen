"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050810]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Build Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Project
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-semibold text-white mb-6">Contact Information</h4>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Ready to start your project? Reach out to us for a free consultation. Our international team is available to discuss your requirements and provide the best digital solutions.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Our Headquarters</h5>
                  <p className="text-slate-400 text-sm">123 Tech Boulevard, Digital City, Global Hub 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Phone Number</h5>
                  <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email Address</h5>
                  <p className="text-slate-400 text-sm">hello@credozen.com</p>
                </div>
              </div>
            </div>

            <Link 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Link>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h4 className="text-2xl font-semibold text-white mb-8 relative z-10">Send us a Message</h4>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
