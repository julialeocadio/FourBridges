import Link from "next/link";
import clsx from "clsx";

import Heading from "../ui/Heading";

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export default function FooterColumn({
  title,
  links,
  className,
}: FooterColumnProps) {
  return (
    <div className={clsx("space-y-6", className)}>
      <Heading level={3} className="text-lg">
        {title}
      </Heading>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                text-sm
                text-[var(--footer-link)]
                transition-colors
                duration-300
                hover:text-[var(--footer-link-hover)]
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}