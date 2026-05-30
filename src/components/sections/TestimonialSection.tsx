"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#b3b3b3] relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/50 text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 uppercase shadow-sm border border-gray-400"
          >
            Work Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight"
          >
            What <span className="font-bold">Our Client</span> Say <span className="font-bold">About Us</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-8">
          
          {/* Left Card: Webcly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-[350px] flex flex-col items-center"
          >
            <div className="bg-white border border-gray-200 rounded-[32px] p-4 w-full shadow-lg mb-6 flex-1 flex items-end justify-center relative overflow-hidden min-h-[380px]">
              <Image 
                src="/images/testimonial_webcly.png" 
                alt="Webcly jhonson" 
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-1">Webcly jhonson</h4>
              <p className="text-sm text-gray-700">Tung Phan - Ceo and Founder</p>
            </div>
          </motion.div>

          {/* Center Card: Testimonial Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-[1.5] max-w-[600px]"
          >
            <div className="bg-white border border-gray-200 rounded-[32px] p-10 lg:p-12 w-full shadow-xl h-full flex flex-col">
              
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-8 h-8 bg-[#00b67a] rounded-sm flex items-center justify-center text-white">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-900 text-xl lg:text-[22px] leading-relaxed font-medium mb-12 flex-1">
                "Credozen hires great people from a widely variety of backgrounds, which simply makes our compan stronger, and we couldn't be prouder of that. elevating your optimizing Business Growth."
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                <div className="w-14 h-14 rounded-full overflow-hidden relative shadow-md bg-purple-600">
                  <Image 
                    src="/images/testimonial_james.png" 
                    alt="James anderson" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">James anderson</h4>
                  <p className="text-sm">
                    <span className="text-blue-600 font-bold">CEO</span> <span className="text-gray-600">and Founder</span>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Card: John */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 max-w-[350px] flex flex-col items-center"
          >
            <div className="bg-white border border-gray-200 rounded-[32px] p-4 w-full shadow-lg mb-6 flex-1 flex items-end justify-center relative overflow-hidden min-h-[380px]">
              <Image 
                src="/images/testimonial_john.png" 
                alt="John Doe" 
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-1">John Doe</h4>
              <p className="text-sm text-gray-700">Developer - Web Developer</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
