import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Highlight from "@/components/ui/Highlight";

import { services } from "@/data/services";

export default function Services() {
    return (
        <Section background="surface">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                        title={<>Our <Highlight>Services</Highlight></>}
                        subtitle="Comprehensive immigration solutions designed to support your journey."
                    />
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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