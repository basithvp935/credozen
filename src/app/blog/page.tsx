"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Digital Transformation",
      excerpt: "Explore how artificial intelligence is reshaping industries and driving unprecedented growth in modern businesses.",
      category: "Technology",
      date: "Oct 15, 2024",
      author: "Admin",
      image: "/images/tech_discovery.png"
    },
    {
      id: 2,
      title: "Mastering UI/UX Design Trends in 2024",
      excerpt: "Discover the top design trends that are captivating users and creating seamless digital experiences.",
      category: "Design",
      date: "Sep 28, 2024",
      author: "Admin",
      image: "/images/branding_uiux.png"
    },
    {
      id: 3,
      title: "E-Commerce Solutions that Drive Sales",
      excerpt: "Learn the secrets to building an e-commerce platform that not only looks great but converts visitors into customers.",
      category: "E-Commerce",
      date: "Aug 12, 2024",
      author: "Admin",
      image: "/images/ecommerce_solutions.png"
    },
    {
      id: 4,
      title: "Maximizing ROI with Digital Marketing",
      excerpt: "A comprehensive guide on leveraging data-driven digital marketing strategies to maximize your return on investment.",
      category: "Marketing",
      date: "Jul 05, 2024",
      author: "Admin",
      image: "/images/digital_marketing.png"
    },
    {
      id: 5,
      title: "The Power of Smart Analytics",
      excerpt: "Unlock the hidden potential of your data and make informed decisions with advanced smart analytics.",
      category: "Analytics",
      date: "Jun 20, 2024",
      author: "Admin",
      image: "/images/smart_analytics.png"
    },
    {
      id: 6,
      title: "Building a Collaborative Team Culture",
      excerpt: "How to foster an environment of innovation, collaboration, and continuous improvement within your team.",
      category: "Culture",
      date: "May 10, 2024",
      author: "Admin",
      image: "/images/team_working_office.png"
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
            src="/images/about.jpg" 
            alt="Blog Banner" 
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
            Insights & News
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Our <span className="text-[#f47721]">Blog</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f47721]"></span>
            <span className="text-[#f47721] drop-shadow-md">Blog</span>
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
         Blog Grid Section
      ────────────────────────────────────────────── */}
      <section className="bg-[#f2f4f6] dark:bg-[#090b10] pt-20 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* ─── MAIN CONTENT (Left) ─── */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-12">
                {blogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col"
                  >
                    {/* Image Wrapper */}
                    <Link href={`#`} className="block relative w-full h-[220px] sm:h-[260px] rounded-3xl overflow-hidden mb-6 bg-[#11131c]">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                    </Link>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <Link href={`#`}>
                        <span className="inline-block text-[#2a2a2a] dark:text-slate-300 text-xs font-bold tracking-widest uppercase mb-3 hover:text-[#f47721] dark:hover:text-[#f47721] transition-colors">
                          {blog.category}
                        </span>
                      </Link>

                      <Link href={`#`} className="block group/title mb-3">
                        <h3 className="text-2xl sm:text-[1.7rem] font-bold text-[#2a2a2a] dark:text-white leading-[1.3] group-hover/title:text-[#f47721] dark:group-hover/title:text-[#f47721] transition-colors line-clamp-3">
                          {blog.title}
                        </h3>
                      </Link>

                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                        <span>{blog.date}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span>0 Comments</span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3 font-light">
                        {blog.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex items-center gap-3">
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2a2a2a] dark:bg-white text-white dark:text-[#2a2a2a] font-bold hover:bg-[#f47721] dark:hover:bg-[#f47721] hover:text-white transition-colors">
                  1
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 text-[#2a2a2a] dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-colors">
                  2
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 text-[#2a2a2a] dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-colors">
                  3
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 text-[#2a2a2a] dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-colors group">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* ─── SIDEBAR (Right) ─── */}
            <aside className="lg:col-span-4 lg:pl-12 lg:border-l border-slate-200 dark:border-white/10 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-14">
              
              {/* Search Widget */}
              <div className="flex flex-col">
                <h4 className="text-[1.35rem] font-bold text-[#2a2a2a] dark:text-white mb-6">Search</h4>
                <div className="relative flex items-center w-full">
                  <div className="absolute left-4 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full bg-[#f6f7f8] dark:bg-white/5 border-none text-[#2a2a2a] dark:text-white pl-11 pr-4 py-3 rounded-xl placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#f47721]/50 transition-all"
                  />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="flex flex-col">
                <h4 className="text-[1.35rem] font-bold text-[#2a2a2a] dark:text-white mb-5">Categories</h4>
                <ul className="space-y-3.5 text-slate-600 dark:text-slate-400 text-[15px]">
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> Agency Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> Tech Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> Tech Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> IT Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2.5 hover:text-[#f47721] transition-colors">
                      <span className="text-slate-400 text-lg leading-none">•</span> Web solutions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="flex flex-col">
                <h4 className="text-[1.35rem] font-bold text-[#2a2a2a] dark:text-white mb-6">Recent Posts</h4>
                <div className="space-y-6">
                  {blogs.slice(0, 3).map((post) => (
                    <div key={`recent-${post.id}`} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#11131c]">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-grow">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#2a2a2a] dark:text-slate-300 mb-1">
                          {post.category}
                        </span>
                        <h5 className="text-[#2a2a2a] dark:text-white font-bold leading-tight group-hover:text-[#f47721] transition-colors line-clamp-2 mb-1.5 text-[15px]">
                          {post.title}
                        </h5>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promotional Ad Widget */}
              <div className="relative w-full max-w-[280px] h-48 rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-lg shadow-black/5 border border-slate-200 dark:border-white/5">
                <img 
                  src="/images/Un Site Web qui reflète votre image.jpg" 
                  alt="Promotional Ad" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              </div>
            </aside>
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

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6 leading-tight tracking-tight">
                Subscribe to Our <br className="hidden md:block" /> <span className="text-[#f47721]">Newsletter</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Get the latest news, updates, and articles directly into your inbox.
              </p>
              
              <div className="relative flex flex-col sm:flex-row items-center w-full max-w-lg mx-auto bg-slate-50 dark:bg-[#0a192f] border border-slate-200 dark:border-white/20 rounded-3xl sm:rounded-full p-1.5 focus-within:border-[#f47721] focus-within:shadow-[0_0_15px_rgba(244,119,33,0.1)] transition-all">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="w-full bg-transparent border-none text-slate-800 dark:text-white px-5 py-3 sm:py-0 placeholder:text-slate-400 focus:outline-none focus:ring-0" 
                />
                <button className="w-full sm:w-auto bg-[#f47721] hover:bg-[#d8651a] text-white font-bold px-8 py-3 rounded-2xl sm:rounded-full shrink-0 transition-colors shadow-lg shadow-[#f47721]/30">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
