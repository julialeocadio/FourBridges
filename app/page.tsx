import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
    </>
  );
}