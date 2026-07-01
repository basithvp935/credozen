"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    quote: "Implementing ERP solutions from Credozen, overseen by their expert consultants, has been a game-changer for our financial processes. The integration has streamlined operations and improved overall accuracy.",
    author: "Elena Kowalski",
    company: "CFO, Finance Dynamics Ltd.",
    avatar: "/images/testimonial_james.png" 
  },
  {
    id: 2,
    quote: "Credozen's web development team, led by skilled designers and developers, exceeded our expectations. The website they crafted not only looks stunning but also functions seamlessly, providing an excellent user experience.",
    author: "Alex Peterson",
    company: "Digital Innovations Agency",
    avatar: "/images/testimonial_john.png" 
  },
  {
    id: 3,
    quote: "The cybersecurity measures implemented by Credozen, under the guidance of their skilled professionals, have provided our organization with robust protection. We now feel more secure and confident in our digital operations.",
    author: "Sarah Miller",
    company: "IT Manager, Global Enterprises Ltd.",
    avatar: "/images/testimonial_webcly.png" 
  },
  {
    id: 4,
    quote: "Their incredible attention to detail elevated our entire brand identity beyond expectations. The new platform is blazing fast and user-friendly.",
    author: "Emily Chen",
    company: "Director, Stellar Dynamics",
    avatar: "/images/testimonial_james.png" 
  },
  {
    id: 5,
    quote: "Credozen's team brings both creative vision and technical excellence to every project. We've seen a massive increase in user engagement.",
    author: "Marcus Johnson",
    company: "CEO, Quantum Logistics",
    avatar: "/images/testimonial_john.png" 
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Update items per view based on window size to make the slider responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(3); // Desktop: 3 cards
      }
    };
    
    // Initial check on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerView);

  // Auto-play logic
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section className="py-24 bg-[#0c0f12] relative overflow-hidden" id="testimonials">
      
      {/* Background Graphic (Orange Curve) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40">
        <svg viewBox="0 0 1440 600" className="w-full h-full object-cover">
          <path 
            d="M -200 500 C 200 400 350 100 720 250 C 1090 400 1200 50 1640 200" 
            fill="none" 
            stroke="url(#orange-gradient)" 
            strokeWidth="30" 
            filter="blur(15px)"
          />
          <path 
            d="M -200 500 C 200 400 350 100 720 250 C 1090 400 1200 50 1640 200" 
            fill="none" 
            stroke="#f47721" 
            strokeWidth="4" 
            filter="blur(2px)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f47721" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f47721" stopOpacity="1" />
              <stop offset="100%" stopColor="#f47721" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#f47721] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
            TESTIMONIAL
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight">
            Client Feedback & <span className="text-[#f47721]">Reviews</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div 
          className="relative mb-12 overflow-hidden px-1 md:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
          >
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
              >
                <div className="bg-[#14171c] rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center shadow-xl border border-white/5 transition-transform duration-300 hover:-translate-y-2 h-full">
                  {/* Avatar */}
                  <div className="w-[84px] h-[84px] rounded-full overflow-hidden border-[3px] border-[#e2e2e2] mb-6 relative shadow-lg flex-shrink-0">
                    <Image 
                      src={review.avatar} 
                      alt={review.author} 
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-[#9a9ea6] text-sm leading-[1.7] font-light mb-8 flex-grow">
                    {review.quote}
                  </p>

                  {/* Author & Role */}
                  <div className="flex flex-col mt-auto">
                    <span className="text-white font-bold italic text-base mb-1">
                      {review.author}
                    </span>
                    <span className="text-[#f47721] italic text-[13px]">
                      {review.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)} 
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === idx ? 'bg-[#f47721]' : 'bg-[#333]'
              }`} 
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
