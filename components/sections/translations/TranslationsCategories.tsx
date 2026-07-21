"use client"

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import TranslationCategoryCard from "@/components/ui/TranslationCategoryCard";

import {
    Briefcase,
    Cog,
    Megaphone,
    GraduationCap,
    HeartPulse,
    FileText,
    FileVideoCamera,
    BookType,
    FileUser,
} from "lucide-react";

export default function TranslationCategories() {
    const t = useTranslations("translationsPage.categories");
    const categories = [
        {
            icon: Briefcase,
            title: t("business.title"),
            items: t.raw("business.items") as string[],
        },
        {
            icon: Cog,
            title: t("technical.title"),
            items: t.raw("technical.items") as string[],
        },
        {
            icon: Megaphone,
            title: t("marketing.title"),
            items: t.raw("marketing.items") as string[],
        },
        {
            icon: GraduationCap,
            title: t("academic.title"),
            items: t.raw("academic.items") as string[],
        },
        {
            icon: HeartPulse,
            title: t("medical.title"),
            items: t.raw("medical.items") as string[],
        },
        {
            icon: FileText,
            title: t("documents.title"),
            items: t.raw("documents.items") as string[],
        },
        {
            icon: FileVideoCamera,
            title: t("audiovisual.title"),
            items: t.raw("audiovisual.items") as string[],
        },
        {
            icon: BookType,
            title: t("editorial.title"),
            items: t.raw("editorial.items") as string[],
        },
        {
            icon: FileUser,
            title: t("personal.title"),
            items: t.raw("personal.items") as string[],
        },
    ];

    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle title={t("title")} subtitle={t("subtitle")} />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {categories.map((category) => (
                        <TranslationCategoryCard key={category.title}
                        {...category} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}