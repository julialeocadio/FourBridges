import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variants = {
  primary: clsx(
    "bg-[var(--button-primary-bg)]",
    "text-[var(--button-primary-text)]",
    "hover:bg-[var(--button-primary-hover)]"
  ),

  secondary: clsx(
    "border",
    "border-[var(--button-secondary-border)]",
    "bg-[var(--button-secondary-bg)]",
    "text-[var(--button-secondary-text)]",
    "hover:bg-[var(--button-secondary-hover)]",
    "hover:text-[var(--button-secondary-hover-text)]"
  ),

  ghost:
  "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--color-primary)]"
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const classes = clsx(
    base,
    sizes[size],
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}