import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full range of healthcare services offered at Ofure Clinic & Maternity Home — antenatal care, maternity, child health, laboratory, ultrasound, and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby, Heart, Users, Stethoscope, SmilePlus, ShieldCheck,
  FlaskConical, ScanLine, HeartHandshake, Ribbon, Ambulance, ClipboardList,
};

const colorMap = [
  "bg-pink-50 text-pink-600",
  "bg-primary-50 text-primary-600",
  "bg-violet-50 text-violet-600",
  "bg-emerald-50 text-emerald-600",
  "bg-teal-50 text-teal-600",
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-indigo-50 text-indigo-600",
  "bg-rose-50 text-rose-600",
  "bg-fuchsia-50 text-fuchsia-600",
  "bg-red-50 text-red-600",
  "bg-cyan-50 text-cyan-600",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom text-center">
          <Badge className="mb-5 bg-white/10 border-white/20 text-white">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              Under One Roof
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From antenatal monitoring to child immunisation, from laboratory
            diagnostics to women's health — our full-spectrum services are
            designed to care for your entire family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const colorClass = colorMap[i % colorMap.length];
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="card-base p-7 flex flex-col hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-5`}>
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h2 className="font-bold text-gray-900 text-xl mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-teal-600 py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our team is happy to guide you to the right service. Book a general
            consultation and let us take care of the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold px-8 py-4 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
