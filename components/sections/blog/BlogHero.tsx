"use client";

import { useTranslations } from "next-intl";

import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

import { BookOpen } from "lucide-react";

export default function BlogHero() {
    const t = useTranslations("blog.hero");

    return (
        <Section className="bg-[var(--surface-secondary)]">
            <Container size="md">
                <div className="mx-auto max-w-3xl text-center">

                    <div className="flex justify-center">
                        <div
                            className="
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-full
                                bg-[var(--color-accent-light)]">
                                <BookOpen size={40} className="text-[var(--color-primary)]" />
                        </div>
                    </div>
                    <Heading className="mt-8">
                        {t("title")}
                    </Heading>

                    <Text variant="large" className="mt-6">
                        {t("subtitle")}
                    </Text>

                    <div className="mt-10">
                        <Button href="/contact">
                            {t("button")}
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}