import StudyHero from "@/components/solutions/study/StudyHero";
import StudyBenefits from "@/components/solutions/study/StudyBenefits";
import StudyServices from "@/components/solutions/study/StudyServices";
import StudyCTA from "@/components/solutions/study/StudyCTA";

export const metadata = {
    title: "Study Abroad | FourBridges",
    description: "Explore the world with FourBridges' study abroad programs. Discover top destinations, gain global experience, and enhance your education.",
};

export default function StudyAbroadPage() {
    return (
        <>
        <StudyHero />
        <StudyBenefits />
        <StudyServices />
        <StudyCTA />
        </>
    );
}