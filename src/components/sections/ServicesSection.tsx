"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    { title: "BUSINESS WEBSITES", color: "text-brand-blue" },
    { title: "ECOMMERCE SOLUTIONS", color: "text-brand-cyan" },
    { title: "CUSTOM WEB APPS", color: "text-brand-green" },
    { title: "UI/UX DESIGN", color: "text-brand-yellow" },
    { title: "SEO OPTIMIZATION", color: "text-white" },
    { title: "HOSTING & DOMAINS", color: "text-brand-blue" },
  ];

  return (
    <section id="services" className="py-32 relative bg-[#090b10] overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="screen-title text-4xl md:text-5xl lg:text-6xl mb-8"
          >
            everything you need to<br/>
            achieve digital dominance,<br/>
            under one roof
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative cursor-pointer"
            >
              <h3 className={`screen-title text-5xl md:text-7xl ${service.color} transition-all duration-300 group-hover:scale-110 group-hover:text-hollow`}>
                {service.title}
              </h3>
              {/* Floating underline effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-2 bg-white transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
