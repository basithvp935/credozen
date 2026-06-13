"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const works = [
  {
    id: 1,
    title: "Digital Marketing",
    tag: "Growth & Strategy",
    image: "/images/digital_marketing.png",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    glow: "rgba(139,92,246,0.35)",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    tag: "Sales & Conversion",
    image: "/images/ecommerce_solutions.png",
    accent: "from-blue-500/30 to-cyan-500/10",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    id: 3,
    title: "Branding & UI/UX",
    tag: "Design & Identity",
    image: "/images/branding_uiux.png",
    accent: "from-pink-500/30 to-rose-500/10",
    glow: "rgba(236,72,153,0.35)",
  },
  {
    id: 4,
    title: "ERP Solutions",
    tag: "Enterprise & Scale",
    image: "/images/team_working_office.png",
    accent: "from-emerald-500/30 to-teal-500/10",
    glow: "rgba(16,185,129,0.35)",
  },
];

/* ─── Single Card ──────────────────────────────────────────────────────────── */
function ShowcaseCard({ work }: { work: (typeof works)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[440px] group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card shell */}
      <div
        className="relative rounded-[32px] overflow-hidden border border-slate-100 transition-all duration-500 bg-white p-4 md:p-5"
        style={{
          boxShadow: hovered
            ? `0 12px 40px -12px ${work.glow}`
            : "0 4px 20px -8px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
          transition: "box-shadow 0.5s ease, transform 0.4s ease",
        }}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Colour accent on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${work.accent} transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          />

          {/* Top badges row */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            {/* Category tag */}
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-slate-200/50 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
              <Sparkles size={11} className="text-[#f47721]" />
              {work.tag}
            </span>

            {/* Arrow icon */}
            <div
              className="w-10 h-10 flex items-center justify-center border border-slate-200/50 backdrop-blur-md transition-all duration-300 rounded-full shadow-sm"
              style={{
                background: hovered ? "#f47721" : "rgba(255,255,255,0.9)",
                borderColor: hovered ? "#f47721" : "rgba(226,232,240,0.5)",
                transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <ArrowUpRight size={18} className={hovered ? "text-white" : "text-slate-800"} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="px-2 pb-2 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-[26px] font-extrabold text-slate-900 leading-tight">
            {work.title}
          </h3>
          {/* Animated underline */}
          <div
            className="mt-3 h-[3px] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-500"
            style={{ width: hovered ? "40%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */
export default function WorkShowcaseSection() {
  const scrollItems = [...works, ...works, ...works];

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
      className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden transition-colors duration-300"
      id="work-showcase"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />
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
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 md:mb-6"
            >
              WORK SHOWCASE
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-slate-900"
            >
              <span className="text-slate-900">We develop & create</span>
              <br />
              <span className="text-slate-900">digital </span>
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
              className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
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
                  <p className="text-3xl md:text-4xl font-medium text-slate-900 mb-1">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-slate-500 text-[11px] md:text-xs font-semibold tracking-wider uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Marquee Slider ── */}
      <div className="relative w-full flex overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 md:gap-8 px-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {scrollItems.map((work, index) => (
            <ShowcaseCard key={`${work.id}-${index}`} work={work} />
          ))}
        </motion.div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-16 relative z-10"
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
        <p className="text-slate-500 text-sm mt-4">
          Free consultation · No commitment required
        </p>
      </motion.div>
    </section>
  );
}
