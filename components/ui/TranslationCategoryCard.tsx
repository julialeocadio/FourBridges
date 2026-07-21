import { LucideIcon } from "lucide-react";
import Card from "./Card";
import Heading from "./Heading";

interface TranslationCategoryCardProps {
    icon: LucideIcon;
    title: string;
    items: string[];
}

export default function TranslationCategoryCard({
    icon: Icon,
    title,
    items,
}: TranslationCategoryCardProps) {
    return (
        <Card className="h-full">
            <div className="
            mb-6
            flex
            h-14
            items-center
            justify-center
            rounded-2xl
            bg-[var(--color-accent-light)]">
                
                <Icon size={28} className="text-[var(--color-primary)]"/>
            </div>

            <Heading level={3}>
                {title}
            </Heading>

            <ul className="mt-6 space-y-3">
                {items.map((item) => (
                    <li key={item} className="text-[var(--color-secondary)]">
                        • {item}
                    </li>
                ))}
            </ul>
        </Card>
    );
}
