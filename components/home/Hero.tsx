"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Clock, Star } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 5000, suffix: "+", label: "Patients Served" },
  { value: 1200, suffix: "+", label: "Safe Deliveries" },
  { value: 15, suffix: "+", label: "Years of Care" },
  { value: 24, suffix: "/7", label: "Emergency Care" },
];

const floatingCards = [
  {
    icon: ShieldCheck,
    title: "Certified & Safe",
    subtitle: "Accredited facility",
    color: "bg-primary-600",
  },
  {
    icon: Clock,
    title: "24/7 Maternity",
    subtitle: "Always here for you",
    color: "bg-teal-600",
  },
  {
    icon: Star,
    title: "Trusted Care",
    subtitle: "Thousands of families",
    color: "bg-indigo-600",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative container-custom py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Welcoming patients in Ekpoma, Edo State
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Healthcare You Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              Trust
            </span>
            , Care You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-teal-300">
              Deserve
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            At Ofure Clinic & Maternity Home, we are committed to delivering
            compassionate, evidence-based healthcare for every stage of your
            family's journey — from pregnancy to childhood and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+2340000000000"
              className="btn-outline"
            >
              <Phone className="w-4 h-4" /> Contact Us
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {floatingCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3"
              >
                <div className={`w-9 h-9 ${card.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <card.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                  <p className="text-xs text-white/60">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Stats Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-white/0 rounded-2xl overflow-hidden border border-white/10 mb-6">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30">
                  <svg className="w-20 h-20 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Clinic image placeholder</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-3xl font-bold text-white">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
