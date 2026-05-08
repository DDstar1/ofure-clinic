"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/services-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
};

const featured = services.slice(0, 8);

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
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                      {Icon && <Icon className="w-4 h-4 text-primary-600" />}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold text-gray-800 leading-snug">
                      {service.title}
                    </p>
                  </div>
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
