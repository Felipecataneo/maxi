import Hero from "@/components/Hero";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import InnovationEntrepreneurship from "@/components/InnovationEntrepreneurship";
import ContactMap from "@/components/ContactMap";

export default function Home() {
  return (
    <>
      {/* Hero has its own background */}
      <Hero />

      {/* Section 1: Research & Development - Use section background */}
      <div className="bg-section-background">
        <ResearchDevelopment />
      </div>

      {/* Section 2: Innovation & Entrepreneurship - Use main background */}
      <div className="bg-background">
        <InnovationEntrepreneurship />
      </div>

      {/* Section 3: Contact & Map - Use section background */}
      <div className="bg-section-background">
        <ContactMap />
      </div>

      {/* Footer is included in layout.tsx */}
    </>
  );
}