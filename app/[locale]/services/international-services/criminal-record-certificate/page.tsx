import CriminalRecordHero from "@/components/sections/services/criminalRecordCertificate/criminalRecordsHero";
import CriminalRecordAssistance from "@/components/sections/services/criminalRecordCertificate/criminalRecordAssistance";
import CriminalRecordCTA from "@/components/sections/services/criminalRecordCertificate/criminalRecordsCTA";

export default function CriminalRecordCertificatePage(){
    return(
        <>
        <CriminalRecordHero />
        <CriminalRecordAssistance />
        <CriminalRecordCTA />
        </>
    )
}