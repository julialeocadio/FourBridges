"use client";

import { useTranslations } from "next-intl";

import {
  ClipboardCheck,
  TrendingUp,
  FileCheck,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function InvestorServices() {
  const t = useTranslations("solutions.investor.services");

  const services = [
    {
      icon: ClipboardCheck,
      title: t("assessment.title"),
      description: t("assessment.description"),
    },
    {
      icon: TrendingUp,
      title: t("opportunities.title"),
      description: t("opportunities.description"),
    },
    {
      icon: FileCheck,
      title: t("documentation.title"),
      description: t("documentation.description"),
    },
    {
      icon: MessageCircle,
      title: t("support.title"),
      description: t("support.description"),
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
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
