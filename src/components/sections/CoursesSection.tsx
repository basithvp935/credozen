"use client";

import { motion } from "framer-motion";

export default function CoursesSection() {
  return (
    <section className="py-32 relative text-white bg-[#050508]" id="courses">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
        >
          Courses
        </motion.h2>
        <p className="text-white/50 text-sm">Our comprehensive learning tracks and services.</p>
      </div>
    </section>
  );
}
