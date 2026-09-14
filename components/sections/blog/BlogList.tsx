import { getTranslations } from "next-intl/server";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";

import { getBlogPosts } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";

interface BlogListProps {
  locale: string;
}

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

export default async function BlogList({
  locale,
}: BlogListProps) {
  const t = await getTranslations("blog");

  const posts = await getBlogPosts(locale);

  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title={t("latestArticles")}
            subtitle={t("latestSubtitle")}
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post: any) => {
            const image = post.mainImage
              ? urlFor(post.mainImage)
                  .width(800)
                  .height(450)
                  .auto("format")
                  .url()
              : "images/blog/eb2.jpg";

            return (
              <BlogCard
                key={post._id}
                title={post.title}
                excerpt={post.excerpt || ""}
                image={image}
                slug={post.slug.current}
                publishedAt={
                  post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString(
                        locale
                      )
                    : ""
                }
                readingTime={calculateReadingTime(post.body)}
                readMore={t("readMore")}
              />
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
