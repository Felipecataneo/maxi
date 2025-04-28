// components/CardStackMobile.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import SectionCard from "./SectionCard";

// Define the structure of an item (using types from your data files)
import { researchItems } from "@/lib/researchData";
type ItemData = typeof researchItems[0];

interface CardStackMobileProps {
  items: ItemData[];
  baseUrl: string;
}

// Define base vertical stagger (total displacement per card) and scale effect
const BASE_Y_DISPLACEMENT = 35; // Vertical displacement (adjust as needed)
const BASE_SCALE_REDUCTION = 0.1; // Scale reduction (adjust as needed)
const BASE_DURATION = 0.6; // Animation duration

export default function CardStackMobile({ items, baseUrl }: CardStackMobileProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // State to hold the ordered list of items for animation
  const [orderedItems, setOrderedItems] = useState<ItemData[]>(items.slice().reverse());

  // Refs and State for height measurement
  const topCardRef = useRef<HTMLAnchorElement>(null); // Ref for the top card
  const [cardHeight, setCardHeight] = useState(0); // State to store card height

  // Function to apply the stacking transforms based on current order
  const applyStackTransforms = (cards: HTMLAnchorElement[], animate: boolean = true) => {
     const duration = animate ? BASE_DURATION : 0;
     const ease = animate ? "power3.out" : "none";

     gsap.to(cards, {
       y: (i) => i * BASE_Y_DISPLACEMENT, // Total vertical displacement based on index
       scale: (i) => 1 - (i * BASE_SCALE_REDUCTION), // Scale down for depth
       zIndex: (i) => cards.length - i, // Set z-index based on new order (first in array is on top)
       duration: duration,
       ease: ease,
       stagger: animate ? {
         each: 0.05, // Small delay between cards animating
       } : 0,
       transformOrigin: "center center",
       onComplete: () => {
           setIsAnimating(false); // End animation state
       }
     });
  };

  // Effect to measure the card height after the initial render
  useEffect(() => {
      if (topCardRef.current && cardHeight === 0) {
          const height = topCardRef.current.clientHeight;
          if (height > 0) {
            setCardHeight(height);
            console.log("Measured card height:", height);
          }
      }
  }, [cardHeight]);

  // Initial setup and animation effect
  useEffect(() => {
    if (!sliderRef.current || cardHeight === 0) return;

    const cards = gsap.utils.toArray<HTMLAnchorElement>(sliderRef.current.querySelectorAll(".card-stack-card"));
    if (cards.length === 0) return;

    gsap.set(cards, {
       position: "absolute", top: 0, left: "50%", x: "-50%",
       width: "95%", maxWidth: "400px",
       y: 0, scale: 1, zIndex: 0,
     });

     applyStackTransforms(cards, true);

     return () => {
       if (sliderRef.current) {
          gsap.killTweensOf(sliderRef.current.querySelectorAll(".card-stack-card"));
       }
     };
  }, [orderedItems, cardHeight]);


  // Handle click on the card wrapper (triggers reorder animation)
  const handleCardWrapperClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
     const clickedElement = event.target as HTMLElement;
     const isTitleOrInternalLink = clickedElement.closest('.card-stack-card h3, .card-stack-card a:not(.card-stack-card)');

     if (isTitleOrInternalLink) {
         return;
     }

     if (isAnimating) {
       event.preventDefault();
       return;
     }

     setIsAnimating(true);

     const clickedCard = event.currentTarget;
     const clickedSlug = clickedCard.dataset.slug;
     const clickedItemIndex = orderedItems.findIndex(item => item.slug === clickedSlug);

     if (clickedItemIndex === -1 || clickedItemIndex === 0) {
         setIsAnimating(false);
         return;
     }

     const clickedItem = orderedItems[clickedItemIndex];
     const newOrderedItems = [
        clickedItem,
        ...orderedItems.filter((_, index) => index !== clickedItemIndex)
     ];

     setOrderedItems(newOrderedItems);

     event.preventDefault();
  };


  return (
    <div className="card-stack-container relative px-4 py-8 overflow-hidden">
      <div ref={sliderRef} className="card-stack-slider relative w-full max-w-sm mx-auto"
           style={{
              minHeight: cardHeight > 0
                ? `${(items.length - 1) * BASE_Y_DISPLACEMENT + cardHeight}px`
                : '300px'
           }}
      >
        {orderedItems.map((item, index) => {
           return (
             <Link
                ref={index === 0 ? topCardRef : null}
                data-slug={item.slug}
                key={item.slug}
                href={`${baseUrl}/${item.slug}`}
                className="card-stack-card block group"
                onClick={handleCardWrapperClick}
                style={{
                   position: 'absolute',
                   top: 0,
                   left: '50%',
                   transform: 'translate(-50%, 0px)',
                   width: '95%',
                   maxWidth: '400px',
                   zIndex: orderedItems.length - index,
                   pointerEvents: 'auto',
                }}
             >
               {/* PASS THE INDEX AS stackIndex PROP HERE */}
               <SectionCard item={item} stackIndex={index}>
                  {/* SectionCard content */}
               </SectionCard>
             </Link>
           );
        })}
      </div>
    </div>
  );
}