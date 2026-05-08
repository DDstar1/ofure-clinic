"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const highlights = [
  "Experienced, caring medical professionals",
  "Modern diagnostic and laboratory facilities",
  "Comprehensive maternity and newborn care",
  "Affordable, accessible healthcare for all",
];

export default function Welcome() {
  return (
    <SectionWrapper className="bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-teal-50 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-300">
                <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm text-primary-400">Clinic facility image</p>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[200px]">
              <p className="text-4xl font-bold text-primary-700">15+</p>
              <p className="text-sm text-gray-600 mt-1">Years serving the Ekpoma community</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Badge className="mb-4">Welcome</Badge>
            <h2 className="section-title mb-5">
              Welcome to{" "}
              <span className="gradient-text">Ofure Clinic</span>{" "}
              & Maternity Home
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Established in Ekpoma, Edo State, Ofure Clinic & Maternity Home has
              been a trusted pillar of community healthcare for over a decade. We
              offer a warm, patient-centred environment where every individual
              receives the highest standard of medical care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our dedicated team of healthcare professionals combines clinical
              expertise with genuine compassion, ensuring every patient — from
              newborns to seniors — feels heard, supported, and cared for.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
