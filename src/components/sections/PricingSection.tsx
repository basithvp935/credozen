"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      desc: "Perfect for startups and small businesses.",
      price: "Start",
      features: [
        { name: "5 Page Website", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Basic SEO", included: true },
        { name: "Contact Form", included: true },
        { name: "Custom Domain", included: false },
        { name: "eCommerce Integration", included: false },
      ],
      popular: false,
    },
    {
      name: "Professional",
      desc: "Ideal for growing companies needing more power.",
      price: "Scale",
      features: [
        { name: "Up to 15 Pages", included: true },
        { name: "Advanced Responsive Design", included: true },
        { name: "Advanced SEO Optimization", included: true },
        { name: "CMS Integration", included: true },
        { name: "Custom Domain & Hosting", included: true },
        { name: "eCommerce Integration", included: false },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large scale operations.",
      price: "Custom",
      features: [
        { name: "Unlimited Pages", included: true },
        { name: "Custom Web Application", included: true },
        { name: "Full SEO Suite", included: true },
        { name: "Advanced CMS & Analytics", included: true },
        { name: "Premium Hosting & Security", included: true },
        { name: "Full eCommerce Solution", included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#0B0F19]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3"
          >
            Flexible Pricing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Every Budget</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative p-8 rounded-3xl ${
                plan.popular 
                  ? "glass-card border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] transform md:-translate-y-4" 
                  : "bg-[#050810] border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {plan.price}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 shrink-0" />
                    )}
                    <span className={feature.included ? "text-slate-200 text-sm" : "text-slate-500 text-sm"}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className={`block w-full py-3 rounded-full text-center font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "glass border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
