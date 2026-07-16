import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Highlight from "@/components/ui/Highlight";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

export default function CTA() {
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
            Ready to Start Your{" "}
            <Highlight>Immigration Journey?</Highlight>
          </Heading>

          <Text
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[var(--color-accent-light)]
            "
          >
            Whether you're planning to study, work, reunite with your
            family, or begin a new life abroad, our experienced team 
            is ready to help you.
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
              Book a Consultation
            </Button>

            <Button
              href="/services"
              variant="ghost"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}