"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function ServicesTabSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0b0615] transition-colors duration-300 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(195,53,148,0.08),_rgba(123,81,161,0.05),_transparent_70%)] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(245,134,25,0.06),_transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            <span className="font-bold">What We </span>
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-light"
            >
              Offer
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-[17px] leading-relaxed transition-colors duration-300"
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
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative rounded-2xl bg-slate-50 dark:bg-[#110a1f] border border-purple-200/60 dark:border-purple-800/50 p-[1px] transition-all duration-500 hover:border-transparent hover:shadow-[0_0_40px_rgba(195,53,148,0.15)]"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#f58619] via-[#c33594] to-[#7b51a1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute -inset-[0px] rounded-2xl bg-slate-50 dark:bg-[#110a1f] -z-[5]" />

              <div className="relative rounded-2xl bg-slate-50 dark:bg-[#110a1f] p-6 lg:p-7 h-full flex flex-col transition-colors duration-300">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(195,53,148,0.3)] transition-all duration-500`}
                >
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#c33594] dark:group-hover:text-[#f58619] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed mb-5 flex-1 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-purple-900/60 text-slate-600 dark:text-slate-400 bg-white dark:bg-[#160d24] group-hover:border-[#c33594]/40 group-hover:text-[#c33594] dark:group-hover:text-[#f58619] dark:group-hover:border-[#f58619]/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line accent */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#c33594]/0 to-transparent group-hover:via-[#c33594]/60 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
