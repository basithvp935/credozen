"use client";

import { motion } from "framer-motion";
import { Smile, CheckCircle, Smartphone, Layout, Image as ImageIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#b3b3b3] overflow-hidden text-slate-800">
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Single Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[300px] md:h-[450px] w-[95%] md:w-[85%] mx-auto lg:mr-auto lg:ml-0"
          >
            <img 
              src="/about-image.jpg" 
              alt="About Credozen" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Shade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#962f92]/50 to-[#7e51a1]/50 mix-blend-multiply"></div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start lg:pl-10"
          >
            {/* About Us Badge */}
            <div className="bg-[#e8effd] text-brand-blue font-bold px-6 py-2.5 rounded-full mb-8 text-sm">
              About Us
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-black mb-10 tracking-tight">
              <span className="font-bold">Comprehensive </span>
              <span className="font-light text-slate-400">IT </span>
              <span className="font-bold">Solution</span><br className="hidden md:block" />
              <span className="font-light text-slate-500">Growth </span>
              <span className="font-bold">& Efficiency</span>
            </h2>

            {/* Paragraph Text */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
              Welcome to our company, a leading provider of website development, mobile app development, branding and digital marketing services, e-commerce expertise, and LMS solutions. At CREDOZEN LLP we specialize in empowering businesses with cutting-edge technology solutions to enhance their online presence and drive growth. With a team of highly skilled professionals, we bring together creativity, technical expertise, and industry knowledge to deliver exceptional results for our clients.
            </p>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
