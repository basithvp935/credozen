"use client";

import { motion } from "framer-motion";
import { Globe, Asterisk, CheckCircle2, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* ──────────────────────────────────────────────
   Animated Counter Component for Stats
────────────────────────────────────────────── */
const Facebook = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Twitter = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Linkedin = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Instagram = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

/* ──────────────────────────────────────────────
   Animated Counter Component for Stats
────────────────────────────────────────────── */
function AnimatedCounter({ to, suffix, decimals = 0 }: { to: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * to);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, to]);

  const displayCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return <span ref={ref}>{displayCount}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#090b10] min-h-screen text-slate-900 dark:text-slate-200 selection:bg-[#f47721] selection:text-white">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.jpg" 
            alt="About Us" 
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
            Discover Our Journey
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            About <span className="text-[#f47721]">Us</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">About Us</span>
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
         Main Content Section (Matching the Image)
      ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-4 md:px-8 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image with Custom Shape */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[500px] mx-auto lg:mr-auto lg:ml-0"
          >
            {/* The Image Wrapper with Custom Border Radius */}
            <div className="relative rounded-t-[2.5rem] rounded-bl-[2.5rem] rounded-br-[6rem] overflow-hidden aspect-[4/4.5] shadow-2xl shadow-blue-900/5 dark:shadow-black/40 ring-1 ring-slate-200 dark:ring-white/5 bg-slate-100 dark:bg-slate-800">
              <img 
                src="/images/about it.jpg" 
                alt="IT Specialist working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#f47721]/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col pt-8 lg:pt-0"
          >
            {/* Small Badge */}
            <div className="flex items-center gap-2 bg-[#e6effb] dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 w-fit px-5 py-2.5 rounded-full mb-8 font-semibold text-sm shadow-sm">
              <Asterisk size={18} className="text-blue-600 dark:text-blue-400" strokeWidth={3} />
              <span>About us</span>
            </div>

            {/* Heading */}
            <h2 className="text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.15] font-semibold text-slate-800 dark:text-white mb-8 tracking-tight">
              We're not just an <span className="text-[#f47721]">IT service</span> provider we're your <br className="hidden xl:block" /> <span className="text-[#f47721]">tech lifeline</span>.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-12">
              <p>
                Our mission is crystal clear: solve your IT problems fast, so you can focus on what
                matters — running your business. From day one, we've built our reputation on speed,
                clarity, and relentless reliability.
              </p>
              <p>
                With a team of certified IT specialists, cybersecurity pros, and cloud architects, we
                provide real solutions to real problems — without confusing jargon or endless waiting.
              </p>
            </div>

            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-[2rem] border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/20"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-4xl xl:text-[2.5rem] font-light text-[#f47721] mb-2 tracking-tight">
                  <AnimatedCounter to={236} suffix="K+" />
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Project Done</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-4xl xl:text-[2.5rem] font-light text-[#f47721] mb-2 tracking-tight">
                  <AnimatedCounter to={490} suffix="M+" />
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">happy Clients</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-4xl xl:text-[2.5rem] font-light text-[#f47721] mb-2 tracking-tight">
                  <AnimatedCounter to={4.9} suffix="" decimals={1} />
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Clients Rating</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-4xl xl:text-[2.5rem] font-light text-[#f47721] mb-2 tracking-tight">
                  <AnimatedCounter to={139} suffix="" />
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Expert Team</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Who We Are Section
      ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 md:px-8 max-w-[1300px] mx-auto border-t border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 bg-[#f47721]/10 text-[#f47721] w-fit px-5 py-2.5 rounded-full mb-6 font-semibold text-sm shadow-sm">
              <Asterisk size={18} strokeWidth={3} />
              <span>Who We Are</span>
            </div>

            {/* Heading */}
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-bold text-slate-800 dark:text-white mb-8 tracking-tight">
              Empowering businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f47721] to-orange-400">cutting-edge</span> technology solutions.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-[1.1rem] leading-[1.8] mb-10 border-l-[4px] border-[#f47721] pl-6 py-2 rounded-r-2xl bg-gradient-to-r from-slate-100 to-transparent dark:from-white/5 dark:to-transparent">
              <p>
                At <strong className="text-slate-900 dark:text-white font-bold">CREDOZEN LLP</strong>, we specialize in empowering businesses with cutting-edge technology. Our highly skilled team blends creativity, technical expertise, and industry knowledge to deliver exceptional digital experiences.
              </p>
              <p>
                From dynamic web platforms to advanced digital marketing, we craft tailor-made solutions that drive measurable growth and elevate your brand's online presence.
              </p>
            </div>

            {/* Key Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                "Website & App Development", 
                "Digital Marketing & SEO", 
                "E-Commerce Solutions", 
                "Custom LMS Platforms"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-[#f47721]/10 text-[#f47721] p-2 rounded-full shadow-sm group-hover:bg-[#f47721] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Layered Images Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[550px] mx-auto lg:ml-auto lg:mr-0 h-[400px] sm:h-[480px] mt-8 lg:mt-0"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#f47721]/10 dark:shadow-black/40 ring-1 ring-slate-200 dark:ring-white/10 group z-10">
              <img 
                src="/images/who we are.jpg" 
                alt="Our Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#f47721]/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70"></div>
            </div>

            {/* Secondary Floating Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-50 dark:border-[#090b10] z-20 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Working together" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#f47721]/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70"></div>
            </motion.div>


          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Mission & Vision Section
      ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-8">
          
          {/* Mission Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            {/* Header */}
            <div className="flex items-center gap-8 md:gap-12 mb-8 md:mb-12 pl-2">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <div className="absolute w-full h-[1px] bg-[#f47721]"></div>
                <div className="absolute h-full w-[1px] bg-[#f47721]"></div>
              </div>
              <h3 className="text-[2rem] md:text-[2.5rem] font-medium text-slate-900 dark:text-white leading-[1.1] uppercase tracking-wide">
                Our <br/> <span className="font-bold text-[#f47721]">Mission</span>
              </h3>
            </div>
            
            {/* Card */}
            <div className="flex flex-col sm:flex-row bg-[#0c0502] rounded-[1.25rem] border border-[#2a1308] shadow-2xl flex-grow group relative overflow-hidden h-full">
              {/* Subtle orange glow */}
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[#f47721] blur-[120px] opacity-30 pointer-events-none"></div>
              
              <div className="p-8 sm:p-12 flex flex-col justify-between w-full sm:w-[55%] relative z-10">
                <p className="text-slate-300 text-[1.1rem] leading-[1.8] font-light mb-12 sm:mb-0">
                  We are a creative agency committed to delivering innovative solutions, from concept to execution, ensuring your brand's success and growth.
                </p>
                <div className="w-6 h-6 bg-[#f47721] rounded-sm mt-auto shadow-[0_0_20px_rgba(244,119,33,0.6)]"></div>
              </div>
              <div className="w-full sm:w-[45%] h-[280px] sm:h-auto p-3 sm:pl-0 sm:py-3 sm:pr-3 relative z-10">
                <video 
                  src="/images/VIDEO/mission2.mp4" 
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover rounded-[1rem] group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Vision Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Header */}
            <div className="flex items-center justify-end gap-8 md:gap-12 mb-8 md:mb-12 pr-2">
              <h3 className="text-[2rem] md:text-[2.5rem] font-medium text-slate-900 dark:text-white leading-[1.1] uppercase tracking-wide text-right">
                Our <br/> <span className="font-bold text-[#f47721]">Vision</span>
              </h3>
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <div className="absolute w-full h-[1px] bg-[#f47721]"></div>
                <div className="absolute h-full w-[1px] bg-[#f47721]"></div>
              </div>
            </div>
            
            {/* Card */}
            <div className="flex flex-col-reverse sm:flex-row bg-[#0c0502] rounded-[1.25rem] border border-[#2a1308] shadow-2xl flex-grow group relative overflow-hidden h-full">
              {/* Subtle orange glow */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#f47721] blur-[120px] opacity-30 pointer-events-none"></div>

              <div className="w-full sm:w-[45%] h-[280px] sm:h-auto p-3 sm:pr-0 sm:py-3 sm:pl-3 relative z-10">
                <video 
                  src="/images/VIDEO/vision2.mp4" 
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover rounded-[1rem] group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-end w-full sm:w-[55%] relative z-10">
                <div className="w-6 h-6 border-[1px] border-[#f47721] rounded-sm mb-12 sm:mb-auto self-start shadow-[0_0_20px_rgba(244,119,33,0.5)]"></div>
                <p className="text-slate-300 text-[1.1rem] leading-[1.8] font-light mt-auto">
                  We specialize in transforming your vision into reality, creativity with strategy to produce results. Our team works to elevate your brand.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Our Expert Section
      ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 bg-[#f47721]/10 text-[#f47721] w-fit px-5 py-2.5 rounded-full mb-6 font-semibold text-sm shadow-sm">
              <Asterisk size={18} strokeWidth={3} />
              <span>Our Expert</span>
            </div>
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-bold text-slate-800 dark:text-white tracking-tight">
              Meet Our <span className="text-[#f47721]">Tech Experts</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end justify-center md:text-right h-full pt-4 md:pt-0">
            <p className="text-slate-600 dark:text-slate-300 text-[1.1rem] leading-[1.8] max-w-lg mb-8 md:mb-6">
              Behind every fast fix is a real human who knows exactly what they're doing. Our certified IT professionals are here to solve your problems fast, friendly, and stress-free.
            </p>
            <button className="flex items-center gap-2 bg-[#f47721] hover:bg-[#d8651a] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg shadow-[#f47721]/30">
              Meet Expert
              <User size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#110905] group shadow-xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-100 dark:border-white/5 aspect-[4/4.8]">
            <img 
              src="/images/employee.jpg" 
              alt="Arif Nugroho" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Social Icons Hover */}
            <div className="absolute right-4 bottom-[7.5rem] flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20">
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Instagram size={18} /></a>
            </div>
            {/* Name Block */}
            <div className="absolute bottom-0 left-0 bg-white dark:bg-[#110905] pt-6 pr-8 pb-6 pl-8 rounded-tr-[2.5rem] w-[80%] z-10 transition-transform duration-300">
              {/* Concave curve top-left */}
              <svg className="absolute bottom-full left-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              {/* Concave curve bottom-right */}
              <svg className="absolute left-full bottom-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Arif Nugroho</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Lead IT Consultant</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#110905] group shadow-xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-100 dark:border-white/5 aspect-[4/4.8]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dina Maharani" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Social Icons Hover */}
            <div className="absolute right-4 bottom-[7.5rem] flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20">
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Instagram size={18} /></a>
            </div>
            {/* Name Block */}
            <div className="absolute bottom-0 left-0 bg-white dark:bg-[#110905] pt-6 pr-8 pb-6 pl-8 rounded-tr-[2.5rem] w-[80%] z-10 transition-transform duration-300">
              {/* Concave curve top-left */}
              <svg className="absolute bottom-full left-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              {/* Concave curve bottom-right */}
              <svg className="absolute left-full bottom-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Dina Maharani</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Tech Support Specialist</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#110905] group shadow-xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-100 dark:border-white/5 aspect-[4/4.8]">
            <img 
              src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Rizky Aditya" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Social Icons Hover */}
            <div className="absolute right-4 bottom-[7.5rem] flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20">
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-[#f47721] text-white rounded-lg flex items-center justify-center hover:bg-[#d8651a] transition-colors"><Instagram size={18} /></a>
            </div>
            {/* Name Block */}
            <div className="absolute bottom-0 left-0 bg-white dark:bg-[#110905] pt-6 pr-8 pb-6 pl-8 rounded-tr-[2.5rem] w-[80%] z-10 transition-transform duration-300">
              {/* Concave curve top-left */}
              <svg className="absolute bottom-full left-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              {/* Concave curve bottom-right */}
              <svg className="absolute left-full bottom-0 w-10 h-10 text-white dark:text-[#110905]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M 0 24 L 0 0 C 0 13.25 10.75 24 24 24 Z" />
              </svg>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Rizky Aditya</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Cloud & Infrastructure Expert</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
