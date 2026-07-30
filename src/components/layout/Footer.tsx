"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-slate-900 dark:text-white pt-16 pb-8 border-t border-slate-200 dark:border-white/10 font-sans bg-white dark:bg-[#090b10] relative transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Top section: Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Credozen Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-slate-600 dark:text-gray-300 text-sm max-w-md text-left md:text-right leading-relaxed">
            Elevating businesses with cutting-edge IT solutions. <br className="hidden md:block" />
            Empowering your digital journey from concept to reality.
          </p>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 sm:mb-16">
          {/* Column 1: Home */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Home</h4>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Security</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Features</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Plans & Pricing</Link>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Useful Links</h4>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">News</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Documentation</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Services</h4>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Web Development</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">Mobile App</Link>
            <Link href="#" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">UI/UX Design</Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-5">
            <h4 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Contact</h4>
            <a href="tel:+918089603543" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">
              +91 8089603543
            </a>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              HiLITE Business Park, Kozhikode
            </p>
            <a href="mailto:info@credozen.in" className="text-slate-600 dark:text-gray-400 hover:text-[#f47721] transition-colors text-sm">
              info@credozen.in
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 dark:text-gray-400">
          
          {/* Social Icons (Left) */}
          <div className="flex items-center justify-center md:justify-start gap-5 md:w-1/3">
            <Link href="#" className="text-slate-700 dark:text-gray-300 hover:text-[#f47721] dark:hover:text-[#f47721] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="text-slate-700 dark:text-gray-300 hover:text-[#f47721] dark:hover:text-[#f47721] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-slate-700 dark:text-gray-300 hover:text-[#f47721] dark:hover:text-[#f47721] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            {/* WhatsApp */}
            <a
              href="https://wa.me/918089603543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-gray-300 hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
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
