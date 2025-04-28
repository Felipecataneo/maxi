// app/about/page.tsx

import { AboutSection } from "@/components/AboutSection"; // Import the component
import { Metadata } from "next"; // Import Metadata type

// Define page metadata
export const metadata: Metadata = {
  title: "Sobre Nós | Maxi Institute", // Specific title for the About page
  description: "Conheça a diretoria e a equipe por trás do Instituto Maximize Ciência, Tecnologia e Inovação.", // Specific description
};

export default function AboutPage() {
  return (
    // Wrap the component in a div with consistent padding and background,
    // similar to how other pages (research/[slug], innovation/[slug], documents) are structured.
    // The AboutSection component itself also has padding, which is fine.
    // Using bg-background here, as AboutSection already applies bg-section-background internally.
    <div className="py-0"> {/* No extra padding here, AboutSection has its own */}
       <AboutSection /> {/* Render the About section component */}
    </div>
  );
}