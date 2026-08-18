"use client"

import * as Flags from "country-flag-icons/react/3x2";
import { 
    Briefcase,
    GraduationCap,
    UserStar,
    UserPlus,
    TrendingUp,
    HouseHeart,
    Building2,
    Sparkles,
    Laptop,
    Sprout,
    UserSearch,
    User
} from "lucide-react";

import { useTranslations } from "next-intl";
import CountryHero from "@/components/sections/country/CountryHero";
import CountryVisaOptions from "@/components/sections/country/CountryVisaOptions";
import CountryCTA from "@/components/sections/country/CountryCTA";

export default function UAEPage() {
    const t = useTranslations("countriesPage.unitedEmirates");

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

            flag={<Flags.AE className="h-10 rounded" />}

            highlights={[{
                icon: <Sparkles size={22} />,
                text: t("hero.highlights.economy"),
            },
            {
                icon: <HouseHeart size={22} />,
                text: t("hero.highlights.education"),
            },
            {
                icon: <TrendingUp size={22} />,
                text: t("hero.highlights.qualityLife"),
            },
            {
                icon: <Building2 size={22} />,
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
                    /*href: "/visas/united-arab-emirates/student"*/
                    href: "/contact"
                },
                {
                    icon: Briefcase,
                    title: t("visas.work.title"),
                    description: t("visas.work.description"),
                    features: t.raw("visas.work.features") as string[],
                    /*href: "/visas/united-arab-emirates/work"*/
                    href: "/contact"
                },
                {
                    icon: Laptop,
                    title: t("visas.work2.title"),
                    description: t("visas.work2.description"),
                    features: t.raw("visas.work2.features") as string[],
                    /*href: "/visas/united-arab-emirates/remote-work"*/
                    href: "/contact"
                },
                {
                    icon: UserSearch,
                    title: t("visas.work3.title"),
                    description: t("visas.work3.description"),
                    features: t.raw("visas.work3.features") as string[],
                    /*href: "/visas/united-arab-emirates/job-exploration-entry-permit"*/
                    href: "/contact"
                },
                {
                    icon: User,
                    title: t("visas.green.title"),
                    description: t("visas.green.description"),
                    features: t.raw("visas.green.features") as string[],
                    /*href: "/visas/united-arab-emirates/green-visa"*/
                    href: "/contact"
                },
                {
                    icon: UserStar,
                    title: t("visas.golden.title"),
                    description: t("visas.golden.description"),
                    features: t.raw("visas.golden.features") as string[],
                    /*href: "/visas/united-arab-emirates/golden-visa"*/
                    href: "/contact"
                },
                {
                    icon: Sprout,
                    title: t("visas.blue.title"),
                    description: t("visas.blue.description"),
                    features: t.raw("visas.blue.features") as string[],
                    /*href: "/visas/united-arab-emirates/blue-visa"*/
                    href: "/contact"
                },
                {
                    icon: UserPlus,
                    title: t("visas.retirement.title"),
                    description: t("visas.retirement.description"),
                    features: t.raw("visas.retirement.features") as string[],
                    /*href: "/visas/united-arab-emirates/retirement"*/
                    href: "/contact"
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


