"use client"

import { useTranslations } from "next-intl"

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import SolutionCard from "@/components/ui/SolutionCard";
import {
    GraduationCap,
    Briefcase,
    House,
    CircleDollarSign,
    PersonStanding,
    IdCard,
} from "lucide-react";

export default function Solutions() {
  const t = useTranslations("solutions");
  const solutions = [
    {
        icon: GraduationCap,
        title: t("study.title"),
        description: t("study.description"),
        href: "/solutions/study-abroad",
    },
    {
        icon: PersonStanding,
        title: t("work2.title"),
        description: t("work2.description"),
        href: "/solutions/au-pair",
    },
    {
        icon: Briefcase,
        title: t("work.title"),
        description: t("work.description"),
        href: "/solutions/work-abroad",
    },
    {
        icon: House,
        title: t("residency.title"),
        description: t("residency.description"),
        href: "/solutions/permanent-residency",
    },
    {
        icon: CircleDollarSign,
        title: t("investor.title"),
        description: t("investor.description"),
        href: "/solutions/investor",
    },
    {
        icon: IdCard,
        title: t("citizenship.title"),
        description: t("citizenship.description"),
        href: "/solutions/citizenship",
    },
  ]

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
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.href}
            {...solution}
            learnMore={t("learnMore")}
          />
        ))}
      </div>

    </Container>
  </Section>
);
}