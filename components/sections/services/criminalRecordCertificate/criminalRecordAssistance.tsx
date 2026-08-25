"use client";

import {
  FileCheck,
  Globe2,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";

export default function CriminalRecordAssistance() {
  const t = useTranslations("criminalRecordCertificate.assistance");

  const services = [
    {
      icon: FileCheck,
      key: "certificateRequests",
    },
    {
      icon: Globe2,
      key: "countryRequirements",
    },
    {
      icon: ShieldCheck,
      key: "authentication",
    },
    {
      icon: ClipboardList,
      key: "internationalProcedures",
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