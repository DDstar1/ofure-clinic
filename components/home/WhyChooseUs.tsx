"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Clock,
  Microscope,
  Award,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    description:
      "Every treatment plan is tailored to the unique needs of each patient. We listen, we explain, and we care beyond the diagnosis.",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Accredited",
    description:
      "Our facility meets rigorous safety and quality standards, providing a clean, well-equipped environment you can trust.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our skilled team of doctors, midwives, nurses, and specialists brings years of experience and continuous professional development.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    title: "24/7 Maternity Services",
    description:
      "Labour does not wait for business hours. Our maternity unit is staffed around the clock so you are never alone when it matters most.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Microscope,
    title: "Modern Diagnostics",
    description:
      "From on-site laboratory services to ultrasound imaging, we use current technology for accurate, timely diagnoses.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Award,
    title: "Community Trusted",
    description:
      "Thousands of families in Ekpoma and surrounding communities have placed their trust in us — a testament to our commitment to quality care.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2 className="section-title mb-4">
            Healthcare Built on{" "}
            <span className="gradient-text">Trust & Compassion</span>
          </h2>
          <p className="section-subtitle">
            We believe everyone deserves high-quality healthcare. Here is what
            makes Ofure Clinic & Maternity Home different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base p-7 group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${reason.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
