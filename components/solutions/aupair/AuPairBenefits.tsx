"use client";

import { Home, Globe, Languages, Plane } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function AuPairBenefits() {
  const t = useTranslations("solutions.work2.why");

  const benefits = [
    {
      icon: Home,
      title: t("hostFamily.title"),
      description: t("hostFamily.description"),
    },
    {
      icon: Globe,
      title: t("exchange.title"),
      description: t("exchange.description"),
    },
    {
      icon: Languages,
      title: t("language.title"),
      description: t("language.description"),
    },
    {
      icon: Plane,
      title: t("travel.title"),
      description: t("travel.description"),
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