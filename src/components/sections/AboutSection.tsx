"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, Cpu, Zap, ShieldCheck, Rocket, Award, Users } from "lucide-react";

/* ──────────────────────────────────────────────
   Animated Counter Component
────────────────────────────────────────────── */
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * to));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const featureVectorCards = [
    {
      title: "Web & UI/UX",
      desc: "Pixel-perfect, high performance web apps",
      icon: Code2,
      color: "#f58619",
    },
    {
      title: "Mobile Solutions",
      desc: "iOS & Android native experiences",
      icon: Smartphone,
      color: "#c33594",
    },
    {
      title: "Enterprise Systems",
      desc: "Scalable cloud & backend platforms",
      icon: Cpu,
      color: "#7b51a1",
    },
    {
      title: "Digital Growth",
      desc: "eCommerce, LMS & brand marketing",
      icon: Zap,
      color: "#f58619",
    },
  ];

  const fullWidthStats = [
    {
      to: 200,
      suffix: "+",
      label: "Projects Delivered",
      icon: Rocket,
      color: "#f58619",
    },
    {
      to: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      icon: ShieldCheck,
      color: "#c33594",
    },
    {
      to: 50,
      suffix: "+",
      label: "Tech Experts",
      icon: Users,
      color: "#7b51a1",
    },
    {
      to: 12,
      suffix: "+",
      label: "Years Experience",
      icon: Award,
      color: "#f58619",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 rounded-3xl sm:rounded-4xl overflow-hidden text-slate-900 transition-colors duration-300 relative bg-[#F4EBE1] backdrop-blur-xl"
    >
      {/* Soft Glassy Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f58619]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#c33594]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1300px] relative z-10">
        {/* Top Content Grid: Left Vector Cards & Right Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vector Icon Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4"
          >
            {featureVectorCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md hover:shadow-xl hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-900/5 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: card.color }}
                    >
                      <Icon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* About Us Badge - Pure Gradient Text, borders and bg removed */}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
            >
              ABOUT US
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-slate-900 mb-4 tracking-tight">
              <span className="font-bold">Comprehensive </span>
              <span
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light"
              >
                IT{" "}
              </span>
              <span className="font-bold">Solution</span>
              <br className="hidden md:block" />
              <span
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light"
              >
                Growth{" "}
              </span>
              <span className="font-bold">& Efficiency</span>
            </h2>

            {/* Paragraph Text */}
            <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              At CREDOZEN LLP, we specialize in empowering businesses with
              cutting-edge technology solutions—from web & mobile app
              development to branding, LMS, and e-commerce expertise—bringing
              together creativity, technical precision, and proven results.
            </p>
          </motion.div>
        </div>

        {/* Full-Width Animated Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-12 md:mt-16 w-full rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-5 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center divide-x-0 md:divide-x divide-slate-200/70">
            {fullWidthStats.map((s, idx) => {
              const StatIcon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`flex flex-col items-center text-center ${idx !== 0 ? "md:pl-6" : ""
                    }`}
                >
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/5 mb-2.5 sm:mb-3">
                    <StatIcon size={22} className="sm:w-6 sm:h-6" style={{ color: s.color }} />
                  </div>
                  <span
                    style={{
                      background:
                        "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-1.5 sm:mb-2"
                  >
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] font-bold text-slate-600">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
