"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function CAPHero() {
  const t = useTranslations("cap.hero");

  const benefits = t.raw("benefits") as string[];

  return (
    <Section className="relative overflow-hidden bg-[var(--surface-secondary)]">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-accent-light)] opacity-40 blur-3xl" />

      <Container size="md">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Heading>{t("title")}</Heading>

          <Text
            variant="large"
            className="mx-auto mt-6 max-w-3xl"
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
