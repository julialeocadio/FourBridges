import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div className={clsx(`
      rounded-3xl
      border
      border-[var(--card-border)]
      bg-[var(--card-bg)]
      p-8
      shadow-sm
      transition-all
      hover:-translate-y-1
      hover:shadow-lg
    `,
    className)}
  >
    {children}
    </div>
  );
}