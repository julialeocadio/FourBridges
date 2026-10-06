"use client";

import { useTranslations } from "next-intl";

import {
  Globe,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function CitizenshipBenefits() {
  const t = useTranslations("solutions.citizenship.why");

  const benefits = [
    {
      icon: Globe,
      title: t("mobility.title"),
      description: t("mobility.description"),
    },
    {
      icon: TrendingUp,
      title: t("opportunities.title"),
      description: t("opportunities.description"),
    },
    {
      icon: Users,
      title: t("family.title"),
      description: t("family.description"),
    },
    {
      icon: ShieldCheck,
      title: t("guidance.title"),
      description: t("guidance.description"),
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
