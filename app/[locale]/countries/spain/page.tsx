"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    House,
    Globe,
    HeartPlus,
    Users,
    UserPlus,
    TrendingUp,
    Laptop,
    Coins,
    UserLock,
    Router,
    Sun,
    StickyNoteCheck
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";
import CountryVisaOptions from "@/components/sections/country/CountryVisaOptions";
import CountryCTA from "@/components/sections/country/CountryCTA";

export default function CanadaPage() {
    const t = useTranslations("countriesPage.spain");

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

            flag={<Flags.ES className="h-10 rounded" />}

            highlights={[{
                icon: <HeartPlus size={22} />,
                text: t("hero.highlights.economy"),
            },
            {
                icon: <Coins size={22} />,
                text: t("hero.highlights.education"),
            },
            {
                icon: <Sun size={22} />,
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
                    href: "/visas/spain/student"
                },
                {
                    icon: Briefcase,
                    title: t("visas.work.title"),
                    description: t("visas.work.description"),
                    features: t.raw("visas.work.features") as string[],
                    href: "/visas/spain/work-visa"
                },
                {
                    icon: UserLock,
                    title: t("visas.work2.title"),
                    description: t("visas.work2.description"),
                    features: t.raw("visas.work2.features") as string[],
                    href: "/visas/spain/highly-qualified-professional-visa"
                },
                {
                    icon: Laptop,
                    title: t("visas.work3.title"),
                    description: t("visas.work3.description"),
                    features: t.raw("visas.work3.features") as string[],
                    href: "/visas/spain/digital-nomad"
                },
                {
                    icon: UserPlus,
                    title: t("visas.residence.title"),
                    description: t("visas.residence.description"),
                    features: t.raw("visas.residence.features") as string[],
                    href: "/visas/spain/retirees-visa"
                },
                {
                    icon: StickyNoteCheck,
                    title: t("visas.humanitarian.title"),
                    description: t("visas.humanitarian.description"),
                    features: t.raw("visas.humanitarian.features") as string[],
                    href: "/visas/spain/arraigo"
                },
                {
                    icon: Users,
                    title: t("visas.family.title"),
                    description: t("visas.family.description"),
                    features: t.raw("visas.family.features") as string[],
                    href: "/visas/spain/family-reunification-visa"
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


