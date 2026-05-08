import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <SectionWrapper className="bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Image header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* Icon + title overlay */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm shrink-0">
                        {Icon && <Icon className="w-5 h-5 text-primary-600" />}
                      </div>
                      <h2 className="font-bold text-white text-lg leading-tight drop-shadow">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
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
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
                    >
                      Book This Service
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
