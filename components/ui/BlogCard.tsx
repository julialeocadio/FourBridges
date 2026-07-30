import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    publishedAt: string;
    readingTime: string;
    readMore: string;
}

export default function BlogCard({
    title,
    excerpt,
    image,
    slug,
    publishedAt,
    readingTime,
    readMore,
}: BlogCardProps) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="group block h-full">
            <Card className="flex h-full flex-col overflow-hidden p-0">
                {/*Cover Image*/}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="
                         object-cover
                         transition-transform
                         duration-500
                         group-hover:scale-105" />
                </div>

                {/*Content*/}
                <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                                {publishedAt}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                                {readingTime}
                        </div>
                    </div>
                    <Heading level={3}>
                        {title}
                    </Heading>
                    <Text className="mt-4">
                        {excerpt}
                    </Text>

                    <div
                        className="
                            mt-auto
                            flex
                            items-center
                            gap-2
                            pt-8
                            font-medium
                            text-[var(--highlight-color)]">
                                {readMore}
                        <ArrowRight
                            size={18}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1" />
                    </div>
                </div>
            </Card>
        </Link>
    )
}