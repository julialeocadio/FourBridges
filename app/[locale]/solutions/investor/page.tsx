import InvestorHero from "@/components/solutions/investor/InvestorHero";
import InvestorBenefits from "@/components/solutions/investor/InvestorBenefits";
import InvestorServices from "@/components/solutions/investor/InvestorServices";
import InvestorCTA from "@/components/solutions/investor/InvestorCTA";

export const metadata = {
    title: "Invest Abroad | FourBridges",
    description: "Explore the world with invenstments abroad. Discover top destinations, gain global experience, and enhance your opportunities.",
};

export default function InvestorPage() {
    return (
        <>
            <InvestorHero />
            <InvestorBenefits />
            <InvestorServices />
            <InvestorCTA />
        </>
    )
}