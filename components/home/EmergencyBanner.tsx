import Link from "next/link";
import { Phone, AlertTriangle } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="bg-red-600 py-5">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-lg leading-tight">
                24-Hour Emergency & Maternity Services
              </p>
              <p className="text-red-100 text-sm">
                Our maternity unit and emergency team are available around the clock.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+2340000000000"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-bold px-6 py-2.5 rounded-full transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-6 py-2.5 rounded-full transition-all"
            >
              Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
