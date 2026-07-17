import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Highlight from "@/components/ui/Highlight";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");
  return (
    <Section>
      <Container size="md" className="relative overflow-hidden">
        
        <div
          className="
            rounded-[var(--radius-lg)]
            bg-gradient-to-br
            from-[var(--color-primary)]
            to-[var(--color-secondary)]
            px-8
            py-16
            text-center
            shadow-[var(--shadow-md)]
            lg:px-16
          "
        >
          <Heading
            level={2}
            className="text-white"
          >
            {t("title1")}{" "}
            <Highlight>{t("title2")}</Highlight>
          </Heading>

          <Text
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[var(--color-accent-light)]
            "
          >
            {t("description")}
          </Text>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <Button href="/contact">
              {t("button1")}
            </Button>

            <Button
              href="/services"
              variant="ghost"
            >
              {t("button2")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}