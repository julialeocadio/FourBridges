"use client"
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactHero() {
  const t = useTranslations("contact");
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <Section className="bg-[var(--surface-secondary)]">
      <Container size="md">
        <div className="mx-auto max-w-3xl text-center">
          <Heading>{t("title")}</Heading>

          <Text
            variant="large"
            className="mt-6"
          >
            {t("subtitle")}
          </Text>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#contact-form">
              {t("button")}
            </Button>
            <Button 
                href={whatsappUrl} 
                variant="whatsapp" 
                target="_blank" 
                rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2">
                  <FaWhatsapp size={24} /> {t("button2")}
                </span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}