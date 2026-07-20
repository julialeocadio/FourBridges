"use client";

import {useTranslations} from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessCard from "@/components/ui/ProcessCard";

export default function ServicesProcess() {
  const t = useTranslations("servicesPage.process");

  const steps = [
    {
      step: "01",
      title: t("consultation.title"),
      description: t("consultation.description"),
    },
    {
      step: "02",
      title: t("assessment.title"),
      description: t("assessment.description"),
    },
    {
      step: "03",
      title: t("application.title"),
      description: t("application.description"),
    },
    {
      step: "04",
      title: t("support.title"),
      description: t("support.description"),
    },
  ];

  return (
    <Section className="bg-[var(--surface-secondary)]">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <ProcessCard
              key={step.step}
              {...step}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}