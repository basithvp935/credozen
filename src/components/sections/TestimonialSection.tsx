"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    quote: "AIXOR truly understands the power of storytelling and strategic marketing",
    author: "Michael Richards",
    company: "GreenWave Energy",
    avatar: "/images/testimonial_james.png" 
  },
  {
    id: 2,
    quote: "Working with AIXOR has been a transformative experience for our business",
    author: "Sarah Jenkins",
    company: "TechNova Solutions",
    avatar: "/images/testimonial_john.png" 
  },
  {
    id: 3,
    quote: "We partnered with AIXOR to design our mobile app, and the results were phenomenal magic",
    author: "David Lee",
    company: "Innovate Finance",
    avatar: "/images/testimonial_webcly.png" 
  },
  {
    id: 4,
    quote: "Their incredible attention to detail elevated our entire brand identity beyond expectations.",
    author: "Emily Chen",
    company: "Stellar Dynamics",
    avatar: "/images/testimonial_james.png" 
  },
  {
    id: 5,
    quote: "AIXOR's team brings both creative vision and technical excellence to every project.",
    author: "Marcus Johnson",
    company: "Quantum Logistics",
    avatar: "/images/testimonial_john.png" 
  }
];

// Duplicate the reviews array 4 times to ensure it covers even ultra-wide displays
// If there are 4 sets, one full cycle requires shifting by -25% of the total track width
const MARQUEE_ITEMS = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#000000] relative overflow-hidden transition-colors duration-300" id="testimonials">
      
      {/* Inline styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); } 
        }
        .animate-custom-marquee {
          animation: custom-marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] mb-12">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 items-center h-5">
            <div className="w-1.5 h-full bg-slate-800 dark:bg-white transition-colors duration-300"></div>
            <div className="w-1 h-[80%] bg-slate-600 dark:bg-white/70 transition-colors duration-300"></div>
            <div className="w-0.5 h-[60%] bg-slate-400 dark:bg-white/40 transition-colors duration-300"></div>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-[0.2em] uppercase transition-colors duration-300">
            Our Reviews
          </h2>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full relative flex overflow-hidden py-4 group cursor-grab active:cursor-grabbing">
        
        {/* Gradient edge fades for a seamless disappearance effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        {/* The Animated Track */}
        <div className="animate-custom-marquee gap-6 pl-6">
          {MARQUEE_ITEMS.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="flex-shrink-0 w-[320px] h-[400px] md:w-[380px] md:h-[450px] bg-white dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#111111] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-2xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-2 mb-8 md:mb-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 dark:fill-white dark:text-white transition-colors duration-300" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-800 dark:text-white text-xl md:text-2xl font-light leading-snug tracking-wide transition-colors duration-300">
                  "{review.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden relative shadow-lg bg-gray-100 dark:bg-gray-800 border border-slate-200 dark:border-white/10">
                  <Image 
                    src={review.avatar} 
                    alt={review.author} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-medium text-base md:text-lg italic tracking-wide transition-colors duration-300">{review.author}</span>
                  <span className="text-slate-500 dark:text-white/50 text-xs md:text-sm transition-colors duration-300">{review.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
