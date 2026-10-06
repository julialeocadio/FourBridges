import WorkHero from "@/components/solutions/work/WorkHero";
import WorkBenefits from "@/components/solutions/work/WorkBenefits";
import WorkServices from "@/components/solutions/work/WorkServices";
import WorkCTA from "@/components/solutions/work/WorkCTA";

export const metadata = {
    title: "Work Abroad | FourBridges",
    description: "Explore the world with FourBridges' work abroad programs. Discover top destinations, gain global experience, and enhance your work opportunities.",
};

export default function WorkAbroadPage() {
    return (
        <>
        <WorkHero />
        <WorkBenefits />
        <WorkServices />
        <WorkCTA />
        </>
    )
}