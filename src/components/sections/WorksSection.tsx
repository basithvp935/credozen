"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projectsData, ProjectCategory, ProjectData } from "@/data/projectsData";

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Link href={`/works/${project.slug}`} className="block w-full">
      {/* Shorter Height (h-[300px] sm:h-[320px]) & Wider Proportions */}
      <div className="relative rounded-[2.2rem] sm:rounded-[2.4rem] overflow-hidden border border-white/15 group h-[300px] sm:h-[320px] shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_70px_rgba(244,119,33,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f47721]/55 bg-[#0c0d12] cursor-pointer font-sans">
        
        {/* Background Image & Ambient Theme Gradient */}
        <div className={`absolute inset-0 ${project.gradientClass} opacity-90`} />
        <img
          src={project.bgImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55 sm:opacity-65 mix-blend-normal transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/85 pointer-events-none" />

        {/* Card Content Wrapper */}
        <div className="relative w-full h-full flex items-center justify-between px-4 sm:px-7">
          
          {/* Left Side: Proportional Ultra-Realistic Titanium Phone Mockup */}
          <div className="relative z-20 w-[130px] sm:w-[150px] h-[250px] sm:h-[280px] shrink-0 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1.5 drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] flex flex-col justify-center my-auto">
            
            {/* Outer Metallic Titanium Frame */}
            <div className="w-full h-full rounded-[2rem] sm:rounded-[2.3rem] p-[3px] sm:p-[3.5px] bg-gradient-to-b from-[#71717a] via-[#3f3f46] to-[#18181b] shadow-2xl relative overflow-hidden flex flex-col border border-white/25">
              
              {/* Physical Side Buttons */}
              <div className="absolute top-[22%] -left-[2px] w-[2px] h-3.5 bg-[#71717a] rounded-l-sm" />
              <div className="absolute top-[33%] -left-[2px] w-[2px] h-6 bg-[#71717a] rounded-l-sm" />
              <div className="absolute top-[46%] -left-[2px] w-[2px] h-6 bg-[#71717a] rounded-l-sm" />
              <div className="absolute top-[30%] -right-[2px] w-[2px] h-8 bg-[#71717a] rounded-r-sm" />

              {/* Inner Dark Glass Bezel */}
              <div className="w-full h-full rounded-[1.85rem] sm:rounded-[2.1rem] bg-black p-[4.5px] sm:p-[5px] relative flex flex-col overflow-hidden">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-[8px] sm:top-[10px] left-1/2 -translate-x-1/2 w-13 sm:w-15 h-3.5 bg-black rounded-full z-30 flex items-center justify-between px-1.5 border border-white/15 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c141d] border border-white/20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#181d24]" />
                </div>

                {/* Glass Glare Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] pointer-events-none z-20 rounded-[1.7rem]" />

                {/* Screen Content */}
                <div className="w-full h-full rounded-[1.6rem] sm:rounded-[1.8rem] overflow-hidden relative bg-[#090b10]">
                  <img
                    src={project.screenImage}
                    alt={`${project.title} app interface`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-top"
                  />
                  
                  {/* Top clock / status bar and bottom label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/45 flex flex-col justify-between p-2 z-10 pointer-events-none">
                    <div className="flex items-center justify-between mt-0.5 text-[7px] font-bold text-white/95 px-1">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        <span>5G</span>
                      </div>
                    </div>
                    <div>
                      <span className="inline-block text-[6.5px] sm:text-[7.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f47721] text-white shadow-sm mb-0.5">
                        LIVE APP
                      </span>
                      <p className="text-white text-[10.5px] sm:text-[11.5px] font-bold leading-tight truncate">{project.title}</p>
                    </div>
                  </div>

                  {/* iOS Bottom Home Bar */}
                  <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-10 sm:w-12 h-[2px] bg-white/85 rounded-full z-20 shadow-sm" />
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Wider & Compact Frosted Glass Info Box */}
          <div className="relative z-10 w-[64%] sm:w-[67%] max-w-[440px] rounded-[1.6rem] sm:rounded-[1.9rem] p-4 sm:p-5.5 backdrop-blur-2xl bg-black/45 dark:bg-black/55 border border-white/15 shadow-[0_15px_50px_rgba(0,0,0,0.7)] group-hover:border-[#f47721]/50 group-hover:bg-black/65 transition-all duration-500 flex flex-col justify-between my-auto">
            <div>
              <h3 className="text-lg sm:text-[22px] font-medium text-white tracking-tight mb-2 group-hover:text-[#f47721] transition-colors duration-300 truncate font-sans">
                {project.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-[13.5px] leading-relaxed mb-3.5 font-normal line-clamp-3 text-justify hyphens-auto">
                {project.description}
              </p>
            </div>

            {/* App Store Icons */}
            <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/10">
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-[#f47721] transition-all duration-300 cursor-pointer text-white shadow-md">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.35c.64-.78 1.08-1.87.96-2.95-.92.04-2.04.62-2.7 1.39-.58.67-1.1 1.78-.96 2.84 1.03.08 2.07-.5 2.7-1.28"/>
                </svg>
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-[#f47721] transition-all duration-300 cursor-pointer text-white shadow-md">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default function WorksSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = [
    "ALL",
    "MOBILE APPLICATIONS",
    "WEBSITE DEVELOPMENT",
    "DIGITAL MARKETING"
  ];

  const filteredProjects = projectsData.filter(project => project.category.includes(activeTab));

  return (
    <section className="bg-[#090b10] font-sans w-full text-white py-16 lg:py-24 overflow-hidden" id="works">
      
      {/* Section Heading */}
      <div className="container mx-auto px-4 max-w-[1440px] pb-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight mb-3 text-white font-sans">
            Our Recent <span className="text-[#f47721]">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mt-3 text-base sm:text-lg leading-relaxed">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 max-w-[1440px] py-8 md:py-12">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 border-b border-gray-800/80 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-4 px-2 text-xs md:text-sm tracking-wider uppercase font-semibold transition-colors relative whitespace-nowrap
                ${activeTab === category 
                  ? "text-[#f47721]" 
                  : "text-gray-400 hover:text-white"
                }
              `}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="active-works-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f47721]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Increased Width Grid (max-w-[1440px]) & Shorter Card Heights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1440px]">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
}
