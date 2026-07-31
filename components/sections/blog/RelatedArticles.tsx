import { useTranslations } from "next-intl";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";

import { articles } from "@/data/blog/articles";

interface RelatedArticlesProps {
  slugs: string[];
}

export default function RelatedArticles({
  slugs,
}: RelatedArticlesProps) {
  const t = useTranslations("blog");

  const relatedArticles = articles.filter((article) =>
    slugs.includes(article.slug)
  );

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("relatedTitle")}
          subtitle={t("relatedSubtitle")}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {relatedArticles.map((article) => (
            <BlogCard
              key={article.slug}
              title={t(`articles.${article.slug}.title`)}
              excerpt={t(`articles.${article.slug}.excerpt`)}
              image={article.image}
              slug={article.slug}
              publishedAt={article.publishedAt}
              readingTime={article.readingTime}
              readMore={t("readMore")}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}