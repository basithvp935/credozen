"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedLine from "@/components/ui/AnimatedLine";

export default function CalculatorSection() {
  const [traffic, setTraffic] = useState(1000);
  const [conversion, setConversion] = useState(2);
  const [retention, setRetention] = useState(1);
  const [avgValue, setAvgValue] = useState(500);

  const calculateRevenue = (t: number, c: number, r: number, v: number) => {
    return Math.round(t * (c / 100) * r * v);
  };

  const currentRevenue = calculateRevenue(1000, 2, 1, 500);
  const projectedRevenue = calculateRevenue(traffic, conversion, retention, avgValue);
  const increase = projectedRevenue - currentRevenue;

  return (
    <section className="py-32 relative bg-white text-[#090b10] overflow-hidden">

      {/* Abstract Background SVG */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <AnimatedLine 
          path="M 1600 200 Q 1200 400 800 500 T -200 800"
          viewBox="0 0 1600 1200"
          className="absolute top-0 w-full h-full opacity-20"
          strokeWidth={16}
          color="#2f76f6"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="screen-title text-4xl md:text-6xl mb-6"
          >
            discover your<br/>
            growth potential
          </motion.h2>
          <p className="text-xl font-bold uppercase tracking-widest text-brand-blue mb-8">
            The Growth Multiplier Calculator
          </p>
          <p className="text-lg max-w-2xl text-slate-600">
            Have you ever wondered about the true growth potential of your business? Move the sliders to see how small changes in each area lead to compounding, exponential revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sliders */}
          <div className="space-y-12">
            
            {/* Traffic */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xl font-bold uppercase text-brand-cyan">Marketing (Traffic)</label>
                <span className="text-2xl font-black">{traffic} visits</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="10000" 
                step="100" 
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-brand-cyan"
                style={{ background: 'rgba(51, 200, 221, 0.2)' }}
              />
            </div>

            {/* Conversion */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xl font-bold uppercase text-brand-green">Sales (Conversion %)</label>
                <span className="text-2xl font-black">{conversion}%</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="0.5" 
                value={conversion} 
                onChange={(e) => setConversion(Number(e.target.value))}
                className="w-full"
                style={{ background: 'rgba(133, 207, 68, 0.2)' }}
              />
            </div>

            {/* Retention */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xl font-bold uppercase text-brand-yellow">Retention (Transactions)</label>
                <span className="text-2xl font-black">{retention}x / yr</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="0.5" 
                value={retention} 
                onChange={(e) => setRetention(Number(e.target.value))}
                className="w-full"
                style={{ background: 'rgba(255, 189, 98, 0.2)' }}
              />
            </div>

            {/* Avg Value */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xl font-bold uppercase text-brand-blue">Value (Avg Spend)</label>
                <span className="text-2xl font-black">${avgValue}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="100" 
                value={avgValue} 
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="w-full"
                style={{ background: 'rgba(47, 118, 246, 0.2)' }}
              />
            </div>

          </div>

          {/* Results Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#090b10] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-2xl font-bold uppercase tracking-widest text-slate-400 mb-2">Projected Revenue</h3>
            <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan mb-8">
              ${projectedRevenue.toLocaleString()}
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-xl font-bold uppercase text-brand-green mb-2">Revenue Growth</h4>
              <div className="text-4xl font-black text-brand-green">
                +${increase.toLocaleString()}
              </div>
              <p className="text-slate-400 mt-4">
                Small optimizations across the entire funnel create massive compounding results. This is the power of the Credozen growth model.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
