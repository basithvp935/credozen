"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PVK Enterprises — Production Workflow",
    tags: ["Manufacturing", "Traceability"],
    image: "/images/ecommerce_solutions.png",
  },
  {
    id: 2,
    title: "Global Logistics — Operations Dashboard",
    tags: ["Logistics", "Real-time"],
    image: "/images/digital_marketing.png",
  },
  {
    id: 3,
    title: "PVK Enterprises — E-Catalogue",
    tags: ["Catalogue", "Responsive"],
    image: "/images/branding_uiux.png",
  },
  {
    id: 4,
    title: "Smart Analytics — Data Visualization",
    tags: ["Analytics", "Enterprise"],
    image: "/images/team_working_office.png",
  },
  {
    id: 5,
    title: "Nexus — Healthcare Management System",
    tags: ["Healthcare", "Security"],
    image: "/images/ecommerce_solutions.png",
  },
  {
    id: 6,
    title: "Aurora — E-Commerce Storefront",
    tags: ["E-Commerce", "UI/UX"],
    image: "/images/digital_marketing.png",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="flex flex-col mb-16 md:mb-32 group cursor-pointer"
  >
    {/* Tags */}
    <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
      {project.tags.map((tag: string) => (
        <span 
          key={tag} 
          className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-transparent text-[10px] md:text-xs font-semibold tracking-widest text-gray-400 uppercase transition-colors duration-300 group-hover:border-white/30 group-hover:text-gray-200"
        >
          {tag}
        </span>
      ))}
    </div>
    
    {/* Title & Arrow */}
    <div className="flex items-start md:items-center justify-between mb-8 gap-4">
      <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-white group-hover:text-gray-300 transition-colors duration-300 leading-tight">
        {project.title}
      </h3>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white group-hover:border-white">
        <ArrowUpRight size={20} strokeWidth={1.5} className="text-white group-hover:text-black transition-colors duration-300" />
      </div>
    </div>

    {/* Image Container */}
    <div className="w-full relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#111] aspect-[4/3] lg:aspect-[1.2/1]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none" />
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#f47721]" />
            <span className="text-[#f47721] font-bold tracking-[0.2em] uppercase text-xs">
              Portfolio
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Selected Works
          </motion.h2>
        </div>

        {/* Two Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
          
          {/* Left Column (Even indexes: 0, 2) */}
          <div className="flex flex-col">
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Right Column (Odd indexes: 1, 3) - Offset down on desktop */}
          <div className="flex flex-col md:mt-32">
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
}
