"use client"

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Highlight from "@/components/ui/Highlight";
import { useTranslations } from "next-intl";
import {
    ShieldCheck,
    Globe2,
    Languages,
    BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {
    const t = useTranslations("whyChooseUs");
    const whyChooseUs = [
    {
        icon: ShieldCheck,
        title: t("r1"),
        description: t("d1"),
    },
    {
        icon: Globe2,
        title: t("r2"),
        description: t("d2"),
    },
    {
        icon: Languages,
        title: t("r3"),
        description: t("d3"),
    },
    {
        icon: BadgeCheck,
        title: t("r4"),
        description: t("d4"),
    },
    ];
    return (
        <Section background="surface">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                    title={<>{t("why")} <Highlight>{t("choose")}</Highlight></>}
                    subtitle={t("text")}
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