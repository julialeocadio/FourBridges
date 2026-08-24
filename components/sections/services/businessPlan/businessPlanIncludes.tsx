"use client";

import {
  FileText,
  Building2,
  BarChart3,
  Megaphone,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function BusinessPlanIncludes() {
  const t = useTranslations("businessPlan.includes");

  const sections = [
    {
      icon: FileText,
      key: "executiveSummary",
    },
    {
      icon: Building2,
      key: "businessDescription",
    },
    {
      icon: BarChart3,
      key: "marketAnalysis",
    },
    {
      icon: Megaphone,
      key: "marketingStrategy",
    },
    {
      icon: Settings,
      key: "operationalPlan",
    },
    {
      icon: TrendingUp,
      key: "financialProjections",
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