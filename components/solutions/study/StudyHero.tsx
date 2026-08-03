"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import CountryTile from "@/components/ui/CountryTile";


export default function StudyHero() {
  const t = useTranslations("solutions.study");

  const locale = useLocale();

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const benefits = t.raw("benefits") as string[];

  const destinations = [
    {
        code: "CA",
        name: t("countries.ca"),
        href: "/countries/canada",
    },
    {
        code: "US",
        name: t("countries.us"),
        href: "/countries/united-states",
    },
    {
        code: "AU",
        name: t("countries.au"),
        href: "/countries/australia",
    },
    {
        code: "ES",
        name: t("countries.es"),
        href: "/countries/spain",
    },
    {
        code: "BR",
        name: t("countries.br"),
        href: "/countries/brazil",
    },
    {
        code: "PT",
        name: t("countries.pt"),
        href: "/countries/portugal",
    },
    {
        code: "IT",
        name: t("countries.it"),
        href: "/countries/italy",
    },
    {
        code: "FR",
        name: t("countries.fr"),
        href: "/countries/france",
    },
    {
        code: "IE",
        name: t("countries.ie"),
        href: "/countries/ireland",
    },
    {
        code: "DE",
        name: t("countries.de"),
        href: "/countries/germany",
    },
    {
        code: "GB",
        name: t("countries.gb"),
        href: "/countries/united-kingdom",
    },
  ].sort((a,b) => a.name.localeCompare(b.name, locale, {
    sensitivity: "base",
  }));

  return (
    <Section className="relative overflow-hidden bg-[var(--surface-secondary)]">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--highlight-color)] opacity-40 blur-3xl" />
      
      <Container size="md">
          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <Heading>
              {t("title")}
            </Heading>

            <Text
              variant="large"
              className="mt-6"
            >
              {t("subtitle")}
            </Text>

            <div className="mt-10 flex flex-wrap justify-center gap-6">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[var(--highlight-color)]"
                  />

                  <span className="font-medium">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Button href="/contact">
                {t("consultation")}
              </Button>

              <Button
                href={`https://wa.me/${phone}`}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                    <FaWhatsapp size={24} />

                {t("whatsapp")}
                </span>
              </Button>

              <div className="mt-16">
                <h2 className="mb-6 text-center text-xl font-semibold text-[var(--heading-color)]">
                    {t("destinations")}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((country) => (
                        <CountryTile
                            key={country.href}
                            {...country}
                        />
                    ))}
                </div>
              </div>

            </div>

        </div>
      </Container>
    </Section>
  );
}