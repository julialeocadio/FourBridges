import { getTranslations } from "next-intl/server";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";

import { urlFor } from "@/sanity/lib/image";

interface RelatedArticle {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
  body?: any[];
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  locale: string;
}

function calculateReadingTime(body?: any[]) {
  if (!body) {
    return "1 min";
  }

  const text = body
    .filter((block) => block?._type === "block")
    .map((block) =>
      block.children
        ?.map((child: any) => child.text || "")
        .join(" ")
    )
    .join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min`;
}

export default async function RelatedArticles({
  articles,
  locale,
}: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const t = await getTranslations("blog");

  return (
    <Section>
      <Container>
        <SectionTitle
          title={t("relatedTitle")}
          subtitle={t("relatedSubtitle")}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {articles.map((article) => {
            const image = article.mainImage
              ? urlFor(article.mainImage)
                  .width(800)
                  .height(450)
                  .auto("format")
                  .url()
              : "/images/blog/canada.jpg";

            return (
              <BlogCard
                key={article._id}
                title={article.title}
                excerpt={article.excerpt || ""}
                image={image}
                slug={article.slug.current}
                publishedAt={
                  article.publishedAt
                    ? new Date(
                        article.publishedAt
                      ).toLocaleDateString(locale)
                    : ""
                }
                readingTime={calculateReadingTime(
                  article.body
                )}
                readMore={t("readMore")}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
