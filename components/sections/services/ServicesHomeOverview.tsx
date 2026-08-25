"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceTile from "@/components/ui/ServiceTile";

export default function ServicesHomeOverview() {
  const t = useTranslations("servicesHomePage.services");

  const services = [
  {
    id: "apostille",
    href: "/services/apostille",
  },
  {
    id: "expertWitness",
    href: "/services/expert-witness",
  },
  {
    id: "familyLaw",
    href: "/services/family-law",
  },
  {
    id: "genealogy",
    href: "/services/genealogy",
  },
  {
    id: "immigration",
    href: "/services/immigration",
  },
  {
    id: "internationalServices",
    href: "/services/international-services",
  },
  {
    id: "translation",
    href: "/services/translations",
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
              title={t(`${service.id}.title`)}
              description={t(`${service.id}.description`)}
              href={service.href}
              learnMore={t("learnMore")}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}