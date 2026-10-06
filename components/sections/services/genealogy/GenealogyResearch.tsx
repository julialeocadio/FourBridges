"use client";

import {
  Baby,
  Heart,
  Cross,
  Church,
  MapPin,
  Users,
} from "lucide-react";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

const icons = [
  Baby,
  Heart,
  Cross,
  Church,
  MapPin,
  Users,
];

export default function GenealogyResearch() {
  const t = useTranslations("genealogy.research");

  const items = t.raw("items") as {
    title: string;
    description: string;
  }[];

  return (
    <Section className="bg-[var(--surface-secondary)]">
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <Heading>{t("title")}</Heading>

          <Text
            variant="large"
            className="mx-auto mt-6"
          >
            {t("subtitle")}
          </Text>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-light)]">
                  <Icon
                    size={22}
                    className="text-[var(--color-accent)]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
