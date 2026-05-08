"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLINIC } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-primary-600/40 transition-shadow">
              <span className="text-white font-bold text-lg leading-none">O</span>
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-bold text-sm leading-tight transition-colors",
                  scrolled || !isHome ? "text-gray-900" : "text-white"
                )}
              >
                Ofure Clinic
              </p>
              <p
                className={cn(
                  "text-xs transition-colors",
                  scrolled || !isHome
                    ? "text-primary-600"
                    : "text-primary-200"
                )}
              >
                & Maternity Home
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-primary-600 text-white shadow-sm"
                    : scrolled || !isHome
                    ? "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={CLINIC.PHONE_HREF}
              className={cn(
                "hidden lg:flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled || !isHome
                  ? "text-gray-700 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Emergency 24/7</span>
            </a>
            <Link
              href="/appointment"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                scrolled || !isHome
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
                <a
                  href={CLINIC.PHONE_HREF}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  Emergency: {CLINIC.PHONE_DISPLAY}
                </a>
                <Link href="/appointment" className="btn-primary justify-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
