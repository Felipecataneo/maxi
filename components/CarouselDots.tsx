// components/CarouselDots.tsx
"use client";

import { cn } from "@/lib/utils";
import { useCarousel } from "@/components/ui/carousel"; // Import useCarousel hook

export default function CarouselDots() {
  // Get the necessary data from the carousel context
  const { api, scrollSnaps, selectedIndex } = useCarousel();

  // Don't render anything if there's no api or less than 2 slides
  if (!api || scrollSnaps.length < 2) {
    return null;
  }

  return (
    // Container for the dots, centered with some top margin
    <div className="flex justify-center mt-6 space-x-2">
      {/* Map over the scrollSnaps array to render a dot for each slide */}
      {scrollSnaps.map((_, index) => ( // We only need the index, not the value of the snap
        <button
          key={index} // Use index as the key
          onClick={() => api.scrollTo(index)} // Scroll to the slide when clicked
          className={cn(
            "size-2 rounded-full bg-muted-foreground/50 transition-colors duration-200", // Default dot style
            index === selectedIndex && "bg-primary size-3" // Active dot style (larger and primary color)
          )}
          aria-label={`Go to slide ${index + 1}`} // Accessibility label
        />
      ))}
    </div>
  );
}