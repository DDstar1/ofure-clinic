import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Blog",
  description:
    "Read expert health tips and medical insights from the team at Ofure Clinic & Maternity Home — covering pregnancy, maternity, child health, nutrition, and more.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
