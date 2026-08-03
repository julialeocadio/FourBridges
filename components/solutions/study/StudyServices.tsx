"use client";

import { useTranslations } from "next-intl";
import {
  GraduationCap,
  FileCheck,
  FileText,
  Languages,
  Compass,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function StudyServices() {
  const t = useTranslations("solutions.study.services");

  const services = [
    {
      icon: FileCheck,
      title: t("visa.title"),
      description: t("visa.description"),
    },
    {
      icon: FileText,
      title: t("documents.title"),
      description: t("documents.description"),
    },
    {
      icon: Languages,
      title: t("translations.title"),
      description: t("translations.description"),
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