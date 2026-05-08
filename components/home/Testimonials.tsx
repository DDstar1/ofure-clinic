"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col select-none h-full">
      <Quote className="w-7 h-7 text-primary-200 mb-4 shrink-0" />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{t.content}&rdquo;
      </p>
      <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">{t.name}</p>
          <p className="text-xs text-gray-500">{t.role}</p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

const COUNT = testimonials.length;
const GAP = 20;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(800);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Measure container width responsively */
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* Auto-advance — resets whenever current changes */
  useEffect(() => {
    autoRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % COUNT);
    }, 3000);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [current]);

  const cardW = Math.min(380, Math.max(260, containerW * 0.75));
  /* x that centres the active card */
  const xOffset = containerW / 2 - cardW / 2 - current * (cardW + GAP);

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((c) => (c + dir + COUNT) % COUNT),
    []
  );

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) go(1);
    else if (info.offset.x > 50) go(-1);
  };

  const circularDist = (i: number) =>
    Math.min(Math.abs(i - current), COUNT - Math.abs(i - current));

  return (
    <SectionWrapper className="bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="container-custom mb-14">
        <div className="text-center">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="section-subtitle">
            The voices of our patients are our greatest measure of success.
            Here is what families in Ekpoma and beyond say about their care at
            Ofure Clinic.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

        <motion.div
          className="flex pb-2 cursor-grab active:cursor-grabbing"
          style={{ gap: GAP, width: COUNT * (cardW + GAP) - GAP }}
          animate={{ x: xOffset }}
          transition={{ type: "spring", stiffness: 320, damping: 36, mass: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={handleDragEnd}
        >
          {testimonials.map((t, i) => {
            const dist = circularDist(i);
            return (
              <motion.div
                key={t.name}
                style={{ width: cardW }}
                className="shrink-0"
                animate={{ opacity: dist === 0 ? 1 : dist === 1 ? 0.4 : 0.15 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-primary-600"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
