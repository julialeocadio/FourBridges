"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const navigation = [
    {label: t("home"), href: "/"},
    {label: t("about"), href: "/about"},
    {label: t("services"), href: "/services"},
    {label: t("countries"), href: "/countries"},
    {label: t("contact"), href: "/contact"},
  ];
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

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Button
              href="/contact"
              size="md">
              
              {t("consultation")}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}