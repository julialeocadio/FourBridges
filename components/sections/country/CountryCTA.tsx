"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface CountryCTAProps {
    title: string;
    subtitle: string;

    consultationButton: string;
    whatsappButton: string;

    consultationHref: string;
     benefits: string[];
}

export default function CountryCTA({
    title,
    subtitle,
    consultationButton,
    whatsappButton,
    consultationHref,
    benefits,
}: CountryCTAProps) {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    return (
        <Section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
            
            <Container size="md">
                <div className="relative z-10 mx-auto max-w-3xl text-center">

                    <Heading className="text-white">
                        {title}
                    </Heading>

                    <Text variant="large" className="mt-6 text-white/80">
                        {subtitle}
                    </Text>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Button href={consultationHref}>
                            {consultationButton}
                        </Button>

                        <Button 
                            href={`https://wa.me/${phone}`}
                            variant="whatsapp"
                            target="_blank"
                            rel="nopener noreferrer" >
                                <span className="inline-flex items-center gap-2">
                                <FaWhatsapp size={24} />
                                {whatsappButton}
                                </span>
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8">

                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[var(--color-success)]"/>

                                <span className="font-medium">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

        </Section>
    );
}