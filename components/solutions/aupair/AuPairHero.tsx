"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import CountryTile from "@/components/ui/CountryTile";
import { useLocale } from "next-intl";

export default function AuPairHero() {
  const t = useTranslations("solutions.work2.hero");
  const locale = useLocale();

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const benefits = t.raw("benefits") as string[];

  const countries = [
    {
      code: "US",
      name: t("countries.us"),
      href: "/countries/united-states",
    },
    {
      code: "DE",
      name: t("countries.de"),
      
      href: "/countries/germany",
    },
    {
      code: "FR",
      name: t("countries.fr"),
      href: "/countries/france",
    }
  ];
   const sortedCountries = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name, locale)
    );

  return (
    <Section className="relative overflow-hidden bg-[var(--surface-secondary)]">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-accent-light)] opacity-40 blur-3xl" />

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
                  size={20}
                  className="text-[var(--color-success)]"
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
              <span className="flex items-center gap-2">
                <FaWhatsapp size={24} />
                {t("whatsapp")}
              </span>
            </Button>
          </div>

          <div className="mt-16">
            <Heading
              level={3}
              className="text-center"
            >
              {t("destinations")}
            </Heading>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sortedCountries.map((country) => (
                <CountryTile
                  key={country.href}
                  {...country}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}