"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, Phone, Clock, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { CLINIC } from "@/lib/constants";

const serviceOptions = [
  "Antenatal Care",
  "Postnatal Care",
  "Maternity Services",
  "Family Planning",
  "General Consultation",
  "Child Healthcare",
  "Immunization",
  "Laboratory Services",
  "Ultrasound Scan",
  "Women's Health",
  "Minor Emergency Care",
  "Health Checkup",
  "Other",
];

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.email.trim()) errs.email = "Email is required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.date) errs.date = "Please select a preferred date";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-primary-400"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom text-center">
          <Badge className="mb-5 bg-white/10 border-white/20 text-white">Book Appointment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Schedule Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              Appointment
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Booking with us is quick and easy. Fill in the form below and our
            team will confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-base p-8">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-16">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Appointment Request Received!
                    </h2>
                    <p className="text-gray-600 max-w-md mb-6">
                      Thank you, <strong>{form.name}</strong>. We have received your appointment
                      request for <strong>{form.service}</strong>. A member of our team will
                      contact you shortly to confirm your booking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={CLINIC.PHONE_HREF} className="btn-primary">
                        <Phone className="w-4 h-4" /> Call Us
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" }); }}
                        className="btn-secondary"
                      >
                        Book Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-7">
                      Appointment Details
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={inputClass("name")}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder={CLINIC.PHONE_DISPLAY}
                            className={inputClass("phone")}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass("email")}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass("service")} bg-white`}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={inputClass("date")}
                          />
                          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Preferred Time
                          </label>
                          <select
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className={`${inputClass("time")} bg-white`}
                          >
                            <option value="">Any available time</option>
                            <option value="8:00 AM">8:00 AM</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Please describe your symptoms or reason for the visit (optional)"
                          className={`${inputClass("message")} resize-none`}
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" /> Confirm Appointment Request
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-base p-6">
                <h3 className="font-bold text-gray-900 mb-4">Important Information</h3>
                <ul className="space-y-3">
                  {[
                    "Our team will confirm your appointment within 24 hours",
                    "Please arrive 10 minutes early for your visit",
                    "Bring your previous medical records if available",
                    "Walk-in patients are always welcome",
                    "For emergencies, call our 24/7 line immediately",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-base p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-600" /> Opening Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { d: "Mon – Fri", t: "8:00 AM – 8:00 PM" },
                    { d: "Saturday", t: "8:00 AM – 4:00 PM" },
                    { d: "Sunday", t: "Emergencies Only" },
                    { d: "Maternity", t: "24 Hours / 7 Days" },
                  ].map((h) => (
                    <div key={h.d} className="flex justify-between">
                      <span className="text-gray-500">{h.d}</span>
                      <span className="font-medium text-gray-800">{h.t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-bold text-red-700 mb-2">Medical Emergency?</h3>
                <p className="text-sm text-red-600 mb-4">
                  Do not fill a form — call us immediately on our 24/7 emergency line.
                </p>
                <a href={CLINIC.PHONE_HREF} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors w-full justify-center">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
