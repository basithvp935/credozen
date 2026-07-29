"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Lightbulb, UserRound, Lock } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseSection() {
  const leftFeatures = [
    {
      title: "Technical Expertise",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: Target,
    },
    {
      title: "Innovation & Adaptability",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: Lightbulb,
    }
  ];

  const rightFeatures = [
    {
      title: "Effective Communication",
      desc: "A reputable IT company should possess a high level of technical expertise.",
      icon: UserRound,
    },
    {
      title: "Security And Compliance",
      desc: "An IT company must prioritize cybersecurity and data protection.",
      icon: Lock,
    }
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Expert Team" },
    { value: 15, suffix: "K", label: "Client" },
    { value: 20, suffix: "+", label: "Branch Office" },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#130b1c] text-white overflow-hidden font-sans transition-colors duration-300">
      {/* Hero-matched Background Gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.18),_rgba(195,84,15,0.12),_transparent_70%)] blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#5b3181]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[700px] h-[700px] bg-[#932574]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero-matched Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1300px] relative z-10">

        {/* Section Heading — matching services section style */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
          >
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[3rem] leading-[1.15] text-white mb-5 tracking-tight font-extrabold"
          >
            Magic Behind Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-light drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
            >
              IT Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-[17px] leading-relaxed font-normal mb-8 lg:mb-16"
          >
            We begin by conducting a comprehensive needs assessment to understand your specific requirements, challenges, and goals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 lg:gap-8 items-stretch mb-16 lg:mb-20">

          {/* Left Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {leftFeatures.map((feature, idx) => (
              <motion.div
                key={`left-${idx}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#1b1028]/60 backdrop-blur-xl border border-purple-900/40 p-6 lg:p-8 flex items-center justify-between gap-6 transition-all duration-500 hover:bg-[#231534]/70 hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(195,53,148,0.25)] hover:-translate-y-1 cursor-pointer"
              >
                {/* Top accent highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f58619]/40 to-transparent rounded-t-3xl" />

                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-[#f58619] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed">{feature.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(195,53,148,0.4)] transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                    }}
                  >
                    <feature.icon size={28} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#f58619]/0 to-transparent group-hover:via-[#f58619]/70 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Center Brand Icon with 3D Rotating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-center items-center h-[400px] lg:h-[480px] w-full"
          >
            <div className="relative flex items-center justify-center w-[280px] h-[280px] lg:w-[340px] lg:h-[340px]">
              {/* Outer Orbit Ring 1 */}
              <div
                className="absolute inset-[-30px] rounded-full border border-purple-500/20"
                style={{
                  animation: "spin3d 12s linear infinite",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f58619] shadow-[0_0_12px_rgba(245,134,25,0.8)]" />
              </div>

              {/* Outer Orbit Ring 2 */}
              <div
                className="absolute inset-[-60px] rounded-full border border-[#c33594]/15"
                style={{
                  animation: "spin3dReverse 18s linear infinite",
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#c33594] shadow-[0_0_12px_rgba(195,53,148,0.8)]" />
              </div>

              {/* Outer Orbit Ring 3 */}
              <div
                className="absolute inset-[-90px] rounded-full border border-[#7b51a1]/10"
                style={{
                  animation: "spin3d 25s linear infinite",
                }}
              >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#7b51a1] shadow-[0_0_10px_rgba(123,81,161,0.7)]" />
              </div>

              {/* Glowing Backdrop */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(195,53,148,0.15),_rgba(123,81,161,0.08),_transparent_70%)] blur-[40px]" />

              {/* 3D Rotating Brand Icon Container */}
              <div
                className="relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-[32px] bg-[#1b1028]/60 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(195,53,148,0.2)]"
                style={{
                  animation: "rotate3d 8s ease-in-out infinite",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Glass reflection */}
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[32px]" />

                <Image
                  src="/icon.png"
                  alt="CredoZen Brand"
                  width={140}
                  height={140}
                  className="relative z-10 drop-shadow-[0_0_30px_rgba(245,134,25,0.4)] lg:w-[170px] lg:h-[170px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {rightFeatures.map((feature, idx) => (
              <motion.div
                key={`right-${idx}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#1b1028]/60 backdrop-blur-xl border border-purple-900/40 p-6 lg:p-8 flex items-center justify-between gap-6 transition-all duration-500 hover:bg-[#231534]/70 hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(195,53,148,0.25)] hover:-translate-y-1 cursor-pointer"
              >
                {/* Top accent highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f58619]/40 to-transparent rounded-t-3xl" />

                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-[#f58619] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed">{feature.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(195,53,148,0.4)] transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                    }}
                  >
                    <feature.icon size={28} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#f58619]/0 to-transparent group-hover:via-[#f58619]/70 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>

        </div>


      </div>

      {/* CSS Keyframe Animations for 3D Rotating Effects */}
      <style jsx>{`
        @keyframes rotate3d {
          0% {
            transform: perspective(1000px) rotateY(0deg) rotateX(5deg);
          }
          25% {
            transform: perspective(1000px) rotateY(15deg) rotateX(-5deg);
          }
          50% {
            transform: perspective(1000px) rotateY(0deg) rotateX(5deg);
          }
          75% {
            transform: perspective(1000px) rotateY(-15deg) rotateX(-5deg);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg) rotateX(5deg);
          }
        }
        @keyframes spin3d {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        @keyframes spin3dReverse {
          0% {
            transform: rotateZ(360deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }
      `}</style>
    </section>
  );
}
