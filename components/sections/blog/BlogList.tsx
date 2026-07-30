"use client"

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";

import { articles } from "@/data/blog/articles";

export default function BlogList() {
    const t = useTranslations("blog");

    return (
        <Section>
            <Container>

                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle
                        title={t("latestArticles")}
                        subtitle={t("latestSubtitle")} />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <BlogCard
                            key={article.slug}
                            title={t(`articles.${article.slug}.title`)}
                            excerpt={t(`articles.${article.slug}.excerpt`)}
                            image={article.image}
                            slug={article.slug}
                            publishedAt={article.publishedAt}
                            readingTime={article.readingTime}
                            readMore={t("readMore")} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}