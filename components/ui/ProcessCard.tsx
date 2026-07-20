import Card from "./Card";
import Heading from "./Heading";
import Text from "./Text";

interface ProcessCardProps {
    step: string;
    title: string;
    description: string;
}

export default function ProcessCard({
    step,
    title,
    description,
}: ProcessCardProps) {
    return (
        <Card className="relative h-full">
            <div
                className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    reounded-full
                    bg-[var(--color-primary)]
                    text-xl
                    font-bold
                    text-white">
                    {step}
                </div>

                <Heading level={3}>
                    {title}
                </Heading>

                <Text className="mt-4">
                    {description}
                </Text>
        </Card>
    );
}