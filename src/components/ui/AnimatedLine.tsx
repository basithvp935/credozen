"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedLineProps {
  path: string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function AnimatedLine({ 
  path, 
  width = "100%", 
  height = "100%", 
  viewBox = "0 0 100 100", 
  className = "",
  color = "var(--color-brand-blue)",
  strokeWidth = 4
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <svg 
        width={width} 
        height={height} 
        viewBox={viewBox} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Background track line (faint) */}
        <path 
          d={path} 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeOpacity={0.1}
          vectorEffect="non-scaling-stroke"
        />
        {/* Animated line */}
        <motion.path
          d={path}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
