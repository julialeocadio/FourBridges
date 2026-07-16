import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      transition-all
      hover:-translate-y-1
      hover:shadow-lg
    ">
      {children}
    </div>
  );
}