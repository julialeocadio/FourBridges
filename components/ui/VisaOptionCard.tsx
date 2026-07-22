import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface VisaOptionCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    href: string;
    learnMore: string;
}

export default function VisaOptionCard({
    icon: Icon,
    title,
    description,
    features,
    href,
    learnMore,
}: VisaOptionCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <Card className="
                flex
                h-full
                flex-col
                transition-all
                duration-300
                group-hover:-translate-y-1">
                    <div className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[var(--color-accent-light)]">
                            <Icon size={30} className="text-[var(--color-primary)]" />
                        </div>

                        <Heading level={3}>
                            {title}
                        </Heading>

                        <Text className="mt-4">
                            {description}
                        </Text>

                        <div className="mt-6 space-y-3">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-[var(--color-success)]" />

                                    <span className="text-sm">
                                    {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="
                            mt-auto
                            flex
                            items-center
                            gap-2
                            pt-8
                            font-medium
                            text-[var(--highlight-color)]">
                                {learnMore}

                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                </Card>
        </Link>
    );
}
