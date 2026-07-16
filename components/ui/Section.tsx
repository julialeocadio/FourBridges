import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: "sm" | "md" | "lg";
  background?: "default" | "surface";
}

const spacingVariants = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
};

const backgroundVariants = {
  default: "bg-[var(--color-background)]",
  surface: "bg-[var(--color-surface)]",
};

export default function Section({
  children,
  id,
  className,
  spacing = "md",
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        spacingVariants[spacing],
        backgroundVariants[background],
        className
      )}
    >
      {children}
    </section>
  );
}