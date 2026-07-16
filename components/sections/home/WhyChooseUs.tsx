import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
    return (
        <Section className="bg-[var(--color-surface)]">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                    title="Why Choose Us"
                    subtitle="We're committed to delivering reliable, transparent, and personalized immigration and translation services."
                    />
                </div>

                <div className="mt-20 grid gap-8 md:grid-cold-2">
                    {whyChooseUs.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                                flex
                                gap-6
                                rounded-3xl
                                bg-white
                                p-8
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow.lg
                                "
                            >   

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent-light)]">
                                <Icon
                                    size={30}
                                    color="var(--color-primary)"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                                
                                <p className="mt-3 leading-7 text-[var(--color-secondary)]">
                                    {item.title}
                                </p>
                            </div> 
                        </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}