"use client";

import {
  BadgeCheck,
  FileCheck,
  Landmark,
  GraduationCap,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function CAPAssistance() {
  const t = useTranslations("cap.assistance");

  const services = [
    {
      icon: BadgeCheck,
      key: "requirements",
    },
    {
      icon: FileCheck,
      key: "documentation",
    },
    {
      icon: Landmark,
      key: "administrativeProcedures",
    },
    {
      icon: GraduationCap,
      key: "foreignQualifications",
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
              key={service.key}
              icon={service.icon}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

