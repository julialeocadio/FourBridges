"use client";

import { useTranslations } from "next-intl";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function StudyBenefits() {
  const t = useTranslations("solutions.study.why");

  const benefits = [
    {
      icon: Globe,
      title: t("global.title"),
      description: t("global.description"),
    },
    {
      icon: GraduationCap,
      title: t("education.title"),
      description: t("education.description"),
    },
    {
      icon: Briefcase,
      title: t("career.title"),
      description: t("career.description"),
    },
    {
      icon: Users,
      title: t("culture.title"),
      description: t("culture.description"),
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