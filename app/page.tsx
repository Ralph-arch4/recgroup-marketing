import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Manifesto from "@/components/Manifesto";
import Results from "@/components/Results";
import ForWho from "@/components/ForWho";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Manifesto />
        <Results />
        <ForWho />
        <HowItWorks />
        <Services />
        <TechStack />
        <Portfolio />
        <Pricing />
        <Team />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
