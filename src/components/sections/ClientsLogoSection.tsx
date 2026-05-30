"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "NEW BRILLIANT", sub: "EDUCATION CENTER", color: "text-blue-800" },
  { name: "Creaticks", sub: "", color: "text-slate-800" },
  { name: "Petbrow", sub: "Fur. Fins. Feathers", color: "text-emerald-500" },
  { name: "N.A.B", sub: "rent-a-car", color: "text-gray-600" },
  { name: "Indian School", sub: "Al Ghubra", color: "text-blue-700" },
  { name: "BIN AL SHEIKH", sub: "REAL ESTATE", color: "text-amber-600" },
  { name: "HAYAL", sub: "", color: "text-cyan-500" },
  { name: "BIS", sub: "", color: "text-amber-500" },
  { name: "UHL", sub: "", color: "text-blue-900" },
  { name: "FALCON TOURS", sub: "", color: "text-sky-600" },
  { name: "DAYAPURAM", sub: "RESIDENTIAL SCHOOL", color: "text-red-800" },
  { name: "Bedford", sub: "Kindergarten", color: "text-indigo-800" },
  { name: "Academy", sub: "", color: "text-blue-900" },
  { name: "mydinemenu", sub: "", color: "text-purple-800" },
  { name: "tns", sub: "", color: "text-cyan-400" },
  { name: "ZETA CLASSES", sub: "EDUCATIONAL SERVICES", color: "text-blue-700" },
  { name: "TAX on", sub: "TAX CONSULTANCY", color: "text-green-700" },
  { name: "BIN SHAHEEN", sub: "", color: "text-red-700" },
  { name: "M", sub: "", color: "text-amber-800" },
  { name: "JA'AB", sub: "GROUP", color: "text-yellow-500" },
  { name: "International", sub: "School", color: "text-purple-900" },
  { name: "HUG MUG", sub: "", color: "text-red-600" },
  { name: "KOOT TAAN", sub: "", color: "text-pink-500" },
  { name: "ARKAR", sub: "TRAVEL & TOURISM", color: "text-red-600" },
];

export default function ClientsLogoSection() {
  return (
    <section className="py-24 bg-white" id="clients">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        <div className="border-l-[1.5px] border-t-[1.5px] border-dotted border-gray-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-r-[1.5px] border-b-[1.5px] border-dotted border-gray-200 flex flex-col items-center justify-center p-6 aspect-[3/2] text-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className={`font-black text-xl md:text-2xl tracking-tight leading-none ${logo.color}`}>
                {logo.name}
              </div>
              {logo.sub && (
                <div className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">
                  {logo.sub}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
