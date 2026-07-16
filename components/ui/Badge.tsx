import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "soft" | "solid";
  className?: string;
}

const base =
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300";

const variants = {
  soft: clsx(
    "bg-[var(--badge-bg)]",
    "text-[var(--badge-text)]",
    "border",
    "border-[var(--badge-border)]"
  ),

  solid: clsx(
    "bg-[var(--badge-solid-bg)]",
    "text-[var(--badge-solid-text)]"
  ),
};

export default function Badge({
  children,
  variant = "soft",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        base,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}