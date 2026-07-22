"use client"

import { useLocale, useTranslations } from "next-intl"
import {
    ShieldCheck,
    Clock3,
    FileLock
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

export default function TranslationsHero() {
    const t = useTranslations("translationsPage.hero");
    const expertise = t.raw("expertise") as string[];
    const locale = useLocale();
    const languages = [...(t.raw("languages") as string[])].sort(
        new Intl.Collator(locale).compare);

    return (
        <Section className="bg-[var(--surface-secondary)]">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/*Left Side*/}
                    <div>
                        <Badge>
                            {t("badge")}
                        </Badge>
                        <Heading className="mt-6">
                            {t("title")}
                        </Heading>
                        <Text variant="large" className="mt-6">
                            {t("subtitle")}
                        </Text>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href="/contact">
                                {t("primaryButton")}
                            </Button>
                            <Button href="/contact" variant="secondary">
                                {t("secondaryButton")}
                            </Button>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-[var(--color-success)]" />
                                <span className="text-sm font-medium text-[var(--color-secondary)]">
                                    {t("features.quality")}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FileLock size={18} className="text-[var(--color-success)]" />
                                <span className="text-sm font-medium text-[var(--color-secondary)]">
                                    {t("features.confidential")}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock3 size={18} className="text-[var(--color-success)]" />
                                <span className="text-sm font-medium text-[var(--color-secondary)]">
                                    {t("features.turnaround")}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*right side*/}
                    <div className="flex justify-center">
                        <div className="
                            w-full
                            max-w-md
                            rounded-3xl
                            border
                            border-[var(--card-border)]
                            bg-white
                            p-8
                            shadow-lg">

                        {/*Languages*/}
                        <Heading level={3} className="mt-8 text-center">
                            {t("support")}
                        </Heading>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {languages.map((language) => (
                                <span key={language} className="
                                    rounded-full
                                    bg-[var(--badge-bg)]
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-[var(--badge-text)]">
                                        {language}
                                </span>
                            ))}
                        </div>

                        <div className="my-8 border-t border-[var(--card-border)]" />
                        <Heading level={3} className="text-center">
                            {t("expertiseTitle")}
                        </Heading>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {expertise.map((area) => (
                                    <div key={area} className="flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-[var(--color-success)]" />
                                        <span className="text-sm">
                                            {area}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </Section>
    );
}