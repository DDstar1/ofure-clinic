import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import { CLINIC } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ofure Clinic & Maternity Home | Ekpoma, Edo State",
    template: "%s | Ofure Clinic & Maternity Home",
  },
  description:
    "Ofure Clinic & Maternity Home provides compassionate, high-quality healthcare services in Ekpoma, Edo State. Specialising in maternity care, antenatal services, child health, and general medicine.",
  keywords: [
    "clinic Ekpoma",
    "maternity home Ekpoma",
    "antenatal care Edo State",
    "hospital Ekpoma",
    "Ofure Clinic",
    "maternity Nigeria",
    "healthcare Ekpoma",
  ],
  authors: [{ name: "Ofure Clinic & Maternity Home" }],
  creator: "Ofure Clinic & Maternity Home",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: CLINIC.SITE_URL,
    siteName: "Ofure Clinic & Maternity Home",
    title: "Ofure Clinic & Maternity Home | Ekpoma, Edo State",
    description:
      "Compassionate, high-quality healthcare in Ekpoma. Maternity, antenatal care, child health, and general medicine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ofure Clinic & Maternity Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofure Clinic & Maternity Home",
    description:
      "Compassionate, high-quality healthcare in Ekpoma, Edo State.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
