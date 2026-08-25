"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ServicesHomeHero() {
  const t = useTranslations("servicesHomePage.hero");

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
            className="mx-auto mt-6 max-w-3xl"
          >
            {t("subtitle")}
          </Text>

          <div className="mt-10">
            <Button href="/contact">
              {t("consultation")}
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}