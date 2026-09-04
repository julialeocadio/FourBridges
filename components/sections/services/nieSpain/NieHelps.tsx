"use client";

import {
  BadgeCheck,
  FileCheck,
  Landmark,
  ClipboardCheck,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function NieHelps() {
  const t = useTranslations("nieSpain.helps");

  const services = [
    {
      icon: BadgeCheck,
      key: "eligibility",
    },
    {
      icon: FileCheck,
      key: "documentation",
    },
    {
      icon: Landmark,
      key: "application",
    },
    {
      icon: ClipboardCheck,
      key: "followUp",
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