"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    House,
    Globe,
    Users,
    HousePlus,
    Plane
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";
import CountryVisaOptions from "@/components/sections/country/CountryVisaOptions";

export default function CanadaPage() {
    const t = useTranslations("countriesPage.canada");

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

            flag={<Flags.CA className="h-10 rounded" />}

            highlights={[{
                icon: <Briefcase size={22} />,
                text: t("hero.highlights.economy"),
            },
            {
                icon: <GraduationCap size={22} />,
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
                    href: "/visas/canada/student"
                },
                {
                    icon: Briefcase,
                    title: t("visas.work.title"),
                    description: t("visas.work.description"),
                    features: t.raw("visas.work.features") as string[],
                    href: "/visas/canada/work"
                },
                {
                    icon: HousePlus,
                    title: t("visas.startup.title"),
                    description: t("visas.startup.description"),
                    features: t.raw("visas.startup.features") as string[],
                    href: "/visas/canada/start-up"
                },
                {
                    icon: Plane,
                    title: t("visas.express.title"),
                    description: t("visas.express.description"),
                    features: t.raw("visas.express.features") as string[],
                    href: "/visas/canada/express-entry"
                },
            ]}

        />

        </>
    );
}


