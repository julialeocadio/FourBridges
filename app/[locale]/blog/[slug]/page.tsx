import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

import BlogArticle from "@/components/sections/blog/BlogArticle";
import { getBlogPost } from "@/lib/sanity";

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const post = await getBlogPost(slug, locale);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || "",
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || "",
      type: "article",
      publishedTime: post.publishedAt,
      images: post.mainImage
        ? [ { 
              url: urlFor(post.mainImage)
                .width(1200)
                .height(630)
                .auto("format")
                .url(), 
            }, 
          ]
        : undefined,
    },
  };  
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { locale, slug } = await params;

  const post = await getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const article = {
    slug: post.slug?.current || slug,
    title: post.title,
    excerpt: post.excerpt,
    body: post.body || [],
    image: post.mainImage,
    publishedAt: post.publishedAt,
    related: post.relatedPosts || [],
  };

  return (
    <BlogArticle 
      article={article}
      locale={locale} 
    />
  );
}
