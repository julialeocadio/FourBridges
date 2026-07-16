import clsx from "clsx";

import Heading from "./Heading";
import Text from "./Text";

import { ReactNode } from "react";


interface SectionTitleProps {
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Heading level={2}>{title}</Heading>

      {subtitle && (
        <Text variant="large" className="mt-4">
          {subtitle}
        </Text>
      )}
    </div>
  );
}