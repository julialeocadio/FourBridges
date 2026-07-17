import {
  CheckCircle2,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Highlight from "@/components/ui/Highlight";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { useTranslations } from "next-intl";



export default function Hero() {
  const t = useTranslations("hero");
  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
  ];
  return (
    <Section 
      spacing="lg"
      className="bg-[image:">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Badge className="mb-6">
              {t("badge")}
            </Badge>

            <Heading
              level={1}
              className="max-w-xl"
            >
              {t("title1")}{" "}
              <Highlight>
                {t("title2")}
              </Highlight>
            </Heading>

            <Text
              variant="body"
              className="mt-8 max-w-xl"
            >
              {t("description")}
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/contact">
                {t("primaryButton")}
              </Button>

              <Button
                href="/services"
                variant="secondary"
              >
                {t("secondaryButton")}
              </Button>

            </div>

            <div className="mt-12 flex flex-wrap gap-6">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-[var(--feature-text)]"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[var(--highlight-color)]"
                  />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <div
              className="
                flex
                h-[520px]
                items-center
                justify-center
                rounded-[var(--radius-lg)]
                bg-[image:var(--illustration-bg)]
                shadow-[var(--shadow-md)]
              "
            >

              <p className="text-lg font-semibold text-[var(--illustration-text)]">
                Hero Illustration
              </p>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}