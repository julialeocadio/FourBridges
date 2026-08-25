"use client";

import {
  FileCheck,
  Stamp,
  Languages,
  Scale,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function ForeignJudgmentAssistance() {
  const t = useTranslations("foreignJudgment.assistance");

  const services = [
    {
      icon: FileCheck,
      key: "documentation",
    },
    {
      icon: Stamp,
      key: "authentication",
    },
    {
      icon: Languages,
      key: "translations",
    },
    {
      icon: Scale,
      key: "recognitionProcedures",
    },
  ];

  return (
    <Section className="bg-[var(--surface-secondary)]">
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <BenefitCard
              key={service.key}
              icon={service.icon}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}