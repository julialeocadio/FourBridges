"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function FamilyLawServices() {
  const t = useTranslations("family.services");
  const locale = useLocale();

  const services = [
    "internationalDivorce",
    "internationalCustody",
    "internationalChildAbduction",
    "internationalChildSupport",
    "foreignFamilyDecisions",
    "internationalMarriage",
    "internationalProperty",
    "internationalFiliation",
    "internationalAdoption",
    "transnationalDomesticViolence",
  ] as const;

  return (
    <Section className="pt-8 md:pt-8">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading className="mt-3">
            {t("title")}
          </Heading>

          <Text className="mt-4">
            {t("subtitle")}
          </Text>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex-1">
                <Text className="px-2 mt-4 text-lg text-center font-bold leading-8 text-gray-900">
                  {t(`${service}.title`)}
                </Text>

                <Text className="mt-3 text-sm leading-6 text-gray-600">
                  {t(`${service}.description`)}
                </Text>

                <ul className="mt-3 space-y-2">
                  {(
                    t.raw(`${service}.areas`) as string[]
                  ).map((area, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c77ef7]"
                      />

                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4">
                <Button
                  href={`/contact`}
                >
                  {t("learnMore")}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
