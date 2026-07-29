"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

// ──────────────────────────────────────────────
// Authentic Full-Color Enterprise Brand Logos
// ──────────────────────────────────────────────
const GoogleCloudLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"/>
    <path fill="#34A853" d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.51 1.18-4.22 1.18-3.25 0-6.01-2.19-7-5.14H1.01v3.2C3.06 21.3 7.23 24 12 24Z"/>
    <path fill="#FBBC05" d="M5 14.03c-.25-.74-.4-1.54-.4-2.36 0-.82.15-1.62.4-2.36V6.11H1.01C.36 7.4.01 8.95.01 10.67c0 1.72.35 3.27 1 4.56l3.99-1.2Z"/>
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.98 1.19 15.3 0 12 0 7.23 0 3.06 2.7 1.01 6.11l3.99 3.12c1-2.95 3.75-5.15 7-5.15Z"/>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 24 24" className="w-11 h-11 shrink-0" aria-hidden="true">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 28 24" className="w-14 h-12 shrink-0" aria-hidden="true">
    <path fill="#FF9900" d="M24.2 17.5c-2.8 2-6.5 3.2-10.4 3.2-4.8 0-9.4-1.7-13-4.8-.4-.3-.2-.9.3-.7 3.9 2.1 8.5 3.4 13.2 3.4 3.8 0 7.5-.9 10.7-2.6.6-.3 1.1.2.7.8-.5.6-.9 1.1-1.5 1.7z"/>
    <path fill="#FF9900" d="M25.8 15.6c-.3-.9-2.3-.6-3.3-.4-.5.1-.6-.3-.2-.7 1.6-1.1 4-1.3 4.4-.3.4 1.1-.3 3.6-2 5.1-.4.4-.9.2-.7-.3.5-1.1.9-2.6.6-3.5z"/>
    <path fill="currentColor" className="text-slate-900 dark:text-white" d="M8 13.5H5.2v-7h2.8V9c.6-1.6 2-2.7 4-2.7 1.9 0 3.4 1.1 3.4 4v3.2H12.6v-3c0-1.4-.7-2.1-1.7-2.1-1 0-1.7.7-1.7 2.1v3zm11.5 0h-2.8v-9.5h2.8v9.5z"/>
  </svg>
);

const CiscoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#00BCEB" d="M2 14h1.8v-4H2v4zm3.6 3h1.8V7H5.6v10zm3.6-5h1.8V3H9.2v9zm3.6 4h1.8V5h-1.8v12zm3.6-2h1.8V8h-1.8v6zm3.6-1h1.8v-4h-1.8v4z"/>
    <path fill="#00BCEB" d="M12 21.5c-5 0-9-1.8-9-4h1.8c0 1.2 3.2 2.2 7.2 2.2s7.2-1 7.2-2.2H21c0 2.2-4 4-9 4z"/>
  </svg>
);

const OracleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#C74634" d="M16 6H8C4.13 6 1 9.13 1 13s3.13 7 7 7h8c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 10.5H8C6.07 16.5 4.5 14.93 4.5 13s1.57-3.5 3.5-3.5h8c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/>
  </svg>
);

const IbmLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#0F62FE" d="M1.5 5h6.5v1.6H1.5V5zm0 3h6.5v1.6H1.5V8zm0 3h6.5v1.6H1.5V11zm0 3h6.5v1.6H1.5V14zm0 3h6.5v1.6H1.5V17z M9.5 5h6.5v1.6H9.5V5zm0 3h6.5v1.6H9.5V8zm0 3h4.5v1.6H9.5V11zm0 3h6.5v1.6H9.5V14zm0 3h6.5v1.6H9.5V17z M17.5 5h5v1.6h-5V5zm0 3h5v1.6h-5V8zm0 3h5v1.6h-5V11zm0 3h5v1.6h-5V14zm0 3h5v1.6h-5V17z"/>
  </svg>
);

const IntelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#00C7FD" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 15.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"/>
    <circle fill="#0068B5" cx="12" cy="12" r="3.5"/>
    <path fill="#0068B5" d="M19.5 12h2.5c0-5.5-4.5-10-10-10v2.5c4.1 0 7.5 3.4 7.5 7.5z"/>
  </svg>
);

const NvidiaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#76B900" d="M19 4c-3.5 0-7 2.5-8.5 6-1-2-2.5-3.5-5-3.5V8c1.5 0 2.5 1 3 3-2 1-4 3-4 5 0 2 2 3.5 4.5 3.5h10V4h-.5zM15.5 16.5H11c-1 0-2-.8-2-2 0-1.5 1.5-3 3.5-3.8.5 1 1.5 3 3 5.8z"/>
    <rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="none" stroke="#76B900" strokeWidth="2.2"/>
  </svg>
);

const AdobeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#FA0F00"/>
    <path fill="#FFFFFF" d="M15.2 5H21v14L15.2 5zM8.8 5H3v14L8.8 5zM12 11.2l3.8 7.8H13l-1.4-3.4H9.6L12 11.2z"/>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#95BF47" d="M19.2 6.8c-.3-.2-.7-.2-.9.1l-1.6 2c-.3-1-1.3-1.8-2.6-1.8-.7 0-1.4.3-1.9.8l-1.7-.8c-.4-.4-1.1-.4-1.5 0l-.8.8c-.4.4-.4 1.1 0 1.5l1.5 1.5-4 4c-.4.4-.5.8-.4 1.2l2 8c.1.4.4.7.8.8h.1c.3 0 .7-.1.9-.4l4.5-5.8c.3-.4.2-.9-.1-1.2l-2-2 3.2-3.2c.4-.4 1.1-.4 1.5 0l1.3 1.3c.4.4.4 1.1 0 1.5l-1.8 1.8c-.4.4-.4 1.1 0 1.5s1.1.4 1.5 0l2.5-2.5c1.2-1.2 1.5-3 .7-4.5l1-1.3c.3-.3.2-.8-.1-1.1z"/>
    <path fill="#5E8E3E" d="M14.5 9.5l3.5-3.5c-.2-.1-.5-.1-.7.1l-1.6 2c-.3-1-1.3-1.8-2.6-1.8-.3 0-.7.1-1 .3l2.4 2.9z"/>
  </svg>
);

const SamsungLogo = () => (
  <svg viewBox="0 0 60 28" className="w-24 h-11 shrink-0" aria-hidden="true">
    <ellipse cx="30" cy="14" rx="28" ry="12.5" fill="#034EA2" transform="rotate(-5 30 14)"/>
    <text x="30" y="18" fill="#FFFFFF" fontSize="11" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.8px">SAMSUNG</text>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 shrink-0" aria-hidden="true">
    <path fill="#00A1E0" d="M17.5 9.5c-.3 0-.6.1-.9.2C15.8 7.9 14.1 6.5 12 6.5c-.7 0-1.4.2-2 .5C9.4 5.6 7.9 4.5 6 4.5 3.2 4.5 1 6.7 1 9.5c0 .8.2 1.6.5 2.3C.6 12.6 0 13.7 0 15c0 1.9 1.6 3.5 3.5 3.5h15c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5z"/>
    <path fill="#FFFFFF" d="M14 14c0 .8-.7 1.5-1.5 1.5h-5C6.7 15.5 6 14.8 6 14s.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5z"/>
  </svg>
);

export default function ClientsPage() {
  const realClients = [
    { id: 1, name: "Google Cloud", icon: <GoogleCloudLogo /> },
    { id: 2, name: "Amazon AWS", icon: <AwsLogo /> },
    { id: 3, name: "Microsoft Azure", icon: <MicrosoftLogo /> },
    { id: 4, name: "Cisco Systems", icon: <CiscoLogo /> },
    { id: 5, name: "Oracle Enterprise", icon: <OracleLogo /> },
    { id: 6, name: "IBM Technologies", icon: <IbmLogo /> },
    { id: 7, name: "Intel Corp", icon: <IntelLogo /> },
    { id: 8, name: "NVIDIA AI", icon: <NvidiaLogo /> },
    { id: 9, name: "Adobe Systems", icon: <AdobeLogo /> },
    { id: 10, name: "Shopify Commerce", icon: <ShopifyLogo /> },
    { id: 11, name: "Samsung Tech", icon: <SamsungLogo /> },
    { id: 12, name: "Salesforce CRM", icon: <SalesforceLogo /> },
  ];

  return (
    <main className="bg-[#090514] min-h-screen text-white selection:bg-[#f58619] selection:text-white pb-20">
      {/* ──────────────────────────────────────────────
         Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full h-[42vh] min-h-[340px] flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#130b1c]">
        {/* Darker Purple/Magenta/Orange Glassy Background Gradients */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.22),_rgba(195,84,15,0.14),_transparent_70%)] blur-[140px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#5b3181]/25 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-[#932574]/20 blur-[160px] rounded-full pointer-events-none" />

        {/* Cyber Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg"
          >
            Our Partners
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Trusted{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
            >
              Clients
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-2 h-2 rounded-full bg-[#f58619]"></span>
            <span className="text-[#f58619] font-semibold drop-shadow-md">Clients</span>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         Clients Grid Section
      ────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#2a2a2a] dark:text-white mb-6"
            >
              Empowering Global <span className="text-[#f47721]">Brands</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed text-justify hyphens-auto"
            >
              We are proud to collaborate with some of the most innovative and forward-thinking companies around the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {realClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col items-center justify-center p-8 lg:p-11 bg-white dark:bg-[#11131c] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-[#f47721]/30 hover:shadow-[0_15px_45px_-10px_rgba(244,119,33,0.2)] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f47721]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Full-Color Brand Icon Wrapper */}
                <div className="mb-5 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 flex items-center justify-center h-12">
                  {client.icon}
                </div>
                
                {/* Brand Name */}
                <h3 className="text-base sm:text-lg font-bold tracking-wider text-slate-700 dark:text-slate-200 group-hover:text-[#f47721] transition-colors duration-300 uppercase text-center font-sans">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
