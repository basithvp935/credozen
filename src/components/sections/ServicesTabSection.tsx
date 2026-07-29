"use client";

import { motion, Variants } from "framer-motion";
import {
  Compass,
  Code2,
  Globe,
  Smartphone,
  Wrench,
  TrendingUp,
} from "lucide-react";

const servicesData = [
  {
    id: "evaluation",
    title: "Evaluation & Design",
    tags: ["Product Design", "UI Review", "Branding"],
    description:
      "We assess your digital landscape and craft intuitive designs that align with your business vision — ensuring every pixel serves a purpose.",
    icon: Compass,
    gradient: "from-[#f58619] to-[#c33594]",
  },
  {
    id: "custom",
    title: "Custom Software",
    tags: ["Product Development", "Cloud App", "Branding"],
    description:
      "Tailor-made software solutions engineered to streamline your operations, scale with your growth, and outperform off-the-shelf alternatives.",
    icon: Code2,
    gradient: "from-[#c33594] to-[#7b51a1]",
  },
  {
    id: "web",
    title: "Web Development",
    tags: ["Front End", "PHP Backend", "Node.JS"],
    description:
      "High-performance, responsive web applications built with modern frameworks — delivering seamless experiences across every device.",
    icon: Globe,
    gradient: "from-[#7b51a1] to-[#46399c]",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    tags: ["Android App", "iOS App", "Cross Platform"],
    description:
      "Native and cross-platform mobile apps that captivate users with fluid interfaces, robust performance, and intuitive navigation.",
    icon: Smartphone,
    gradient: "from-[#46399c] to-[#a716a5]",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    tags: ["AWS & Cloud", "Market Launch", "DevOps"],
    description:
      "Round-the-clock monitoring, proactive maintenance, and dedicated support to keep your digital infrastructure running flawlessly.",
    icon: Wrench,
    gradient: "from-[#a716a5] to-[#f58619]",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    tags: ["Search Ranking", "Analytics", "Growth"],
    description:
      "Boost your online visibility and drive organic traffic. We optimize your digital presence to rank higher and connect with the right audience.",
    icon: TrendingUp,
    gradient: "from-[#f58619] to-[#7b51a1]",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ServicesTabSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#130b1c] text-white relative overflow-hidden transition-colors duration-300">
      {/* Hero-matched Background Gradients & Mesh Accent Orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.18),_rgba(195,84,15,0.12),_transparent_70%)] blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#5b3181]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[700px] h-[700px] bg-[#932574]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero-matched Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[3rem] leading-[1.15] text-white mb-5 tracking-tight font-extrabold"
          >
            What We{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-light drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
            >
              Offer
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-[17px] leading-relaxed font-normal"
          >
            End-to-end digital solutions designed to transform your ideas into
            powerful, scalable products.
          </motion.p>
        </div>

        {/* Services Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-3xl bg-[#1b1028]/60 backdrop-blur-xl border border-purple-900/40 p-7 lg:p-8 flex flex-col transition-all duration-500 hover:bg-[#231534]/70 hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(195,53,148,0.25)] hover:-translate-y-1.5"
            >
              {/* Top Accent Highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f58619]/40 to-transparent rounded-t-3xl" />

              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(195,53,148,0.4)] transition-all duration-500`}
              >
                <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#f58619] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-[15px] leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300 group-hover:border-[#f58619]/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Glowing Accent Line on Hover */}
              <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#f58619]/0 to-transparent group-hover:via-[#f58619]/70 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
