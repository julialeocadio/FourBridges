import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
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
  "border border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--color-primary)]",

  whatsapp: clsx(
    "bg-[#25D366]",
    "hover:bg-[#1EBE5D]",
    "text-[var(--button-primary-text)]",
  ) 
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = clsx(
    base,
    sizes[size],
    variants[variant],
    className
  );

  if (href) {
    const isExternal = 
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}>
            {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return(
    <button className={classes}>
      {children}
    </button>
  );
}