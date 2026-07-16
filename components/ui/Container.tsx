import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[var(--container-width)]",
};

export default function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto",
        "w-full",
        sizes[size],
        "px-[var(--container-padding)]",
        "lg:px-[var(--container-padding-lg)]",
        className
      )}
    >
      {children}
    </div>
  );
}