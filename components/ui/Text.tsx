import { ReactNode } from "react";
import clsx from "clsx";

interface TextProps {
  children: ReactNode;
  variant?: "body" | "large" | "small";
  className?: string;
}

const variants = {
  body: "text-base leading-7",
  large: "text-lg leading-8",
  small: "text-sm leading-6",
};

export default function Text({
  children,
  variant = "body",
  className,
}: TextProps) {
  return (
    <p
      className={clsx(
        variants[variant],
        "text-[var(--text-secondary)]",
        className
      )}
    >
      {children}
    </p>
  );
}