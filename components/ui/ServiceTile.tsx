import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface ServiceTileProps {
  title: string;
  description: string;
  href: string;
  learnMore: string
}

export default function ServiceTile({
  title,
  description,
  href,
  learnMore,
}: ServiceTileProps) {
  return (
    <Link
      href={href}
      className="group block h-full"
    >
      <Card
        className="
          flex
          h-full
          flex-col
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-[var(--highlight-color)]
          group-hover:shadow-lg
        "
      >
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
      </Card>
    </Link>
  );
}