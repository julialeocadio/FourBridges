import Link from "next/link";

import Button from "../ui/Button";
import Container from "../ui/Container";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header 
      className="
        sticky
        top-0
        z-50
        border-b
        border-[var(--navbar-border)]
        bg-[var(--navbar-bg)]
        backdrop-blur-md
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="
              text-2xl 
              font-bold 
              tracking-tight 
              text-[var(--navbar-logo)]"
          >
            Four Bridges
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  font-medium 
                  text-[var(--navbar-link)]
                  transition-colors 
                  duration-300
                  hover:text-[var(--navbar-link-hover)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            href="/contact"
            size="md"
          >
            Book a Consultation
          </Button>
        </div>
      </Container>
    </header>
  );
}