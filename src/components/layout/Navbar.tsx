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
    { name: "SERVICES", href: "/services" },
    { name: "CAREERS", href: "/career" },
    { name: "CLIENTS", href: "/clients" },
    { name: "WORKS", href: "/works" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Floating Glass Navbar */}
      <nav className="absolute top-5 left-0 right-0 z-[100] hidden mx-auto xl:flex justify-between max-w-7xl items-center gap-4 px-4 w-full">
        {/* Left Pill - Logo */}
        <div className="flex items-center rounded-full transition-all duration-300">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Credozen Logo" className="h-14 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]" />
          </Link>
        </div>

        {/* Center Pill - Navigation Links */}
        <div className="flex items-center rounded-full px-4 h-[58px] bg-[#20142a]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 transition-colors duration-300">
          <div className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  style={
                    isActive
                      ? {
                        background:
                          "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                      }
                      : undefined
                  }
                  className={`
                    relative flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300
                    ${isActive
                      ? "text-white font-extrabold shadow-[0_0_20px_rgba(245,134,25,0.4)] scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="ml-0.5" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Pill - Social Icons */}
        <div className="flex items-center gap-2 rounded-full px-5 h-[58px] bg-[#20142a]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 transition-colors duration-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full text-gray-300 hover:text-[#f58619] hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full text-gray-300 hover:text-[#c33594] hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-gray-300 hover:text-[#7b51a1] hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] xl:hidden flex justify-between items-center px-6 py-4 bg-[#070b12]/95 backdrop-blur-md border-b border-white/10 text-white transition-colors duration-300">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Credozen Logo" className="h-9 w-auto object-contain" />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 transition-colors duration-300 hover:text-[#00e5ff]"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[65px] left-0 right-0 z-[90] bg-[#0b121e]/98 backdrop-blur-2xl xl:hidden flex flex-col p-6 shadow-2xl border-b border-white/10 transition-colors duration-300"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                style={
                  activeLink === link.name
                    ? {
                      background:
                        "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                    }
                    : undefined
                }
                className={`
                  flex items-center justify-between py-3 px-4 rounded-xl font-bold tracking-widest text-xs mb-2 transition-colors duration-300
                  ${activeLink === link.name
                    ? "text-white font-extrabold shadow-[0_0_15px_rgba(245,134,25,0.4)]"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
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
