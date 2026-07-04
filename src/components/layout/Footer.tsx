"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8 border-t border-white/10 font-sans bg-[#090b10] bg-grid-pattern relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Top section: Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Credozen Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-gray-300 text-sm max-w-md text-left md:text-right leading-relaxed">
            Elevating businesses with cutting-edge IT solutions. <br className="hidden md:block" />
            Empowering your digital journey from concept to reality.
          </p>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Home */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-white">Home</h4>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Security</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Features</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Plans & Pricing</Link>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-white">Useful Links</h4>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">News</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Documentation</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-white">Services</h4>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Web Development</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">Mobile App</Link>
            <Link href="#" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">UI/UX Design</Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-white">Contact</h4>
            <a href="tel:+918089603543" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">
              +91 8089603543
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              HiLITE Business Park, Kozhikode
            </p>
            <a href="mailto:info@credozen.in" className="text-gray-400 hover:text-[#f47721] transition-colors text-sm">
              info@credozen.in
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          
          {/* Social Icons (Left) */}
          <div className="flex items-center justify-center md:justify-start gap-4 md:w-1/3">
            <Link href="#" className="text-white hover:text-gray-300 transition-colors border border-white p-1.5 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors border border-white p-1.5 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors border border-white p-1.5 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>

          {/* Term of Condition (Middle) */}
          <div className="md:w-1/3 flex justify-center">
            <Link href="#" className="hover:text-[#f47721] transition-colors">Term Of Condition</Link>
          </div>

          {/* Privacy Policy (Right) */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Link href="#" className="hover:text-[#f47721] transition-colors">Privacy Policy</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
