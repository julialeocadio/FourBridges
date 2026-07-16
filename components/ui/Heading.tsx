import { ReactNode } from "react";
import clsx from "clsx";
import { JSX } from "react";

type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const variants = {
  1: "text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
  2: "text-4xl font-bold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
};

export default function Heading({
  children,
  level = 1,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        variants[level],
        "text-[var(--heading-color)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}