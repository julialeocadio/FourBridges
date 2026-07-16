import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export default function Highlight({
  children,
}: HighlightProps) {
  return (
    <span className="text-[var(--highlight-color)]">
      {children}
    </span>
  );
}