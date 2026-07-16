import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Highlight from "@/components/ui/Highlight";


import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
    return (
        <Section background="surface">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                    title={<>Why <Highlight>Choose Us</Highlight></>}
                    subtitle="We're committed to delivering reliable, transparent, and personalized immigration and translation services."
                    />
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">
                    {whyChooseUs.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card key={item.title} className="flex gap-6">   

                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-light)]">
                                <Icon
                                    size={30}
                                    color="var(--color-primary)"
                                />
                            </div>

                            <div>
                                <Heading level={3}>
                                    {item.title}
                                </Heading>
                                
                                <Text className="mt-3">
                                    {item.description}
                                </Text>
                            </div> 
                        </Card>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}