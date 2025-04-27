// components/ContentDetailSection.tsx
import Image from "next/image";

interface ContentItemData { // Renamed interface for broader use
  slug: string;
  title: string;
  imageSrc: string;
  detailedText: string;
}

interface ContentDetailSectionProps { // Renamed interface
  itemData: ContentItemData;
}

export default function ContentDetailSection({ itemData }: ContentDetailSectionProps) {
  const { title, imageSrc, detailedText } = itemData;

  // Split the detailedText into paragraphs based on one or more blank lines
  const paragraphs = detailedText.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);


  return (
    <section className="py-0"> {/* Removed section padding as it's added in the parent pages */}
      <div className="container mx-auto px-4 max-w-4xl"> {/* Added max-w-4xl */}

        {/* Apply font-serif from base layer, just need text color and size */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 text-center md:text-left">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"> {/* Use grid for image/text layout */}
           {/* Image Area */}
          <div className="w-full">
             <Image
              src={imageSrc}
              alt={title}
              width={800} // Provide base width
              height={450} // Provide base height
              className="w-full h-auto rounded-lg shadow-lg object-cover" // Updated shadow
            />
          </div>

          {/* Text Area */}
          <div className="text-muted-foreground leading-relaxed space-y-4"> {/* Use muted-foreground, leading-relaxed, add space-y for paragraph margin */}
            {/* Map over the processed paragraphs */}
            {paragraphs.map((paragraph, index) => (
                // Removed mt-4 on paragraphs, space-y handles it
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}