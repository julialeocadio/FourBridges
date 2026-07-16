import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Countries from "@/components/sections/Countries";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Countries />
      <CTA />
      <Footer />
    </main>
  );
}