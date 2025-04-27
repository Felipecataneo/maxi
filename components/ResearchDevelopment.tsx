import Image from "next/image";
import Link from "next/link";
import { researchItems } from "@/lib/researchData"; // Import data to get slugs

// Custom Card component for these sections (kept from previous version, enhanced styling)
function SectionCard({ imageSrc, title, description, linkHref }: { imageSrc: string; title: string; description: string; linkHref: string }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden flex flex-col border border-border transition-transform hover:scale-[1.02] hover:shadow-lg"> {/* Enhanced card styling with border, better shadow, and hover effect */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Apply font-serif from base layer if not already inherited, just need text color */}
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3> {/* Use foreground color */}
          {/* Removed description rendering as it's empty */}
          {/* <p className="text-gray-600 text-sm mb-4">{description}</p> */}
        </div>
        <Link href={linkHref} className="text-primary hover:underline text-sm font-medium mt-4 inline-flex items-center"> {/* Use primary color, add mt-4, inline-flex items-center */}
          Saiba mais...
          {/* Optional: Add an arrow icon */}
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg> */}
        </Link>
      </div>
    </div>
  );
}

export default function ResearchDevelopment() {
  // Use the data from lib/researchData.ts
  // The items array is already defined there, just need to use it.
  // We need to make sure the objects here match the structure required by SectionCard.
  // Let's use the same data structure for simplicity.

  // Re-defining items here to match the structure expected by the map function
  // and extracting slug for the link.
  const itemsForCards = researchItems.map(item => ({
      imageSrc: item.imageSrc, // Use the imageSrc from the data
      title: item.title,
      description: "", // Description was empty in the image, keep it that way for the card
      linkHref: `/research/${item.slug}`, // Construct the link using the slug
  }));


  return (
    <section id="research-development" className="bg-section-background py-16 md:py-24"> {/* Use section background variable */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in"> {/* Add animation */}
          {/* Apply font-serif from base layer, just need text color and size */}
          <h2 className="text-3xl md:text-4xl text-gray-900">PESQUISA E DESENVOLVIMENTO</h2>
        </div>
        {/* Add animation to the grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-100"> {/* Add lg:grid-cols-3 and animation */}
          {itemsForCards.map((item, index) => (
            <SectionCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              linkHref={item.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}