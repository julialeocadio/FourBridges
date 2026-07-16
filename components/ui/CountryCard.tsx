import Link from "next/link";
import { ArrowRight } from "lucide-react";

import * as Flags from "country-flag-icons/react/3x2";


import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface CountryCardProps {
    code: string;
    name: string;
    visas: string[];
    href: string;
}

export default function CountryCard({
    code,
    name,
    visas,
    href,
}: CountryCardProps) {
    const Flag = Flags[code as keyof typeof Flags];
    return (
        <Link
            href={href}
            className="group block h-full">
            <Card className="flex h-full flex-col">
                <div className="mb-6 flex items-center gap-3">
                    {Flag && (
                        <Flag className="h-8 w-auto rounded-sm shadow-sm" />
                    )}

                    <Heading level={3}>
                        {name}
                    </Heading>
                   
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    {visas.map((visa) => (
                        <span
                            key={visa}
                            className="
                                rounded-full
                                bg-[var(--badge-bg)]
                                px-3
                                py-1
                                text-xs
                                font-medium
                                text-[var(--badge-text)]">
                            {visa}
                        </span>
                    ))}
                </div>

            <div className="mt-auto flex items-center gap-2 pt-8 font-medium text-[var(--highlight-color)]">
                Learn More 
                <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"/>
            </div>
            </Card>
        </Link>
    )
}