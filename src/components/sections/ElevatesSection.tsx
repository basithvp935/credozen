"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const panels = [
  {
    id: "tns",
    title: "TNS",
    description:
      "A comprehensive platform delivering seamless digital wallet, contactless payment and financial technology management.",
    src: "/images/products/tns.jpg",
    tags: ["Mobile App", "FinTech"],
  },
  {
    id: "educapilot",
    title: "EducaPilot",
    description:
      "An intelligent education platform empowering students and institutions with AI-driven learning tools and progress analytics.",
    src: "/images/products/educa.jpg",
    tags: ["EdTech", "AI"],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    description:
      "A feature-rich marketplace solution with modern storefront design, inventory management, and secure payment integration.",
    src: "/images/dummy_ecommerce.png",
    tags: ["Marketplace", "Payments"],
  },
];

export default function ElevatesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    mass: 0.1,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-66.66666666666667%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[450vh] bg-[#f7f5f0] transition-colors duration-300 rounded-4xl pb-12"
      id="our-products"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Section Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-6 sm:pt-8 pb-4 sm:pb-6 relative z-20">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-slate-900 tracking-tight">
              <span className="font-bold">Our </span>
              <span
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Products
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-[#1a1a2e]/70 mr-2">
              See all / {panels.length}{" "}
              <ExternalLink size={14} className="inline" />
            </span>
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#1a1a2e]/15 bg-white flex items-center justify-center text-[#1a1a2e]/60 hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#1a1a2e]/15 bg-white flex items-center justify-center text-[#1a1a2e]/60 hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrolling Panels */}
        <div className="flex-1 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 pb-6 sm:pb-8">
          <motion.div style={{ x }} className="flex w-[300vw] h-full gap-4 sm:gap-6">
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)] h-full relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden group"
              >
                {/* Full-bleed Product Image */}
                <Image
                  src={panel.src}
                  alt={panel.title}
                  fill
                  priority={index === 0}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />

                {/* Subtle gradient overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Light Glassmorphic Info Card — bottom right */}
                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:bottom-10 md:right-10 max-w-none md:max-w-[340px] bg-white/80 backdrop-blur-2xl border border-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                  {/* Tags */}
                  <div className="flex gap-2 mb-2 sm:mb-3">
                    {panel.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#1a1a2e]/8 text-[#1a1a2e]/70 border border-[#1a1a2e]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#1a1a2e] mb-1 sm:mb-2 tracking-tight">
                    {panel.title}
                  </h3>
                  <p className="text-[#1a1a2e]/80 text-xs sm:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {panel.description}
                  </p>
                </div>

                {/* Panel index indicator — top left */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3.5 py-1 text-white text-[11px] sm:text-xs font-mono tracking-widest">
                  {String(index + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
