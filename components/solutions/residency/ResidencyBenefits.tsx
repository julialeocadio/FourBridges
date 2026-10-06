"use client";

import { useTranslations } from "next-intl";

import {
  ShieldCheck,
  Globe,
  Users,
  FileCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function ResidencyBenefits() {
  const t = useTranslations("solutions.residency.why");

  const benefits = [
    {
      icon: ShieldCheck,
      title: t("stability.title"),
      description: t("stability.description"),
    },
    {
      icon: Globe,
      title: t("mobility.title"),
      description: t("mobility.description"),
    },
    {
      icon: Users,
      title: t("family.title"),
      description: t("family.description"),
    },
    {
      icon: FileCheck,
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
