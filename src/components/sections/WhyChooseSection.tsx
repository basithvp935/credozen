"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TimelineStep({ step, idx, isRightCurve }: { step: any, idx: number, isRightCurve: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  // Animate from top to bottom
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <div
      ref={ref}
      className={`
        relative w-full 
        ${idx > 0 ? '-mt-[8px]' : ''}
      `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 flex items-center justify-between py-16 lg:py-24 h-full ${isRightCurve ? 'flex-row' : 'flex-row-reverse'}`}
      >
        
        {/* Animated Border Line - Absolute positioned to cover the correct half */}
        <motion.div 
          style={{ clipPath }}
          className={`
            absolute top-0 bottom-0 border-white border-[8px] pointer-events-none
            ${isRightCurve 
              ? 'left-1/2 right-0 border-l-0 rounded-r-[150px]' 
              : 'left-0 right-1/2 border-r-0 rounded-l-[150px]'}
          `}
        />

        {/* Text Block */}
        <div className={`w-1/2 px-8 lg:px-16 flex flex-col justify-center ${isRightCurve ? 'items-end text-right' : 'items-start text-left'}`}>
          <h4 className="text-lg font-bold uppercase mb-4 tracking-wide">{step.subtitle}</h4>
          <p className="text-base text-white/90 whitespace-pre-line leading-relaxed max-w-md">{step.desc}</p>
        </div>

        {/* Pill Block */}
        <div className="w-1/2 px-8 lg:px-12 flex justify-center">
          <div className="flex items-center gap-6 relative z-20">
            <span className="text-7xl lg:text-8xl font-black text-[#1f1427] leading-none">{step.num}</span>
            <span className="text-3xl lg:text-4xl font-bold leading-tight whitespace-pre-line">{step.title}</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function WhyChooseSection() {
  const steps = [
    {
      num: "1",
      title: "generate\nmore leads",
      subtitle: "MARKETING ON STEROIDS",
      desc: "Reach your audience at the right time, right place and in the right way. Lead them from unaware to wanting your services, without losing them in between.\n\nUsing psychology to understand how the human mind works, we tap into the decision making centre of the brain to create desire and drive action."
    },
    {
      num: "2",
      title: "convert more\ninto customers",
      subtitle: "NEW LEADS ARE HOT TO TROT",
      desc: "No more cold calling or following-up with disinterested leads. Generate leads who are already educated and have built trust with your brand. Combine that with sales psychology optimisation (process, pricing, packaging & pitching). Boost your sales conversion rate resulting in more leads turning into happy customers."
    },
    {
      num: "3",
      title: "increase\naverage spend",
      subtitle: "THE PSYCHOLOGY OF VALUE",
      desc: "Improve the way that people perceive your brand and service, so they are willing to pay more to acquire it.\n\nStop competing on price and charge what you're worth, because prospects are now willing to pay for it."
    },
    {
      num: "4",
      title: "keep them\ncoming back",
      subtitle: "10X MORE THAN THE FIRST TRANSACTION",
      desc: "Are your customers staying with you long-term? Or are you losing them as fast as you're winning them?\n\nCustomers that are retained are worth 10X more than their initial transaction. Ensure that they stay loyal to you and keep coming back for more."
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-[#962f92] to-[#7e51a1] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        
        {/* Section Heading */}
        <div className="flex justify-start mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#d4439c] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-widest"
          >
            Why Choose Us
          </motion.div>
        </div>
        {/* Mobile View: Standard Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-12 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/30 rounded-full"></div>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#962f92]">
                <span className="text-3xl font-black text-[#1f1427]">{step.num}</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight mb-6 whitespace-pre-line">{step.title}</h3>
              <h4 className="text-lg font-bold uppercase mb-3 text-white/90">{step.subtitle}</h4>
              <p className="text-white/80 whitespace-pre-line leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Snake Timeline */}
        <div className="hidden md:block w-full max-w-6xl mx-auto py-12">
          {steps.map((step, idx) => (
            <TimelineStep 
              key={idx} 
              step={step} 
              idx={idx} 
              isRightCurve={idx % 2 === 0} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
