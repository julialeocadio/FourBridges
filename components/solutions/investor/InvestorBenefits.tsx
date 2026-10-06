"use client";

import { useTranslations } from "next-intl";

import {
  Globe,
  TrendingUp,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function InvestorBenefits() {
  const t = useTranslations("solutions.investor.why");

  const benefits = [
    {
      icon: Globe,
      title: t("international.title"),
      description: t("international.description"),
    },

    {
      icon: TrendingUp,
      title: t("opportunities.title"),
      description: t("opportunities.description"),
    },

    {
      icon: ShieldCheck,
      title: t("guidance.title"),
      description: t("guidance.description"),
    },

    {
      icon: Users,
      title: t("personalized.title"),
      description: t("personalized.description"),
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
