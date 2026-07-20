"use client"

import { useTranslations } from "next-intl";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { CheckCircle2 } from "lucide-react";

export default function ServicesHero() {
    const t = useTranslations("servicesPage.hero");

    return (
        <Section className="bg-[var(--surface-secondary)]">
            <Container size="md">
                <div className="mx-auto max-w-3xl tex-center">
                    <Badge>
                        {t("badge")}
                    </Badge>
                    <Heading className="mt-6">
                        {t("title")}
                    </Heading>
                    <Text
                        variant="large"
                        className="mt-6">
                        {t("subtitle")}
                    </Text>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button href="/contact">
                            {t("primaryButton")}
                        </Button>
                        <Button href="/contact" variant="secondary">
                            {t("secondaryButton")}
                        </Button>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-[var(--color-success)]"/>

                            <span className="text-sm font-medium text-[var(--color-secondary)]">
                                {t("personalized")}
                            </span>
                        </div>
                       
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-[var(--color-success)]"/>

                            <span className="text-sm font-medium text-[var(--color-secondary)]">
                                {t("multilingual")}
                            </span>
                        </div>
                       
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-[var(--color-success)]"/>

                            <span className="text-sm font-medium text-[var(--color-secondary)]">
                                {t("online")}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}