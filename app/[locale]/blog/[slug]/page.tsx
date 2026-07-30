import { notFound } from "next/navigation";
import { articles } from "@/data/blog/articles";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const article = articles.find(
    (article) => article.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">
          {article.slug}
        </h1>

        <p className="mt-6">
          This is the blog article page.
        </p>
      </div>
    </main>
  );
}