import GenealogyHero from "@/components/sections/services/genealogy/GenealogyHero";
import GenealogyAbout from "@/components/sections/services/genealogy/GenealogyAbout";
import GenealogyResearch from "@/components/sections/services/genealogy/GenealogyResearch";
import GenealogyCTA from "@/components/sections/services/genealogy/GenealogyCTA";

export default function GenealogyPage(){
    return(
        <>
            <GenealogyHero />
            <GenealogyAbout />
            <GenealogyResearch />
            <GenealogyCTA />
        </>
    )
}