"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    House,
    Globe,
    HeartPlus,
    Landmark,
    Users,
    UserPlus,
    MonitorCloud,
    PersonStanding
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";
import CountryVisaOptions from "@/components/sections/country/CountryVisaOptions";
import CountryCTA from "@/components/sections/country/CountryCTA";

export default function CanadaPage() {
    const t = useTranslations("countriesPage.france");

    return (
        <>
        <CountryHero
            badge={t("hero.badge")}
            title={t("hero.title")}
            subtitle={t("hero.subtitle")}

            primaryButton={t("hero.primaryButton")}
            secondaryButton={t("hero.secondaryButton")}

            primaryHref="/contact"
            secondaryHref="#visas"

            features={t.raw("hero.features")}

            countryName={t("hero.badge")}

            flag={<Flags.FR className="h-10 rounded" />}

            highlights={[{
                icon: <Landmark size={22} />,
                text: t("hero.highlights.economy"),
            },
            {
                icon: <HeartPlus size={22} />,
                text: t("hero.highlights.education"),
            },
            {
                icon: <House size={22} />,
                text: t("hero.highlights.qualityLife"),
            },
            {
                icon: <Globe size={22} />,
                text: t("hero.highlights.multicultural"),
            },
        ]}
        benefits=
            {t.raw("hero.benefits")}
        />

        <CountryVisaOptions 
            title={t("visas.title")}
            subtitle={t("visas.subtitle")}
            learnMore={t("learnMore")}
            visas={[
                {
                    icon: GraduationCap,
                    title: t("visas.study.title"),
                    description: t("visas.study.description"),
                    features: t.raw("visas.study.features") as string[],
                    href: "/visas/france/student"
                },
                {
                    icon: PersonStanding,
                    title: t("visas.work4.title"),
                    description: t("visas.work4.description"),
                    features: t.raw("visas.work4.features") as string[],
                    href: "/visas/france/au-pair"
                },
                {
                    icon: Briefcase,
                    title: t("visas.work.title"),
                    description: t("visas.work.description"),
                    features: t.raw("visas.work.features") as string[],
                    href: "/visas/france/work-visa"
                },
                {
                    icon: UserPlus,
                    title: t("visas.work2.title"),
                    description: t("visas.work2.description"),
                    features: t.raw("visas.work2.features") as string[],
                    href: "/visas/france/talent-passport"
                },
                {
                    icon: MonitorCloud,
                    title: t("visas.work3.title"),
                    description: t("visas.work3.description"),
                    features: t.raw("visas.work3.features") as string[],
                    href: "/visas/france/entrepreneur-visa"
                },
                {
                    icon: Users,
                    title: t("visas.family.title"),
                    description: t("visas.family.description"),
                    features: t.raw("visas.family.features") as string[],
                    href: "/visas/france/family-reunification"
                },
            ]}

        />

        <CountryCTA
            title={t("cta.title")}
            subtitle={t("cta.subtitle")}
            consultationButton={t("cta.consultationButton")}
            whatsappButton={t("cta.whatsappButton")}
            consultationHref="/contact"
            benefits={t.raw("cta.benefits") as string[]}
        />

        </>
    );
}


