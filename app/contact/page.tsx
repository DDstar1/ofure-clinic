"use client";

import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  AlertTriangle, Send, CheckCircle2,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CLINIC } from "@/lib/constants";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Emergencies Only" },
  { day: "Maternity Unit", time: "24 Hours / 7 Days" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom text-center">
          <Badge className="mb-5 bg-white/10 border-white/20 text-white">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            We Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              Here for You
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a question or need assistance? Reach out to our friendly team
            and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <p className="font-semibold">Medical Emergency? Call immediately — 24/7 line available.</p>
          </div>
          <a href={CLINIC.PHONE_HREF} className="bg-white text-red-600 font-bold px-5 py-2 rounded-full hover:bg-red-50 transition-colors flex items-center gap-2 shrink-0">
            <Phone className="w-4 h-4" /> {CLINIC.PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <SectionWrapper className="bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="card-base p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={CLINIC.PHONE_DISPLAY}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 text-sm transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 text-sm transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="antenatal">Antenatal Enquiry</option>
                      <option value="maternity">Maternity Services</option>
                      <option value="general">General Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 text-sm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", lines: [CLINIC.PHONE_DISPLAY, "Emergency line available 24/7"], href: CLINIC.PHONE_HREF },
                { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with us instantly", "Quick response during business hours"], href: CLINIC.WHATSAPP_HREF },
                { icon: Mail, title: "Email", lines: [CLINIC.EMAIL, CLINIC.EMAIL_APPOINTMENTS], href: `mailto:${CLINIC.EMAIL}` },
                { icon: MapPin, title: "Address", lines: ["Ekpoma, Edo State", "Nigeria"], href: null },
              ].map((item) => (
                <div key={item.title} className="card-base p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                        {item.lines[0]}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{item.lines[0]}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{item.lines[1]}</p>
                  </div>
                </div>
              ))}

              {/* Opening hours */}
              <div className="card-base p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Opening Hours</p>
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className={`font-medium ${h.day === "Maternity Unit" ? "text-teal-600" : "text-gray-900"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-gray-200 h-72 bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-primary-300" />
              <p className="font-medium text-gray-500">Google Maps — Ekpoma, Edo State, Nigeria</p>
              <p className="text-sm mt-1 text-gray-400">Replace with your Google Maps embed</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
