import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

import { services } from "@/data/services";

export default function Services() {
    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-3x1 text-center">
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive immigration solutions designed to support your journey."
                    />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            href={service.href ?? "#"}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}