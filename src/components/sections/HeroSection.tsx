"use client";

import React from "react";
import MotionShield from "@/components/herosection/MotionShield";
import BannerCookies from "@/components/herosection/BannerCookies";
import FooterBadges from "@/components/herosection/FooterBadges";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";

export default function CyberCrestHero() {
  return (
    <main className="relative min-h-screen bg-[#130b1c] text-white font-sans overflow-x-hidden selection:bg-[#f58619] selection:text-white">
      {/* Darker Purple/Magenta/Orange Glassy Background Gradients & Mesh Accent Orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.18),_rgba(195,84,15,0.12),_transparent_70%)] blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#5b3181]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[700px] h-[700px] bg-[#932574]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      {/* Hero Section Container */}
      <section className="relative z-10 max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-20 min-h-[calc(100vh-60px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Glassmorphic Main Card Frame */}
        <div className="relative p-5 sm:p-7 lg:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-hidden">

          {/* Subtle Top & Bottom Glowing Border Lines */}
          <div className="absolute -top-px left-12 w-48 h-px bg-gradient-to-r from-transparent via-[#f58619] to-transparent opacity-80" />
          <div className="absolute -bottom-px right-12 w-48 h-px bg-gradient-to-r from-transparent via-[#c33594] to-transparent opacity-80" />

          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 text-xs uppercase tracking-[0.2em] text-[#00e5ff] font-semibold backdrop-blur-sm shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00ffa3] animate-pulse" />
              Expert-Led Cybersecurity Compliance
            </div> */}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Elevate Your <br />
              <span
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
              >
                Cybersecurity
              </span> <br />
              Compliance
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-normal">
              CyberCrest is your trusted assessment and advisory partner with proven
              methodologies and dependable consultants to ensure your compliance
              and information security success.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                style={{
                  background:
                    "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                }}
                className="relative group px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-white text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,134,25,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
              >
                Talk to an Expert
              </Link>

              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:border-white/30 hover:scale-[1.02] active:scale-95 text-gray-300 hover:text-white">
                <span>Explore Services</span>
                <ArrowRight size={14} className="text-[#00e5ff]" />
              </Link>
            </div>

            {/* Quick Metrics / Authority Indicators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#00ffa3] shrink-0" />
                <span>100% Audit Readiness</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#00e5ff] shrink-0" />
                <span>Certified Assessors</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (Auto-playing 3D Brand Icon with Outer Orbit Ring) */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-4 sm:py-6 lg:py-0">
            <MotionShield />
          </div>

        </div>
      </section>

      {/* Footer Badges */}
      <FooterBadges />

      {/* Cookie Banner */}
      <BannerCookies />
    </main>
  );
}