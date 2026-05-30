import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Preloader from "@/components/ui/Preloader";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credozen | Building Powerful Digital Experiences Worldwide",
  description: "Credozen delivers modern websites, web applications, eCommerce solutions, and digital services for businesses across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#090b10] text-slate-200">
        <Preloader />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
