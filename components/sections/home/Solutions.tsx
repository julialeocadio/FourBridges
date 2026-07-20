import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import {useTranslations} from "next-intl";
import {
    GraduationCap,
    Briefcase,
    Users,
    House,
    CircleDollarSign,
} from "lucide-react";
import SolutionCard from "@/components/ui/SolutionCard";

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
        icon: Briefcase,
        title: t("work.title"),
        description: t("work.description"),
        href: "/solutions/work-abroad",
    },
    {
        icon: Users,
        title: t("family.title"),
        description: t("family.description"),
        href: "/solutions/family-sponsorship",
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
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
                <SolutionCard
                    key={solution.href}
                    {...solution} 
                    learnMore={t("learnMore")}/>
            ))}
        </div>

        {/* Cards go here */}
      </Container>
    </Section>
  );
}