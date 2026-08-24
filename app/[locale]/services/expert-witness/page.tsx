import ExpertWitnessHero from "@/components/sections/services/expertWitness/ExpertWitnessHero";
import ExpertWitnessHelps from "@/components/sections/services/expertWitness/ExpertWitnessIncludes";
import ExpertWitnessMatters from "@/components/sections/services/expertWitness/ExpertWitnessMatters";
import ExpertWitnessCTA from "@/components/sections/services/expertWitness/ExpertWitnessCTA";

export default function ExpertWitnessPage(){
    return (
        <>
        <ExpertWitnessHero />
        <ExpertWitnessHelps />
        <ExpertWitnessMatters />
        <ExpertWitnessCTA />
        </>
    )
}