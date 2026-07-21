"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    House,
    Globe
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";

export default function CanadaPage() {
    const t = useTranslations("countriesPage.canada");

    return (
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
    );
}


