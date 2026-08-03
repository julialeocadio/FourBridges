import { LucideIcon } from "lucide-react";

import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon: Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <Card className="text-center h-full">

      <div
        className="
          mx-auto
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

      <Heading
        level={3}
        className="mt-6"
      >
        {title}
      </Heading>

      <Text className="mt-4">
        {description}
      </Text>

    </Card>
  );
}