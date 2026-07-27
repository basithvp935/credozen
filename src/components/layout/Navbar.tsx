"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.includes("/about")) {
      setActiveLink("ABOUT");
    } else if (pathname?.includes("/contact")) {
      setActiveLink("CONTACT");
    } else if (pathname?.includes("/services")) {
      setActiveLink("SERVICE");
    } else if (pathname?.includes("/clients")) {
      setActiveLink("CLIENTS");
    } else if (pathname?.includes("/works")) {
      setActiveLink("WORKS");
    } else if (pathname?.includes("/blog")) {
      setActiveLink("BLOG");
    } else if (pathname?.includes("/career")) {
      setActiveLink("CAREERS");
    } else if (pathname === "/") {
      setActiveLink("HOME");
    }
  }, [pathname]);

  type NavLink = { name: string; href: string; hasDropdown?: boolean };
  const navLinks: NavLink[] = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICE", href: "/services" },
    { name: "CAREERS", href: "/career" },
    { name: "CLIENTS", href: "/clients" },
    { name: "WORKS", href: "/works" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar (Pill style) */}
      <nav className="fixed top-6 left-0 right-0 z-[100] hidden xl:flex justify-center items-center gap-3 2xl:gap-8 px-8 w-full">
        
        {/* Left Pill - Logo */}
        <div className="flex items-center rounded-full px-6 h-[60px] bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 transition-colors duration-300">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Credozen Logo" className="h-10 w-auto transition-all duration-300" />
          </Link>
        </div>

        {/* Center Pill - Navigation */}
        <div className="flex items-center gap-2 rounded-full px-8 h-[60px] bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 transition-colors duration-300">
          <div className="flex items-center gap-1 xl:gap-3 2xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`
                  flex items-center gap-1.5 px-3 xl:px-5 2xl:px-7 py-2.5 rounded-full text-xs 2xl:text-[13px] font-bold tracking-wider 2xl:tracking-widest transition-all
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

        {/* Right Pill - Socials */}
        <div className="flex items-center gap-5 rounded-full px-6 h-[60px] bg-white dark:bg-[#0a192f] shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-white/5 transition-colors duration-300">
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/918089603543"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="text-slate-600 dark:text-slate-300 hover:text-[#25D366] dark:hover:text-[#25D366] hover:scale-110 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] xl:hidden flex justify-between items-center px-6 py-4 bg-white dark:bg-[#0a192f] shadow-md border-b border-slate-200 dark:border-white/5 text-slate-900 dark:text-white transition-colors duration-300">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Credozen Logo" className="h-10 w-auto transition-all duration-300" />
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
            className="fixed top-[60px] left-0 right-0 z-[90] bg-white dark:bg-[#0a192f] xl:hidden flex flex-col p-6 shadow-2xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300"
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
