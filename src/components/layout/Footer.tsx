"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-white pt-10 pb-6 border-t border-white/10 font-sans transition-colors duration-300 bg-cover bg-center bg-no-repeat relative bg-[#0a192f]/60 bg-blend-overlay"
      style={{ backgroundImage: "url('/images/foot.jpg')" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-8">
          
          {/* Column 1: Logo & Subscription (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="mb-8 flex items-center">
              <img src="/logo.png" alt="Credozen Logo" className="h-10 w-auto object-contain" />
            </Link>
            
            <div className="w-full relative mb-6 flex rounded-lg overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm transition-colors duration-300">
              <div className="pl-5 flex items-center justify-center text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm px-4 py-4 w-full text-white placeholder-gray-400 focus:ring-0 transition-colors duration-300"
              />
              <button className="bg-[#f47721] px-4 md:px-8 py-4 text-white font-bold text-sm flex flex-shrink-0 items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                Sign Up <span className="text-lg leading-none">&rsaquo;</span>
              </button>
            </div>
            <p className="text-sm text-gray-400 transition-colors duration-300">
              By subscribing, you're accept <Link href="#" className="text-white font-medium underline decoration-gray-500 underline-offset-4 transition-colors duration-300">Privacy Policy</Link>
            </p>
          </div>

          {/* Column 2: Service (Middle) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xl font-medium mb-4 text-white transition-colors duration-300">Service</h4>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Web Development</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mobile App Development</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">UI/UX Design</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Digital Marketing</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">SEO Services</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cyber Security</Link>
          </div>

          {/* Column 3: Locations & Contact (Right) */}
          <div className="lg:col-span-4 flex flex-col space-y-10">
            <div>
              <h4 className="text-xl font-medium mb-6 text-white transition-colors duration-300">Locations</h4>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#f47721] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  Room 1621, 6th floor & Room 1302, 3rd, HiLITE<br/>
                  Business Park, Kozhikode
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-6 text-white transition-colors duration-300">Contact</h4>
              <div className="flex flex-col space-y-4">
                <a href="mailto:info@credozen.in" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3">
                  info@credozen.in
                </a>
                <a href="tel:+918089603543" className="text-white hover:text-gray-300 transition-colors text-xl font-medium flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#f47721]" />
                  +91 8089603543
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative transition-colors duration-300">
          <p className="text-gray-400 text-sm transition-colors duration-300">
            &copy; {currentYear} <span className="text-[#f47721] font-medium">Credozen</span> - IT Services. All rights reserved.
          </p>
          

          <div className="flex items-center gap-8">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </div> Facebook
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div> Twitter
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div> Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
