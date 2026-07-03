"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hexagon, Triangle, Box, Circle, Command, Globe, Feather, Frame, Grid, Layers, Target, Zap } from "lucide-react";

export default function ClientsPage() {
  const dummyClients = [
    { id: 1, name: "Acme Corp", icon: <Hexagon size={40} strokeWidth={1.5} /> },
    { id: 2, name: "Global Tech", icon: <Command size={40} strokeWidth={1.5} /> },
    { id: 3, name: "Nexus Industries", icon: <Triangle size={40} strokeWidth={1.5} /> },
    { id: 4, name: "Stark Solutions", icon: <Box size={40} strokeWidth={1.5} /> },
    { id: 5, name: "Umbrella Corp", icon: <Circle size={40} strokeWidth={1.5} /> },
    { id: 6, name: "Vanguard", icon: <Globe size={40} strokeWidth={1.5} /> },
    { id: 7, name: "Nimbus", icon: <Feather size={40} strokeWidth={1.5} /> },
    { id: 8, name: "Horizon", icon: <Frame size={40} strokeWidth={1.5} /> },
    { id: 9, name: "Astra", icon: <Grid size={40} strokeWidth={1.5} /> },
    { id: 10, name: "Lumina", icon: <Layers size={40} strokeWidth={1.5} /> },
    { id: 11, name: "Apex", icon: <Target size={40} strokeWidth={1.5} /> },
    { id: 12, name: "Velocity", icon: <Zap size={40} strokeWidth={1.5} /> },
  ];

  return (
    <main className="bg-slate-50 dark:bg-[#090b10] min-h-screen text-slate-900 dark:text-slate-200 selection:bg-[#f47721] selection:text-white pb-20">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.jpg" 
            alt="Our Clients" 
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
            Our Partners
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Trusted <span className="text-[#f47721]">Clients</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">Clients</span>
          </motion.div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg className="block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50 dark:fill-[#090b10]"></path>
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Clients Grid Section
      ────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6"
            >
              Empowering Global <span className="text-[#f47721]">Brands</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              We are proud to collaborate with some of the most innovative and forward-thinking companies around the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {dummyClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col items-center justify-center p-8 lg:p-12 bg-white dark:bg-[#11131c] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-[#f47721]/30 hover:shadow-[0_15px_40px_-10px_rgba(244,119,33,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f47721]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Icon wrapper */}
                <div className="text-slate-400 dark:text-slate-500 group-hover:text-[#f47721] transition-colors duration-500 mb-4 transform group-hover:scale-110 group-hover:-translate-y-1">
                  {client.icon}
                </div>
                
                {/* Brand Name */}
                <h3 className="text-lg font-bold tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-[#2a2a2a] dark:group-hover:text-white transition-colors duration-300 uppercase">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
