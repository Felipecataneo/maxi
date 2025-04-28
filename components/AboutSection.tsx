// components/AboutSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { directors } from "@/lib/directorsData"; // Import your directors data
import { Card } from "@/components/ui/card"; // Import shadcn Card
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import { motion } from "framer-motion"; // Import framer-motion

// Animation variant for fading in (used for directors cards)
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    // This section forms the main content area of the /about page
    <section className="py-20 md:py-28 bg-section-background">
      <div className="container mx-auto px-4">

        {/* --- NEW: Intro Section (Title and Text) --- */}
        {/* Add text-center for alignment, mb-16 for space below */}
        {/* Use max-w-3xl and mx-auto to center the text block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           {/* Main Title for the About Page */}
           {/* Use h1 for the primary title of the page, apply font-heading, text-foreground */}
           <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in">
             Sobre o Instituto Maximize: Visão e Propósito
           </h1>
           {/* Introductory Text */}
           {/* Use muted-foreground for text color, leading-relaxed for line spacing, space-y for paragraph spacing */}
           {/* Apply animation and delay */}
           <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 animate-fade-in delay-100">
             <p>
               O Instituto Maximize Ciência, Tecnologia e Inovação é dedicado a impulsionar o progresso por meio da pesquisa aplicada e do desenvolvimento de soluções inovadoras. Fundado com o propósito de ser um catalisador de transformação, conectamos o conhecimento acadêmico às demandas da sociedade e da indústria.
             </p>
             <p>
               Atuamos na fronteira do saber, promovendo a colaboração multidisciplinar e a criação de ecossistemas vibrantes de P&D&I. Nossa missão é gerar impacto positivo, fomentando o empreendedorismo e construindo um futuro mais tecnológico e sustentável para o Brasil.
             </p>
           </div>
        </div>
        {/* --- END NEW: Intro Section --- */}


        {/* --- Existing: "Nossa Diretoria" Section --- */}
        {/* Add animation and delay to sequence after the intro */}
        {/* Use h2 for this sub-section title */}
        <h2 className="text-3xl md:text-4xl font-heading mb-12 text-foreground text-center animate-fade-in delay-200">
          Nossa Diretoria
        </h2>

        {/* Existing Directors Grid */}
        {/* Adjust animation delay to sequence after the title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-300">
          {directors.map((director, i) => (
            <motion.div
              key={director.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              // Adjust transition delay for each card to sequence within the grid animation
              transition={{ duration: 0.6, delay: (i * 0.15) + 0.4 }}
              className="flex"
            >
              <Card className="flex flex-col items-center p-6 shadow-md w-full">
                 <div className="relative w-24 h-24 mb-4">
                   <Image
                     src={director.photoUrl}
                     alt={director.name}
                     fill
                     sizes="96px"
                     className="rounded-full object-cover border-2 border-primary"
                   />
                 </div>

                <h3 className="font-semibold text-lg text-foreground text-center">{director.name}</h3>
                <span className="text-primary text-sm mb-1 text-center">{director.role}</span>
                <p className="text-muted-foreground text-sm mb-3 text-center">{director.degree}</p>
                {director.linkedin && (
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity"
                    aria-label={`LinkedIn profile of ${director.name}`}
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
        {/* --- End Existing: "Nossa Diretoria" Section --- */}

      </div>
    </section>
  );
}