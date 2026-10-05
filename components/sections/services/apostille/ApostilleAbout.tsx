"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function ApostilleAbout() {
  const t = useTranslations("apostille.about");

  return (
    <Section>
      <Container size="md">
        <div className="mx-auto max-w-3xl">
          <Heading>{t("title")}</Heading>

          <div className="mt-6 space-y-5">
            <Text>{t("description")}</Text>

            <Text>{t("additionalInfo")}</Text>
          </div>

          <div className="mt-8 rounded-2xl bg-[var(--surface-secondary)] p-6">
            <h3 className="font-semibold text-[var(--color-primary)]">
              {t("important.title")}
            </h3>

            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {t("important.text")}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
