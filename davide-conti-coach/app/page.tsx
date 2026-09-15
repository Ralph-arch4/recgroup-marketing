import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import FloatingCta from "@/components/FloatingCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Method from "@/components/Method";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Programs from "@/components/Programs";
import ScrollProgress from "@/components/ScrollProgress";
import Showreel from "@/components/Showreel";
import Testimonials from "@/components/Testimonials";
import Transformations from "@/components/Transformations";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Showreel />
        <Method />
        <Numbers />
        <Transformations />
        <Programs />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
