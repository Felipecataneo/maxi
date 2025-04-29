// components/AboutSection.tsx
"use client";

import Image from "next/image";
import { directors } from "@/lib/directorsData";
import { Card } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const introFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Helper to get computed padding (not strictly needed for the main calculation now,
// but good to keep if needed elsewhere or for debugging)
// const getPaddingValue = (element: HTMLElement, property: string): number => {
//   return parseInt(window.getComputedStyle(element)[property as any], 10) || 0;
// };


export function AboutSection() {
  const mainSectionRef = useRef<HTMLElement>(null);
  const horizontalWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context;

    const setupScrollTrigger = () => {
      const mainSection = mainSectionRef.current;
      const horizontalWrapper = horizontalWrapRef.current;

      if (!mainSection || !horizontalWrapper) return;

      ctx = gsap.context(() => {
        // IMPORTANT: Kill existing ScrollTriggers within this context on refresh
        // and reset the wrapper position.
        // If markers are true, this helps prevent ghost markers.
        ScrollTrigger.getAll().forEach(st => st.kill());
        gsap.set(horizontalWrapper, { x: 0 });


        // Simplified calculation: total scrollable width is wrapper's scrollWidth
        // minus the available viewport width. scrollWidth already includes padding.
        const distanceToScroll = Math.max(horizontalWrapper.scrollWidth - mainSection.clientWidth, 0);


        gsap.to(horizontalWrapper, {
          x: -distanceToScroll, // Translate left by the calculated distance
          ease: "none",
          scrollTrigger: {
            trigger: mainSection,
            pin: true,
            start: "top top",
             // The end of the scroll is when we have scrolled exactly the distance required
            // This means the right edge of the horizontalWrapper aligns with the
            // right edge of the mainSection. Since horizontalWrapper has paddingRight,
            // the content's right edge will be paddingRight pixels from the end.
            end: () => `+=${distanceToScroll}`,
            scrub: 1,
            invalidateOnRefresh: true, // Recalculate on window resize/refresh
            anticipatePin: 1,
            markers: false, // Set to true for debugging if needed
            // onUpdate: self => { // Optional: Debugging ScrollTrigger progress
            //   console.log("progress", self.progress.toFixed(3), "direction", self.direction, "velocity", self.getVelocity(), "x", gsap.getProperty(horizontalWrapper, "x"));
            // }
          },
        });

         // Add a small timeout to ensure GSAP and ScrollTrigger have
         // fully initialized before forcing a refresh.
         // This helps resolve potential initial layout/positioning bugs.
         const refreshTimeout = setTimeout(() => {
           ScrollTrigger.refresh(true);
         }, 100); // Increased timeout slightly for robustness


         return () => {
            if (ctx) ctx.revert(); // Clean up GSAP context on component unmount/re-render
            clearTimeout(refreshTimeout);
         };

      }, mainSectionRef); // GSAP context scope

       // Clean up function for useLayoutEffect
       return () => {
         if (ctx) ctx.revert();
       };

    };

    // Initial setup
    setupScrollTrigger();

    // No need for extra timeout here, setupScrollTrigger already includes one

  }, []); // Re-run effect only if dependencies change (none needed here for refs)


  return (
    <>
      {/* ----------- SEÇÃO SOBRE O INSTITUTO ----------- */}
      {/* Reduced bottom padding to lessen space before next section */}
      <div className="py-20 md:py-28 bg-section-background pb-8 md:pb-12"> {/* Kept pb reduced */}
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8"> {/* Kept mb reduced */}
            <motion.h1
              variants={introFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Sobre o Instituto Maximize: Visão e Propósito
            </motion.h1>
            <motion.div
              variants={introFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4"
            >
              <p>
                O Instituto Maximize Ciência, Tecnologia e Inovação é dedicado a impulsionar o progresso por meio da pesquisa aplicada e do desenvolvimento de soluções inovadoras. Fundado com o propósito de ser um catalisador de transformação, conectamos o conhecimento acadêmico às demandas da sociedade e da indústria.
              </p>
              <p>
                Atuamos na fronteira do saber, promovendo a colaboração multidisciplinar e a criação de ecossistemas vibrantes de P&D&I. Nossa missão é gerar impacto positivo, fomentando o empreendedorismo e construindo um futuro mais tecnológico e sustentável para o Brasil.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ----------- SEÇÃO HORIZONTAL ----------- */}
      {/* min-h-screen remains for pinning duration */}
      <section
        ref={mainSectionRef}
        className="relative overflow-hidden min-h-screen bg-section-background" // Added background here too
      >
        {/* Removed h-screen, justify-center, items-center */}
        {/* Added vertical padding (py) */}
        {/* Kept py for vertical spacing within the pinned section */}
        <div
          className="w-full flex flex-col py-12 md:py-16 px-4 md:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-12 text-foreground text-center shrink-0">
            Nossa Diretoria
          </h2>

          {/* Wrapper horizontal dos cards */}
          {/* Kept responsive padding pl/pr and gap */}
          <div
            ref={horizontalWrapRef}
            className="w-max flex flex-row flex-nowrap gap-12 items-stretch py-4 pl-4 md:pl-16 lg:pl-32 pr-4 md:pr-16 lg:pr-32" // Responsive padding
          >
            {directors.map((director, i) => (
              // Adjusted card wrapper width for consistency and slight responsiveness
              <div key={director.name} className="w-72 md:w-80 lg:w-96 shrink-0 h-full"> {/* Kept responsive width */}
                <Card className="flex flex-col items-center p-6 w-full h-full">
                  <div className="relative w-28 h-36 mb-4 shrink-0">
                    <Image
                      src={director.photoUrl}
                      alt={director.name}
                      fill
                      sizes="112px"
                      className="rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center flex-grow">
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {director.name}
                    </h3>
                    <span className="text-primary text-sm mb-1">
                      {director.role}
                    </span>
                    <p className="text-muted-foreground text-sm mb-3 flex-grow break-words">
                      {director.degree}
                    </p>
                  </div>
                  {director.linkedin && (
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:opacity-80 transition-opacity shrink-0"
                      aria-label={`LinkedIn profile of ${director.name}`}
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}