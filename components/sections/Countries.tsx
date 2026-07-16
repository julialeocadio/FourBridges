import Container from "@/components/ui/Container";
import CountryCard from "@/components/ui/CountryCard";
import Highlight from "@/components/ui/Highlight";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { countries } from "@/data/countries";

export default function Countries() {
  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title={
              <>
                Countries We <Highlight>Serve</Highlight>
              </>
            }
            subtitle="Professional immigration assistance tailored to the regulations and opportunities of each destination."
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <CountryCard
              key={country.name}
              {...country}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}