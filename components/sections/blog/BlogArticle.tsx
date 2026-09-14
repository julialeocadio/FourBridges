import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import RelatedArticles from "./RelatedArticles";
import BlogCTA from "./BlogCTA";
import { urlFor } from "@/sanity/lib/image";

interface BlogArticleProps {
  article: {
    slug: string;
    title: string;
    excerpt?: string;
    body: any[];
    image?: any;
    publishedAt?: string;
    readingTime?: string;
    related?: any[];
  };
  locale: string;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Text variant="large" className="leading-8">
        {children}
      </Text>
    ),

    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="mt-6 mb-3 text-lg font-semibold">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 pl-6 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-2 leading-8">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2 leading-8">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li>{children}</li>
    ),

    number: ({ children }) => (
      <li>{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong>{children}</strong>
    ),

    em: ({ children }) => (
      <em>{children}</em>
    ),

    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      return (
        <div className="my-10 overflow-hidden rounded-3xl">
          <Image
            src={urlFor(value).width(1200).auto("format").url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full"
          />
        </div>
      );
    },
  },
};

function calculateReadingTime(body: any[]) {
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

export default function BlogArticle({
  article,
  locale,
}: BlogArticleProps) {

  const readingTime =
    article.readingTime ||
    calculateReadingTime(article.body);

  return (
    <Section>
      <Container size="md">

        {/* Hero */}

        <div className="mx-auto max-w-4xl">

          <Heading>
            {article.title}
          </Heading>

          {article.excerpt && (
            <Text
              variant="large"
              className="mt-6"
            >
              {article.excerpt}
            </Text>
          )}

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">

            {article.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(article.publishedAt).toLocaleDateString()}
              </div>
            )}

            <div className="flex items-center gap-2">
              <Clock size={16} />
              {readingTime}
            </div>

          </div>

        </div>

        {/* Featured Image */}

        {article.image && (
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl">

            <Image
              src={urlFor(article.image)
                .width(1600)
                .auto("format")
                .url()}
              alt={article.image.alt || article.title}
              fill
              className="object-cover"
            />

          </div>
        )}

        {/* Article Content */}

        <div className="mx-auto mt-16 max-w-3xl">

          <PortableText
            value={article.body}
            components={portableTextComponents}
          />

        </div>

        <RelatedArticles
          articles={article.related ?? []}
          locale={locale}
        />

      </Container>

      <BlogCTA />

    </Section>
  );
}
