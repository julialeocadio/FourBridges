import { ReactNode } from "react";

interface CountryHeroProps {
    badge: string;
    title: string;
    subtitle: string;

    primaryButton: string;
    secondaryButton: string;

    primaryHref: string;
    secondaryHref: string;

    features: string[];

    flag: ReactNode;

    countryName: string;

    highlights: {
        icon: React.ReactNode;
        text: string;
    }[];

    benefits: string[];
}

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";

import { CheckCircle2 } from "lucide-react";

export default function CountryHero({
    badge,
    title,
    subtitle,
    
    primaryButton,
    secondaryButton,

    primaryHref,
    secondaryHref,

    features,

    countryName,

    highlights,

    benefits,

    flag,
}: CountryHeroProps) {
    return (
        <Section className="bg-[var(--surface-secondary)]">
            <Container>

                <div className="grid item-center gap-16 lg:grid-cols-2">
                    {/*Left*/}
                    <div>
                        <Badge>
                            {badge}
                        </Badge>
                        
                        <Heading className="mt-6">
                            {title}
                        </Heading>

                        <Text variant="large" className="mt-6">
                            {subtitle}
                        </Text>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href={primaryHref}>
                                {primaryButton}
                            </Button>
                            <Button href="/contact" variant="secondary">
                                {secondaryButton}
                            </Button>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 size={20} className="text-[var(--color-success)]" />

                                    <span className="font-medium">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Right*/}
                    <div className="flex justify-center">
                        <div className="
                            w-full
                            max-w-md
                            rounded-3xl
                            border
                            border-[var(--card-border)]
                            bg-white
                            p-8
                            shadow-xl">
                            
                            {/*Country*/}
                            <div className="flex items-center gap-4">

                                <div className="h-12">
                                    {flag}
                                </div>

                                <Heading level={3}>
                                    {countryName}
                                </Heading>
                            </div>

                            {/*Highlights*/}
                            <div className="mt-8 space-y-4">
                                {highlights.map((item) => (
                                    <div key={item.text} className="flex items-center gap-4">
                                        <div className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[var(--color-accent-light)]">
                                                {item.icon}
                                        </div>

                                        <span className="font-medium">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8 border-t border-[var(--card-border)]" />

                            {/*Benefits*/}

                            <div className="space-y-3">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-[var(--color-success)]" />

                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}