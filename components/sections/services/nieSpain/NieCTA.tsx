"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function NieCTA() {
  const t = useTranslations("nieSpain.cta");

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <Section>
      <Container size="md">
        <div className="
            rounded-[var(--radius-lg)]
            bg-gradient-to-br
            from-[var(--color-primary)]
            to-[var(--color-secondary)]
            px-8
            py-16
            text-center
            shadow-[var(--shadow-md)]
            lg:px-16">
            
            <Heading className="text-white">{t("title")}</Heading>

          <Text
            variant="large"
            className="mt-6 text-white/80"
          >
            {t("subtitle")}
          </Text>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="ghost">
              {t("button")}
            </Button>

            <Button href={`https://wa.me/${phone}`} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2">
                <FaWhatsapp size={24} />
                {t("whatsapp")} </span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}