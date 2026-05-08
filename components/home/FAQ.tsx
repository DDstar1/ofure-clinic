"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Ofure Clinic & Maternity Home offer?",
    answer:
      "We provide a comprehensive range of healthcare services including antenatal and postnatal care, safe deliveries, child healthcare, immunisation, family planning, general consultations, laboratory services, ultrasound scans, and women's health services. Our goal is to be your one-stop healthcare provider.",
  },
  {
    question: "Do I need an appointment to visit the clinic?",
    answer:
      "While walk-in patients are welcome, booking an appointment in advance is recommended for specialist consultations and antenatal visits. This helps reduce your waiting time. For emergencies, please come in immediately or call our emergency line.",
  },
  {
    question: "Is your maternity unit available 24 hours a day?",
    answer:
      "Yes. Our maternity and labour ward operates 24 hours a day, 7 days a week, every day of the year. Skilled midwives and healthcare providers are always on duty to support you through every stage of labour and delivery.",
  },
  {
    question: "What should I bring to my antenatal appointment?",
    answer:
      "Please bring your antenatal card (if you have one), a valid ID, any previous medical records related to your pregnancy, your list of current medications, and your health insurance card if applicable. For your first visit, arrive a few minutes early to complete registration.",
  },
  {
    question: "Do you offer family planning services?",
    answer:
      "Yes. We provide a full range of family planning services including contraceptive counselling, IUD insertion and removal, injectable contraceptives, hormonal implants, and pre-conception advice. All consultations are completely confidential.",
  },
  {
    question: "How do I contact the clinic in an emergency?",
    answer:
      `In a medical emergency, call our 24-hour emergency line immediately at ${CLINIC.PHONE_DISPLAY}. You can also come directly to the clinic at any time. For obstetric emergencies, proceed straight to our maternity unit.`,
  },
  {
    question: "Are laboratory results available on the same day?",
    answer:
      "Most routine laboratory tests including full blood count, malaria tests, urinalysis, and pregnancy tests have same-day or rapid turnaround times. Some specialised tests may take longer. Your doctor will advise you on the expected timeline for your specific tests.",
  },
  {
    question: "Does the clinic accept health insurance?",
    answer:
      "We accept a range of health insurance plans and HMO schemes. Please contact our reception team to confirm whether your specific plan is accepted before your appointment. For patients without insurance, we offer transparent, affordable pricing.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("rounded-2xl border transition-colors duration-200", isOpen ? "border-primary-200 bg-primary-50/50" : "border-gray-200 bg-white")}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary-600 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="section-title mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We have answers. Browse our most commonly asked
            questions below, or contact our team for personalised assistance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
