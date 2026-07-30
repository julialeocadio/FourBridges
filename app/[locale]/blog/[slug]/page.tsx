import { notFound } from "next/navigation";

import BlogArticle from "@/components/sections/blog/BlogArticle";
import { articles } from "@/data/blog/articles";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return <BlogArticle article={article} />;
}