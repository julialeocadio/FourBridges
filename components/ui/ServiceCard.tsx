import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-3xl
        border
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover: shadow-lg
      "
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <div 
        className="mb-6 inline-flex rounded-2xl bg-[var(--color-accent-light)] p-4"
        style={{
            background: "var(--icon-bg)",
        }}
        >
        <Icon
          size={30}
          color="var(--icon-color)"
        />
      </div>

      <h3 
        className="mb-4 text-2xl font-semibold"
        style={{
            color: "var(--title-color)",
        }}
        >
        {title}
      </h3>

      <p 
        className="mb-8" 
        style={{
            color: "var(--text-secondary)",
        }}
        >
        {description}
      </p>

      <div 
        className="flex items-center gap-2 font-medium"
        style={{
            color: "var(--link-color)",
        }}
        >
        Learn More

        <ArrowRight
          className="transition group-hover:translate-x-1"
          size={18}
        />
      </div>
    </Link>
  );
}