import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Countries from "@/components/sections/Countries";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Countries />
      <CTA />
    </main>
  );
}