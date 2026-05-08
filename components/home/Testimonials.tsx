"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const testimonials = [
  {
    initials: "A.O.",
    name: "Amaka Okonkwo",
    role: "Mother of 2",
    content:
      "I delivered both my children at Ofure Clinic and the experience was exceptional. The midwives were so supportive throughout my labour, and I always felt safe and cared for. I recommend this clinic to every expectant mother I know.",
    rating: 5,
  },
  {
    initials: "E.I.",
    name: "Emmanuel Idahosa",
    role: "Father & Patient",
    content:
      "My wife and I were very anxious during her pregnancy, but the antenatal team at Ofure Clinic put us at ease from our very first visit. The doctors took time to answer all our questions and the facility is clean and well-maintained.",
    rating: 5,
  },
  {
    initials: "C.A.",
    name: "Chidinma Agbede",
    role: "Patient",
    content:
      "I visited for a general check-up and was impressed by how professional and thorough the consultation was. The laboratory results came back quickly and the doctor explained everything clearly. A truly patient-centred clinic.",
    rating: 5,
  },
  {
    initials: "F.O.",
    name: "Favour Okafor",
    role: "Mother",
    content:
      "The postnatal care I received here was wonderful. The nurses helped me with breastfeeding and made sure my baby and I were both doing well before discharge. I felt genuinely cared for, not just processed.",
    rating: 5,
  },
  {
    initials: "O.E.",
    name: "Osazemen Ehigie",
    role: "Patient",
    content:
      "I have been bringing my children for their immunisations here for three years. The staff are always gentle and reassuring with the children. The vaccination records are well-kept and the advice given to parents is very helpful.",
    rating: 5,
  },
  {
    initials: "B.U.",
    name: "Blessing Uwagbale",
    role: "Patient",
    content:
      "After struggling with a gynaecological concern for months, I finally visited Ofure Clinic. The doctor was professional, listened carefully, and provided a treatment plan that actually worked. I am so grateful for their expertise.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="section-title mb-4">
            What Our{" "}
            <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="section-subtitle">
            The voices of our patients are our greatest measure of success.
            Here is what families in Ekpoma and beyond say about their care at
            Ofure Clinic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
