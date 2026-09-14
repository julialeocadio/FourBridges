import BlogHero from "@/components/sections/blog/BlogHero";
import BlogList from "@/components/sections/blog/BlogList";

interface BlogPageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function BlogPage({
    params,
}: BlogPageProps) {
    const { locale } = await params;

    return (
        <>
            <BlogHero />
            <BlogList locale={locale} />
        </>
    );
}