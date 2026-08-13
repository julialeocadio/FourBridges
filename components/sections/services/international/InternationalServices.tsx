"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceTile from "@/components/ui/ServiceTile";

export default function InternationalServices() {
  const t = useTranslations("internationalServices");

  const services = [
    {
      id: "higherEducation",
      href: "/services/international/higher-education-diploma-validation",
    },
    {
      id: "highSchool",
      href: "/services/international/high-school-diploma-validation",
    },
    {
      id: "cap",
      href: "/services/international/cap",
    },
    {
      id: "europeanCertificates",
      href: "/services/international/european-certificates-search",
    },
    {
      id: "europeanDescendants",
      href: "/services/international/european-descendants-search",
    },
    {
      id: "nieSpain",
      href: "/services/international/nie-spain",
    },
    {
      id: "driversLicense",
      href: "/services/international/drivers-license-regularization",
    },
    {
      id: "businessPlan",
      href: "/services/international/business-plan",
    },
    {
      id: "foreignJudgment",
      href: "/services/international/foreign-judgment-validation",
    },
    {
      id: "crnm",
      href: "/services/international/crnm-rnm-rne",
    },
    {
      id: "arraigo",
      href: "/services/international/arraigo",
    },
    {
      id: "criminalRecord",
      href: "/services/international/criminal-record",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceTile
              key={service.id}
              title={t(`services.${service.id}.title`)}
              description={t(`services.${service.id}.description`)}
              href={service.href}
              learnMore={t("learnMore")} 
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}