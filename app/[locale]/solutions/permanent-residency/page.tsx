import ResidencyHero from "@/components/solutions/residency/ResidencyHero";
import ResidencyBenefits from "@/components/solutions/residency/ResidencyBenefits";
import ResidencyServices from "@/components/solutions/residency/ResidencyServices";
import ResidencyCTA from "@/components/solutions/residency/ResidencyCTA";

export default function ResidencyPage() {
    return (
        <>
        <ResidencyHero />
        <ResidencyBenefits />
        <ResidencyServices />
        <ResidencyCTA />
        </>
    );
}