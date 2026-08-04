"use client"

import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function TranslationCTA() {
    const t = useTranslations("translationsPage.cta");
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    return (
        <Section>
            <Container size="md">
                <div className="
                    rounded-3xl
                    border
                    border-[var(--card-border)]
                    bg-[var(--surface-secondary)]
                    px-8
                    py-16
                    text-center
                    shadow-sm">

                    <Heading className="text-white">
                        {t("title")}
                    </Heading>

                    <Text variant="large" className="mt-6 text-white/80">
                        {t("subtitle")}
                    </Text>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button href="/contact" variant="ghost">
                            {t("primaryButton")}
                        </Button>
                        <Button href={`https://wa.me/${phone}`} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                            <span className="inline-flex items-center gap-2">
                            <FaWhatsapp size={24} />
                            {t("secondaryButton")} </span>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}