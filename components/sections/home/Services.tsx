import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Highlight from "@/components/ui/Highlight";
import { useTranslations } from "next-intl";

import {
    Globe,
    Languages,
    ScrollText,
} from "lucide-react";

export default function Services() {
    const t = useTranslations("services");
    const services = [
    {
        icon: Globe,
        title: t("s1"),
        description: t("d1"),
        href: "/services/immigration",
    },
    {
        icon: Languages,
        title: t("s2"),
        description: t("d2"),
        href: "/services/translations",
    },
    {
        icon: ScrollText,
        title: t("s3"),
        description: t("d3"),
    },
    ]
    return (
        <Section background="surface">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                        title={<>{t("title1")}<Highlight>{t("title2")}</Highlight></>}
                        subtitle={t("subtitle")}
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