"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock, X } from "lucide-react";

export default function CareerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Tucson, AZ",
      type: "Full-Time",
      description: "We are looking for an experienced Full Stack Developer to lead development on our core web applications using Next.js and Node.js."
    },
    {
      id: 2,
      title: "UI/UX Product Designer",
      department: "Design",
      location: "Tucson, AZ",
      type: "Full-Time",
      description: "Join our creative team to craft stunning, user-centric interfaces and experiences for our innovative digital products."
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-Time",
      description: "Drive our digital presence forward by creating and executing data-driven marketing campaigns and SEO strategies."
    },
    {
      id: 4,
      title: "Cyber Security Analyst",
      department: "Security",
      location: "Hybrid / Tucson, AZ",
      type: "Contract",
      description: "Help us secure our infrastructure and protect our clients' data by implementing state-of-the-art security protocols."
    }
  ];

  return (
    <main className="bg-slate-50 dark:bg-[#090b10] min-h-screen text-slate-900 dark:text-slate-200 selection:bg-[#f47721] selection:text-white pb-20">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/employee.jpg" 
            alt="Career Banner" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0a192f]/80 mix-blend-multiply z-0"></div>
          <div 
            className="absolute inset-0 opacity-[0.05] z-0" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-widest uppercase shadow-lg"
          >
            Join Our Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Build Your <span className="text-[#f47721]">Careers</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">Careers</span>
          </motion.div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg className="block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#f2f4f6] dark:fill-[#090b10]"></path>
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Introduction Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#f2f4f6] dark:bg-[#090b10] pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6"
          >
            Shape the Future with <span className="text-[#f47721]">Innovation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            We are a team of passionate creators, engineers, and strategists. If you love solving complex problems, building beautiful digital products, and working in a collaborative environment, we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Job Listings Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#f2f4f6] dark:bg-[#090b10] pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-[#2a2a2a] dark:text-white mb-2">Open <span className="text-[#f47721]">Positions</span></h3>
              <p className="text-slate-500 dark:text-slate-400">Find your next opportunity and join our growing team.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-white dark:bg-gradient-to-b dark:from-[#11131c] dark:to-[#0a0b12] p-8 rounded-[2rem] shadow-lg shadow-black/5 hover:shadow-[0_15px_40px_-10px_rgba(244,119,33,0.15)] dark:hover:shadow-[0_15px_40px_-10px_rgba(244,119,33,0.25)] border border-slate-200 dark:border-white/5 hover:border-[#f47721]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow Line effect */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f47721] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-6">
                  <span className="bg-[#f47721]/10 text-[#f47721] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-[#f47721]/20 group-hover:bg-[#f47721] group-hover:text-white transition-colors duration-300">
                    {job.department}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-[#2a2a2a] dark:text-white mb-4 group-hover:text-[#f47721] transition-colors duration-300">
                  {job.title}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-light">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
                  <div className="flex items-center gap-2 group-hover:text-[#2a2a2a] dark:group-hover:text-white transition-colors">
                    <MapPin size={16} className="text-[#f47721]" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-[#2a2a2a] dark:group-hover:text-white transition-colors">
                    <Clock size={16} className="text-[#f47721]" />
                    {job.type}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/10 group-hover:border-[#f47721]/30 transition-colors duration-500">
                  <button 
                    onClick={() => {
                      setSelectedJob(job.title);
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2a2a2a] dark:text-white group-hover:text-[#f47721] uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         CTA Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#f2f4f6] dark:bg-[#090b10] pb-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 md:p-16 overflow-hidden bg-white dark:bg-[#111624] shadow-2xl"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#f47721]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#2f76f6]/10 blur-3xl"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#f47721]/10 rounded-2xl flex items-center justify-center text-[#f47721] mb-6 border border-[#f47721]/20">
                <Briefcase size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6 leading-tight tracking-tight">
                Don't see a fit?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.
              </p>
              
              <button className="bg-[#f47721] hover:bg-[#d8651a] text-white font-bold px-10 py-4 rounded-full transition-colors shadow-lg shadow-[#f47721]/30 uppercase tracking-wider text-sm">
                Submit Open Application
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl bg-white dark:bg-[#111624] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 mt-16 md:mt-20"
            >
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-[#f2f4f6] dark:bg-[#090b10]">
                <div>
                  <h3 className="text-2xl font-bold text-[#2a2a2a] dark:text-white">Apply for Role</h3>
                  {selectedJob && <p className="text-sm text-[#f47721] mt-1 font-medium">{selectedJob}</p>}
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-[#f47721] bg-white dark:bg-[#111624] rounded-full hover:bg-slate-100 dark:hover:bg-[#1a2133] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-[#090b10] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#2a2a2a] dark:text-white focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Phone No</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 dark:bg-[#090b10] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#2a2a2a] dark:text-white focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 dark:bg-[#090b10] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#2a2a2a] dark:text-white focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">Address</label>
                    <textarea 
                      required
                      placeholder="Your full address..."
                      rows={3}
                      className="w-full bg-slate-50 dark:bg-[#090b10] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-[#2a2a2a] dark:text-white focus:outline-none focus:border-[#f47721] focus:ring-1 focus:ring-[#f47721] transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#f47721] hover:bg-[#d8651a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#f47721]/30 hover:shadow-[#f47721]/50 mt-4 uppercase tracking-widest text-sm"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
