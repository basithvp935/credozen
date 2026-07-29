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
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 pt-8 pb-6 relative z-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-slate-900 mb-4 tracking-tight">
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
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-[#1a1a2e]/70 mr-2">
              See all / {panels.length}{" "}
              <ExternalLink size={14} className="inline" />
            </span>
            <button className="w-10 h-10 rounded-full border border-[#1a1a2e]/15 bg-white flex items-center justify-center text-[#1a1a2e]/60 hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#1a1a2e]/15 bg-white flex items-center justify-center text-[#1a1a2e]/60 hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrolling Panels */}
        <div className="flex-1 overflow-hidden px-6 md:px-12 lg:px-16 pb-8">
          <motion.div style={{ x }} className="flex w-[300vw] h-full gap-6">
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className="w-[calc(100vw-3rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)] h-full relative shrink-0 rounded-3xl overflow-hidden group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Light Glassmorphic Info Card — bottom right */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-[340px] bg-white/70 backdrop-blur-2xl border border-white/60 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {panel.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#1a1a2e]/8 text-[#1a1a2e]/70 border border-[#1a1a2e]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2 tracking-tight">
                    {panel.title}
                  </h3>
                  <p className="text-[#1a1a2e]/70 text-sm leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                {/* Panel index indicator — top left */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-mono tracking-widest">
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
