"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MotionShield() {

  return (
    <div
      className="relative w-[380px] h-[380px] md:w-[600px] md:h-[600px] flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0  rounded-full pointer-events-none" />



      {/* Outer Animated Orbit Ring SVG — auto-plays via built-in CSS keyframes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/orbit-ring.svg"
          alt=""
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>

      {/* Animated 3D Rotating Brand Icon Container — auto-plays */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          width: "55%",
          height: "55%",
        }}
        animate={{
          rotateY: [0, 15, -15, 0],
          rotateX: [0, 5, -5, 0],
        }}
        transition={{
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Brand Animation Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none mix-blend-screen bg-transparent"
          style={{ mixBlendMode: "screen" }}
        >
          <source src="/BrandAnimation.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/BrandAnimation.webm" type="video/webm" />
          <source src="/BrandAnimation.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}