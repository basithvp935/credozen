"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  type NavLink = { name: string; href: string; hasDropdown?: boolean };
  const navLinks: NavLink[] = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICE", href: "#services" },
    { name: "TECH SOLUTION", href: "#tech-solution" },
    { name: "OUR WORKS", href: "#portfolio" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navbar (Pill style) */}
      <nav className="fixed top-6 left-0 right-0 z-[100] hidden lg:flex justify-center items-center gap-6 px-4 w-full">
        
        {/* Left Pill - Logo */}
        <div className="flex items-center rounded-full px-6 py-2.5 bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 transition-colors duration-300">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Credozen Logo" className="h-8 w-auto transition-all duration-300" />
          </Link>
        </div>

        {/* Center Pill - Navigation */}
        <div className="flex items-center gap-2 rounded-full p-1.5 pr-4 bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 transition-colors duration-300">
          {/* Code Icon Circle */}
          <div className="bg-[#f47721] text-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm shrink-0 ml-0.5">
            <Code size={16} strokeWidth={2.5} />
          </div>

          <div className="flex items-center gap-3 md:gap-4 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`
                  flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold tracking-widest transition-all
                  ${activeLink === link.name 
                    ? "bg-[#f47721] text-white shadow-sm" 
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent"
                  }
                `}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Pill - Socials & Theme Toggle */}
        <div className="flex items-center gap-4 rounded-full px-5 py-2 bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 h-12 transition-colors duration-300">
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <div className="w-px h-5 bg-slate-300 dark:bg-white/20 mx-1 transition-colors duration-300"></div>
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />
            ) : (
              <Sun size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] lg:hidden flex justify-between items-center px-6 py-4 bg-white dark:bg-[#0a192f] shadow-md border-b border-slate-200 dark:border-white/5 text-slate-900 dark:text-white transition-colors duration-300">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Credozen Logo" className="h-8 w-auto transition-all duration-300" />
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-900 dark:text-white p-2 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 z-[90] bg-white dark:bg-[#0a192f] lg:hidden flex flex-col p-6 shadow-2xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  flex items-center justify-between py-3 px-4 rounded-lg font-bold tracking-widest text-sm mb-2 transition-colors duration-300
                  ${activeLink === link.name ? "bg-[#f47721] text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"}
                `}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
