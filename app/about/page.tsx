import type { Metadata } from "next";
import { Target, Eye, Heart, ShieldCheck, Users, Award, Leaf, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ofure Clinic & Maternity Home — our history, mission, vision, values, and the dedicated healthcare team serving Ekpoma and Edo State.",
};

const values = [
  { icon: Heart, title: "Compassion", description: "We treat every patient as we would our own family — with kindness, empathy, and dignity at every touchpoint.", color: "bg-rose-50 text-rose-600" },
  { icon: ShieldCheck, title: "Integrity", description: "We uphold the highest ethical standards, providing transparent, honest healthcare guidance you can rely on.", color: "bg-primary-50 text-primary-600" },
  { icon: Star, title: "Excellence", description: "We are committed to clinical excellence through continuous learning, evidence-based practice, and quality improvement.", color: "bg-amber-50 text-amber-600" },
  { icon: Users, title: "Teamwork", description: "Our multidisciplinary team works collaboratively, placing the patient at the centre of every decision.", color: "bg-teal-50 text-teal-600" },
  { icon: Leaf, title: "Sustainability", description: "We serve our community with a long-term commitment to improving healthcare access and outcomes in Ekpoma.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Award, title: "Accountability", description: "We take responsibility for the outcomes of our care and continuously seek to learn and improve.", color: "bg-violet-50 text-violet-600" },
];

const stats = [
  { value: 5000, suffix: "+", label: "Patients Served" },
  { value: 1200, suffix: "+", label: "Safe Deliveries" },
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 12, suffix: "", label: "Healthcare Services" },
];

const milestones = [
  { year: "2009", title: "Clinic Founded", description: "Ofure Clinic & Maternity Home opened its doors in Ekpoma with a small but passionate team committed to community healthcare." },
  { year: "2012", title: "Maternity Unit Expansion", description: "A dedicated maternity unit and labour ward was established, enabling comprehensive obstetric care for expectant mothers." },
  { year: "2015", title: "Laboratory & Diagnostics", description: "An on-site laboratory and ultrasound facility was added, bringing modern diagnostics closer to the community." },
  { year: "2018", title: "24/7 Emergency Services", description: "The clinic launched round-the-clock emergency and maternity services, ensuring care is always available." },
  { year: "2021", title: "Community Health Programme", description: "A community outreach programme was launched to provide preventive healthcare education across Ekpoma and surrounding areas." },
  { year: "2024", title: "Continued Growth", description: "With over 5,000 patients served and 1,200 safe deliveries, Ofure Clinic continues to grow and serve its community." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom text-center">
          <Badge className="mb-5 bg-white/10 border-white/20 text-white">About Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Caring for Ekpoma,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              One Family at a Time
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            For over 15 years, Ofure Clinic & Maternity Home has been the
            trusted healthcare partner for thousands of families in Ekpoma and
            across Edo State.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary-700 mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/85 leading-relaxed">
              To provide accessible, high-quality, patient-centred healthcare
              that improves the lives of individuals and families in Ekpoma and
              the surrounding communities. We deliver our services with
              professionalism, compassion, and a deep commitment to safe,
              evidence-based medical practice.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/85 leading-relaxed">
              To be the leading community healthcare institution in Edo State —
              recognised for clinical excellence, trusted by generations of
              families, and dedicated to the total wellbeing of every patient
              who walks through our doors.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper className="bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <Badge className="mb-5">Our Story</Badge>
          <h2 className="section-title mb-6">
            A Clinic Built on <span className="gradient-text">Community Trust</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Ofure Clinic & Maternity Home was established with a singular
            purpose: to bring compassionate, high-quality healthcare to the
            heart of Ekpoma. What began as a modest primary healthcare facility
            has grown into a comprehensive clinic offering maternity services,
            diagnostics, child health, and preventive care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our growth has been built on the trust of the families we serve.
            Every safe delivery, every healthy child immunised, every mother
            supported through pregnancy — these are not just medical outcomes.
            They are the stories of our community, and they are what drive us
            forward every single day.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <Badge className="mb-4">Core Values</Badge>
            <h2 className="section-title mb-4">
              The Principles That{" "}
              <span className="gradient-text">Guide Our Care</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-base p-7 hover:-translate-y-1 transition-transform">
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-5`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="section-title mb-4">
              Milestones & <span className="gradient-text">Growth</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-100" />
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex gap-8 pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight shrink-0">
                      {milestone.year}
                    </div>
                    <div className="card-base p-6 flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-teal-600 py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book an appointment today and discover why thousands of families in
            Ekpoma trust Ofure Clinic with their health.
          </p>
          <Link href="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
