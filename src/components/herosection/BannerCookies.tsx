"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BannerCookies() {
    const [visible, setVisible] = useState<boolean>(true);

    if (!visible) return null;

    return (
        <aside
            aria-label="Cookie Consent Banner"
            className="fixed bottom-0 inset-x-0 z-50 bg-[#0b121e]/95 border-t border-gray-800 px-6 py-3 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-4 backdrop-blur-sm"
        >
            <p className="leading-relaxed">
                This website uses cookies to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                View our <Link href="#" className="text-[#00e5ff] underline hover:text-[#00ffa3] transition-colors">Privacy Policy</Link> for more information.
            </p>

            <div className="flex items-center gap-4 shrink-0">
                <button
                    type="button"
                    className="text-gray-400 hover:text-white uppercase tracking-wider text-[11px] font-semibold transition-colors cursor-pointer"
                >
                    Read More ›
                </button>
                <button
                    type="button"
                    onClick={() => setVisible(false)}
                    aria-label="Accept cookies"
                    className="bg-white text-black font-bold uppercase tracking-wider px-5 py-2 rounded hover:bg-[#00e5ff] transition-all text-[11px] cursor-pointer"
                >
                    Okay, I Agree
                </button>
            </div>
        </aside>
    );
}