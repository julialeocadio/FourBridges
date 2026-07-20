import { LucideIcon, ArrowRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface ServiceDetailCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    items: string[];
    href: string;
    learnMore: string;
}

export default function ServiceDetailCard({
    icon: Icon,
    title,
    description,
    items,
    href,
    learnMore,
}: ServiceDetailCardProps) {
    return (
        <Link
            href={href}
            className="group block h-full">
            <Card className="flex h-full flex-col">
                {/* Icon */}
                <div className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--color-accent-light)]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[var(--color-primary)]">
                    
                    <Icon size={30} className="text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white"/>
                </div>

                {/*Title*/}
                <Heading level={3}>
                    {title}
                </Heading>   

                {/*Description*/}
                <Text className="mt-4">
                    {description}
                </Text>

                {/*Features*/}
                <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <Check size={18} className="text-[var(--color-success)]"/>
                            <span className="text-sm text-[var(--color-secondary)]">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-8
                    font-medium
                    text-[var(--highlight-color)]">
                    {learnMore}
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1"/>
                </div>
            </Card>
        </Link>
    );
}