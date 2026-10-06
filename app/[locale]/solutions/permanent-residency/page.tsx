import ResidencyHero from "@/components/solutions/residency/ResidencyHero";
import ResidencyBenefits from "@/components/solutions/residency/ResidencyBenefits";
import ResidencyServices from "@/components/solutions/residency/ResidencyServices";
import ResidencyCTA from "@/components/solutions/residency/ResidencyCTA";

export const metadata = {
    title: "Residency Abroad | FourBridges",
    description: "Explore your residency abroad opportunities. Discover top destinations and gain global experience.",
};

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