"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Building2, MapPin, Settings, ArrowUpLeft, CheckCircle2, ShieldCheck, Phone, Mail, X } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Find corresponding project or default to the first one
  const project = projectsData.find((p) => p.slug === slug || p.id.toString() === slug) || projectsData[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <main className="font-sans bg-slate-50 dark:bg-[#090b10] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-[#f47721] selection:text-white overflow-x-hidden pb-16 relative">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-BANNER CINEMATIC HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[580px] md:min-h-[680px] lg:min-h-[750px] pb-36 sm:pb-44 pt-32 sm:pt-40 flex flex-col justify-end overflow-hidden">
        {/* Ambient Gradient Foundation */}
        <div className={`absolute inset-0 ${project.gradientClass} opacity-95`} />
        
        {/* Full-Screen Project Showcase Banner Image */}
        <img
          src={project.bgImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-transform duration-1000 pointer-events-none"
        />

        {/* Cinematic High-Contrast Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle dot texture & warm ambient glow */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-36 -left-36 w-[550px] h-[550px] bg-[#f47721]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero Headline Content Container */}
        <div className="container mx-auto px-4 sm:px-8 max-w-[1280px] relative z-20">
          <div className="max-w-3xl flex flex-col justify-end text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-6 text-gray-300"
            >
              <Link href="/works" className="hover:text-[#f47721] flex items-center gap-1.5 transition-colors duration-200">
                <ArrowUpLeft className="w-4 h-4 text-[#f47721]" /> All Works
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-[#f47721] font-bold">{project.title}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[62px] font-medium text-white tracking-tight leading-[1.08] mb-8 drop-shadow-lg font-sans"
            >
              {project.heroTitle}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="inline-flex items-center gap-2.5 text-white font-semibold text-xs sm:text-[14px] tracking-[0.22em] uppercase bg-[#121520]/80 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f47721] animate-pulse" />
                INDUSTRY : {project.industry.toUpperCase()}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FLOATING FROSTED GLASS INFO BAR
         ───────────────────────────────────────────────────────────── */}
      <section className="relative z-30 -mt-24 sm:-mt-32 mb-16 sm:mb-24 px-4 sm:px-8 max-w-[1250px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full rounded-[2.3rem] sm:rounded-[2.8rem] bg-[#10131d]/95 backdrop-blur-3xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-7 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-white hover:border-white/25 transition-all duration-500"
        >
          {/* Column 1: Industry */}
          <div className="flex items-center gap-5 md:pr-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f47721] text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(244,119,33,0.4)] p-3.5 group">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 font-sans">Industry</p>
              <h4 className="text-lg sm:text-[22px] font-semibold tracking-tight text-white font-sans">{project.industry}</h4>
            </div>
          </div>

          {/* Column 2: Location */}
          <div className="flex items-center gap-5 md:px-10 pt-7 md:pt-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f47721] text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(244,119,33,0.4)] p-3.5 group">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 font-sans">Location</p>
              <h4 className="text-lg sm:text-[22px] font-semibold tracking-tight text-white font-sans">{project.location}</h4>
            </div>
          </div>

          {/* Column 3: Service */}
          <div className="flex items-center gap-5 md:pl-10 pt-7 md:pt-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f47721] text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(244,119,33,0.4)] p-3.5 group">
              <Settings className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 font-sans">Service</p>
              <h4 className="text-lg sm:text-[22px] font-semibold tracking-tight text-white font-sans">{project.service}</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROJECT OVERVIEW & CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto max-w-[1250px] px-4 sm:px-8 pt-4 pb-12 sm:pb-16 text-slate-900 dark:text-white">
        <div className="max-w-4xl font-sans">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[50px] font-medium tracking-tight mb-8 text-slate-900 dark:text-white"
          >
            Project <span className="text-[#f47721]">Overview.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-[19px] leading-[1.85] text-slate-600 dark:text-gray-300 font-normal mb-7"
          >
            {project.overviewParagraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-[19px] leading-[1.85] text-slate-600 dark:text-gray-300 font-normal mb-12"
          >
            {project.overviewParagraph2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(244,119,33,0.5)] mb-10 bg-[#f47721] shadow-[0_10px_30px_rgba(244,119,33,0.35)] cursor-pointer"
            >
              <span>Discuss Project Scope</span>
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. FOUR STAGGERED APP SCREENS ROW
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 pt-8 sm:pt-14 pb-20 sm:pb-28 max-w-[1250px] mx-auto overflow-visible">
          {project.mockups.map((screen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`flex flex-col items-center ${idx % 2 === 1 ? "lg:translate-y-8" : "lg:-translate-y-2"}`}
            >
              {/* Ultra-Realistic Titanium iPhone Hardware Frame */}
              <div className="w-full aspect-[9/18.5] max-w-[310px] mx-auto sm:max-w-none rounded-[2.5rem] sm:rounded-[2.8rem] p-[4px] bg-gradient-to-b from-[#71717a] via-[#3f3f46] to-[#18181b] shadow-[0_25px_65px_rgba(0,0,0,0.85)] relative overflow-hidden group hover:border-[#f47721]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(244,119,33,0.3)] border border-white/20 flex flex-col">
                
                {/* Physical Side Buttons */}
                <div className="absolute top-[22%] -left-[2px] w-[2.5px] h-5 bg-[#71717a] rounded-l-sm" />
                <div className="absolute top-[33%] -left-[2px] w-[2.5px] h-8 bg-[#71717a] rounded-l-sm" />
                <div className="absolute top-[46%] -left-[2px] w-[2.5px] h-8 bg-[#71717a] rounded-l-sm" />
                <div className="absolute top-[30%] -right-[2px] w-[2.5px] h-11 bg-[#71717a] rounded-r-sm" />

                {/* Inner Bezel */}
                <div className="w-full h-full rounded-[2.3rem] sm:rounded-[2.55rem] bg-black p-[6px] relative flex flex-col overflow-hidden">
                  
                  {/* Dynamic Island Pill Notch */}
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2 border border-white/15 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-[#0c141d] border border-white/20 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#181d24]" />
                  </div>

                  {/* Glare Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] pointer-events-none z-20 rounded-[2.1rem]" />

                  {/* Screen Content Window */}
                  <div className="w-full h-full rounded-[2rem] bg-[#090b10] overflow-hidden relative flex flex-col justify-between">
                    
                    {/* Upper App Screenshot (73% Height) */}
                    <div className="relative w-full h-[73%] overflow-hidden bg-neutral-900">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-0 inset-x-0 h-9 bg-gradient-to-b from-black/85 to-transparent flex items-start justify-between px-3.5 pt-2 text-[8px] font-extrabold text-white/95 z-10">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                          <span>5G</span>
                        </div>
                      </div>
                    </div>

                    {/* Lower UI Caption Panel (27% Height) */}
                    <div className="h-[27%] px-4 py-2.5 bg-white dark:bg-[#131620] text-slate-900 dark:text-white flex flex-col justify-center border-t border-gray-100 dark:border-white/10 font-sans relative z-10">
                      <div>
                        <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#f47721]/15 text-[#f47721] border border-[#f47721]/20 mb-1">
                          {screen.badge || "VERIFIED"}
                        </span>
                        <h5 className="font-semibold text-xs sm:text-[14px] tracking-tight truncate text-slate-900 dark:text-white">{screen.title}</h5>
                      </div>
                      {screen.subtitle && (
                        <p className="text-[11px] sm:text-[12px] text-slate-500 dark:text-gray-400 font-normal truncate mt-0.5">{screen.subtitle}</p>
                      )}
                    </div>

                    {/* iOS Bottom Home Bar */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-14 h-[2.5px] bg-slate-400/80 dark:bg-white/75 rounded-full z-30 shadow-sm" />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. THREE-COLUMN SPLIT FEATURE GRID (With Modal Trigger)
         ───────────────────────────────────────────────────────────── */}
      <section className="container mx-auto max-w-[1250px] px-4 sm:px-8 pt-10 sm:pt-16 pb-24 relative font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: High-res Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative rounded-[2.4rem] sm:rounded-[2.7rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/15 h-[360px] sm:h-[410px] group hover:border-[#f47721]/40 transition-colors duration-500"
          >
            <img
              src={project.highlight.leftImage}
              alt="Technology Implementation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-neutral-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-[#f47721]" /> Engineering Excellence
            </div>
          </motion.div>

          {/* Center Column: 3-line Headline + Description + Interactive Modal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center text-center px-2"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6 font-sans">
              <span>{project.highlight.line1}</span>
              <span className="text-[#f47721] block my-1 font-semibold">{project.highlight.highlightLine}</span>
              <span>{project.highlight.line3}</span>
            </h3>

            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal mb-9 max-w-sm text-justify hyphens-auto">
              {project.highlight.description}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,119,33,0.5)] bg-[#f47721] shadow-lg cursor-pointer"
            >
              <span>Let&apos;s discuss your project</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </motion.div>

          {/* Right Column: High-res Team Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative rounded-[2.4rem] sm:rounded-[2.7rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/15 h-[360px] sm:h-[410px] group hover:border-[#f47721]/40 transition-colors duration-500"
          >
            <img
              src={project.highlight.rightImage}
              alt="Client Collaboration & Success"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-neutral-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-[#f47721]" /> Global Impact & Scaling
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INTERACTIVE PROJECT INQUIRY MODAL FORM
         ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 bg-black/75 overflow-y-auto font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-[780px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] bg-white dark:bg-[#12151f] border border-gray-200 dark:border-white/15 grid grid-cols-1 md:grid-cols-12 relative mt-4 sm:mt-6 mb-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Column: Form Section */}
              <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-full">
                <div>
                  <h3 className="text-xl sm:text-[24px] font-medium tracking-tight text-slate-900 dark:text-white mb-5 font-sans">
                    Let’s discuss your project
                  </h3>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-10 flex flex-col items-center justify-center text-center space-y-3.5 text-emerald-500"
                    >
                      <ShieldCheck className="w-14 h-14" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank you!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-sm">
                        Your request has been securely dispatched. Our Business Development team will reach out to you within 2 business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Name *"
                          className="w-full bg-transparent border-b border-gray-200 dark:border-white/20 py-2 sm:py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:border-[#f47721] focus:outline-none transition-colors text-xs sm:text-sm font-sans"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="E-mail *"
                          className="w-full bg-transparent border-b border-gray-200 dark:border-white/20 py-2 sm:py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:border-[#f47721] focus:outline-none transition-colors text-xs sm:text-sm font-sans"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone number *"
                          className="w-full bg-transparent border-b border-gray-200 dark:border-white/20 py-2 sm:py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:border-[#f47721] focus:outline-none transition-colors text-xs sm:text-sm font-sans"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          placeholder="Describe your project requirements"
                          className="w-full bg-transparent border-b border-gray-200 dark:border-white/20 py-2 sm:py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:border-[#f47721] focus:outline-none transition-colors resize-none text-xs sm:text-sm font-sans"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-5 mt-1 border-t border-gray-100 dark:border-white/10">
                        <button
                          type="submit"
                          className="px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-[#f47721] hover:bg-[#e06616] shadow-[0_6px_20px_rgba(244,119,33,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 text-xs sm:text-sm font-sans shrink-0 cursor-pointer"
                        >
                          Send request
                        </button>
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-sans">
                          <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                          <span>Your privacy is protected</span>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Credozen Brand & Contact Sidebar */}
              <div className="md:col-span-5 bg-[#181d29] dark:bg-[#0c0e15] p-5 sm:p-7 text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-800 dark:border-white/10 relative">
                
                {/* Close Dialog Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                {/* Top Brand Box */}
                <div>
                  <div className="mb-4 pt-0.5">
                    <img src="/logo.png" alt="Credozen Logo" className="h-9 sm:h-10 w-auto object-contain mb-1.5" />
                    <p className="text-xs text-[#f47721] font-bold font-sans tracking-wide">Business Development Team</p>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-[13px] leading-[1.65] mb-6 font-sans font-normal">
                    Reach out to Credozen to receive a free consultation and entrust your digital initiative to a dedicated team of software experts.
                  </p>
                </div>

                {/* Middle Contact Section */}
                <div className="border-t border-white/15 py-5 space-y-3">
                  <h5 className="font-semibold text-xs sm:text-sm text-white font-sans tracking-wide">Contact us</h5>
                  
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-[#f47721] transition-colors">
                    <Phone className="w-4 h-4 text-[#f47721] shrink-0" />
                    <a href="tel:+918089603543" className="font-medium font-sans">+91 8089603543</a>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-[#f47721] transition-colors">
                    <Mail className="w-4 h-4 text-[#f47721] shrink-0" />
                    <a href="mailto:info@credozen.in" className="font-medium font-sans">info@credozen.in</a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
