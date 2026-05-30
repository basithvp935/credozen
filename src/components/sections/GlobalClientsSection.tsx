"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

export default function GlobalClientsSection() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Founder, TechNova USA",
      content: "Credozen built a web app that exceeded our expectations. The attention to detail and modern UI design is fantastic.",
      rating: 5,
    },
    {
      name: "Sarah Al-Fayed",
      role: "Director, Oasis Group Qatar",
      content: "Working with Credozen was seamless. They understood our international requirements and delivered a highly responsive corporate website.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO, EcomFlow UK",
      content: "Our eCommerce platform is now faster and more secure thanks to the Credozen team. Highly recommended for global businesses.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 relative bg-[#050810] overflow-hidden">
      {/* Abstract Map Background Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 70% 40%, #ffffff 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-500 rounded-full blur-[2px] animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-500 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" /> Global Reach
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Clients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Worldwide
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex text-yellow-500 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-semibold">{testimonial.name}</h5>
                  <p className="text-xs text-cyan-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners / Trust Badges */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider mb-8">
            Empowering Businesses Across
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['USA', 'UK', 'Qatar', 'Oman', 'India', 'Canada', 'UAE'].map((country) => (
              <div key={country} className="text-xl md:text-2xl font-bold text-slate-300">
                {country}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
