import Hero from "@/components/Hero";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import InnovationEntrepreneurship from "@/components/InnovationEntrepreneurship";
import ContactMap from "@/components/ContactMap";

export default function Home() {
  return (
    <>
      {/* Each section component will now be responsible for its own background and padding */}
      <Hero />
      <ResearchDevelopment />
      <InnovationEntrepreneurship />
      <ContactMap />
      {/* Footer is included in layout.tsx */}
    </>
  );
}