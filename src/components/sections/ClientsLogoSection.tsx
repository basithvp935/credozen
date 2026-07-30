"use client";

import { motion } from "framer-motion";
import React from "react";
import { BadgeCheck } from "lucide-react";

// ──────────────────────────────────────────────
// Authentic Full-Color Enterprise Brand Logos
// ──────────────────────────────────────────────
const GoogleCloudLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"/>
    <path fill="#34A853" d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.51 1.18-4.22 1.18-3.25 0-6.01-2.19-7-5.14H1.01v3.2C3.06 21.3 7.23 24 12 24Z"/>
    <path fill="#FBBC05" d="M5 14.03c-.25-.74-.4-1.54-.4-2.36 0-.82.15-1.62.4-2.36V6.11H1.01C.36 7.4.01 8.95.01 10.67c0 1.72.35 3.27 1 4.56l3.99-1.2Z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.98 1.19 15.3 0 12 0 7.23 0 3.06 2.7 1.01 6.11l3.99 3.12c1-2.95 3.75-5.15 7-5.15Z"/>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14 shrink-0" aria-hidden="true">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 28 24" className="w-16 h-14 md:w-20 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#FF9900" d="M24.2 17.5c-2.8 2-6.5 3.2-10.4 3.2-4.8 0-9.4-1.7-13-4.8-.4-.3-.2-.9.3-.7 3.9 2.1 8.5 3.4 13.2 3.4 3.8 0 7.5-.9 10.7-2.6.6-.3 1.1.2.7.8-.5.6-.9 1.1-1.5 1.7z"/>
    <path fill="#FF9900" d="M25.8 15.6c-.3-.9-2.3-.6-3.3-.4-.5.1-.6-.3-.2-.7 1.6-1.1 4-1.3 4.4-.3.4 1.1-.3 3.6-2 5.1-.4.4-.9.2-.7-.3.5-1.1.9-2.6.6-3.5z"/>
    <path fill="currentColor" className="text-slate-900" d="M8 13.5H5.2v-7h2.8V9c.6-1.6 2-2.7 4-2.7 1.9 0 3.4 1.1 3.4 4v3.2H12.6v-3c0-1.4-.7-2.1-1.7-2.1-1 0-1.7.7-1.7 2.1v3zm11.5 0h-2.8v-9.5h2.8v9.5z"/>
  </svg>
);

const CiscoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#00BCEB" d="M2 14h1.8v-4H2v4zm3.6 3h1.8V7H5.6v10zm3.6-5h1.8V3H9.2v9zm3.6 4h1.8V5h-1.8v12zm3.6-2h1.8V8h-1.8v6zm3.6-1h1.8v-4h-1.8v4z"/>
    <path fill="#00BCEB" d="M12 21.5c-5 0-9-1.8-9-4h1.8c0 1.2 3.2 2.2 7.2 2.2s7.2-1 7.2-2.2H21c0 2.2-4 4-9 4z"/>
  </svg>
);

const OracleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#C74634" d="M16 6H8C4.13 6 1 9.13 1 13s3.13 7 7 7h8c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 10.5H8C6.07 16.5 4.5 14.93 4.5 13s1.57-3.5 3.5-3.5h8c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/>
  </svg>
);

const IbmLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#0F62FE" d="M1.5 5h6.5v1.6H1.5V5zm0 3h6.5v1.6H1.5V8zm0 3h6.5v1.6H1.5V11zm0 3h6.5v1.6H1.5V14zm0 3h6.5v1.6H1.5V17z M9.5 5h6.5v1.6H9.5V5zm0 3h6.5v1.6H9.5V8zm0 3h4.5v1.6H9.5V11zm0 3h6.5v1.6H9.5V14zm0 3h6.5v1.6H9.5V17z M17.5 5h5v1.6h-5V5zm0 3h5v1.6h-5V8zm0 3h5v1.6h-5V11zm0 3h5v1.6h-5V14zm0 3h5v1.6h-5V17z"/>
  </svg>
);

const IntelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#00C7FD" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 15.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"/>
    <circle fill="#0068B5" cx="12" cy="12" r="3.5"/>
    <path fill="#0068B5" d="M19.5 12h2.5c0-5.5-4.5-10-10-10v2.5c4.1 0 7.5 3.4 7.5 7.5z"/>
  </svg>
);

const NvidiaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#76B900" d="M19 4c-3.5 0-7 2.5-8.5 6-1-2-2.5-3.5-5-3.5V8c1.5 0 2.5 1 3 3-2 1-4 3-4 5 0 2 2 3.5 4.5 3.5h10V4h-.5zM15.5 16.5H11c-1 0-2-.8-2-2 0-1.5 1.5-3 3.5-3.8.5 1 1.5 3 3 5.8z"/>
    <rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="none" stroke="#76B900" strokeWidth="2.2"/>
  </svg>
);

const AdobeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#FA0F00"/>
    <path fill="#FFFFFF" d="M15.2 5H21v14L15.2 5zM8.8 5H3v14L8.8 5zM12 11.2l3.8 7.8H13l-1.4-3.4H9.6L12 11.2z"/>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#95BF47" d="M19.2 6.8c-.3-.2-.7-.2-.9.1l-1.6 2c-.3-1-1.3-1.8-2.6-1.8-.7 0-1.4.3-1.9.8l-1.7-.8c-.4-.4-1.1-.4-1.5 0l-.8.8c-.4.4-.4 1.1 0 1.5l1.5 1.5-4 4c-.4.4-.5.8-.4 1.2l2 8c.1.4.4.7.8.8h.1c.3 0 .7-.1.9-.4l4.5-5.8c.3-.4.2-.9-.1-1.2l-2-2 3.2-3.2c.4-.4 1.1-.4 1.5 0l1.3 1.3c.4.4.4 1.1 0 1.5l-1.8 1.8c-.4.4-.4 1.1 0 1.5s1.1.4 1.5 0l2.5-2.5c1.2-1.2 1.5-3 .7-4.5l1-1.3c.3-.3.2-.8-.1-1.1z"/>
    <path fill="#5E8E3E" d="M14.5 9.5l3.5-3.5c-.2-.1-.5-.1-.7.1l-1.6 2c-.3-1-1.3-1.8-2.6-1.8-.3 0-.7.1-1 .3l2.4 2.9z"/>
  </svg>
);

const SamsungLogo = () => (
  <svg viewBox="0 0 60 28" className="w-28 h-14 md:w-32 md:h-16 shrink-0" aria-hidden="true">
    <ellipse cx="30" cy="14" rx="28" ry="12.5" fill="#034EA2" transform="rotate(-5 30 14)"/>
    <text x="30" y="18" fill="#FFFFFF" fontSize="11" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.8px">SAMSUNG</text>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 shrink-0" aria-hidden="true">
    <path fill="#00A1E0" d="M17.5 9.5c-.3 0-.6.1-.9.2C15.8 7.9 14.1 6.5 12 6.5c-.7 0-1.4.2-2 .5C9.4 5.6 7.9 4.5 6 4.5 3.2 4.5 1 6.7 1 9.5c0 .8.2 1.6.5 2.3C.6 12.6 0 13.7 0 15c0 1.9 1.6 3.5 3.5 3.5h15c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5z"/>
    <path fill="#FFFFFF" d="M14 14c0 .8-.7 1.5-1.5 1.5h-5C6.7 15.5 6 14.8 6 14s.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5z"/>
  </svg>
);

// All brand logos in a single row for marquee
const allLogos = [
  { name: "Google Cloud", icon: GoogleCloudLogo },
  { name: "Amazon AWS", icon: AwsLogo },
  { name: "Microsoft", icon: MicrosoftLogo },
  { name: "Cisco", icon: CiscoLogo },
  { name: "Oracle", icon: OracleLogo },
  { name: "IBM", icon: IbmLogo },
  { name: "Intel", icon: IntelLogo },
  { name: "NVIDIA", icon: NvidiaLogo },
  { name: "Adobe", icon: AdobeLogo },
  { name: "Shopify", icon: ShopifyLogo },
  { name: "Samsung", icon: SamsungLogo },
  { name: "Salesforce", icon: SalesforceLogo },
];

export default function ClientsLogoSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24 overflow-hidden bg-[#F4EBE1] relative transition-colors duration-300"
      id="clients"
    >
      {/* Pure CSS Animation Styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-left 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[radial-gradient(circle_at_center,_rgba(195,53,148,0.06),_rgba(123,81,161,0.04),_transparent_70%)] blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl mb-10 sm:mb-14 lg:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
          >
            OUR TRUSTED PARTNERS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-slate-900 mb-3 sm:mb-4 tracking-tight">
            <span className="font-bold">Global Partners Who </span>
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-light"
            >
              Trust Us
            </span>
          </h2>

          <p className="text-slate-700 max-w-2xl text-sm sm:text-[17px] leading-relaxed">
            We partner with forward-thinking brands across the globe, delivering
            digital excellence and building lasting relationships.
          </p>
        </motion.div>
      </div>

      {/* Marquee Cards */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-40 bg-gradient-to-r from-[#F4EBE1] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-40 bg-gradient-to-l from-[#F4EBE1] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track">
          {/* Duplicate the set for seamless infinite scroll */}
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div key={index} className="mx-2 sm:mx-3 md:mx-4 flex-shrink-0">
              <div className="group relative w-[160px] sm:w-[200px] md:w-[240px] h-[135px] sm:h-[170px] md:h-[195px] rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-xl hover:bg-white/90 hover:border-[#c33594]/30 transition-all duration-400 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                {/* Top badge */}
                <div className="absolute top-2.5 sm:top-3.5 left-3 sm:left-4 flex items-center gap-1 sm:gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c33594]" strokeWidth={2.5} />
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#c33594] transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>

                {/* Logo centered */}
                <div className="flex items-center justify-center mt-2 sm:mt-3 group-hover:scale-110 transition-transform duration-400">
                  <logo.icon />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c33594]/0 to-transparent group-hover:via-[#c33594]/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
