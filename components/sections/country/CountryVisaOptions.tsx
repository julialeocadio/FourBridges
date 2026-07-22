import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import VisaOptionCard from "@/components/ui/VisaOptionCard";
import { LucideIcon } from "lucide-react";

interface CountryVisaOptionsProps {
    title: string;
    subtitle: string;
    visas: {
        icon: LucideIcon;
        title: string;
        description: string;
        features: string[];
        href: string;
    }[];
    learnMore: string;
}

export default function CountryVisaOptions({
    title,
    subtitle,
    visas,
    learnMore,
}: CountryVisaOptionsProps) {
    return(
       <Section id="visas">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <SectionTitle title={title} subtitle={subtitle} />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {visas.map((visa) => (
                        <VisaOptionCard 
                            key={visa.title} 
                            {...visa}
                            learnMore={learnMore} />
                    ))}
                </div>
            </Container>
       </Section> 
    );
}