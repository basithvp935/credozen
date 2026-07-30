"use client";

import React from "react";
import {
    Code2,
    Smartphone,
    Layers,
    ShoppingBag,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

export default function FooterBadges() {
    const badges = [
        {
            title: "WEB & UI/UX",
            subtitle: "FRONTEND & WEB APPS",
            icon: Code2,
            color: "#f58619",
        },
        {
            title: "MOBILE APPS",
            subtitle: "IOS & ANDROID SOLUTIONS",
            icon: Smartphone,
            color: "#c33594",
        },
        {
            title: "FULL-STACK",
            subtitle: "ENTERPRISE ARCHITECTURE",
            icon: Layers,
            color: "#7b51a1",
        },
        {
            title: "ECOMMERCE & LMS",
            subtitle: "DIGITAL PLATFORMS",
            icon: ShoppingBag,
            color: "#f58619",
        },
        {
            title: "BRANDING",
            subtitle: "CREATIVE & MARKETING",
            icon: Sparkles,
            color: "#c33594",
        },
        {
            title: "SECURITY",
            subtitle: "ISO 27001 CERTIFIED",
            icon: ShieldCheck,
            color: "#7b51a1",
        },
    ];

    return (
        <div className="w-full backdrop-blur-xl   relative z-20 overflow-hidden">
            {/* Subtle Ambient Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-gradient-to-r from-[#f58619]/10 via-[#c33594]/10 to-[#7b51a1]/10 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 items-center border-t border-white/10 pt-6 sm:pt-8 pb-10 sm:pb-12">
                    {badges.map((b, idx) => {
                        const Icon = b.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.03] shadow-lg cursor-pointer text-center min-h-[85px] sm:min-h-[90px]"
                            >
                                {/* Icon with glowing theme accent */}
                                <div
                                    className="mb-2 p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-all duration-300"
                                    style={{ color: b.color }}
                                >
                                    <Icon size={20} />
                                </div>

                                <span className="text-xs font-bold text-white tracking-widest group-hover:text-white transition-colors duration-300">
                                    {b.title}
                                </span>
                                <span className="text-[9px] text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                                    {b.subtitle}
                                </span>

                                {/* Subtle Hover Gradient Underline Accent */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-3/4 transition-all duration-300 rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}