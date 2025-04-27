import Image from "next/image";
import Link from "next/link";
import { innovationItems } from "@/lib/innovationData"; // Import data to get slugs and images

// Custom Card component (kept from previous version)
function SectionCard({ imageSrc, title, description, linkHref }: { imageSrc: string; title: string; description: string; linkHref: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
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
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          {/* Removed description rendering as it's empty */}
          {/* <p className="text-gray-600 text-sm mb-4">{description}</p> */}
        </div>
        <Link href={linkHref} className="text-blue-600 hover:underline text-sm font-medium">
          Saiba mais...
        </Link>
      </div>
    </div>
  );
}

export default function InnovationEntrepreneurship() {
  // Use the data from lib/innovationData.ts
  const itemsForCards = innovationItems.map(item => ({
      imageSrc: item.imageSrc, // Use the imageSrc from the data
      title: item.title,
      description: "", // Description was empty in the image, keep it that way for the card
      linkHref: `/innovation/${item.slug}`, // Construct the link using the slug
  }));

  return (
    <section id="innovation-entrepreneurship" className="py-16 md:py-24 bg-gray-50"> {/* Light grey background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900">INOVAÇÃO E EMPREENDEDORISMO</h2> {/* Font style from reference */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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