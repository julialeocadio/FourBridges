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

const features = [
  "Personalized Guidance",
  "Global Support",
  "Multilingual Team",
];

export default function Hero() {
  return (
    <Section 
      spacing="lg"
      className="bg-[image:">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Badge className="mb-6">
              Trusted Immigration Experts
            </Badge>

            <Heading
              level={1}
              className="max-w-xl"
            >
              Your Trusted Partner for{" "}
              <Highlight>
                Immigration Services
              </Highlight>
            </Heading>

            <Text
              variant="body"
              className="mt-8 max-w-xl"
            >
              We simplify immigration processes and provide
              professional translation services for
              individuals, families, students, and businesses
              worldwide.
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/contact">
                Book a Consultation
              </Button>

              <Button
                href="/services"
                variant="secondary"
              >
                Explore Services
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