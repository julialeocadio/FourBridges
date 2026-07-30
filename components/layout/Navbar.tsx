"use client";

import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const services = [
    {key: "apostille", href: "/services/apostille"},
    {key: "witness", href: "/services/expert-witness"},
    {key: "family", href: "/services/family"},
    {key: "genealogy", href: "/services/genealogy"},
    {key: "immigration", href: "/services/immigration"},
    {key: "international", href: "/services/international-services"},
    {key: "translation", href: "/services/translations"},
  ];

  type Country = { key: string; href: string; Flag?: ComponentType<any> };

  const countries: Country[] = [
    { key: "us", Flag: Flags.US, href: "/countries/united-states" },
    { key: "pt", Flag: Flags.PT, href: "/countries/portugal" },
    { key: "au", Flag: Flags.AU, href: "/countries/australia" },
    { key: "ca", Flag: Flags.CA, href: "/countries/canada" },
    { key: "es", Flag: Flags.ES, href: "/countries/spain" },
    { key: "fr", Flag: Flags.FR, href: "/countries/france" },
    { key: "ie", Flag: Flags.IE, href: "/countries/ireland" },
    { key: "it", Flag: Flags.IT, href: "/countries/italy" },
    { key: "de", Flag: Flags.DE, href: "/countries/germany" },
    { key: "gb", Flag: Flags.GB, href: "/countries/united-kingdom" },
    { key: "br", Flag: Flags.BR, href: "/countries/brazil" }
  ];

  const sortedServices = services
    .map((service) => ({
      ...service,
      label: t(service.key),
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label, locale, {
        sensitivity: "base",
    })
  );

    const sortedCountries = countries
    .map((country) => ({
      ...country,
      label: t(country.key),
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label, locale, {
        sensitivity: "base",
    })
  );

  const navigation = [
    {label: t("home"), href: "/"},
    {label: t("about"), href: "/about"},
    {label: t("services"), href: "/services", Children: sortedServices},
    {label: t("countries"), href: "/countries", Children: sortedCountries},
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
          <Link href={"/"}>
            <Image 
              src="/images/img.jpeg"
              alt="Four Bridges Logo"
              width={160}
              height={100}
              priority
              className="rounded"/>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => 
              item.Children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="
                      flex
                      items-center
                      gap-1
                      font-medium 
                      text-[var(--navbar-link)]
                      transition-colors 
                      duration-300
                      hover:text-[var(--navbar-link-hover)]"
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                <div className="
                  invisible
                  absolute 
                  left-0 
                  top-full 
                  z-50
                  pt-2
                  w-64
                  rounded-lg
                  border 
                  border-gray-200
                  bg-white
                  py-2
                  opacity-0
                  shadow-xl
                  transition-all
                  duration-200
                  group-hover:visible
                  group-hover:opacity-100">
                  {item.Children.map((child) => {
                    const FlagComponent = (child as any).Flag;

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100">
                          {FlagComponent && (
                            <FlagComponent
                              title={child.label}
                              className="h-4 w-auto rounded-sm" />
                          )}

                          <span>{child.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="
                font-medium
                text-[var(--navbar-link)]
                transition-colors
                duration-300
                hover:text-[var(--navbar-link-hover)]">
                  {item.label}
              </Link>
            )
          )}
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