"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    UserPlus,
    UserLock,
    Microscope,
    Handshake,
    UserStar,
    UserCog,
    UserKey,
    PersonStanding
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";
import CountryVisaOptions from "@/components/sections/country/CountryVisaOptions";
import CountryCTA from "@/components/sections/country/CountryCTA";

export default function USPage() {
    const t = useTranslations("countriesPage.unitedStates");

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

            flag={<Flags.US className="h-10 rounded" />}

            highlights={[{
                icon: <GraduationCap size={22} />,
                text: t("hero.highlights.economy"),
            },
            {
                icon: <Handshake size={22} />,
                text: t("hero.highlights.education"),
            },
            {
                icon: <Briefcase size={22} />,
                text: t("hero.highlights.qualityLife"),
            },
            {
                icon: <Microscope size={22} />,
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
                    href: "/visas/united-states/student"
                },
                {
                    icon: PersonStanding,
                    title: t("visas.work7.title"),
                    description: t("visas.work7.description"),
                    features: t.raw("visas.work7.features") as string[],
                    href: "/visas/united-states/aupair"
                },
                {
                    icon: UserKey,
                    title: t("visas.work.title"),
                    description: t("visas.work.description"),
                    features: t.raw("visas.work.features") as string[],
                    href: "/visas/united-states/eb1-visa"
                },
                {
                    icon: UserPlus,
                    title: t("visas.work2.title"),
                    description: t("visas.work2.description"),
                    features: t.raw("visas.work2.features") as string[],
                    href: "/visas/united-states/eb2-visa"
                },
                {
                    icon: UserCog,
                    title: t("visas.work3.title"),
                    description: t("visas.work3.description"),
                    features: t.raw("visas.work3.features") as string[],
                    href: "/visas/united-states/eb3-visa"
                },
                {
                    icon: UserLock,
                    title: t("visas.work4.title"),
                    description: t("visas.work4.description"),
                    features: t.raw("visas.work4.features") as string[],
                    href: "/visas/united-states/l-visas"
                },
                {
                    icon: Briefcase,
                    title: t("visas.work5.title"),
                    description: t("visas.work5.description"),
                    features: t.raw("visas.work5.features") as string[],
                    href: "/visas/united-states/h1b-visa"
                },
                {
                    icon: UserStar,
                    title: t("visas.work6.title"),
                    description: t("visas.work6.description"),
                    features: t.raw("visas.work6.features") as string[],
                    href: "/visas/united-states/o1-visa"
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


