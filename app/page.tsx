import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import MaternalCare from "@/components/home/MaternalCare";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Ofure Clinic & Maternity Home | Compassionate Healthcare in Ekpoma",
  description:
    "Ofure Clinic & Maternity Home offers comprehensive antenatal, maternity, child health, and general medical services in Ekpoma, Edo State. Available 24/7 for maternity emergencies.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <ServicesPreview />
      <MaternalCare />
      <EmergencyBanner />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
