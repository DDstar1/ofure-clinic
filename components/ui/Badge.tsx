import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "teal" | "gray";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variant === "primary" && "bg-primary-100 text-primary-700",
        variant === "teal" && "bg-teal-100 text-teal-700",
        variant === "gray" && "bg-gray-100 text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
