"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const steps = [
  {
    step: "01",
    title: "Antenatal Registration",
    description:
      "Register early in your pregnancy and begin regular monitoring of your health and your baby's development.",
  },
  {
    step: "02",
    title: "Regular Check-ups",
    description:
      "Attend scheduled visits for blood pressure monitoring, foetal growth assessment, and essential screenings.",
  },
  {
    step: "03",
    title: "Birth Planning",
    description:
      "Discuss your birth preferences with our midwives and prepare fully for a safe, positive delivery experience.",
  },
  {
    step: "04",
    title: "Safe Delivery",
    description:
      "Deliver in our fully equipped maternity ward, supported by skilled midwives and doctors around the clock.",
  },
  {
    step: "05",
    title: "Postnatal Support",
    description:
      "Receive expert care for both mother and newborn in the critical weeks following delivery.",
  },
];

export default function MaternalCare() {
  return (
    <SectionWrapper className="bg-gradient-to-br from-primary-950 via-primary-900 to-teal-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="teal" className="mb-5 bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Maternity Care
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Pregnancy Journey,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
                Every Step of the Way
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              From your first positive test to your baby's first breath and
              beyond, our experienced midwives and obstetricians are with you
              throughout every stage of your maternity journey.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Experienced midwives & nurses",
                "Continuous foetal monitoring",
                "Comfortable delivery suite",
                "Emergency obstetric care",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services#maternity-services"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              Explore Maternity Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Timeline steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl font-bold text-teal-400/40 shrink-0 w-8">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
