"use client";

import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import RelatedArticles from "./RelatedArticles";
import BlogCTA from "./BlogCTA";

interface BlogArticleProps {
  article: {
    slug: string;
    image: string;
    publishedAt: string;
    readingTime: string;
    related: string[];
  };
}

export default function BlogArticle({
  article,
}: BlogArticleProps) {
  const t = useTranslations("blog");

  return (
    <Section>
      <Container size="md">

        {/* Hero */}

        <div className="mx-auto max-w-4xl">

          <Heading>
            {t(`articles.${article.slug}.title`)}
          </Heading>

          <Text
            variant="large"
            className="mt-6"
          >
            {t(`articles.${article.slug}.excerpt`)}
          </Text>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {article.publishedAt}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              {article.readingTime}
            </div>

          </div>

        </div>
                <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl">

          <Image
            src={article.image}
            alt={t(`articles.${article.slug}.title`)}
            fill
            className="object-cover"
          />

        </div>
                <div className="mx-auto mt-16 max-w-3xl">

          {(t.raw(
            `articles.${article.slug}.content`
          ) as string[]).map((paragraph, index) => (

            <Text
              key={index}
              variant="large"
              className="leading-8"
            >
              {paragraph}
            </Text>


          ))}

        </div>
        <RelatedArticles slugs={article.related} />
      </Container>
      <BlogCTA />
    </Section>
  );
}