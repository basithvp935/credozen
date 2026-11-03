"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const panels = [
  {
    id: "tns",
    title: "TNS",
    category: "FinTech Platform",
    description:
      "A comprehensive digital wallet and payment ecosystem built for modern financial experiences.",
    src: "/images/products/tns.jpg",
    tags: ["Mobile App", "FinTech", "Payments"],
    accent: "from-[#f58619] via-[#c33594] to-[#7b51a1]",
  },
  {
    id: "educapilot",
    title: "EducaPilot",
    category: "EdTech Intelligence",
    description:
      "AI-powered learning tools and institutional dashboards that help students learn with clarity and momentum.",
    src: "/images/products/educa.jpg",
    tags: ["EdTech", "AI", "Analytics"],
    accent: "from-[#7b51a1] via-[#46399c] to-[#f58619]",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    category: "Marketplace Growth",
    description:
      "A high-converting commerce experience with storefront design, secure checkout, and smart inventory tools.",
    src: "/images/dummy_ecommerce.png",
    tags: ["Marketplace", "Commerce", "UX"],
    accent: "from-[#c33594] via-[#f58619] to-[#f7b267]",
  },
];

export default function ElevatesSection() {
  return (
    <section className="relative overflow-hidden bg-[#130b1c] py-16 text-white sm:py-20 lg:py-28" id="our-products">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(145,33,108,0.14),_transparent_45%)]" />
      <div className="absolute left-[-7%] top-6 h-[380px] w-[380px] rounded-full bg-[#5b3181]/15 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-0 h-[360px] w-[360px] rounded-full bg-[#f58619]/10 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:26px_26px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mb-3 block text-xs font-bold uppercase tracking-[0.28em]"
            >
              OUR PRODUCTS
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl">
              <span className="font-light text-gray-200">Featured </span>
              <span className="bg-gradient-to-r from-[#f58619] via-[#c33594] to-[#7b51a1] bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#f58619]" />
            3 standout launches
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {panels.map((panel) => (
            <article
              key={panel.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1b1028]/60 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f58619]/35 hover:shadow-[0_25px_70px_rgba(195,53,148,0.22)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${panel.accent}`} />

              <div className="relative h-72 overflow-hidden border-b border-white/10">
                <Image
                  src={panel.src}
                  alt={panel.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120813] via-[#120813]/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                  {panel.category}
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {panel.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {panel.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f8b77c]">
                    View case study
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:border-[#f58619]/40 group-hover:bg-[#f58619]/10 group-hover:text-[#f9c58d]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
