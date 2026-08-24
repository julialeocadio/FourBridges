import DriverLicenseHero from "@/components/sections/services/driverLicense/driverLicenseHero";
import DriverLicenseAssistance from "@/components/sections/services/driverLicense/driverLicenseAssistance";
import DriverLicenseCTA from "@/components/sections/services/driverLicense/driverLicenseCTA";

export default function DriversLicensePage(){
    return(
        <>
        <DriverLicenseHero />
        <DriverLicenseAssistance />
        <DriverLicenseCTA />
        </>
    )
}