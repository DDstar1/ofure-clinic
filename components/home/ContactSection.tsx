import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { CLINIC } from "@/lib/constants";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: [CLINIC.PHONE_DISPLAY, "Emergency Line: 24/7"],
    href: CLINIC.PHONE_HREF,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [CLINIC.EMAIL, CLINIC.EMAIL_APPOINTMENTS],
    href: `mailto:${CLINIC.EMAIL}`,
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Ekpoma, Edo State", "Nigeria"],
    href: "#map",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon–Fri: 8am – 8pm", "Sat: 8am – 4pm | Maternity: 24/7"],
    href: null,
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <Badge className="mb-4">Get in Touch</Badge>
          <h2 className="section-title mb-4">
            We Are Here to{" "}
            <span className="gradient-text">Help You</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a question, need to book an appointment, or want
            to find us — we are always just a call or message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactDetails.map((item) => (
            <div key={item.title} className="card-base p-6 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <div className="w-full min-w-0">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600 break-all">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div
          id="map"
          className="rounded-3xl overflow-hidden border border-gray-200 h-72 mb-10"
        >
          <iframe
            src={CLINIC.MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ofure Clinic location map"
          />
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/appointment" className="btn-primary justify-center">
            Book an Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={CLINIC.WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <Link href="/contact" className="btn-secondary justify-center">
            Full Contact Page
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
