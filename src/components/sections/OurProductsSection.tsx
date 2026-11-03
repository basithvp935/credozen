"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

type Product = {
  title: string;
  category: string;
  description: string;
  logo: string;
  banner: string;
  badge: string;
  tags: string[];
  accent: string;
  visitUrl: string;
  detailUrl: string;
};

const products: Product[] = [
  {
    title: "TNS",
    category: "FinTech Platform",
    description:
      "A comprehensive platform delivering seamless digital wallet, contactless payment, and financial technology management.",
    logo: "/images/products/tns.png",
    banner: "/images/products/tns.jpg",
    badge: "FinTech",
    tags: ["Digital Wallet", "Contactless Pay", "Financial Tech"],
    accent: "from-[#1bb6ff] via-[#1da6ea] to-[#0f8bd8]",
    visitUrl: "#",
    detailUrl: "#",
  },
  {
    title: "EducaPilot",
    category: "EdTech Intelligence",
    description:
      "An intelligent education platform empowering students and institutions with AI-driven learning tools and progress analytics.",
    logo: "/images/products/educapilot.png",
    banner: "/images/products/educa.jpg",
    badge: "EdTech",
    tags: ["AI Learning", "Student Analytics", "Institutional LMS"],
    accent: "from-[#f58619] via-[#d84b8b] to-[#7b51a1]",
    visitUrl: "#",
    detailUrl: "#",
  },
  {
    title: "Deals Go",
    category: "Offers & Marketplace",
    description:
      "A smart discount application designed for the Qatar market, connecting customers with exclusive offers from restaurants, retail, salons, and automotive businesses.",
    logo: "/images/products/dealsgo.webp",
    banner: "/images/products/dealsgo-banner.jpg",
    badge: "Qatar Deals",
    tags: ["Exclusive Offers", "Qatar Deals", "Multi-Vendor"],
    accent: "from-[#c33594] via-[#5b3181] to-[#f58619]",
    visitUrl: "#",
    detailUrl: "#",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function OurProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0] py-16 text-[#1b1530] sm:py-20 lg:py-28">
      {/* Background Ambience & Soft Meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,134,25,0.08),_transparent_45%)]" />
      <div className="absolute left-[-8%] top-10 h-[420px] w-[420px] rounded-full bg-[#f58619]/10 blur-[120px]" />
      <div className="absolute bottom-[-8%] right-[-3%] h-[380px] w-[380px] rounded-full bg-[#7b51a1]/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#e9e2ef_1px,transparent_1px)] [background-size:26px_26px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="mb-3 block text-xs font-bold uppercase tracking-[0.28em]"
          >
            OUR PRODUCTS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.08 }}
            className="text-2xl font-extrabold tracking-tight text-[#1b1530] sm:text-3xl md:text-5xl"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-[#f58619] via-[#c33594] to-[#7b51a1] bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#453b5d] sm:text-[17px]"
          >
            Scalable digital products designed to connect customers, simplify
            operations, and unlock growth across key industries.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8"
        >
          {products.map((product) => (
            <motion.article
              key={product.title}
              variants={cardVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#e8dff0] bg-white shadow-[0_12px_36px_rgba(30,20,46,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f58619]/40 hover:shadow-[0_28px_65px_rgba(245,134,25,0.15)]"
            >
              {/* Full-width Top Background Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-[#1b1530] sm:h-56">
                <Image
                  src={product.banner}
                  alt={`${product.title} banner`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Depth & Contrast Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1530]/85 via-[#1b1530]/25 to-black/20" />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${product.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Floating Category Badge (Top-Left) */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md">
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.accent} animate-pulse`}
                    />
                    {product.badge}
                  </span>
                </div>

                {/* Floating Product Logo (Top-Right) */}
                <div className="absolute right-4 top-4 z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/95 p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_30px_rgba(245,134,25,0.28)] sm:h-16 sm:w-16">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Bottom Hairline Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f58619]/40 to-transparent transition-all duration-500 group-hover:via-[#f58619]" />
              </div>

              {/* Card Body Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Category & Tagline */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c33594]">
                      {product.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8c829e]">
                      In-House
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#1b1530] transition-colors duration-300 group-hover:text-[#f58619]">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#524866]">
                    {product.description}
                  </p>

                  {/* Feature Tags List */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#f0eaf5] pt-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#ece4f3] bg-[#f8f5fc] px-2.5 py-1 text-[11px] font-medium text-[#5a4e70]"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#f58619]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-7 flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={product.visitUrl}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#e2d7ec] bg-[#faf8fc] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#2c2440] transition-all duration-300 hover:border-[#f58619]/40 hover:bg-[#fff5ee] hover:text-[#f58619]"
                  >
                    <Globe className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={product.detailUrl}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f58619] via-[#c33594] to-[#7b51a1] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(245,134,25,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(195,53,148,0.32)]"
                  >
                    <span>View </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
