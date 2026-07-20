"use client"

import { useTranslations } from "next-intl"

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceDetailCard from "@/components/ui/ServiceDetailCard";

import {
    GraduationCap,
    Briefcase,
    Users,
    House,
    CircleDollarSign,
} from "lucide-react";

export default function ServicesGrid() {
    const t = useTranslations("servicesPage.grid")
    const services = [
  {
    icon: GraduationCap,
    title: t("study.title"),
    description: t("study.description"),
    href: "/services/student-visas",
    items: t.raw("study.item")
  },
  {
    icon: Briefcase,
    title: t("work.title"),
    description: t("work.description"),
    href: "/services/work-visas",
    items: t.raw("work.item")
  },
  {
    icon: Users,
    title: t("family.title"),
    description: t("family.description"),
    href: "/services/family-sponsorship",
    items: t.raw("family.item")
  },
  {
    icon: House,
    title: t("residency.title"),
    description: t("residency.description"),
    href: "/services/permanent-residency",
    items: t.raw("residency.item")
  },
  {
    icon: CircleDollarSign,
    title: t("investor.title"),
    description: t("investor.description"),
    href: "/services/investor-visas",
    items: t.raw("investor.item")
  }
];

return (
  <Section>
    <Container>

      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceDetailCard
            key={service.href}
            {...service}
            learnMore={t("learnMore")}
          />
        ))}
      </div>

    </Container>
  </Section>
);
}