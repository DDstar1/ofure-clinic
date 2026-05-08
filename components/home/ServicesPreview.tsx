"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
};

const featuredServices = [
  { icon: "Baby", title: "Antenatal Care", slug: "antenatal-care", color: "bg-pink-50 text-pink-600" },
  { icon: "HeartHandshake", title: "Maternity Services", slug: "maternity-services", color: "bg-primary-50 text-primary-600" },
  { icon: "SmilePlus", title: "Child Healthcare", slug: "child-healthcare", color: "bg-teal-50 text-teal-600" },
  { icon: "Users", title: "Family Planning", slug: "family-planning", color: "bg-violet-50 text-violet-600" },
  { icon: "FlaskConical", title: "Laboratory Services", slug: "laboratory-services", color: "bg-amber-50 text-amber-600" },
  { icon: "ScanLine", title: "Ultrasound Scan", slug: "ultrasound-scan", color: "bg-indigo-50 text-indigo-600" },
  { icon: "Ribbon", title: "Women's Health", slug: "womens-health", color: "bg-rose-50 text-rose-600" },
  { icon: "Stethoscope", title: "General Consultation", slug: "general-consultation", color: "bg-emerald-50 text-emerald-600" },
];

export default function ServicesPreview() {
  return (
    <SectionWrapper className="bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <Badge variant="teal" className="mb-4">Our Services</Badge>
          <h2 className="section-title mb-4">
            Comprehensive Care for{" "}
            <span className="gradient-text">Every Stage of Life</span>
          </h2>
          <p className="section-subtitle">
            From antenatal monitoring to child immunisation, our wide range of
            services ensures your entire family receives expert medical care
            under one roof.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {featuredServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="card-base p-5 flex flex-col items-center text-center gap-3 hover:-translate-y-1 block"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    {service.title}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
