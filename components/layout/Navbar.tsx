import Link from "next/link";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";

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
          <Image 
            src="/images/img.jpeg"
            alt="Four Bridges Logo"
            width={160}
            height={100}
            priority
            className="rounded"/>

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