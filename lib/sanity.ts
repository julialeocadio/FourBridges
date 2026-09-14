import { client } from "@/sanity/lib/client";

export async function getBlogPost(
  slug: string,
  language: string
) {
  const query = `*[
    _type == "post"
    && language == $language
    && slug.current == $slug
  ][0]{
    ...,

    "relatedPosts": relatedPosts[]->{
      _id,
      title,
      slug,
      language,
      excerpt,
      mainImage,
      publishedAt,
      body
    }
  }`;

  const post = await client.fetch(query, {
    slug,
    language,
  });

  if (!post) {
    return null;
  }

  return {
    ...post,
    relatedPosts: (post.relatedPosts || []).filter(
      (relatedPost: any) =>
        relatedPost.language === language
    ),
  };
}

export async function getBlogPosts(language: string) {
  const query = `*[
    _type == "post"
    && language == $language
  ] | order(publishedAt desc)`;

  return client.fetch(query, {
    language,
  });
}
