"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function AuPairCTA() {
  const t = useTranslations("solutions.work2.cta");

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const benefits = t.raw("benefits") as string[];

  return (
    <Section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      <Container size="md">
        <div
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <Heading className="text-white">
            {t("title")}
          </Heading>

          <Text
            variant="large"
            className="mt-6 text-white/80"
          >
            {t("subtitle")}
          </Text>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button href="/contact">
              {t("consultation")}
            </Button>

            <Button
              href={`https://wa.me/${phone}`}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2">
              <FaWhatsapp size={24} />

              {t("whatsapp")}
              </span>
            </Button>

          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={18}
                  className="text-[var(--color-success)]"
                />

                <span className="font-medium">
                  {benefit}
                </span>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
}