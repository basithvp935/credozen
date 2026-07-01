"use client";

import { motion, animate, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const works = [
  {
    id: 1,
    title: <>Frontend Engineering <br className="hidden lg:block" /><span className="text-[#f47721]">& UI</span></>,
    description: "Crafting pixel-perfect, highly responsive interfaces that deliver exceptional digital experiences across all devices.",
    image: "/images/smart_analytics_hand.png",
  },
  {
    id: 2,
    title: "Enterprise Workflow Platform",
    description: "Streamlines operations and automates key workflows for enterprise teams.",
    image: "/images/dummy_dashboard.png",
  },
  {
    id: 3,
    title: "Enterprise Workflow Platform",
    description: "Streamlines operations and automates key workflows for enterprise teams.",
    image: "/images/dummy_ecommerce.png",
  },
  {
    id: 4,
    title: "Digital Marketing Solutions",
    description: "Drive growth and elevate your brand with data-driven marketing strategies.",
    image: "/images/dummy_marketing.png",
  },
  {
    id: 5,
    title: "Brand Identity & UI/UX",
    description: "Craft stunning visual identities and intuitive user interfaces.",
    image: "/images/dummy_branding.png",
  },
];

/* ─── Bento Cards ──────────────────────────────────────────────────────────── */

function FeaturedCard({ work }: { work: (typeof works)[0] }) {
  return (
    <div className="col-span-1 lg:col-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 bg-[#0a0300] hover:border-white/20 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(244,119,33,0.15)] group flex flex-col lg:flex-row min-h-[400px]">
      
      {/* Background Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0800] via-[#994000] to-[#f47721] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />

      {/* Text Content */}
      <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] mb-6">
          {work.title}
        </h3>
        <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
          {work.description}
        </p>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full flex items-center justify-center overflow-hidden">
        <Image
          src={work.image}
          alt={typeof work.title === 'string' ? work.title : 'Project Image'}
          fill
          className="object-cover lg:object-contain lg:object-right transition-transform duration-700 group-hover:scale-105 opacity-90 z-10 hue-rotate-30"
        />
        {/* Color overlay to help blend the image's original red into orange */}
        <div className="absolute inset-0 bg-[#f47721] mix-blend-color opacity-40 pointer-events-none z-15" />
      </div>
    </div>
  );
}

function SmallCard({ work }: { work: (typeof works)[0] }) {
  return (
    <div className="col-span-1 relative rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#f47721]/50 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(244,119,33,0.2)] min-h-[400px] group cursor-pointer block">
      
      {/* Background Image filling the entire card */}
      <Image
        src={work.image}
        alt={typeof work.title === 'string' ? work.title : 'Project Image'}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />

      {/* Gradient overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
      
      {/* Subtle Orange Tint Overlay to match the theme */}
      <div className="absolute inset-0 bg-[#f47721] mix-blend-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      {/* Text Content (Floating at bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        
        {/* Floating Glass Box for Text */}
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-5 transition-all duration-500 group-hover:bg-black/60 group-hover:border-[#f47721]/30">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-xl md:text-[22px] font-bold text-white leading-tight mb-2 group-hover:text-[#f47721] transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed line-clamp-2">
                {work.description}
              </p>
            </div>
            
            {/* Arrow Icon */}
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#f47721] group-hover:border-[#f47721] transition-all duration-300">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export default function WorkShowcaseSection() {
  /* Animated counter for stats */
  const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
      if (!inView) return;
      const node = ref.current;
      if (!node) return;
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = Math.floor(v) + suffix;
        },
      });
      return () => controls.stop();
    }, [to, suffix, inView]);
    return <span ref={ref}>0{suffix}</span>;
  };

  const stats = [
    { value: 250, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Expert Team Members" },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden transition-colors duration-300 bg-[#0a192f]/95 bg-blend-overlay"
      style={{ backgroundImage: "url('/images/workshowcase.jpg')" }}
      id="work-showcase"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full bg-blue-800/5 blur-[100px] pointer-events-none" />

      {/* ── Split Header ── */}
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] mb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Subtitle & Heading */}
          <div>
            {/* Subtitle / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 md:mb-6"
            >
              WORK SHOWCASE
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white"
            >
              <span className="text-white">We develop & create</span>
              <br />
              <span className="text-white">digital </span>
              <span className="text-[#f47721]">future</span>
            </motion.h2>
          </div>

          {/* Right Column: Description & Stats */}
          <div className="flex flex-col justify-start pt-2 lg:pt-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
            >
              From custom software to secure cloud, we ensure you get the right tools to lead in today's digital world. Our experts create tailored digital solutions that help your business grow and adapt.
            </motion.p>

            {/* Stats row integrated into right column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-10 md:gap-16"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-left">
                  <p className="text-3xl md:text-4xl font-medium text-white mb-1">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-gray-400 text-[11px] md:text-xs font-semibold tracking-wider uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="container mx-auto px-4 md:px-12 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Top Full Width Featured Card */}
          <FeaturedCard work={works[0]} />
          
          {/* Middle Two Half Width Cards */}
          <SmallCard work={works[1]} />
          <SmallCard work={works[2]} />

          {/* Bottom Two Half Width Cards */}
          <SmallCard work={works[3]} />
          <SmallCard work={works[4]} />
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-20 relative z-10"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,119,33,0.5)]"
          style={{
            background: "#f47721",
          }}
        >
          Start Your Project
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </a>
      </motion.div>
    </section>
  );
}
