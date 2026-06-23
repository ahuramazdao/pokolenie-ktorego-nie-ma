import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ParadoxSection from "@/components/ParadoxSection";
import RoadmapSection from "@/components/RoadmapSection";
import ValueProposition from "@/components/ValueProposition";
import AuthorSection from "@/components/AuthorSection";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import ImpliesBox from "@/components/ImpliesBox";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import CartModal from "@/components/CartModal";
import ScrollProgress from "@/components/ScrollProgress";
import Section from "@/components/Section";
// Importy wykresów zakomentowane na razie
// import Chart1Births from "@/components/charts/Chart1Births";
// import Chart2AgeStructure from "@/components/charts/Chart2AgeStructure";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CartModal />
      
      <main className="flex flex-col">
        <Hero />
        <TrustStrip />
        <ParadoxSection />
        
        {/* Tu przyjdą sekcje z wykresami (tymczasowy placeholder) */}
        <Section className="bg-white">
          <div className="text-center text-muted">
            <h2 className="text-2xl font-bold mb-4">Sekcja Analityczna (Wykresy w budowie)</h2>
            <p>Tu będą renderowane komponenty wykresów SVG: Chart1Births, Chart2AgeStructure, itd.</p>
          </div>
        </Section>
        
        <RoadmapSection />
        <ValueProposition />
        <AuthorSection />
        
        <Section className="bg-bg2 border-y border-border" id="faq">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[40px] font-black text-ink">Często zadawane pytania</h2>
          </div>
          <FAQ />
        </Section>

        <FinalCTA />
      </main>
      
      <Footer />
      <StickyCTA />
    </>
  );
}
