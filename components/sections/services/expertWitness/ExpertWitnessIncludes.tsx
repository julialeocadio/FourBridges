"use client";

import {
  Search,
  FileSearch,
  ShieldCheck,
  FileText,
  Scale,
  CheckCircle2,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";

import Section from "@/components/ui/Section";

import SectionTitle from "@/components/ui/SectionTitle";

import BenefitCard from "@/components/ui/BenefitCard";

export default function ExpertWitnessHelps() {
  const t = useTranslations("expertWitness.helps");

  const sections = [
    {
      icon: Search,
      key: "technicalAnalysis",
    },
    {
      icon: FileSearch,
      key: "evidenceReview",
    },
    {
      icon: ShieldCheck,
      key: "independentAssessment",
    },
    {
      icon: FileText,
      key: "clearDocumentation",
    },
    {
      icon: Scale,
      key: "legalSupport",
    },
    {
      icon: CheckCircle2,
      key: "professionalConclusions",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <BenefitCard
              key={section.key}
              icon={section.icon}
              title={t(`${section.key}.title`)}
              description={t(`${section.key}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
