"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Hands-on learning",
      desc: "Each project will take you through the entire process of completing and testing a solution.",
      num: "01",
      shape: "bg-white/20 blur-md rotate-12 rounded-lg",
    },
    {
      title: "Mentorship by our experts",
      desc: "Take advantage of your mentor's expertise and gain industry-relevant feedback.",
      num: "02",
      shape: "bg-white/10 blur-xl rounded-full scale-150",
    },
    {
      title: "Widely applicable skills",
      desc: "Our services are designed to give you a solid foundation and boost your professional growth.",
      num: "03",
      shape: "bg-white/20 blur-md rotate-45 rounded-sm",
    },
    {
      title: "Street cred",
      desc: "Upon completion you will receive a verifiable certificate verifying your new skills!",
      num: "04",
      shape: "bg-white/10 blur-xl rotate-12 clip-triangle", // we'll use a standard shape for now
    }
  ];

  return (
    <section className="py-32 relative text-white bg-mesh" id="benefits">
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Link2 size={14} className="text-white/70" />
            Learn more about us
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
          >
            What's in it for you?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-md text-sm leading-relaxed"
          >
            Gain all the skills you need to kick-start your professional path through mentoring by industry professionals.
          </motion.p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.7 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group min-h-[360px] flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-4 text-white/90 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {benefit.desc}
              </p>

              {/* Number Bottom Right */}
              <div className="absolute bottom-6 right-6 text-2xl font-light text-white/30">
                {benefit.num}
              </div>

              {/* Abstract CSS Shape simulating 3D Glass Objects */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-out flex items-center justify-center">
                <div className={`w-16 h-16 ${benefit.shape} transform group-hover:rotate-[30deg] transition-transform duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
