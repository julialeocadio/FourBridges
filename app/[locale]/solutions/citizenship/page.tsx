import CitizenshipHero from "@/components/solutions/citizenship/CitizenshipHero";
import CitizenshipBenefits from "@/components/solutions/citizenship/CitizenshipBenefits";
import CitizenshipServices from "@/components/solutions/citizenship/CitizenshipSupport";
import CitizenshipCTA from "@/components/solutions/citizenship/CitizenshipCTA";

export const metadata = {
    title: "Citizenship Abroad | FourBridges",
    description: "Explore your citizenship opportunities. Discover top destinations and gain global experience.",
};

export default function CitizenshipPage () {
    return (
        <>
        <CitizenshipHero />
        <CitizenshipBenefits />
        <CitizenshipServices />
        <CitizenshipCTA />
        </>
    );
}