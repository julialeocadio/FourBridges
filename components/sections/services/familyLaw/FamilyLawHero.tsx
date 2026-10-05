import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function FamilyLawHero() {
  const t = useTranslations("family.hero");

  return (
    <Section className="relative overflow-hidden">
      <Container>
        <div className="relative mx-auto max-w-4xl py-10 text-center md:py-14">
          {/* Decorative background element */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c77ef7]/10 blur-3xl"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c77ef7]">
            {t("eyebrow")}
          </p>

          <Heading
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </Heading>

          <Text className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            {t("subtitle")}
          </Text>

          <div className="mt-8 flex justify-center">
            <Button
              href="/contact"
              variant="primary"
              className="group inline-flex items-center gap-2"
            >
              {t("consultation")}
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}