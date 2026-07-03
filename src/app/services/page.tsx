"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Smartphone, PenTool, TrendingUp, Search, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "We build modern, responsive, and high-performance websites and web applications tailored to your business needs.",
      icon: <Monitor className="w-8 h-8" />,
      image: "/images/tech_cutting_edge.png"
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Engage your audience on the go with custom iOS and Android applications designed for seamless user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "/images/tech_deployment.png"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Create stunning and intuitive digital experiences that captivate your users and elevate your brand identity.",
      icon: <PenTool className="w-8 h-8" />,
      image: "/images/UI Design - Maxim Nilov.jpg"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Drive growth and maximize ROI with our data-driven digital marketing strategies and targeted campaigns.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "/images/digital_marketing.png"
    },
    {
      id: "seo-services",
      title: "SEO Services",
      description: "Improve your search engine rankings and attract more organic traffic with our comprehensive SEO solutions.",
      icon: <Search className="w-8 h-8" />,
      image: "/images/smart_analytics.png"
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      description: "Protect your digital assets and ensure data privacy with our robust, state-of-the-art cyber security protocols.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/images/tech_tailored.png"
    }
  ];

  return (
    <main className="bg-slate-50 dark:bg-[#050505] min-h-screen text-slate-900 dark:text-slate-200 selection:bg-[#f47721] selection:text-white pb-20">
      {/* Banner Section */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.jpg" 
            alt="Our Services" 
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
            What We Do
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Our <span className="text-[#f47721]">Services</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">Services</span>
          </motion.div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg className="block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#050505]"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6"
            >
              Innovative Solutions for <br />
              <span className="text-[#f47721]">Digital Success</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              We provide comprehensive IT services to help your business thrive in the digital age. Explore our tailored solutions designed to drive growth and efficiency.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-gradient-to-b from-[#11131c] to-[#0a0b12] rounded-3xl overflow-hidden border border-white/10 hover:border-[#f47721]/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(244,119,33,0.25)] hover:-translate-y-2 flex flex-col before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-[#f47721] before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 z-10"
              >
                {/* Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-[#050505]/30 mix-blend-multiply group-hover:bg-[#f47721]/10 transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Content */}
                <div className="px-8 pt-10 pb-8 flex flex-col flex-grow relative z-10 bg-gradient-to-t from-[#0a0b12] via-[#0a0b12] to-transparent">
                  {/* Icon floating */}
                  <div className="absolute -top-7 right-8 z-20 bg-[#151722] border border-white/10 p-4 rounded-2xl shadow-xl shadow-black/50 group-hover:bg-[#f47721] group-hover:border-[#f47721] group-hover:-translate-y-2 transition-all duration-500">
                    <div className="text-[#f47721] group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2a2a2a] dark:text-white mb-4 group-hover:text-[#f47721] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow font-light">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/services/${service.id}`}
                    className="group/btn inline-flex items-center text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-[#f47721] dark:hover:text-[#f47721] uppercase tracking-wider transition-all duration-500 mt-auto overflow-hidden"
                  >
                    <span className="max-w-0 opacity-0 -translate-x-4 group-hover/btn:max-w-[100px] group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:mr-2 transition-all duration-500 ease-out whitespace-nowrap">
                      Read More
                    </span>
                    <ArrowRight size={18} className="text-[#f47721] transform group-hover/btn:translate-x-1 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
