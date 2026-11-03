"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MotionShield() {
  return (
    <div
      className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[360px] sm:w-[360px] md:h-[480px] md:w-[480px] lg:h-[550px] lg:w-[550px]"
      style={{ perspective: "1200px" }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <Image
          src="/orbit-ring.svg"
          alt=""
          fill
          aria-hidden="true"
          className="h-full w-full"
        />
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-center overflow-hidden rounded-full "
        style={{
          transformStyle: "preserve-3d",
          width: "55%",
          height: "55%",
        }}
        animate={{
          rotateY: [0, 12, -12, 0],
          rotateX: [0, 6, -6, 0],
          y: [0, -10, 0],
        }}
        transition={{
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <video
          src="/images/VIDEO/BrandAnimation.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}