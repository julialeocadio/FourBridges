import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LucideIcon } from "lucide-react";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface SolutionCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    learnMore: string;
}

export default function SolutionCard({
    icon: Icon,
    title,
    description,
    href,
    learnMore,
}: SolutionCardProps) {
    return (
        <Link
            href={href}
            className="group block h-full"
    >
      <Card className="flex h-full flex-col">
        <div className="flex h-full flex-col">

          <div
            className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[var(--color-accent-light)]
            "
          >
            <Icon
              size={30}
              className="text-[var(--color-primary)]"
            />
          </div>

          <Heading level={3}>
            {title}
          </Heading>

          <Text className="mt-4">
            {description}
          </Text>

          <div
            className="
              mt-auto
              flex
              items-center
              gap-2
              pt-8
              font-medium
              text-[var(--highlight-color)]
            "
          >
            {learnMore}

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>

        </div>
      </Card>
    </Link>
  );
}
