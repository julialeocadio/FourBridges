"use client";

import {
  Scale,
  HeartHandshake,
  ShieldAlert,
  FileCheck,
  Globe,
  Search,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";

import Section from "@/components/ui/Section";

import SectionTitle from "@/components/ui/SectionTitle";

import BenefitCard from "@/components/ui/BenefitCard";

export default function ExpertWitnessMatters() {
  const t = useTranslations("expertWitness.matters");

  const matters = [
    {
      icon: Scale,
      key: "immigrationCourt",
    },
    {
      icon: HeartHandshake,
      key: "humanRights",
    },
    {
      icon: ShieldAlert,
      key: "structuralViolence",
    },
    {
      icon: FileCheck,
      key: "vawaTVisa",
    },
    {
      icon: Globe,
      key: "countryConditions",
    },
    {
      icon: Search,
      key: "humanitarianAssessment",
    },
  ];

  return (
    <Section className="bg-[var(--surface-secondary)]">
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {matters.map((matter) => (
            <BenefitCard
              key={matter.key}
              icon={matter.icon}
              title={t(`${matter.key}.title`)}
              description={t(`${matter.key}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
