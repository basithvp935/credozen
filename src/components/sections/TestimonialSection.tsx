"use client";

import Image from "next/image";
import { useState } from "react";

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

function TestimonialCard({ review }: { review: typeof REVIEWS[number] }) {
  return (
    <div className="w-[290px] sm:w-[360px] md:w-[400px] flex-shrink-0 px-2 sm:px-3">
      <div className="bg-slate-50 dark:bg-[#14171c] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center shadow-xl border border-slate-200 dark:border-white/5 transition-transform duration-300 hover:-translate-y-2 h-full">
        {/* Avatar */}
        <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full overflow-hidden border-[3px] border-[#e2e2e2] mb-5 sm:mb-6 relative shadow-lg flex-shrink-0">
          <Image
            src={review.avatar}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>

        {/* Quote */}
        <p className="text-slate-700 dark:text-[#9a9ea6] text-xs sm:text-sm leading-[1.7] font-light mb-6 sm:mb-8 flex-grow">
          {review.quote}
        </p>

        {/* Author & Role */}
        <div className="flex flex-col mt-auto">
          <span className="text-slate-900 dark:text-white font-bold italic text-sm sm:text-base mb-1">
            {review.author}
          </span>
          <span
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="italic text-xs sm:text-[13px] font-bold"
          >
            {review.company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0c0f12] relative overflow-hidden transition-colors duration-300" id="testimonials">

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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <span
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4"
          >
            TESTIMONIAL
          </span>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight">
            Client Feedback &{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reviews
            </span>
          </h2>
        </div>

        {/* Infinite Scroll Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#0c0f12] to-transparent z-10 pointer-events-none" />
          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#0c0f12] to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max"
            style={{
              animation: `scrollMarquee 40s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedReviews.map((review, idx) => (
              <TestimonialCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>

      </div>

      {/* Marquee Keyframes */}
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
