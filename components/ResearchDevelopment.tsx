// app/components/ResearchDevelopment.tsx
"use client"; // Este componente usa hooks (useMediaQuery)

import Image from "next/image"; // Mantenha se usar Image em outro lugar
import Link from "next/link";   // Importe Link aqui
import { researchItems } from "@/lib/researchData"; // Importe seus dados de pesquisa
import SectionCard from "./SectionCard"; // Importe a componente SectionCard refatorada
import useMediaQuery from "@/hooks/useMediaQuery"; // Importe o hook useMediaQuery
// Importe a nova componente para o card stack mobile
import CardStackMobile from "./CardStackMobile";

// Remova ou comente os imports do Shadcn Carousel se não usá-los MAIS para o mobile view
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   // CarouselPrevious,
//   // CarouselNext,
// } from "@/components/ui/carousel";

// Defina a query para detectar o breakpoint desktop (md: 768px)
const MD_BREAKPOINT_QUERY = '(min-width: 768px)';

export default function ResearchDevelopment() {
  // Use o hook para detectar se a tela é desktop (>= md)
  const isDesktop = useMediaQuery(MD_BREAKPOINT_QUERY);

  return (
    <section id="research-development" className="bg-section-background py-16 md:py-24">
      <div className="container mx-auto px-4"> {/* Container principal com padding horizontal padrão */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">PESQUISA E DESENVOLVIMENTO</h2>
        </div>

        {/* Renderização condicional: Grid no Desktop, Card Stack no mobile */}
        {isDesktop ? (
          // --- Grid Layout (Desktop) ---
          // Este div é o container do grid para telas maiores.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in delay-100">
            {researchItems.map((item) => (
              // Cada item do grid é um Link que envolve o SectionCard
              <Link
                href={`/research/${item.slug}`}
                key={item.slug}
                className="block group" // 'block' para o Link se comportar como bloco no grid, 'group' para hover effects
              >
                {/* SectionCard é o visual, usa h-full para preencher a altura do item do grid */}
                <SectionCard item={item} />
              </Link>
            ))}
          </div>
        ) : (
          // --- Card Stack Layout (Mobile) ---
          // Renderiza o novo componente CardStackMobile
          <CardStackMobile items={researchItems} baseUrl="/research" />
        )}
        {/* ------------------------------------------------------ */}

      </div>
    </section>
  );
}