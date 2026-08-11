"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Web Development");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const services = [
    "Web Development",
    "Mobile Applications",
    "Custom Software",
    "Cloud & DevOps",
    "UI/UX Design",
    "SEO & Digital Marketing",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "", agreed: false });
    }, 4000);
  };

  return (
    <main className="bg-[#090b10] min-h-screen text-white font-sans selection:bg-[#f58619] selection:text-white pb-24 overflow-x-hidden">

      {/* ──────────────────────────────────────────────
         1. Hero Banner Section
      ────────────────────────────────────────────── */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#130b1c]">
        {/* Background Radial Orbs & Mesh Gradients */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(145,33,108,0.22),_rgba(195,84,15,0.14),_transparent_70%)] blur-[140px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#5b3181]/25 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-[#932574]/20 blur-[160px] rounded-full pointer-events-none" />

        {/* Cyber Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2b1638_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#f58619]" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Contact{" "}
            <span
              style={{
                background:
                  "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="drop-shadow-[0_0_20px_rgba(245,134,25,0.3)]"
            >
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8 font-normal"
          >
            Have a project in mind, need technical guidance, or want to explore digital transformation? Our engineering experts are ready to turn your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
            <span className="w-2 h-2 rounded-full bg-[#f58619]" />
            <span className="text-[#f58619] font-semibold drop-shadow-md">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         2. Main Contact Info & Interactive Form Grid
      ────────────────────────────────────────────── */}
      <section className="relative z-20 -mt-10 sm:-mt-14 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Contact Cards & Quick Connect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Information Glass Card */}
            <div className="bg-[#120b1f]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between h-full">
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#f58619] via-[#c33594] to-[#7b51a1]" />

              <div>
                <span
                  style={{
                    background:
                      "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 block"
                >
                  Reach Out Directly
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Let's Connect & <span className="text-[#f58619]">Build</span>
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  Whether you have questions about custom software, cloud setup, or app development, our team is always ready to assist.
                </p>

                {/* Contact List */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#f58619] transition-all duration-300 shadow-md">
                      <MapPin className="w-5 h-5 text-[#f58619] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Our Headquarters</h4>
                      <p className="text-white font-medium text-sm sm:text-base leading-snug">
                        HiLITE Business Park, Kozhikode, Kerala, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#f58619] transition-all duration-300 shadow-md">
                      <Phone className="w-5 h-5 text-[#f58619] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Call Us</h4>
                      <a
                        href="tel:+918089603543"
                        className="text-white font-bold text-sm sm:text-base hover:text-[#f58619] transition-colors"
                      >
                        +91 8089603543
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#f58619] transition-all duration-300 shadow-md">
                      <Mail className="w-5 h-5 text-[#f58619] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email Us</h4>
                      <a
                        href="mailto:info@credozen.in"
                        className="text-white font-bold text-sm sm:text-base hover:text-[#f58619] transition-colors"
                      >
                        info@credozen.in
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#f58619] transition-all duration-300 shadow-md">
                      <Clock className="w-5 h-5 text-[#f58619] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Business Hours</h4>
                      <p className="text-white font-medium text-sm sm:text-base">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect Action Buttons */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918089603543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+918089603543"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#f58619]/20 border border-[#f58619]/40 text-[#f58619] font-semibold text-xs sm:text-sm hover:bg-[#f58619] hover:text-white transition-all duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Direct Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#120b1f]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7b51a1] via-[#c33594] to-[#f58619]" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Send Us a Message
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-8 font-normal">
                Fill out the form below and our team will respond within 2 business hours.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 px-6 flex flex-col items-center justify-center text-center bg-white/5 rounded-2xl border border-emerald-500/30"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-sm max-w-md leading-relaxed">
                    Thank you for reaching out to Credozen. Our experts are reviewing your request and will get in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                      Select Service Required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer ${selectedService === service
                              ? "bg-gradient-to-r from-[#f58619] to-[#c33594] text-white shadow-md font-semibold"
                              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#f58619]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f58619] focus:ring-1 focus:ring-[#f58619] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#f58619]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f58619] focus:ring-1 focus:ring-[#f58619] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f58619] focus:ring-1 focus:ring-[#f58619] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Project Details / Message <span className="text-[#f58619]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements, scope, timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f58619] focus:ring-1 focus:ring-[#f58619] transition-all resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#f58619] focus:ring-[#f58619] cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-300 cursor-pointer">
                      I agree to allow Credozen to store and process my contact information.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,134,25,0.4)] text-sm uppercase tracking-wider cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
         3. Location & Interactive Google Map Section
      ────────────────────────────────────────────── */}
      <section className="pt-20 lg:pt-28 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background:
                "linear-gradient(310deg, rgba(245, 134, 25, 1) 0%, rgba(195, 53, 148, 1) 50%, rgba(123, 81, 161, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block"
          >
            OUR LOCATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Visit Our <span className="text-[#f58619]">Office</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base mt-3 font-normal"
          >
            Located at HiLITE Business Park, Kozhikode — the premier tech & business hub of Malabar.
          </motion.p>
        </div>

        {/* Map Container Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-[#120b1f] h-[400px] sm:h-[480px] group"
        >
          {/* Top Location Info Card Overlay */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-black/75 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl max-w-xs sm:max-w-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f58619] flex items-center justify-center text-[#ffffff] shrink-0 shadow-md">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-tight">Credozen Software</h4>
                <p className="text-xs text-[#f58619] font-medium">HiLITE Business Park</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Kozhikode, Kerala, India
            </p>
            <a
              href="https://maps.google.com/?q=HiLITE+Business+Park+Kozhikode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f58619] hover:text-white transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Maps Iframe Embed */}
          <iframe
            title="Credozen Office Location - HiLITE Business Park, Kozhikode"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.149257618956!2d75.83226927584615!3d11.250426050269325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b6f3b0fa6ab%3A0xb35a09e02c6131eb!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "brightness(0.9) contrast(1.1)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>
      </section>

    </main>
  );
}
