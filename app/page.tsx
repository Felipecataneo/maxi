import Hero from "@/components/Hero";
import ResearchDevelopment from "@/components/ResearchDevelopment"; // New component
import InnovationEntrepreneurship from "@/components/InnovationEntrepreneurship"; // New component
import ContactMap from "@/components/ContactMap"; // New component
 // Modified component

// Removed imports for Features, About, Methodology, CTA

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchDevelopment />
      <InnovationEntrepreneurship />
      <ContactMap />
      {/* Footer is included in layout.tsx */}
    </>
  );
}