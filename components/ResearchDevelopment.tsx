// app/components/ResearchDevelopment.tsx
"use client"; // Este componente usa hooks (useMediaQuery)

import Image from "next/image"; // Mantenha se usar Image em outro lugar
import Link from "next/link";   // Importe Link aqui
import { researchItems } from "@/lib/researchData"; // Importe seus dados de pesquisa
import SectionCard from "./SectionCard"; // Importe a componente SectionCard refatorada
import useMediaQuery from "@/hooks/useMediaQuery"; // Importe o hook useMediaQuery

// Importe as componentes do Shadcn Carousel (DO SEU ARQUIVO MODIFICADO)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselPrevious, // Opcional: botões de navegação
  // CarouselNext,     // Opcional: botões de navegação
} from "@/components/ui/carousel"; // AJUSTE O CAMINHO CONFORME O SEU PROJETO

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

        {/* Renderização condicional: Grid no Desktop, Carrossel no mobile */}
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
          // --- Carousel Layout (Mobile) ---
          // Este div apenas adiciona padding horizontal nas bordas do carrossel.
          // O autoplay é controlado DENTRO da componente Carousel do Shadcn.
          <div className="px-4 -mx-4 animate-fade-in delay-100"> {/* Ajuste de padding/margin para alinhar com o container principal */}
            <Carousel
              opts={{
                align: "start", // Alinha os itens no início do carrossel
                // loop: true, // Opcional: para carrossel infinito
              }}
              className="w-full" // Garante que o carrossel ocupe a largura total deste container
              // disableAutoplay={false} // O Autoplay já é condicional no componente Carousel, não precisa desabilitar aqui a menos que queira desabilitar no mobile tbm.
            >
              {/* CarouselContent contém os itens e adiciona espaçamento (-ml-6) */}
              {/* Ajuste o ml negativo aqui se o pl nos items ou gap no content for diferente no seu components/ui/carousel.tsx */}
              <CarouselContent className="-ml-6">
                {researchItems.map((item) => (
                  // CarouselItem é cada slide. basis-full para 1 item por vista no mobile.
                  // pl-6 compensa o -ml-6 do CarouselContent.
                  // md:basis/lg:basis classes padrão do shadcn, não ativas aqui por causa do isDesktop.
                  <CarouselItem key={item.slug} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    {/* Link envolve o SectionCard dentro do slide */}
                    <Link
                      href={`/research/${item.slug}`}
                      className="block group h-full" // 'block' e 'group', 'h-full' para ajudar na altura consistente no carrossel
                    >
                       {/* SectionCard é o visual, usa h-full */}
                      <SectionCard item={item} />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Botões de navegação (Opcional, descomente se quiser usar) */}
              {/* <CarouselPrevious /> */}
              {/* <CarouselNext /> */}
            </Carousel>
          </div>
        )}
        {/* ------------------------------------------------------ */}

      </div>
    </section>
  );
}